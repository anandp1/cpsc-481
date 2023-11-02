const movieByTime = {
  "6:00": [
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/tuZhZ6biFMr5n9YSVuHOJnNL1uU.jpg",
      title: "Prisoners",
      id: 1,
      duration: "1h 43m",
      startTime: "6:20 PM",
    },
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      id: 2,
      duration: "1h 30m",
      startTime: "6:35 PM",
    },
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      title: "Arrival",
      id: 4,
      duration: "1h 25m",
      startTime: "6:20 PM",
    },
    {
      imagePath:
        "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      title: "Shrek",
      id: 5,
      duration: "1h 10m",
      startTime: "6:10 PM",
    },
  ],
  "7:00": [
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      title: "Pulp Fiction",
      id: 6,
      duration: "1h 45m",
      startTime: "7:20 PM",
    },
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      title: "Arrival",
      id: 4,
      duration: "1h 25m",
      startTime: "7:30 PM",
    },
    {
      imagePath:
        "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      title: "Shrek",
      id: 5,
      duration: "1h 10m",
      startTime: "7:50 PM",
    },
  ],
  "8:00": [
    {
      imagePath:
        "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
      title: "Gone Girl",
      id: 1,
      duration: "1h 30m",
      startTime: "8:20 PM",
    },
    {
      imagePath:
        "https://image.tmdb.org/t/p/w500/tuZhZ6biFMr5n9YSVuHOJnNL1uU.jpg",
      title: "Prisoners",
      id: 1,
      duration: "1h 43m",
      startTime: "8:35 PM",
    },
  ],
};
// https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg
// drive

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

export { movieByTime, couponList, swapList, scannedList };
