const popBtn = ()=>{
window.location="cart"
}

const darling =(id)=>{
    // let popId = id 
    // return pop.innerHTML = shopItamsData.map((x)=>{
    //     let { id, pric } = x;
    //     let search = shopItamsData.find((y)=> y.id === popId.id) || [];
    //     console.log(search.id)
    //     return `
    //     <h1>${search.id}</h1>
    //     `
    // })
    const search = shopItamsData.find((x)=>x.id === id);
    return nothide.innerHTML =`
    <div class="header">
          <span class="title">New Add Cart</span>
          <span class="location">INDIA, Bihar</span>
        </div>
        <div class="detail">
          <i class="bi bi-cart notif-i"></i>
          <span class="text">You have a new added cart  ${search.name}.</span>
          <span class="price">$ ${search.price}</span>
        </div>
        <button class="btn-primary" onclick="popBtn()">
          <i class="bi bi-cart3"></i> Go to Cart
        </button>
    `
}