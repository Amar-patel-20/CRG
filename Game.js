class Game{
    constructor(){}
    getState(){
        var gamestateRef= database.ref("gameState");
           gamestateRef.on("value",function (data){
           gameState=data.val();
        })
      }
      updateState(state){
       database.ref("/").update({
           gameState: state
       })
      }
      start(){
          if(gameState===0){
              player= new Player();
              player.getCount()

              form = new Form()
              form.display()
          }

      }
      play(){
          form.hide()
          Player.getPlayerInfo()
          textSize(20)
          text("Game Start",150,50)
          if(allPlayers!== undefined){
              var displayPosition = 130
              for(var plr in allPlayers){
              displayPosition = displayPosition + 20
              textSize(15)
              text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition)
          }
        }
          if(keyIsDown(UP_ARROW)&& player.index!== null){
            player.distance = player.distance + 40
            player.update();
        }
      }
      
      
}