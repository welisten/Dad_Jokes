const $joke     = document.getElementById('joke')
const $jokebtn  = document.getElementById('jokeBtn')

generateJoke()

$jokebtn.addEventListener("click", generateJoke)

// ===== USING .AWAIT =====

async function generateJoke() {
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    const resp = await fetch('https://icanhazdadjoke.com', config)
    const data = await resp.json()
    $joke.innerHTML = data.joke

}

// ===== USING .THEN =====


/*  function generateJoke() {
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((response) => response.json())
        .then((data) => {
            $joke.innerHTML = data.joke
        })
 } */