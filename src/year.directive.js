import yearTemplate from './templates/year.html';

export function bcYearDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcCollection: '='
        },
        templateUrl: yearTemplate,
        controller: function() {
            console.log('in YEAR directive: ', this.bcCollection);
        },
        controllerAs: 'vm',
    };

    return directive;

}



