import yearTemplate from './templates/year.html';

export function bcYearDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        scope: {},
        bindToController: {
            bcCollection: '=',
        },
        templateUrl: yearTemplate,
        controller: () => {},
        controllerAs: 'vm',
    };

    return directive;

}

