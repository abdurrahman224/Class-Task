// class User  {

// constructor( name ,email){
//     this.name = name;
//     this.email = email
// }
// getInfo (){

// return `My Name: ${this.name}   My Email: ${this.email}`

// }
// }

// const nameInput = document.getElementById('nameInput');
// const emailInput = document.getElementById('emailInput')
// const saveBtn = document.getElementById('saveBtn')
// const output = document.getElementById('output')

// saveBtn.addEventListener('click', ()=>{
// const nameValue  = nameInput.value.trim();
// const emailValue  = emailInput.value.trim();
// if(nameValue === "" || emailValue === ""){

// alert('Please enter a  name')

// }
// const User1 = new User(nameValue,emailValue)

// output.textContent = User1.getInfo()

// })

class Item {
  constructor(name, quantity = 1) {
    this.name = name;
    this.quantity = quantity;
  }
}


const myItem = new Item("Apple",5)
const myItem1 = new Item("Apple",)
console.log(myItem.name,myItem.quantity);
 


console.log(myItem1.name , myItem1.quantity);

