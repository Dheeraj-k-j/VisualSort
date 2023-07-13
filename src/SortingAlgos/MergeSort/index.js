import {getMergeSortAnimations} from "./getMergeSortAnimations.js"
import {animateMergeSort} from "./animateMergeSort.js";

function mergeSort(array, animationSpeedMs, primaryColor, secondaryColor){
    const animations = getMergeSortAnimations(array);
    animateMergeSort(animations, animationSpeedMs, primaryColor, secondaryColor);
}

export default mergeSort;