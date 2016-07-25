describe('bcCalendarConfig', () => {
    let bcCalendarConfig;

    // Include the module
    beforeEach(angular.mock.module('bc.JsonCalendar'));

    // Inject the service
    beforeEach(inject((_bcCalendarConfig_) => {
        bcCalendarConfig = _bcCalendarConfig_;
    }));




    describe('startDate', () => {

        it('should have a valid start date', () => {
            expect(moment(bcCalendarConfig.startDate).isValid()).toEqual(true);
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


});


