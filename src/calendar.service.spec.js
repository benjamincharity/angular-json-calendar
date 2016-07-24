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
            expect(bcCalendarService.dateIsBeforeToday(pastDate)).toBe(true);
        });

    });


    describe('isDayToday', () => {
        const date1 = moment('2013-02-08').format();
        const date2 = moment('2013-02-08').format();

        it('should verify that the date is today', () => {
            expect(bcCalendarService.isDayToday(date1, date2)).toBe(true);
        });

    });


    describe('integerToArray', () => {
        const ARRAY_LENGTH = 3;
        let array;

        beforeEach(() => {
            array = bcCalendarService.integerToArray(ARRAY_LENGTH);
        });

        it('should be an array the length of ARRAY_LENGTH', () => {
            expect(array.length).toEqual(ARRAY_LENGTH);
        });

    });


    describe('padDaysLeft', () => {
        const COUNT = 3;
        const START = moment('2016-11-05').format();
        let pad;

        beforeEach(() => {
            pad = bcCalendarService.padDaysLeft(START, COUNT);
        });

        afterEach(() => {
            pad = null;
        });

        it('should be an array of days equal to COUNT', () => {
            expect(pad.length).toEqual(COUNT);
        });

        it('should be ordered from earliest to latest', () => {
            const lastDay = pad[pad.length - 1].date;
            const secondToLastDay = pad[pad.length - 2].date;

            expect(moment(secondToLastDay).isBefore(lastDay)).toBe(true);
        });

    });


});

