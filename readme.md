# //TODO:Quiz
> Test your programmer knowledge with a quiz! Try easy, medium, and hard difficulties. Looking for something to share around the office? Chek out the quotes and jokes!

![](https://i.ibb.co/jVth02C/slideshow3.png)

A classmate and I created this site in two days, which was a real test of our front-end knowledge halfway through our _[General Assembly](https://generalassemb.ly/)_ Software Engineering Immersive course. We used three public APIs to create a quiz and pages for nerdy quotes and jokes.

You can visit the site _[here](https://todo-quiz-app.herokuapp.com/)_.

## Tools and Skills

- JavaScript
- React.js
- HTML5
- CSS3
- RESTful APIs
- Bulma CSS Framework
- npm
- Heroku
- GitHub

My partner and I built a website utilizing a public RESTful API. By reading the documentation we were able to generate random quotes and jokes from API databases and a quiz with multiple difficulty settings.

We took advantage of React's amazing state functionality to render new quiz questions and answers as required.

We styled the site using the Bulma CSS framework.

It is hosted on Heroku.

It is playable on mobile.

## Usage

On the homepage, click the Quiz button to be taken to the quiz. You may choose easy, medium, or hard difficulty. 

Nerd Quote and Nerd Joke are both components routed on the nav bar.

## Functionality

The trivia API has three difficulty levels built-in, and we concatenate the text content of the button you click (easy, medium, or hard) into the API request, so that we only load the trivia questions from that difficulty.

```
handleDifficulty = (e) => {
    const difficulty = e.target.textContent.toLowerCase()
    this.gameStart(difficulty)
  }
```

The trivia questions were encoded in base64, so we had to decode using window.btoa or atob when neccesary. 

We created a quiz by getting the required information from a _[public trivia API](https://opentdb.com/api_config.php)_ that supplied a 'correct answer' and 'incorrect answers' for a question. 
To display the questions:
1. GET the data using an axios request.
2. Store the first indexed item in an array of objects in state.
3. Take the incorrect and correct answers provided byt the data and combine these into a new array.
4. Sort the answers randomly.
5. Check the text content of the button that was clicked with the correct answer.
  - If was incorrect, make the result box red and include the correct answer.
  - If it was correct, make the result box green and congratulate the user.
    - Add one to the score and display this to the user.
6. When the question has been answered, add +1 to the variable that calls the index of the API data to call the next question.
  - Repeat steps 2 -> 6 until the user has answered 5 questions.
7. Render the result page, passing down the score as a prop to display.

```
gameStart = async (difficulty) => {
    try {
      const res = await axios.get(`https://opentdb.com/api.php?amount=10&encode=base64&category=18&difficulty=${difficulty}`)
      const questionObj = {
        question: res.data.results[0].question,
        correctAnswer: res.data.results[0].correct_answer,
        incorrectAnswers: res.data.results[0].incorrect_answers
      }
      const combined = [...questionObj.incorrectAnswers]
      const combinedAnswers = [...combined, questionObj.correctAnswer].sort(() => Math.random() - 0.5)
      this.setState({ results: res.data.results, questionObj, combinedAnswers, difficulty })

    } catch (err) {
      this.props.history.push('/notfound')
    }
  }
```

## Needs Improvement

- We wanted to provide an option to set the game on a timer (the Timer component is still included with the code). Unfortunately we were not able to impliment this in the two-day time frame but it is something I would like to enact on a future project.

- Sometimes the text will float outside of the answer buttons if the answer is very long. This is most notable on mobile. I would find a way to make whichever element is not allowing the button to stretch to be more reactive.

## Hello!

I'm an avid enjoyer of JavaScript. I would be so happy to discuss this project, or any of your JavaScript projects with you.
I am a big gaming nerd so feel free to share your games with me!
If you'd like to see more of my work or get to know a bit more about me, please check out my portfolio:

_[My Portfolio](https://astara303.github.io/portfolio/)_

Thank you for reading!