const API_MATCHES_URL = "/matches";

async function getMatches(data) {
  console.log(data);
  const requestOptions = data.getRequestOptions("GET");
  return await fetch(
    `${data.apiurl + API_MATCHES_URL}/matches`,
    requestOptions
  ).then(data.handleResponse, data.handleError);
}

async function getMatchDetails(data) {
  const requestOptions = data.getRequestOptions("GET");
  return await fetch(
    `${data.apiurl + API_MATCHES_URL}/matchDetails/${data.matchId}`,
    requestOptions
  ).then(handleResponse, handleError);
}

async function getMatchDetailsHeadToHead(data) {
  const requestOptions = data.getRequestOptions("GET");
  return await fetch(
    `${data.apiurl + API_MATCHES_URL}/matchDetails/headtohead/${
      data.players.player1Id
    }/${data.players.player2Id}`,
    requestOptions
  ).then(data.handleResponse, data.handleError);
}

const matchesResolvers = {
  getMatches,
  getMatchDetails,
  getMatchDetailsHeadToHead,
};

export default matchesResolvers;
