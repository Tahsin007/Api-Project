const wordHeading = document.getElementById("wordHeading");
const definition = document.getElementById("definition");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchbtn");
const exampleWord = document.getElementById("exampleWord");
const card = document.getElementById("card");



const displayResults = (data) => {
    if (data.length > 0) {
        // Get the first definition from the response
        const firstDefinition = data[0];
        wordHeading.innerHTML = firstDefinition.word;

        definition.innerHTML = firstDefinition.definition;
        card.style.background = '#E8F0FE';
        definition.style.color = 'black';

        exampleWord.innerHTML = "Example : "+firstDefinition.example;

    } else {
        wordHeading.innerHTML = "Word not found";
        definition.innerHTML = "";
    }
};

const dictionary = async (word) => {
    const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + word;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '324b5b8ec3mshcdbbd1cd5b0de70p159039jsnb2cadae3ed8d',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response.list);
            displayResults(response.list);
        })
        .catch(err => console.log(err));
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchInput.value);
});
