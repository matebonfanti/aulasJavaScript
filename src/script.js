function adicionarTarefa() {
    //Variavel mensagem, que atrbui o valor de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    
    //Variavel input tarefa que pega o input 
    const inputTarefa = document.getElementById("inputTarefa");

    //Pega o valor do imput e coloca em uma variavel
    let tarefa = inputTarefa.value.trim();

    let mensagem = document.getElementById("mensagem");

    //se o valor do input for vazio, mostra uma mensagem de erro, se nao adicona na lista

    if (tarefa == ""){
        let mensagemErro = "Digite uma tarefa para adicioná-la na lista";
        mensagem.textContent = mensagemErro;
    }else{

         // cria uma variavel que atribui a UL do index
    const listaTarefas = document.getElementById("listaTarefas");

    // cria um elemento do tipo LI e adiciona na variavel
    let novaTarefa = document.createElement("li")

    // Pega o valor do input e atribui a LI
    novaTarefa.textContent = tarefa; 

    //Adiciona a LI até a UL colocando como filha
    listaTarefas.appendChild(novaTarefa);

    

         //pega o valor da variavel mensangem e mostra em P no index
    mensagem.textContent = mensagemSucesso
    }


    //Limpa o input
    inputTarefa.value = "";
  }