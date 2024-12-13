const divProductos = document.getElementById("productos");
const alertError =document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products";




function getData(){
    fetch(URLMain).then((response)=>{
        console.log(response);
        response.json().then((response)=>{
            createCards(response)
        });

    }).catch((error)=>{
        alertError.innerHTML=error;
        alertError.style.display="block";
    });
}


function createCards(response){
    response.forEach((response) => {
        divProductos.insertAdjacentHTML("beforeend",`
            <div class="col-sm">
            <div class="card" style=" align-items: center; width: 18rem; height:auto">
                <img src="${response.image}" class="card-img-top" alt="..." style="width: 250px; height:300px">
                <div class="card-body">
                    <h5 class="card-title">${response.title}</h5>
                    <p class="card-text"><strong>${response.price}</strong></p>
                    <p class="card-text">${response.description}</p>
                    
                </div></div>
            </div>`);
        });
}

getData()