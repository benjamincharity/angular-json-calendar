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

        // DEFAULTS
        this.startDate = this.startDate || this.bcCalendarConfig.startDate;

        // Define how many days are needed
        // TODO: this should be a fallback for when endDate isn't defined
        this.days = parseInt(this.bcDays || this.bcCalendarConfig.days, 10);

        // Define how deep to organize days
        this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;

        // Define the weekday headers format
        this.weekdays = this.bcWeekTitleFormat ?
            this.bcCalendarConfig.weekdayStyle[this.bcWeekTitleFormat] :
            this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.weekTitleFormat];

        // Define the calendar duration (length)
        this.calendarDuration =
            moment.duration(this.days, this.bcCalendarConfig.interval);

        // Get the full count of days
        this.calendarDays = this.calendarDuration.asDays();

        console.log('calendarDays: ', this.calendarDays);

        // Get the current day of the month eg 23
        this.todayDayOfMonth = moment(this.startDate).date();

        // Get the current weekday eg 2
        this.todayDayOfWeek = moment(this.startDate).day();

        // Initially no date is selected
        this.selectedDate = null;

        const JS_DATE = {
            year: 2016,
            month: 3,
            day: 11,
        };

        const days = this._buildDays(this.days, this.startDate);

        console.log('days: ', days);

        // Call the correct organization method based on the nesting depth
        if (this.nestingDepth === 'month') {

            this.bcCollection = this.bcCalendarService.organizeMonths(days);

        } else if (this.nestingDepth === 'week') {

            this.bcCollection = this.bcCalendarService.organizeWeeks(days);

        } else if (this.nestingDepth === 'day') {

            this.bcCollection = days;

        }

        console.log('this.bcCollection: ', this.bcCollection)


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






}

