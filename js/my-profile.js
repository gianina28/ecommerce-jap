//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    function Savedata () {
        let userObj = {
            personName: document.getElementById("personName").value,
            lastName: document.getElementById("lastName").value,
            age: document.getElementById("age").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            user : document.getElementById("Username").value,
        
        }
        localStorage.setItem('userObj', JSON.stringify(userObj))
    }
    
function showData () {

    let profile =JSON.parse(localStorage.getItem("userObj"))
	document.getElementById("personName").value = profile.personName;
    document.getElementById("lastName").value =profile.lastName;
    document.getElementById("age").value =profile.age;
    document.getElementById("email").value =profile.email;
    document.getElementById("phone").value =profile.phone;
    document.getElementById("Username").value =profile.user;
    console.log(profile)
}


document.getElementsByClassName("btnprof")[0].onclick =function () {
    Savedata ();
    
}   

showData ();
});