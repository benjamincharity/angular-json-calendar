export class bcCalendarService {

    constructor(
    ) {
        'ngInject';

    }




    /**
     * Test if days match
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Bool} match
     */
    /*
     *    daysMatch(date1, date2) {
     *
     *        let match = false;
     *        const day1 = moment(date1).date();
     *        const day2 = moment(date2).date();
     *
     *        if (day1 === day2) {
     *            match = true;
     *        }
     *
     *        return match;
     *
     *    }
     */


    /**
     * Test if months match
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Bool} match
     */
    doMonthsMatch(date1, date2) {
        let match = false;
        const month1 = moment(date1).month();
        const month2 = moment(date2).month();

        if (month1 === month2) {
            match = true;
        }

        return match;

    }


    /**
     * Test if day is today
     *
     * @param {Date} date - The date to check
     * @param {Date} today - The day to check against
     * @return {Bool} isToday
     */
    /*
     *    isToday(date, today) {
     *
     *        today = moment(today).startOf('day');
     *
     *        const dayToTest = moment(date).startOf('day');
     *        const isToday = today.diff(dayToTest) ? false : true;
     *
     *        return isToday;
     *
     *    }
     */


    /**
     * Update the date with the current time
     *
     * @param {Date} date
     * @return {Date} updatedDate
     */
    /*
     *    updateTime(date) {
     *
     *        let updatedDate;
     *
     *        // Get the current date
     *        const jsDate = new Date().toISOString();
     *        const currentHour = moment(jsDate).hour();
     *        const currentMinutes = moment(jsDate).minutes();
     *
     *        // Zero out seconds and milliseconds
     *        updatedDate = moment(date).set({
     *            hour: currentHour,
     *            minutes: currentMinutes,
     *            second: 0,
     *            millisecond: 0,
     *        }).format();
     *
     *        return updatedDate;
     *
     *    }
     */










    /**
     * Return an array of days for the passed in month
     *
     * @param {Integer} month
     * @param {Integer} year
     * @return {Array} days
     */
    getDaysInMonth(month, year) {

        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(moment(date).hour(0).minute(0).second(0).format());
            date.setDate(date.getDate() + 1);
        }

        return days;

    }


    /**
     * Turn a count (e.g. '6') into an array: '[1,2,3,4,5,6]'
     *
     * @param {Integer} count
     * @return {Array} days
     */
    createDaysArray(count) {

        let i;
        const days = [];

        for (i = 0; i < count; i += 1) {
            days.push(i);
        }

        return days;

    }

}

