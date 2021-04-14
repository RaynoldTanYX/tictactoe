
const baseURL = 'https://o63yi7inyg.execute-api.ap-southeast-1.amazonaws.com/default/'
const urlCreateGame = baseURL + 'tictactoe-creategame';
const urlJoinGame = baseURL + 'tictactoe-joingame';

export const requestCreateGame = (playerName) => {
    return fetch(urlCreateGame, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'player1Name': playerName
        })
    })
        .then((response) => response.json())
        .then((json) => {
            return ({ 'err': null, 'data': json });
        })
        .catch((error) => {
            console.error(error);
        });
}
export const requestJoinGame = (playerName, gameId, gamePassword) => {
    return fetch(urlJoinGame, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'playerName': playerName,
            'gameId': gameId,
            'gamePassword': gamePassword,
        })
    })
        .then((response) => response.json())
        .then((json) => {
            return ({ 'err': null, 'data': json });
        })
        .catch((error) => {
            console.error(error);
        });
}