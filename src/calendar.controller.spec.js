describe('CalendarController', () => {
    let $compile;
    let $rootScope;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    describe('bcDays are used', () => {
        let $scope;
        let element;
        let vm;
        const THREE_DAYS = 3;

        beforeEach(() => {
            $scope = $rootScope.$new();
            element = angular.element(
                `<bc-calendar bc-days="${THREE_DAYS}" bc-nesting-depth="day"></bc-calendar>`
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        it('should be set to create three days', () => {
            expect(vm.days).toEqual(THREE_DAYS);
        });

        it('should have generated DOM for the days', () => {
            expect(element.find('span')[0]).toBeDefined();
        });

    });


    describe('selectDate', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            element = angular.element(
                `<bc-calendar></bc-calendar>`
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        afterEach(() => {
            vm.selectedDate = null;
        });

        it('should not initially have a selected date', () => {
            expect(vm.selectedDate).toBeNull();
        });

        it('should set the selected date', () => {
            const today = element[0].querySelectorAll('.bc-calendar__day--today')[0];
            angular.element(today).triggerHandler('click');
            expect(vm.selectedDate).toBeDefined();
        });

    });



});

