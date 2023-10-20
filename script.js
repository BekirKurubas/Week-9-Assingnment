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

