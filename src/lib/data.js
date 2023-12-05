const movies = [
  {
    id: 0,
    imagePath:
      "https://image.tmdb.org/t/p/w500/tuZhZ6biFMr5n9YSVuHOJnNL1uU.jpg",
    title: "Prisoners",
    duration: "1h 43m",
    genre: "Drama",
    rating: "R",
    description:
      "Keller Dover (Hugh Jackman) faces a parent's worst nightmare when his 6-year-old daughter, Anna, and her friend go missing. The only lead is an old motorhome that had been parked on their street. The head of the investigation, Detective Loki (Jake Gyllenhaal), arrests the driver (Paul Dano), but a lack of evidence forces Loki to release his only suspect. Dover, knowing that his daughter's life is at stake, decides that he has no choice but to take matters into his own hands.",
  },
  {
    id: 1,
    imagePath:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    title: "Avengers: Infinity War",
    duration: "1h 30m",
    genre: "Action",
    rating: "PG-13",
  },
  {
    id: 2,
    imagePath:
      "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    title: "Arrival",
    duration: "1h 25m",
    genre: "Sci-Fi",
    rating: "PG-13",
  },
  {
    id: 3,
    imagePath:
      "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    title: "Shrek",
    duration: "1h 10m",
    genre: "Animation",
    rating: "PG",
  },
  {
    id: 4,
    imagePath:
      "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    title: "Pulp Fiction",
    duration: "1h 45m",
    genre: "Drama",
    rating: "R",
  },
  {
    id: 5,
    imagePath:
      "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    title: "Gone Girl",
    duration: "1h 30m",
    genre: "Drama",
    rating: "R",
  },
];

const movieByTime = {
  "6:00PM-6:59PM": [
    {
      ...movies[0],
      startTime: "6:20 PM",
      capacity: 70,
    },
    {
      ...movies[1],
      startTime: "6:35 PM",
      capacity: 100,
    },
    {
      ...movies[2],
      startTime: "6:20 PM",
      capacity: 80,
    },
    {
      ...movies[3],
      startTime: "6:10 PM",
      capacity: 100,
    },
  ],
  "7:00PM-7:59PM": [
    {
      ...movies[4],
      startTime: "7:20 PM",
      capacity: 60,
    },
    {
      ...movies[2],
      startTime: "7:30 PM",
      capacity: 80,
    },
    {
      ...movies[3],
      startTime: "7:50 PM",
      capacity: 95,
    },
  ],
  "8:00PM-8:59PM": [
    {
      ...movies[5],
      startTime: "8:20 PM",
      capacity: 100,
    },
    {
      ...movies[0],
      startTime: "8:35 PM",
      capacity: 70,
    },
  ],
};

const couponList = [
  {
    name: "Amazon",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    id: 1,
  },
  {
    name: "Best Buy",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg",
    id: 2,
  },
  {
    name: "Canadian Tire",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/CT-Brandmark-Standard-Secondary-RGW-POS-RGB.png",
    id: 3,
  },
  {
    name: "Costco",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo_2010-10-26.svg",
    id: 4,
  },
  {
    name: "Home Depot",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg",
    id: 5,
  },
  {
    name: "Lowe's",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lowes_Companies_Logo.svg",
    id: 6,
  },
  {
    name: "McDonald's",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    id: 7,
  },
  {
    name: "Subway",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg",
    id: 8,
  },
  {
    name: "Tim Hortons",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Tim_Hortons_logo.svg",
    id: 9,
  },
  {
    name: "Walmart",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    id: 10,
  },
];

const swapList = [
  {
    imagePath:
      "https://image.tmdb.org/t/p/w1280/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    title: "Saw X",
    id: 1,
    duration: "1h 58m",
    seat: "D10",
    startTime: "3:30 PM",
  },
];

const scannedList = [
  {
    id: 1,
    name: "Ticket 1",
    title: "Saw X",
    startTime: "3:30 PM",
    seat: "D10",
  },
  {
    id: 2,
    name: "Ticket 2",
    title: "Saw X",
    startTime: "3:30 PM",
    seat: "D11",
  },
];

export { movies, movieByTime, couponList, swapList, scannedList };
