let miLista;
document.addEventListener("DOMContentLoaded", function (e) {

   
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    

    fetch (url)
    .then (result => result.json ())
    .then (data => {
			miLista = data;
			mostrar(miLista);
		})
		document.getElementById("Asc").addEventListener("click", ()=> {
		ordenarInverso()
		});
		document.getElementById("Desc").addEventListener("click", ()=> {
			ordenarPrecio()
		});
		document.getElementById("Venta").addEventListener("click", ()=> {
			ordenarVenta()
		});
	}
)


function mostrar (data) {
	let table = "";
	for(let i = 0;i < data.length;i++) {
		table+= `
		<div class="border container-fluid">
		  <div class="row">
			<div class="col-4"><a href="./product-info.html"><img src="${data[i].imgSrc}" width="208" height="104"/></a></div>
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

   document.getElementById("table-content").innerHTML = table;

}

document.getElementById("rangeFilterCount").addEventListener ("click", () => { 
			let min = document.getElementById("rangeFilterCountMin").value
			let max = document.getElementById("rangeFilterCountMax").value
			
			let table = "";

			for(let i = 0;i < miLista.length; i++) {
				let producto = miLista [i]
				if (producto.cost >= min && producto.cost <= max) {
				
					table += `
							<div class="border container-fluid">
							  <div class="row">
								<div class="col-4"><img src="${miLista[i].imgSrc}" width="208" height="104"/></div>
								<div class="col-8">
									<div class="row">
										<div class="col">
											<div class="row">
												<div class="col-8">${miLista[i].name}</div>
												<div class="col-4">${miLista[i].currency} ${miLista[i].cost}</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											${miLista[i].description}
										</div>
										<div class="col-12">
											${miLista[i].soldCount}
										</div>
									</div>
								</div>
							  </div>
							</div>
						`
				}
			}
			document.getElementById("table-content").innerHTML = table;
		});
function ordenarInverso () {
	miLista.sort (function(a,b){
		if (a.cost > b.cost ) {
			return -1;
		}
		if (a.cost < b.cost ) {
			return 1;
		}
		return 0;
	}).reverse ();
	mostrar (miLista); 
};

function ordenarPrecio () {
	miLista.sort (function(a,b){
		if (a.cost > b.cost ) {
			return -1;
		}
		if (a.cost < b.cost ) {
			return 1;
		}
		return 0;
	});
	mostrar(miLista);
};
function ordenarVenta () {
	miLista.sort (function(a,b){
		if (a.soldCount > b.soldCount ) {
			return -1;
		}
		if (a.soldCount < b.soldCount ) {
			return 1;
		}
		return 0;
	});
	mostrar(miLista);
}
    //.json para manejar ese resultado como un json en sí