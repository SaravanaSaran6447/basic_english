"use client";

import { grammarData } from "@/data/grammar-content";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function LearnContent({ topicId }: { topicId: string }) {
  const topic = grammarData[topicId];

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
        <BookIcon className="w-12 h-12 mb-4 opacity-20" />
        <p>Select a topic from the sidebar to begin learning.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12 max-w-4xl mx-auto">
      <div className="border-b pb-6">
        <h2 className="text-4xl font-extrabold text-primary mb-2">{topic.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{topic.description}</p>
      </div>

      <div className="space-y-12">
        {topic.sections.map((section: any, idx: number) => (
          <div key={idx} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground/90">{section.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>

            {section.table && (
              <div className="border rounded-xl overflow-hidden shadow-sm bg-card">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      {section.table.headers.map((header: string, hIdx: number) => (
                        <TableHead key={hIdx} className={hIdx === 0 ? "w-[200px]" : ""}>
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.table.rows.map((row: string[], rIdx: number) => (
                      <TableRow key={rIdx}>
                        {row.map((cell: string, cIdx: number) => (
                          <TableCell key={cIdx} className={cIdx === 0 ? "font-semibold" : ""}>
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {section.examples && section.examples.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                {section.examples.map((ex: any, eIdx: number) => (
                  <Card key={eIdx} className="bg-primary/5 border-primary/20 shadow-none">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2 text-primary">
                        <Lightbulb className="w-4 h-4" /> Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-lg mb-2">"{ex.sentence}"</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Note: </span>
                        {ex.explanation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {section.warning && (
              <Alert variant="destructive" className="mt-6 bg-destructive/10 border-destructive/20">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Common Mistake</AlertTitle>
                <AlertDescription>
                  {section.warning}
                </AlertDescription>
              </Alert>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
