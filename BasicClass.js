class Car{
constructor(brand){

this.brand = brand




}
honk(){


    console.log("Beep beep! ");
    
}

getInfo (){

return `This car is a  ${this.brand}`


}
}



let myCar = new Car ('Mercedes-Benz')

console.log(myCar.brand);


myCar.honk()

console.log(myCar.getInfo());




const brandInput = document.getElementById('brandInput');
const saveBtn = document.getElementById('saveBtn')
const output = document.getElementById('output')

saveBtn.addEventListener('click', ()=>{
const brandName  = brandInput.value.trim();
if(brandName === ""){

alert('Please enter a brand name')

}
const myCar = new Car(brandName)

output.textContent = `Car brand stored: ${myCar.brand}`

})
