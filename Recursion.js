function isPalindrome(word) {
    // Remove any non-alphanumeric characters and convert the word to lowercase
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare characters from both ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively check the rest of the word without the first and last characters
        return isPalindrome(word.slice(1, -1));
    } else {
      // If the characters at the ends are different, it's not a palindrome
        return false;
    }
}

  // Example usage:
  console.log(isPalindrome("gag"));      // true
  console.log(isPalindrome("kayak"));    // true
  console.log(isPalindrome("php"));      // false
  console.log(isPalindrome("radar"));    // true
  console.log(isPalindrome("hello"));    // false
