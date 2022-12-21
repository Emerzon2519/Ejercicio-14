// controlador de Angular
let app = angular.module('miAplicacion', []);
app.controller('CalculatorController', ['$scope', function($scope) {
    // inicializar variables en el $scope
    $scope.employeeCode = '';
    $scope.hoursWorked = 0;
    $scope.hourlyRate = 0;
    $scope.grossSalary = 0;
    $scope.discount = 0;
    $scope.netSalary = 0;
  
    // función para calcular el salario bruto y el descuento
    $scope.calculateSalary = function() {
      // calcular el salario bruto
      $scope.grossSalary = $scope.hoursWorked * $scope.hourlyRate;
  
      // aplicar descuento según la tabla proporcionada
      if ($scope.grossSalary < 500) {
        $scope.discount = 0;
      } else if ($scope.grossSalary >= 500 && $scope.grossSalary <= 1000) {
        $scope.discount = $scope.grossSalary * 0.02;
      } else if ($scope.grossSalary > 1000 && $scope.grossSalary <= 4000) {
        $scope.discount = $scope.grossSalary * 0.08;
      } else if ($scope.grossSalary > 4000 && $scope.grossSalary <= 8000) {
        $scope.discount = $scope.grossSalary * 0.15;
      } else if ($scope.grossSalary > 8000 && $scope.grossSalary <= 10000) {
        $scope.discount = $scope.grossSalary * 0.21;
      } else {
        $scope.discount = $scope.grossSalary * 0.30;
      }
  
      // calcular el salario neto
      $scope.netSalary = $scope.grossSalary - $scope.discount;
    };
  }]);
  