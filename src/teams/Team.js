class Team {
    name;
    abbrv
    conference;
    division;

    constructor(name, abbrv, conference, division){
        this.name = name;
        this.abbrv = abbrv;
        this.conference = conference;
        this.division = division;
    }
}

let team1 = new Team("Arizona Cardinals", "ARI", "NFC", "West");
let team2 = new Team("Atlanta Falcons", "ATL", "NFC", "South");
let team3 = new Team("Baltimore Ravens", "BAL", "AFC", "North");
let team4 = new Team("Buffalo Bills", "BUF", "AFC", "East");
let team5 = new Team("Carolina Panthers", "CAR", "NFC", "South");
let team6 = new Team("Chicago Bears", "CHI", "NFC", "North");
let team7 = new Team("Cincinnati Bengals", "CIN", "AFC", "North");
let team8 = new Team("Cleveland Browns", "CLE", "AFC", "North");
let team9 = new Team("Dallas Cowboys", "DAL", "NFC", "East");
let team10 = new Team("Denver Broncos", "DEN", "AFC", "West");
let team11 = new Team("Detroit Lions", "DET", "NFC", "North");
let team12 = new Team("Green Bay Packers", "GB", "NFC", "North");
let team13 = new Team("Houston Texans", "HOU", "AFC", "South");
let team14 = new Team("Indianapolis Colts",	"IND", "AFC", "South");
let team15 = new Team("Jacksonville Jaguars", "JAX", "AFC", "South");
let team16 = new Team("Kansas City Chiefs",	"KC", "AFC", "West");
let team17 = new Team("Miami Dolphins",	"MIA", "AFC", "East");
let team18 = new Team("Minnesota Vikings", "MIN", "NFC", "North");
let team19 = new Team("New England Patriots", "NE", "AFC", "East");
let team20 = new Team("New Orleans Saints",	"NO", "NFC", "South");
let team21 = new Team("New York Giants", "NYG", "NFC", "East");
let team22 = new Team("New York Jets", "NYJ", "AFC", "East");
let team23 = new Team("Las Vegas Raiders",	"LV", "AFC", "West");
let team24 = new Team("Philadelphia Eagles", "PHI", "NFC", "East");
let team25 = new Team("Pittsburgh Steelers", "PIT", "AFC", "North");
let team26 = new Team("Los Angeles Chargers", "LAC", "AFC", "West");
let team27 = new Team("San Francisco 49ers", "SF", "NFC", "West");
let team28 = new Team("Seattle Seahawks", "SEA", "NFC", "West");
let team29 = new Team("Los Angeles Rams", "LAR", "NFC", "West");
let team30 = new Team("Tampa Bay Buccaneers", "TB", "NFC", "South");
let team31 = new Team("Tennessee Titans", "TEN", "AFC", "South");
let team32 = new Team("Washington Commanders", "WAS", "NFC", "East");

const teamArr = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30, team31, team32];


function findRandomNflTeam(){
    return teamArr[Math.floor(Math.random()*teamArr.length)]; 
}

export default findRandomNflTeam;