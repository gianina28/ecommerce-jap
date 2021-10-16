//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let miLista;
document.addEventListener("DOMContentLoaded", function (e) {

   
    let url = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
    

    fetch (url)
    .then (result => result.json ())
    .then (data => {
			miLista = data;
			mostrar(miLista);
		})
		
	}
)


function onchangeCantidadElegida(){
	let articulo = miLista.articles[0];
	let cantidad = document.getElementById("cantidadelegida").value;
	let total = document.getElementById("totalId");
	let subtotal = document.getElementById("subtotalId");
	total.innerHTML = "Total : " + (cantidad * articulo.unitCost);
	subtotal.innerHTML = (articulo.currency+""+articulo.unitCost +"X"+cantidad);
}
function mostrar (data) {
	let table = "";
	for(let i = 0;i < data.articles.length;i++) {
		let current = 
		table+= `
        <div class="card">
        <div class="row">
            <div class="col-md-8 cart">
                <div class="title">
                    <div class="row">
                        <div class="col">
                            <h4><b>Mi Carrito</b></h4>
                        </div>
                        <div class="col align-self-center text-right text-muted"></div>
                    </div>
                </div>
                <div class="row border-top border-bottom">
                    <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="file:///home/ceibal/Escritorio/Ejercicios/Obligatorio/Proyecto/ecommerce-jap/img/tree1.jpg"></div>
                        <div class="col">
                            <div class="row text-muted">Nombre:</div>
                            <div class="row">${data.articles[i].name}</div>
                        </div>
                        <div class="col"> 
                        <select id="cantidadelegida" value='' class="form-control" onchange="onchangeCantidadElegida()"> 
						<option value="" selected disabled hidden>${data.articles[i].count}</option> 
                        <option>1</option> 
                        <option>2</option> 
                        <option>3</option> 
                        <option>4</option> 
                        <option>5</option> 
                        <option>6</option>
                        <option>7</option> 
                        <option>8</option> 
                        

                        </select>
                    </div>
                        <div class="col">${data.articles[i].currency}${data.articles[i].unitCost}<span class="close">&#10005;</span></div>
                    </div>
                </div>
                <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
            </div>
            <div class="col-md-4 summary">
                <div>
                    <h5><b id="totalId">Total</b></h5>
                </div>
                <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">Cantidad</div>
                    <div class="col text-right">${data.articles[i].count}</div>
                    <p>Subtotal</p>
                    <div id="subtotalId" class="col text-right">${data.articles[i].currency}${data.articles[i].unitCost}</div>
                </div>
                <form>
                    <p>Envío</p> 
                    <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
                  <label class="custom-control-label" for="goldradio">Gold (13%)</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" required="">
                  <label class="custom-control-label" for="premiumradio">Premium (7%)</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" required="">
                  <label class="custom-control-label" for="standardradio">Estándar (3%)</label>
                </div>
                <div class="row">
                  <button type="button" class="m-1 btn btn-link" data-toggle="modal" data-target="#contidionsModal">Ver condiciones</button>
                </div>
              </div>
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
        </div>
    </div>
				
		`
	}

   document.getElementById("table-cart").innerHTML = table;
}