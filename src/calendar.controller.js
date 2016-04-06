export class CalendarController {

    constructor(
        bcCalendarConfig
    ) {
        'ngInject';

        this.bcCalendarConfig = bcCalendarConfig;

        console.log('config: ', bcCalendarConfig);

        this._activate();

    }




    _activate() {
        this.startDate = this.startDate || this.bcCalendarConfig.startDate;

        console.log('startDate: ', this.startDate);

    }

}

