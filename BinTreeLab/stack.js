// JavaScript program to find the next right smaller number of the next greater number

function nextGreater(arr, n){

  let newStack = [];
  let next = [];

  for (i = n-1; i>= 0; i--){

    while (newStack.length != 0 && newStack[0] <= arr[i]){
        newStack.pop();
    }
    if (newStack.length != 0){
      next[i] = newStack[0];
    }
    else{
      next[i] = -1;
    }
    return newStack.push(i);
  }
  
}

nextGreater([3, 7, 1, 7, 8, 4, 5, 2], 8);