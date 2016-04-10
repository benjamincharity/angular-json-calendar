export class CalendarController {

    constructor(
        bcCalendarConfig, bcCalendarService
    ) {
        'ngInject';

        this.bcCalendarConfig = bcCalendarConfig;
        this.bcCalendarService = bcCalendarService;


        this._activate();

    }




    _activate() {
        // Define today's date
        this.today = this.bcCalendarConfig.startDate;

        // DEFAULTS
        this.startDate = this.startDate || this.bcCalendarConfig.startDate;
        this.count = parseInt(this.bcCount || this.bcCalendarConfig.count, 10);
        this.interval = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;
        this.weekdays = this.bcWordType ?  this.bcCalendarConfig.weekdayStyle[this.bcWordType] :
                this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.wordType];
        this.organizeWeeks = this.bcOrganizeWeeks || this.bcCalendarConfig.organizeWeeks;

        // Define the calendar duration (or length)
        this.calendarDuration =
            moment.duration(this.count, this.bcCalendarConfig.interval);

        // Get the full count of days
        this.calendarDays = this.calendarDuration.asDays();


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


        this.calendar = this.build(this.startDate, 2);

    }


    /**
     * Build calendar
     * TODO: Should this be a service?
     * TODO: months are visually separate.. verify all days are together before separating
     *
     * @param {String} start
     * @param {Integer} duration
     * @return {Array} collection
     */
    build(start, duration) {
        let collection = [];
        let monthsBuilt = -1;

        // Loop to create months
        while (monthsBuilt < duration) {
            // Increment counter
            monthsBuilt = monthsBuilt + 1;

            // If not the first month generated, the start of the month should be at the beginning
            // rather than the start date
            if (monthsBuilt !== 0) {
                start = moment(start).startOf('month');
            }

            let days = this._getDaysInMonth(moment(start).add(monthsBuilt, 'months'));

            // If this is the FIRST month
            if (monthsBuilt === 0) {
                // Create the missing days for the padding
                const missingDays = this._padWeekLeft(days, this.todayDayOfWeek);

                // Add to the BEGINNING of our existing array
                days = missingDays.concat(days);
            }

            // If this is the LAST month
            if (monthsBuilt === duration) {
                // Create the missing days for the padding
                const missingDays = this._padWeekRight(days, days[days.length - 1]);

                // Add to the END of our existing array
                Array.prototype.push.apply(days, missingDays)
            }

            console.log('adding: ', days);

            // Add month to collection
            collection.push(days);
        }

        if (this.organizeWeeks) {
            collection = this._organizeWeeks(collection);
        }

        console.log('collection: ', collection);

        return collection;
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


    /**
     * Check to see if the day matches the current date
     *
     * @param {Date} day
     * @return {Bool}
     */
    isDayToday(date) {
        return moment(date).isSame(this.startDate);
    }


    isDaySelected() {
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
        const firstDate = moment(startDate);
        const days = [];
        let date = moment(startDate);

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


    /**
     * Organize collection of days into sub collections of weeks
     *
     * @param {Array} collection
     * @return {Array} collection
     */
    _organizeWeeks(collection) {
        const weekLength = 7;

        collection.forEach((value, index) => {
            collection[index] = this._chunk(value, weekLength);
        });

        return collection;
    }


    /**
     * Split an array into chunks and return an array of these chunks
     *
     * @param {Array} group
     * @param {Integer} groupsize
     * @return {Array} chunks
     */
    _chunk(group, groupsize) {
        const sets = [];
        let i = 0;
        const chunks = group.length / parseInt(groupsize, 10);

        while(i < chunks) {
            sets[i] = group.splice(0, groupsize);
            i = i + 1;
        }

        return sets;
    }


    /**
     * Pad the beginning of a week
     *
     * @param {Array} days
     * @return {Array} pad
     */
    _padWeekLeft(days, startDay) {
        const pad = [];
        const missingDays = this._integerToArray(startDay);

        // Loop through missing days
        for (const day in missingDays) {
            // How many days to go back
            const subtraction = parseInt(day, 10) + 1;

            // Find that day
            const previous = moment(this.startDate).subtract((subtraction), 'days').toISOString();
            // Add to the beginning of the array
            pad.unshift(previous);
        }

        return pad;
    }


    /**
     * Pad the beginning of a week
     *
     * @param {Array} days
     * @return {Array} pad
     */
    _padWeekRight(days, startDay) {
        const week = 7;
        const dayOfWeek = moment(startDay).day();

        // weekdays are zero based
        const neededDays = week - (dayOfWeek + 1);

        return this._integerToArray(neededDays);
    }

}

