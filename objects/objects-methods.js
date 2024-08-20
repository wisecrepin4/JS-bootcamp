let restaurant ={
  name: "radisson",
  capacity: 75,
  seated: 0,
  checkAvailability: function (coming){
    let available = this.capacity - this.seated;
    return available >=coming ;
  },
  seatParty : function(num){
    this.seated = this.seated + num;
  },
  removeParty : function (num){
    this.seated = this.seated -num;

  }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));