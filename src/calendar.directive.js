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
            bcNestingDepth: '@?', // string [year|month|week|day] - defaults: month
            bcCount: '@?', // integer - default to 1
            bcWeekTitleFormat: '@?', // string [word|abbreviation|letter] - default: abbreviation
            // TODO: remove in favor of bcNestingDepth
            bcOrganizeWeeks: '@?', // bool - default to true
        },
        templateUrl: template,
        link: linkFunction,
        controller: CalendarController,
        controllerAs: 'vm',
    };

    return directive;



    // PSEUDO:
    //
    // If bcOrganizeMonths = true
    //   template months.html (includes weeks.html which includes day.html
    // If bcOrganizeWeeks = true
    //   template weeks.html (includes day.html)
    //


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

    }

}


