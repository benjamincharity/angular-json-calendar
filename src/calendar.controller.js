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
        this.days = parseInt(this.bcCount || this.bcCalendarConfig.days, 10);
        this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;
        this.weekdays = this.bcWeekTitleFormat ?
            this.bcCalendarConfig.weekdayStyle[this.bcWeekTitleFormat] :
            this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.weekTitleFormat];
        this.WEEK_LENGTH = 7;

        // Define the calendar duration (or length)
        this.calendarDuration =
            moment.duration(this.days, this.bcCalendarConfig.interval);

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

        this.bcCollection = this._organizeMonths(tempDays);


        console.log('this.bcCollection: ', this.bcCollection);

        /*
         *console.log('tempMonths: ', tempMonths);
         */

        // Build the calendar JSON
        /*
         *this.calendar = this.build(this.startDate, 2);
         */


        //
        // Call the correct organization method based on the nesting depth
        //
        if (this.nestingDepth === 'month') {
            this.bcCollection = this._organizeMonths(tempDays);
        } else if (this.nestingDepth === 'week') {
            this.bcCollection = this._organizeWeeks(tempDays);
        } else if (this.nestingDepth === 'day') {
            this.bcCollection = tempDays;
        }




    }


    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     *
     * @param {Date} day
     * @return {Bool}
     */
    isBeforeToday(date) {
        return this.bcCalendarService.dateIsBeforeToday(date);
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


    /**
     * Select a date
     *
     * @param {Object} day
     */
    selectDate(day) {

        // Set the selected day
        this.selectedDate = day;

        // Only call the passed method if it exists and a valid date was chosen
        if (day.date && this.bcDateSelected) {
            this.bcDateSelected({
                date: day.date,
            });
        }

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
     * Organize by month
     *
     * @param {Array} allDays - An array of all days
     * @return {Array} collection - days organized into weeks and months
     */
    _organizeMonths(allDays) {
        const calendar = [];
        const SATURDAY = 6;
        const SUNDAY = 0;
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
            const pad = this.bcCalendarService.padDaysLeft(month[0].date, (dayOfMonth - 1));

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
            const firstDay = moment(month[0].date).day();

            // If the first day is after Sunday
            if (firstDay > SUNDAY) {
                // Pad with blank tiles so that the first day is lined up in the correct column
                month = this.bcCalendarService.padBlankTiles(month, firstDay, 'left');
            }

            // How many weekdays are after the last day of the month?
            // (remember: weeks are zero-based)
            const lastDay = moment(month[month.length - 1].date).day();

            // If blank tiles are needed for the last week
            if (lastDay < SATURDAY) {
                // Pad with blank tiles so that the first day is lined up in the correct column
                month = this.bcCalendarService.padBlankTiles(month,
                                                             this.WEEK_LENGTH - (lastDay + 1),
                                                             'right');
            }

            // Organize into weeks and add to the calendar array
            calendar.push(this._chunk(month));

        }


        return calendar;

    }


    /**
     * Organize a collection of days into sub collections of weeks
     *
     * @param {Array} days - array of days
     * @return {Array} collection
     */
    _organizeWeeks(days) {
        // Determine the day of the week that the calendar starts and ends on
        const firstDay = moment(days[0].date).day();
        const lastDay = moment(days[days.length - 1].date).day();
        const SATURDAY = 6;
        const SUNDAY = 0;

        // If the first day is after Sunday
        if (firstDay > SUNDAY) {
            // Pad with blank tiles so the first day is lined up in the correct weekday column
            days = this.bcCalendarService.padBlankTiles(days, firstDay, 'left');
        }

        // If the last day is before Saturday
        if (lastDay < SATURDAY) {
            // Pad with blank tiles so that the last week's days are in the correct weekday column
            days = this.bcCalendarService.padBlankTiles(days,this.WEEK_LENGTH - (lastDay + 1),
                                                        'right');
        }

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



}

