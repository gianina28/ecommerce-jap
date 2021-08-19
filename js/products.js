//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

   
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    console.log (url);

    fetch (url)
    .then (result => result.json ())
    .then (data => {
			console.table(data);
		   let name = data.name;
		   let description = data.description;
		   let cost = data.cost;
		   let currency = data.currency;
		   let soldCount = data.soldCount
			
		   let table = "";

			for(let i = 0;i < data.length;i++) {
					table += `<div class="table-row">
			   <div class="table data"> ${data[i].name}</div>
			   <div class="table data">${data[i].description}</div>
			   <div class="table data">${data[i].cost}</div>
			   <div class="table data">${data[i].currency}</div>
			   <div class="table data">${data[i].soldCount}</div>
               <div class= "table data"> <img src="${data[i].imgSrc}"/></div>
			   </div>`
			}
		   

		   document.getElementById("table-content").innerHTML += table;
		})
	}
)
    
    //.json para manejar ese resultado como un json en sí
