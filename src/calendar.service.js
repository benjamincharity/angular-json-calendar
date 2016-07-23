export class bcCalendarService {

    constructor(
    ) {
        'ngInject';

        this.WEEK_LENGTH = 7;

    }




    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     *
     * @param {String} date
     * @return {Bool} isBefore
     */
    dateIsBeforeToday(date) {
        const today = moment(new Date()).startOf('day').format();

        return moment(date).isBefore(today);
    }


    /**
     * Check to see if the day matches the current date
     *
     * @param {String} date
     * @param {String} date2
     * @return {Bool} isToday
     */
    isDayToday(date, date2 = new Date().toISOString()) {
        return moment(date).isSame(date2);
    }


    /**
     * Turn a integer (e.g. '6') into an array: '[1,2,3,4,5,6]'
     *
     * @param {Integer} count
     * @return {Array} days
     */
    integerToArray(count) {
        let i;
        const days = [];

        for (i = 0; i < count; i += 1) {
            days.push(i);
        }

        return days;
    }


    /**
     * Pad the beginning of a week
     *
     * @param {String} startDate - date to to work back from
     * @param {Array} count - how many days to pad
     * @return {Array} pad
     */
    padDaysLeft(startDate, count) {
        const pad = [];
        const missingDays = this.integerToArray(count);

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
     * Pad a collection with blank tiles
     *
     * @param {Array} collection
     * @param {Integer} count
     * @return {Array} paddedCollection
     */
    padBlankTiles(collection, count, direction = 'left') {
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
     * Split an array into chunks and return an array of these chunks
     *
     * @param {Array} group
     * @param {Integer} groupsize - Chunk size. Defaults to 7 (one week).
     * @return {Array} chunks
     */
    chunk(group, groupsize = this.WEEK_LENGTH) {
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
     * Get the duration in days between two dates INCLUDING both dates
     *
     * @param {String} start
     * @param {String} end
     * @return {Integer} days
     */
    durationInDays(start, end) {
        const secondsInDay = 86400;
        const secondsInYear = 31536000;

        // Add a day so the end date is included in the calculation
        const unixEnd = moment(end).add(1, 'days').unix();

        // Subtract a day so the start date is included in the calculation
        const unixStart = moment(start).subtract(1, 'days').unix();

        // Find the difference when converted to seconds
        const diffence = unixEnd - unixStart;

        // Convert the difference of seconds back into days
        return Math.floor((diffence % secondsInYear) / secondsInDay);
    }


    /**
     * Organize a collection of days into sub collections of weeks
     *
     * @param {Array} days - array of days
     * @return {Array} collection
     */
    organizeWeeks(days) {
        // Determine the day of the week that the calendar starts and ends on
        const firstDay = moment(days[0].date).day();
        const lastDay = moment(days[days.length - 1].date).day();
        const SATURDAY = 6;
        const SUNDAY = 0;

        // If the first day is after Sunday
        if (firstDay > SUNDAY) {
            // Pad with blank tiles so the first day is lined up in the correct weekday column
            days = this.padBlankTiles(days, firstDay, 'left');
        }

        // If the last day is before Saturday
        if (lastDay < SATURDAY) {
            // Pad with blank tiles so that the last week's days are in the correct weekday column
            days = this.padBlankTiles(days,this.WEEK_LENGTH - (lastDay + 1), 'right');
        }

        return this.chunk(days);
    }


    /**
     * Organize by month
     *
     * @param {Array} allDays - An array of all days
     * @return {Array} collection - days organized into weeks and months
     */
    organizeMonths(allDays) {
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
            const pad = this.padDaysLeft(month[0].date, (dayOfMonth - 1));

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
                month = this.padBlankTiles(month, firstDay, 'left');
            }

            // How many weekdays are after the last day of the month?
            // (remember: weeks are zero-based)
            const lastDay = moment(month[month.length - 1].date).day();

            // If blank tiles are needed for the last week
            if (lastDay < SATURDAY) {
                // Pad with blank tiles so that the first day is lined up in the correct column
                month = this.padBlankTiles(month, this.WEEK_LENGTH - (lastDay + 1), 'right');
            }

            // Organize into weeks and add to the calendar array
            calendar.push(this.chunk(month));

        }


        return calendar;

    }


    /**
     * Build an array of days
     *
     * @param {Integer} limit - how many days to create
     * @param {String} start - the starting date
     * @return {Array} days
     */
    buildDays(limit, start = new Date()) {
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

            // Increment the counter
            counter = counter + 1;
        }

        return days;
    }


}

