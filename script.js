// Question 1) 

function capitalizeWords(str) {
    // Split the input string into an array of words
    const words = str.split(' ');
    const capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      if (word.length > 0) {
        // Capitalize the first letter of the word
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
      } else {
        // Handle empty words
        capitalizedWords.push('');
      }
    }
  
    // Join the capitalized words back into a single string
    const capitalizedString = capitalizedWords.join(' ');
  
    return capitalizedString;
  }
  
  const str = 'strings are immutable in javascript';
  const capitalizedStr = capitalizeWords(str);
  console.log(capitalizedStr); 

console.log("---------------------------------------------------------");

// Quetsion 2)

function convertToInitials(namesArr) {
    const initialsArr = [];
  
    for (const fullName of namesArr) {
      // Split the full name into first name and last name
      const [firstName, lastName] = fullName.split(' ');
  
      // Get the initials of the first and last names and concatenate them
      const initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
  
      initialsArr.push(initials);
    }
  
    return initialsArr;
  }
  
  const namesArr = ["roronoa zoro", "vinsmoke sanji", "tony tony chopper", "gold roger"];
  const initials = convertToInitials(namesArr);
  console.log(initials);

  console.log("--------------------------------------------------------");


// Question 3)

function isWeekend(date) {    
    const dayOfWeek = date.getDay();
    
    // Check if the day is Sunday (0) or Saturday (6)
    return dayOfWeek === 0 || dayOfWeek === 6;
  }
  
  // Create a Date object for today
  const today1 = new Date();
  
  // Use the isWeekend function to check if today is a weekend
  const isTodayWeekend = isWeekend(today1);
  
  // Display the result based on whether today is a weekend or not
  if (isTodayWeekend) {
    console.log('Today is the weekend.');
  } else {
    console.log('Today is not the weekend.');
  }
  

  console.log("--------------------------------------------");


  // Question 4)

  function getDayName(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
  }
  
  // Function to get the name of the month
  function getMonthName(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()];
  }
  
  // Create a Date object for today
  const today = new Date();
  
  // Get the day and month names using the functions
  const day = getDayName(today);
  const month = getMonthName(today);
  
  // Display the day and month
  console.log(`Day is: ${day} - Month is: ${month}`);


