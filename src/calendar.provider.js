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
                'Satday',
            ],
        };

        // Set the default word type (M vs Mon vs Monday)
        this.weekTitleFormat = 'abbreviation';

        // Should the calendar's header be visible?
        this.showHeader = true;

        // Define the default template for a day
        this.dayTemplate = dayTemplate;

        // Allow the user to set a custom template
        this.setDayTemplate = (template) => {
            this.userDayTemplate = template;
        }

    }




    $get() {
        return this;
    }


}

