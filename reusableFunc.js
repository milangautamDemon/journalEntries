export const appendFunction = (parentItem, childItems) => {
    childItems.forEach(child => parentItem.appendChild(child));
};