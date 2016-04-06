export class CalendarController {

    constructor(
        bcCalendarConfig, bcCalendarService
    ) {
        'ngInject';

        this.bcCalendarConfig = bcCalendarConfig;
        this.bcCalendarService = bcCalendarService;

        console.log('config: ', bcCalendarConfig);

        this._activate();

    }




    _activate() {
        // Define the starting day of the calendar
        this.startDate = this.startDate || this.bcCalendarConfig.startDate;

        console.log('this.bcWordType: ', this.bcWordType);

        // Define the style for weekday words (M vs Mon vs Monday)
        this.weekdays = this.bcWordType ?  this.bcCalendarConfig.weekdayStyle[this.bcWordType] :
                this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.wordType];

        console.log('startDate: ', this.startDate);
        console.log('weekdayssss: ', this.weekdays);


    }


    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     * TODO: Can I really not just compare dates?
     *
     * @param {Date} day
     * @return {Bool} isBefore
     */
    isBeforeToday(date) {
        const dateDayOfMonth = moment(date).date();
        const doMonthsMatch = this.bcCalendarService.doMonthsMatch(this.startDate, date);
        const todayOfMonth = moment(this.startDate).date();

        // If both days are in the same month and the passed day comes earlier than today
        return (doMonthsMatch && (dateDayOfMonth < todayOfMonth));
    }


    isDaySelected() {
    }


    isDayToday() {
    }


    selectDate() {
    }

}

