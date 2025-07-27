// Game interface
export interface Game {
  id: number;
  name: string;
  url: string;
  description: string;
  category: string;
}

// Curated list of high-quality, safe, free games from reputable sites only
export const sampleGames: Game[] = [
  // Classic & Educational Games (Ad-free, High Quality)
  {
    id: 1,
    name: "2048",
    url: "https://play2048.co/",
    description: "Join the numbers and get to the 2048 tile!",
    category: "Puzzle"
  },
  {
    id: 2,
    name: "Tetris",
    url: "https://tetris.com/play-tetris",
    description: "The classic block-stacking puzzle game!",
    category: "Puzzle"
  },
  {
    id: 3,
    name: "Chess.com",
    url: "https://www.chess.com/play/online",
    description: "Play chess against players from around the world!",
    category: "Strategy"
  },
  {
    id: 4,
    name: "Lichess",
    url: "https://lichess.org/",
    description: "Free online chess server with no ads!",
    category: "Strategy"
  },
  {
    id: 5,
    name: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    description: "Guess the five-letter word in six tries!",
    category: "Word"
  },
  {
    id: 6,
    name: "Cookie Clicker",
    url: "https://orteil.dashnet.org/cookieclicker/",
    description: "Click cookies to bake more cookies in this addictive idle game!",
    category: "Idle"
  },
  {
    id: 7,
    name: "Minecraft Classic",
    url: "https://classic.minecraft.net/",
    description: "Build and explore in the classic Minecraft experience!",
    category: "Sandbox"
  },
  {
    id: 8,
    name: "Quick Draw",
    url: "https://quickdraw.withgoogle.com/",
    description: "AI tries to guess your drawings in 20 seconds!",
    category: "AI/Drawing"
  },

  // CoolMath Games - Educational & Safe Platform
  {
    id: 9,
    name: "Run 3",
    url: "https://www.coolmathgames.com/0-run-3",
    description: "Run and jump through space tunnels!",
    category: "Platformer"
  },
  {
    id: 10,
    name: "Papa's Freezeria",
    url: "https://www.coolmathgames.com/0-papas-freezeria",
    description: "Serve ice cream sundaes to customers!",
    category: "Simulation"
  },
  {
    id: 11,
    name: "Fireboy and Watergirl",
    url: "https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple",
    description: "Solve puzzles with two characters working together!",
    category: "Puzzle"
  },
  {
    id: 12,
    name: "Duck Life 4",
    url: "https://www.coolmathgames.com/0-duck-life-4",
    description: "Train your duck to become a champion!",
    category: "Simulation"
  },
  {
    id: 13,
    name: "Bloxorz",
    url: "https://www.coolmathgames.com/0-bloxorz",
    description: "Roll the block to the hole in this 3D puzzle game!",
    category: "Puzzle"
  },
  {
    id: 14,
    name: "Papa's Pizzeria",
    url: "https://www.coolmathgames.com/0-papas-pizzeria",
    description: "Make and serve pizzas to hungry customers!",
    category: "Simulation"
  },
  {
    id: 15,
    name: "Sugar, Sugar",
    url: "https://www.coolmathgames.com/0-sugar-sugar",
    description: "Draw lines to guide sugar into cups!",
    category: "Puzzle"
  },
  {
    id: 16,
    name: "World's Hardest Game",
    url: "https://www.coolmathgames.com/0-worlds-hardest-game",
    description: "Navigate through challenging obstacle courses!",
    category: "Skill"
  },

  // CrazyGames - High Quality Platform (Curated Safe Games)
  {
    id: 17,
    name: "Moto X3M",
    url: "https://www.crazygames.com/game/moto-x3m",
    description: "Perform stunts and race through challenging levels!",
    category: "Racing"
  },
  {
    id: 18,
    name: "Shell Shockers",
    url: "https://www.crazygames.com/game/shell-shockers",
    description: "Multiplayer egg shooting game!",
    category: "Shooter"
  },
  {
    id: 19,
    name: "Smash Karts",
    url: "https://www.crazygames.com/game/smash-karts",
    description: "Multiplayer kart racing with weapons!",
    category: "Racing"
  },
  {
    id: 20,
    name: "Geometry Dash",
    url: "https://www.crazygames.com/game/geometry-dash-online",
    description: "Jump and fly through geometric obstacles!",
    category: "Platformer"
  },
  {
    id: 21,
    name: "Subway Surfers",
    url: "https://www.crazygames.com/game/subway-surfers",
    description: "Run through subway tracks avoiding obstacles!",
    category: "Endless Runner"
  },

  // NEW: High-Frequency Featured Games (Popular CrazyGames titles)
  {
    id: 22,
    name: "Soccer Random",
    url: "https://www.crazygames.com/game/soccer-random",
    description: "Two-player pixel-art soccer with chaotic physics and limited controls!",
    category: "Sports"
  },
  {
    id: 23,
    name: "Basket Random",
    url: "https://www.crazygames.com/game/basket-random",
    description: "Chaotic 2-player basketball with unpredictable physics!",
    category: "Sports"
  },
  {
    id: 24,
    name: "Boxing Random",
    url: "https://www.crazygames.com/game/boxing-random",
    description: "Ragdoll physics boxing with unpredictable twists every round!",
    category: "Sports"
  },
  {
    id: 25,
    name: "Volley Random",
    url: "https://www.crazygames.com/game/volley-random",
    description: "Fun two-player volleyball with chaotic physics and one-button controls!",
    category: "Sports"
  },
  {
    id: 26,
    name: "Time Shooter",
    url: "https://www.crazygames.com/game/time-shooter",
    description: "Time moves only when you move in this innovative FPS!",
    category: "Shooter"
  },
  {
    id: 27,
    name: "Time Shooter 2",
    url: "https://www.crazygames.com/game/time-shooter-2",
    description: "Sequel to the time-manipulation shooter with new mechanics!",
    category: "Shooter"
  },
  {
    id: 28,
    name: "Time Shooter 3: SWAT",
    url: "https://www.crazygames.com/game/time-shooter-3-swat",
    description: "Third installment with SWAT theme and enhanced gameplay!",
    category: "Shooter"
  },
  {
    id: 29,
    name: "Monkey Mart",
    url: "https://monkeymartgame.org/",
    description: "Manage your own supermarket as a cute monkey entrepreneur!",
    category: "Management"
  },
  {
    id: 30,
    name: "Survival Race",
    url: "https://survival-race.io/",
    description: "Race through dangerous obstacle courses and survive to the end!",
    category: "Racing"
  },
  {
    id: 31,
    name: "Highway Traffic",
    url: "https://unblocked-games.s3.amazonaws.com/highway-traffic.html",
    description: "Navigate through busy highway traffic at high speeds!",
    category: "Racing"
  },

  // Popular IO Games (Established, Safe Multiplayer)
  {
    id: 32,
    name: "Slither.io",
    url: "https://slither.io/",
    description: "Grow your snake by eating pellets and other snakes!",
    category: "Multiplayer"
  },
  {
    id: 33,
    name: "Agar.io",
    url: "https://agar.io/",
    description: "Grow bigger by eating other players and survive!",
    category: "Multiplayer"
  },
  {
    id: 34,
    name: "Diep.io",
    url: "https://diep.io/",
    description: "Control a tank and destroy shapes and other players!",
    category: "Multiplayer"
  },
  {
    id: 35,
    name: "Paper.io 2",
    url: "https://paper-io.com/",
    description: "Capture territory by drawing lines!",
    category: "Strategy"
  },
  {
    id: 36,
    name: "Hole.io",
    url: "https://hole-io.com/",
    description: "Grow your hole by swallowing everything!",
    category: "Arcade"
  },
  {
    id: 37,
    name: "Krunker.io",
    url: "https://krunker.io/",
    description: "Fast-paced multiplayer FPS game!",
    category: "Shooter"
  },
  {
    id: 38,
    name: "Skribbl.io",
    url: "https://skribbl.io/",
    description: "Draw and guess words with other players!",
    category: "Drawing"
  },

  // Classic Arcade Games (Google & Established Sites)
  {
    id: 39,
    name: "Pac-Man",
    url: "https://www.google.com/logos/2010/pacman10-i.html",
    description: "Eat dots and avoid ghosts in this classic arcade game!",
    category: "Arcade"
  },
  {
    id: 40,
    name: "Snake",
    url: "https://playsnake.org/",
    description: "Grow your snake by eating food without hitting walls!",
    category: "Arcade"
  },
  {
    id: 41,
    name: "Flappy Bird",
    url: "https://flappybird.io/",
    description: "Navigate through pipes without hitting them!",
    category: "Arcade"
  },

  // Educational & Brain Training (HumanBenchmark - No Ads, High Quality)
  {
    id: 42,
    name: "Reaction Time Test",
    url: "https://humanbenchmark.com/tests/reactiontime",
    description: "Test your reaction time!",
    category: "Skill"
  },
  {
    id: 43,
    name: "Aim Trainer",
    url: "https://humanbenchmark.com/tests/aim",
    description: "Improve your mouse accuracy!",
    category: "Skill"
  },
  {
    id: 44,
    name: "Number Memory",
    url: "https://humanbenchmark.com/tests/number-memory",
    description: "Test your number memory capacity!",
    category: "Memory"
  },
  {
    id: 45,
    name: "Visual Memory",
    url: "https://humanbenchmark.com/tests/visual-memory",
    description: "Test your visual memory!",
    category: "Memory"
  },
  {
    id: 46,
    name: "Sequence Memory",
    url: "https://humanbenchmark.com/tests/sequence",
    description: "Remember the sequence of squares!",
    category: "Memory"
  },
  {
    id: 47,
    name: "Chimp Test",
    url: "https://humanbenchmark.com/tests/chimp",
    description: "Test your working memory like a chimp!",
    category: "Memory"
  },

  // Quality Puzzle & Card Games (Established Sites)
  {
    id: 48,
    name: "Sudoku",
    url: "https://sudoku.com/",
    description: "Fill the grid with numbers following Sudoku rules!",
    category: "Logic"
  },
  {
    id: 49,
    name: "Solitaire",
    url: "https://solitaired.com/klondike",
    description: "Play the classic Klondike Solitaire card game!",
    category: "Card"
  },
  {
    id: 50,
    name: "Minesweeper",
    url: "https://minesweeper.online/",
    description: "Clear the minefield without detonating any mines!",
    category: "Puzzle"
  },

  // HIGHER FREQUENCY: Duplicate popular games for increased appearance rate
  {
    id: 51,
    name: "Soccer Random",
    url: "https://www.crazygames.com/game/soccer-random",
    description: "Two-player pixel-art soccer with chaotic physics and limited controls!",
    category: "Sports"
  },
  {
    id: 52,
    name: "Basket Random",
    url: "https://www.crazygames.com/game/basket-random",
    description: "Chaotic 2-player basketball with unpredictable physics!",
    category: "Sports"
  },
  {
    id: 53,
    name: "Boxing Random",
    url: "https://www.crazygames.com/game/boxing-random",
    description: "Ragdoll physics boxing with unpredictable twists every round!",
    category: "Sports"
  },
  {
    id: 54,
    name: "Volley Random",
    url: "https://www.crazygames.com/game/volley-random",
    description: "Fun two-player volleyball with chaotic physics and one-button controls!",
    category: "Sports"
  },
  {
    id: 55,
    name: "Monkey Mart",
    url: "https://monkeymartgame.org/",
    description: "Manage your own supermarket as a cute monkey entrepreneur!",
    category: "Management"
  },
  {
    id: 56,
    name: "Time Shooter",
    url: "https://www.crazygames.com/game/time-shooter",
    description: "Time moves only when you move in this innovative FPS!",
    category: "Shooter"
  },
  {
    id: 57,
    name: "Time Shooter 2",
    url: "https://www.crazygames.com/game/time-shooter-2",
    description: "Sequel to the time-manipulation shooter with new mechanics!",
    category: "Shooter"
  },
  {
    id: 58,
    name: "Fireboy and Watergirl",
    url: "https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple",
    description: "Solve puzzles with two characters working together!",
    category: "Puzzle"
  },
  {
    id: 59,
    name: "Survival Race",
    url: "https://survival-race.io/",
    description: "Race through dangerous obstacle courses and survive to the end!",
    category: "Racing"
  },
  {
    id: 60,
    name: "Time Shooter 3: SWAT",
    url: "https://www.crazygames.com/game/time-shooter-3-swat",
    description: "Third installment with SWAT theme and enhanced gameplay!",
    category: "Shooter"
  }
];
