/**
 * @ngdoc controller
 * @name app.account.controller:Account
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.account')
		.controller('Account', Account);

  /* @ngInject */
	function Account(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.account.controller:Account
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
