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
                <h5 class="mb-3">Tipo de envío</h5>
              
                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" required>
                    <label class="custom-control-label" for="goldradio">Gold (13%)</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" required>
                    <label class="custom-control-label" for="premiumradio">Premium (7%)</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="standardradio" name="publicationType" type="radio" class="custom-control-input"  required>
                    <label class="custom-control-label" for="standardradio">Estándar (3%)</label>
                  </div>
              
                  
                
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
          </div>
        </div>
      </div>
        </div>
    </div>
				
		`
	}
  document.getElementById('wiretransfer').onclick = function() {
    document.getElementById('cardnumberInput').disabled = true;
    document.getElementById('passwordInput').disabled = true;
    document.getElementById('duedateInput').disabled = true;
    document.getElementById('numbercount').disabled = false;
}

document.getElementById('creditcard').onclick = function() {
  document.getElementById('cardnumberInput').disabled = false;
  document.getElementById('passwordInput').disabled = false;
  document.getElementById('duedateInput').disabled = false;
  document.getElementById('numbercount').disabled = true;

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