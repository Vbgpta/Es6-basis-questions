function checkpalindrome(string){
    const arrayValues = string.split('');
    const reverseArrayvalues = arrayValues.reverse();
    const reverseString = reverseArrayvalues.join('');
    if(string == reverseString) {
        console.log('palindrome')
    } else {
        console.log('not palindrome')
    } 
}
const string= prompt('Enter a string:');
checkpalindrome(string);