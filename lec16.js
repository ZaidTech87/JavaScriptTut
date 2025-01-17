let arr=[3,4,56,7,1,2]
console.log(arr.reverse())
//sort function sort element in alphabetical order like assume string
console.log(arr.sort())
console.log(arr.toString())
console.log("sorted array is : ");
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }

}
arr.push(0);
arr.push(898);
    console.log("sorter is printed");
    // for(let i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    delete arr[3]
    //arrray length will remain same after deleteion 
    
console.log(arr)
let second=[2 ,3,5,7,4]
let third=[6,4,7,8,8,]
let new_Arr=arr.concat(second,third)

console.log(new_Arr)

//splice fuuntion
let num=[3,4,5,6,7,8,9]
num.splice(1,4,102,103,104,105,106,107)
//slice purani array ko modify mhi krta iske liye new array banana padega
console.log(num)
num.slice(2)
console.log(num.slice(2)) 
console.log(num.slice(2,5) )