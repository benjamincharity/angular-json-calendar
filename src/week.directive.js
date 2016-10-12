import weekTemplate from './templates/week.html';

export function bcWeekDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: weekTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}

