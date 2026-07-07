"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Check, Sun, Moon, Laptop, Bot, BookOpen } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const { settings, updateSettings, currentUser, users, updateUser, changeUsername } = useStore();
  const { setTheme, theme } = useTheme();

  // Account Management State
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangingUsername, setIsChangingUsername] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleThemeChange = (val: 'light' | 'dark' | 'system') => {
    setTheme(val);
    updateSettings({ theme: val });
  };

  const handleProviderChange = (val: 'gemini' | 'chatgpt') => {
    updateSettings({ chatProvider: val });
  };

  const handleChangeUsername = () => {
    if (!currentUser) return;
    if (newUsername.trim().length < 3) {
      toast.error("Username must be at least 3 characters.");
      return;
    }
    if (users[newUsername.trim()]) {
      toast.error("Username already exists.");
      return;
    }
    changeUsername(currentUser, newUsername.trim());
    setNewUsername("");
    setIsChangingUsername(false);
    toast.success("Username successfully updated!");
  };

  const handleChangePassword = () => {
    if (!currentUser) return;
    if (newPassword.trim().length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    updateUser(currentUser, { password: newPassword });
    setNewPassword("");
    setIsChangingPassword(false);
    toast.success("Password successfully updated!");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300 pb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold tracking-tight">Settings</h2>
        <p className="text-muted-foreground text-lg">Manage your app preferences and account details</p>
      </div>

      <Card className="border-primary/10 shadow-sm">
        <CardHeader>
          <CardTitle>Account Management</CardTitle>
          <CardDescription>Update your username and password.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Username Change */}
          <div className="space-y-3 bg-muted/30 p-4 rounded-xl border">
            <Label className="text-base font-semibold">Change Username</Label>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter new username" 
                value={isChangingUsername ? newUsername : (currentUser || "")} 
                onChange={(e) => setNewUsername(e.target.value)} 
                disabled={!isChangingUsername}
              />
              <Button 
                onClick={isChangingUsername ? handleChangeUsername : () => { setNewUsername(currentUser || ""); setIsChangingUsername(true); }}
                variant={isChangingUsername ? "default" : "secondary"}
                className="w-32 transition-all"
              >
                {isChangingUsername ? "Save" : "Change"}
              </Button>
            </div>
            {isChangingUsername && (
              <p className="text-xs text-muted-foreground animate-in fade-in">
                Note: Changing your username will securely migrate all your progress to the new name.
              </p>
            )}
          </div>

          {/* Password Change */}
          <div className="space-y-3 bg-muted/30 p-4 rounded-xl border">
            <Label className="text-base font-semibold">Change Password</Label>
            <div className="flex gap-3">
              <Input 
                type="password" 
                placeholder={isChangingPassword ? "Enter new password" : "••••••••"} 
                value={isChangingPassword ? newPassword : ""} 
                onChange={(e) => setNewPassword(e.target.value)} 
                disabled={!isChangingPassword}
              />
              <Button 
                onClick={isChangingPassword ? handleChangePassword : () => setIsChangingPassword(true)}
                variant={isChangingPassword ? "default" : "secondary"}
                className="w-32 transition-all"
              >
                {isChangingPassword ? "Save" : "Change"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/10 shadow-sm">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-1 bg-muted/50 p-1.5 rounded-xl">
            <Button 
              variant={theme === 'light' ? 'default' : 'ghost'} 
              className={`w-full justify-center gap-2 rounded-lg transition-all ${theme === 'light' ? 'shadow-sm' : ''}`}
              onClick={() => handleThemeChange('light')}
            >
              <Sun className="w-4 h-4" /> <span className="hidden sm:inline">Light</span>
            </Button>
            <Button 
              variant={theme === 'dark' ? 'default' : 'ghost'} 
              className={`w-full justify-center gap-2 rounded-lg transition-all ${theme === 'dark' ? 'shadow-sm' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              <Moon className="w-4 h-4" /> <span className="hidden sm:inline">Dark</span>
            </Button>
            <Button 
              variant={theme === 'system' ? 'default' : 'ghost'} 
              className={`w-full justify-center gap-2 rounded-lg transition-all ${theme === 'system' ? 'shadow-sm' : ''}`}
              onClick={() => handleThemeChange('system')}
            >
              <Laptop className="w-4 h-4" /> <span className="hidden sm:inline">System</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/10 shadow-sm overflow-hidden">
        <CardHeader className="bg-primary/5 border-b">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Bot className="w-5 h-5" /> Chatbot Provider
          </CardTitle>
          <CardDescription>Select which AI model handles your grammar questions.</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-muted/50 p-1.5 rounded-xl">
            <Button 
              variant={settings.chatProvider === 'gemini' ? 'default' : 'ghost'} 
              className={`w-full justify-center rounded-lg transition-all ${settings.chatProvider === 'gemini' ? 'shadow-sm' : ''}`}
              onClick={() => handleProviderChange('gemini')}
            >
              Google Gemini (Recommended)
            </Button>
            <Button 
              variant={settings.chatProvider === 'chatgpt' ? 'default' : 'ghost'} 
              className={`w-full justify-center rounded-lg transition-all ${settings.chatProvider === 'chatgpt' ? 'shadow-sm' : ''}`}
              onClick={() => handleProviderChange('chatgpt')}
            >
              OpenAI ChatGPT
            </Button>
          </div>

          <div className="bg-muted p-5 rounded-xl border relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl"></div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              How to get your {settings.chatProvider === 'gemini' ? 'Gemini' : 'ChatGPT'} API Key
            </h3>
            
            {settings.chatProvider === 'gemini' ? (
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>Google provides an extremely fast, high-quality AI model for developers. Getting a key is free and takes just 2 minutes.</p>
                <ol className="list-decimal list-inside space-y-2 ml-1">
                  <li>Go to the <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">Google AI Studio <ExternalLink className="w-3 h-3" /></a></li>
                  <li>Sign in with your Google Account.</li>
                  <li>Click the prominent <strong>"Create API key"</strong> button.</li>
                  <li>Copy the long string starting with <code className="bg-background px-1 py-0.5 rounded">AIzaSy...</code></li>
                  <li>Paste it into the API Setup menu on the <strong className="text-foreground">Chatbot page</strong> in this app!</li>
                </ol>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>OpenAI provides the industry standard ChatGPT model. You must have a funded OpenAI developer account to use their API.</p>
                <ol className="list-decimal list-inside space-y-2 ml-1">
                  <li>Go to the <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">OpenAI API Platform <ExternalLink className="w-3 h-3" /></a></li>
                  <li>Sign in with your OpenAI Account.</li>
                  <li>Click <strong>"Create new secret key"</strong>.</li>
                  <li>Copy the string starting with <code className="bg-background px-1 py-0.5 rounded">sk-...</code> (You won't be able to see it again!)</li>
                  <li>Paste it into the API Setup menu on the <strong className="text-foreground">Chatbot page</strong> in this app.</li>
                </ol>
              </div>
            )}
          </div>
          
        </CardContent>
      </Card>
      
      <Card className="border-primary/10 shadow-sm overflow-hidden">
        <CardHeader className="bg-primary/5 border-b">
          <CardTitle className="flex items-center gap-2 text-primary">
            <BookOpen className="w-5 h-5" /> Dictionaries Links 📚
          </CardTitle>
          <CardDescription>Quick access to Cambridge Dictionary for translations.</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 space-y-3">
          <div className="flex flex-col gap-3">
            <a 
              href="https://dictionary.cambridge.org/dictionary/english-hindi/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-primary hover:underline group"
            >
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">1. English to Hindi</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
            
            <a 
              href="https://dictionary.cambridge.org/dictionary/english-tamil/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-primary hover:underline group"
            >
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">2. English to Tamil</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
            
            <a 
              href="https://dictionary.cambridge.org/dictionary/english/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-primary hover:underline group"
            >
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">3. English to English</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
