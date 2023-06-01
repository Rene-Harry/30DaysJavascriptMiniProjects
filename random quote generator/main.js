let btn = document.querySelector('.generateBtn');
let author = document.querySelector('.author');
let quote = document.querySelector('.quote');

const philosophicalQuotes = [
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    quote: "I think therefore I am.",
    author: "René Descartes"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle"
  },
  {
    quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    quote: "Whereof one cannot speak, thereof one must be silent.",
    author: "Ludwig Wittgenstein"
  },
  {
    quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Plato"
  },
  {
    quote: "In the midst of winter, I found there was, within me, an invincible summer.",
    author: "Albert Camus"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  }
];


btn.addEventListener('click', () => {
  let randomQuote = philosophicalQuotes[Math.floor(Math.random() * philosophicalQuotes.length)];
  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.author;
})








