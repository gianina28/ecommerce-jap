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
					table += `
					<div class="border container-fluid">
					  <div class="row">
						<div class="col-4"><img src="${data[i].imgSrc}" width="208" height="104"/></div>
						<div class="col-8">
							<div class="row">
								<div class="col">
									<div class="row">
										<div class="col-8">${data[i].name}</div>
										<div class="col-4">${data[i].currency} ${data[i].cost}</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									${data[i].description}
								</div>
								<div class="col-12">
									${data[i].soldCount}
								</div>
							</div>
						</div>
					  </div>
					</div>
			    `
			}

		   document.getElementById("table-content").innerHTML += table;
		})
	}
)
    
    //.json para manejar ese resultado como un json en sí
