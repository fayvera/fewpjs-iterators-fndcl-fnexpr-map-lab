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

const titleCased = (input) => {
  return tutorials.map(title => {
     const token = title.split(' ');
     const capitalize = 
      token.map(token => token.charAt(0).toUpperCase() + token.slice(1))
      const response = capitalize.join(' ')
      return response
  })
}


// tutorials.map {|l| return l}