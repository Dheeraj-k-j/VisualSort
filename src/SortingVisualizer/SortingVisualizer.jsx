import React, { useState } from "react";
import quickSort from "../SortingAlgos/QuickSort";
import mergeSort from "../SortingAlgos/MergeSort";
import heapSort from "../SortingAlgos/HeapSort";
import "./SortingVisualizer.css";

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = (window.innerWidth - 110) / 5;
// const NUMBER_OF_ARRAY_BARS = 10;
const HEIGHT = window.innerHeight - Math.floor(window.innerHeight / 4);

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SortingVisualizer = () => {
  // Array to be visualized while sorting
  const [array, setArray] = useState([]);
  // Default color of bars
  const [primaryColor, setPrimaryColor] = useState("#61DAFB");
  // Color or bars  when Finalized them
  const [finalColor, setFinalColor] = useState("violet");
  // Color or bars when temporarily Finalized them
  const [secondaryColor, setSecondaryColor] = useState("red");
  // Color or bars  when comparing them
  const [comparisionColor, setComparisionColor] = useState("yellow");
  // To change animationspeed
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomIntFromInterval(5, HEIGHT));
    }
    setArray(arr);
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: primaryColor,
            height: `${value}px`,
          }}
        ></div>
      ))}
      <div className="button-container">
        <div className="reset-button">
          <button onClick={() => resetArray()}>Generate New Array</button>
        </div>
        <div className="sorting-buttons">
          <button
            onClick={() =>
              mergeSort(array, animationSpeed, primaryColor, comparisionColor)
            }
          >
            Merge Sort
          </button>
          <button
            onClick={() =>
              quickSort(
                [...array],
                animationSpeed,
                primaryColor,
                secondaryColor,
                comparisionColor,
                finalColor
              )
            }
          >
            Quick Sort
          </button>
          <button
            onClick={() =>
              heapSort(
                [...array],
                animationSpeed,
                primaryColor,
                secondaryColor,
                comparisionColor,
                finalColor
              )
            }
          >
            Heap Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
