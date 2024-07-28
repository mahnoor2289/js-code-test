// question no 1

function reverseArray(arr) {
    // Create a new array to store the reversed elements
    let reversedArray = [];
    
    // Iterate over the original array from end to beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        
        reversedArray.push(arr[i]);
    }
    
    // Return the reversed array
    return reversedArray;
}

// Example usage:
let arraySmall = [1, 2, 3, 4, 5];
console.log('Original array:', arraySmall);
console.log('Reversed array:', reverseArray(arraySmall));

let arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log('\nOriginal array:', arrayLarge);
console.log('Reversed array:', reverseArray(arrayLarge));



// question no 2
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Example usage
const numbers = [10, -5, 3, -1, 0];
const filteredNumbers = filterNegativeNumbers(numbers);
console.log(filteredNumbers);  // Output: [10, 3, 0]




   

// question no 3

    function countVowels(s) {
        // Define a string containing all vowels (both lowercase and uppercase)
        let vowels = "aeiouAEIOU";
        let count = 0;
        
        // Loop through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Check if the current character is a vowel
            if (vowels.includes(s[i])) {
                count++;
            }
        }
        
        return count;
    }
    
    // Example usage:
    console.log(countVowels("Hello, World!")); // Output: 3 (e, o, o)
    console.log(countVowels("JavaScript is amazing")); // Output: 7 (a, a, i, i, a, a, i)
    console.log(countVowels("Try this sentence")); // Output: 3 (i, e, e)




// question no 4

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    // Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("mom"));   // Output: true
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("refer")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true




// question no 5

function isInRange(num1, num2) {
    // Check if either num1 or num2 is within the range 50 to 99 (inclusive)
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Example usage
console.log(isInRange(45, 55)); // Output: true (55 is in the range)
console.log(isInRange(60, 101)); // Output: true (60 is in the range)
console.log(isInRange(30, 45)); // Output: false (Neither is in the range)
console.log(isInRange(50, 99)); // Output: true (Both are in the range)
console.log(isInRange(49, 100)); // Output: false (Neither is in the range)



// question no 6

function getMinMappedValue(arr, mapFunc) {
    // Map each element of the array using the provided mapping function
    let mappedArray = arr.map(mapFunc);
    
    // Find the minimum value in the mapped array
    let minValue = Math.min(...mappedArray);
    
    return minValue;
}

// Example usage:
let array = [1, 2, 3, 4, 5];

// Mapping function (example: squaring each element)
let mapFunction = (x) => x * x;

// Get the minimum value after mapping each element using the mapFunction
let minValue = getMinMappedValue(array, mapFunction);
console.log("Minimum value after mapping:", minValue);  



// question no 7
    function createUpdatedString(inputString) {
        // Check if the input string has length 3 or more
        if (inputString.length < 3) {
            return "String length must be 3 and above.";
        }
        
        // Extract the last 3 characters of the input string
        let lastThreeChars = inputString.slice(-3);
        
        // Create a new string by repeating the last 3 characters 4 times
        let updatedString = lastThreeChars.repeat(4);
        
        return updatedString;
    }
    
    // Example usage:
    let originalString = "Hellomahnoor";
    let updatedString = createUpdatedString(originalString);
    console.log(updatedString);  



    
    // question no 8
    function classifyAngle(angle) {
        if (angle > 0 && angle < 90) {
            return 'Acute angle'; // Angle between 0 and 90 degrees
        } else if (angle === 90) {
            return 'Right angle'; // Exactly 90 degrees
        } else if (angle > 90 && angle < 180) {
            return 'Obtuse angle'; // Angle between 90 and 180 degrees
        } else if (angle === 180) {
            return 'Straight angle'; // Exactly 180 degrees
        } else {
            return 'Invalid angle'; // Angles should be between 0 and 180 degrees
        }
    }
    
    // Example usage
    console.log(classifyAngle(45));   // Output: Acute angle
    console.log(classifyAngle(90));   // Output: Right angle
    console.log(classifyAngle(120));  // Output: Obtuse angle
    console.log(classifyAngle(180));  // Output: Straight angle
    console.log(classifyAngle(200));  // Output: Invalid angle
    console.log(classifyAngle(-10));  // Output: Invalid angle



    
    // question no 9

    function findSmallestRoundNumber(value) {
        // Convert the value to an integer if it is not already
        const num = Math.ceil(value);
    
        // Calculate the factor of 10 required to round up to the nearest round number
        const factor = Math.pow(10, Math.floor(Math.log10(num)) + 1);
    
        // Return the smallest round number that is not less than the given value
        return Math.ceil(num / factor) * factor;
    }
    
    // Example usage
    console.log(findSmallestRoundNumber(590));  // Output: 600
    console.log(findSmallestRoundNumber(592));  // Output: 600
    console.log(findSmallestRoundNumber(1000)); // Output: 1000
    console.log(findSmallestRoundNumber(1001)); // Output: 2000
    console.log(findSmallestRoundNumber(45));   // Output: 50


    

    // question no 10

    function findIndexOfItem(arr, target) {
        // Loop through the array using a for loop
        for (let i = 0; i < arr.length; i++) {
            // Check if the current item is equal to the target
            if (arr[i] === target) {
                return i; // Return the index if found
            }
        }
        return -1; // Return -1 if the target is not found
    }
    
    // Example usage
    const arrays = [5, 10, 15, 20, 25];
    
    console.log(findIndexOfItem(array, 15)); // Output: 2
    console.log(findIndexOfItem(array, 20)); // Output: 3
    console.log(findIndexOfItem(array, 30)); // Output: -1
    console.log(findIndexOfItem(array, 5));  // Output: 0
    