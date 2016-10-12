import monthTemplate from './templates/month.html';

export function bcMonthDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        scope: true,
        bindToController: {
            bcCollection: '=',
            bcWeekdaysHeader: '=',
        },
        templateUrl: monthTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}



