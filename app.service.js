(function(angular){

    const myapp = angular.module('myapp');

    myapp.service('AppService', function(){
        const students = [
            {
                id: 'stu1',
                name: 'Ajay'
            },
            {
                id: 'stu2',
                name: 'Martin'
            }
        ];
        this.getStudents = function(){
            return students;
        };

        this.getStudentById = function(studentId){
            return students.find(stu => stu.id === studentId);
        };

    });


})(angular);