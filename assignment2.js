let cart = [
    { name: "Apple", price: 120, quantity: 3 },
    { name: "Milk", price: 60, quantity: 2 },
    { name: "Bread", price: 40, quantity: 1 },
  ];

  //here i have made the function to add items in cart
  function addItemToCart(a,b,c){
    const item={name:a,price:b,quantity:c,subTotal:b*c};
    cart.push(item);
  }


  //here i have made the function to update the quantity of any cart item
  function updateQuantity(a,b){
    for(var i=0;i<cart.length;i++){
        if(cart[i].name==a){
            cart[i].quantity=b;
            cart[i].subTotal=cart[i].price*b;
            return;
        }     
    }
    console.log("item does not exist");
  }

  //here i have made the function to remove an item from the cart
  function removeItem(a){
    for(var i=0;i<cart.length;i++){
        if(cart[i].name==a){
            const indexToRemove=i;
            cart.splice(indexToRemove,1);
            return;
        }
    }
    console.log("item does not exist");
  }


  //here i have the function to calculate the subtotal of each item in cart
  function subTotal(cart){
    return cart.price*cart.quantity;
  }
  cart.forEach(function(cart){
    cart.subTotal=subTotal(cart);
  })

  //here i have the function to calculate the totlPrice of the cart
  function totalPrice(){
    return cart.reduce(function(total,value){return total+value.subTotal},0);
  }

 
  //here i have made the function to display the cart items
  function displayCart(){
    cart.forEach(function(cart){
      console.log("Item: "+cart.name+" Item price: "+cart.price+" Item quantity: "+cart.quantity+" Item subtotal: "+cart.subTotal);
    })
    console.log("The total price of Cart: "+totalPrice());
  }

  addItemToCart("banana",100,3);
  updateQuantity("Apple",20);
//   removeItem("banana");
//   removeItem("Apple");
//   removeItem("Milk");
  displayCart();
