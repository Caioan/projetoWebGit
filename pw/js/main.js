function adicionarLinha(nome,url,gitUrl,donoProjeto) {
	var table = document.getElementById("tabela");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
    cell1.innerText = nome;
    cell2.innerText = url;
	cell3.innerText = gitUrl;
	cell4.innerText = donoProjeto;
}

function removerLinha(){
	var table = document.getElementById("tabela");
	while(table.rows.length > 0)
     table.deleteRow(0); 
}

function importarGit() {
	var login = document.getElementById("usuario").value;
	var req = new XMLHttpRequest();
	req.open('GET', 'https://api.github.com/users/'+login+'/repos', false)
		req.addEventListener("load", function(){
			   		if(JSON.parse(req.responseText).length == 0 || req.status == 404){
			   			alert('Usuário não possui repositórios ou não foi informado corretamente. \nPor favor verifique o campo Usuario');
			   			return;
			   		} else if(req.status >= 200 && req.status <= 299){
						removerLinha();
			   			var repositorios = JSON.parse(req.responseText);
			   			repositorios.forEach(function(repositorio){
			   				adicionarLinha(repositorio.name, repositorio.url, repositorio.git_url, repositorio.owner.login);
							console.log(repositorio);
			   			});
			   		} 
			   	});
	req.send();
}