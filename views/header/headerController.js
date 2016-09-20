var headerController = function($scope) {
	$scope.menu = [
				{label:'Bundles', submenu: ['BundlesSubmenu1', 'BundlesSubmenu']}, 
				{label:'Broadband', submenu: ['BroadbandSubmenu1', 'BroadbandSubmenu2']},
				{label:'TV', submenu: ['BroadbandSubmenu1', 'BroadbandSubmenu2']},
				{label:'Mobile', submenu: ['BroadbandSubmenu1', 'BroadbandSubmenu2']},
				{label:'Phone', submenu: ['BroadbandSubmenu1', 'BroadbandSubmenu2']},
				{label:'Support', submenu: ['BroadbandSubmenu1', 'BroadbandSubmenu2']}];
	$scope.selectedMenu = 0;
	$scope.selectedSubMenu = 0;
	$scope.select= function(index, menuLevel) {
		if(menuLevel === 0){
       		$scope.selectedMenu = index; 
       		$scope.selectedSubMenu = 0;
		}else{
			$scope.selectedSubMenu = index; 
		}
    };
}

headerController.$inject = ['$scope'];
app.controller('headerController', headerController);