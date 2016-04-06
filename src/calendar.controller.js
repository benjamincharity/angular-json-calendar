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

        // Initially nothing is selected
        this.selectedDate = null;




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





        // loop through `interval` for `count` times
        //
        // always are building out days no matter the interval
        // interval is merely to simplify math for the end user
        //
        // assume 'month'
        // buildMonth(start month)
        //   build out month json
        //     get all days
        //     formatMonth
        //       loop through putting weeks into arrays
        //       final collection looks like:
        //         - collection is array of months
        //         - months is an array of weeks
        //         - weeks is an array of days
        //   store month somewhere
        //   increment counter by 1
        //   if still less than this.count
        //     call buildMonth again with next month
        //



    }


    buildMonthJson(year, month) {
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

