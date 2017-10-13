'use strict';

// Register 'composeForm' component, along with its template and controller
angular.
  module('composeForm').
  component('composeForm', {
    templateUrl: 'compose-form/compose-form.template.html',
    controller: function compseFormController($scope) {

      $scope.$root.messages = []
      function getData() {
        return $scope.$root.messages
      }

      $scope.message = {
        read: false,
        starred: false,
        labels: []
      }

      $scope.getNewMessage = (messageData) => {
        $scope.message.id = getData().length +1
        $scope.$root.messages.push($scope.message)
        $scope.$root.$applyAsync()
      }

    }
  })
