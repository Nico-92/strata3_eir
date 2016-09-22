 app.directive('pane', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: {
        'title': 'paneTitle',
        'body': 'paneBody'
      },
      template: '<div class="row border">'+
                '<div class="col-md-10 col-sm-10 col-xs-10 title" ng-transclude="title" ng-click="showContent =! showContent"></div>' + 
                '<span class="col-md-2 col-sm-2 col-xs-2 text-right title-icon" ng-show="!showContent"><i class="fa fa-chevron-down"></i></span>' +
                '<span class="col-md-2 col-sm-2 col-xs-2 text-right title-icon" ng-show="showContent"><i class="fa fa-chevron-up"></i></span>' +
                '<div class="col-md-12" ng-transclude="body" ng-show="showContent"></div>' + 
                '</div>'
    };
})