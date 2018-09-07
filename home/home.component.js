(function(angular){
    const myapp = angular.module('myapp');

    myapp.component('home', {
        templateUrl: 'home/home.component.html',
        controller: function(AppService){
            this.students = AppService.getStudents();
        }
    });
})(angular)