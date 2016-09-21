 app.directive('pane', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: {
        'title': 'paneTitle',
        'body': 'paneBody'
      },
      template: '<div class="title" ng-transclude="title" ng-click="showContent =! showContent">Fallback Title</div>' +
                  '<div ng-transclude="body" ng-show="showContent"></div>'
    };
})