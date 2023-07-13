export const animateHeapSort = (animations, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor) => {
    // Bars visible on the page
    const arrayBars = document.getElementsByClassName("array-bar");
    // Counter to setTimeout after equal intervals
    let cnt=0;

    for(let i=0; i<animations.length; i++){
        // Array curr contains compared, swaped and finalized indexes
        const curr = animations[i];

        if(curr.length==4){
            // 3 elements during maxHeapify
            if(curr[3]>=2){
                setTimeout(()=>{
                    // Getting indexes of 3 elements from the visible array in the dom
                    const barZeroIndex=curr[0], barOneIndex=curr[1], barTwoIndex=curr[2], n=curr[3];
                    // Changing their background color
                    if(barZeroIndex<n) arrayBars[barZeroIndex].style.backgroundColor = comparisionColor;
                    if(barOneIndex<n) arrayBars[barOneIndex].style.backgroundColor = comparisionColor;
                    if(barTwoIndex<n) arrayBars[barTwoIndex].style.backgroundColor = comparisionColor;
                }, cnt++*animationSpeed)

                const next = animations[i+1];
                // Length will be 3 if next swap is due too minHeapify
                if(next.length==3){
                    i++;
                    setTimeout(()=>{
                        //  2 swapped element during max heapify
                        const barZeroIndex=next[0], barOneIndex=next[1];
                        // Changing their background color
                        arrayBars[barZeroIndex].style.backgroundColor = secondaryColor;
                        arrayBars[barOneIndex].style.backgroundColor = secondaryColor;
                        // Changing their heights
                        const barZeroHeight = arrayBars[barZeroIndex].style.height;
                        const barOneHeight = arrayBars[barOneIndex].style.height;
                        arrayBars[barZeroIndex].style.height = barOneHeight;
                        arrayBars[barOneIndex].style.height = barZeroHeight;
                    }, cnt++*animationSpeed);
                }
                
                setTimeout(()=>{
                    // Getting indexes of 3 elements from the visible array in the dom
                    const barZeroIndex=curr[0], barOneIndex=curr[1], barTwoIndex=curr[2], n=curr[3];
                    // Changing their background color
                    if(barZeroIndex<n) arrayBars[barZeroIndex].style.backgroundColor = primaryColor;
                    if(barOneIndex<n) arrayBars[barOneIndex].style.backgroundColor = primaryColor;
                    if(barTwoIndex<n) arrayBars[barTwoIndex].style.backgroundColor = primaryColor;
                }, cnt++*animationSpeed)
            }
        } else if(curr.length==2){
            setTimeout(()=>{
                const barZeroIndex=curr[0], barOneIndex=curr[1];
                // Changing their background color
                arrayBars[barZeroIndex].style.backgroundColor = secondaryColor;
                arrayBars[barOneIndex].style.backgroundColor = secondaryColor;
                // Changing their heights
                const barZeroHeight = arrayBars[barZeroIndex].style.height;
                const barOneHeight = arrayBars[barOneIndex].style.height;
                arrayBars[barZeroIndex].style.height = barOneHeight;
                arrayBars[barOneIndex].style.height = barZeroHeight;
            }, cnt++*animationSpeed)
            setTimeout(()=>{
                const barZeroIndex=curr[0], barOneIndex=curr[1];
                // Reverting their bg  their background color
                arrayBars[barZeroIndex].style.backgroundColor = primaryColor;
                arrayBars[barOneIndex].style.backgroundColor = finalColor;
            }, cnt++*animationSpeed)
        }
    }

    setTimeout(()=>{
        for(let i=0; i<arrayBars.length; i++){
            arrayBars[i].style.backgroundColor=primaryColor;
        }
    },cnt++*animationSpeed)
}