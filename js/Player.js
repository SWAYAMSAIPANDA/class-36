class Player {
  constructor(){
    this.name = null;
    this.index = 0;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index; //"players/player1"

    //set() is used to write values inside database
    //It also creates nodes automatically if they do not exist
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance 
    });
  }

  //static functions are not attached to a particular object of the class
  //static functions do not have any relation with a particular object of the class
  //static is a keyword which is used to create static function
  //we call the static function using class name and not object name
  //Player.getPlayerInfo()
  static getPlayersInfo(){
    var playerInfoRef = database.ref('players');

    //arrow function
    //it will loop through the players and store information in allPlayers array
    playerInfoRef.on("value",(data)=>{
      //we will store the information of all the players in allPlayers 
      allPlayers = data.val();
    })
  }




}
