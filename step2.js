 function sumZero(arr){
    let start = 0
    let end = arr.length -1;
    while (start < end){
        sum = arr[start] + arr[end];
        if(sum === 0){
            return true 
    } else if (sum > 0){
        end--;
    } else {
        start++;
    }
  }
  return false
}
console.log("------Sum Zero Results --------")
console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1, 2, 3]))
console.log(sumZero([1, 2, 3, -2]))

// I believe the time complexity for this function is O(n) because we are looping through the array once. 

function uniqueChar(str){
    return new Set(str).size === str.length;
}

console.log("-------Unique Characters Results -------")
console.log(uniqueChar("Monday"))
console.log(uniqueChar("Moonday"))

// I believe the time complexity for this function is O(1) as the Set() method pulls out the unique characters and compares them to the original string. 

function pangramCheck(str){
    const engAlpha = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\str/g;
    const lowercase = str.toLowerCase().replace(regex,'');

    for(let i = 0; i < engAlpha.length; i++){
        if(lowercase.indexOf(engAlpha[i]) === -1){
            return false;
        }
    }
    return true;
}
console.log("-------Paragram Sentence Results -------")
console.log(pangramCheck("The quick brown fox jumps over the lazy dog!"))
console.log(pangramCheck("I like cats, but not mice"))

//I believe this has a time complexity of O(n). I am using indexOf() to find the index of each of the letters in the English Alphabet and looping through the string to see if it contains all the letters. If indexOf() cannot find a letter, the loop stops and returns false. If it finds all the letters it returns true. 

function longestWord(arr){
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length){
            word = arr[i];
        }
    }
    return `"${word}" is ${word.length} characters long.`;
}
console.log("-------Longest Word Results -------")
console.log(longestWord(["hi", "hello"]))
console.log(longestWord(["I", "love", "Devmountain"]))

//Again, here I believe it's O(n) because we are looping through the string once and comparing the length of the longest running word so far. 