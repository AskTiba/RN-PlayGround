// chessPlayers.ts

interface ChessPlayer {
  id: number;
  name: string;
  age: number;
  chessRating: number;
}

export const chessPlayers: ChessPlayer[] = [
  {
    id: 1,
    name: "Magnus Carlsen",
    age: 31,
    chessRating: 2882,
  },
  {
    id: 2,
    name: "Fabiano Caruana",
    age: 29,
    chessRating: 2832,
  },
  {
    id: 3,
    name: "Levon Aronian",
    age: 38,
    chessRating: 2815,
  },
  {
    id: 4,
    name: "Maxime Vachier-Lagrave",
    age: 30,
    chessRating: 2811,
  },
  {
    id: 5,
    name: "Viswanathan Anand",
    age: 41,
    chessRating: 2804,
  },
  {
    id: 6,
    name: "Sergey Karjakin",
    age: 31,
    chessRating: 2793,
  },
  {
    id: 7,
    name: "Shakhriyar Mamedyarov",
    age: 36,
    chessRating: 2792,
  },
  {
    id: 8,
    name: "Anish Giri",
    age: 27,
    chessRating: 2788,
  },
  {
    id: 9,
    name: "Wesley So",
    age: 28,
    chessRating: 2786,
  },
  {
    id: 10,
    name: "Alexander Grischuk",
    age: 37,
    chessRating: 2784,
  },
  {
    id: 11,
    name: "Hikaru Nakamura",
    age: 33,
    chessRating: 2782,
  },
  {
    id: 12,
    name: "Teimour Radjabov",
    age: 34,
    chessRating: 2778,
  },
  {
    id: 13,
    name: "Ding Liren",
    age: 28,
    chessRating: 2777,
  },
  {
    id: 14,
    name: "Yu Yangyi",
    age: 27,
    chessRating: 2775,
  },
  {
    id: 15,
    name: "Sergei Movsesian",
    age: 42,
    chessRating: 2773,
  },
  {
    id: 16,
    name: "Radoslaw Wojtaszek",
    age: 34,
    chessRating: 2772,
  },
  {
    id: 17,
    name: "Pentala Harikrishna",
    age: 35,
    chessRating: 2771,
  },
  {
    id: 18,
    name: "Leinier Dominguez",
    age: 38,
    chessRating: 2769,
  },
  {
    id: 19,
    name: "Veselin Topalov",
    age: 46,
    chessRating: 2768,
  },
  {
    id: 20,
    name: "Boris Gelfand",
    age: 53,
    chessRating: 2767,
  },
];

export default chessPlayers;
