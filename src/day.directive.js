import dayWrapperTemplate from './templates/day.html';

export function bcDayDirective(
    bcCalendarConfig
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: dayWrapperTemplate,
        controller: function(bcCalendarService) {
            'ngInject';

            // Get the inner-day template from the service
            this.dayTemplate = bcCalendarService.getDayTemplate();
        },
        controllerAs: 'vm',
    };

    return directive;

}

