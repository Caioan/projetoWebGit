function adicionarLinha(nome,url,gitUrl,donoProjeto) {
	
    //addlinhascolunas
	if(validaForm() == true){
	var table = document.getElementById("tabela");
    var row = table.insertRow(0);
    var cell1 = row.insertCell().className = "nome";
    var cell2 = row.insertCell().className = "url";
	var cell3 = row.insertCell().className = "gitUrl";
	var cell4 = row.insertCell().className = "donoProjeto";
    document.querySelector(".nome").innerHTML = nome;
    document.querySelector(".url").innerText = url;
	document.querySelector(".gitUrl").innerText = gitUrl;
	document.querySelector(".donoProjeto").innerText = donoProjeto;	
}}

function validaForm(){
if(document.getElementById("usuario").value == ""){
alert('Por favor, preencha o campo usuario');
document.getElementById("usuario").focus();
return false
} else return true;
}

function importarGit() {
	var login = document.getElementById("usuario").value;
	var req = new XMLHttpRequest();
	req.open('GET', 'https://api.github.com/users/'+login+'/repos', false)
		req.addEventListener("load", function(){
			   		if(JSON.parse(req.responseText).length == 0 || req.status == 404){
			   			alert('Usuário informado não possui repositórios');
			   			return;
			   		} else if(req.status >= 200 && req.status <= 299){
			   			var repositorios = JSON.parse(req.responseText);
			   			repositorios.forEach(function(repositorio){
			   				adicionarLinha(repositorio.name, repositorio.url, repositorio.git_url, repositorio.owner.login);
							console.log(repositorio);
			   			});
			   		} else {
			   			console.log(req.status);
			   			console.log(req.responseText);
			   		};
			   	});
	req.send();
}