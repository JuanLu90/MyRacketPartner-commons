"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var apiUrl = "/matches";
var getMatches = function getMatches() {
  return "".concat(apiUrl, "/matches");
};
var getMatchDetails = function getMatchDetails(matchId) {
  return "".concat(apiUrl, "/matchDetails/").concat(matchId);
};
var getMatchDetailsHeadToHead = function getMatchDetailsHeadToHead(players) {
  return "".concat(apiUrl, "/matchDetails/headtohead/").concat(players.player1Id, "/").concat(players.player2Id);
};
var matchesResolvers = {
  getMatches: getMatches,
  getMatchDetails: getMatchDetails,
  getMatchDetailsHeadToHead: getMatchDetailsHeadToHead
};
var _default = exports["default"] = matchesResolvers;