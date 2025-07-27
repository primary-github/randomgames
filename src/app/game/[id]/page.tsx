'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HomeIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Game, sampleGames } from '../../games';

function getFaviconUrl(url: string) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch {
    return '';
  }
}

export default function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [playedGames, setPlayedGames] = useState<Set<number>>(new Set());
  const [gameId, setGameId] = useState<string>('');

  useEffect(() => {
    // Load played games from sessionStorage
    const stored = sessionStorage.getItem('playedGames');
    if (stored) {
      setPlayedGames(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    // Resolve params Promise for Next.js 15 compatibility
    params.then(resolvedParams => {
      setGameId(resolvedParams.id);
    });
  }, [params]);

  useEffect(() => {
    if (!gameId) return;

    // Simulate loading and select a random game
    const timer = setTimeout(() => {
      const availableGames = sampleGames.filter(game => !playedGames.has(game.id));

      // If all games have been played, reset the played games
      if (availableGames.length === 0) {
        setPlayedGames(new Set());
        sessionStorage.removeItem('playedGames');
        const randomGame = sampleGames[Math.floor(Math.random() * sampleGames.length)];
        setCurrentGame(randomGame);
      } else {
        const randomGame = availableGames[Math.floor(Math.random() * availableGames.length)];
        setCurrentGame(randomGame);
      }

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameId, playedGames]);

  const goToNextGame = () => {
    if (currentGame) {
      // Add current game to played games
      const newPlayedGames = new Set(playedGames);
      newPlayedGames.add(currentGame.id);
      setPlayedGames(newPlayedGames);

      // Save to sessionStorage
      sessionStorage.setItem('playedGames', JSON.stringify([...newPlayedGames]));
    }

    const randomId = Math.floor(Math.random() * 1000);
    router.push(`/game/${randomId}`);
    setLoading(true);
  };

  const goHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-amber-900 to-yellow-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-8"></div>
          <p className="text-2xl text-white">Loading your next game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900 to-yellow-800">
      {/* Header with navigation buttons */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-amber-200/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={goHome}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </button>

          <button
            onClick={goToNextGame}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center"
          >
            <ArrowRightIcon className="w-5 h-5 mr-2" />
            Next Game
          </button>
        </div>
      </div>

      {/* Game content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-200/20">
          {/* Game Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {currentGame?.name}
            </h1>
            <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentGame?.category}
            </span>
          </div>

          {/* Game Description */}
          <div className="text-center mb-8">
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              {currentGame?.description}
            </p>
          </div>

          {/* Static Game Preview Section with Favicon */}
          <div className="mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20 max-w-2xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Game Preview</h3>
              <div className="flex flex-col items-center justify-center py-8">
                <div className="flex items-center mb-4">
                  <Image
                    src={getFaviconUrl(currentGame?.url || '')}
                    alt="Game Favicon"
                    width={40}
                    height={40}
                    className="rounded mr-3 bg-white shadow"
                    unoptimized
                  />
                  <span className="text-amber-200 text-lg font-semibold">{currentGame?.name}</span>
                </div>
                <p className="text-amber-100 text-sm mb-2">{currentGame?.category}</p>
                <p className="text-amber-300 text-xs max-w-xs mx-auto">{currentGame?.description}</p>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <div className="text-center">
            <a
              href={currentGame?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1"
            >
              <PlayIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              <span>Play Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
