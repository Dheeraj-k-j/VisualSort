export const getQuickSortAnimations = (arr) => {
  const animations = [];
  const start=0;
  const end=arr.length-1;
  quickSort(arr, start, end, animations);
  return animations;
};

function quickSort(arr, start, end, animations){
    if(start<end){
        const pivotPos = partition(arr, start, end, animations);
        quickSort(arr, start, pivotPos-1, animations);
        quickSort(arr, pivotPos+1, end, animations);
    }
}

function partition(arr, start, end, animations) {
  animations.push([end]);

  var i = start;
  var j = start;

  var temp = [i];
  for (; j <= end; j=j+1) {
    if (arr[j] <= arr[end]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      temp.push(j);
      animations.push(temp);
      i=i+1;
      temp = [i];
    } else {
      temp.push(j);
    }
  }
  animations.push([i - 1]);
  return i - 1;
}
