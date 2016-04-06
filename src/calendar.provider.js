export class bcCalendarConfig {

    // Define defaults
    constructor() {

        // The calendar will begin with today
        this.startDate = new Date().toISOString();

        // The default interval type [days|weeks|months]
        this.interval = 'months';

        // How many 'months' should be generated
        this.count = 1;

    }




    $get() {
        return this;
    }


}

