function calendar(
    DatetimeService
) {

    // TODO: implement controller to get rid of scope
    return {
        restrict: 'E',
        templateUrl: 'app/components/calendar/calendar.html',
        replace: true,
        scope: {
            baseDate: '@',
            chosenDate: '=',
        },
        link: function($scope) {

            // Expose functions to scope
            $scope.isBeforeToday = isBeforeToday;
            $scope.isSelectedDay = isSelectedDay;
            $scope.isToday = isToday;
            $scope.selectDate = selectDate;

            // Containing object for all date based items
            const dates = {};


            // Zero out the time for today's date
            dates.today = moment($scope.baseDate).set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
            }).toISOString();

            // Get the current day of the month
            dates.todayDayOfMonth = moment(dates.today).date();

            // Get the current weekday
            dates.todayDayOfWeek = moment(dates.today).day();

            // Get a day in the next month
            dates.dayNextMonth = moment(dates.today).set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
            }).add(1, 'months').toISOString();

            // Full list of days for the first month
            dates.month1Days = getDaysInMonth(
                                   moment(dates.today).month(),
                                   moment(dates.today).year()
                               );

            // Full list of days for the second month
            dates.month2Days = getDaysInMonth(
                                   moment(dates.dayNextMonth).month(),
                                   moment(dates.dayNextMonth).year()
                               );

            // Drop all uneeded days from the first month
            dates.month1Days = _.drop(dates.month1Days, (dates.todayDayOfMonth - 1));

            // Find the days missing from the current week (backfill past days)
            dates.daysMissingFromThisWeek = createDaysArray(dates.todayDayOfWeek);


            //
            // Loop through days in current week prior to today to create a
            // full first week
            _.forEach(dates.daysMissingFromThisWeek, function(dayNumber) {
                const daysToSubtract = dayNumber + 1;
                const previousDay =
                    moment(dates.today).subtract((daysToSubtract), 'days').toISOString();

                dates.month1Days.unshift(previousDay);
            });

            // Combine the first and second months
            dates.allDays = _.union(dates.month1Days, dates.month2Days);

            // Trim all days down to 30
            dates.allDays = dates.allDays.slice(0, 31);

            // Split the days into arrays of weeks
            const weeks = _.chunk(dates.allDays, 7);

            // Drop the last week
            const trimmedWeeks = _.dropRight(weeks);

            // Expose an array of weeks to scope
            $scope.weeks = trimmedWeeks;

            // Stub in array of weekdays for the view
            $scope.days = [0, 1, 2, 3, 4, 5, 6];


            /**
             * Check to see if the day is prior to the current date
             *
             * @param {Date} day
             * @return {Bool} true/false
             */
            function isBeforeToday(day) {

                const passedDay = moment(day).date();
                const monthsMatch = DatetimeService.monthsMatch($scope.baseDate, day);
                const todayDay = moment($scope.baseDate).date();

                // If both days are in the same month and the passed day comes earlier
                // than today
                return (monthsMatch && (passedDay < todayDay));

            }



            /**
             * Check the day against the selected day
             *
             * @param {Date} day
             * @return {Bool} true/false
             */
            function isSelectedDay(day) {

                const daysMatch = DatetimeService.daysMatch($scope.chosenDate, day);
                const monthsMatch = DatetimeService.monthsMatch($scope.chosenDate, day);

                return (monthsMatch && daysMatch);

            }


            /**
             * Check to see if the day matches the current date
             *
             * @param {Date} day
             * @return {Bool} true/false
             */
            function isToday(day) {

                const daysMatch = DatetimeService.daysMatch($scope.baseDate, day);
                const monthsMatch = DatetimeService.monthsMatch($scope.baseDate, day);

                return (monthsMatch && daysMatch);

            }


            /**
             * Set the date chosen by the user
             *
             * @param {Date} day
             */
            function selectDate(day) {

                const updatedTime = DatetimeService.updateTime(day);
                const newBaseDate = DatetimeService.baseDate(updatedTime);
                const isToday = DatetimeService.isToday(updatedTime, $scope.baseDate);

                // If it's not today, preselect noon
                if (!isToday) {

                    $scope.chosenDate = moment(newBaseDate).hour('12').startOf('hour').format();

                } else {

                    // Otherwise auto select the first available time
                    $scope.chosenDate = $scope.baseDate;

                }

            }


            /**
             * Return an array of days for the passed in month
             *
             * @param {Integer} month
             * @param {Integer} year
             * @return {Array} days
             */
            function getDaysInMonth(month, year) {

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
            function createDaysArray(count) {

                let i;
                const days = [];

                for (i = 0; i < count; i += 1) {
                    days.push(i);
                }

                return days;

            }

        },
    };

}


export default calendar;

