'use strict';

angular.module('angFireDay7App')
  .controller('BlogController',['$scope', '$location', 'BlogService', function ($scope, $location, BlogService) {
    $scope.posts = BlogService.getAllPosts();

    $scope.addPost = function() {
    	BlogService.newPost($scope.newPost);
    	$location.path('/');
    };

    $scope.removePost = function(postId) {
    	BlogService.removePost(postId);
    };
  
  }]);
