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
            vm = element.isolateScope().$ctrl;

        }));

        it('should have a $scope property for the start date', () => {
            expect(vm.bcStartDate).toBeDefined();
        });

    });


    describe('days are generated', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            element = angular.element(
                `<bc-calendar bc-nesting-depth="day"></bc-calendar>`
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        it('should NOT have generated DOM for a week', () => {
            const week = element[0].querySelectorAll('.bc-calendar__week')[0];
            expect(week).not.toBeDefined();
        });

        it('should have generated DOM for the days', () => {
            const day = element[0].querySelectorAll('.bc-calendar__day')[0];
            expect(day).toBeDefined();
        });

    });


    describe('weeks are generated', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            element = angular.element(
                `<bc-calendar bc-nesting-depth="week"></bc-calendar>`
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        it('should have generated DOM for a week', () => {
            const week = element[0].querySelectorAll('.bc-calendar__week')[0];
            expect(week).toBeDefined();
        });

        it('should NOT have generated DOM for a month', () => {
            const month = element[0].querySelectorAll('.bc-calendar__month')[0];
            expect(month).not.toBeDefined();
        });

    });


    describe('months are generated', () => {
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

        it('should have generated DOM for a month', () => {
            const month = element[0].querySelectorAll('.bc-calendar__month')[0];
            expect(month).toBeDefined();
        });

    });


    describe('weekday headers', () => {

        describe('visible headers', () => {
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

            it('should have visible weekday headers', () => {
                const title = element[0].querySelectorAll('.bc-calendar__weekdays')[0];
                expect(title).toBeDefined();
            });
        });


        describe('hidden headers', () => {
            let $scope;
            let element;
            let vm;

            beforeEach(() => {
                $scope = $rootScope.$new();
                element = angular.element(
                    `<bc-calendar bc-show-weekdays="false"></bc-calendar>`
                );
                element = $compile(element)($scope);
                $scope.$apply();
                vm = element.isolateScope().vm;
            });

            it('should NOT have visible weekday headers', () => {
                const title = element[0].querySelectorAll('.bc-calendar__weekdays')[0];
                expect(title).not.toBeDefined();
            });
        });




    });




});

