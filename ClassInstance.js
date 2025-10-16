class User  {

constructor( name ,email){
    this.name = name;
    this.email = email
}
getInfo (){

return `My Name: ${this.name}   My Email: ${this.email}`


}
}




const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput')
const saveBtn = document.getElementById('saveBtn')
const output = document.getElementById('output')

saveBtn.addEventListener('click', ()=>{
const nameValue  = nameInput.value.trim();
const emailValue  = emailInput.value.trim();
if(nameValue === "" || emailValue === ""){

alert('Please enter a  name')

}
const User1 = new User(nameValue,emailValue)

output.textContent = User1.getInfo()


})