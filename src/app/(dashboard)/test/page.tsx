import { Quiz } from "@/components/quiz";

export default function TestPage() {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Grammar Test</h2>
        <p className="text-muted-foreground">Take a timed test to evaluate your knowledge. Scores will be recorded.</p>
      </div>
      <Quiz mode="test" />
    </div>
  );
}
