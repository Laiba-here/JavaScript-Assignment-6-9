//           .... QUESTION 1 ....
// let a = 10;

        // Store results in a variable for display
        // let result = "The value of a is: " + a + "<br>..........................................................<br>";

        // Pre-increment 'a' and show result
        // result += "The value of ++a is: " + (++a) + "<br>";
        // result += "Now the value of a is: " + a + "<br>";

        // Post-increment 'a' and show result
        // result += "The value of a++ is: " + (a++) + "<br>";
        // result += "Now the value of a is: " + a + "<br>";

        // Decrement 'a' using -a and display the result (assuming you want to decrement)
        // result += "The value of --a is: " + (--a) + "<br>";
        // result += "Now the value of a is: " + a + "<br>";

        // Post-decrement 'a' and show result
        // result += "The value of a-- is: " + (a--) + "<br>";
        // result += "Now the value of a is: " + a + "<br>";

        // Display result in the browser
        // document.getElementById("result").innerHTML = result;

        // .... QUESTION 2 ....
        // let a = 2, b = 1;
        // var result = --a - --b + ++b + b--; 
        // console.log(result)

        //      .... QUESTION 3 ....
        // function greetUser() {
            // Get the name entered by the user
            // let userName = document.getElementById("name").value;

            // Display a greeting message
        //     if (userName) {
        //         document.getElementById("greeting").innerHTML = "Hello, " + userName + "! Welcome!";
        //     } else {
        //         document.getElementById("greeting").innerHTML = "Please enter your name!";
        //     }
        // }

        //           .... QUESTION 4 ....
        // var num = prompt(`Enter a number:`);

// Use logical OR to set a default value of 5 if no number is provided
// num = parseInt(num) || 5;

// Generate the multiplication table using repetitive string concatenation
// result = `
// ${num} x 1 = ${num * 1}<br>
// ${num} x 2 = ${num * 2}<br>
// ${num} x 3 = ${num * 3}<br>
// ${num} x 4 = ${num * 4}<br>
// ${num} x 5 = ${num * 5}<br>
// ${num} x 6 = ${num * 6}<br>
// ${num} x 7 = ${num * 7}<br>
// ${num} x 8 = ${num * 8}<br>
// ${num} x 9 = ${num * 9}<br>
// ${num} x 10 = ${num * 10}<br>
// `;

// Display the result in the browser
// document.write(result);

// ====================Question5: Take

// a) Take three subjects name from user and store them in 3 different variables
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// b) Total marks for each subject is 100, store it in another variable
// var totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable
// var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));

// d) Take obtained marks for remaining 2 subjects from user and store them in variables
// var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

// Calculate percentage for each subject
// var percentage1 = (obtainedMarks1 / totalMarks) * 100;
// var percentage2 = (obtainedMarks2 / totalMarks) * 100;
// var percentage3 = (obtainedMarks3 / totalMarks) * 100;

// e) Calculate total obtained marks and overall percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var overallPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in the browser using a table
// document.write("<h2>Marks and Percentage Calculator</h2>");
// document.write("<table border='1' cellpadding='10' cellspacing='0'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// // document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
// // document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
// // document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
// // document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + overallPercentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");
