
$(document).ready(function(){
  $("#deliver").click(function(){
  prompt("State the delivery location" )
  });
  $("#pick").click(function(){
  alert("Thank you for shopping with us")
  });
  var order = function(type,size,crust,topping,number){
    this.type =type;
    this.size =size;
    this.crust = crust;
    this.topping = topping;
    this.number =number
  }
  order.prototype.price =function(){
    let pricing = 0;
    if(this.size === "large"){
      pricing = 1100;
    }
    else if (this.size === "medium"){
      pricing = 800;
    }
    else if( this.size === "small"){
      pricing = 500;
    }
    else 
    alert("Please enter your sizes")
    let Total= pricing + 150;
     Total = Total*this.number
      var delivery = prompt("Would you like  to pickup from our location or have a delivery ?")
       if( delivery === "pickup"){
         alert("Thank you for choosing pizza gyoza")
       }
       else if( delivery === "delivery"){
         alert("You have to add an extra 100");
         Total = Total + 100;
         var place = prompt("Where do you live ?")
         $("#place").text("Your location is "+place)
       }
     $("#total").text("Your total is "+Total)
  }
  $("#calc").click(function(){
    var size = $("#Size").val();
    var number = $("#number").val();
    var type = $("#Pizza type").val();
    var toppings = $("#toppings").val();
    var crust = $("#Crust").val();
    let myOrder = new order(type,size,crust,toppings,number);
    myOrder.price();
  })
})