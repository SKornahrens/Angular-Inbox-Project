'use strict';

// Register 'messageList' component, along with its template and controller
angular.
  module('messageList').
  component('messageList', {
    templateUrl: 'message-list/message-list.template.html',
    controller: function MessageListController($scope, $http) {
      var self = this;

      $http.get('data/messages.json').then(function(response) {
        self.messages = response.data;
        $scope.$root.messages = self.messages
      })

      $scope.getClassList = (messageData) => {
        let classString = ''
        if (messageData.selected) {
          classString += ' selected'
        }
        if (messageData.read) {
          classString += ' read'
        } else {
          classString += ' unread'
        }
        return classString
      }
    }
  })
