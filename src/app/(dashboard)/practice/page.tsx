import { Quiz } from "@/components/quiz";

export default function PracticePage() {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Grammar Practice</h2>
        <p className="text-muted-foreground">Practice without time limits and get instant feedback with explanations.</p>
      </div>
      <Quiz mode="practice" />
    </div>
  );
}
