const list = document.querySelector("ul");
const btnshowall = document.querySelector(".btn-foreacth");
const btndiscount = document.querySelector(".btn-map");
const sumAll = document.querySelector(".btn-reduce");
const filterAll = document.querySelector(".btn-filter");
const btnmotor = document.querySelector(".btn-quad-bike");

const menu = document.querySelector(".menu");
const click = document.querySelector(".div-links");
const clickbody = document.querySelector("section");

function formatCurrency(value){
   const newValue = value.toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL'
   });
   return newValue
}

 function showAll(productsArray){
   let myli = ''
   productsArray.forEach((product) =>{
   myli += `
    <li>
    <img src=${product.src} alt="">
       <p>${product.name}</p>
    <p class="item-price">${formatCurrency(product.price)}</p>
    <button class="btn-car">Comprar</button>
 </li>
   `
 })
 list.innerHTML= myli

 }
 function mapAllItems(){
   const newPrices = menuOptions.map(product =>{
    return{
     ...product,
      price:formatCurrency(product.price * 0.9),
    
    }
    
   })
   showAll(newPrices)
 }
  function sumAllItems(){
   const totalValue = menuOptions.reduce((acc,value)=> acc + value.price,0)
   list.innerHTML = `
    <li>
       <p>O valor total é ${formatCurrency(totalValue)}</p>
   
 </li>`
   
  } 

  function filterAllCars(){
   const filtercar = menuOptions.filter((product) => product.car === true)

   showAll(filtercar)
  }



  function filterAllMotor(){
   const filterMotor = menuOptions.filter(product => product.car === false)

   showAll(filterMotor)
  }
 btnshowall.addEventListener('click',showAll(menuOptions))
 btnshowall.addEventListener('click',() => showAll(menuOptions))
 btndiscount.addEventListener('click',mapAllItems)
 sumAll.addEventListener('click',sumAllItems)
 filterAll.addEventListener('click',filterAllCars)
 btnmotor.addEventListener('click',filterAllMotor)
 /*Menu  */
 menu.addEventListener('click',MenuHeader)
 clickbody.addEventListener('click',ClickBody)



 function MenuHeader(){
   click.style = `
      display: flex;
    position: absolute;
  
   `
 } 
 
 function ClickBody(){
   click.style = `
   display: none;
   `
  
 }
 /*Animacao do menu */
const bar1 = document.querySelector(".b-1");
const bar2 = document.querySelector(".b-2");
const bar3 = document.querySelector(".b-3");
 function MenuOver(){
   bar1.style = `
    width: 45px;
    height: 10px;
    transform: rotate(55deg);
    position: absolute;
     transition: 1s ease-in-out;
   `
   bar2.style = `
   width: 45px;
    height: 10px;
    transform: rotate(-50deg);
    transition: 1s ease-in-out;
    position: absolute;
   `
   bar3.style = `
      transform: rotate(-50deg);
    transition: 1s ease-in-out;
    position: absolute;
    width: 1px;
}
   `
 }
 function Menuout(){
  bar1.style = `
  transition:  1s ease-in-out;
   `
   bar2.style = `
     transition:  1s ease-in-out;
   `
   bar3.style = `
        transition:  1s ease-in-out;
   `
 }