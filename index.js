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

const titleCased = () => {
 return tutorials.map((sentence) =>{ //map over each element
   const words = sentence.split(" ") //Split each thing in sentence at the spaces, words
   const capitalWords = words.map((word) => { // map over each word
     return word.charAt(0).toUpperCase() + word.slice(1) //uppercase the first letter of each word, then add the remainder of the word excluding the first letter
   })
   const repsonse = capitalWords.join(" ") // join the response at the spaces to make a whole sentence again.
   return repsonse //return
 }) 
  
}
 
// 