"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { questionBank, syllabusData } from "@/data/syllabus";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Clock, Sparkles, Zap, Flame, Rocket, Target, BookOpen, Layers } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";

interface QuizProps {
  mode: "test" | "practice";
}

export function Quiz({ mode }: QuizProps) {
  const { addTestScore } = useStore();

  const [topic, setTopic] = useState<string>("all");
  const [questionType, setQuestionType] = useState<"mcq" | "fill" | "mixed" | "boolean" | "error" | "jumbled">("mixed");
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [useTimer, setUseTimer] = useState<boolean>(true);
  const [timerMinutes, setTimerMinutes] = useState<number>(5);

  const [activeQuiz, setActiveQuiz] = useState<any[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeQuiz && !showResults && mode === "test" && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && activeQuiz && !showResults && mode === "test" && useTimer) {
      finishQuiz();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, activeQuiz, showResults, mode, useTimer]);

  const startQuiz = () => {
    // Filter by topic and level
    let filtered = questionBank.filter(q => q.level === level);
    if (topic !== "all") {
      filtered = filtered.filter(q => q.topic === topic);
    }
    
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));
    
    if (selected.length === 0) {
      alert("No questions available for this combination. Try changing the topic or difficulty.");
      return;
    }

    setActiveQuiz(selected);
    setCurrentIdx(0);
    setAnswers(new Array(selected.length).fill(-1));
    setShowResults(false);
    
    if (mode === "test" && useTimer) {
      setTimeLeft(timerMinutes * 60);
    } else {
      setTimeLeft(-1); // Disabled timer
    }
  };

  const handleAnswer = (val: string) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = parseInt(val);
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentIdx < (activeQuiz?.length || 0) - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
    if (mode === "test" && activeQuiz) {
      let score = 0;
      activeQuiz.forEach((q, i) => {
        if (answers[i] === q.ans) score++;
      });
      addTestScore({
        date: new Date().toISOString(),
        score,
        total: activeQuiz.length,
        topic: topic === "all" ? "Mixed" : topic
      });
    }
  };

  if (showResults && activeQuiz) {
    let score = 0;
    activeQuiz.forEach((q, i) => {
      if (answers[i] === q.ans) score++;
    });

    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <Card className="text-center border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-black mb-4">
              {score} <span className="text-2xl text-muted-foreground">/ {activeQuiz.length}</span>
            </div>
            <Progress value={(score / activeQuiz.length) * 100} className="h-4 w-full" />
          </CardContent>
          <CardFooter className="justify-center">
            <Button onClick={() => { setActiveQuiz(null); setShowResults(false); }}>
              Try Again
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Review Answers</h3>
          {activeQuiz.map((q, i) => {
            const isCorrect = answers[i] === q.ans;
            const notAnswered = answers[i] === -1;
            return (
              <Card key={i} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-destructive'}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" /> : <XCircle className="w-5 h-5 text-destructive mt-0.5" />}
                    <CardTitle className="text-base leading-snug">{i + 1}. {q.q}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="mb-2">
                    <span className="text-muted-foreground">Your Answer: </span>
                    <span className="font-semibold">{notAnswered ? "Skipped" : q.options[answers[i]]}</span>
                  </div>
                  {!isCorrect && (
                    <div className="mb-2">
                      <span className="text-muted-foreground">Correct Answer: </span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{q.options[q.ans]}</span>
                    </div>
                  )}
                  <Alert className="mt-3 bg-muted/50">
                    <AlertTitle>Explanation</AlertTitle>
                    <AlertDescription>{q.explanation}</AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  if (activeQuiz) {
    const q = activeQuiz[currentIdx];
    const isAnswered = answers[currentIdx] !== -1;
    const progress = ((currentIdx + 1) / activeQuiz.length) * 100;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-muted-foreground">Question {currentIdx + 1} of {activeQuiz.length}</span>
          <div className="flex items-center gap-3">
            {mode === "test" && useTimer && timeLeft > 0 && (
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${timeLeft < 30 ? 'bg-destructive/20 text-destructive' : 'bg-secondary text-secondary-foreground'}`}>
                <Clock className="w-4 h-4" />
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
              </div>
            )}
            <Dialog>
              <DialogTrigger render={<Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" />}>
                Cancel
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Exit Quiz?</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to exit this session? Your current progress will be lost.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                  <DialogClose render={<Button variant="outline" />}>
                    Resume
                  </DialogClose>
                  <Button variant="destructive" onClick={() => { setActiveQuiz(null); setShowResults(false); }}>
                    Yes, Exit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Progress value={progress} className="h-2" />

        <Card className="mt-6 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl leading-snug">{q.q}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={answers[currentIdx].toString()} onValueChange={handleAnswer} className="space-y-3">
              {q.options.map((opt: string, i: number) => {
                const isSelected = answers[currentIdx] === i;
                const showPracticeFeedback = mode === "practice" && isAnswered;
                const isCorrect = i === q.ans;
                let bgClass = "bg-card";
                if (showPracticeFeedback) {
                  if (isSelected && isCorrect) bgClass = "bg-green-500/20 border-green-500";
                  else if (isSelected && !isCorrect) bgClass = "bg-destructive/20 border-destructive";
                  else if (isCorrect) bgClass = "bg-green-500/10 border-green-500/50 border-dashed";
                }

                return (
                  <div key={i} className={`flex items-center space-x-2 border rounded-lg p-4 transition-colors ${isSelected ? (mode==='practice' ? bgClass : 'border-primary bg-primary/5') : 'hover:bg-muted'} ${mode==='practice' ? bgClass : ''}`}>
                    <RadioGroupItem value={i.toString()} id={`opt-${i}`} disabled={mode === "practice" && isAnswered} />
                    <Label htmlFor={`opt-${i}`} className="flex-1 cursor-pointer">{opt}</Label>
                  </div>
                );
              })}
            </RadioGroup>

            {mode === "practice" && isAnswered && (
              <Alert className="mt-6 border-primary bg-primary/5">
                <AlertTitle>Explanation</AlertTitle>
                <AlertDescription>{q.explanation}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-end bg-muted/20 pt-4">
            <Button onClick={nextQuestion} disabled={mode === "test" && !isAnswered}>
              {currentIdx === activeQuiz.length - 1 ? (mode === "test" ? "Submit Test" : "Finish") : "Next"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            {mode === "test" ? <Target className="w-5 h-5 text-primary" /> : <Rocket className="w-5 h-5 text-primary" />}
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground tracking-tight">
              {mode === "test" ? "Configure Your Test" : "Configure Practice Session"}
            </CardTitle>
            <p className="text-muted-foreground mt-0.5 text-xs">
              {mode === "test" ? "Set your parameters and prepare to be challenged." : "Customize your learning experience and level up your grammar."}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6 bg-gradient-to-b from-background to-muted/10">
        
        {/* Level Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-bold flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">1</span> 
            Select Difficulty Level
          </Label>
          <div className="grid grid-cols-3 gap-3">
            <div 
              onClick={() => setLevel("beginner")}
              className={`cursor-pointer rounded-xl border p-3 flex flex-col items-center gap-1.5 transition-all duration-200 hover:scale-[1.02] ${level === 'beginner' ? 'border-primary bg-primary/5 shadow-sm shadow-primary/10' : 'border-border hover:border-primary/50'}`}
            >
              <Sparkles className={`w-5 h-5 ${level === 'beginner' ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="text-center">
                <h4 className="font-semibold text-xs">Beginner</h4>
              </div>
            </div>
            
            <div 
              onClick={() => setLevel("intermediate")}
              className={`cursor-pointer rounded-xl border p-3 flex flex-col items-center gap-1.5 transition-all duration-200 hover:scale-[1.02] ${level === 'intermediate' ? 'border-blue-500 bg-blue-500/5 shadow-sm shadow-blue-500/10' : 'border-border hover:border-blue-500/50'}`}
            >
              <Zap className={`w-5 h-5 ${level === 'intermediate' ? 'text-blue-500' : 'text-muted-foreground'}`} />
              <div className="text-center">
                <h4 className="font-semibold text-xs">Intermediate</h4>
              </div>
            </div>

            <div 
              onClick={() => setLevel("advanced")}
              className={`cursor-pointer rounded-xl border p-3 flex flex-col items-center gap-1.5 transition-all duration-200 hover:scale-[1.02] ${level === 'advanced' ? 'border-orange-500 bg-orange-500/5 shadow-sm shadow-orange-500/10' : 'border-border hover:border-orange-500/50'}`}
            >
              <Flame className={`w-5 h-5 ${level === 'advanced' ? 'text-orange-500' : 'text-muted-foreground'}`} />
              <div className="text-center">
                <h4 className="font-semibold text-xs">Advanced</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-bold flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">2</span> 
            Select Topic
          </Label>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={topic === "all" ? "default" : "outline"}
              onClick={() => setTopic("all")}
              size="sm"
              className={`rounded-full transition-all ${topic === 'all' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              <Layers className="w-3 h-3 mr-1.5" /> Mixed
            </Button>
            {syllabusData.map(t => (
              <Button 
                key={t.id}
                variant={topic === t.id ? "default" : "outline"}
                onClick={() => setTopic(t.id)}
                size="sm"
                className={`rounded-full transition-all ${topic === t.id ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
              >
                <BookOpen className="w-3 h-3 mr-1.5 opacity-50" /> {t.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Question Type Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-bold flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">3</span> 
            Select Question Type
          </Label>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={questionType === "mcq" ? "default" : "outline"}
              onClick={() => setQuestionType("mcq")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'mcq' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              Choose the best
            </Button>
            <Button 
              variant={questionType === "fill" ? "default" : "outline"}
              onClick={() => setQuestionType("fill")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'fill' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              Fill in the blank
            </Button>
            <Button 
              variant={questionType === "mixed" ? "default" : "outline"}
              onClick={() => setQuestionType("mixed")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'mixed' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              Mixed
            </Button>
            <Button 
              variant={questionType === "boolean" ? "default" : "outline"}
              onClick={() => setQuestionType("boolean")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'boolean' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              True or False
            </Button>
            <Button 
              variant={questionType === "error" ? "default" : "outline"}
              onClick={() => setQuestionType("error")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'error' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              Error Identification
            </Button>
            <Button 
              variant={questionType === "jumbled" ? "default" : "outline"}
              onClick={() => setQuestionType("jumbled")}
              size="sm"
              className={`rounded-full transition-all ${questionType === 'jumbled' ? 'shadow-sm shadow-primary/20 scale-105' : 'hover:scale-105'}`}
            >
              Sentence Rearrangement
            </Button>
          </div>
        </div>

        {/* Question Count Slider */}
        <div className="space-y-4 bg-card border rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-bold flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">4</span> 
              Number of Questions
            </Label>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-xs border border-primary/20">
              {numQuestions} Questions
            </div>
          </div>
          <div className="px-1 pt-2 pb-1">
            <Slider 
              defaultValue={[5]} 
              max={50} 
              step={5} 
              min={5}
              onValueChange={(vals: any) => setNumQuestions(Array.isArray(vals) ? vals[0] : vals)}
              className="w-full cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>

        {/* Timer Config (Test Mode Only) */}
        {mode === "test" && (
          <div className="space-y-3 p-4 border border-dashed rounded-xl bg-muted/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Clock className="w-16 h-16" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <Label className="text-sm font-bold flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">5</span> 
                Enable Timer
              </Label>
              <Switch checked={useTimer} onCheckedChange={setUseTimer} />
            </div>
            
            {useTimer && (
              <div className="pt-2 flex items-center gap-3 relative z-10 animate-in fade-in slide-in-from-top-2">
                <Label className="text-sm">Time limit (Min):</Label>
                <Input 
                  type="number" 
                  min={1} 
                  max={120} 
                  value={timerMinutes} 
                  onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 5)} 
                  className="w-20 text-sm font-semibold text-center h-9 rounded-lg border-primary/30 focus-visible:ring-primary"
                />
              </div>
            )}
          </div>
        )}

        <div className="pt-2">
          <Button 
            onClick={startQuiz} 
            className="w-full h-11 text-base font-bold shadow-md shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200 bg-gradient-to-r from-primary to-primary/80"
          >
            {mode === "test" ? (
              <>Start Test <Target className="ml-2 w-4 h-4" /></>
            ) : (
              <>Start Practice <Rocket className="ml-2 w-4 h-4" /></>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
