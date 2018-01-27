happityApp = angular.module("Happity", ["ngRoute"]);

// configure our routes
happityApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })
    .otherwise({
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })
});

happityApp.controller('mainController', function($scope){
    $scope.messages = [
        {
            date: '2018-01-19 12:34',
            message: 'First message',
            name: 'John Smith',
            id: 1
        },
        {
            date: '2018-01-20 12:34',
            message: 'Recent message',
            name: 'Jane Doe',
            id: 2
        }
    ]

    $scope.next_id = 3;

    $scope.add_message = function(){
        if ($scope.message === '' || $scope.name === '' || $scope.message === undefined || $scope.name === undefined) {
            alert("Please enter both a name and a message")
        }
        else {
            var d = new Date();
            var datestring = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
            $scope.messages.push({
                message: $scope.message,
                name: $scope.name,
                date: datestring,
                id: $scope.next_id
            });

            $scope.next_id++;
        }
    }

    $scope.delete_message = function(id) {
        var ok_to_delete = confirm("Are you sure you want to delete this message?")
        if (ok_to_delete){
            for (var i = 0; i < $scope.messages.length; ++i) {
                if (id === $scope.messages[i].id) {
                    $scope.messages.splice(i, 1);
                }
            }
        }
    }
});