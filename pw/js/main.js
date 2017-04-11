function adicionar() {
    //addlinhascolunas
	if(valida_form() == true){
	var table = document.getElementById("tabela");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
	cell3.innerHTML = "NEW CELL2";
	cell4.innerHTML = "NEW CELL2";} 
}

function valida_form(){
if(document.getElementById("usuario").value == ""){
alert('Por favor, preencha o campo usuario');
document.getElementById("usuario").focus();
return false
} else return true;
}