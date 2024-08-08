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
  

let arryq=[
    {
        id: "a",
        q:"how to on dark mode",
        video:"image/darkmode.mp4",
        a:"Paris"
    },
    {
        id: "b",
        q:"how to sign up kitmo",
        video:"",
        a:"lkjsdflj"
    },
    {
        id: "c",
        q:"how to login kitmo",
        video:"",
        a:"lkjsdflj"
    },
    {
        id: "d",
        q:"how to add cart",
        video:"",
        a:"lkjsdflj"
    },
    {
        id: "e",
        q:"how to give feedback",
        video:"",
        a:"lkjsdflj"
    }
]

let question = document.querySelector(".question");
// let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! generatequestion funcation

let generatequestion =()=>{
    return (question.innerHTML = arryq
.map((x) => {
          let { id, q, a} = x;
        //   let search = basket.find((x) => x.id === id) || [];
          return `
            <li class="option_b" onclick="generateans(${id})" id="${id}" >${q} </li>
          `;
        })
        .join(""));
}

generatequestion();

let answe = document.querySelector(".answe");

// ! generateansans funcation
let generateans = (id)=>{
    let selecteItam = id;
    console.log(selecteItam.id);
    let selecteItam2 = arryq.find((x) => x.id === selecteItam.id);
    console.log(selecteItam2);
    if(selecteItam2.id === selecteItam.id){

        answe.innerHTML = arryq.map((x) => {
            let { id, q, video, a} = x;
            let search = arryq.find((y) => y.id === id);
            return  `
            <div class="q">${search.q}</div>
            <video src="${video}"  width="640" height="360" controls></video>
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
            `
        })
    }else{
        answ.innerHTML = `
        <div>nodata</div>
        `
    }
    // return (answerbox.innerHTML = arryq.map((x)=>{
    //     let { id, q, a} = x;
    //     if(selecteItam ===x.id){
    //         return `
    //         <div class="q">${q}</div>
    //     <video src="image/darkmode.mp4"  width="640" height="360" controls></video>
    //     <div class="ans">
    //       <ul>
    //         <li>1. go to kitmo home page</li>
    //         <img src="image/clicktop.png" alt="">
    //         <li>2. Click on the three line</li>
    //         <img src="image/turnon.png" alt="">
    //         <li>3. turn on dark mode toggle</li>
    //         <img src="image/dark.png" alt="">
    //         <li>4. now Success </li>
    //       </ul>
    //         `;
    //     }  
    // }));
    
}

// generateans();

let home =()=>{
    window.location.href ="index.html"
}