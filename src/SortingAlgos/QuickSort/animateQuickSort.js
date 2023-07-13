export const animateQuickSort = (animations, animationSpeed, primaryColor, secondaryColor, comparisionColor, finalColor) => {
    let cnt=0;
    let pivotFinalized = false;

    // Bars visible on the page
    const arrayBars = document.getElementsByClassName("array-bar");
    for(let i=0; i<animations.length; i++){
        const curr = animations[i];

        if(curr.length==1){
            if(pivotFinalized){
                setTimeout(()=>{
                    const pivotIndex = curr[0];
                    const pivotStyle = arrayBars[pivotIndex].style;
                    pivotStyle.backgroundColor = finalColor;
                }, cnt++*animationSpeed)
                pivotFinalized = false;
            } else{
                setTimeout(()=>{
                    const pivotIndex = curr[0];
                    const pivotStyle = arrayBars[pivotIndex].style;
                    pivotStyle.backgroundColor = secondaryColor;
                }, cnt++*animationSpeed)
                pivotFinalized = true;
            }
        } else {

            for(let j=0; j<curr.length; j++){
                // j-th index element greater than pivot except last element
                const barIndex = curr[j];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(()=>{
                    barStyle.backgroundColor = comparisionColor;
                }, cnt++*animationSpeed)
                
                if(j!=curr.length-1 && j!=0){
                        setTimeout(()=>{
                            barStyle.backgroundColor = primaryColor;
                    }, cnt++*animationSpeed)
                }
            }

            // Swap heigth of 0th and last bar presents int curr
            setTimeout(()=>{
                const barOneIndex = curr[0]
                const barTwoIndex = curr[curr.length-1];
    
                const barOneStyle = arrayBars[barOneIndex].style;
                const barOneHeight = barOneStyle.height;
    
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const barTwoHeight = barTwoStyle.height;
                // console.log(barTwoHeight);
    
                barOneStyle.height = barTwoHeight;
                barTwoStyle.height = barOneHeight;

                barOneStyle.backgroundColor = primaryColor;
                barTwoStyle.backgroundColor = primaryColor;
            }, cnt++*animationSpeed)
            // [barOneStyle.height, barTwoStyle.height] = [barTwoStyle.height, barOneStyle.height];
        }
    }

    setTimeout(()=>{
        for(let i=0; i<arrayBars.length; i++){
            arrayBars[i].style.backgroundColor=primaryColor;
        }
    },cnt++*animationSpeed)
}