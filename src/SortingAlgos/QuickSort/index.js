import { animateQuickSort } from "./animateQuickSort";
import { getQuickSortAnimations } from "./getQuickSortAnimations";

const quickSort = (arr, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor) => {

    const animations = getQuickSortAnimations(arr);
    animateQuickSort(animations, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor);
}

export default quickSort;