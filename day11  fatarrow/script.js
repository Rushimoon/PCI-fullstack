function data(){

}
data()


let print_name= ()=>{

    console.log("rushikesh moon")
}

print_name()


//()=>{


//   }
// let z=1
// setInterval(()=>{


// console.log(z++)

// },1000)


let marks=39
// condition ? if true : if false 


let result=  marks>=35 ? "student is pass" : "student is failed";
console.log(result)


//watch
let min=document.getElementById("min")
let sec=document.getElementById("sec")

let second=1
let minute=0
setInterval(()=>{


console.log(second++)
sec.innerText=""
sec.append(second)

// second= second==60 ? 0 : second

  if(second==60)
    {
        second=0
        minute++
       min.innerHTML=""

     min.append(minute)
     
    }



},100)



