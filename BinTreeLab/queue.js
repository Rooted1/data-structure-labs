//javascript program to subtract 1 from every item in an array

function queue(arr) {
  newArr = [];

  //iterate the arr to subtract 1 from each item
  for (i = 0; i < arr.length; i++) {

    //push to new array
    newArr.push(arr[i] - 1);
  }

  return newArr;
}

queue([1, 2, 2, 3, 4, 5])