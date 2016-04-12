import weekTemplate from './templates/week.html';

export function bcWeekDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: weekTemplate,
        controller: () => {

            /*
             *console.log(this.bcCollection);
             */

        },
        controllerAs: 'vm',
        link: linkFunction,
    };


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {
        console.log('In link: ', $scope.bcCollection);
    }


    return directive;

}

