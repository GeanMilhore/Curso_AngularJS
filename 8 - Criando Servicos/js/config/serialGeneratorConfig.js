                                // aceita services apenas do tipo provider
angular.module("listaTelefonica").config(function (serialGeneratorProvider){
    serialGeneratorProvider.setLength(100)
})