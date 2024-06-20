fetch('https://fakestoreapi.com/products',{
    method:"POST",
    body:JSON.stringify(
        {
            title: 'new data',
            price: 130.54,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})
    .then(res=>res.json())
    .then(json=>console.log(json))