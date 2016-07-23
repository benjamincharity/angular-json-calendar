describe('bcCalendarService', () => {
    let bcCalendarService;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_bcCalendarService_) => {
        bcCalendarService = _bcCalendarService_;
    }));

    describe('dateIsBeforeToday', () => {
        const pastDate = '2016-05-01T00:00:00.027Z';

        it('should verify that the date is before today', () => {
            expect(bcCalendarService.dateIsBeforeToday(pastDate)).toEqual(true);
        });

    });
});

