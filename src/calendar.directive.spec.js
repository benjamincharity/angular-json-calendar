describe('bcCalendarDirective', () => {
    let $compile;
    let $rootScope;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));



    describe('templateExists', () => {

        it('should have a template', () => {
            const element = $compile('<bc-calendar></bc-calendar>')($rootScope);
            $rootScope.$digest();

            expect(element.html()).toContain('bc-calendar__day');
        });

    });


    // TODO: Why can't I get the damn controller scope?
    describe('controllerExists', () => {


        let scope;
        scope = {};

        beforeEach(inject(function() {
            let element;
            element = angular.element('<bc-calendar/>');
            element = $compile(element)($rootScope);
            $rootScope.$digest();
            scope = element.data('$scope');
            console.info(scope);
        }));

        it('should be there', () => {
            expect(scope).toBeDefined();
        });

    });


});

