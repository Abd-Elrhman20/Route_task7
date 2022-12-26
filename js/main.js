var quotes = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“Be the change that you wish to see in the world.”", "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", "“Always forgive your enemies; nothing annoys them so much.”", "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"];
var author = ["― Albert Einstein", "― Frank Zappa", "― Marcus Tullius Cicero", "― Mahatma Gandhi", "― Maya Angelou", "― Oscar Wilde", "― Ralph Waldo Emerson"];
function addNewQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').innerHTML = quotes[randomNumber];
    document.getElementById('author').innerHTML = author[randomNumber];
}
