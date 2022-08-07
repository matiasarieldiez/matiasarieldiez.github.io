import { fetchBooks } from "./fetchBooks.js";

//A Function that remaps the fetched information
export const remapFetchedData = async (fetchedData) => {
    return fetchedData.items.map((book) => {
        const { volumeInfo, ...rest } = book;
        console.log(volumeInfo);
        return {
            title: volumeInfo.title,
            authors:
                (volumeInfo.authors || []).join(", ") || "Author unavailable",
            imageLink:
                "imageLinks" in volumeInfo
                    ? volumeInfo.imageLinks.smallThumbnail ||
                      volumeInfo.imageLinks.thumbnail
                    : "",
            description: volumeInfo.description || "Description unavailable.",
        };
    });
};
