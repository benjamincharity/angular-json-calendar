import { bcCalendarConfig } from './calendar.provider';
import { bcCalendarService } from './calendar.service';
import { bcCalendarDirective } from './calendar.directive';
import { bcMonthDirective } from './month.directive';
import { bcWeekDirective } from './week.directive';
import { bcDayDirective } from './day.directive';

export default angular.module('bc.JsonCalendar', [])
    .provider('bcCalendarConfig', bcCalendarConfig)
    .service('bcCalendarService', bcCalendarService)
    .directive('bcCalendar', bcCalendarDirective)
    .directive('bcMonth', bcMonthDirective)
    .directive('bcWeek', bcWeekDirective)
    .directive('bcDay', bcDayDirective)
;

