(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-json-calendar", [], factory);
	else if(typeof exports === 'object')
		exports["angular-json-calendar"] = factory();
	else
		root["angular-json-calendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _calendar = __webpack_require__(1);
	
	var _calendar2 = __webpack_require__(2);
	
	var _calendar3 = __webpack_require__(3);
	
	exports.default = angular.module('bc.JsonCalendar', []).provider('bcCalendarConfig', _calendar.bcCalendarConfig).service('bcCalendarService', _calendar2.bcCalendarService).directive('bcCalendar', _calendar3.bcCalendarDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bcCalendarConfig = exports.bcCalendarConfig = function () {
	
	    // Define defaults
	
	    function bcCalendarConfig() {
	        _classCallCheck(this, bcCalendarConfig);
	
	        // The calendar will begin with today
	        this.startDate = moment(new Date().toISOString()).startOf('day');
	
	        // The default interval type [days|weeks|months]
	        this.interval = 'months';
	
	        // How many of the interval type should be generated
	        this.count = 1;
	
	        // Define the different possible representations of the weekday
	        this.weekdayStyle = {
	            letter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	            abbreviation: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
	            word: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satday']
	        };
	
	        // Set the default word type (M vs Mon vs Monday)
	        this.wordType = 'abbreviation';
	
	        // Should days be organized by week?
	        this.organizeWeeks = true;
	    }
	
	    _createClass(bcCalendarConfig, [{
	        key: '$get',
	        value: function $get() {
	            return this;
	        }
	    }]);
	
	    return bcCalendarConfig;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bcCalendarService = exports.bcCalendarService = function () {
	  function bcCalendarService() {
	    'ngInject';
	
	    _classCallCheck(this, bcCalendarService);
	  }
	
	  /**
	   * Test if days match
	   *
	   * @param {Date} date1
	   * @param {Date} date2
	   * @return {Bool} match
	   */
	  /*
	   *    daysMatch(date1, date2) {
	   *
	   *        let match = false;
	   *        const day1 = moment(date1).date();
	   *        const day2 = moment(date2).date();
	   *
	   *        if (day1 === day2) {
	   *            match = true;
	   *        }
	   *
	   *        return match;
	   *
	   *    }
	   */
	
	  /**
	   * Test if months match
	   *
	   * @param {Date} date1
	   * @param {Date} date2
	   * @return {Bool} match
	   */
	
	
	  _createClass(bcCalendarService, [{
	    key: 'doMonthsMatch',
	    value: function doMonthsMatch(date1, date2) {
	      var match = false;
	      var month1 = moment(date1).month();
	      var month2 = moment(date2).month();
	
	      if (month1 === month2) {
	        match = true;
	      }
	
	      return match;
	    }
	
	    /**
	     * Test if day is today
	     *
	     * @param {Date} date - The date to check
	     * @param {Date} today - The day to check against
	     * @return {Bool} isToday
	     */
	    /*
	     *    isToday(date, today) {
	     *
	     *        today = moment(today).startOf('day');
	     *
	     *        const dayToTest = moment(date).startOf('day');
	     *        const isToday = today.diff(dayToTest) ? false : true;
	     *
	     *        return isToday;
	     *
	     *    }
	     */
	
	    /**
	     * Update the date with the current time
	     *
	     * @param {Date} date
	     * @return {Date} updatedDate
	     */
	    /*
	     *    updateTime(date) {
	     *
	     *        let updatedDate;
	     *
	     *        // Get the current date
	     *        const jsDate = new Date().toISOString();
	     *        const currentHour = moment(jsDate).hour();
	     *        const currentMinutes = moment(jsDate).minutes();
	     *
	     *        // Zero out seconds and milliseconds
	     *        updatedDate = moment(date).set({
	     *            hour: currentHour,
	     *            minutes: currentMinutes,
	     *            second: 0,
	     *            millisecond: 0,
	     *        }).format();
	     *
	     *        return updatedDate;
	     *
	     *    }
	     */
	
	    /**
	     * Return an array of days for the passed in month
	     *
	     * @param {Integer} month
	     * @param {Integer} year
	     * @return {Array} days
	     */
	
	  }, {
	    key: 'getDaysInMonth',
	    value: function getDaysInMonth(month, year) {
	
	      var date = new Date(year, month, 1);
	      var days = [];
	
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
	
	  }, {
	    key: 'createDaysArray',
	    value: function createDaysArray(count) {
	
	      var i = void 0;
	      var days = [];
	
	      for (i = 0; i < count; i += 1) {
	        days.push(i);
	      }
	
	      return days;
	    }
	  }]);
	
	  return bcCalendarService;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcCalendarDirective = bcCalendarDirective;
	
	var _calendar = __webpack_require__(4);
	
	var _calendar2 = __webpack_require__(5);
	
	var _calendar3 = _interopRequireDefault(_calendar2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcCalendarDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcStartDate: '@?', // date - default to today
	            bcInterval: '@?', // string days|weeks|months - defaults to month
	            bcCount: '@?', // integer - default to 1
	            bcWordType: '@?', // string - default to 'abbreviation'
	            bcOrganizeWeeks: '@?' },
	        // bool - default to true
	        templateUrl: _calendar3.default,
	        link: linkFunction,
	        controller: _calendar.CalendarController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {}
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CalendarController = exports.CalendarController = function () {
	    CalendarController.$inject = ["bcCalendarConfig", "bcCalendarService"];
	    function CalendarController(bcCalendarConfig, bcCalendarService) {
	        'ngInject';
	
	        _classCallCheck(this, CalendarController);
	
	        this.bcCalendarConfig = bcCalendarConfig;
	        this.bcCalendarService = bcCalendarService;
	
	        this._activate();
	    }
	
	    _createClass(CalendarController, [{
	        key: '_activate',
	        value: function _activate() {
	            // Define today's date
	            this.today = this.bcCalendarConfig.startDate;
	
	            // DEFAULTS
	            this.startDate = this.startDate || this.bcCalendarConfig.startDate;
	            this.count = parseInt(this.bcCount || this.bcCalendarConfig.count, 10);
	            this.interval = this.bcInterval || this.bcCalendarConfig.interval;
	            this.weekdays = this.bcWordType ? this.bcCalendarConfig.weekdayStyle[this.bcWordType] : this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.wordType];
	            this.organizeWeeks = this.bcOrganizeWeeks || this.bcCalendarConfig.organizeWeeks;
	
	            // Define the calendar duration (or length)
	            this.calendarDuration = moment.duration(this.count, this.bcCalendarConfig.interval);
	
	            // Get the full count of days
	            this.calendarDays = this.calendarDuration.asDays();
	
	            // Get the current day of the month
	            this.todayDayOfMonth = moment(this.startDate).date();
	
	            // Get the current weekday
	            this.todayDayOfWeek = moment(this.startDate).day();
	
	            // Initially nothing is selected
	            this.selectedDate = null;
	
	            var DEV_DATE = {
	                year: 2016,
	                month: 3,
	                day: 5
	            };
	
	            // loop through `interval` for `count` times
	            //
	            // always are building out days no matter the interval
	            // interval is merely to simplify math for the end user
	            //
	            // if ask for 2 days
	            //   collection is array with single item (month)
	            //   month is array with single item (week)
	            //   if weeks are turned ON
	            //     week is array with 7 items (days) (backfilled for missing days)
	            //   if weeks are turned OFF
	            //     week is array with 2 items (days)
	            //
	            // if ask for 2 weeks
	            //   collection is array with single item (month)
	            //   month is array with 2 items (weeks)
	            //   weeks are arrays with 7 items (days)
	            //   if weeks are turned ON
	            //     backfill for missing days
	            //
	            //
	            // assume 'month'
	            // buildMonth(start month)
	            //   build out month json
	            //     get all days
	            //     formatMonth
	            //       loop through putting weeks into arrays
	            //       final collection looks like:
	            //         - collection is array of months
	            //         - months is an array of weeks
	            //         - weeks is an array of days
	            //   store month somewhere
	            //   increment counter by 1
	            //   if still less than this.count
	            //     call buildMonth again with next month
	            //
	
	            this.calendar = this.build(this.startDate, 2);
	        }
	
	        /**
	         * Build calendar
	         * TODO: Should this be a service?
	         *
	         * @param {String} start
	         * @param {Integer} duration
	         * @return {Array} collection
	         */
	
	    }, {
	        key: 'build',
	        value: function build(start, duration) {
	            var collection = [];
	            var monthsBuilt = 0;
	
	            // Loop to create months
	            while (monthsBuilt < duration) {
	                // If not the first month generated, the start of the month should be at the beginning
	                // rather than the start date
	                if (monthsBuilt !== 0) {
	                    start = moment(start).startOf('month');
	                }
	
	                var days = this._getDaysInMonth(moment(start).add(monthsBuilt, 'months'));
	
	                // If this is the first month
	                if (monthsBuilt === 0) {
	                    // Create the missing days for the padding
	                    var missingDays = this._padWeekLeft(days, this.todayDayOfWeek);
	
	                    // Add to the beginning of our existing array
	                    days = missingDays.concat(days);
	                }
	
	                // Add month to collection
	                collection.push(days);
	
	                // Increment counter
	                monthsBuilt = monthsBuilt + 1;
	            }
	
	            if (this.organizeWeeks) {
	                collection = this._organizeWeeks(collection);
	            }
	
	            console.log('collection: ', collection);
	
	            return collection;
	        }
	
	        /**
	         * Check to see if the day is prior to the current date
	         * This is used to disable the unselectable days
	         *
	         * @param {Date} day
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isBeforeToday',
	        value: function isBeforeToday(date) {
	            return moment(date).isBefore(this.startDate);
	        }
	
	        /**
	         * Check to see if the day matches the current date
	         *
	         * @param {Date} day
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isDayToday',
	        value: function isDayToday(date) {
	            return moment(date).isSame(this.startDate);
	        }
	    }, {
	        key: 'isDaySelected',
	        value: function isDaySelected() {}
	    }, {
	        key: 'selectDate',
	        value: function selectDate() {}
	
	        /**
	         * Return an array of dates for the passed in month
	         *
	         * @param {Date} startDate
	         * @return {Array} days
	         */
	
	    }, {
	        key: '_getDaysInMonth',
	        value: function _getDaysInMonth(startDate) {
	            var firstDate = moment(startDate);
	            var days = [];
	            var date = moment(startDate);
	
	            // As long as the month hasn't changed
	            while (moment(date).isSame(firstDate, 'month')) {
	                // Add the new day to our array
	                days.push(moment(date).startOf('day').format());
	
	                // Increment the date by one day
	                date = moment(date).add(1, 'days');
	            }
	
	            return days;
	        }
	
	        /**
	         * Turn a integer (e.g. '6') into an array: '[1,2,3,4,5,6]'
	         *
	         * @param {Integer} count
	         * @return {Array} days
	         */
	
	    }, {
	        key: '_integerToArray',
	        value: function _integerToArray(count) {
	            var i = void 0;
	            var days = [];
	
	            for (i = 0; i < count; i += 1) {
	                days.push(i);
	            }
	
	            return days;
	        }
	
	        /**
	         * Organize collection of days into sub collections of weeks
	         *
	         * @param {Array} collection
	         * @return {Array} collection
	         */
	
	    }, {
	        key: '_organizeWeeks',
	        value: function _organizeWeeks(collection) {
	            var _this = this;
	
	            var weekLength = 7;
	
	            collection.forEach(function (value, index) {
	                collection[index] = _this._chunk(value, weekLength);
	            });
	
	            return collection;
	        }
	
	        /**
	         * Split an array into chunks and return an array of these chunks
	         *
	         * @param {Array} group
	         * @param {Integer} groupsize
	         * @return {Array} chunks
	         */
	
	    }, {
	        key: '_chunk',
	        value: function _chunk(group, groupsize) {
	            var sets = [];
	            var i = 0;
	            var chunks = group.length / parseInt(groupsize, 10);
	
	            while (i < chunks) {
	                sets[i] = group.splice(0, groupsize);
	                i = i + 1;
	            }
	
	            return sets;
	        }
	
	        /**
	         * Pad the beginning of a week
	         *
	         * @param {Array} days
	         * @return {Array} pad
	         */
	
	    }, {
	        key: '_padWeekLeft',
	        value: function _padWeekLeft(days, startDay) {
	            var pad = [];
	            var missingDays = this._integerToArray(startDay);
	
	            // Loop through missing days
	            for (var day in missingDays) {
	                // How many days to go back
	                var subtraction = parseInt(day, 10) + 1;
	
	                // Find that day
	                var previous = moment(this.startDate).subtract(subtraction, 'days').toISOString();
	                // Add to the beginning of the array
	                pad.unshift(previous);
	            }
	
	            return pad;
	        }
	    }]);
	
	    return CalendarController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/calendar.html';
	var html = "<section class=bc-calendar> <header class=bc-calendar__header> <span class=bc-calendar__day data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </header> <div class=bc-calendar__month data-ng-repeat=\"month in vm.calendar track by $index\"> <div class=bc-calendar__week data-ng-repeat=\"week in month track by $index\"> <span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': vm.isBeforeToday(day),\n                         'bc-calendar__day--today': vm.isDayToday(day) }\" data-ng-click=vm.selectDate(day) data-ng-repeat=\"day in week track by $index\"> <time class=bc-calendar__time data-ng-class=\"{ 'bc-calendar__time--selected': vm.isDaySelected(day) }\" datetime=\"{{ day | date:'MMMM Do, YYYY' }}\" title=\"{{ day }}\"> {{ day | date:'EEE dd' }} </time> </span> </div> </div> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-json-calendar.js.map