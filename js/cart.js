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


function mostrar (data) {
	let table = "";
	for(let i = 0;i < data.articles.length;i++) {
		table+= `
        <div class="card">
        <div class="row">
            <div class="col-md-8 cart">
                <div class="title">
                    <div class="row">
                        <div class="col">
                            <h4><b>Mi Carrito</b></h4>
                        </div>
                        <div class="col align-self-center text-right text-muted">Artículos</div>
                    </div>
                </div>
                <div class="row border-top border-bottom">
                    <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="file:///home/ceibal/Escritorio/Ejercicios/Obligatorio/Proyecto/ecommerce-jap/img/tree1.jpg"></div>
                        <div class="col">
                            <div class="row text-muted">Nombre</div>
                            <div class="row">${data.articles[i].name}</div>
                        </div>
                        <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
                        <div class="col">${data.articles[i].currency}${data.articles[i].unitCost}<span class="close">&#10005;</span></div>
                    </div>
                </div>
                <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
            </div>
            <div class="col-md-4 summary">
                <div>
                    <h5><b>Total</b></h5>
                </div>
                <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">ITEMS</div>
                    <div class="col text-right">${data.articles[i].currency}${data.articles[i].unitCost}</div>
                </div>
                <form>
                    <p>SHIPPING</p> <select>
                        <option class="text-muted">Standard-Delivery- &euro;5.00</option>
                    </select>
                    <p>GIVE CODE</p> <input id="code" placeholder="Enter your code">
                </form>
                <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
                </div> <button class="btn">CHECKOUT</button>
            </div>
        </div>
    </div>
				
		`
	}

   document.getElementById("table-cart").innerHTML = table;

}
