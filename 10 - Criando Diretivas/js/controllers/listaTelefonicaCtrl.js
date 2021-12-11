angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {

    console.log(serialGenerator.generate())

    $scope.app = "Lista Telefonica"

    $scope.contatos = []

    $scope.operadoras = []

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function ({ data, status }) {
            $scope.operadoras = data
        })
    }

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function ({ data, status }) {
            $scope.contatos = data
        }).catch((data, error) => {
            $scope.message = "Não foi possível carregar os dados"
        })
    }

    $scope.adicionarContato = function (contato) {

        contato.serial = serialGenerator.generate()
        contato.data = new Date()
        contatosAPI.saveContato(contato).then(function (data) {
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