app.component('customForm', {
	templateUrl: 'components/custom-form/custom-form.html',
	bindings: {
		data: '<',
		configs: '<',
		onSubmit: '&'
	},

	controller: function () {
		'use strict';

	}
});