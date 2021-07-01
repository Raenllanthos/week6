const getData = async() => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`);
    //console.log(response.data)
    return response.data
};

const DOM_Elements = {
    carList : ".carList"
};

// MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName

const createDriver = (driver) => {
    table = document.querySelector("table");
    console.log(JSON.stringify(driver));
    row = table.insertRow();
    Object.keys(driver).forEach((val) => {
        cell = row.insertCell();
        text = document.createTextNode(driver[val]);
        cell.appendChild(text);
    });
    document.body.appendChild(table);
};

const loadData = async() =>{
    getData().then((response) => {
        //drivers = []
        data = response["MRData"];
        season = data.StandingsTable.season;
        driver = {};
        for (let i = 0; i < 7; i++){
            data.StandingsTable.StandingsLists.forEach((elem) => {
                driver.position = elem.DriverStandings[i].position
                fname = elem.DriverStandings[i].Driver.givenName
                lname = elem.DriverStandings[i].Driver.familyName
                driver.fullName = `${fname} ${lname}`
                driver.nationality = elem.DriverStandings[i].Driver.nationality
                driver.sponsor = elem.DriverStandings[i].Constructors[0].name
                driver.points = elem.DriverStandings[i].points
                driver.season = season
            });
            createDriver(driver);
        }
    });
};

const form = document.querySelector("#carDataForm");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let querySeason = document.querySelector("#season");
    let queryRound = document.querySelector("#round");
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    console.log(event);
    console.log(season, round);
    console.log(`butt stuff ${querySeason.value} ${queryRound.value}`);
});