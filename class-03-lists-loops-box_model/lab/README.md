# Assignment Overview: Lab for Class 3

For this lab we will be adding a few things to the work we've done so far. Use the User Stories and the Technical Requirements to make a plan for how to proceed. Assume that all user stories from the previous lab carry over, except for the ones that are modified or are superseded here.

It can be very handy to take notes and sketch things out when you are planning your projects and the code within it.

### User Stories (MVP... what you must do as a minimum)

- As a developer, to keep my work organized, I want to make a new Git branch for the development work for each new question I create. I can then merge these branches into the master branch via pull requests on GitHub *as each question is finished*.
- As a developer, I want to use thoughtful and descriptive console.log() throughout my code to help test my work and assist with debugging.
- As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
- As a developer, I want to consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user. Wait... maybe I should just write a user story for that...
- As an end user of the About Me and guessing game, I want to have an informative, interesting, and fun experience in learning about the developer.
- As a prospective job seeker, I want to consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
- As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
- As a prospective job seeker, I was to use CSS to creatively and tastefully style and layout my page.
- As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
- As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
- As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
- As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

### User Stories (Stretch goals... not required!)

- As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question. (This will take some planning... here's a hint on how to approach it!)
```javascript
for (var i = 0; i < numberOfQuestions; i++) {
  var answer = prompt(questions[i]);
  if (answer === correctAns[i]) {
    alert(response[i][0] + userName + response[i][1]);
  } else...
```

### Technical Requirements

- In your GitHub repo, do your work on at least three separate branches (one for each added question and one for the part that implements the vote tally) and give those branches meaningful names indicating the work that is being done in them, for instance `sixth-question`, `seventh-question`, etc.
- Per the user stories, you will need to include in your HTML at least one each of an ordered and an unordered list.
- Do not use any 'switch' statements in your JavaScript.
- Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.

### Submitting Your Assignment

- Submit the link to your latest pull request (PR) on GitHub for this project.
- Add a comment to this Canvas submission with answers to the following questions.
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
