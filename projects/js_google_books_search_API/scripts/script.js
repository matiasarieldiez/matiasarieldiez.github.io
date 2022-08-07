import { processSearchQuery } from "./modules/processSearchQuery.js";
import { deleteHTMLElement } from "./modules/deletesHTMLElements.js";

// When I click the Search Button, invoke processSearchQuery
document
    .querySelector(".search-bar__button")
    .addEventListener("click", (event) => {
        event.preventDefault();

        if (document.querySelector(".book-list__book")) {
            deleteHTMLElement(".book-list__book");
        }

        processSearchQuery();
    });
