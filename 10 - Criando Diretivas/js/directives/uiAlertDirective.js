angular.module("listaTelefonica").directive("uiAlert", function () {

    return {
        // template in-line
        // template: "<div>Ui-Alert</div>"

        templateUrl: "view/alert.html",

        // pode obter nome de elementos html sem problemas
        replace: true,

        // atributo elemento original - agregar comportamento - ngclick - diretiva tipo atributo
        // restrict: "A" 

        // elemento - por si só é um component 
        // restrict: "E"

        // classe 
        // restrict: "C"

        // comentário
        // restrict: "M"

        // combinação
        restrict: "AE",

        // topic: "@title" ||
        scope: {
            title: "@",
            // message: "="
        },
        transclude: true
    }

})