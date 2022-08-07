// A Function that Fetches Google Books API
export const fetchBooks = async (searchTerm) => {
    const response = await fetch(
        `https://books.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`,
    );

    // User feedback in case of unsuccessfull fetch
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        alert("Error while searching for book. Plesae, try again");
    }
};
