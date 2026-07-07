"use client";

import { useState, useRef, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Bot, Send, User, Settings2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ChatbotPage() {
  const { settings, updateSettings } = useStore();
  
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'Hello! I am your AI grammar assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [geminiKey, setGeminiKey] = useState(settings.geminiKey);
  const [chatgptKey, setChatgptKey] = useState(settings.chatgptKey);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSaveKeys = () => {
    updateSettings({ geminiKey, chatgptKey });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput("");
    setIsLoading(true);

    const apiKey = settings.chatProvider === 'gemini' ? settings.geminiKey : settings.chatgptKey;

    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: "Please configure your API key in the settings above to use the chatbot." }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      if (settings.chatProvider === 'gemini') {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `You are an expert English grammar tutor. Please help the user with the following query. Keep the response concise and use markdown formatting where appropriate. Query: ${userMsg}` }] }]
          })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        setMessages(prev => [...prev, { role: 'bot', content: data.candidates[0].content.parts[0].text }]);
      } else {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are an expert English grammar tutor. Keep responses concise and use markdown." },
              { role: "user", content: userMsg }
            ]
          })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        setMessages(prev => [...prev, { role: 'bot', content: data.choices[0].message.content }]);
      }
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'bot', content: `Error: ${err.message || 'Failed to fetch response'}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">AI Chatbot</h2>
          <p className="text-muted-foreground text-sm">Powered by Gemini / ChatGPT</p>
        </div>
        
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "outline", size: "sm", className: "gap-2" })}>
            <Settings2 className="w-4 h-4" /> Setup API
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chatbot API Settings</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Google Gemini API Key</Label>
                <Input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="AIzaSy..." />
                <p className="text-xs text-muted-foreground">Get a free key at Google AI Studio.</p>
              </div>
              <div className="space-y-2">
                <Label>OpenAI ChatGPT API Key</Label>
                <Input type="password" value={chatgptKey} onChange={(e) => setChatgptKey(e.target.value)} placeholder="sk-..." />
              </div>
              <Button onClick={handleSaveKeys} className="w-full">Save Keys</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
              )}
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-wrap text-sm md:text-base ${
                m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-muted rounded-tl-sm'
              }`}>
                {m.role === 'user' ? (
                  m.content
                ) : (
                  <ReactMarkdown 
                    components={{
                      p: ({node, ...props}) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-3 space-y-1" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-3 space-y-1" {...props} />,
                      li: ({node, ...props}) => <li {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                      em: ({node, ...props}) => <em className="italic" {...props} />
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                )}
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start animate-pulse">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="px-4 py-2 rounded-2xl bg-muted rounded-tl-sm flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="p-3 border-t bg-card/50">
          <form onSubmit={handleSend} className="flex w-full gap-2">
            <Input 
              placeholder="Ask a grammar question..." 
              value={input} 
              onChange={e => setInput(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
