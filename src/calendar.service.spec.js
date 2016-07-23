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


    describe('isDayToday', () => {
        const date1 = moment('2013-02-08').format();
        const date2 = moment('2013-02-08').format();

        it('should verify that the date is today', () => {
            expect(bcCalendarService.isDayToday(date1, date2)).toEqual(true);
        });

    });


});

