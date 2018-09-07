(function(angular){
    const myapp = angular.module('myapp');

    myapp.component('about', {
        templateUrl: 'about/about.component.html',
        controller: function(){
            this.title = 'my component title';
        }
    });
})(angular)