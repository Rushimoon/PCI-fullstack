// let h1=document.getElementById("timer")
// let k=1
// setInterval(counter,1000)

// function counter(){
// h1.innerText=""
// k++
// h1.append(k)
// }



console.log("preson 1")
console.log("person 2")
setTimeout(chillar,5000)
console.log("person 3")
console.log("person 4")
console.log("person 5")
console.log("person 6")
console.log("person 7")


function chillar(){
    console.log("got chillar")
}



fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(console.log("kuich toh gadbad hai daya"))