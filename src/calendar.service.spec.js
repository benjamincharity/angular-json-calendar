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


    describe('padBlankTiles', () => {
        const PADDED_LENGTH = 5;
        const DIRECTION = 'right';
        const COUNT = 2;
        let array;

        beforeEach(() => {
            array = [
                { date: '2016-11-03T04:00:00.000Z' },
                { date: '2016-11-04T04:00:00.000Z' },
                { date: '2016-11-05T04:00:00.000Z' },
            ];
        });

        afterEach(() => {
            array = null;
        });

        it('should contain the correct number of objects', () => {
            array = bcCalendarService.padBlankTiles(array, COUNT);

            expect(array.length).toEqual(PADDED_LENGTH);
        });

        it('should have a blank date at the start and real date at the end', () => {
            array = bcCalendarService.padBlankTiles(array, COUNT);

            expect(array[0].date).toBe(null);
            expect(array[array.length - 1].date).not.toBe(null);
        });

        it('should have a real date at the start and a blank date at the end', () => {
            array = bcCalendarService.padBlankTiles(array, COUNT, DIRECTION);

            expect(array[0].date).not.toBe(null);
            expect(array[array.length - 1].date).toBe(null);
        });

    });


});

