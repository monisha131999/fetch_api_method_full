var form=document.getElementById('form')
app.use(cors())

form.addEventListener('submit',function(e){
    //auto submision of the form
    e.preventDefault()
    var name=document.getElementById('name').value
    var body=document.getElementById('body').value
    // var id=document.getElementById('id').value

    //fetch post request

    fetch("http://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        body:JSON.stringify({
            title:name,
            body:body
            // id:id
        }),
        headers:{
            "content-Type":"application/json;charset=UTF-8"
        }
    })
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    var results=document.getElementById('results')
    
    results.innerHTML=`<p>the title of the todo is ${
        data.title}</p>
        <P>The body of the todo is ${data.body}</P>`
})
})


 