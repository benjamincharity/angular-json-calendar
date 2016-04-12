import { bcCalendarConfig } from './calendar.provider';
import { bcCalendarService } from './calendar.service';
import { bcCalendarDirective } from './calendar.directive';
import { bcDayDirective } from './day.directive';

export default angular.module('bc.JsonCalendar', [])
    .provider('bcCalendarConfig', bcCalendarConfig)
    .service('bcCalendarService', bcCalendarService)
    .directive('bcCalendar', bcCalendarDirective)
    .directive('bcDay', bcDayDirective)
;

