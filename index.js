async function getJoke() {

    const setupEl = document.getElementById("setup");
    const punchlineEl = document.getElementById("punchline");

    setupEl.innerText = "Loading...";
    punchlineEl.innerText = "";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        setupEl.innerText = data.setup;
        punchlineEl.innerText = data.punchline;

    } catch (error) {
        setupEl.innerText = "Error fetching joke!";
        punchlineEl.innerText = "";
        console.error(error);
    }
}