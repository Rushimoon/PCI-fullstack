let form=document.getElementById("employeform");

form.addEventListener("submit",prime)
  function prime(){
    event.preventDefault()
    let name= form.fullname.value
    let mobile= form.mob.value
    let add= form.address.value
    let email= form.mail.value
  
    let photo= form.image.value
   

  let obj={
    name,
    mobile,
    add,
    email,
    photo
  }

  putdata(obj)

  }

  async function putdata(data){

    await fetch(`http://localhost:3000/employee`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
       "Content-Type":"application/json"
        }
    
    })

  }