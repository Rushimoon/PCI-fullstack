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


 let globalId;
  function getid(){
   let idinput=document.getElementById("idtochange").value
   globalId=idinput
   getDataFromId(idinput)
  
  }

  async function getDataFromId(id){

    let data=await fetch(`http://localhost:3000/employee/${id}`)
    let actualdata=await data.json();
    console.log(actualdata)

  let updateForm=document.getElementById("updateform");

  let name= updateForm.fullname.value=actualdata.name;
  let mobile= updateForm.mob.value=actualdata.mobile
  let add= updateForm.address.value=actualdata.add
  let email= updateForm.mail.value=actualdata.email
  let photo= updateForm.image.value=actualdata.photo
  
  }
  
  let updateForm=document.getElementById("updateform")
      updateForm.addEventListener("submit",updata)
  async function updata(){
    event.preventDefault()


    let name= updateForm.fullname.value
    let mobile= updateForm.mob.value
    let add= updateForm.address.value
    let email= updateForm.mail.value
    let photo= updateForm.image.value
   

  let obj={
    name,
    mobile,
    add,
    email,
    photo
  }
    // console.log(obj)

    await fetch(`http://localhost:3000/employee/${globalId}`,{
      method:"PATCH",
      body:JSON.stringify(obj),
      headers:{
     "Content-Type":"application/json"
      }
  
  })
  }



  async function delitems(){
    let inpbox=document.getElementById("delinp").value
    await fetch(`http://localhost:3000/employee/${inpbox}`,{
      method:"DELETE"
     })
  }
