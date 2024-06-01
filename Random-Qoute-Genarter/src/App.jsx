import { useState } from 'react';
import './index.css'

function App() {
  const [randomQuote, setRandomQuote] = useState()
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best. - St. Jerome",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "The best revenge is massive success. - Frank Sinatra",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "Act as if what you do makes a difference. It does. - William James",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "Whether you think you can or think you can’t, you’re right. - Henry Ford",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "To see what is right and not do it is a lack of courage. - Confucius",
    "Reading is to the mind, as exercise is to the body. - Brian Tracy",
    "The future belongs to the competent. Get good, get better, be the best! - Brian Tracy",
    "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded. - Jack Canfield",
    "Things work out best for those who make the best of how things work out. - John Wooden",
    "A room without books is like a body without a soul. - Marcus Tullius Cicero",
    "I think it is possible for ordinary people to choose to be extraordinary. - Elon Musk",
    "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine. - Jack Ma",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
    "The ones who are crazy enough to think they can change the world, are the ones that do. - Steve Jobs",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "What we achieve inwardly will change outer reality. - Plutarch",
    "Dream big and dare to fail. - Norman Vaughan",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Go confidently in the direction of your dreams! Live the life you’ve imagined. - Henry David Thoreau",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Act as if what you do makes a difference. It does. - William James",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "Whether you think you can or think you can’t, you’re right. - Henry Ford",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "To see what is right and not do it is a lack of courage. - Confucius",
    "Reading is to the mind, as exercise is to the body. - Brian Tracy",
    "The future belongs to the competent. Get good, get better, be the best! - Brian Tracy",
    "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded. - Jack Canfield",
    "Things work out best for those who make the best of how things work out. - John Wooden",
    "A room without books is like a body without a soul. - Marcus Tullius Cicero",
    "I think it is possible for ordinary people to choose to be extraordinary. - Elon Musk",
    "Never give up."
];

function handleGenerateRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length)
  setRandomQuote(quotes[randomIndex])
}


  return (
    <div style={{backgroundColor:'white',color:'black',padding:15,borderRadius:10}}>
      <h1>Random Quote Generater</h1>
      <h3>{randomQuote}</h3>
      <button onClick={handleGenerateRandomQuote}>Generate Quote</button>
    </div>
  )
}

export default App