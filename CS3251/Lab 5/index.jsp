
<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Web Application</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="">
  <div ng-controller="MyController">
    <h1>{{message}}</h1>
  </div>

  <script>
    function MyController($scope) {
      // Retrieve the data from the model attribute set by the Servlet
      $scope.message = '<%= request.getAttribute("message") %>';
    }
  </script>
</body>
</html>