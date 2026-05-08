// Problem 1
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let fullName = firstName + lastName;
alert(`Hello, ${fullName}`);

// Problem 2
let mobileModel = prompt("Please enter your favorite mobile phone model.");
document.writeln(`My favorite phone is: ${mobileModel}.<br>`);
document.writeln(`Length of string: ${mobileModel.length}`);

// Problem 3
let word = "Pakistani";
document.writeln(`String: ${word}<br>Index of 'n': 
                 ${word.indexOf("n")}`);

// Problem 4  
let word = "Hello World";
document.writeln(`String: ${word}<br>Last index of 'l': 
                 ${word.lastIndexOf("l")}`);      

// Problem 5
let word = "Pakistani";
document.writeln(`String: ${word}<br>Character at index 3: 
                 ${word[3]}`); 

// Problem 6
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let fullName = firstName.concat(" ",lastName);
alert(Hello, ${fullName});

// Problem 7
let city = 'Hyderabad';
document.writeln(`City: ${city}<br>
    After replacement: ${city.replace('Hyder','Islam')}`);

// Problem 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
document.writeln(message.replaceAll('and','&'));

// Problem : 9
let num = 472;
document.writeln(`Value: ${num}<br>`);
document.writeln(`Type: ${typeof num}<br>`);
let str = num.toString();
document.writeln(`Value: ${str}<br>`);
document.writeln(`Type:${typeof str}<br>`);


// Problem : 10
let userInput = prompt("Enter some text (e.g..peanuts):");
let uppercase = userInput.toUpperCase();

document.writeln("UserInput: " + userInput + "<br>");
document.writeln("Upper case: " + uppercase);

Problem : 11
let userInput = prompt("Enter a word (e.g., javascript):");
let uppercase = userInput.toUpperCase();

document.writeln("UserInput: " + userInput + "<br>");
document.writeln("Upper case: " + uppercase);

// Problem : 12
let numVar = 35.36;

let result = numVar.toString().replace(".", "");

document.write("Number: " + numVar + "<br>");
document.write("Result: " + result);

// Problem 13
let username = prompt("Enter your username:");
let isValid = true;

// ASCII codes check karne ke liye loop
for (let i = 0; i < username.length; i++) {
    let charCode = username.charCodeAt(i);
    
    // 33: !, 44: , , 46: . , 64: @
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username.");
} else {
    alert("Username saved: " + username);
}
// Problem 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// Input ko lowercase karein taake search asaan ho
let searchItem = userInput.toLowerCase();
let foundIndex = -1;

for (let i = 0; i < A.length; i++) {
    if (A[i] === searchItem) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    document.write(`${searchItem} is <b>available</b> at index ${foundIndex} in our bakery`);
} else {
    document.write(`We are sorry. ${searchItem} is <b>not available</b> in our bakery`);
}
// Problem 15
let password = prompt("Enter your password:");
let hasAlpha = false;
let hasNum = false;
let firstChar = password.charCodeAt(0);

// Condition check karne ke liye logic
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
} else if (firstChar >= 48 && firstChar <= 57) {
    alert("Password cannot begin with a number. Please enter a valid password.");
} else {
    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) hasAlpha = true;
        if (code >= 48 && code <= 57) hasNum = true;
    }
    if (hasAlpha && hasNum) {
        alert("Valid Password!");
    } else {
        alert("Password must contain both alphabets and numbers.");
    }
}
// Problem 16
var university = "University of Karachi";
var arr = university.split(""); // Har letter ko alag kar diya

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}
// Problem 17
let userInp = prompt("Enter some text:");
let lastChar = userInp.charAt(userInp.length - 1);

document.write("User input: " + userInp + "<br>");
document.write("Last character of input: " + lastChar);

// // Problem 18
let text = "The quick brown fox jumps over the lazy dog.";

document.writeln(`Text: ${text}<br>`);
document.writeln(`There are ${text.toLowerCase().split('the').length - 1} occurrence(s) of word 'the'`);