const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (string) => {
//   return tutorials.map( string => {
//     const words = string.split (` `);
//     const capWords = words.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
//     const finishedString = capWords.join(` `)
//     return finishedString;
//   });
// }


// console.log(titleCased(tutorials))


let titleCased = tutorials.map( string => {
  const words = string.split (` `);
  console.log(words)
  const capWords = words.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
  console.log(capWords)
  const finishedString = capWords.join(` `)
  return finishedString;
});
