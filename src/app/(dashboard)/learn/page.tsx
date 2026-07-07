"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { syllabusData } from "@/data/syllabus";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LearnContent } from "./learn-content";

export default function LearnPage() {
  const { settings } = useStore();
  const [activeTopic, setActiveTopic] = useState(syllabusData[0].id);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[calc(100vh-140px)]">
      
      {/* Mobile Syllabus Selection */}
      <div className="md:hidden w-full overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex gap-2 px-1">
          {syllabusData.map((topic) => (
            <Button
              key={topic.id}
              variant={activeTopic === topic.id ? "default" : "outline"}
              className="flex-shrink-0 rounded-full"
              size="sm"
              onClick={() => setActiveTopic(topic.id)}
            >
              {topic.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Syllabus Sidebar */}
      <Card className="hidden md:flex w-72 flex-shrink-0 flex-col h-full border-primary/10 shadow-sm">
        <CardHeader className="pb-3 bg-primary/5">
          <CardTitle>Syllabus</CardTitle>
        </CardHeader>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {syllabusData.map((topic) => (
              <Button
                key={topic.id}
                variant={activeTopic === topic.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTopic(topic.id)}
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <Card className="flex-1 min-h-0 h-full overflow-hidden flex flex-col border-primary/10 shadow-sm">
        <ScrollArea className="flex-1 h-full">
          <CardContent className="p-4 md:p-8">
            <LearnContent topicId={activeTopic} />
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
}
