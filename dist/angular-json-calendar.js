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
	
	var _calendar2 = __webpack_require__(3);
	
	var _calendar3 = __webpack_require__(4);
	
	var _year = __webpack_require__(11);
	
	var _month = __webpack_require__(12);
	
	var _week = __webpack_require__(13);
	
	var _day = __webpack_require__(14);
	
	exports.default = angular.module('bc.JsonCalendar', []).provider('bcCalendarConfig', _calendar.bcCalendarConfig).service('bcCalendarService', _calendar2.bcCalendarService).directive('bcCalendar', _calendar3.bcCalendarDirective).directive('bcYear', _year.bcYearDirective).directive('bcMonth', _month.bcMonthDirective).directive('bcWeek', _week.bcWeekDirective).directive('bcDay', _day.bcDayDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcCalendarConfig = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dayInner = __webpack_require__(2);
	
	var _dayInner2 = _interopRequireDefault(_dayInner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bcCalendarConfig = exports.bcCalendarConfig = function () {
	
	    // Define defaults
	    function bcCalendarConfig() {
	        'ngInject';
	
	        // The calendar will begin with today
	
	        var _this = this;
	
	        _classCallCheck(this, bcCalendarConfig);
	
	        this.startDate = moment(new Date()).startOf('day').format();
	
	        // The default interval type [day|week|month]
	        this.nestingDepth = 'month';
	
	        // How many days should be generated
	        this.days = 30;
	
	        // Define the different possible representations of the weekday
	        this.weekdayStyle = {
	            letter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	            abbreviation: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
	            word: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	        };
	
	        // Set the default word type (M vs Mon vs Monday)
	        this.dayTitleFormat = 'abbreviation';
	
	        // Should the calendar show the weekday names above each column?
	        this.showWeekdays = true;
	
	        // Define the default template for a day
	        this.dayTemplate = _dayInner2.default;
	
	        // Allow the user to set a custom template
	        this.setDayTemplate = function (template) {
	            _this.userDayTemplate = template;
	        };
	
	        // Define the default format for a day
	        this.dateFormat = 'D';
	
	        // Define the default format for a month title
	        this.monthTitleFormat = 'MMMM';
	
	        // Should month titles be shown by default?
	        this.showMonthTitles = true;
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

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.inner.html';
	var html = "<time datetime=\"{{ day.date | date:'yyyy-MM-dd' }}\" class=bc-calendar__day-time title=\"{{ day.date }}\" data-ng-if=day.date> <span data-ng-bind=\"vm.formatDate(day.date, vm.dateFormat)\"></span> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 3 */
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
	
	        this.WEEK_LENGTH = 7;
	    }
	
	    /**
	     * Check to see if the day is prior to the current date
	     * This is used to disable the unselectable days
	     *
	     * @param {String} date
	     * @return {Bool} isBefore
	     */
	
	
	    _createClass(bcCalendarService, [{
	        key: 'dateIsBeforeToday',
	        value: function dateIsBeforeToday(date) {
	            var today = moment(new Date()).startOf('day').format();
	
	            return moment(date).isBefore(today);
	        }
	
	        /**
	         * Check to see if the day matches the current date
	         *
	         * @param {String} date
	         * @param {String} date2
	         * @return {Bool} isToday
	         */
	
	    }, {
	        key: 'isDayToday',
	        value: function isDayToday(date) {
	            var date2 = arguments.length <= 1 || arguments[1] === undefined ? moment(new Date()).format() : arguments[1];
	
	            return moment(date).isSame(date2);
	        }
	
	        /**
	         * Turn a integer (e.g. '6') into an array: '[1,2,3,4,5,6]'
	         *
	         * @param {Integer} count
	         * @return {Array} days
	         */
	
	    }, {
	        key: 'integerToArray',
	        value: function integerToArray(count) {
	            var i = void 0;
	            var days = [];
	
	            for (i = 0; i < count; i += 1) {
	                days.push(i);
	            }
	
	            return days;
	        }
	
	        /**
	         * Pad the beginning of a week
	         *
	         * @param {String} startDate - date to to work back from
	         * @param {Array} count - how many days to pad
	         * @return {Array} pad
	         */
	
	    }, {
	        key: 'padDaysLeft',
	        value: function padDaysLeft(startDate, count) {
	            var pad = [];
	            var missingDays = this.integerToArray(count);
	
	            // Loop through missing days
	            for (var day in missingDays) {
	                // How many days to go back
	                var subtraction = parseInt(day, 10) + 1;
	
	                // Find that day
	                var previous = moment(startDate).subtract(subtraction, 'days').toISOString();
	
	                // Add to the beginning of the array
	                pad.unshift({
	                    date: previous
	                });
	            }
	
	            return pad;
	        }
	
	        /**
	         * Pad a collection with blank tiles
	         *
	         * @param {Array} collection
	         * @param {Integer} count
	         * @return {Array} paddedCollection
	         */
	
	    }, {
	        key: 'padBlankTiles',
	        value: function padBlankTiles(collection, count) {
	            var direction = arguments.length <= 2 || arguments[2] === undefined ? 'left' : arguments[2];
	
	            var i = void 0;
	            var days = [];
	
	            // Create array
	            for (i = 0; i < count; i += 1) {
	                days.push({
	                    date: null
	                });
	            }
	
	            // If direction is 'right'
	            if (direction === 'right') {
	                // pad the end
	                return collection.concat(days);
	            } else if (direction === 'left') {
	                // otherwise pad the beginning
	                return days.concat(collection);
	            }
	        }
	
	        /**
	         * Split an array into chunks and return an array of these chunks
	         *
	         * @param {Array} group
	         * @param {Integer} groupsize - Chunk size. Defaults to 7 (one week).
	         * @return {Array} chunks
	         */
	
	    }, {
	        key: 'chunk',
	        value: function chunk(group) {
	            var groupsize = arguments.length <= 1 || arguments[1] === undefined ? this.WEEK_LENGTH : arguments[1];
	
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
	         * Get the duration in days between two dates INCLUDING both dates
	         *
	         * @param {String} start
	         * @param {String} end
	         * @return {Integer} days
	         */
	
	    }, {
	        key: 'durationInDays',
	        value: function durationInDays(start, end) {
	            var newStart = moment(start).startOf('day');
	            // Add a day so the end date is included in the calculation
	            var newEnd = moment(end).startOf('day').add(1, 'days');
	
	            return newEnd.diff(newStart, 'days');
	        }
	
	        /**
	         * Organize a collection of days into sub collections of weeks
	         *
	         * @param {Array} days - array of days
	         * @return {Array} collection
	         */
	
	    }, {
	        key: 'organizeWeeks',
	        value: function organizeWeeks(days) {
	            // Determine the day of the week that the calendar starts and ends on
	            var firstDay = moment(days[0].date).day();
	            var lastDay = moment(days[days.length - 1].date).day();
	            var SATURDAY = 6;
	            var SUNDAY = 0;
	
	            // If the first day is after Sunday
	            if (firstDay > SUNDAY) {
	                // Pad with blank tiles so the first day is lined up in the correct weekday column
	                days = this.padBlankTiles(days, firstDay, 'left');
	            }
	
	            // If the last day is before Saturday
	            if (lastDay < SATURDAY) {
	                // Pad with blank tiles so that the last week's days are in the correct weekday column
	                days = this.padBlankTiles(days, this.WEEK_LENGTH - (lastDay + 1), 'right');
	            }
	
	            return this.chunk(days);
	        }
	
	        /**
	         * Organize by month
	         *
	         * @param {Array} allDays - An array of all days
	         * @return {Array} collection - days organized into weeks and months
	         */
	
	    }, {
	        key: 'organizeMonths',
	        value: function organizeMonths(allDays) {
	            var calendar = [];
	            var SATURDAY = 6;
	            var SUNDAY = 0;
	            var collection = allDays;
	            var month = void 0;
	            var dayOfMonth = moment(collection[0].date).date();
	            var daysInMonth = moment(collection[0].date).daysInMonth();
	
	            // Pad the beginning of the month with any missing days
	            // If the first day is not the first day of the month
	            if (moment(collection[0].date).date() > 0) {
	                // Pull this month's days from the collection
	                month = collection.slice(0, daysInMonth - (dayOfMonth - 1));
	
	                // Fill the missing days from the month
	                var pad = this.padDaysLeft(month[0].date, dayOfMonth - 1);
	
	                // Combine with the existing array
	                collection = pad.concat(collection);
	            }
	
	            // Split into months
	            // As long as there are days left in the collection
	            while (collection.length > 0) {
	
	                // Get the day of the month for the first date of the collection eg. '24'
	                dayOfMonth = moment(collection[0].date).date();
	
	                // Determine how many days there are this month (total)
	                daysInMonth = moment(collection[0].date).daysInMonth();
	
	                // Pull this month's days from the collection
	                month = collection.splice(0, daysInMonth - (dayOfMonth - 1));
	
	                // How many weekdays are prior to the first day of this month?
	                var firstDay = moment(month[0].date).day();
	
	                // If the first day is after Sunday
	                if (firstDay > SUNDAY) {
	                    // Pad with blank tiles so that the first day is lined up in the correct column
	                    month = this.padBlankTiles(month, firstDay, 'left');
	                }
	
	                // How many weekdays are after the last day of the month?
	                // (remember: weeks are zero-based)
	                var lastDay = moment(month[month.length - 1].date).day();
	
	                // If blank tiles are needed for the last week
	                if (lastDay < SATURDAY) {
	                    // Pad with blank tiles so that the first day is lined up in the correct column
	                    month = this.padBlankTiles(month, this.WEEK_LENGTH - (lastDay + 1), 'right');
	                }
	
	                // Organize into weeks and add to the calendar array
	                calendar.push(this.chunk(month));
	            }
	
	            return calendar;
	        }
	
	        /**
	         * Build an array of days
	         *
	         * @param {Integer} limit - how many days to create
	         * @param {String} start - the starting date
	         * @return {Array} days
	         */
	
	    }, {
	        key: 'buildDays',
	        value: function buildDays(limit) {
	            var start = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];
	
	            var counter = 0;
	            var days = [];
	            var day = void 0;
	
	            while (counter < limit) {
	                // Create the day
	                day = moment(start).add(counter, 'days').toISOString();
	
	                // Add to the array
	                days.push({
	                    date: day
	                });
	
	                // Increment the counter
	                counter = counter + 1;
	            }
	
	            return days;
	        }
	    }]);
	
	    return bcCalendarService;
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcCalendarDirective = bcCalendarDirective;
	
	var _calendar = __webpack_require__(5);
	
	var _calendar2 = __webpack_require__(6);
	
	var _calendar3 = _interopRequireDefault(_calendar2);
	
	var _year = __webpack_require__(7);
	
	var _year2 = _interopRequireDefault(_year);
	
	var _month = __webpack_require__(8);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _week = __webpack_require__(9);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _day = __webpack_require__(10);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcCalendarDirective() {
	    'ngInject';
	
	    // Define possible templates
	
	    var templates = {
	        year: _year2.default,
	        month: _month2.default,
	        week: _week2.default,
	        day: _day2.default
	    };
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcStartDate: '@?', // date - default to today
	            bcEndDate: '@?', // date - if not present, use create using bcDays
	            bcNestingDepth: '@?', // string [month|week|day] - defaults: month
	            bcDays: '@?', // integer - default to 30 (used to create bcEndDate)
	            bcDayTitleFormat: '@?', // string [word|abbreviation|letter] - default: abbreviation
	            bcMonthTitleFormat: '@?', // string - any valid Moment date format - default: MMMM
	            bcDateSelected: '&', // function will be called when a date is selected (tap/click)
	            bcShowWeekdays: '=?', // determine if the weekdays header should be created
	            bcShowMonthTitles: '=?', // determine if the month titles should be visible
	            bcDayTemplate: '@?', // overwrite the default 'day' template
	            bcDateFormat: '@?' },
	        link: linkFunction,
	        templateUrl: _calendar3.default,
	        controller: _calendar.CalendarController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	
	        // Set the correct template based on the desired nesting depth
	        vm.getTemplateUrl = function () {
	            return templates[vm.nestingDepth];
	        };
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CalendarController = exports.CalendarController = function () {
	    CalendarController.$inject = ["$templateCache", "bcCalendarConfig", "bcCalendarService"];
	    function CalendarController($templateCache, bcCalendarConfig, bcCalendarService) {
	        'ngInject';
	
	        _classCallCheck(this, CalendarController);
	
	        this.$templateCache = $templateCache;
	        this.bcCalendarConfig = bcCalendarConfig;
	        this.bcCalendarService = bcCalendarService;
	
	        this._activate();
	    }
	
	    _createClass(CalendarController, [{
	        key: '_activate',
	        value: function _activate() {
	            // Define today's date
	            this.today = moment(new Date()).startOf('day');
	
	            // Define the start date for the calendar
	            this.startDate = this.bcStartDate || this.bcCalendarConfig.startDate;
	
	            // If the end date was defined
	            if (this.bcEndDate) {
	
	                // Define how many days are needed using the end date
	                this.days = this.bcCalendarService.durationInDays(this.startDate, this.bcEndDate);
	            } else {
	
	                // Define how many days are needed from the count passed in or the config
	                this.days = parseInt(this.bcDays || this.bcCalendarConfig.days, 10);
	            }
	
	            // Define how deep to organize the calendar
	            this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;
	
	            // Define the weekday headers format
	            this.weekdays = this.bcDayTitleFormat ? this.bcCalendarConfig.weekdayStyle[this.bcDayTitleFormat] : this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.dayTitleFormat];
	
	            // Define the format for the month title
	            this.monthTitleFormat = this.bcMonthTitleFormat || this.bcCalendarConfig.monthTitleFormat;
	
	            // Define if month titles should be visible
	            this.showMonthTitles = typeof this.bcShowMonthTitles === 'boolean' ? this.bcShowMonthTitles : this.bcCalendarConfig.showMonthTitles;
	
	            // Initially no date is selected
	            this.selectedDate = null;
	
	            // Set the visibility of the calendar weekdays headers
	            this.showWeekdays = typeof this.bcShowWeekdays === 'boolean' ? this.bcShowWeekdays : this.bcCalendarConfig.showWeekdays;
	
	            // Define the template for an individual day
	            // If the user defined a template on the directive
	            if (this.bcDayTemplate) {
	                // Name the template location
	                var templateLocation = 'userDayTemplate.html';
	
	                // Put the user template into the cache
	                this.$templateCache.put(templateLocation, this.bcDayTemplate);
	
	                // Expose the location to the directive
	                this.dayTemplate = templateLocation;
	            } else if (this.bcCalendarConfig.userDayTemplate) {
	                // If the user defined a template in the provider
	
	                // Name the template location
	                var _templateLocation = 'userDayTemplate.html';
	
	                // Put the user template into the cache
	                this.$templateCache.put(_templateLocation, this.bcCalendarConfig.userDayTemplate);
	
	                // Expose the location to the directive
	                this.dayTemplate = _templateLocation;
	            } else {
	                // no template from the user
	
	                // Expose the default template location to the directive
	                this.dayTemplate = this.bcCalendarConfig.dayTemplate;
	            }
	
	            // Define the date format for the individual day
	            this.dateFormat = this.bcDateFormat || this.bcCalendarConfig.dateFormat;
	
	            // Build array of days
	            var days = this.bcCalendarService.buildDays(this.days, this.startDate);
	
	            // Build the calendar JSON and expose to the DOM
	            this._buildCalendar(days, this.nestingDepth);
	        }
	
	        /**
	         * Check to see if the day is prior to the current date
	         * This is used to disable the unselectable days
	         *
	         * @param {Date} date
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isBeforeToday',
	        value: function isBeforeToday(date) {
	            return this.bcCalendarService.dateIsBeforeToday(date);
	        }
	
	        /**
	         * Check to see if the day matches the current date
	         *
	         * @param {Date} date
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isDayToday',
	        value: function isDayToday(date) {
	            return this.bcCalendarService.isDayToday(date, this.startDate);
	        }
	
	        /**
	         * Select a date
	         *
	         * @param {Object} day
	         */
	
	    }, {
	        key: 'selectDate',
	        value: function selectDate(day) {
	            // Set the selected day
	            this.selectedDate = day;
	
	            // Only call the passed method if it exists and a valid date was chosen
	            if (day.date && this.bcDateSelected) {
	                this.bcDateSelected({
	                    date: day.date
	                });
	            }
	        }
	
	        /**
	         * Format a date using moment
	         *
	         * @param {String} date
	         * @param {String} format
	         * @return {String} formattedDate
	         */
	
	    }, {
	        key: 'formatDate',
	        value: function formatDate(date, format) {
	            if (!date) {
	                return false;
	            }
	
	            return moment(date).format(format);
	        }
	
	        /**
	         * Build the calendar JSON
	         *
	         * @param {Array} days
	         * @param {String} depth
	         * @return {Element} element
	         */
	
	    }, {
	        key: '_buildCalendar',
	        value: function _buildCalendar(days, depth) {
	
	            // Call the correct organization method based on the nesting depth
	            if (depth === 'month') {
	
	                this.bcCollection = this.bcCalendarService.organizeMonths(days);
	            } else if (depth === 'week') {
	
	                this.bcCollection = this.bcCalendarService.organizeWeeks(days);
	            } else if (depth === 'day') {
	
	                this.bcCollection = days;
	            }
	        }
	    }]);
	
	    return CalendarController;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/calendar.html';
	var html = "<section class=bc-calendar> <span class=bc-calendar__weekdays data-ng-if=\"vm.showWeekdays && vm.nestingDepth === 'week'\"> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-year bc-collection=vm.bcCollection data-ng-if=\"vm.nestingDepth === 'year'\"></bc-year> <bc-month bc-collection=vm.bcCollection data-ng-if=\"vm.nestingDepth === 'month'\"></bc-month> <bc-week bc-collection=vm.bcCollection data-ng-if=\"vm.nestingDepth === 'week'\"></bc-week> <bc-day bc-collection=vm.bcCollection data-ng-if=\"vm.nestingDepth === 'day'\"></bc-day> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/year.html';
	var html = "<div class=bc-calendar__year data-ng-repeat=\"year in vm.bcCollection track by $index\"> <bc-month bc-collection=year bc-weeks-header=vm.weekdaysHeader></bc-month> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/month.html';
	var html = "<time class=bc-calendar__month datetime=\"{{ month[0][month[0].length - 1].date | date:'yyyy-MM' }}\" data-ng-repeat=\"month in vm.bcCollection track by $index\"> <span class=bc-calendar__month-title data-ng-bind=\"vm.formatDate(month[0][month[0].length - 1].date, vm.monthTitleFormat)\" data-ng-if=vm.showMonthTitles></span> <span class=bc-calendar__weekdays data-ng-if=vm.showWeekdays> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-week bc-collection=month></bc-week> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/week.html';
	var html = "<time class=bc-calendar__week datetime=\"{{ week[week.length - 1].date | date:'yyyy-ww' }}\" data-ng-repeat=\"week in vm.bcCollection track by $index\"> <bc-day bc-collection=week></bc-day> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.html';
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': vm.isBeforeToday(day.date),\n                   'bc-calendar__day--today': vm.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--odd': $odd,\n                   'bc-calendar__day--pad': !day.date,\n                   'bc-calendar__day--valid': day.date,\n                   'bc-calendar__day--selected': day.date === vm.selectedDate.date }\" data-ng-click=vm.selectDate(day) data-ng-repeat=\"day in vm.bcCollection track by $index\" title=day.date> <ng-include src=vm.dayTemplate></ng-include> </span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcYearDirective = bcYearDirective;
	
	var _year = __webpack_require__(7);
	
	var _year2 = _interopRequireDefault(_year);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcYearDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _year2.default,
	        controller: function controller() {
	            console.log('in YEAR directive: ', this.bcCollection);
	        },
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcMonthDirective = bcMonthDirective;
	
	var _month = __webpack_require__(8);
	
	var _month2 = _interopRequireDefault(_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcMonthDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '=',
	            bcWeekdaysHeader: '='
	        },
	        templateUrl: _month2.default,
	        controller: function controller() {
	            console.log('in MONTH directive: ', this.bcCollection);
	        },
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcWeekDirective = bcWeekDirective;
	
	var _week = __webpack_require__(9);
	
	var _week2 = _interopRequireDefault(_week);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcWeekDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _week2.default,
	        controller: function controller() {
	            console.log('in WEEK directive: ', this.bcCollection);
	        },
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	bcDayDirective.$inject = ["bcCalendarConfig"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcDayDirective = bcDayDirective;
	
	var _day = __webpack_require__(10);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcDayDirective(bcCalendarConfig) {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _day2.default,
	        controller: function controller() {
	            console.log('in DAY directive: ', this.bcCollection);
	        },
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZTk3OWVjNjk2NjY1YTU3MGY1OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3llYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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bkIsUUFBUSxJQUFJLHNCQUFzQixLQUFLOztTQUUzQyxjQUFjOzs7S0FHbEIsT0FBTyIsImZpbGUiOiJhbmd1bGFyLWpzb24tY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZTk3OWVjNjk2NjY1YTU3MGY1OVxuICoqLyIsImltcG9ydCB7IGJjQ2FsZW5kYXJDb25maWcgfSBmcm9tICcuL2NhbGVuZGFyLnByb3ZpZGVyJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY1llYXJEaXJlY3RpdmUgfSBmcm9tICcuL3llYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjTW9udGhEaXJlY3RpdmUgfSBmcm9tICcuL21vbnRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY1dlZWtEaXJlY3RpdmUgfSBmcm9tICcuL3dlZWsuZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjRGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9kYXkuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2JjLkpzb25DYWxlbmRhcicsIFtdKVxuICAgIC5wcm92aWRlcignYmNDYWxlbmRhckNvbmZpZycsIGJjQ2FsZW5kYXJDb25maWcpXG4gICAgLnNlcnZpY2UoJ2JjQ2FsZW5kYXJTZXJ2aWNlJywgYmNDYWxlbmRhclNlcnZpY2UpXG4gICAgLmRpcmVjdGl2ZSgnYmNDYWxlbmRhcicsIGJjQ2FsZW5kYXJEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNZZWFyJywgYmNZZWFyRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjTW9udGgnLCBiY01vbnRoRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjV2VlaycsIGJjV2Vla0RpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY0RheScsIGJjRGF5RGlyZWN0aXZlKVxuO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbCc7XG5cbmV4cG9ydCBjbGFzcyBiY0NhbGVuZGFyQ29uZmlnIHtcblxuICAgIC8vIERlZmluZSBkZWZhdWx0c1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIC8vIFRoZSBjYWxlbmRhciB3aWxsIGJlZ2luIHdpdGggdG9kYXlcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgaW50ZXJ2YWwgdHlwZSBbZGF5fHdlZWt8bW9udGhdXG4gICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gJ21vbnRoJztcblxuICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5kYXlzID0gMzA7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaWZmZXJlbnQgcG9zc2libGUgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWVrZGF5XG4gICAgICAgIHRoaXMud2Vla2RheVN0eWxlID0ge1xuICAgICAgICAgICAgbGV0dGVyOiBbXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ1cnLFxuICAgICAgICAgICAgICAgICdUJyxcbiAgICAgICAgICAgICAgICAnRicsXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogW1xuICAgICAgICAgICAgICAgICdTdW4nLFxuICAgICAgICAgICAgICAgICdNb24nLFxuICAgICAgICAgICAgICAgICdUdWUnLFxuICAgICAgICAgICAgICAgICdXZWQnLFxuICAgICAgICAgICAgICAgICdUaHVyJyxcbiAgICAgICAgICAgICAgICAnRnJpJyxcbiAgICAgICAgICAgICAgICAnU2F0JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3b3JkOiBbXG4gICAgICAgICAgICAgICAgJ1N1bmRheScsXG4gICAgICAgICAgICAgICAgJ01vbmRheScsXG4gICAgICAgICAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAgICAgICAgICdXZWRuZXNkYXknLFxuICAgICAgICAgICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICAgICAgICAgJ1NhdHVyZGF5JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBkZWZhdWx0IHdvcmQgdHlwZSAoTSB2cyBNb24gdnMgTW9uZGF5KVxuICAgICAgICB0aGlzLmRheVRpdGxlRm9ybWF0ID0gJ2FiYnJldmlhdGlvbic7XG5cbiAgICAgICAgLy8gU2hvdWxkIHRoZSBjYWxlbmRhciBzaG93IHRoZSB3ZWVrZGF5IG5hbWVzIGFib3ZlIGVhY2ggY29sdW1uP1xuICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHRydWU7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGZvciBhIGRheVxuICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gZGF5VGVtcGxhdGU7XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2V0IGEgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIHRoaXMuc2V0RGF5VGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckRheVRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgZm9ybWF0IGZvciBhIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnRCc7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBtb250aCB0aXRsZVxuICAgICAgICB0aGlzLm1vbnRoVGl0bGVGb3JtYXQgPSAnTU1NTSdcblxuICAgICAgICAvLyBTaG91bGQgbW9udGggdGl0bGVzIGJlIHNob3duIGJ5IGRlZmF1bHQ/XG4gICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHJ1ZTtcblxuICAgIH1cblxuXG5cblxuICAgICRnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGRhdGV0aW1lPVxcXCJ7eyBkYXkuZGF0ZSB8IGRhdGU6J3l5eXktTU0tZGQnIH19XFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpbWUgdGl0bGU9XFxcInt7IGRheS5kYXRlIH19XFxcIiBkYXRhLW5nLWlmPWRheS5kYXRlPiA8c3BhbiBkYXRhLW5nLWJpbmQ9XFxcInZtLmZvcm1hdERhdGUoZGF5LmRhdGUsIHZtLmRhdGVGb3JtYXQpXFxcIj48L3NwYW4+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJleHBvcnQgY2xhc3MgYmNDYWxlbmRhclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy5XRUVLX0xFTkdUSCA9IDc7XG5cbiAgICB9XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9IGlzQmVmb3JlXG4gICAgICovXG4gICAgZGF0ZUlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKS5mb3JtYXQoKTtcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzQmVmb3JlKHRvZGF5KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZTJcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc1RvZGF5XG4gICAgICovXG4gICAgaXNEYXlUb2RheShkYXRlLCBkYXRlMiA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoKSkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzU2FtZShkYXRlMik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBUdXJuIGEgaW50ZWdlciAoZS5nLiAnNicpIGludG8gYW4gYXJyYXk6ICdbMSwyLDMsNCw1LDZdJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgaW50ZWdlclRvQXJyYXkoY291bnQpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgdGhlIGJlZ2lubmluZyBvZiBhIHdlZWtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydERhdGUgLSBkYXRlIHRvIHRvIHdvcmsgYmFjayBmcm9tXG4gICAgICogQHBhcmFtIHtBcnJheX0gY291bnQgLSBob3cgbWFueSBkYXlzIHRvIHBhZFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBwYWRcbiAgICAgKi9cbiAgICBwYWREYXlzTGVmdChzdGFydERhdGUsIGNvdW50KSB7XG4gICAgICAgIGNvbnN0IHBhZCA9IFtdO1xuICAgICAgICBjb25zdCBtaXNzaW5nRGF5cyA9IHRoaXMuaW50ZWdlclRvQXJyYXkoY291bnQpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBtaXNzaW5nIGRheXNcbiAgICAgICAgZm9yIChjb25zdCBkYXkgaW4gbWlzc2luZ0RheXMpIHtcbiAgICAgICAgICAgIC8vIEhvdyBtYW55IGRheXMgdG8gZ28gYmFja1xuICAgICAgICAgICAgY29uc3Qgc3VidHJhY3Rpb24gPSBwYXJzZUludChkYXksIDEwKSArIDE7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhhdCBkYXlcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gbW9tZW50KHN0YXJ0RGF0ZSkuc3VidHJhY3QoKHN1YnRyYWN0aW9uKSwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIHBhZC51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICBkYXRlOiBwcmV2aW91cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBhZCBhIGNvbGxlY3Rpb24gd2l0aCBibGFuayB0aWxlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkZGVkQ29sbGVjdGlvblxuICAgICAqL1xuICAgIHBhZEJsYW5rVGlsZXMoY29sbGVjdGlvbiwgY291bnQsIGRpcmVjdGlvbiA9ICdsZWZ0Jykge1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhcnJheVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBkaXJlY3Rpb24gaXMgJ3JpZ2h0J1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyBwYWQgdGhlIGVuZFxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29uY2F0KGRheXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgcGFkIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIHJldHVybiBkYXlzLmNvbmNhdChjb2xsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCBhbiBhcnJheSBpbnRvIGNodW5rcyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRoZXNlIGNodW5rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3JvdXBcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGdyb3Vwc2l6ZSAtIENodW5rIHNpemUuIERlZmF1bHRzIHRvIDcgKG9uZSB3ZWVrKS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY2h1bmtzXG4gICAgICovXG4gICAgY2h1bmsoZ3JvdXAsIGdyb3Vwc2l6ZSA9IHRoaXMuV0VFS19MRU5HVEgpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGNodW5rcyA9IGdyb3VwLmxlbmd0aCAvIHBhcnNlSW50KGdyb3Vwc2l6ZSwgMTApO1xuXG4gICAgICAgIHdoaWxlKGkgPCBjaHVua3MpIHtcbiAgICAgICAgICAgIHNldHNbaV0gPSBncm91cC5zcGxpY2UoMCwgZ3JvdXBzaXplKTtcbiAgICAgICAgICAgIGkgPSBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBpbiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzIElOQ0xVRElORyBib3RoIGRhdGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kXG4gICAgICogQHJldHVybiB7SW50ZWdlcn0gZGF5c1xuICAgICAqL1xuICAgIGR1cmF0aW9uSW5EYXlzKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgY29uc3QgbmV3U3RhcnQgPSBtb21lbnQoc3RhcnQpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICAvLyBBZGQgYSBkYXkgc28gdGhlIGVuZCBkYXRlIGlzIGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvblxuICAgICAgICBjb25zdCBuZXdFbmQgPSBtb21lbnQoZW5kKS5zdGFydE9mKCdkYXknKS5hZGQoMSwgJ2RheXMnKTtcblxuICAgICAgICByZXR1cm4gbmV3RW5kLmRpZmYobmV3U3RhcnQsICAnZGF5cycpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYSBjb2xsZWN0aW9uIG9mIGRheXMgaW50byBzdWIgY29sbGVjdGlvbnMgb2Ygd2Vla3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXMgLSBhcnJheSBvZiBkYXlzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBvcmdhbml6ZVdlZWtzKGRheXMpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkYXkgb2YgdGhlIHdlZWsgdGhhdCB0aGUgY2FsZW5kYXIgc3RhcnRzIGFuZCBlbmRzIG9uXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KGRheXNbMF0uZGF0ZSkuZGF5KCk7XG4gICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQoZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG5cbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IHdlZWtkYXkgY29sdW1uXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5wYWRCbGFua1RpbGVzKGRheXMsIGZpcnN0RGF5LCAnbGVmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZGF5IGlzIGJlZm9yZSBTYXR1cmRheVxuICAgICAgICBpZiAobGFzdERheSA8IFNBVFVSREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBsYXN0IHdlZWsncyBkYXlzIGFyZSBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rKGRheXMpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYnkgbW9udGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbERheXMgLSBBbiBhcnJheSBvZiBhbGwgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uIC0gZGF5cyBvcmdhbml6ZWQgaW50byB3ZWVrcyBhbmQgbW9udGhzXG4gICAgICovXG4gICAgb3JnYW5pemVNb250aHMoYWxsRGF5cykge1xuICAgICAgICBjb25zdCBjYWxlbmRhciA9IFtdO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gYWxsRGF5cztcbiAgICAgICAgbGV0IG1vbnRoO1xuICAgICAgICBsZXQgZGF5T2ZNb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRhdGUoKTtcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAvLyBQYWQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGggd2l0aCBhbnkgbWlzc2luZyBkYXlzXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgbm90IHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgICAgIGlmIChtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCkgPiAwKSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoaXMgbW9udGgncyBkYXlzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIG1vbnRoID0gY29sbGVjdGlvbi5zbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIG1pc3NpbmcgZGF5cyBmcm9tIHRoZSBtb250aFxuICAgICAgICAgICAgY29uc3QgcGFkID0gdGhpcy5wYWREYXlzTGVmdChtb250aFswXS5kYXRlLCAoZGF5T2ZNb250aCAtIDEpKTtcblxuICAgICAgICAgICAgLy8gQ29tYmluZSB3aXRoIHRoZSBleGlzdGluZyBhcnJheVxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHBhZC5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFNwbGl0IGludG8gbW9udGhzXG4gICAgICAgIC8vIEFzIGxvbmcgYXMgdGhlcmUgYXJlIGRheXMgbGVmdCBpbiB0aGUgY29sbGVjdGlvblxuICAgICAgICB3aGlsZSAoY29sbGVjdGlvbi5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgdGhlIGZpcnN0IGRhdGUgb2YgdGhlIGNvbGxlY3Rpb24gZWcuICcyNCdcbiAgICAgICAgICAgIGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBob3cgbWFueSBkYXlzIHRoZXJlIGFyZSB0aGlzIG1vbnRoICh0b3RhbClcbiAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc3BsaWNlKDAsIChkYXlzSW5Nb250aCAtIChkYXlPZk1vbnRoIC0gMSkpKTtcblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIHByaW9yIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhpcyBtb250aD9cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KG1vbnRoWzBdLmRhdGUpLmRheSgpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIGFmdGVyIFN1bmRheVxuICAgICAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IGNvbHVtblxuICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5wYWRCbGFua1RpbGVzKG1vbnRoLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIGFmdGVyIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGg/XG4gICAgICAgICAgICAvLyAocmVtZW1iZXI6IHdlZWtzIGFyZSB6ZXJvLWJhc2VkKVxuICAgICAgICAgICAgY29uc3QgbGFzdERheSA9IG1vbWVudChtb250aFttb250aC5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgYmxhbmsgdGlsZXMgYXJlIG5lZWRlZCBmb3IgdGhlIGxhc3Qgd2Vla1xuICAgICAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgdGhpcy5XRUVLX0xFTkdUSCAtIChsYXN0RGF5ICsgMSksICdyaWdodCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcmdhbml6ZSBpbnRvIHdlZWtzIGFuZCBhZGQgdG8gdGhlIGNhbGVuZGFyIGFycmF5XG4gICAgICAgICAgICBjYWxlbmRhci5wdXNoKHRoaXMuY2h1bmsobW9udGgpKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gY2FsZW5kYXI7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuIGFycmF5IG9mIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbGltaXQgLSBob3cgbWFueSBkYXlzIHRvIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydCAtIHRoZSBzdGFydGluZyBkYXRlXG4gICAgICogQHJldHVybiB7QXJyYXl9IGRheXNcbiAgICAgKi9cbiAgICBidWlsZERheXMobGltaXQsIHN0YXJ0ID0gbmV3IERhdGUoKSkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgbGV0IGRheTtcblxuICAgICAgICB3aGlsZSAoY291bnRlciA8IGxpbWl0KSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRheVxuICAgICAgICAgICAgZGF5ID0gbW9tZW50KHN0YXJ0KS5hZGQoY291bnRlciwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgeyBDYWxlbmRhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NhbGVuZGFyLmNvbnRyb2xsZXInO1xuaW1wb3J0IGNhbGVuZGFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCc7XG5pbXBvcnQgeWVhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3llYXIuaHRtbCc7XG5pbXBvcnQgbW9udGhUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9tb250aC5odG1sJztcbmltcG9ydCB3ZWVrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvd2Vlay5odG1sJztcbmltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY0NhbGVuZGFyRGlyZWN0aXZlKFxuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIERlZmluZSBwb3NzaWJsZSB0ZW1wbGF0ZXNcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgIHllYXI6IHllYXJUZW1wbGF0ZSxcbiAgICAgICAgbW9udGg6IG1vbnRoVGVtcGxhdGUsXG4gICAgICAgIHdlZWs6IHdlZWtUZW1wbGF0ZSxcbiAgICAgICAgZGF5OiBkYXlUZW1wbGF0ZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjU3RhcnREYXRlOiAnQD8nLCAgICAgICAvLyBkYXRlIC0gZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAgICAgYmNFbmREYXRlOiAnQD8nLCAgICAgICAgIC8vIGRhdGUgLSBpZiBub3QgcHJlc2VudCwgdXNlIGNyZWF0ZSB1c2luZyBiY0RheXNcbiAgICAgICAgICAgIGJjTmVzdGluZ0RlcHRoOiAnQD8nLCAgICAvLyBzdHJpbmcgW21vbnRofHdlZWt8ZGF5XSAtIGRlZmF1bHRzOiBtb250aFxuICAgICAgICAgICAgYmNEYXlzOiAnQD8nLCAgICAgICAgICAgIC8vIGludGVnZXIgLSBkZWZhdWx0IHRvIDMwICh1c2VkIHRvIGNyZWF0ZSBiY0VuZERhdGUpXG4gICAgICAgICAgICBiY0RheVRpdGxlRm9ybWF0OiAnQD8nLCAgLy8gc3RyaW5nIFt3b3JkfGFiYnJldmlhdGlvbnxsZXR0ZXJdIC0gZGVmYXVsdDogYWJicmV2aWF0aW9uXG4gICAgICAgICAgICBiY01vbnRoVGl0bGVGb3JtYXQ6ICdAPycsLy8gc3RyaW5nIC0gYW55IHZhbGlkIE1vbWVudCBkYXRlIGZvcm1hdCAtIGRlZmF1bHQ6IE1NTU1cbiAgICAgICAgICAgIGJjRGF0ZVNlbGVjdGVkOiAnJicsICAgICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZCAodGFwL2NsaWNrKVxuICAgICAgICAgICAgYmNTaG93V2Vla2RheXM6ICc9PycsICAgIC8vIGRldGVybWluZSBpZiB0aGUgd2Vla2RheXMgaGVhZGVyIHNob3VsZCBiZSBjcmVhdGVkXG4gICAgICAgICAgICBiY1Nob3dNb250aFRpdGxlczogJz0/JywgLy8gZGV0ZXJtaW5lIGlmIHRoZSBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIGJjRGF5VGVtcGxhdGU6ICdAPycsICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgJ2RheScgdGVtcGxhdGVcbiAgICAgICAgICAgIGJjRGF0ZUZvcm1hdDogJ0A/JywgICAgICAvLyBkZWZpbmUgYSBjdXN0b20gZGF0ZSBmb3JtYXQgZm9yIHRoZSBkYXlcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogbGlua0Z1bmN0aW9uLFxuICAgICAgICB0ZW1wbGF0ZVVybDogY2FsZW5kYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogQ2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua0Z1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgdm0pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGRlc2lyZWQgbmVzdGluZyBkZXB0aFxuICAgICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXNbdm0ubmVzdGluZ0RlcHRoXTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkdGVtcGxhdGVDYWNoZSxcbiAgICAgICAgYmNDYWxlbmRhckNvbmZpZywgYmNDYWxlbmRhclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZyA9IGJjQ2FsZW5kYXJDb25maWc7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UgPSBiY0NhbGVuZGFyU2VydmljZTtcblxuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKCk7XG5cbiAgICB9XG5cblxuXG5cbiAgICBfYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIERlZmluZSB0b2RheSdzIGRhdGVcbiAgICAgICAgdGhpcy50b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YXJ0IGRhdGUgZm9yIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuYmNTdGFydERhdGUgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnN0YXJ0RGF0ZTtcblxuICAgICAgICAvLyBJZiB0aGUgZW5kIGRhdGUgd2FzIGRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMuYmNFbmREYXRlKSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgdXNpbmcgdGhlIGVuZCBkYXRlXG4gICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmR1cmF0aW9uSW5EYXlzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmJjRW5kRGF0ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCBmcm9tIHRoZSBjb3VudCBwYXNzZWQgaW4gb3IgdGhlIGNvbmZpZ1xuICAgICAgICAgICAgdGhpcy5kYXlzID0gcGFyc2VJbnQodGhpcy5iY0RheXMgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheXMsIDEwKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGhvdyBkZWVwIHRvIG9yZ2FuaXplIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9IHRoaXMuYmNOZXN0aW5nRGVwdGggfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm5lc3RpbmdEZXB0aDtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHdlZWtkYXkgaGVhZGVycyBmb3JtYXRcbiAgICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuYmNEYXlUaXRsZUZvcm1hdCA/XG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNEYXlUaXRsZUZvcm1hdF0gOlxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGl0bGVGb3JtYXRdO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZm9ybWF0IGZvciB0aGUgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gdGhpcy5iY01vbnRoVGl0bGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm1vbnRoVGl0bGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gRGVmaW5lIGlmIG1vbnRoIHRpdGxlcyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHR5cGVvZih0aGlzLmJjU2hvd01vbnRoVGl0bGVzKSA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgICAgICAgIHRoaXMuYmNTaG93TW9udGhUaXRsZXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd01vbnRoVGl0bGVzO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSBubyBkYXRlIGlzIHNlbGVjdGVkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhbGVuZGFyIHdlZWtkYXlzIGhlYWRlcnNcbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0eXBlb2YodGhpcy5iY1Nob3dXZWVrZGF5cykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd1dlZWtkYXlzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dXZWVrZGF5cztcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHRlbXBsYXRlIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgb24gdGhlIGRpcmVjdGl2ZVxuICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAvLyBOYW1lIHRoZSB0ZW1wbGF0ZSBsb2NhdGlvblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0RheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGVtcGxhdGVMb2NhdGlvbjtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGRlZmluZWQgYSB0ZW1wbGF0ZSBpbiB0aGUgcHJvdmlkZXJcblxuICAgICAgICAgICAgLy8gTmFtZSB0aGUgdGVtcGxhdGUgbG9jYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlTG9jYXRpb24gPSAndXNlckRheVRlbXBsYXRlLmh0bWwnO1xuXG4gICAgICAgICAgICAvLyBQdXQgdGhlIHVzZXIgdGVtcGxhdGUgaW50byB0aGUgY2FjaGVcbiAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTG9jYXRpb24sIHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZUxvY2F0aW9uO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyB0ZW1wbGF0ZSBmcm9tIHRoZSB1c2VyXG5cbiAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRlbXBsYXRlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRhdGUgZm9ybWF0IGZvciB0aGUgaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5iY0RhdGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRhdGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gQnVpbGQgYXJyYXkgb2YgZGF5c1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5idWlsZERheXModGhpcy5kYXlzLCB0aGlzLnN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGNhbGVuZGFyIEpTT04gYW5kIGV4cG9zZSB0byB0aGUgRE9NXG4gICAgICAgIHRoaXMuX2J1aWxkQ2FsZW5kYXIoZGF5cywgdGhpcy5uZXN0aW5nRGVwdGgpO1xuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAqL1xuICAgIGlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kYXRlSXNCZWZvcmVUb2RheShkYXRlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgKi9cbiAgICBpc0RheVRvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuaXNEYXlUb2RheShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gICAgICovXG4gICAgc2VsZWN0RGF0ZShkYXkpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBkYXlcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXk7XG5cbiAgICAgICAgLy8gT25seSBjYWxsIHRoZSBwYXNzZWQgbWV0aG9kIGlmIGl0IGV4aXN0cyBhbmQgYSB2YWxpZCBkYXRlIHdhcyBjaG9zZW5cbiAgICAgICAgaWYgKGRheS5kYXRlICYmIHRoaXMuYmNEYXRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmNEYXRlU2VsZWN0ZWQoe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheS5kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBhIGRhdGUgdXNpbmcgbW9tZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZERhdGVcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCkge1xuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF5c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXB0aFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBfYnVpbGRDYWxlbmRhcihkYXlzLCBkZXB0aCkge1xuXG4gICAgICAgIC8vIENhbGwgdGhlIGNvcnJlY3Qgb3JnYW5pemF0aW9uIG1ldGhvZCBiYXNlZCBvbiB0aGUgbmVzdGluZyBkZXB0aFxuICAgICAgICBpZiAoZGVwdGggPT09ICdtb250aCcpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplTW9udGhzKGRheXMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICd3ZWVrJykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVXZWVrcyhkYXlzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnZGF5Jykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IGRheXM7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzZWN0aW9uIGNsYXNzPWJjLWNhbGVuZGFyPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vla2RheXMgZGF0YS1uZy1pZj1cXFwidm0uc2hvd1dlZWtkYXlzICYmIHZtLm5lc3RpbmdEZXB0aCA9PT0gJ3dlZWsnXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0ud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMteWVhciBiYy1jb2xsZWN0aW9uPXZtLmJjQ29sbGVjdGlvbiBkYXRhLW5nLWlmPVxcXCJ2bS5uZXN0aW5nRGVwdGggPT09ICd5ZWFyJ1xcXCI+PC9iYy15ZWFyPiA8YmMtbW9udGggYmMtY29sbGVjdGlvbj12bS5iY0NvbGxlY3Rpb24gZGF0YS1uZy1pZj1cXFwidm0ubmVzdGluZ0RlcHRoID09PSAnbW9udGgnXFxcIj48L2JjLW1vbnRoPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPXZtLmJjQ29sbGVjdGlvbiBkYXRhLW5nLWlmPVxcXCJ2bS5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCI+PC9iYy13ZWVrPiA8YmMtZGF5IGJjLWNvbGxlY3Rpb249dm0uYmNDb2xsZWN0aW9uIGRhdGEtbmctaWY9XFxcInZtLm5lc3RpbmdEZXB0aCA9PT0gJ2RheSdcXFwiPjwvYmMtZGF5PiA8L3NlY3Rpb24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9YmMtY2FsZW5kYXJfX3llYXIgZGF0YS1uZy1yZXBlYXQ9XFxcInllYXIgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxiYy1tb250aCBiYy1jb2xsZWN0aW9uPXllYXIgYmMtd2Vla3MtaGVhZGVyPXZtLndlZWtkYXlzSGVhZGVyPjwvYmMtbW9udGg+IDwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMveWVhci5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9tb250aC5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGggZGF0ZXRpbWU9XFxcInt7IG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LU1NJyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIm1vbnRoIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtdGl0bGUgZGF0YS1uZy1iaW5kPVxcXCJ2bS5mb3JtYXREYXRlKG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUsIHZtLm1vbnRoVGl0bGVGb3JtYXQpXFxcIiBkYXRhLW5nLWlmPXZtLnNob3dNb250aFRpdGxlcz48L3NwYW4+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrZGF5cyBkYXRhLW5nLWlmPXZtLnNob3dXZWVrZGF5cz4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0ud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPW1vbnRoPjwvYmMtd2Vlaz4gPC90aW1lPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvbW9udGguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fd2VlayBkYXRldGltZT1cXFwie3sgd2Vla1t3ZWVrLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LXd3JyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIndlZWsgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxiYy1kYXkgYmMtY29sbGVjdGlvbj13ZWVrPjwvYmMtZGF5PiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5IGRhdGEtbmctY2xhc3M9XFxcInsgJ2JjLWNhbGVuZGFyX19kYXktLWRpc2FibGVkJzogdm0uaXNCZWZvcmVUb2RheShkYXkuZGF0ZSksXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS10b2RheSc6IHZtLmlzRGF5VG9kYXkoZGF5LmRhdGUpLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tZXZlbic6ICRldmVuLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tb2RkJzogJG9kZCxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXBhZCc6ICFkYXkuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXZhbGlkJzogZGF5LmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1zZWxlY3RlZCc6IGRheS5kYXRlID09PSB2bS5zZWxlY3RlZERhdGUuZGF0ZSB9XFxcIiBkYXRhLW5nLWNsaWNrPXZtLnNlbGVjdERhdGUoZGF5KSBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiIHRpdGxlPWRheS5kYXRlPiA8bmctaW5jbHVkZSBzcmM9dm0uZGF5VGVtcGxhdGU+PC9uZy1pbmNsdWRlPiA8L3NwYW4+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCB5ZWFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMveWVhci5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjWWVhckRpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHllYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gWUVBUiBkaXJlY3RpdmU6ICcsIHRoaXMuYmNDb2xsZWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy95ZWFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNNb250aERpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgICAgICBiY1dlZWtkYXlzSGVhZGVyOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBtb250aFRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBNT05USCBkaXJlY3RpdmU6ICcsIHRoaXMuYmNDb2xsZWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb250aC5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1dlZWtEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogd2Vla1RlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBXRUVLIGRpcmVjdGl2ZTogJywgdGhpcy5iY0NvbGxlY3Rpb24pO1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd2Vlay5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgZGF5V3JhcHBlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjRGF5RGlyZWN0aXZlKFxuICAgIGJjQ2FsZW5kYXJDb25maWdcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBkYXlXcmFwcGVyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIERBWSBkaXJlY3RpdmU6ICcsIHRoaXMuYmNDb2xsZWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RheS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9