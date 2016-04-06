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

        // Define today's date
        this.today = this.bcCalendarConfig.startDate;

        // DEFAULTS
        this.startDate = this.startDate || this.bcCalendarConfig.startDate;
        this.count = parseInt(this.bcCount || this.bcCalendarConfig.count, 10);
        this.interval = this.bcInterval || this.bcCalendarConfig.interval;
        this.weekdays = this.bcWordType ?  this.bcCalendarConfig.weekdayStyle[this.bcWordType] :
                this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.wordType];

        console.log('count: ', this.count);
        console.log('interval: ', this.interval);

        // Define the calendar duration (or length)
        this.calendarDuration =
            moment.duration(this.count, this.bcCalendarConfig.interval);

        // Get the full count of days
        this.calendarDays = this.calendarDuration.asDays();
        console.log('calendarDays: ', this.calendarDays);


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
         *this._getDaysInMonth(this.startDate);
         *this.isDayToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day))
         *this.isBeforeToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day));
         */





        // loop through `interval` for `count` times
        //
        // always are building out days no matter the interval
        // interval is merely to simplify math for the end user
        //
        // if ask for 2 days
        //   collection is array with single item (month)
        //   month is array with single item (week)
        //   if weeks are turned ON
        //     week is array with 7 items (days) (backfilled for missing days)
        //   if weeks are turned OFF
        //     week is array with 2 items (days)
        //
        // if ask for 2 weeks
        //   collection is array with single item (month)
        //   month is array with 2 items (weeks)
        //   weeks are arrays with 7 items (days)
        //   if weeks are turned ON
        //     backfill for missing days
        //
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


        const fakeArray = [''];

        this.build(this.startDate, 1);

    }


    build(start, duration) {
        console.warn('in build: ', start, duration);

        const collection = [];
        let monthsBuilt = 0;

        // loop to create months
        while (monthsBuilt < duration) {
            console.log('building a month',
                        monthsBuilt, moment(start).add(monthsBuilt, 'months'));

            const days = this._getDaysInMonth(moment(start).add(monthsBuilt, 'months'));
            console.log('days: ', days);

            // Add month to collection
            collection.push(days);

            // increment counter
            monthsBuilt = monthsBuilt + 1;
        }

        console.log('collection: ', collection);


    }


    /*
     *buildWeeks() {
     *}
     */


    /*
     *buildDays() {
     *}
     */


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
     * @param {Date} startDate
     * @return {Array} days
     */
    _getDaysInMonth(startDate) {
        const firstDate = moment(startDate).startOf('month');
        const days = [];
        let date = moment(startDate).startOf('month');

        // As long as the month hasn't changed
        while (moment(date).isSame(firstDate, 'month')) {
            // Add the new day to our array
            days.push(moment(date).startOf('day').format());

            // Increment the date by one day
            date = moment(date).add(1, 'days');
        }

        return days;
    }


    /**
     * Turn a integer (e.g. '6') into an array: '[1,2,3,4,5,6]'
     *
     * @param {Integer} count
     * @return {Array} days
     */
    _integerToArray(count) {
        let i;
        const days = [];

        for (i = 0; i < count; i += 1) {
            days.push(i);
        }

        return days;

    }

}

