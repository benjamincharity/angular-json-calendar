describe('bcCalendarService', () => {
    const ALL_DAYS_COUNT = 60;
    let bcCalendarService;
    let ALL_DAYS;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_bcCalendarService_) => {
        bcCalendarService = _bcCalendarService_;

        // Create large array of days for all tests to use
        ALL_DAYS = bcCalendarService.buildDays(ALL_DAYS_COUNT);
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
        const DAYS_NEEDED = 3;
        let array;

        beforeEach(() => {
            array = ALL_DAYS.slice(0, DAYS_NEEDED);
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


    describe('chunk', () => {
        const SIZE = 3;
        const DAYS_NEEDED = 8;
        let splitGroup;
        let group;

        beforeEach(() => {
            group = ALL_DAYS.slice(0, DAYS_NEEDED);

            splitGroup = bcCalendarService.chunk(group, SIZE);
        });

        afterEach(() => {
            splitGroup = null;
        });

        it('should be a group of arrays the length of SIZE', () => {
            expect(splitGroup[0].length).toEqual(SIZE);
        });

    });


    // TODO: This is coming out as 6 for some reason
    describe('durationInDays', () => {
        const DAYS_NEEDED = 4;
        const END_VALUE = 5;
        let duration;
        let START;
        let END;

        beforeEach(() => {
            START = ALL_DAYS[0].date;
            END = ALL_DAYS[DAYS_NEEDED].date;

            duration = bcCalendarService.durationInDays(START, END);
        });

        afterEach(() => {
            duration = null;
        });

        it('should have a duration of END_VALUE', () => {
            expect(duration).toEqual(END_VALUE);
        });

    });


    describe('organizeWeeks', () => {
        const WEEK_LENGTH = 7;
        const DAYS_NEEDED = 22;
        let weeks;

        beforeEach(() => {
            const days = ALL_DAYS.slice(0, DAYS_NEEDED);

            weeks = bcCalendarService.organizeWeeks(days);
        });

        afterEach(() => {
            weeks = null;
        });

        it('should be organized into arrays the length of WEEK_LENGTH', () => {
            expect(weeks[0].length).toEqual(WEEK_LENGTH);
        });

    });







    describe('buildDays', () => {
        const LIMIT = 6;
        let days;

        beforeEach(() => {
            days = bcCalendarService.buildDays(LIMIT);
        });

        afterEach(() => {
            days = null;
        });

        it('should be an array the length of LIMIT', () => {
            expect(days.length).toEqual(LIMIT);
        });

        it('should have a date on each item', () => {
            expect(days[0].date).toBeDefined();
        });

    });

});

