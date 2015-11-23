var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('content', {
    url:'/content',
    templateUrl: 'templates/projects.html',
    controller: 'ContentController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
   $.getJSON("data/homeData.json").then(function (data) {
  		$scope.welcomeParagraph1 = data[0].WELCOME;
  		$scope.homePicture1 = data[0].PICTURE;
  		$scope.welcomeParagraph2 = data[1].WELCOME;
  		$scope.homePicture2 = data[1].PICTURE;
  		$scope.welcomeParagraph3 = data[2].WELCOME;
  		$scope.homePicture3 = data[2].PICTURE;

  });
  $scope.number = 20
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $.getJSON("data/aboutData.json").then(function (data) {
  		$scope.introParagraphs = data[0].PARAGRAPH;
  		$scope.aboutPicture = data[0].PICTURE;
  });
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){

  $.getJSON("data/projectsData.json").then(function (data) {
  		$scope.exampleOne = data[0].PARAGRAPH;
  		$scope.exampleOnePic = data[0].PICTURE;
  		$scope.exampleTwo = data[1].PARAGRAPH;
  		$scope.exampleTwoPic = data[1].PICTURE;
  		$scope.exampleThree = data[2].PARAGRAPH;
  		$scope.exampleThreePic = data[2].PICTURE;
    });
  $scope.linkToPolice = "http://students.washington.edu/ddimov/info343/2/police-shooting/";
})


