(function() {
    'use strict';
    console.log('app.component');
    angular.module('app')
        .component('home', {
            controller: homeController,
            template: `
                <div class="container">
                    <h1>hello twitch</h1>
                </div>
            `
        })

        function homeController() {
            console.log('home controller')
        }
}());

