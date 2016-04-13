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
        this.today = moment(new Date()).startOf('day');

        // Define the start date for the calendar
        this.startDate = this.bcStartDate || this.bcCalendarConfig.startDate;

        // If the end date was defined
        if (this.bcEndDate) {

            // Define how many days are needed using the end date
            this.days = this.bcCalendarService.durationInDays(this.startDate, this.bcEndDate);

        } else {

            // Define how many days are needed from the count passed in or the config
            this.days = parseInt(this.bcDays || this.bcCalendarConfig.days, 10);

        }

        // Define how deep to organize the calendar
        this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;

        // Define the weekday headers format
        this.weekdays = this.bcWeekTitleFormat ?
            this.bcCalendarConfig.weekdayStyle[this.bcWeekTitleFormat] :
            this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.weekTitleFormat];

        // Initially no date is selected
        this.selectedDate = null;

        // Build array of days
        const days = this._buildDays(this.days, this.startDate);

        // Build the calendar JSON and expose to the DOM
        this._buildCalendar(days, this.nestingDepth);

    }




    /**
     * Build the calendar JSON
     *
     * @param {Array} days
     * @param {String} depth
     * @return {Element} element
     */
    _buildCalendar(days, depth) {

        // Call the correct organization method based on the nesting depth
        if (depth === 'month') {

            this.bcCollection = this.bcCalendarService.organizeMonths(days);

        } else if (depth === 'week') {

            this.bcCollection = this.bcCalendarService.organizeWeeks(days);

        } else if (depth === 'day') {

            this.bcCollection = days;

        }

    }


    /**
     * Check to see if the day is prior to the current date
     * This is used to disable the unselectable days
     *
     * @param {Date} date
     * @return {Bool}
     */
    isBeforeToday(date) {
        return this.bcCalendarService.dateIsBeforeToday(date);
    }


    /**
     * Check to see if the day matches the current date
     *
     * @param {Date} date
     * @return {Bool}
     */
    isDayToday(date) {
        return this.bcCalendarService.isDayToday(date, this.startDate);
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


    /**
     * Build an array of days
     *
     * @param {Integer} limit - how many days to create
     * @param {Date} start - the starting date
     * @return {Array} days
     */
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

            // Increment the counter
            counter = counter + 1;
        }

        return days;
    }






}

