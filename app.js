var myapp = angular.module('myapp', []);
// myapp.controller('MyCtrl', ['$scope', function($scope){
//     $scope.myval = "Hello";

//     $scope.onClick = function(){
//         alert($scope.myval);
//         $scope.myval = "Some New Value";
//         alert($scope.myval);
//     };
// }])

// myapp.controller('MyCtrl', ['$scope', function($scope){
//     $scope.students = [
//         {
//             name:'Arun',
//             age:10
//         },
//         {
//             name:'Ajith',
//             age:11
//         }
//     ]

//     $scope.onViewBtnClick =function(stu){
//         $scope.selectedStudent = stu;
//     }
// }])

myapp.controller('MyCtrl', ['$scope', 'AppService', 
function($scope, AppService){
    AppService.getStudents()
        .then(function(result){
            $scope.students = result.data;
        });
    
    $scope.onViewBtnClick =function(stu){
        $scope.selectedStudent = stu;
    }
}])