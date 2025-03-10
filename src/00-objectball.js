function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}

// Helper function to get all players
function allPlayers() {
    const obj = gameObject();
    return { ...obj.home.players, ...obj.away.players };
}

// 1. Function to get points scored by a player
function numPointsScored(playerName) {
    const players = allPlayers();
    return players[playerName] ? players[playerName].points : "Player not found!";
}

// 2. Function to get shoe size of a player
function shoeSize(playerName) {
    const players = allPlayers();
    return players[playerName] ? players[playerName].shoe : "Player not found!";
}

// 3. Function to get team colors
function teamColors(teamName) {
    const obj = gameObject();
    if (obj.home.teamName === teamName) return obj.home.colors;
    if (obj.away.teamName === teamName) return obj.away.colors;
    return "Team not found!";
}

// 4. Function to get team names
function teamNames() {
    const obj = gameObject();
    return [obj.home.teamName, obj.away.teamName];
}

// 5. Function to get player jersey numbers for a given team
function playerNumbers(teamName) {
    const obj = gameObject();
    let team = obj.home.teamName === teamName ? obj.home : obj.away.teamName === teamName ? obj.away : null;
    if (!team) return "Team not found!";
    return Object.values(team.players).map(player => player.number);
}

// 6. Function to get player stats
function playerStats(playerName) {
    const players = allPlayers();
    return players[playerName] ? players[playerName] : "Player not found!";
}

// 7. Function to get rebounds of the player with the largest shoe size
function bigShoeRebounds() {
    const players = allPlayers();
    let biggestShoePlayer = Object.values(players).reduce((max, player) =>
        player.shoe > max.shoe ? player : max
    );
    return biggestShoePlayer.rebounds;
}

// Test Cases
console.log(numPointsScored("Brook Lopez")); // 17
console.log(shoeSize("Ben Gordon")); // 15
console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds()); // Should return rebounds of the player with the largest shoe size
