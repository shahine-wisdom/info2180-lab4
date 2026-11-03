document.getElementById("searchButton").addEventListener("click", function() {

    let searchTerm = document.getElementById("search").value;

    fetch("superheroes.php?query=" + encodeURIComponent(searchTerm))
        .then(response => {
            if (!response.ok) {
                throw new Error("PHP file could not be found!");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            alert("Error: " + error.message);
            console.log(error);
        });

});