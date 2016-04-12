export class bcCalendarService {

    constructor(
    ) {
        'ngInject';

    }






    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     *
     * @param {Date} day
     * @return {Bool}
     */
    dateIsBeforeToday(date) {
        return moment(date).isBefore(this.startDate);
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
     * Pad a collection with blank tiles at the beginning
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



}

