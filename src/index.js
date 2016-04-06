import { bcCalendarConfig } from './calendar.provider';
import { bcCalendarService } from './calendar.service';
import { bcCalendarDirective } from './calendar.directive';

export default angular.module('bc.JsonCalendar', [])
    .provider('bcCalendarConfig', bcCalendarConfig)
    .service('bcCalendarService', bcCalendarService)
    .directive('bcCalendar', bcCalendarDirective)
;

