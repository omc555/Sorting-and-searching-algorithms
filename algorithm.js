function insertionSort(arr) {
    // Iterate through the array starting from the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
      // Pick the current element to be inserted into the sorted sequence.
        let currentElement = arr[i];

      // Initialize a variable to traverse the sorted sequence.
        let j = i - 1;

      // Compare the current element with elements in the sorted sequence and shift them to the right if they are greater.
        while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j]; // Shift the element to the right.
        j--; // Move to the previous element in the sorted sequence.
        }

      // Insert the current element into its correct position in the sorted sequence.
        arr[j + 1] = currentElement;
    }
}

  // Example usage:
    let arrayToSort = [5, 2, 9, 3, 6, 1];
    insertionSort(arrayToSort);
  console.log(arrayToSort); // Sorted array
