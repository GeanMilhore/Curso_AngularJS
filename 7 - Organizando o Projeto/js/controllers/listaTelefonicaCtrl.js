angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {

    $scope.app = "Lista Telefonica"

    $scope.contatos = []

    $scope.operadoras = []

    var carregarOperadoras = function () {
        $http.get("http://localhost:3333/operadoras").then(function ({ data, status }) {
            $scope.operadoras = data
        })
    }

    var carregarContatos = function () {
        $http.get("http://localhost:3333/contatos").then(function ({ data, status }) {
            $scope.contatos = data
        }).catch((data, error) => {
            $scope.message = "Ocorreu um Problema: " + data.statusText
        })
    }

    $scope.adicionarContato = function (contato) {
        contato.data = new Date()
        $http.post("http://localhost:3333/contatos", contato).then(function (data) {
            delete $scope.contato
            $scope.contatoForm.$setPristine()
            // $scope.contatos.push(data)
            carregarContatos()
        })
    }

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato
        })
    }

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
    }

    $scope.classe = "selecionado"
    carregarContatos();
    carregarOperadoras()
})