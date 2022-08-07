// A Function that grabs the search term from the DOM input field
export const grabSearchTerm = () => {
    const searchTerm = document
        .querySelector(".search-bar__input")
        .value.split(" ")
        .join("+");
    console.log(searchTerm);
    return searchTerm;
};
