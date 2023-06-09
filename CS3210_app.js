angular.module('SortingApp', [])
  .controller('SortingController', function($scope) {
    $scope.numbers = [8, 3, 9, 1, 5];

    $scope.sort = function() {
      var len = $scope.numbers.length;
      var sorted = false;

      var interval = setInterval(function() {
        if (!sorted) {
          sorted = true;
          for (var i = 0; i < len - 1; i++) {
            if ($scope.numbers[i] > $scope.numbers[i + 1]) {
              swap(i, i + 1);
              sorted = false;
            }
          }
        } else {
          clearInterval(interval);
        }
      }, 200);
    };

    function swap(index1, index2) {
      var temp = $scope.numbers[index1];
      $scope.numbers[index1] = $scope.numbers[index2];
      $scope.numbers[index2] = temp;

      $scope.$apply(); // Update the view
    }
  });
