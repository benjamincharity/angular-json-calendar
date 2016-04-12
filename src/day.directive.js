import dayTemplate from './templates/day.html';

export function bcDayDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: dayTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}

