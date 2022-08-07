import { grabSearchTerm } from "./defineSearchTerm.js";
import { fetchBooks } from "./fetchBooks.js";
import { remapFetchedData } from "./remapsFetchedData.js";
import { createBookCard } from "./createsHTMLElements.js";

// A function that process the Search Query by invoking the other functions
export const processSearchQuery = async () => {
    const searchTerm = grabSearchTerm();
    const booksData = await fetchBooks(searchTerm);
    const booksList = await remapFetchedData(booksData);
    createBookCard(booksList);
};
