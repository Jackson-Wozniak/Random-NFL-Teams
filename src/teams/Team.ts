class Team {
    name: string;
    abbrv :string;
    conference : string;
    division : string;

    constructor(name: string, abbrv: string, conference: string, division: string){
        this.name = name;
        this.abbrv = abbrv;
        this.conference = conference;
        this.division = division;
    }
}

let team1: Team = new Team("Arizona Cardinals", "ARI", "NFC", "West");
let team2: Team  = new Team("Atlanta Falcons", "ATL", "NFC", "South");
let team3: Team  = new Team("Baltimore Ravens", "BAL", "AFC", "North");
let team4: Team  = new Team("Buffalo Bills", "BUF", "AFC", "East");
let team5: Team  = new Team("Carolina Panthers", "CAR", "NFC", "South");
let team6: Team  = new Team("Chicago Bears", "CHI", "NFC", "North");
let team7: Team  = new Team("Cincinnati Bengals", "CIN", "AFC", "North");
let team8: Team  = new Team("Cleveland Browns", "CLE", "AFC", "North");
let team9: Team = new Team("Dallas Cowboys", "DAL", "NFC", "East");
let team10: Team  = new Team("Denver Broncos", "DEN", "AFC", "West");
let team11: Team = new Team("Detroit Lions", "DET", "NFC", "North");
let team12: Team  = new Team("Green Bay Packers", "GB", "NFC", "North");
let team13: Team  = new Team("Houston Texans", "HOU", "AFC", "South");
let team14: Team  = new Team("Indianapolis Colts",	"IND", "AFC", "South");
let team15: Team  = new Team("Jacksonville Jaguars", "JAX", "AFC", "South");
let team16: Team  = new Team("Kansas City Chiefs",	"KC", "AFC", "West");
let team17: Team  = new Team("Miami Dolphins",	"MIA", "AFC", "East");
let team18: Team  = new Team("Minnesota Vikings", "MIN", "NFC", "North");
let team19: Team  = new Team("New England Patriots", "NE", "AFC", "East");
let team20: Team  = new Team("New Orleans Saints",	"NO", "NFC", "South");
let team21: Team  = new Team("New York Giants", "NYG", "NFC", "East");
let team22: Team  = new Team("New York Jets", "NYJ", "AFC", "East");
let team23: Team  = new Team("Las Vegas Raiders",	"LV", "AFC", "West");
let team24: Team  = new Team("Philadelphia Eagles", "PHI", "NFC", "East");
let team25: Team  = new Team("Pittsburgh Steelers", "PIT", "AFC", "North");
let team26: Team  = new Team("Los Angeles Chargers", "LAC", "AFC", "West");
let team27: Team  = new Team("San Francisco 49ers", "SF", "NFC", "West");
let team28: Team  = new Team("Seattle Seahawks", "SEA", "NFC", "West");
let team29: Team  = new Team("Los Angeles Rams", "LAR", "NFC", "West");
let team30: Team  = new Team("Tampa Bay Buccaneers", "TB", "NFC", "South");
let team31: Team  = new Team("Tennessee Titans", "TEN", "AFC", "South");
let team32: Team  = new Team("Washington Commanders", "WAS", "NFC", "East");

const teamArr: Team[] = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30, team31, team32];


function findRandomNflTeam(){
    return teamArr[Math.floor(Math.random()*teamArr.length)]; 
}

export default findRandomNflTeam;