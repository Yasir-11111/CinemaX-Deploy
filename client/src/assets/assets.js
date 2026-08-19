import logo from "./logo.svg";
import googlePlay from "./googlePlay.svg";
import appStore from "./appStore.svg";
import screenImage from "./screenImage.svg";
import profile from "./profile.png";

export const assets = {
  logo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/IG-eByZdz6Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IG-eByZdz6Y",
  },
  {
    image: "https://img.youtube.com/vi/rFOdIv1jwhc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=rFOdIv1jwhc",
  },

  {
    image: "https://img.youtube.com/vi/1zip1rNaNYs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1zip1rNaNYs",
  },

  {
    image: "https://img.youtube.com/vi/ceooxuS-sww/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ceooxuS-sww",
  },
];

export const dummyCastsData = [
  {
    name: "Aneet Padda",
    profile_path:
      "https://www.masala.com/cloud/2025/08/01/aneet-padda-saiyaara.jpg",
  },
  {
    name: "Ahaan Panday",
    profile_path:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ahaan_Panday.jpg/640px-Ahaan_Panday.jpg",
  },
  {
    name: "Ajay Devgn",
    profile_path:
      "https://www.whoa.in/wp-content/uploads/2023/05/Ajay-Devgan.jpg",
  },
  {
    name: "Salman Khan",
    profile_path:
      "https://4kpictures.co.in/wp-content/uploads/2024/03/Salman-Khan.jpg",
  },
  {
    name: "Shah Rukh Khan",
    profile_path:
      "https://tse3.mm.bing.net/th/id/OIP.Ka7dZOVSaKGqDY1UDeIvGgHaE8",
  },
  {
    name: "Aamir Khan",
    profile_path:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/Aamir-khan.jpg",
  },
  {
    name: "Deepika Padukone",
    profile_path: "https://wallpapercave.com/wp/wp6788307.jpg",
  },
  {
    name: "Ranveer Singh",
    profile_path:
      "https://thedailyguardian.com/wp-content/uploads/2025/11/ranveer-singh.png",
  },
  {
    name: "Ranbir Kapoor",
    profile_path:
      "https://media.assettype.com/deccanherald%2F2026-04-16%2F2bpoawme%2FRanbir-Kapoor.jpg",
  },
  {
    name: "Alia Bhatt",
    profile_path:
      "https://assets.gqindia.com/photos/63033b1a0f61f07125bf9683/16:9/w_2560,c_limit/Alia-Bhatt_01.jpeg",
  },
  {
    name: "Kartik Aaryan",
    profile_path:
      "https://i.cdn.newsbytesapp.com/images/l41620231121135337.jpeg",
  },
  {
    name: "Rashmika Mandanna",
    profile_path: "https://img.indianwitness.com/large/rashmika--3534.webp",
  },
  {
    name: "Kriti Sanon",
    profile_path:
      "https://wallpapers.com/images/hd/kriti-sanon-animal-print-hd-ocoxufhnbm3a6j8t.jpg",
  },
  {
    name: "Akshay Kumar",
    profile_path:
      "https://m.media-amazon.com/images/M/MV5BMTQ3NzQyMjk0Ml5BMl5BanBnXkFtZTcwNzM1NzQ0NA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Varun Dhawan",
    profile_path:
      "https://www.pinkvilla.com/images/2025-02/2108283907_varun-dhawan.jpg",
  },
  {
    name: "Tiger Shroff",
    profile_path:
      "https://i.pinimg.com/originals/0e/dd/a1/0edda18ec28e7d03f88d8bc4a0d4ec78.jpg",
  },
  {
    name: "Kiara Advani",
    profile_path:
      "https://www.bollywoodhungama.com/wp-content/uploads/2022/10/Kiara-Advani-1-10.jpg",
  },
];

export const dummyShowsData = [
  {
    _id: "movie001",
    title: "Saiyaara",
    overview: "A romantic Bollywood drama featuring new generation actors.",
    poster_path: "https://image.tmdb.org/t/p/original/saiyaara.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/saiyaara-bg.jpg",
    genres: [
      { id: 1, name: "Romance" },
      { id: 2, name: "Drama" },
    ],
    casts: dummyCastsData,
    release_date: "2025-08-01",
    vote_average: 8.2,
    runtime: 140,
  },

  {
    _id: "movie002",
    title: "Sikandar",
    overview: "An action-packed Bollywood entertainer starring Salman Khan.",
    poster_path: "https://image.tmdb.org/t/p/original/sikandar.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/sikandar-bg.jpg",
    genres: [
      { id: 3, name: "Action" },
      { id: 4, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-30",
    vote_average: 7.5,
    runtime: 145,
  },

  {
    _id: "movie003",
    title: "Jawan",
    overview: "A high voltage action drama starring Shah Rukh Khan.",
    poster_path: "https://image.tmdb.org/t/p/original/jawan.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/jawan-bg.jpg",
    genres: [
      { id: 5, name: "Action" },
      { id: 6, name: "Drama" },
    ],
    casts: dummyCastsData,
    release_date: "2023-09-07",
    vote_average: 8.5,
    runtime: 169,
  },
];
export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
  ],
  "2025-07-25": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
  ],
  "2025-07-26": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
  ],
  "2025-07-27": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
  ],
};

export const dummyDashboardData = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUser: 5,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
      __v: 0,
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "CinemaX" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "CinemaX" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 49,
    bookedSeats: ["A1"],
    isPaid: true,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "CinemaX" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true,
  },
];
