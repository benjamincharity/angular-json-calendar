import weekTemplate from './templates/week.html';

export function bcWeekDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        //replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: weekTemplate,
        controller: function() {
            console.log('in WEEK directive: ', this.bcCollection);
        },
        controllerAs: 'vm',
    };

    return directive;

}

