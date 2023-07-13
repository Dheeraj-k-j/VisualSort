import { animateHeapSort } from "./animateHeapSort";
import { getHeapSortAnimations } from "./getHeapSortAnimation";

const heapSort = (array, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor) => {
    const animations = getHeapSortAnimations(array);
    animateHeapSort(animations, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor);
}

export default heapSort;