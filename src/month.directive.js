import monthTemplate from './templates/month.html';

export function bcMonthDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        //replace: true,
        scope: {},
        bindToController: {
            bcCollection: '=',
            bcWeekdaysHeader: '=',
        },
        templateUrl: monthTemplate,
        controller: function() {
            console.log('in MONTH directive: ', this.bcCollection);
        },
        controllerAs: 'vm',
    };

    return directive;

}



