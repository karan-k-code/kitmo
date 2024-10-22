

let register =async (url,forml,loader)=>{

    let formData = new FormData(forml);
    let data = Object.fromEntries(formData);
    
    loader.style.display= 'flex';

    let result = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        redirect: "follow",
        credentials: 'include'
    }).then(
        response => response.json()
        
    ).then(
        data => {return data;}
    )
    loader.style.display= 'none';
    return result;
}