angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
        var listadeNomes = input.split(" ")
        var listaDeNomesFormatada = listadeNomes.map(function (nome){
            if(/(da|de|dos)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()
        })

        console.log(listaDeNomesFormatada);
        return listaDeNomesFormatada.join(" ");
    }
})