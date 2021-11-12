//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let productCost = 0;
let productCount = 0;
let comissionPercentage = "-";
let MONEY_SYMBOL = "$";
let DOLLAR_CURRENCY = "Dólares (USD)";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let PESO_SYMBOL = "UYU ";
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
	total.innerHTML =  (articulo.currency+""+(cantidad * articulo.unitCost));
	subtotal.innerHTML = (articulo.currency+""+(cantidad * articulo.unitCost));
 

}
function updateTotalCosts(){
	let articulo = miLista.articles[0];
	let cantidad = document.getElementById("cantidadelegida").value;
	let total = document.getElementById("totalId");
	let subtotal = document.getElementById("subtotalId");
  let comissionCostHTML = document.getElementById("comissionText");

    let unitCostToShow = MONEY_SYMBOL + (cantidad * articulo.unitCost);
    let comissionToShow = Math.round((comissionPercentage *(cantidad * articulo.unitCost)));

	total.innerHTML = (articulo.currency+""+((cantidad * articulo.unitCost)+comissionToShow));
	subtotal.innerHTML = (articulo.currency+""+(cantidad * articulo.unitCost));
	
    comissionCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
   
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
                            <div class="row">Nombre:</div>
                            <div class="row">${data.articles[i].name}</div>
                        </div>
                        <div class="col"> 
                        <div class="row">Cantidad:</div>
                        <select id="cantidadelegida" value=''class="form-control" onchange="onchangeCantidadElegida()" required="" value="0" min="0"> 
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
                    <div class="col">Costo por unidad:</div>
                        <div class="col">${data.articles[i].currency}${data.articles[i].unitCost}<span class="close">&#10005;</span></div>
                    </div>

                    
                
            <div class="col-md-4 summary">
                
                <hr>
                <h5 class="mb-3">Formas de pago</h5>
                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
                    <label class="custom-control-label" for="goldradio">Gold (13%)</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" checked=""  required="">
                    <label class="custom-control-label" for="premiumradio">Premium (7%)</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
                    <label class="custom-control-label" for="standardradio">Estándar (3%)</label>
                  </div>
                  <button type="button" class="m-1 btn btn-link" data-toggle="modal" data-target="#contidionsModal">Formas de pago</button>
                <hr class="mb-4">
                
              <h4 class="mb-3">Costos</h4>
              <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Subtotal</h6>
                      <small class="text-muted">Unitario del producto</small>
                    </div>
                    <span class="text-muted" id="subtotalId">${data.articles[i].currency}${data.articles[i].unitCost}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Costo de envío ($)</h6>
                      <small class="text-muted">Según el tipo de publicación</small>
                    </div>
                    <span class="text-muted" id="comissionText">-</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong id="totalCostText">-</strong>
                    <span class="text-muted" id="totalId">-</span>
  
                  </li>
                
                </ul>
                <div class="alert fade" role="alert" id="alertResult">
          <span id="resultSpan"></span>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>

      <div class="modal fade" tabindex="-1" role="dialog" id="contidionsModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Forma de pago</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form action="">
                    <div class="container">
                          <div class="custom-control custom-radio">
                            <input id="creditcard" name="publicationType" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="creditcard">Tarjeta de crédito</label>
                </div>
              </div>
            
              <label>Número de tarjeta : </label>   
              <input id="cardnumberInput" type="password" placeholder="Número de tarjeta" name="cardnumber" required/> 
              
              <br>

             <label>Código de seguridad: </label>   
              <input id="passwordInput" type="password" placeholder="Código de seguridad" name="codenumber" required/> 
      <br>
              <label>Vencimiento: </label>   
              <input id="duedateInput" type="duedate" placeholder="MM/AA" name="duedate" required>
              
              <br>

            <div class="custom-control custom-radio">
                  <input id="wiretransfer" name="publicationType" type="radio" class="custom-control-input" required="">
                  <label class="custom-control-label" for="wiretransfer"> Transferencia bancaria</label>
              </input>
              <br>
          <label>Número de cuenta: </label>   
              <input id="numeroDeCuentaInput" type="number" placeholder="Número de cuenta" name="bankaccount" required/> 
              <div>
                <button type="submit" class="btn btn-primary" >Guardar datos</button>
               </div>
              
            </form>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
				
		`
	}
  
  
    document.getElementById("table-cart").innerHTML = table;
	document.getElementById("goldradio").addEventListener("change", function(){
		console.log("A");
		comissionPercentage = 0.13;
		updateTotalCosts();
	  });
	  
	  document.getElementById("premiumradio").addEventListener("change", function(){
		comissionPercentage = 0.07;
		console.log("A");
		updateTotalCosts();
	  });
	  
	  document.getElementById("standardradio").addEventListener("change", function(){
		comissionPercentage = 0.03;
		console.log("A");
		updateTotalCosts();
	  });

  }