import IntroAnimation from "@/components/IntroAnimation";

export default function InvestmentHistoryPage() {
  return (
    <IntroAnimation theme="light" title="investment">
      <InvestmentContent />
    </IntroAnimation>
  );
}

function InvestmentContent() {
  return (
    <div className="min-h-screen bg-white text-black p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Investment History</h1>
      </div>
    </div>
  );
}
