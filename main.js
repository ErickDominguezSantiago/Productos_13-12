const divProductos = document.getElementById("productos");
const alertError =document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products";

getData()


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


function createCards(res){
    res.forEach((Cards) => {
        divProductos.insertAdjacentHTML("beforeend",`
            <div class="col-sm">
            <div class="card" style=" align-items: center; width: 18rem; height:auto">
                <img src="${Cards.image}" class="card-img-top" alt="..." style="width: 250px; height:300px">
                <div class="card-body">
                    <h5 class="card-title">${Cards.title}</h5>
                    <p class="card-text"><strong>${Cards.price}</strong></p>
                    <p class="card-text">${Cards.description}</p>
                </div></div>
            </div>`);
            });
    }

    /////////////////////////////////////////////////////////////////////////////
    // Otra forma para la mostar todso los objetos de un JSON desde un array


// function CardHTML(responseTrue){
//     divProductos.insertAdjacentHTML("beforeend",`
//         <div class="col-sm">
//         <div class="card" style=" align-items: center; width: 18rem; height:auto">
//             <img src="${responseTrue.image}" class="card-img-top" alt="..." style="width: 250px; height:300px">
//             <div class="card-body">
//                 <h5 class="card-title">${responseTrue.title}</h5>
//                 <p class="card-text"><strong>${responseTrue.price}</strong></p>
//                 <p class="card-text">${responseTrue.description}</p>
//             </div></div>
//         </div>`);
//     }
    
// function createCards(res){
//     res.forEach(CardHTML);
//     }



// function createCards(response){
//     response.forEach((response) => {
//         divProductos.insertAdjacentHTML("beforeend",`
//             <div class="col-sm">
//             <div class="card" style=" align-items: center; width: 18rem; height:auto">
//                 <img src="${response.image}" class="card-img-top" alt="..." style="width: 250px; height:300px">
//                 <div class="card-body">
//                     <h5 class="card-title">${response.title}</h5>
//                     <p class="card-text"><strong>${response.price}</strong></p>
//                     <p class="card-text">${response.description}</p>
//                 </div></div>
//             </div>`);
//         });
// }