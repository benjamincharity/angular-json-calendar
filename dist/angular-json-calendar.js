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
	            bcWordType: '@?' },
	        // string - default to 'abbreviation'
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
	
	        console.log('config: ', bcCalendarConfig);
	
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
	
	            console.log('count: ', this.count);
	            console.log('interval: ', this.interval);
	
	            // Define the calendar duration (or length)
	            this.calendarDuration = moment.duration(this.count, this.bcCalendarConfig.interval);
	
	            // Get the full count of days
	            this.calendarDays = this.calendarDuration.asDays();
	            console.log('calendarDays: ', this.calendarDays);
	
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
	
	            /*
	             *this._getDaysInMonth(DEV_DATE.year, DEV_DATE.month);
	             *this.isDayToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day))
	             *this.isBeforeToday(new Date(DEV_DATE.year, DEV_DATE.month, DEV_DATE.day));
	             */
	
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
	
	            var fakeArray = [''];
	
	            this.build(this.startDate, this.interval);
	        }
	    }, {
	        key: 'build',
	        value: function build(start, duration) {
	            var startYear = moment(start).year();
	            var startMonth = moment(start).month();
	
	            console.warn('in build: ', startYear, startMonth);
	
	            var monthsBuilt = 0;
	
	            // loop to create months
	            while (monthsBuilt < duration) {
	                console.log('building another month', monthsBuilt);
	
	                var days = this._getDaysInMonth(startYear, startMonth + monthsBuilt);
	                console.log('days: ', days);
	
	                // increment counter
	                monthsBuilt = monthsBuilt + 1;
	            }
	        }
	
	        /*
	         *buildWeeks() {
	         *}
	         */
	
	        /*
	         *buildDays() {
	         *}
	         */
	
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
	    }, {
	        key: 'isDaySelected',
	        value: function isDaySelected() {}
	
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
	        key: 'selectDate',
	        value: function selectDate() {}
	
	        /**
	         * Return an array of dates for the passed in month
	         *
	         * @param {Integer} year
	         * @param {Integer} month
	         * @return {Array} days
	         */
	
	    }, {
	        key: '_getDaysInMonth',
	        value: function _getDaysInMonth(year, month) {
	            var date = new Date(year, month, 1);
	            var days = [];
	
	            while (date.getMonth() === month) {
	                days.push(moment(date).startOf('day').format());
	                date.setDate(date.getDate() + 1);
	            }
	
	            return days;
	        }
	
	        // TODO: move to service
	
	    }, {
	        key: '_padWeekLeft',
	        value: function _padWeekLeft(partialWeek) {
	            console.log('in _padWeekLeft: ', partialWeek);
	            var fullWeek = partialWeek;
	            var missingDays = this._integerToArray(this.todayDayOfWeek);
	
	            console.log('missingDays: ', missingDays);
	
	            // Loop through days in current week prior to the start date to create a full first week
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = missingDays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var day = _step.value;
	
	                    console.log('day in missingDays: ', day);
	                    var previous = moment(this.startDate).subtract(day + 1, 'days').toISOString();
	
	                    // push each to the front of the week
	                    partialWeek.unshift(previous);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            console.log('returing fullWeek: ', fullWeek);
	            return fullWeek;
	        }
	
	        // can this be part of padWeekLeft?
	
	    }, {
	        key: '_padWeekRight',
	        value: function _padWeekRight() {}
	
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
	    }]);
	
	    return CalendarController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/calendar.html';
	var html = "<section class=calendar> <header class=calendar__header> <span class=calendar__day data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=calendar__time> {{ day }} </strong> </span> </header> <div class=calendar__week data-ng-repeat=\"week in vm.weeks track by $index\"> <span class=calendar__day data-ng-class=\"{ 'calendar__day--disabled': vm.isBeforeToday(day),\n                       'calendar__day--today': vm.isDayToday(day) }\" data-ng-click=vm.selectDate(day) data-ng-repeat=\"day in week track by $index\"> <time class=calendar__time data-ng-class=\"{ 'calendar__time--selected': vm.isDaySelected(day) }\" datetime=\"{{ day | date:'MMMM Do, YYYY' }}\" title=\"{{ day }}\"> {{ day | date:'D' }} </time> </span> </div> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-json-calendar.js.map