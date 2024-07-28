const apiUrl = "/matches";

const getMatches = () => `${apiUrl}/matches`;
const getMatchDetails = (matchId) => `${apiUrl}/matchDetails/${matchId}`;
const getMatchDetailsHeadToHead = (players) =>
  `${apiUrl}/matchDetails/headtohead/${players.player1Id}/${players.player2Id}`;

const matchesResolvers = {
  getMatches,
  getMatchDetails,
  getMatchDetailsHeadToHead,
};

export default matchesResolvers;
