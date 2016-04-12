import { CalendarController } from './calendar.controller';
import calendarTemplate from './templates/calendar.html';
import yearTemplate from './templates/year.html';
import monthTemplate from './templates/month.html';
import weekTemplate from './templates/week.html';
import dayTemplate from './templates/day.html';


export function bcCalendarDirective(
    $compile
) {
    'ngInject';

    // Define possible templates
    const templates = {
        year: yearTemplate,
        month: monthTemplate,
        week: weekTemplate,
        day: dayTemplate,
    };

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcStartDate: '@?', // date - default to today
            bcNestingDepth: '@?', // string [year|month|week|day] - defaults: month
            bcCount: '@?', // integer - default to 1
            bcWeekTitleFormat: '@?', // string [word|abbreviation|letter] - default: abbreviation
        },
        link: linkFunction,
        templateUrl: calendarTemplate,
        controller: CalendarController,
        controllerAs: 'vm',
    };

    return directive;




    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

        // Set the correct template based on the desired nesting depth
        vm.getTemplateUrl = () => {
            return templates[vm.nestingDepth];
        };

    }



}


