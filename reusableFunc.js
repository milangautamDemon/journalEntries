export const appendFunction = (parentItem, childItems) => {
    childItems.forEach(child => parentItem.appendChild(child));
};

export function removeItems(parent, childLists) {
    const elementsToRemove = Array.from(childLists);
    console.log(elementsToRemove)
  
    for (let i = elementsToRemove.length - 1; i >= 0; i--) {
      parent.removeChild(elementsToRemove[i]);
    }
  }
  