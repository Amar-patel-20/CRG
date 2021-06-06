var form, player, game;
var gameState=0;
var playerCount;
var databas;
var allPlayers;
function setup() {
  createCanvas(400,400)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
  
}   
function draw(){
if (playerCount === 4){
  game.updateState(1)
}
if(gameState === 1){
  game.play()
}

}