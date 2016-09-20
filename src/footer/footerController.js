var footerController = function($scope) {
	$scope.menu = [
				{label:'Our Products', submenu: [{label: 'DBundies', link: ''}, {label: 'Broadband', link: ''}, {label: 'TV', link: ''}, {label: 'Mobile', link: ''}, {label: 'Phone', link: ''}, {label: 'Accessories', link: ''}, {label: 'eSecurity', link: ''}]}, 
				{label:'Support', submenu: [{label: 'ABundies', link: ''}, {label: 'Broadband', link: ''}]},
				{label:'Our website', submenu: [{label: 'BBundies', link: ''}, {label: 'Broadband', link: ''}]},
				{label:'O group', submenu: [{label: 'CBundies', link: ''}, {label: 'Broadband', link: ''}]},
				{label:'Join the conversation', submenu: [{label: 'Biiindies', link: ''}, {label: 'Broadband', link: ''}]}
				];
}

footerController.$inject = ['$scope'];
app.controller('footerController', footerController);