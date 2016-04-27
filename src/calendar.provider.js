import dayTemplate from './templates/day.inner.html';

export class bcCalendarConfig {

    // Define defaults
    constructor() {
        'ngInject';

        // The calendar will begin with today
        this.startDate = moment(new Date()).startOf('day').toISOString();

        // The default interval type [day|week|month]
        this.nestingDepth = 'month';

        // How many days should be generated
        this.days = 30;

        // Define the different possible representations of the weekday
        this.weekdayStyle = {
            letter: [
                'S',
                'M',
                'T',
                'W',
                'T',
                'F',
                'S',
            ],
            abbreviation: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thur',
                'Fri',
                'Sat',
            ],
            word: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
        };

        // Set the default word type (M vs Mon vs Monday)
        this.dayTitleFormat = 'abbreviation';

        // Should the calendar show the weekday names above each column?
        this.showWeekdays = true;

        // Define the default template for a day
        this.dayTemplate = dayTemplate;

        // Allow the user to set a custom template
        this.setDayTemplate = (template) => {
            this.userDayTemplate = template;
        }

        // Define the default format for a day
        this.dateFormat = 'D';

        // Define the default format for a month title
        this.monthTitleFormat = 'MMMM'

        // Should month titles be shown by default?
        this.showMonthTitles = true;

    }




    $get() {
        return this;
    }


}

