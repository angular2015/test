(function () {
    'use strict';

    angular.module('starter')
            .controller('menuController', menuController)

    function menuController($scope, $http, $ionicSwipeCardDelegate) {
        var self = this;
        console.log('hii');
        $scope.cards = [];
        $scope.cards = [
            {image: 'img/1.jpg', title: 'PM Modi To Celebrate Diwali With Indo-Tibetan Border Police Personnel Along China Border', news: 'Keeping with his practice, Prime Minister Narendra Modi will celebrate Diwali with ITBP or Indo-Tibetan Border Police personnel at one of the remotest border posts in Uttarakhand.'},
            {image: 'img/2.jpg', title: 'For PM Narendra Modi In Japan, Focus Likely To Be On Countering Assertive China', news: 'Prime Minister Narendra Modi will visit Japan next month for an annual summit that is expected to deepen defence ties to counter an assertive China and the signing of a civil nuclear deal.'},
            {image: 'img/3.jpg', title: 'Can PM Narendra Modis Foreign Trip Bills Be Public Information? Review Begins', news: 'Files related to Prime Minister Narendra Modis foreign travel have been called for by the Chief Information Commission, which wants to know if details of how much was spent and how bills are cleared can be made public.'},
            {image: 'img/4.jpg', title: "Dipa Karmakar Can't Drive Sachin Tendulkar-Presented BMW, Wants Cash Instead", news: "Dipa Karmakar was presented with a BMW car by Sachin Tendulkar after she narrowly missed a gymnastics bronze in Rio Olympics 2016. Dipa Karmakar feels the BMW car is useless in Agartala due to logistical reasons"},
            {image: 'img/5.jpg', title: "Sachin Tendulkar's Concept of 14-a-Side in School Cricket Gets MCA Nod", news: "Mumbai Cricket Association (MCA) recently passed a proposal allowing 14 members, instead of 11, based on Sachin Tendulkar's idea, to play in a team at the school level, a move aimed at popularising the game among children"},
            {image: 'img/6.jpg', title: "Tendulkar receives Bharat Ratna", news: "Sachin Tendulkar was conferred the Bharat Ratna, India's highest civilian award, by the president Pranab Mukherjee on Tuesday. Tendulkar, 40, is the first sportsperson, as well as the youngest person to receive the award. Speaking during the ceremony at the Rashtrapati Bhawan"},
            {image: 'img/7.jpg', title: "Modi seeks 'shoot to kill' hardware in military modernization", news: "India’s armed forces have embarked on a shopping spree for modern assault rifles, body armor and helmets, providing a potential boost to global arms suppliers."},
            {image: 'img/8.jpg', title: 'Can PM Narendra Modis Foreign Trip Bills Be Public Information? Review Begins', news: 'Files related to Prime Minister Narendra Modis foreign travel have been called for by the Chief Information Commission, which wants to know if details of how much was spent and how bills are cleared can be made public.'},
            {image: 'img/9.jpg', title: "Sachin Tendulkar's Concept of 14-a-Side in School Cricket Gets MCA Nod", news: "Mumbai Cricket Association (MCA) recently passed a proposal allowing 14 members, instead of 11, based on Sachin Tendulkar's idea, to play in a team at the school level, a move aimed at popularising the game among children"},
            {image: 'img/10.jpg', title: 'PM Modi To Celebrate Diwali With Indo-Tibetan Border Police Personnel Along China Border', news: 'Keeping with his practice, Prime Minister Narendra Modi will celebrate Diwali with ITBP or Indo-Tibetan Border Police personnel at one of the remotest border posts in Uttarakhand.'},
            {image: 'img/11.jpg', title: "Dipa Karmakar Can't Drive Sachin Tendulkar-Presented BMW, Wants Cash Instead", news: "Dipa Karmakar was presented with a BMW car by Sachin Tendulkar after she narrowly missed a gymnastics bronze in Rio Olympics 2016. Dipa Karmakar feels the BMW car is useless in Agartala due to logistical reasons"},
            {image: 'img/12.jpg', title: "Tendulkar receives Bharat Ratna", news: "Sachin Tendulkar was conferred the Bharat Ratna, India's highest civilian award, by the president Pranab Mukherjee on Tuesday. Tendulkar, 40, is the first sportsperson, as well as the youngest person to receive the award. Speaking during the ceremony at the Rashtrapati Bhawan"},
            {image: 'img/13.jpg', title: "Modi seeks 'shoot to kill' hardware in military modernization", news: "India’s armed forces have embarked on a shopping spree for modern assault rifles, body armor and helmets, providing a potential boost to global arms suppliers."},
            {image: 'img/8.jpg', title: 'Can PM Narendra Modis Foreign Trip Bills Be Public Information? Review Begins', news: 'Files related to Prime Minister Narendra Modis foreign travel have been called for by the Chief Information Commission, which wants to know if details of how much was spent and how bills are cleared can be made public.'},
        ];
        $scope.addCard = function (img, name) {
            var newCard = {image: img, title: name};
            newCard.id = Math.random();
            $scope.cards.unshift(angular.extend({}, newCard));
        };

        $scope.addCards = function (count) {
//            $http.get('http://api.randomuser.me/?results=' + count).then(function (value) {
//                angular.forEach(value.data.results, function (v) {
//                    $scope.addCard(v.user.picture.medium, v.user.email);
//                });
//                $scope.showCards = true;
//            });
        };

        $scope.addCards(1);
        $scope.showIndex = 0;
        $scope.onSwipeUp = function (index) {
            console.log(index)
            $scope.upside = true;
            $scope.downside = false;
            if (index < $scope.cards.length - 1) {

                $scope.showIndex = index + 1;
            }
          
        };

        $scope.onSwipeDown = function (index) {
            $scope.downside = true;
            $scope.upside = false;
            if (index != 0) {
                $scope.showIndex = index - 1;

            }
              if($scope.showIndex==0){
                $timeout(function(){
                    $scope.animHeader=true;
                },500)
                
            }else
            $scope.animHeader=false;
        };
    }
    ;
})();