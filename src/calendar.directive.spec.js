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


    describe('controllerExists', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(inject(() => {

            $scope = $rootScope.$new();

            element = '<bc-calendar bc-start-date="2016-04-20T00:00:00.027Z"></bc-calendar>';

            // Create the directive
            element = $compile(element)($scope);

            // Activate the $digest cycle
            $scope.$apply();

            // Save reference to vm
            vm = element.isolateScope().vm;

            //console.log('VM: ', vm);

        }));

        it('should have a $scope property for the start date', () => {
            expect(vm.bcStartDate).toBeDefined();
        });

    });


});

