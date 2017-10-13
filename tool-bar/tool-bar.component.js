'use strict';

// Register 'toolBar' component, along with its template and controller
angular.
  module('toolBar').
  component('toolBar', {
    templateUrl: 'tool-bar/tool-bar.template.html',
    controller: function ($http, $scope) {
      var self = this;

      $scope.$root.messages = []


      function getData() {
        return $scope.$root.messages
      }

      $scope.markAsRead = function _markAsRead() {
        getData().map(message => {
          if (message.selected === true) {
          message.read = true
          }
        })
        $scope.$root.$applyAsync()
      }

      $scope.markAsUnread = function _markAsUnread() {
        getData().map(message => {
          if (message.selected === true) {
          message.read = false
          }
        })
        $scope.$root.$applyAsync()
      }

      $scope.countUnread = function _countUnread() {
        var count = 0;
        getData().map(message => {
          if (!message.read) {
            count++
          }
        })
        return count
      }

      $scope.toggleAll = function _toggleAll() {
        var toggleStatus = !$scope.isAllSelected();
        getData().map(message => { message.selected = toggleStatus; });
      }

      $scope.isAllSelected = function _isAllSelected() {
        return getData().every(message => { return message.selected })
      }

      $scope.messageSelected = function _messageSelected() {
        return getData().some(message => {
          return message.selected
        })
      }

      $scope.countSelected = function _countSelected() {
        var count = 0
        getData().map(message => {
          if (message.selected) {
            count++
          }
        })
        return count
      }

      $scope.setIcon = function _setIcon() {
        let count = $scope.countSelected()
        if (count === 0) {
          return 'fa fa-square-o'
        }
        if (count === getData().length) {
          return 'fa fa-check-square-o'
        }
        return 'fa fa-minus-square-o'
      }

      $scope.deleteMessage = function _deleteMessage() {
        getData().map(message => {
          if (message.selected === true) {
            console.log(getData().indexOf(message))
            var messageToRemove = getData().indexOf(message)
            getData().splice(messageToRemove, 1)
          }
        })
        $scope.$root.$applyAsync()
      }

      // $scope.markAsUnread = function _markAsUnread() {
      //   getData().map(message => {
      //     if (message.selected === true) {
      //     message.read = false
      //     }
      //   })
      //   $scope.$root.$applyAsync()
      // }

    }
  })
