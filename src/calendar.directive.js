import { CalendarController } from './calendar.controller';
import template from './calendar.html';

export function bcCalendarDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcStartDate: '@?', // date - default to today
            bcInterval: '@?', // string days|weeks|months - defaults to month
            bcCount: '@?', // integer - default to 1
            bcWordType: '@?', // string - default to 'abbreviation'
            bcOrganizeWeeks: '@?', // bool - default to true
        },
        templateUrl: template,
        link: linkFunction,
        controller: CalendarController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

    }

}


