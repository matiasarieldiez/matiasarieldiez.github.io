export const deleteHTMLElement = (elementClassName) => {
    const elementsToDelete = document.querySelectorAll(elementClassName);
    elementsToDelete.forEach((element) => {
        element.remove();
    });
};
