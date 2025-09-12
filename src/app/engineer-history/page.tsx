import IntroAnimation from "@/components/IntroAnimation";

export default function EngineerHistoryPage() {
  return (
    <IntroAnimation theme="dark" title="engineer">
      <EngineerContent />
    </IntroAnimation>
  );
}

function EngineerContent() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-500 font-mono">
          {">"} Engineer History
        </h1>
      </div>
    </div>
  );
}
