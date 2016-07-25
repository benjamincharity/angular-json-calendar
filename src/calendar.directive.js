import { CalendarController } from './calendar.controller';
import calendarTemplate from './templates/calendar.html';
import yearTemplate from './templates/year.html';
import monthTemplate from './templates/month.html';
import weekTemplate from './templates/week.html';
import dayTemplate from './templates/day.html';

export function bcCalendarDirective(
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
            bcStartDate: '@?',       // date - default to today
            bcEndDate: '@?',         // date - if not present, use create using bcDays
            bcNestingDepth: '@?',    // string [month|week|day] - defaults: month
            bcDays: '@?',            // integer - default to 30 (used to create bcEndDate)
            bcDayTitleFormat: '@?',  // string [word|abbreviation|letter] - default: abbreviation
            bcMonthTitleFormat: '@?',// string - any valid Moment date format - default: MMMM
            bcDateSelected: '&',     // function will be called when a date is selected (tap/click)
            bcShowWeekdays: '=?',    // determine if the weekdays header should be created
            bcShowMonthTitles: '=?', // determine if the month titles should be visible
            bcDayTemplate: '@?',     // overwrite the default 'day' template
            bcDateFormat: '@?',      // define a custom date format for the day
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


