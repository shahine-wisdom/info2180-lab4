document.getElementById("searchButton").addEventListener("click", function() {

    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("PHP file could not be found!");
            }
            return response.text();
        })
        .then(data => {
            alert(data);
        })
        .catch(error => {
            alert("Error: " + error.message);
            console.log(error);
        });

});