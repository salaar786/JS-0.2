//  chapter # 1

// Q 1

 alert("Welcome To Our Website")

//  Q 2

 alert( "Error! Please enter a valid password.")

// //  Q 3

 alert ( "Welcome to JS land... \n Happy Coding")

// //  Q 4 

 alert ("Welcome to js Land...")
 alert( "Happy Coding!")

// // Q 5

 console.log("Hello...I can run JS through my web browser's console");


// chapter # 2


// Q ; 1

 var username="ali";
 alert(username);


// //  Q; 2

 var myName = "John Doe"; 
 alert(myName);


// // Q; 3

 var message = "Hello World"; 
 alert(message); 


// // Q; 4

 var studentAge = 20; 
 var studentName = "ABDUL REHMAN"; 
 var studentGrade = "A"; 
 var studentCourse = "WEB DEVELOPMENT"; 

// // Displaying the student bio data in alert boxes
 alert("Name: " + studentName);
 alert("Age: " + studentAge);
 alert("Grade: " + studentGrade);
 alert("Course: " + studentCourse);


// Q; 5


var message = "pizza<br>pizz<br>";
 alert(message);

// Q; 6

 var email = "example@example.com"; // Assign your email address
alert("The email address is: " + email); 

// Q; 7

 var book = "A smarter way to learn JavaScript"; 
 alert("create with js"); 

 var book = "A smarter way to learn JavaScript"; // Declare the 'book' variable and assign a value
 alert(" <h1> I am trying to learn from the book A smarter</h1> <br> way to learn Java Script"); // Display the message in an alert box

// Q; 8

 // Create a new div element
 var div = document.createElement("div");

 // Store the string in a variable
 var specialString = "yah! I can write HTML content throught Java Script";

 // Set the content of the div to the special string
// div.innerHTML = specialString;

// Append the div to the body of the document
// document.body.appendChild(div);



// Q; 9

  Store the string in a variable
var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

 Show the string in an alert
 alert(specialString);
 Show the string in the browser
 document.body.innerHTML = specialString;



// CHAPTER NO 3

// Q; 1
 // Declare the variable and assign your age to it
 let age = 15;  

// // Display your age in an alert box
 alert("I am : " + age +"years old");


//Q; no 2


 var visitCount = localStorage.getItem("visitCount")
  if (visitCount === null) {
     visitCount = 1;
} else {
      If it exists, increment the visit count by 1
   visitCount = parseInt(visitCount) + 1;
 }


 localStorage.setItem("visitCount", visitCount);

// /
 document.body.innerHTML = "You have visited this site " + visitCount + " times.";

// Q; no 3

 var birthYear = 1990;   Replace 1990 with your actual birth year

  Display the message in the browse
document.body.innerHTML = "Your birth year is: " + birthYear +  " Data ntype of declared variable in number " ;

//  Q no 4

 Declare and initialize the variables
 var visitorName = "John Doe";        
 var productTitle = "T-shirt";      
 var quantity = 5;                   

 Display the message in the browser
 document.body.innerHTML = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";


// CHAPTER NO 4

// Q: 1
 var name = "John", age = 30, city = "New York";


// Q: 2


// Legal Variable Names;


 1 :name
 2: age
 3: firstName
 4: score
 5: $amount


// Illegal Variable Names:


 123 abc (Cannot start with a number)
 var (Reserved keyword)
 let (Reserved keyword)
 function! (Cannot contain special characters like !)
 my-variable (Hyphens are not allowed, use underscores or camelCase instead)
 Explanation:


// Q: 3
// A) 
 "<h1>Rules for naming JS variables</h1>";

// B)
 letters, numbehttps://salaar786.github.io/JS-0.2/rs, underscores (_), and dollar signs ($). For example: ($my_1stVariable.)

// C)
 letter, underscore (_), or dollar sign ($). For example: $name, _name, or name


// D)
 sensitive.


// E)
 JS reserved keywords.
