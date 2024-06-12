async function submited(){
    
 
  try{
    let mydata= await fetch(`https://fakestoreapi.com/products/category/electronics`);
    console.log(mydata)
    let finaldata= await mydata.json();
    finaldata.forEach(makecard)
  }
  catch{
    console.log("error")
  }
}
submited()


function makecard(el,i,arr){

  console.log(el)
}