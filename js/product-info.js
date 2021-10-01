//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var category = {};
let milista;
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
        
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productSoldCountHTML = document.getElementById("productSoldCount");
			let productsRelatedProducts  = document.getElementById("relatedProducts");

            
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productSoldCountHTML.innerHTML = product.soldCount;
			
			let url = "https://japdevdep.github.io/ecommerce-api/product/all.json"
			fetch (url)
				.then (result => result.json ())
				.then (data => {
					for(let i = 0;i < product.relatedProducts.length;i++){
						let relatedProducts = `
						<div class="col-lg-3 col-md-4 col-6">
							<div class="d-block">
								` + data[i].name  + `
							</div>
							<div class="d-block">
								<img class="img-fluid img-thumbnail" src="` + data[i].imgSrc + `" alt="">
							</div>
						</div>
						`
						productsRelatedProducts.innerHTML += relatedProducts ;
					}
				}
			)
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});



let url = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json"
fetch (url)
    .then (result => result.json ())
    .then (data => {
			miLista = data;
			mostrar(miLista);
	}
)
function mostrar (data) {
	let table = "";
	for(let i = 0;i < data.length;i++) {
		table+= `
		<div class="coment-bottom bg-white p-2 px-4">
                <div class="commented-section mt-2">
                    <div class="d-flex flex-row align-items-center commented-user">
                        <h5 class="mr-2">${data[i].user}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">${data[i].dateTime}</span>
                    </div>
                    <div class="comment-text-sm"><span>${data[i].description}</span></div>
					<div class= "rating">`
					for (let j= 0;j<data[i].score;j++ ) {
                        table += `<span class="fa fa-star">`
                    }
					table +=
                    `</div>
                        </div>
                    </div>
                </div>
		`
	}
   document.getElementById("table-content").innerHTML = table;
}

document.getElementById("commentbtn").onclick=function(){
	alert("¡Se ha enviado tu comentario!");
	document.getElementById("comment").value=""
}