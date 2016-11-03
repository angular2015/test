(function () {
    'use strict';

    angular.module('starter')
            .controller('menuCtrl', menuCtrl)

    function menuCtrl($scope) {
        var self = this;
        console.log('hello');
        self.data = 'hello sid';
        var cardTypes = [
            {image: 'img/1.png', title: 'So much grass #hippster'},
            {image: 'img/2.png', title: 'Way too much Sand, right?'},
            {image: 'img/3.png', title: 'Beautiful sky from wherever'},
        ];

        $scope.cards = [];

        $scope.addCard = function (i) {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }

        for (var i = 0; i < 3; i++)
            $scope.addCard();

        $scope.cardSwipedLeft = function (index) {
            console.log('Left swipe');
        }

        $scope.cardSwipedRight = function (index) {
            console.log('Right swipe');
        }

        $scope.cardDestroyed = function (index) {
            $scope.cards.splice(index, 1);
            console.log('Card removed');
        }
    }
    ;
})();