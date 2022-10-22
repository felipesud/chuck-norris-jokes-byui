const output = (excuses) => {
    excuses.forEach((excuseSelected) => {
        let id = document.createElement("id");

        let excuse = document.createElement("excuse");

        let category = document.createElement("category");


    });
}



const getRandomExcuses = async () => {
    const response = await fetch ("https://excuser.herokuapp.com/v1/excuse"

    );
    randomExcuses = await response.json();
}