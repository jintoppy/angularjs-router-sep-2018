(function(angular){
    const myapp = angular.module('myapp');

    myapp.component('studentDetails', {
        templateUrl: 'student-details/student-details.component.html',
        bindings: {
            student: '<'
        }
    });
    
})(angular);