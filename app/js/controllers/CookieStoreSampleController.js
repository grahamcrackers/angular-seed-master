'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CompileSampleController($scope, $cookieStore) {
        $scope.event = {id: 1, name:"Ny Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        };
    }
);