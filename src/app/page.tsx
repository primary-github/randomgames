'use client';

import { useRouter } from 'next/navigation';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const router = useRouter();

  const goToRandomGame = () => {
    // Generate a random game ID (we'll implement the actual game logic later)
    const randomId = Math.floor(Math.random() * 1000);
    router.push(`/game/${randomId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900 to-yellow-800 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-pulse">
            Random Games
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Discover amazing games from around the web with just one click!
          </p>

          <button
            onClick={goToRandomGame}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-600 transform hover:-translate-y-1"
          >
            <PlayIcon className="w-8 h-8 mr-3 relative z-10" />
            <span className="relative z-10">Go to Random Game</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
            <h3 className="text-amber-200 font-semibold text-sm uppercase tracking-wide">How It Works</h3>
            <div className="w-2 h-2 bg-amber-400 rounded-full ml-3"></div>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-amber-100 text-sm leading-relaxed">
              You will not see the same game twice until you refresh the page or start a new session.
            </p>
            <p className="text-amber-200 text-xs leading-relaxed">
              After playing all 50 games, the cycle will restart and you can play any game again.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-amber-200 text-sm">
          Created by <span className="font-semibold">Tyson Mason</span> in collaboration with{' '}
          <a
            href="https://solaris.software"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-100 underline transition-colors font-semibold"
          >
            Solaris Software
          </a>
        </p>
      </footer>
    </div>
  );
}
