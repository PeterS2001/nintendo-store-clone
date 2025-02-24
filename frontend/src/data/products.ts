export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  relatedProducts: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Super Mario Odyssey',
    description: 'Nintendo Switch',
    longDescription: 'Join Mario on a massive, globe-trotting 3D adventure! Use his incredible abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser\'s wedding plans! A Mario adventure for the ages!',
    price: '$59.99',
    imageSrc: '/images/supermarioodyssey.jpg',
    imageAlt: 'Super Mario Odyssey game cover',
    category: 'games',
    features: [
      'Explore huge 3D kingdoms filled with secrets and surprises',
      'Use Mario\'s new abilities to take control of objects, animals, and enemies',
      'Enjoy brand new locales like skyscraper-packed New Donk City',
      'Play with a friend by sharing Joy-Con controllers'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'October 27, 2017',
      'Publisher': 'Nintendo',
      'Genre': 'Action, Adventure, Platformer',
      'Players': '1-2 players',
      'Game File Size': '5.7 GB'
    },
    relatedProducts: [3, 7, 9]
  },
  {
    id: 2,
    name: 'Nintendo Switch Console',
    description: 'Gaming System',
    longDescription: 'Introducing Nintendo Switch, the home video game system you can play anywhere. Play your way with the Nintendo Switch gaming system. Whether you\'re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life.',
    price: '$299.99',
    imageSrc: '/images/switch-console.webp',
    imageAlt: 'Nintendo Switch console',
    category: 'consoles',
    features: [
      'Play on your TV or in handheld mode',
      'Share Joy-Con controllers for multiplayer fun',
      'Connect online to play with friends',
      'Take your games anywhere'
    ],
    specifications: {
      'Screen': '6.2-inch LCD touchscreen',
      'Resolution': '1280 x 720p (handheld) / Up to 1080p (docked)',
      'Storage': '32 GB internal storage',
      'Battery Life': '4.5-9 hours',
      'Weight': '0.88 lbs (with Joy-Con)',
      'Includes': 'Console, Dock, Joy-Con (L/R), Joy-Con grip, HDMI cable, AC adapter'
    },
    relatedProducts: [4, 8, 12]
  },
  {
    id: 3,
    name: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'Nintendo Switch',
    longDescription: 'In this sequel to The Legend of Zelda: Breath of the Wild, you\'ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above.',
    price: '$59.99',
    imageSrc: '/images/zelda tears.jpg',
    imageAlt: 'Zelda Tears of the Kingdom game cover',
    category: 'games',
    features: [
      'Explore the vast land and skies of Hyrule',
      'Use new abilities to create unique solutions',
      'Discover mysterious islands and dungeons',
      'Battle new and familiar enemies'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'May 12, 2023',
      'Publisher': 'Nintendo',
      'Genre': 'Action-Adventure',
      'Players': '1 player',
      'Game File Size': '16.3 GB'
    },
    relatedProducts: [1, 5, 7]
  },
  {
    id: 4,
    name: 'Nintendo Switch Pro Controller',
    description: 'Gaming Controller',
    longDescription: 'Take your game sessions up a notch with the Nintendo Switch Pro Controller. Includes motion controls, HD rumble, built-in amiibo functionality, and more.',
    price: '$69.99',
    imageSrc: '/images/switch pro controller.jpg',
    imageAlt: 'Nintendo Switch Pro Controller',
    category: 'accessories',
    features: [
      'Traditional gaming controller design',
      'Motion controls and HD rumble',
      'Built-in amiibo functionality',
      'Long battery life'
    ],
    specifications: {
      'Battery': 'Lithium-ion battery',
      'Battery Life': 'Approximately 40 hours',
      'Charging Time': '6 hours',
      'Connectivity': 'Bluetooth and USB-C',
      'Weight': '0.46 lbs',
      'Compatibility': 'Nintendo Switch, PC (Steam)'
    },
    relatedProducts: [2, 8, 12]
  },
  {
    id: 5,
    name: 'Pokemon Scarlet',
    description: 'Nintendo Switch',
    longDescription: 'Embark on an open-world adventure in the Paldea region. As a student at a prestigious academy, you\'ll explore vast wildernesses filled with newly discovered Pokémon.',
    price: '$59.99',
    imageSrc: '/images/pokemon scarlet.jpg',
    imageAlt: 'Pokemon Scarlet game cover',
    category: 'games',
    features: [
      'Explore an open-world Pokémon region',
      'Discover new Pokémon and regional forms',
      'Battle and trade with players worldwide',
      'Experience a new kind of Pokémon story'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'November 18, 2022',
      'Publisher': 'Nintendo/The Pokémon Company',
      'Genre': 'RPG',
      'Players': '1-4 players',
      'Game File Size': '7 GB'
    },
    relatedProducts: [3, 7, 11]
  },
  {
    id: 6,
    name: 'Nintendo Switch OLED Model',
    description: 'Gaming System',
    longDescription: 'Enjoy vivid colors and crisp contrast with a screen that makes games pop. The Nintendo Switch – OLED Model features a vibrant 7-inch OLED screen.',
    price: '$349.99',
    imageSrc: '/images/switch oled model.jpg',
    imageAlt: 'Nintendo Switch OLED Model',
    category: 'consoles',
    features: [
      '7-inch OLED screen',
      'Wide adjustable stand',
      'Enhanced audio',
      '64 GB internal storage',
      'Wired LAN port in dock'
    ],
    specifications: {
      'Screen': '7-inch OLED touchscreen',
      'Resolution': '1280 x 720p (handheld) / Up to 1080p (docked)',
      'Storage': '64 GB internal storage',
      'Battery Life': '4.5-9 hours',
      'Weight': '0.93 lbs (with Joy-Con)',
      'Includes': 'Console, Dock with LAN port, Joy-Con (L/R), Joy-Con grip, HDMI cable, AC adapter'
    },
    relatedProducts: [2, 4, 8]
  },
  {
    id: 7,
    name: 'Mario Kart 8 Deluxe',
    description: 'Nintendo Switch',
    longDescription: 'Hit the road with the definitive version of Mario Kart 8. Race your friends or battle them in a revised battle mode on new and returning battle courses.',
    price: '$59.99',
    imageSrc: '/images/mario kart 8 deluxe.jpg',
    imageAlt: 'Mario Kart 8 Deluxe game cover',
    category: 'games',
    features: [
      '48 race courses with DLC',
      'New and returning battle modes',
      'Play with up to 8 players online',
      'Local multiplayer for up to 4 players'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'April 28, 2017',
      'Publisher': 'Nintendo',
      'Genre': 'Racing',
      'Players': '1-8 players',
      'Game File Size': '6.8 GB'
    },
    relatedProducts: [1, 3, 9]
  },
  {
    id: 8,
    name: 'Joy-Con Controllers',
    description: 'Neon Red & Blue',
    longDescription: 'Add a splash of color to your gaming setup with this Joy-Con pair. One controller is red, one is blue, and each contains an accelerometer and gyro-sensor.',
    price: '$79.99',
    imageSrc: '/images/joycon controllers.jpg',
    imageAlt: 'Nintendo Switch Joy-Con Controllers',
    category: 'accessories',
    features: [
      'Motion controls and HD rumble',
      'Share with a friend for multiplayer',
      'Multiple color options available',
      'Can be used together or separately'
    ],
    specifications: {
      'Battery': 'Lithium-ion battery',
      'Battery Life': 'Approximately 20 hours',
      'Charging Time': '3.5 hours',
      'Weight': '0.1 lbs each',
      'Features': 'Accelerometer, Gyro-sensor, HD rumble',
      'Compatibility': 'Nintendo Switch, Nintendo Switch OLED Model'
    },
    relatedProducts: [2, 4, 12]
  },
  {
    id: 9,
    name: 'Animal Crossing: New Horizons',
    description: 'Nintendo Switch',
    longDescription: 'Escape to a deserted island and create your own paradise as you explore, create, and customize in Animal Crossing: New Horizons.',
    price: '$59.99',
    imageSrc: '/images/animal crossing.jpg',
    imageAlt: 'Animal Crossing New Horizons game cover',
    category: 'games',
    features: [
      'Create your own island paradise',
      'Craft items and develop your island',
      'Play together with friends',
      'Express your creativity'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'March 20, 2020',
      'Publisher': 'Nintendo',
      'Genre': 'Life Simulation',
      'Players': '1-8 players',
      'Game File Size': '6.2 GB'
    },
    relatedProducts: [1, 5, 7]
  },
  {
    id: 10,
    name: 'Nintendo Switch Carrying Case',
    description: 'Travel Case',
    longDescription: 'Keep your Nintendo Switch safe on the go with this sturdy carrying case. Features a hard shell exterior and soft interior lining.',
    price: '$19.99',
    imageSrc: '/images/switch carrying case.jpg',
    imageAlt: 'Nintendo Switch Carrying Case',
    category: 'accessories',
    features: [
      'Hard shell protection',
      'Storage for games and accessories',
      'Built-in stand function',
      'Comfortable carry handle'
    ],
    specifications: {
      'Material': 'EVA hard shell, soft interior lining',
      'Storage': 'Fits console, 10 game cards, accessories',
      'Dimensions': '10.2 x 4.7 x 2.0 inches',
      'Weight': '0.4 lbs',
      'Color': 'Black',
      'Compatibility': 'Nintendo Switch, Nintendo Switch OLED Model'
    },
    relatedProducts: [2, 4, 8]
  },
  {
    id: 11,
    name: 'Splatoon 3',
    description: 'Nintendo Switch',
    longDescription: 'Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. Ink, dive, swim, and splat your way to victory.',
    price: '$59.99',
    imageSrc: '/images/splatoon 3.avif',
    imageAlt: 'Splatoon 3 game cover',
    category: 'games',
    features: [
      'New weapons and special moves',
      'Dynamic 4v4 multiplayer action',
      'Deep single-player campaign',
      'Regular content updates'
    ],
    specifications: {
      'Platform': 'Nintendo Switch',
      'Release Date': 'September 9, 2022',
      'Publisher': 'Nintendo',
      'Genre': 'Action, Shooter',
      'Players': '1-8 players',
      'Game File Size': '6 GB'
    },
    relatedProducts: [1, 7, 9]
  },
  {
    id: 12,
    name: 'Nintendo Switch Dock',
    description: 'Charging Dock',
    longDescription: 'Add a second dock to another TV in your home, or replace your original Nintendo Switch dock. This official dock includes all necessary cables.',
    price: '$59.99',
    imageSrc: '/images/nintendo switch doc.jpg',
    imageAlt: 'Nintendo Switch Dock',
    category: 'accessories',
    features: [
      'TV output up to 1080p',
      'Built-in USB ports',
      'Secure console holding',
      'Official Nintendo product'
    ],
    specifications: {
      'Ports': 'HDMI out, USB 2.0 x 2, USB 3.0 x 1, AC adapter',
      'Output Resolution': 'Up to 1080p60',
      'Power': 'AC adapter required (included)',
      'Dimensions': '4.1 x 6.8 x 1.9 inches',
      'Weight': '0.5 lbs',
      'Compatibility': 'Nintendo Switch'
    },
    relatedProducts: [2, 4, 8]
  }
];
