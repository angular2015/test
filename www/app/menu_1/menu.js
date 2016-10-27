(function () {
    'use strict';

    angular.module('starter')
            .controller('menuController', menuController)

    function menuController($scope, $http, $ionicSwipeCardDelegate) {
        var self = this;
        console.log('hii');
        $scope.cards = [];
        $scope.cards = [
            {image: 'img/1.png', title: 'So much grass #hippster'},
            {image: 'img/2.png', title: 'Way too much Sand, right?'},
            {image: 'img/3.png', title: 'Beautiful sky from wherever'},
        ];
        $scope.addCard = function (img, name) {
            var newCard = {image: img, title: name};
            newCard.id = Math.random();
            $scope.cards.unshift(angular.extend({}, newCard));
        };

        $scope.addCards = function (count) {
            $http.get('http://api.randomuser.me/?results=' + count).then(function (value) {
                angular.forEach(value.data.results, function (v) {
                    $scope.addCard(v.user.picture.medium, v.user.email);
                });
                $scope.showCards = true;
            });
        };

        $scope.addCards(1);

        $scope.cardSwiped = function (index) {
            $scope.addCards(1);
        };

        $scope.cardDestroyed = function (index) {
            $scope.cards.splice(index, 1);
        };
    }
    ;
})();