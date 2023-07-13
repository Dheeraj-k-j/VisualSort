export const getHeapSortAnimations = (arr) => {
  // Animations i.e. every comparision and swapping between indexes will be stores in it and iterated in animateHeapSort funttion to geve beautiful animations
  const animations = [];

  // ----------------- HEAP SORT CODE START--------------------------
  // Creating max heap of the array so first element is the largest element in the array. Later will swap it with last element of the array and maxHeapify the remainig array again
  createMaxHeap(arr, animations);
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the first and last
    swap(arr, 0, i);
    animations.push([0, i]);
    // maxHeapify remaining array
    maxHeapify(arr, 0, i, animations);
  }
  // ----------------- HEAP SORT CODE START--------------------------

  return animations;
};

// Create Max Heap
function createMaxHeap(arr, animations) {
  let i = Math.floor(arr.length / 2);
  for (; i >= 0; i--) {
    maxHeapify(arr, i, arr.length, animations);
  }
}

// Max Heapify
function maxHeapify(arr, i, n, animations) {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;
  let largest = i;
  animations.push([i, leftChild, rightChild, n]);

  if (rightChild < n && arr[largest] < arr[rightChild]) largest = rightChild;

  if (leftChild < n && arr[largest] < arr[leftChild]) largest = leftChild;

  if (largest != i) {
    swap(arr, i, largest);
    animations.push([i, largest, -1]);
    maxHeapify(arr, largest, n, animations);
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}