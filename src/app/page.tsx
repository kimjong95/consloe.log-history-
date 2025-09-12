import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-white mb-2">
          console.log(<span className="text-green-500">history</span>)
        </h1>
        <p className="text-gray-400 text-xl mb-12">Choose your journey</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/investment-history"
            className="group relative px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            <span className="relative z-10">💼 Investment History</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            href="/engineer-history"
            className="group relative px-8 py-4 bg-black border-2 border-green-500 text-green-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <span className="relative z-10 font-mono">{">"} Engineer History</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
