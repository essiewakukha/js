openShopping = document.querySelector('.shopping');
closeShopping = document.querySelector('.closeShopping');
let list =document.querySelector('.list');
let listCard =document.querySelector('.listCard');
let body =document.querySelector('.body');
let total =document.querySelector('.total');
let quantity =document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
	body.classList.add('active');

})
closeShopping.addEventListener('click', ()=>{
	body.classList.remove('active');
})
let products = [
{
id: 1
name:'PRODUCT NAME 1',
image:'1.PNG',
price:1250
},

{
id: 2
name:'PRODUCT NAME 2',
image:'2.PNG',
price:1550
},

{
id: 3
name:'PRODUCT NAME 3',
image:'3.PNG',
price:1850
},

{
id: 4
name:'PRODUCT NAME 4',
image:'4.PNG',
price:1670
},

{
id: 5
name:'PRODUCT NAME 5',
image:'5.PNG',
price:2000
},
{
id: 6
name:'PRODUCT NAME 6',
image:'6.PNG',
price:2500
},

]
let listCard =[];
function initApp() {
	products.forEach((value,key)=>{
		let nowDiv = document.createElement('div');
	})
	// body...
}