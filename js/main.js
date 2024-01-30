const menuButton = document.querySelector('.menu-btn')
const quote = document.getElementById('quote')
const card = document.querySelector('.card')
const stack = document.querySelector('.stack')
const year = document.getElementById('year')

const quotes = [
  'Proof by analogy is fraud.',
  'Deleted code is debugged code.',
  'Fix the cause, not the symptom.',
  'Time and JavaScript wait for none.',
  'Simplicity is the soul of efficiency.',
  'Showing off is the fool’s idea of glory.',
  'Make it work, make it right, make it fast.',
  'It’s harder to read code than to write it.',
  'Simplicity is prerequisite for reliability.',
  'Java is to JavaScript what car is to Carpet.',
]

// Confetti
const confettiSettings = {
  target: 'confetti',
  max: 40,
  size: 1.5,
  clock: 5,
  props: ['circle'],
}
const confetti = new ConfettiGenerator(confettiSettings)

// Menu Button
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active')
  quote.classList.toggle('fade-in')
  card.classList.toggle('stacked')
  stack.classList.toggle('stacked')
  if (card.classList.contains('stacked')) {
    // Confetti
    confetti.render()
    // Get random quote
    quote.innerText = quotes[~~(quotes.length * Math.random())]
  } else setTimeout(() => confetti.clear(), 350)
})

// Copyright year
year.innerText = new Date().getFullYear()
