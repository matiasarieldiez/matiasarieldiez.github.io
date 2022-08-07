let parentDiv = "";
let imgSource = "";
const parentSection = document.querySelector(".book-list");

// A function that appends HTML elements
export const appendTextElement = (
    elementType,
    textString,
    parentElement,
    className,
) => {
    // 1. create a new HTML element
    const element = document.createElement(elementType);

    // 2. create a text node
    const text = document.createTextNode(textString);

    // 3. attach textNode (child) to the new HTML element (parent)
    element.appendChild(text);

    element.classList.add(className);

    // 4. attach the full HTML element (new element with text inside) to a parent on the page
    parentElement.appendChild(element);
};

// A Function that creates HTML Elements
export const createBookCard = (books) => {
    books.forEach((book) => {
        appendTextElement("div", "", parentSection, `book-list__book`);
        parentDiv = document.querySelector(`.book-list`).lastChild;
        appendTextElement("img", "", parentDiv, "book-list__book--img");
        imgSource = document
            .querySelector(`.book-list`)
            .lastChild.querySelector(".book-list__book--img");
        imgSource.src = book.imageLink;
        appendTextElement(
            "h4",
            book.authors,
            parentDiv,
            "book-list__book--author",
        );
        appendTextElement(
            "h2",
            book.title,
            parentDiv,
            "book-list__book--title",
        );
        appendTextElement(
            "p",
            book.description,
            parentDiv,
            "book-list__book--description",
        );
        appendTextElement(
            "button",
            "Read More",
            parentDiv,
            "book-list__book--button",
        );
    });
};
