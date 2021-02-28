let numberJokes = 0;

/**Get Joke from icanhazdadjoke  */
const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const jokeData = await axios.get('https://icanhazdadjoke.com/', config)
        return jokeData.data.joke
    }
    catch (e) {
        return "No jokes found. Sorry :("
    }
}

/**Add the new joke to the page */
var jokeLists = document.getElementById("jokes");
const jokeList = document.querySelector('#jokes');
const addJoke = async () => {
    const joke = await getJoke();
    const newRow = document.createElement('div');
    const newP = document.createElement('p');
    newRow.classList.add('row', 'rounded', 'joke', 'pt-2', 'my-1', 'justify-content-center');
    newP.append(joke);
    newRow.append(newP);
    jokeList.append(newRow);
    numberJokes += 1;
    if (numberJokes > 15) {
        jokeLists.childNodes[1].remove();
    }
}

/**Click to get joke */
const button = document.querySelector('button');
button.addEventListener('click', addJoke);