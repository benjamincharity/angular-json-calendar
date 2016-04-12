import monthTemplate from './templates/month.html';

export function bcMonthDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: monthTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}

