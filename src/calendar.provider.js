export class bcCalendarConfig {

    // Define defaults
    constructor() {

        // The calendar will begin with today
        this.startDate = new Date().toISOString();

        // The default interval type [days|weeks|months]
        this.interval = 'days';

        // How many of the interval type should be generated
        this.count = 30;

        // Define the different possible representations of the weekday
        this.weekdays = {
            letters: [
                'S',
                'M',
                'T',
                'W',
                'T',
                'F',
                'S',
            ],
            abbreviations: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thur',
                'Fri',
                'Sat',
            ],
            words: [
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
        this.dayWordType = 'abbreviations';

    }




    $get() {
        return this;
    }


}

