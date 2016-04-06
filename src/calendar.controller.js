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

        console.log('startDate: ', this.startDate);


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


    isSelectedDay() {
    }


    isToday() {
    }


    selectDate() {
    }

}

