function doRectanglesIntersect(rect1, rect2) {
    // If one is to the left of other
    if (rect1.x2 < rect2.x1 || rect2.x2 < rect1.x1) {
        return false;
    }

    // If one is above other
    if (rect1.y2 > rect2.y1 || rect2.y2 > rect1.y1) {
        return false;
    }

    // Otherwise, they intersect
    return true;
}

//test cases
const rectA = { x1: 0, y1: 10, x2: 10, y2: 0 };
const rectB = { x1: 5, y1: 5, x2: 15, y2: -5 };
const rectC = { x1: 11, y1: 9, x2: 20, y2: 0 };

console.log("Rect A & B intersect:", doRectanglesIntersect(rectA, rectB)); // true
console.log("Rect A & C intersect:", doRectanglesIntersect(rectA, rectC)); // false
