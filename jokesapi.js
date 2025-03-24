const jokeElement = document.getElementById("joke");
const titleElement = document.getElementById("title");

function getJoke(category) {
        fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
        .then(response => response.json())
        .then(data => {    
            let jokeText = "";
            
            if (data.type === "twopart") {
                jokeText = `${data.setup} ... ${data.delivery}`;
            } else {
                jokeText = data.joke;
            }
    
            jokeElement.textContent = jokeText;
            
            if (category === "Any") {
                titleElement.textContent = "Joke Of The Day";
            } else if (category === "Pun") {
                titleElement.textContent = "A Random Pun";
            } else {
                titleElement.textContent = `A Random ${category} Joke`;
            }
    
        })
    }

window.onload = () => getJoke("Any");