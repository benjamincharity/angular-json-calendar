export class bcCalendarConfig {

    // Define defaults
    constructor() {

        // The calendar will begin with today
        this.startDate = moment(new Date().toISOString()).startOf('day');

        // The default interval type [days|weeks|months]
        this.interval = 'days';

        // How many of the interval type should be generated
        this.count = 30;

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
        this.wordType = 'abbreviation';


    }




    $get() {
        return this;
    }


}

