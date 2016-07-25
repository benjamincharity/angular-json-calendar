export class CalendarController {

    constructor(
        $templateCache,
        bcCalendarConfig, bcCalendarService
    ) {
        'ngInject';

        this.$templateCache = $templateCache;
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
        this.weekdays = this.bcDayTitleFormat ?
            this.bcCalendarConfig.weekdayStyle[this.bcDayTitleFormat] :
            this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.dayTitleFormat];

        // Define the format for the month title
        this.monthTitleFormat = this.bcMonthTitleFormat || this.bcCalendarConfig.monthTitleFormat;

        // Define if month titles should be visible
        this.showMonthTitles = typeof(this.bcShowMonthTitles) === 'boolean' ?
            this.bcShowMonthTitles : this.bcCalendarConfig.showMonthTitles;

        // Initially no date is selected
        this.selectedDate = null;

        // Set the visibility of the calendar weekdays headers
        this.showWeekdays = typeof(this.bcShowWeekdays) === 'boolean' ?
            this.bcShowWeekdays : this.bcCalendarConfig.showWeekdays;

        // Define the template for an individual day
        // If the user defined a template on the directive
        if (this.bcDayTemplate) {
            // Name the template location
            const templateLocation = 'userDayTemplate.html';

            // Put the user template into the cache
            this.$templateCache.put(templateLocation, this.bcDayTemplate);

            // Expose the location to the directive
            this.dayTemplate = templateLocation;

        } else if (this.bcCalendarConfig.userDayTemplate) {
            // If the user defined a template in the provider

            // Name the template location
            const templateLocation = 'userDayTemplate.html';

            // Put the user template into the cache
            this.$templateCache.put(templateLocation, this.bcCalendarConfig.userDayTemplate);

            // Expose the location to the directive
            this.dayTemplate = templateLocation;

        } else {
            // no template from the user

            // Expose the default template location to the directive
            this.dayTemplate = this.bcCalendarConfig.dayTemplate;

        }

        // Define the date format for the individual day
        this.dateFormat = this.bcDateFormat || this.bcCalendarConfig.dateFormat;

        // Build array of days
        const days = this.bcCalendarService.buildDays(this.days, this.startDate);

        // Build the calendar JSON and expose to the DOM
        this._buildCalendar(days, this.nestingDepth);

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
     * Format a date using moment
     *
     * @param {String} date
     * @param {String} format
     * @return {String} formattedDate
     */
    formatDate(date, format) {
        if (!date) {
            return false;
        }

        return moment(date).format(format);
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


}

