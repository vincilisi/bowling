let bowling = {
    'players': [
      {'name': 'Livio', 'scores': []},
      {'name': 'Paola', 'scores': []},
      {'name': 'Filippo', 'scores': []},
      {'name': 'Giuseppe', 'scores': []}
    ],
    lista: function() {
        for (let player of this.players) {
            for (let i = 0; i < 10; i++) {
              const scor = Math.floor(Math.random() * 10) + 1;
              player.scores.push(scor);
            }
          }
    },
    FinalScores: function() {
        for (let player of this.players) {
          const totalScore = player.scores.reduce((acc, score) => acc + score, 0);
          player.finalScore = totalScore;
        }
      },
      getWinner: function() {
        const sortedPlayers = this.players.sort((a, b) => b.finalScore - a.finalScore);
        return sortedPlayers[0].name;
      }
}
console.log(bowling)

bowling.lista();
bowling.FinalScores();
bowling.getWinner();