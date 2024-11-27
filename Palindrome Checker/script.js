const checkButton = document.querySelector('#check-btn');
const resultContainer = document.querySelector('#result');
const inputWord = document.getElementById('text-input');

/*  
    Based on an input string, this function will return an integer:
    true if the string is a palindrome
    false if the string is not a palindrome
    isPalindrome is a recursive function
*/
function isPalindrome(word) {
    //Base Case:
    if (word.length <= 1) {
        return true;
    }
    
    //Recursive Case:
    if (word[0] === word[word.length - 1]) {
        return true && isPalindrome(word.substring(1, word.length-1));
    }

    return false;
}

/*
    Cleans up the input, making all characters lowercase and 
    removing any non-alphanumeric characters
*/
function cleanUpString(word) {
    const regex = /[^a-z0-9]/g;
    word = word.toLowerCase();
    word = word.replace(regex, '');
    
    return word;
}

/*
    This is a function that will affect the webpage when
    isPalindrome is run.
*/
function htmlUpdater() {
    //The word in the input box
    const word = inputWord.value;

    if (word.length === 0){
        resultContainer.innerHTML = `
        <p>Please input a value</p>
        `;
        alert("Please input a value");
    }
    else if (isPalindrome(cleanUpString(word))) {
        resultContainer.innerHTML = `
        <p>"${word}" is a palindrome.</p>
        `;
    } else {
        resultContainer.innerHTML = `
        <p>"${word}" is not a palindrome.</p>
        `;
    }


    resultContainer.classList.remove('hide');    
}

checkButton.addEventListener('click', htmlUpdater);
