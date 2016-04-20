import dayWrapperTemplate from './templates/day.html';

export function bcDayDirective(
    bcCalendarConfig
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: dayWrapperTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}

