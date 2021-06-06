class Form{
    constructor(){
     this.title = createElement("h2")
     this.input = createInput("Name")
     this.button = createButton("Play")
     this.greeting = createElement("h3")
    }
    
    display(){
     

      this.title.html("Car Racing Game!")
      this.title.position(130,10)
      this.input.position(130,200)
      this.button.position(250,250)  

      this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()

      player.name = this.input.value()

      this.greeting.html("Hello " +player.name)
      this.greeting.position(200,200)

        playerCount = playerCount+1
        player.updateCount(playerCount)
        player.update(player.name)
    }
    )}
    hide(){
      this.input.hide()
      this.greeting.hide()
      this.button.hide()
      this.title.hide()
    }
}