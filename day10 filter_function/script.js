let filter;
function getfilternum(){
let num=document.getElementById("data").value
 filter=num 

 getdata(num)
}


async function getdata(num){

let data=await fetch(`http://localhost:3000/products?price=${num}`)
let actual=await data.json();
console.log(actual)

}