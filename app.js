// assignment:7 question 31/34
// question 1. Write a program that displays current date and time in
// your browser.

// let date = new Date();
// let curDate = date.toDateString();
// document.writeln("Date" + curDate);

// let time = new Date();
// let curTime = time.toTimeString();
// document.writeln("Time" + curTime);

// QUESTION 2. Write a program that alerts the current month in words.
// For example December.


// let months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
//   let currentDate = new Date();
//   let currentMonthIndex = currentDate.getMonth();
//   let currentMonthName = months[currentMonthIndex];
//   alert("Current month is: " + currentMonthName);

//   question 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var days = prompt(" enter a current day");
// if (days === "saturday" || days === "sunday"){
//   alert("its fun day");
// }
// else{
//  console.log("its today");
// }

// question 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
  
//  let date = new Date().getDate();
//  if (date < 16) {
//     document.write("First fifteen days of the month");
//  } else {
//     document.write("Last days of the month");
//  }

//  question 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

//      let now = new Date();
//   let minutes = now.getTime() / (1000 * 60);

//  document.write(`Current Date: ${now}<br>`);
//  document.write(`Elapsed milliseconds since January 1, 1970: ${now.getTime()}<br>`);
//  document.write(`Elapsed minutes since January 1, 1970: ${minutes}`);
  
// question7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let hours1 = new Date().getHours();
// alert(hours1 < 12 ? "It's AM" : "It's PM");

// question 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

//  let laterDate = new Date(2020, 11, 31);
//  document.write(`<b>Later date: ${laterDate}</b>`);

//   question 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
  
//   let ramadanStart = new Date(2015, 5, 18); // June 18, 2015
// let today = new Date();
// let diff = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
// alert(${diff} days have passed since 1st Ramadan, 2015);

//  let ramadanStart = new Date(2015, 5, 18); // June 18, 2015
//  let today = new Date();
//  let diff = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
//   alert(`${diff} days have passed since 1st Ramadan, 2015`);

//   question 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
  //answer
  
//    let refDate = new Date();
// let yearStart = new Date(2015, 0, 1);
// let seconds = Math.floor((refDate - yearStart) / 1000);
// document.write(`On reference date ${refDate}, ${seconds} seconds had passed since beginning of 2015`);


// question 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
//    answer
//  let now2 = new Date();
// let hours2 = now2.getHours();
// now2.setHours(hours2 + 1);

// document.write(`Current date: ${now2}<br>`);
// document.write(`1 hour ago, it was ${new Date(now2.getTime() - 3600000)}`);

//   question 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
//   let now3 = new Date();
// let pastDate = new Date(
//     now3.getFullYear() - 100,
//     now3.getMonth(),
//     now3.getDate(),
//     now3.getHours(),
//     now3.getMinutes(),
//     now3.getSeconds()
// );

// alert(`Current date: ${now3}\n100 years back, it was: ${pastDate}`);

//   question 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// answer
//  var age = parseInt(prompt("Enter your age:"));
//  var currentYear = new Date().getFullYear();
//  document.write(`Your age is ${age}<br>Your birth year is ${currentYear - age}`);

// question 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// answer
   var customerName = "ABC Customer";
  var currentMonth = "February";
  var units = 410;
   var chargesPerUnit = 16;
  var netAmount = units * chargesPerUnit;
  var surcharge = 350;
  var grossAmount = netAmount + surcharge;

 document.write(`
    <h2>K-Electric Bill</h2>
    <p>Customer Name: ${customerName}</p>
    <p>Month: ${currentMonth}</p>
    <p>Number of units: ${units}</p>
    <p>Charges per unit: ${chargesPerUnit}</p>
    <p>Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}</p>
    <p>Late payment surcharge: ${surcharge.toFixed(2)}</p>
    <p>Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}</p>`);

