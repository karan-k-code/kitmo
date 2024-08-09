let opation = document.querySelector(".opation");
let opationcut = document.querySelector(".opationcut");
let boxa = document.querySelector(".boxa");

// ! quation answ funcation

function answ() {
    if (boxa.style.display === 'none') {
        boxa.style.display = 'flex';
        opation.style.display = 'none'
        opationcut.style.display = 'flex'
        
    } else {
        boxa.style.display = 'none';
    }
}

// ! opation cut  answcut funcation

opation.addEventListener('click', function (){
    answ();
})

opationcut.addEventListener('click', function (){
    // fadeOutBox()
    answcut();
    
})

function answcut() {
    
    if (boxa.style.display === 'flex') {
        boxa.style.display = 'none';
        opation.style.display = 'flex'
        opationcut.style.display = 'none'
        if(opationcut.style.display === 'none'){
            
        }
    } else {
        boxa.style.display = 'flex';
        
    }
}

// animation 

function fadeOutBox() {
    let box = document.getElementById('boxa');
    box.classList.add('fade-out');
    // Optionally, you can remove the element from the DOM after the animation completes
    box.addEventListener('animationend', function() {
      box.style.display = 'none'; // Or any other action you want to perform
    });
  }
  

let quationData=[
    {
        id: "a",
        q:"how to on dark mode",
        video:"image/darkmode.mp4",
        a:"Paris"
    },
    {
        id: "b",
        q:"how to sign up kitmo",
        video: undefined,
        a:"lkjsdflj"
    },
    {
        id: "c",
        q:"how to login kitmo",
        video: undefined,
        a:"lkjsdflj"
    },
    {
        id: "d",
        q:"how to add cart",
        video: undefined,
        a:"lkjsdflj"
    },
    {
        id: "e",
        q:"how to give feedback",
        video: undefined,
        a:"lkjsdflj"
    }
]

let ansData =JSON.parse(localStorage.getItem("andata")) || [];



let question = document.querySelector(".question");
// let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! generatequestion funcation

let generatequestion =()=>{
    return (question.innerHTML = quationData
.map((x) => {
          let { id, q, a} = x;
        //   let search = basket.find((x) => x.id === id) || [];
          return `
            <li class="option_b" onclick="dog(${id})" id="${id}" >${q} </li>
          `;
        })
        .join(""));
}

generatequestion();

let answe = document.querySelector(".answe");

console.log(ansData);

let dog =(id)=>{
    let selecteItam = id;
    let search = ansData.find((x) => x.id === selecteItam.id);
    if (search === undefined) {
      ansData.push({
        id: selecteItam.id,
      });
    }
    localStorage.setItem("andata", JSON.stringify(ansData));
    generateans();
}

// ! generateansans funcation
let generateans = ()=>{
    if (ansData.length !== 0) {
        return (answe.innerHTML = ansData
          .map((x) => {
            let { id, item } = x;
            let search = quationData.find((y) => y.id === id) || [];
            return `
        <div class="q">${search.q}</div>
        ${ search.video === undefined? ``: `<video src="${search.video}"  width="640" height="360" controls></video>` }
            
            <div class="ans">
              <ul>
                <li>1. go to kitmo home page</li>
                <img src="image/clicktop.png" alt="">
                <li>2. Click on the three line</li>
                <img src="image/turnon.png" alt="">
                <li>3. turn on dark mode toggle</li>
                <img src="image/dark.png" alt="">
                <li>4. now Success </li>
              </ul>
          `;
          })
          .join(""));
    }else{
        answe.innerHTML = `
        <div>nodata</div>
        `
    }
}

// generateans();

let home =()=>{
    window.location.href ="index.html"
}
 
generateans();