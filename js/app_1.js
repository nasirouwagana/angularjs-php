var myApp = angular.module('myApp', []);

//var EtudiantCtrl = myApp.controller('EtudiantCtrl', function($scope) {
//    $scope.etudiants = [
//        {"idetudiant": "1", "matriculeetudiant": "15254125", "nometudiant": "GBETIE", "prenometudiant": "Gamaliel Ulchiros", "emailetudiant": "ggamaliel88@yahoo.fr"},
//        {"idetudiant": "2", "matriculeetudiant": "15262125", "nometudiant": "KONNON", "prenometudiant": "Appolinaire", "emailetudiant": "akonnon@yahoo.fr"}, 
//        {"idetudiant": "3", "matriculeetudiant": "15441141", "nometudiant": "COMLAN1", "prenometudiant": "Maurice", "emailetudiant": "comlan@hotmail.com"}, 
//        {"idetudiant": "4", "matriculeetudiant": "14785627", "nometudiant": "WAGANA", "prenometudiant": "Nasirou", "emailetudiant": "wnasirou@yahoo.fr"}, 
//        {"idetudiant": "5", "matriculeetudiant": "15336522", "nometudiant": "TABE1254", "prenometudiant": "L\u00e9ocady125", "emailetudiant": "tleocady@yahoo.fr"}
//    ];
//});

var EtudiantCtrl = myApp.controller('EtudiantCtrl', function($scope, $http) {
    $http.get('data.php').success(function(data){
        $scope.etudiants = data;
    });
});