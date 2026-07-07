import { BookOpen } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background to-muted/50">
      <div className="w-full max-w-md p-8 rounded-2xl relative overflow-hidden bg-card text-card-foreground shadow-xl border glass">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="text-center mb-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              <BookOpen className="w-8 h-8" />
              Magic Learn
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
