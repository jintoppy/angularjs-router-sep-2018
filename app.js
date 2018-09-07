(function(angular){
    const myapp = angular.module('myapp', ['ui.router']);

    myapp.config(function($stateProvider){
        $stateProvider.state({
            name: 'home',
            url: '/home',
            component: 'home'
        });

        $stateProvider.state({
            name: 'about',
            url: '/about',
            component: 'about'
        });

        $stateProvider.state({
            name: 'stuDetails',
            url: '/student/{studentId}',
            component: 'studentDetails',
            resolve: {
                student: function(AppService, $transition$){
                    const params = $transition$.params();
                    return AppService.getStudentById(params.studentId);
                }
            }
        });

    });


})(angular);