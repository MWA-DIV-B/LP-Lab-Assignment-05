<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Web Application</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
</head>
<body ng-app="myApp">
  <div ng-controller="myController">
    <h1>{{ message }}</h1>
  </div>

  <script>
    var app = angular.module('myApp', []);
    app.controller('myController', function($scope) {
      // Retrieve the dynamic data from the JSP
      $scope.message = '${dynamicData}';
    });
  </script>
</body>
</html>
