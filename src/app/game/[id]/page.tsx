'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HomeIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Game interface
interface Game {
  id: number;
  name: string;
  url: string;
  description: string;
  category: string;
}

// Expanded game data with more safe games
const sampleGames = [
  {
    id: 1,
    name: "2048",
    url: "https://play2048.co/",
    description: "Join the numbers and get to the 2048 tile!",
    category: "Puzzle"
  },
  {
    id: 2,
    name: "Slither.io",
    url: "https://slither.io/",
    description: "Play against other players online in this multiplayer snake game!",
    category: "Multiplayer"
  },
  {
    id: 3,
    name: "Agar.io",
    url: "https://agar.io/",
    description: "Grow bigger by eating other players and survive!",
    category: "Multiplayer"
  },
  {
    id: 4,
    name: "Cookie Clicker",
    url: "https://orteil.dashnet.org/cookieclicker/",
    description: "Click cookies to bake more cookies!",
    category: "Idle"
  },
  {
    id: 5,
    name: "Tetris",
    url: "https://tetris.com/play-tetris",
    description: "The classic block-stacking puzzle game!",
    category: "Puzzle"
  },
  {
    id: 6,
    name: "Pac-Man",
    url: "https://www.google.com/logos/2010/pacman10-i.html",
    description: "Eat dots and avoid ghosts in this classic arcade game!",
    category: "Arcade"
  },
  {
    id: 7,
    name: "Flappy Bird",
    url: "https://flappybird.io/",
    description: "Navigate through pipes without hitting them!",
    category: "Arcade"
  },
  {
    id: 8,
    name: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    description: "Guess the five-letter word in six tries!",
    category: "Word"
  },
  {
    id: 9,
    name: "Minecraft Classic",
    url: "https://classic.minecraft.net/",
    description: "Build and explore in the classic Minecraft experience!",
    category: "Sandbox"
  },
  {
    id: 10,
    name: "Chess.com",
    url: "https://www.chess.com/play/online",
    description: "Play chess against players from around the world!",
    category: "Strategy"
  },
  {
    id: 11,
    name: "Lichess",
    url: "https://lichess.org/",
    description: "Free online chess server with no ads!",
    category: "Strategy"
  },
  {
    id: 12,
    name: "Sudoku",
    url: "https://sudoku.com/",
    description: "Fill the grid with numbers following Sudoku rules!",
    category: "Puzzle"
  },
  {
    id: 13,
    name: "Crossword",
    url: "https://www.nytimes.com/crosswords/game/mini",
    description: "Daily crossword puzzles from The New York Times!",
    category: "Word"
  },
  {
    id: 14,
    name: "Solitaire",
    url: "https://www.solitr.com/",
    description: "Classic card game to pass the time!",
    category: "Card"
  },
  {
    id: 15,
    name: "Mahjong",
    url: "https://www.mahjongg.com/",
    description: "Match tiles in this traditional Chinese game!",
    category: "Puzzle"
  },
  {
    id: 16,
    name: "Checkers",
    url: "https://www.247checkers.com/",
    description: "Classic checkers game with multiple difficulty levels!",
    category: "Strategy"
  },
  {
    id: 17,
    name: "Tic Tac Toe",
    url: "https://playtictactoe.org/",
    description: "The classic X's and O's game!",
    category: "Strategy"
  },
  {
    id: 18,
    name: "Snake",
    url: "https://playsnake.org/",
    description: "Control the snake and eat to grow longer!",
    category: "Arcade"
  },
  {
    id: 19,
    name: "Pong",
    url: "https://www.ponggame.org/",
    description: "The original arcade classic!",
    category: "Arcade"
  },
  {
    id: 20,
    name: "Breakout",
    url: "https://breakoutjs.com/",
    description: "Break all the bricks with your paddle and ball!",
    category: "Arcade"
  },
  {
    id: 21,
    name: "Simon Says",
    url: "https://www.memozor.com/simon-games/simon-says",
    description: "Follow the pattern and test your memory!",
    category: "Memory"
  },
  {
    id: 22,
    name: "Memory Match",
    url: "https://deck-of-cards.js.org/memory/",
    description: "Find matching pairs of cards!",
    category: "Memory"
  },
  {
    id: 23,
    name: "Color Match",
    url: "https://www.coolmathgames.com/0-color-match",
    description: "Match colors and clear the board!",
    category: "Puzzle"
  },
  {
    id: 24,
    name: "Bubble Shooter",
    url: "https://www.crazygames.com/game/bubble-shooter",
    description: "Pop bubbles and clear the screen!",
    category: "Puzzle"
  },
  {
    id: 25,
    name: "Candy Crush",
    url: "https://www.king.com/game/candycrush",
    description: "Match candies and solve sweet puzzles!",
    category: "Puzzle"
  },
  {
    id: 26,
    name: "Bejeweled",
    url: "https://www.ea.com/games/bejeweled/bejeweled-3",
    description: "Match gems and create spectacular combinations!",
    category: "Puzzle"
  },
  {
    id: 27,
    name: "Scrabble",
    url: "https://www.lexulous.com/",
    description: "Create words and score points!",
    category: "Word"
  },
  {
    id: 28,
    name: "Boggle",
    url: "https://www.wordplays.com/boggle",
    description: "Find words in the letter grid!",
    category: "Word"
  },
  {
    id: 29,
    name: "Hangman",
    url: "https://hangmanwordgame.com/",
    description: "Guess the word before the hangman is complete!",
    category: "Word"
  },
  {
    id: 30,
    name: "Typing Speed Test",
    url: "https://10fastfingers.com/typing-test/english",
    description: "Test and improve your typing speed!",
    category: "Skill"
  },
  {
    id: 31,
    name: "Reaction Time Test",
    url: "https://humanbenchmark.com/tests/reactiontime",
    description: "Test your reaction time!",
    category: "Skill"
  },
  {
    id: 32,
    name: "Aim Trainer",
    url: "https://humanbenchmark.com/tests/aim",
    description: "Improve your mouse accuracy!",
    category: "Skill"
  },
  {
    id: 33,
    name: "Number Memory",
    url: "https://humanbenchmark.com/tests/number-memory",
    description: "Test your number memory capacity!",
    category: "Memory"
  },
  {
    id: 34,
    name: "Verbal Memory",
    url: "https://humanbenchmark.com/tests/verbal-memory",
    description: "Test your verbal memory!",
    category: "Memory"
  },
  {
    id: 35,
    name: "Visual Memory",
    url: "https://humanbenchmark.com/tests/visual-memory",
    description: "Test your visual memory!",
    category: "Memory"
  },
  {
    id: 36,
    name: "Sequence Memory",
    url: "https://humanbenchmark.com/tests/sequence",
    description: "Remember the sequence of squares!",
    category: "Memory"
  },
  {
    id: 37,
    name: "Chimp Test",
    url: "https://humanbenchmark.com/tests/chimp",
    description: "Test your working memory like a chimp!",
    category: "Memory"
  },
  {
    id: 38,
    name: "Tower of Hanoi",
    url: "https://www.mathsisfun.com/games/towerofhanoi.html",
    description: "Move all disks to the rightmost tower!",
    category: "Puzzle"
  },
  {
    id: 39,
    name: "Lights Out",
    url: "https://www.mathsisfun.com/games/lights-out.html",
    description: "Turn off all the lights!",
    category: "Puzzle"
  },
  {
    id: 40,
    name: "Connect Four",
    url: "https://www.mathsisfun.com/games/connect4.html",
    description: "Connect four of your pieces in a row!",
    category: "Strategy"
  },
  {
    id: 41,
    name: "Minesweeper",
    url: "https://minesweeper.online/",
    description: "Clear the minefield without detonating any mines!",
    category: "Puzzle"
  },
  {
    id: 42,
    name: "Spider Solitaire",
    url: "https://www.solitr.com/spider-solitaire",
    description: "Arrange cards in descending order!",
    category: "Card"
  },
  {
    id: 43,
    name: "FreeCell",
    url: "https://www.solitr.com/freecell",
    description: "Move all cards to the foundation piles!",
    category: "Card"
  },
  {
    id: 44,
    name: "Klondike Solitaire",
    url: "https://www.solitr.com/klondike-solitaire",
    description: "The classic solitaire game!",
    category: "Card"
  },
  {
    id: 45,
    name: "Hearts",
    url: "https://www.hearts-game.com/",
    description: "Avoid taking tricks with hearts or the queen of spades!",
    category: "Card"
  },
  {
    id: 46,
    name: "Spades",
    url: "https://www.spades-game.com/",
    description: "Bid and win tricks with your partner!",
    category: "Card"
  },
  {
    id: 47,
    name: "Euchre",
    url: "https://www.euchre.com/",
    description: "Classic trick-taking card game!",
    category: "Card"
  },
  {
    id: 48,
    name: "Cribbage",
    url: "https://www.cribbage.org/",
    description: "Score points by playing cards and making combinations!",
    category: "Card"
  },
  {
    id: 49,
    name: "Backgammon",
    url: "https://www.backgammon.org/",
    description: "Ancient board game of strategy and luck!",
    category: "Strategy"
  },
  {
    id: 50,
    name: "Reversi",
    url: "https://www.reversi.org/",
    description: "Capture your opponent's pieces by flanking them!",
    category: "Strategy"
  },
  {
    id: 51,
    name: "Moto X3M",
    url: "https://www.crazygames.com/game/moto-x3m",
    description: "Perform stunts and race through challenging obstacle courses!",
    category: "Racing"
  },
  {
    id: 52,
    name: "Run 3",
    url: "https://www.coolmathgames.com/0-run-3",
    description: "Run and jump through space tunnels in this endless runner!",
    category: "Platformer"
  },
  {
    id: 53,
    name: "Monkey Mart",
    url: "https://poki.com/en/g/monkey-mart",
    description: "Manage your own supermarket as a cute monkey!",
    category: "Management"
  },
  {
    id: 54,
    name: "Papa's Freezeria",
    url: "https://www.coolmathgames.com/0-papas-freezeria",
    description: "Mix up frozen treats and serve customers in this time management game!",
    category: "Simulation"
  },
  {
    id: 55,
    name: "Survival Race",
    url: "https://poki.com/en/g/survival-race",
    description: "Race through dangerous courses and survive to the end!",
    category: "Racing"
  },
  {
    id: 56,
    name: "Shell Shockers",
    url: "https://www.crazygames.com/game/shell-shockers",
    description: "Multiplayer first-person shooter with eggs!",
    category: "Shooter"
  },
  {
    id: 57,
    name: "Moto X3M Winter",
    url: "https://www.crazygames.com/game/moto-x3m-4",
    description: "Winter-themed motocross stunts and racing!",
    category: "Racing"
  },
  {
    id: 58,
    name: "Fireboy and Watergirl",
    url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-forest-temple",
    description: "Cooperative puzzle platformer with two characters!",
    category: "Puzzle"
  },
  {
    id: 59,
    name: "Krunker.io",
    url: "https://www.crazygames.com/game/krunker-io",
    description: "Fast-paced multiplayer FPS browser game!",
    category: "Shooter"
  },
  {
    id: 60,
    name: "Duck Life 4",
    url: "https://www.coolmathgames.com/0-duck-life-4",
    description: "Train your duck to become a champion athlete!",
    category: "Simulation"
  }
];

function getFaviconUrl(url: string) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch {
    return '';
  }
}

export default function GamePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [playedGames, setPlayedGames] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Load played games from sessionStorage
    const stored = sessionStorage.getItem('playedGames');
    if (stored) {
      setPlayedGames(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
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
  }, [params.id, playedGames]);

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
