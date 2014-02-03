'use strict';

eventsApp
        .directive('greeting', function(){
        return {
            restrict: 'E',
            replace: true,
            priority: -1,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: function($scope) {
                var greetings = ['hello'];
                $scope.sayHello = function() {
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting) {
                    greetings.push(greeting);
                }
            }

        };

    })
    .directive('finnish', function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority: -1,
            terminal: true,
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function(){
        return {
            restrict: 'A',
            require: 'greeting',
            priority: -2,
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('नमस्ते');
            }
        }
    });