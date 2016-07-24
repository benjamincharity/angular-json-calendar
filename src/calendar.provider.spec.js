describe('bcCalendarConfig', () => {
    let bcCalendarConfig;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_bcCalendarConfig_) => {
        bcCalendarConfig = _bcCalendarConfig_;
    }));




    describe('startDate', () => {
        const today = moment(new Date()).startOf('day').format();

        it('should have a start date of today', () => {
            expect(bcCalendarConfig.startDate).toEqual(today);
        });

    });


    describe('nestingDepth', () => {

        it('should have a nesting depth of "month"', () => {
            expect(bcCalendarConfig.nestingDepth).toEqual('month');
        });

    });


    describe('days', () => {
        const DAYS_IN_MONTH = 30;

        it('should be set to 30 days', () => {
            expect(bcCalendarConfig.days).toEqual(DAYS_IN_MONTH);
        });

    });


    describe('weekdayStyle', () => {

        it('should have an array for the style: letter', () => {
            expect(bcCalendarConfig.weekdayStyle.letter).toBeDefined();
        });

        it('should have an array for the style: abbreviation', () => {
            expect(bcCalendarConfig.weekdayStyle.abbreviation).toBeDefined();
        });

        it('should have an array for the style: word', () => {
            expect(bcCalendarConfig.weekdayStyle.word).toBeDefined();
        });

    });


    describe('dayTitleFormat', () => {

        it('should have the default set to abbreviation', () => {
            expect(bcCalendarConfig.dayTitleFormat).toEqual('abbreviation');
        });

    });


    describe('showWeekdays', () => {

        it('should be set to show weekdays by default', () => {
            expect(bcCalendarConfig.showWeekdays).toBe(true);
        });

    });


    describe('dayTemplate', () => {

        it('should have a default template defined', () => {
            expect(bcCalendarConfig.dayTemplate).toBeDefined();
        });

    });


    describe('setDayTemplate', () => {
        const template = `<span>Test content!</span>`;

        beforeEach(() => {
            bcCalendarConfig.setDayTemplate(template);
        });

        it('should have a custom user day template', () => {
            expect(bcCalendarConfig.userDayTemplate).toEqual(template);
        });

    });


    describe('dateFormat', () => {

        it('should have a default date format of "D"', () => {
            expect(bcCalendarConfig.dateFormat).toEqual('D');
        });

    });


    describe('monthTitleFormat', () => {

        it('should have a month title format of "MMMM"', () => {
            expect(bcCalendarConfig.monthTitleFormat).toEqual('MMMM');
        });

    });


    describe('showMonthTitles', () => {

        it('should show month titles by default', () => {
            expect(bcCalendarConfig.showMonthTitles).toBe(true);
        });

    });


});


