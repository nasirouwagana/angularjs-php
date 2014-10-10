// AngularJS App

var myApp = angular.module('myApp', ['ngRoute']);

var Etudiants = myApp.factory('Etudiants', function($http, $q, $timeout) {
    var factory = {
        etudiants: false,
        getEtudiants: function() {
            var deferred = $q.defer();
            $http.get('data.php').success(function(data) {
                factory.etudiants = data;
                $timeout(function() {
                    deferred.resolve(factory.etudiants);                    
                }, 3000);
            }).error(function(data) {
                deferred.reject('Impossible de recuperer la liste des etudiants');
            });

            return deferred.promise;
        }
    };

    return factory;
});

var EtudiantsCtrl = myApp.controller('EtudiantsCtrl', function($scope, Etudiants) {
    $scope.loading = true;
    $scope.etudiants = Etudiants.getEtudiants().then(function(etudiants) {
        $scope.loading = false;
        $scope.etudiants = etudiants;
    }, function(msg) {
        alert(msg);
    });
});

var EtudiantCtrl = myApp.controller('EtudiantCtrl', function($scope, $routeParams) {
    $scope.params = $routeParams;
});

myApp.config(function($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/home.php', controller: 'EtudiantsCtrl'})
            .when('/etudiant/:idetudiant', {templateUrl: 'partials/etudiant.php', controller: 'EtudiantCtrl'})
            .otherwise({redirectTo: '/'});
});