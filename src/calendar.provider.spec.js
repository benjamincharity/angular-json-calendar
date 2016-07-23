describe('bcCalendarConfig', () => {
    let bcCalendarConfig;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_bcCalendarConfig_) => {
        bcCalendarConfig = _bcCalendarConfig_;
    }));



    describe('this.nestingDepth', () => {

        it('nesting depth should be equal to "month"', () => {
            expect(bcCalendarConfig.nestingDepth).toEqual('month');
        });

    });

});


