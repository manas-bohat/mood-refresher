fetch('https://icanhazdadjoke.com/slack')
    .then(res => res.json())
    .then(joke => {
        const jokeText = joke.attachments[0].text;
        document.getElementById("target").innerHTML = jokeText;
    })