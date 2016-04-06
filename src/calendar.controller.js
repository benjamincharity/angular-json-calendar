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

        // Define today's date
        this.today = this.bcCalendarConfig.startDate;

        // Define the style for weekday words (M vs Mon vs Monday)
        this.weekdays = this.bcWordType ?  this.bcCalendarConfig.weekdayStyle[this.bcWordType] :
                this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.wordType];

        console.log('startDate: ', this.startDate);

        // Get the current day of the month
        this.todayDayOfMonth = moment(this.startDate).date();

        // Get the current weekday
        this.todayDayOfWeek = moment(this.startDate).day();



        const DEV_DATE = {
            year: 2016,
            month: 3,
            day: 5,
        };

        /*
         *this.getDaysInMonth(DEV_DATE.year, DEV_DATE.month);
         *this.isDayToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day))
         *this.isBeforeToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day));
         */


    }


    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     *
     * @param {Date} day
     * @return {Bool}
     */
    isBeforeToday(date) {
        return moment(date).isBefore(this.startDate);
    }


    isDaySelected() {
    }


    /**
     * Check to see if the day matches the current date
     *
     * @param {Date} day
     * @return {Bool}
     */
    isDayToday(date) {
        return moment(date).isSame(this.startDate);
    }


    selectDate() {
    }


    /**
     * Return an array of dates for the passed in month
     *
     * @param {Integer} year
     * @param {Integer} month
     * @return {Array} days
     */
    getDaysInMonth(year, month) {
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(moment(date).startOf('day').format());
            date.setDate(date.getDate() + 1);
        }

        return days;
    }

}

