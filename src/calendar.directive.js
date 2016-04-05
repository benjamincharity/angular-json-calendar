import { CalendarController } from './.controller';
import template from './calendar.html';

export function CalendarDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {},
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

