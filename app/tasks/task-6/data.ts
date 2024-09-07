// Define an interface for the card data with only id and title
export interface CardData {
  id: string; // Unique identifier for each card
  title: string; // Title of the card
}

// Exporting an array of objects that can be used by FlatList
export const cardData: CardData[] = [
  {
    id: "1",
    title: "Kantinti Memorial Open",
  },
  {
    id: "2",
    title: "Uganda Open",
  },
  {
    id: "3",
    title: "Kireka Open",
  },
  {
    id: "4",
    title: "Zabasajja Memorial Open",
  },
  {
    id: "5",
    title: "Sage Wood Chess Cup",
  },
  {
    id: "6",
    title: "Rwabushenyi Memorial Open",
  },
  // Add more objects as needed
];
