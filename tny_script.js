/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Romanpreet kaur
   Date:  May 29, 2025 

*/

// Display current date & Time
document.getElementById("datenow").innerHTML = 'm/d/y<br />h:m:s';
dateStr + "<br / >" + timeStr;

//Display the time left until New Years Eve Bash
document.getElementById("days").textContent = 'dd';
document.getElementById("hrs").textContent = 'hh';
document.getElementById("mins").textContent = 'mm';
document.getElementById("secs").textContent = 'ss';

//Store current date & time
var currentDay = new Date;
var dateStr = currentDay.toLocalDatestring();
var timeStr = currentDay.toLocaleTimeString();

//Displays current date & time
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;

//Calculate the days until New Year Bash
var newYear = new DataTransfer('January 1st, 2025');
var nextYear= newYear.getFullYear() + 1;
var newYear.setFullYear(nextYear);
var daysleft (newYear - [currentDay ] / (1000*60*60));






