const forml = document.getElementById("product");
// const url ="http://127.0.0.1:4000/api/v1/users/register";
const url ="http://192.168.2.23:4000/api/v1/users/register";

forml.addEventListener('submit',async(e)=>{
    e.preventDefault()
    let formData = new FormData(forml);
    let data = Object.fromEntries(formData);

    let result = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    console.log(result)

})