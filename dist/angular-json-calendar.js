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
	        //replace: true,
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
	var html = "<time class=bc-calendar__week datetime=\"{{ week[week.length - 1].date | date:'yyyy-ww' }}\" data-ng-repeat=\"week in vm.bcCollection track by $index\" style=position:relative;min-height:50px;min-width:100px> <bc-day bc-collection=week></bc-day> <span style=position:absolute;left:0;top:0;color:green;font-weight:700>{{$index}}</span> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.html';
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': vm.isBeforeToday(day.date),\n                   'bc-calendar__day--today': vm.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--odd': $odd,\n                   'bc-calendar__day--pad': !day.date,\n                   'bc-calendar__day--valid': day.date,\n                   'bc-calendar__day--selected': day.date === vm.selectedDate.date }\" data-ng-click=vm.selectDate(day) data-ng-repeat=\"day in vm.bcCollection track by $index\" title=day.date> <ng-include src=vm.dayTemplate></ng-include> <span style=position:absolute;right:0;top:0;color:red>{{$index}}</span> </span>";
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
	        //replace: true,
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
	        //replace: true,
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
	        //replace: true,
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
	        //replace: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MjlkNzBkMTE0OWIxZmQ3NTAwMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3llYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Y0FBYzs7U0FFbEI7U0FDQSxZQUFZLHNCQUFXO2FBQ25CLFFBQVEsSUFBSSxzQkFBc0IsS0FBSzs7U0FFM0MsY0FBYzs7O0tBR2xCLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1qc29uLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjI5ZDcwZDExNDliMWZkNzUwMDBcbiAqKi8iLCJpbXBvcnQgeyBiY0NhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi9jYWxlbmRhci5wcm92aWRlcic7XG5pbXBvcnQgeyBiY0NhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBiY0NhbGVuZGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNZZWFyRGlyZWN0aXZlIH0gZnJvbSAnLi95ZWFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY01vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi9tb250aC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNXZWVrRGlyZWN0aXZlIH0gZnJvbSAnLi93ZWVrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY0RheURpcmVjdGl2ZSB9IGZyb20gJy4vZGF5LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdiYy5Kc29uQ2FsZW5kYXInLCBbXSlcbiAgICAucHJvdmlkZXIoJ2JjQ2FsZW5kYXJDb25maWcnLCBiY0NhbGVuZGFyQ29uZmlnKVxuICAgIC5zZXJ2aWNlKCdiY0NhbGVuZGFyU2VydmljZScsIGJjQ2FsZW5kYXJTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ2JjQ2FsZW5kYXInLCBiY0NhbGVuZGFyRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjWWVhcicsIGJjWWVhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY01vbnRoJywgYmNNb250aERpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY1dlZWsnLCBiY1dlZWtEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNEYXknLCBiY0RheURpcmVjdGl2ZSlcbjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xuXG5leHBvcnQgY2xhc3MgYmNDYWxlbmRhckNvbmZpZyB7XG5cbiAgICAvLyBEZWZpbmUgZGVmYXVsdHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAvLyBUaGUgY2FsZW5kYXIgd2lsbCBiZWdpbiB3aXRoIHRvZGF5XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHR5cGUgW2RheXx3ZWVrfG1vbnRoXVxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9ICdtb250aCc7XG5cbiAgICAgICAgLy8gSG93IG1hbnkgZGF5cyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgICAgIHRoaXMuZGF5cyA9IDMwO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgd2Vla2RheVxuICAgICAgICB0aGlzLndlZWtkYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGxldHRlcjogW1xuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAgICAgJ1QnLFxuICAgICAgICAgICAgICAgICdXJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ0YnLFxuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246IFtcbiAgICAgICAgICAgICAgICAnU3VuJyxcbiAgICAgICAgICAgICAgICAnTW9uJyxcbiAgICAgICAgICAgICAgICAnVHVlJyxcbiAgICAgICAgICAgICAgICAnV2VkJyxcbiAgICAgICAgICAgICAgICAnVGh1cicsXG4gICAgICAgICAgICAgICAgJ0ZyaScsXG4gICAgICAgICAgICAgICAgJ1NhdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd29yZDogW1xuICAgICAgICAgICAgICAgICdTdW5kYXknLFxuICAgICAgICAgICAgICAgICdNb25kYXknLFxuICAgICAgICAgICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAgICAgICAgICdGcmlkYXknLFxuICAgICAgICAgICAgICAgICdTYXR1cmRheScsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3b3JkIHR5cGUgKE0gdnMgTW9uIHZzIE1vbmRheSlcbiAgICAgICAgdGhpcy5kYXlUaXRsZUZvcm1hdCA9ICdhYmJyZXZpYXRpb24nO1xuXG4gICAgICAgIC8vIFNob3VsZCB0aGUgY2FsZW5kYXIgc2hvdyB0aGUgd2Vla2RheSBuYW1lcyBhYm92ZSBlYWNoIGNvbHVtbj9cbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IGRheVRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnNldERheVRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ0QnO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCBmb3JtYXQgZm9yIGEgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gJ01NTU0nXG5cbiAgICAgICAgLy8gU2hvdWxkIG1vbnRoIHRpdGxlcyBiZSBzaG93biBieSBkZWZhdWx0P1xuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHRydWU7XG5cbiAgICB9XG5cblxuXG5cbiAgICAkZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5wcm92aWRlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBkYXRldGltZT1cXFwie3sgZGF5LmRhdGUgfCBkYXRlOid5eXl5LU1NLWRkJyB9fVxcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aW1lIHRpdGxlPVxcXCJ7eyBkYXkuZGF0ZSB9fVxcXCIgZGF0YS1uZy1pZj1kYXkuZGF0ZT4gPHNwYW4gZGF0YS1uZy1iaW5kPVxcXCJ2bS5mb3JtYXREYXRlKGRheS5kYXRlLCB2bS5kYXRlRm9ybWF0KVxcXCI+PC9zcGFuPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0IGNsYXNzIGJjQ2FsZW5kYXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuV0VFS19MRU5HVEggPSA3O1xuXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc0JlZm9yZVxuICAgICAqL1xuICAgIGRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc0JlZm9yZSh0b2RheSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGUyXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNUb2RheVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSwgZGF0ZTIgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc1NhbWUoZGF0ZTIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVHVybiBhIGludGVnZXIgKGUuZy4gJzYnKSBpbnRvIGFuIGFycmF5OiAnWzEsMiwzLDQsNSw2XSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gZGF5c1xuICAgICAqL1xuICAgIGludGVnZXJUb0FycmF5KGNvdW50KSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFkIHRoZSBiZWdpbm5pbmcgb2YgYSB3ZWVrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnREYXRlIC0gZGF0ZSB0byB0byB3b3JrIGJhY2sgZnJvbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvdW50IC0gaG93IG1hbnkgZGF5cyB0byBwYWRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkXG4gICAgICovXG4gICAgcGFkRGF5c0xlZnQoc3RhcnREYXRlLCBjb3VudCkge1xuICAgICAgICBjb25zdCBwYWQgPSBbXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0RheXMgPSB0aGlzLmludGVnZXJUb0FycmF5KGNvdW50KTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggbWlzc2luZyBkYXlzXG4gICAgICAgIGZvciAoY29uc3QgZGF5IGluIG1pc3NpbmdEYXlzKSB7XG4gICAgICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHRvIGdvIGJhY2tcbiAgICAgICAgICAgIGNvbnN0IHN1YnRyYWN0aW9uID0gcGFyc2VJbnQoZGF5LCAxMCkgKyAxO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoYXQgZGF5XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KChzdWJ0cmFjdGlvbiksICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBwYWQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogcHJldmlvdXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgYSBjb2xsZWN0aW9uIHdpdGggYmxhbmsgdGlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IHBhZGRlZENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBwYWRCbGFua1RpbGVzKGNvbGxlY3Rpb24sIGNvdW50LCBkaXJlY3Rpb24gPSAnbGVmdCcpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICAvLyBDcmVhdGUgYXJyYXlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZGlyZWN0aW9uIGlzICdyaWdodCdcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gcGFkIHRoZSBlbmRcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChkYXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHBhZCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICByZXR1cm4gZGF5cy5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgYW4gYXJyYXkgaW50byBjaHVua3MgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aGVzZSBjaHVua3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBncm91cHNpemUgLSBDaHVuayBzaXplLiBEZWZhdWx0cyB0byA3IChvbmUgd2VlaykuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNodW5rc1xuICAgICAqL1xuICAgIGNodW5rKGdyb3VwLCBncm91cHNpemUgPSB0aGlzLldFRUtfTEVOR1RIKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBjaHVua3MgPSBncm91cC5sZW5ndGggLyBwYXJzZUludChncm91cHNpemUsIDEwKTtcblxuICAgICAgICB3aGlsZShpIDwgY2h1bmtzKSB7XG4gICAgICAgICAgICBzZXRzW2ldID0gZ3JvdXAuc3BsaWNlKDAsIGdyb3Vwc2l6ZSk7XG4gICAgICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIHR3byBkYXRlcyBJTkNMVURJTkcgYm90aCBkYXRlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZFxuICAgICAqIEByZXR1cm4ge0ludGVnZXJ9IGRheXNcbiAgICAgKi9cbiAgICBkdXJhdGlvbkluRGF5cyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gbW9tZW50KHN0YXJ0KS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgLy8gQWRkIGEgZGF5IHNvIHRoZSBlbmQgZGF0ZSBpcyBpbmNsdWRlZCBpbiB0aGUgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbmV3RW5kID0gbW9tZW50KGVuZCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VuZC5kaWZmKG5ld1N0YXJ0LCAgJ2RheXMnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGEgY29sbGVjdGlvbiBvZiBkYXlzIGludG8gc3ViIGNvbGxlY3Rpb25zIG9mIHdlZWtzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzIC0gYXJyYXkgb2YgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgb3JnYW5pemVXZWVrcyhkYXlzKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRoYXQgdGhlIGNhbGVuZGFyIHN0YXJ0cyBhbmQgZW5kcyBvblxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChkYXlzWzBdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBsYXN0RGF5ID0gbW9tZW50KGRheXNbZGF5cy5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgYWZ0ZXIgU3VuZGF5XG4gICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGRheSBpcyBiZWZvcmUgU2F0dXJkYXlcbiAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgbGFzdCB3ZWVrJ3MgZGF5cyBhcmUgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cyx0aGlzLldFRUtfTEVOR1RIIC0gKGxhc3REYXkgKyAxKSwgJ3JpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaHVuayhkYXlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGJ5IG1vbnRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxEYXlzIC0gQW4gYXJyYXkgb2YgYWxsIGRheXNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY29sbGVjdGlvbiAtIGRheXMgb3JnYW5pemVkIGludG8gd2Vla3MgYW5kIG1vbnRoc1xuICAgICAqL1xuICAgIG9yZ2FuaXplTW9udGhzKGFsbERheXMpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBbXTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IGFsbERheXM7XG4gICAgICAgIGxldCBtb250aDtcbiAgICAgICAgbGV0IGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgLy8gUGFkIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIHdpdGggYW55IG1pc3NpbmcgZGF5c1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIG5vdCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgICAgICBpZiAobW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpID4gMCkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc2xpY2UoMCwgKGRheXNJbk1vbnRoIC0gKGRheU9mTW9udGggLSAxKSkpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIHRoZSBtaXNzaW5nIGRheXMgZnJvbSB0aGUgbW9udGhcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IHRoaXMucGFkRGF5c0xlZnQobW9udGhbMF0uZGF0ZSwgKGRheU9mTW9udGggLSAxKSk7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgd2l0aCB0aGUgZXhpc3RpbmcgYXJyYXlcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBwYWQuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTcGxpdCBpbnRvIG1vbnRoc1xuICAgICAgICAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBkYXlzIGxlZnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgd2hpbGUgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIHRoZSBmaXJzdCBkYXRlIG9mIHRoZSBjb2xsZWN0aW9uIGVnLiAnMjQnXG4gICAgICAgICAgICBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0aGVyZSBhcmUgdGhpcyBtb250aCAodG90YWwpXG4gICAgICAgICAgICBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgICAgIC8vIFB1bGwgdGhpcyBtb250aCdzIGRheXMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNwbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBwcmlvciB0byB0aGUgZmlyc3QgZGF5IG9mIHRoaXMgbW9udGg/XG4gICAgICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChtb250aFswXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBhZnRlciB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoP1xuICAgICAgICAgICAgLy8gKHJlbWVtYmVyOiB3ZWVrcyBhcmUgemVyby1iYXNlZClcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQobW9udGhbbW9udGgubGVuZ3RoIC0gMV0uZGF0ZSkuZGF5KCk7XG5cbiAgICAgICAgICAgIC8vIElmIGJsYW5rIHRpbGVzIGFyZSBuZWVkZWQgZm9yIHRoZSBsYXN0IHdlZWtcbiAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3QgY29sdW1uXG4gICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLnBhZEJsYW5rVGlsZXMobW9udGgsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JnYW5pemUgaW50byB3ZWVrcyBhbmQgYWRkIHRvIHRoZSBjYWxlbmRhciBhcnJheVxuICAgICAgICAgICAgY2FsZW5kYXIucHVzaCh0aGlzLmNodW5rKG1vbnRoKSk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbiBhcnJheSBvZiBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGxpbWl0IC0gaG93IG1hbnkgZGF5cyB0byBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZVxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgYnVpbGREYXlzKGxpbWl0LCBzdGFydCA9IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGxldCBkYXk7XG5cbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsaW1pdCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkYXlcbiAgICAgICAgICAgIGRheSA9IG1vbWVudChzdGFydCkuYWRkKGNvdW50ZXIsICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5zZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb250cm9sbGVyIH0gZnJvbSAnLi9jYWxlbmRhci5jb250cm9sbGVyJztcbmltcG9ydCBjYWxlbmRhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xuaW1wb3J0IHllYXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy95ZWFyLmh0bWwnO1xuaW1wb3J0IG1vbnRoVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvbW9udGguaHRtbCc7XG5pbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5pbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5Lmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNDYWxlbmRhckRpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBEZWZpbmUgcG9zc2libGUgdGVtcGxhdGVzXG4gICAgY29uc3QgdGVtcGxhdGVzID0ge1xuICAgICAgICB5ZWFyOiB5ZWFyVGVtcGxhdGUsXG4gICAgICAgIG1vbnRoOiBtb250aFRlbXBsYXRlLFxuICAgICAgICB3ZWVrOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGRheTogZGF5VGVtcGxhdGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgLy9yZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjU3RhcnREYXRlOiAnQD8nLCAgICAgICAvLyBkYXRlIC0gZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAgICAgYmNFbmREYXRlOiAnQD8nLCAgICAgICAgIC8vIGRhdGUgLSBpZiBub3QgcHJlc2VudCwgdXNlIGNyZWF0ZSB1c2luZyBiY0RheXNcbiAgICAgICAgICAgIGJjTmVzdGluZ0RlcHRoOiAnQD8nLCAgICAvLyBzdHJpbmcgW21vbnRofHdlZWt8ZGF5XSAtIGRlZmF1bHRzOiBtb250aFxuICAgICAgICAgICAgYmNEYXlzOiAnQD8nLCAgICAgICAgICAgIC8vIGludGVnZXIgLSBkZWZhdWx0IHRvIDMwICh1c2VkIHRvIGNyZWF0ZSBiY0VuZERhdGUpXG4gICAgICAgICAgICBiY0RheVRpdGxlRm9ybWF0OiAnQD8nLCAgLy8gc3RyaW5nIFt3b3JkfGFiYnJldmlhdGlvbnxsZXR0ZXJdIC0gZGVmYXVsdDogYWJicmV2aWF0aW9uXG4gICAgICAgICAgICBiY01vbnRoVGl0bGVGb3JtYXQ6ICdAPycsLy8gc3RyaW5nIC0gYW55IHZhbGlkIE1vbWVudCBkYXRlIGZvcm1hdCAtIGRlZmF1bHQ6IE1NTU1cbiAgICAgICAgICAgIGJjRGF0ZVNlbGVjdGVkOiAnJicsICAgICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZCAodGFwL2NsaWNrKVxuICAgICAgICAgICAgYmNTaG93V2Vla2RheXM6ICc9PycsICAgIC8vIGRldGVybWluZSBpZiB0aGUgd2Vla2RheXMgaGVhZGVyIHNob3VsZCBiZSBjcmVhdGVkXG4gICAgICAgICAgICBiY1Nob3dNb250aFRpdGxlczogJz0/JywgLy8gZGV0ZXJtaW5lIGlmIHRoZSBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIGJjRGF5VGVtcGxhdGU6ICdAPycsICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgJ2RheScgdGVtcGxhdGVcbiAgICAgICAgICAgIGJjRGF0ZUZvcm1hdDogJ0A/JywgICAgICAvLyBkZWZpbmUgYSBjdXN0b20gZGF0ZSBmb3JtYXQgZm9yIHRoZSBkYXlcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogbGlua0Z1bmN0aW9uLFxuICAgICAgICB0ZW1wbGF0ZVVybDogY2FsZW5kYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogQ2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua0Z1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgdm0pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGRlc2lyZWQgbmVzdGluZyBkZXB0aFxuICAgICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXNbdm0ubmVzdGluZ0RlcHRoXTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkdGVtcGxhdGVDYWNoZSxcbiAgICAgICAgYmNDYWxlbmRhckNvbmZpZywgYmNDYWxlbmRhclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZyA9IGJjQ2FsZW5kYXJDb25maWc7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UgPSBiY0NhbGVuZGFyU2VydmljZTtcblxuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKCk7XG5cbiAgICB9XG5cblxuXG5cbiAgICBfYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIERlZmluZSB0b2RheSdzIGRhdGVcbiAgICAgICAgdGhpcy50b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YXJ0IGRhdGUgZm9yIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuYmNTdGFydERhdGUgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnN0YXJ0RGF0ZTtcblxuICAgICAgICAvLyBJZiB0aGUgZW5kIGRhdGUgd2FzIGRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMuYmNFbmREYXRlKSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgdXNpbmcgdGhlIGVuZCBkYXRlXG4gICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmR1cmF0aW9uSW5EYXlzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmJjRW5kRGF0ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCBmcm9tIHRoZSBjb3VudCBwYXNzZWQgaW4gb3IgdGhlIGNvbmZpZ1xuICAgICAgICAgICAgdGhpcy5kYXlzID0gcGFyc2VJbnQodGhpcy5iY0RheXMgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheXMsIDEwKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGhvdyBkZWVwIHRvIG9yZ2FuaXplIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9IHRoaXMuYmNOZXN0aW5nRGVwdGggfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm5lc3RpbmdEZXB0aDtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHdlZWtkYXkgaGVhZGVycyBmb3JtYXRcbiAgICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuYmNEYXlUaXRsZUZvcm1hdCA/XG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNEYXlUaXRsZUZvcm1hdF0gOlxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGl0bGVGb3JtYXRdO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZm9ybWF0IGZvciB0aGUgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gdGhpcy5iY01vbnRoVGl0bGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm1vbnRoVGl0bGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gRGVmaW5lIGlmIG1vbnRoIHRpdGxlcyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHR5cGVvZih0aGlzLmJjU2hvd01vbnRoVGl0bGVzKSA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgICAgICAgIHRoaXMuYmNTaG93TW9udGhUaXRsZXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd01vbnRoVGl0bGVzO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSBubyBkYXRlIGlzIHNlbGVjdGVkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhbGVuZGFyIHdlZWtkYXlzIGhlYWRlcnNcbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0eXBlb2YodGhpcy5iY1Nob3dXZWVrZGF5cykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd1dlZWtkYXlzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dXZWVrZGF5cztcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHRlbXBsYXRlIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgb24gdGhlIGRpcmVjdGl2ZVxuICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAvLyBOYW1lIHRoZSB0ZW1wbGF0ZSBsb2NhdGlvblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0RheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGVtcGxhdGVMb2NhdGlvbjtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGRlZmluZWQgYSB0ZW1wbGF0ZSBpbiB0aGUgcHJvdmlkZXJcblxuICAgICAgICAgICAgLy8gTmFtZSB0aGUgdGVtcGxhdGUgbG9jYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlTG9jYXRpb24gPSAndXNlckRheVRlbXBsYXRlLmh0bWwnO1xuXG4gICAgICAgICAgICAvLyBQdXQgdGhlIHVzZXIgdGVtcGxhdGUgaW50byB0aGUgY2FjaGVcbiAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTG9jYXRpb24sIHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZUxvY2F0aW9uO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyB0ZW1wbGF0ZSBmcm9tIHRoZSB1c2VyXG5cbiAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRlbXBsYXRlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRhdGUgZm9ybWF0IGZvciB0aGUgaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5iY0RhdGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRhdGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gQnVpbGQgYXJyYXkgb2YgZGF5c1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5idWlsZERheXModGhpcy5kYXlzLCB0aGlzLnN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGNhbGVuZGFyIEpTT04gYW5kIGV4cG9zZSB0byB0aGUgRE9NXG4gICAgICAgIHRoaXMuX2J1aWxkQ2FsZW5kYXIoZGF5cywgdGhpcy5uZXN0aW5nRGVwdGgpO1xuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAqL1xuICAgIGlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kYXRlSXNCZWZvcmVUb2RheShkYXRlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgKi9cbiAgICBpc0RheVRvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuaXNEYXlUb2RheShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gICAgICovXG4gICAgc2VsZWN0RGF0ZShkYXkpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBkYXlcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXk7XG5cbiAgICAgICAgLy8gT25seSBjYWxsIHRoZSBwYXNzZWQgbWV0aG9kIGlmIGl0IGV4aXN0cyBhbmQgYSB2YWxpZCBkYXRlIHdhcyBjaG9zZW5cbiAgICAgICAgaWYgKGRheS5kYXRlICYmIHRoaXMuYmNEYXRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmNEYXRlU2VsZWN0ZWQoe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheS5kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBhIGRhdGUgdXNpbmcgbW9tZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZERhdGVcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCkge1xuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF5c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXB0aFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBfYnVpbGRDYWxlbmRhcihkYXlzLCBkZXB0aCkge1xuXG4gICAgICAgIC8vIENhbGwgdGhlIGNvcnJlY3Qgb3JnYW5pemF0aW9uIG1ldGhvZCBiYXNlZCBvbiB0aGUgbmVzdGluZyBkZXB0aFxuICAgICAgICBpZiAoZGVwdGggPT09ICdtb250aCcpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplTW9udGhzKGRheXMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICd3ZWVrJykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVXZWVrcyhkYXlzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnZGF5Jykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IGRheXM7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzZWN0aW9uIGNsYXNzPWJjLWNhbGVuZGFyPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vla2RheXMgZGF0YS1uZy1pZj1cXFwidm0uc2hvd1dlZWtkYXlzICYmIHZtLm5lc3RpbmdEZXB0aCA9PT0gJ3dlZWsnXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0ud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMteWVhciBiYy1jb2xsZWN0aW9uPXZtLmJjQ29sbGVjdGlvbiBkYXRhLW5nLWlmPVxcXCJ2bS5uZXN0aW5nRGVwdGggPT09ICd5ZWFyJ1xcXCI+PC9iYy15ZWFyPiA8YmMtbW9udGggYmMtY29sbGVjdGlvbj12bS5iY0NvbGxlY3Rpb24gZGF0YS1uZy1pZj1cXFwidm0ubmVzdGluZ0RlcHRoID09PSAnbW9udGgnXFxcIj48L2JjLW1vbnRoPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPXZtLmJjQ29sbGVjdGlvbiBkYXRhLW5nLWlmPVxcXCJ2bS5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCI+PC9iYy13ZWVrPiA8YmMtZGF5IGJjLWNvbGxlY3Rpb249dm0uYmNDb2xsZWN0aW9uIGRhdGEtbmctaWY9XFxcInZtLm5lc3RpbmdEZXB0aCA9PT0gJ2RheSdcXFwiPjwvYmMtZGF5PiA8L3NlY3Rpb24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9YmMtY2FsZW5kYXJfX3llYXIgZGF0YS1uZy1yZXBlYXQ9XFxcInllYXIgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxiYy1tb250aCBiYy1jb2xsZWN0aW9uPXllYXIgYmMtd2Vla3MtaGVhZGVyPXZtLndlZWtkYXlzSGVhZGVyPjwvYmMtbW9udGg+IDwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMveWVhci5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9tb250aC5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGggZGF0ZXRpbWU9XFxcInt7IG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LU1NJyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIm1vbnRoIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtdGl0bGUgZGF0YS1uZy1iaW5kPVxcXCJ2bS5mb3JtYXREYXRlKG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUsIHZtLm1vbnRoVGl0bGVGb3JtYXQpXFxcIiBkYXRhLW5nLWlmPXZtLnNob3dNb250aFRpdGxlcz48L3NwYW4+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrZGF5cyBkYXRhLW5nLWlmPXZtLnNob3dXZWVrZGF5cz4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0ud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPW1vbnRoPjwvYmMtd2Vlaz4gPC90aW1lPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvbW9udGguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fd2VlayBkYXRldGltZT1cXFwie3sgd2Vla1t3ZWVrLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LXd3JyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIndlZWsgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCIgc3R5bGU9cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDo1MHB4O21pbi13aWR0aDoxMDBweD4gPGJjLWRheSBiYy1jb2xsZWN0aW9uPXdlZWs+PC9iYy1kYXk+IDxzcGFuIHN0eWxlPXBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtjb2xvcjpncmVlbjtmb250LXdlaWdodDo3MDA+e3skaW5kZXh9fTwvc3Bhbj4gPC90aW1lPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX2RheSBkYXRhLW5nLWNsYXNzPVxcXCJ7ICdiYy1jYWxlbmRhcl9fZGF5LS1kaXNhYmxlZCc6IHZtLmlzQmVmb3JlVG9kYXkoZGF5LmRhdGUpLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tdG9kYXknOiB2bS5pc0RheVRvZGF5KGRheS5kYXRlKSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLWV2ZW4nOiAkZXZlbixcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLW9kZCc6ICRvZGQsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1wYWQnOiAhZGF5LmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS12YWxpZCc6IGRheS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tc2VsZWN0ZWQnOiBkYXkuZGF0ZSA9PT0gdm0uc2VsZWN0ZWREYXRlLmRhdGUgfVxcXCIgZGF0YS1uZy1jbGljaz12bS5zZWxlY3REYXRlKGRheSkgZGF0YS1uZy1yZXBlYXQ9XFxcImRheSBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIiB0aXRsZT1kYXkuZGF0ZT4gPG5nLWluY2x1ZGUgc3JjPXZtLmRheVRlbXBsYXRlPjwvbmctaW5jbHVkZT4gPHNwYW4gc3R5bGU9cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtjb2xvcjpyZWQ+e3skaW5kZXh9fTwvc3Bhbj4gPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJpbXBvcnQgeWVhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3llYXIuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1llYXJEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAvL3JlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiB5ZWFyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIFlFQVIgZGlyZWN0aXZlOiAnLCB0aGlzLmJjQ29sbGVjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy95ZWFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNNb250aERpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIC8vcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgICAgIGJjV2Vla2RheXNIZWFkZXI6ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IG1vbnRoVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIE1PTlRIIGRpcmVjdGl2ZTogJywgdGhpcy5iY0NvbGxlY3Rpb24pO1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vbnRoLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCB3ZWVrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvd2Vlay5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjV2Vla0RpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIC8vcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHdlZWtUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gV0VFSyBkaXJlY3RpdmU6ICcsIHRoaXMuYmNDb2xsZWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IGRheVdyYXBwZXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY0RheURpcmVjdGl2ZShcbiAgICBiY0NhbGVuZGFyQ29uZmlnXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAvL3JlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBkYXlXcmFwcGVyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIERBWSBkaXJlY3RpdmU6ICcsIHRoaXMuYmNDb2xsZWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RheS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9