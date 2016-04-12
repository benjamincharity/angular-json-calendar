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
        this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;
        this.weekdays = this.bcWeekTitleFormat ?
            this.bcCalendarConfig.weekdayStyle[this.bcWeekTitleFormat] :
            this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.weekTitleFormat];
        this.WEEK_LENGTH = 7;

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

        const JS_DATE = {
            year: 2016,
            month: 3,
            day: 11,
        };

        const needed = 100;
        const tempDays = this._buildDays(needed,
            new Date(JS_DATE.year, JS_DATE.month, JS_DATE.day).toISOString());

        /*
         *console.log('tempDays: ', tempDays);
         */

        this.calendar = this._organizeMonths(tempDays);

        /*
         *console.log('tempMonths: ', tempMonths);
         */

        // Build the calendar JSON
        /*
         *this.calendar = this.build(this.startDate, 2);
         */

    }


    /**
     * Build calendar
     * TODO: Should this be a service?
     * TODO: Abstract this out so I can better build the needed collection. Abstract out each part,
     * building days, organizing weeks/months/years
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
                const missingDays = this._padDaysLeft(days, this.todayDayOfWeek);

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

            // Add month to collection
            collection.push(days);
        }

        if (this.organizeWeeks) {
            collection = this._organizeWeeks(collection);
        }

        /*
         *console.log('collection: ', collection);
         */

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


    _buildDays(limit, start) {
        let counter = 0;
        const days = [];
        let day;

        while (counter < limit) {
            // Create the day
            day = moment(start).add(counter, 'days').toISOString();

            // Add to the array
            days.push({
                date: day,
            });

            // Increment our counter
            counter = counter + 1;
        }

        /*
         *console.warn('build days: ', limit, start, days);
         */

        return days;
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
     * Organize by month
     *
     * @param {Array} allDays - An array of all days
     * @return {Array} collection - days organized into weeks and months
     */
    _organizeMonths(allDays) {
        const calendar = [];
        let collection = allDays;
        let month;
        let dayOfMonth = moment(collection[0].date).date();
        let daysInMonth = moment(collection[0].date).daysInMonth();

        // Pad the beginning of the month with any missing days
        // If the first day is not the first day of the month
        if (moment(collection[0].date).date() > 0) {
            // Pull this month's days from the collection
            month = collection.slice(0, (daysInMonth - (dayOfMonth - 1)));

            // Fill the missing days from the month
            const pad = this._padDaysLeft(month[0].date, (dayOfMonth - 1));

            // Combine with the existing array
            collection = pad.concat(collection);
        }


        // Split into months
        // As long as there are days left in the collection
        while (collection.length > 0) {

            // Get the day of the month for the first date of the collection eg. '24'
            dayOfMonth = moment(collection[0].date).date();

            // Determine how many days there are this month (total)
            daysInMonth = moment(collection[0].date).daysInMonth();

            // Pull this month's days from the collection
            month = collection.splice(0, (daysInMonth - (dayOfMonth - 1)));

            // How many weekdays are prior to the first day of this month?
            const daysNeededAtBeginning = moment(month[0].date).day();

            // If days are needed for the first week
            if (daysNeededAtBeginning > 0) {
                // Pad with blank tiles so that the first day is lined up in the correct column
                month = this._padBlankTiles(month, daysNeededAtBeginning, 'left');
            }

            // How many weekdays are after the last day of the month?
            // (remember: weeks are zero-based)
            const daysNeededAtEnd =
                this.WEEK_LENGTH - (moment(month[month.length - 1].date).day() + 1);

            // If days are needed for the last week
            if (daysNeededAtEnd > 0) {
                // Pad with blank tiles so that the first day is lined up in the correct column
                month = this._padBlankTiles(month, daysNeededAtEnd, 'right');
            }

            // Organize and add to the calendar array
            calendar.push(this._organizeWeeks(month));

        }


        console.info('RETURNING: ', calendar);
        return calendar;

    }


    /**
     * Organize collection of days into sub collections of weeks
     *
     * @param {Array} days - array of days
     * @return {Array} collection
     */
    _organizeWeeks(days) {
        return this._chunk(days);
    }


    /**
     * Split an array into chunks and return an array of these chunks
     *
     * @param {Array} group
     * @param {Integer} groupsize - Chunk size. Defaults to 7 (one week).
     * @return {Array} chunks
     */
    _chunk(group, groupsize = this.WEEK_LENGTH) {
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
     * Pad a collection with blank tiles at the beginning
     *
     * @param {Array} collection
     * @param {Integer} count
     * @return {Array} paddedCollection
     */
    _padBlankTiles(collection, count, direction = 'left') {
        let i;
        const days = [];

        // Create array
        for (i = 0; i < count; i += 1) {
            days.push({
                date: null,
            });
        }

        // If direction is 'right'
        if (direction === 'right') {
            // pad the end
            return collection.concat(days);
        } else if (direction === 'left') {
            // otherwise pad the beginning
            return days.concat(collection);
        }

    }


    /**
     * Pad the beginning of a week
     *
     * @param {String} startDate - date to to work back from
     * @param {Array} count - how many days to pad
     * @return {Array} pad
     */
    _padDaysLeft(startDate, count) {
        const pad = [];
        const missingDays = this._integerToArray(count);

        // Loop through missing days
        for (const day in missingDays) {
            // How many days to go back
            const subtraction = parseInt(day, 10) + 1;

            // Find that day
            const previous = moment(startDate).subtract((subtraction), 'days').toISOString();

            // Add to the beginning of the array
            pad.unshift({
                date: previous,
            });
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
        const pad =[];
        const week = 7;
        const dayOfWeek = moment(startDay).day();

        // weekdays are zero based
        const neededDays = this._integerToArray(week - (dayOfWeek + 1));

        for (const day in neededDays) {
            pad.push({
                date: null,
            });
        }

        return this._integerToArray(neededDays);
    }

}

