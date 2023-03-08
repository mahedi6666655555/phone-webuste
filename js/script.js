const loadPhones = async(forFinal) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${forFinal}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
    
}


let displayPhones=(phones)=>{


    let get=document.getElementById("container")
    get.textContent=""
    phones.forEach((phone)=>{

        let create=document.createElement("div")
        create.classList.add("col")

        create.innerHTML=`
        <div class="card p-5">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
        `
get.appendChild(create)

    })
}


document.getElementById("btn").addEventListener("click",function(){
let get=document.getElementById("input1")
let forFinal=get.value

loadPhones(forFinal)




})

loadPhones()