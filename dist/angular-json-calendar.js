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
	
	var _month = __webpack_require__(11);
	
	var _week = __webpack_require__(12);
	
	var _day = __webpack_require__(13);
	
	exports.default = angular.module('bc.JsonCalendar', []).provider('bcCalendarConfig', _calendar.bcCalendarConfig).service('bcCalendarService', _calendar2.bcCalendarService).directive('bcCalendar', _calendar3.bcCalendarDirective).directive('bcMonth', _month.bcMonthDirective).directive('bcWeek', _week.bcWeekDirective).directive('bcDay', _day.bcDayDirective);

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
	            var secondsInDay = 86400;
	            var secondsInYear = 31536000;
	
	            // Add a day so the end date is included in the calculation
	            var unixEnd = moment(end).add(1, 'days').unix();
	
	            // Subtract a day so the start date is included in the calculation
	            var unixStart = moment(start).subtract(1, 'days').unix();
	
	            // Find the difference when converted to seconds
	            var diffence = unixEnd - unixStart;
	
	            // Convert the difference of seconds back into days
	            return Math.floor(diffence % secondsInYear / secondsInDay);
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
	
	bcCalendarDirective.$inject = ["$compile"];
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
	
	function bcCalendarDirective($compile) {
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
	                // If the user defined a template in the provider
	                var templateLocation = 'userDayTemplate.html';
	
	                // Put the user template into the cache
	                this.$templateCache.put(templateLocation, this.bcDayTemplate);
	
	                // Expose the location to the directive
	                this.dayTemplate = templateLocation;
	            } else if (this.bcCalendarConfig.userDayTemplate) {
	
	                // If the user defined a template in the provider
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
	var html = "<section class=bc-calendar> <span class=bc-calendar__weekdays data-ng-if=\"vm.showWeekdays && vm.nestingDepth === 'week'\"> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <div data-ng-include=vm.getTemplateUrl()></div> </section>";
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
	        controller: function controller() {},
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
	        controller: function controller() {},
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 13 */
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
	        controller: function controller() {},
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzOTEzZmJjNDhmYmI3NWZjYjNlZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzPzFmMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci5wcm92aWRlci5qcz9iMmY3Iiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanM/ODcyOCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanM/ZDRhYSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcz82YjUzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3llYXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9kYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9udGguZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanM/MzY5YiIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vlay5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzPzJkNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RheS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RheS5kaXJlY3RpdmUuanM/ZGU2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztLQUN6QyxPQUFPOzs7QUNIWDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QURhQSxTQUFRLFVDWE8sUUFBUSxPQUFPLG1CQUFtQixJQUM1QyxTQUFTLG9CQURDLDRCQUVWLFFBQVEscUJBRkUsOEJBR1YsVUFBVSxjQUhBLGdDQUlWLFVBQVUsV0FKQSx5QkFLVixVQUFVLFVBTEEsdUJBTVYsVUFBVSxTQU5BLHFCOzs7Ozs7QUNQZjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0tBQ3pDLE9BQU87O0FBRVgsU0FBUSxtQkFBbUI7O0FBRTNCLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJB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IiwiZmlsZSI6ImFuZ3VsYXItanNvbi1jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYW5ndWxhci1qc29uLWNhbGVuZGFyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDM5MTNmYmM0OGZiYjc1ZmNiM2VmXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2FsZW5kYXIgPSByZXF1aXJlKCcuL2NhbGVuZGFyLnByb3ZpZGVyJyk7XG5cbnZhciBfY2FsZW5kYXIyID0gcmVxdWlyZSgnLi9jYWxlbmRhci5zZXJ2aWNlJyk7XG5cbnZhciBfY2FsZW5kYXIzID0gcmVxdWlyZSgnLi9jYWxlbmRhci5kaXJlY3RpdmUnKTtcblxudmFyIF9tb250aCA9IHJlcXVpcmUoJy4vbW9udGguZGlyZWN0aXZlJyk7XG5cbnZhciBfd2VlayA9IHJlcXVpcmUoJy4vd2Vlay5kaXJlY3RpdmUnKTtcblxudmFyIF9kYXkgPSByZXF1aXJlKCcuL2RheS5kaXJlY3RpdmUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYW5ndWxhci5tb2R1bGUoJ2JjLkpzb25DYWxlbmRhcicsIFtdKS5wcm92aWRlcignYmNDYWxlbmRhckNvbmZpZycsIF9jYWxlbmRhci5iY0NhbGVuZGFyQ29uZmlnKS5zZXJ2aWNlKCdiY0NhbGVuZGFyU2VydmljZScsIF9jYWxlbmRhcjIuYmNDYWxlbmRhclNlcnZpY2UpLmRpcmVjdGl2ZSgnYmNDYWxlbmRhcicsIF9jYWxlbmRhcjMuYmNDYWxlbmRhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdiY01vbnRoJywgX21vbnRoLmJjTW9udGhEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnYmNXZWVrJywgX3dlZWsuYmNXZWVrRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2JjRGF5JywgX2RheS5iY0RheURpcmVjdGl2ZSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgeyBiY0NhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi9jYWxlbmRhci5wcm92aWRlcic7XG5pbXBvcnQgeyBiY0NhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBiY0NhbGVuZGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNNb250aERpcmVjdGl2ZSB9IGZyb20gJy4vbW9udGguZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjV2Vla0RpcmVjdGl2ZSB9IGZyb20gJy4vd2Vlay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNEYXlEaXJlY3RpdmUgfSBmcm9tICcuL2RheS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyLm1vZHVsZSgnYmMuSnNvbkNhbGVuZGFyJywgW10pXG4gICAgLnByb3ZpZGVyKCdiY0NhbGVuZGFyQ29uZmlnJywgYmNDYWxlbmRhckNvbmZpZylcbiAgICAuc2VydmljZSgnYmNDYWxlbmRhclNlcnZpY2UnLCBiY0NhbGVuZGFyU2VydmljZSlcbiAgICAuZGlyZWN0aXZlKCdiY0NhbGVuZGFyJywgYmNDYWxlbmRhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY01vbnRoJywgYmNNb250aERpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY1dlZWsnLCBiY1dlZWtEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNEYXknLCBiY0RheURpcmVjdGl2ZSlcbjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmNDYWxlbmRhckNvbmZpZyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kYXlJbm5lciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2RheS5pbm5lci5odG1sJyk7XG5cbnZhciBfZGF5SW5uZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF5SW5uZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYmNDYWxlbmRhckNvbmZpZyA9IGV4cG9ydHMuYmNDYWxlbmRhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIERlZmluZSBkZWZhdWx0c1xuICAgIGZ1bmN0aW9uIGJjQ2FsZW5kYXJDb25maWcoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgLy8gVGhlIGNhbGVuZGFyIHdpbGwgYmVnaW4gd2l0aCB0b2RheVxuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGJjQ2FsZW5kYXJDb25maWcpO1xuXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHR5cGUgW2RheXx3ZWVrfG1vbnRoXVxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9ICdtb250aCc7XG5cbiAgICAgICAgLy8gSG93IG1hbnkgZGF5cyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgICAgIHRoaXMuZGF5cyA9IDMwO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgd2Vla2RheVxuICAgICAgICB0aGlzLndlZWtkYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGxldHRlcjogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddLFxuICAgICAgICAgICAgd29yZDogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBkZWZhdWx0IHdvcmQgdHlwZSAoTSB2cyBNb24gdnMgTW9uZGF5KVxuICAgICAgICB0aGlzLmRheVRpdGxlRm9ybWF0ID0gJ2FiYnJldmlhdGlvbic7XG5cbiAgICAgICAgLy8gU2hvdWxkIHRoZSBjYWxlbmRhciBzaG93IHRoZSB3ZWVrZGF5IG5hbWVzIGFib3ZlIGVhY2ggY29sdW1uP1xuICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHRydWU7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGZvciBhIGRheVxuICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gX2RheUlubmVyMi5kZWZhdWx0O1xuXG4gICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnNldERheVRlbXBsYXRlID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBfdGhpcy51c2VyRGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgZm9ybWF0IGZvciBhIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnRCc7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBtb250aCB0aXRsZVxuICAgICAgICB0aGlzLm1vbnRoVGl0bGVGb3JtYXQgPSAnTU1NTSc7XG5cbiAgICAgICAgLy8gU2hvdWxkIG1vbnRoIHRpdGxlcyBiZSBzaG93biBieSBkZWZhdWx0P1xuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKGJjQ2FsZW5kYXJDb25maWcsIFt7XG4gICAgICAgIGtleTogJyRnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gJGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIGJjQ2FsZW5kYXJDb25maWc7XG59KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIucHJvdmlkZXIuanNcbiAqKi8iLCJpbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xuXG5leHBvcnQgY2xhc3MgYmNDYWxlbmRhckNvbmZpZyB7XG5cbiAgICAvLyBEZWZpbmUgZGVmYXVsdHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAvLyBUaGUgY2FsZW5kYXIgd2lsbCBiZWdpbiB3aXRoIHRvZGF5XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHR5cGUgW2RheXx3ZWVrfG1vbnRoXVxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9ICdtb250aCc7XG5cbiAgICAgICAgLy8gSG93IG1hbnkgZGF5cyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgICAgIHRoaXMuZGF5cyA9IDMwO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgd2Vla2RheVxuICAgICAgICB0aGlzLndlZWtkYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGxldHRlcjogW1xuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAgICAgJ1QnLFxuICAgICAgICAgICAgICAgICdXJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ0YnLFxuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246IFtcbiAgICAgICAgICAgICAgICAnU3VuJyxcbiAgICAgICAgICAgICAgICAnTW9uJyxcbiAgICAgICAgICAgICAgICAnVHVlJyxcbiAgICAgICAgICAgICAgICAnV2VkJyxcbiAgICAgICAgICAgICAgICAnVGh1cicsXG4gICAgICAgICAgICAgICAgJ0ZyaScsXG4gICAgICAgICAgICAgICAgJ1NhdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd29yZDogW1xuICAgICAgICAgICAgICAgICdTdW5kYXknLFxuICAgICAgICAgICAgICAgICdNb25kYXknLFxuICAgICAgICAgICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAgICAgICAgICdGcmlkYXknLFxuICAgICAgICAgICAgICAgICdTYXR1cmRheScsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3b3JkIHR5cGUgKE0gdnMgTW9uIHZzIE1vbmRheSlcbiAgICAgICAgdGhpcy5kYXlUaXRsZUZvcm1hdCA9ICdhYmJyZXZpYXRpb24nO1xuXG4gICAgICAgIC8vIFNob3VsZCB0aGUgY2FsZW5kYXIgc2hvdyB0aGUgd2Vla2RheSBuYW1lcyBhYm92ZSBlYWNoIGNvbHVtbj9cbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IGRheVRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnNldERheVRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ0QnO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCBmb3JtYXQgZm9yIGEgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gJ01NTU0nXG5cbiAgICAgICAgLy8gU2hvdWxkIG1vbnRoIHRpdGxlcyBiZSBzaG93biBieSBkZWZhdWx0P1xuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHRydWU7XG5cbiAgICB9XG5cblxuXG5cbiAgICAkZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jYWxlbmRhci5wcm92aWRlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBkYXRldGltZT1cXFwie3sgZGF5LmRhdGUgfCBkYXRlOid5eXl5LU1NLWRkJyB9fVxcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aW1lIHRpdGxlPVxcXCJ7eyBkYXkuZGF0ZSB9fVxcXCIgZGF0YS1uZy1pZj1kYXkuZGF0ZT4gPHNwYW4gZGF0YS1uZy1iaW5kPVxcXCJ2bS5mb3JtYXREYXRlKGRheS5kYXRlLCB2bS5kYXRlRm9ybWF0KVxcXCI+PC9zcGFuPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBiY0NhbGVuZGFyU2VydmljZSA9IGV4cG9ydHMuYmNDYWxlbmRhclNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gYmNDYWxlbmRhclNlcnZpY2UoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGJjQ2FsZW5kYXJTZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLldFRUtfTEVOR1RIID0gNztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9IGlzQmVmb3JlXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhiY0NhbGVuZGFyU2VydmljZSwgW3tcbiAgICAgICAga2V5OiAnZGF0ZUlzQmVmb3JlVG9kYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGF0ZUlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzQmVmb3JlKHRvZGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGUyXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2x9IGlzVG9kYXlcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRGF5VG9kYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNEYXlUb2RheShkYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZTIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCkgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNTYW1lKGRhdGUyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUdXJuIGEgaW50ZWdlciAoZS5nLiAnNicpIGludG8gYW4gYXJyYXk6ICdbMSwyLDMsNCw1LDZdJ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbnRlZ2VyVG9BcnJheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnRlZ2VyVG9BcnJheShjb3VudCkge1xuICAgICAgICAgICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFkIHRoZSBiZWdpbm5pbmcgb2YgYSB3ZWVrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydERhdGUgLSBkYXRlIHRvIHRvIHdvcmsgYmFjayBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvdW50IC0gaG93IG1hbnkgZGF5cyB0byBwYWRcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IHBhZFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGFkRGF5c0xlZnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGFkRGF5c0xlZnQoc3RhcnREYXRlLCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIHBhZCA9IFtdO1xuICAgICAgICAgICAgdmFyIG1pc3NpbmdEYXlzID0gdGhpcy5pbnRlZ2VyVG9BcnJheShjb3VudCk7XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBtaXNzaW5nIGRheXNcbiAgICAgICAgICAgIGZvciAodmFyIGRheSBpbiBtaXNzaW5nRGF5cykge1xuICAgICAgICAgICAgICAgIC8vIEhvdyBtYW55IGRheXMgdG8gZ28gYmFja1xuICAgICAgICAgICAgICAgIHZhciBzdWJ0cmFjdGlvbiA9IHBhcnNlSW50KGRheSwgMTApICsgMTtcblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhhdCBkYXlcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBtb21lbnQoc3RhcnREYXRlKS5zdWJ0cmFjdChzdWJ0cmFjdGlvbiwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgcGFkLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcmV2aW91c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhZCBhIGNvbGxlY3Rpb24gd2l0aCBibGFuayB0aWxlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IHBhZGRlZENvbGxlY3Rpb25cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhZEJsYW5rVGlsZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGFkQmxhbmtUaWxlcyhjb2xsZWN0aW9uLCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdsZWZ0JyA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBkaXJlY3Rpb24gaXMgJ3JpZ2h0J1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIC8vIHBhZCB0aGUgZW5kXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29uY2F0KGRheXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBwYWQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzLmNvbmNhdChjb2xsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGxpdCBhbiBhcnJheSBpbnRvIGNodW5rcyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRoZXNlIGNodW5rc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBncm91cFxuICAgICAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGdyb3Vwc2l6ZSAtIENodW5rIHNpemUuIERlZmF1bHRzIHRvIDcgKG9uZSB3ZWVrKS5cbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IGNodW5rc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2h1bmsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2h1bmsoZ3JvdXApIHtcbiAgICAgICAgICAgIHZhciBncm91cHNpemUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLldFRUtfTEVOR1RIIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgICB2YXIgc2V0cyA9IFtdO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgdmFyIGNodW5rcyA9IGdyb3VwLmxlbmd0aCAvIHBhcnNlSW50KGdyb3Vwc2l6ZSwgMTApO1xuXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGNodW5rcykge1xuICAgICAgICAgICAgICAgIHNldHNbaV0gPSBncm91cC5zcGxpY2UoMCwgZ3JvdXBzaXplKTtcbiAgICAgICAgICAgICAgICBpID0gaSArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIHR3byBkYXRlcyBJTkNMVURJTkcgYm90aCBkYXRlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnRcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZFxuICAgICAgICAgKiBAcmV0dXJuIHtJbnRlZ2VyfSBkYXlzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkdXJhdGlvbkluRGF5cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkdXJhdGlvbkluRGF5cyhzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kc0luRGF5ID0gODY0MDA7XG4gICAgICAgICAgICB2YXIgc2Vjb25kc0luWWVhciA9IDMxNTM2MDAwO1xuXG4gICAgICAgICAgICAvLyBBZGQgYSBkYXkgc28gdGhlIGVuZCBkYXRlIGlzIGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgdmFyIHVuaXhFbmQgPSBtb21lbnQoZW5kKS5hZGQoMSwgJ2RheXMnKS51bml4KCk7XG5cbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IGEgZGF5IHNvIHRoZSBzdGFydCBkYXRlIGlzIGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgdmFyIHVuaXhTdGFydCA9IG1vbWVudChzdGFydCkuc3VidHJhY3QoMSwgJ2RheXMnKS51bml4KCk7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGRpZmZlcmVuY2Ugd2hlbiBjb252ZXJ0ZWQgdG8gc2Vjb25kc1xuICAgICAgICAgICAgdmFyIGRpZmZlbmNlID0gdW5peEVuZCAtIHVuaXhTdGFydDtcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgZGlmZmVyZW5jZSBvZiBzZWNvbmRzIGJhY2sgaW50byBkYXlzXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZW5jZSAlIHNlY29uZHNJblllYXIgLyBzZWNvbmRzSW5EYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9yZ2FuaXplIGEgY29sbGVjdGlvbiBvZiBkYXlzIGludG8gc3ViIGNvbGxlY3Rpb25zIG9mIHdlZWtzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXMgLSBhcnJheSBvZiBkYXlzXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvcmdhbml6ZVdlZWtzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9yZ2FuaXplV2Vla3MoZGF5cykge1xuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkYXkgb2YgdGhlIHdlZWsgdGhhdCB0aGUgY2FsZW5kYXIgc3RhcnRzIGFuZCBlbmRzIG9uXG4gICAgICAgICAgICB2YXIgZmlyc3REYXkgPSBtb21lbnQoZGF5c1swXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgICAgIHZhciBsYXN0RGF5ID0gbW9tZW50KGRheXNbZGF5cy5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgICAgIHZhciBTQVRVUkRBWSA9IDY7XG4gICAgICAgICAgICB2YXIgU1VOREFZID0gMDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5wYWRCbGFua1RpbGVzKGRheXMsIGZpcnN0RGF5LCAnbGVmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgbGFzdCBkYXkgaXMgYmVmb3JlIFNhdHVyZGF5XG4gICAgICAgICAgICBpZiAobGFzdERheSA8IFNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgbGFzdCB3ZWVrJ3MgZGF5cyBhcmUgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5wYWRCbGFua1RpbGVzKGRheXMsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmsoZGF5cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT3JnYW5pemUgYnkgbW9udGhcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYWxsRGF5cyAtIEFuIGFycmF5IG9mIGFsbCBkYXlzXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uIC0gZGF5cyBvcmdhbml6ZWQgaW50byB3ZWVrcyBhbmQgbW9udGhzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvcmdhbml6ZU1vbnRocycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcmdhbml6ZU1vbnRocyhhbGxEYXlzKSB7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXIgPSBbXTtcbiAgICAgICAgICAgIHZhciBTQVRVUkRBWSA9IDY7XG4gICAgICAgICAgICB2YXIgU1VOREFZID0gMDtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gYWxsRGF5cztcbiAgICAgICAgICAgIHZhciBtb250aCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAgICAgLy8gUGFkIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIHdpdGggYW55IG1pc3NpbmcgZGF5c1xuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBub3QgdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGhcbiAgICAgICAgICAgIGlmIChtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNsaWNlKDAsIGRheXNJbk1vbnRoIC0gKGRheU9mTW9udGggLSAxKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBGaWxsIHRoZSBtaXNzaW5nIGRheXMgZnJvbSB0aGUgbW9udGhcbiAgICAgICAgICAgICAgICB2YXIgcGFkID0gdGhpcy5wYWREYXlzTGVmdChtb250aFswXS5kYXRlLCBkYXlPZk1vbnRoIC0gMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb21iaW5lIHdpdGggdGhlIGV4aXN0aW5nIGFycmF5XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IHBhZC5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNwbGl0IGludG8gbW9udGhzXG4gICAgICAgICAgICAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBkYXlzIGxlZnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIHdoaWxlIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgdGhlIGZpcnN0IGRhdGUgb2YgdGhlIGNvbGxlY3Rpb24gZWcuICcyNCdcbiAgICAgICAgICAgICAgICBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IGRheXMgdGhlcmUgYXJlIHRoaXMgbW9udGggKHRvdGFsKVxuICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAgICAgICAgIC8vIFB1bGwgdGhpcyBtb250aCdzIGRheXMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIG1vbnRoID0gY29sbGVjdGlvbi5zcGxpY2UoMCwgZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKTtcblxuICAgICAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBwcmlvciB0byB0aGUgZmlyc3QgZGF5IG9mIHRoaXMgbW9udGg/XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0RGF5ID0gbW9tZW50KG1vbnRoWzBdLmRhdGUpLmRheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3REYXkgPiBTVU5EQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IGNvbHVtblxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIGFmdGVyIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGg/XG4gICAgICAgICAgICAgICAgLy8gKHJlbWVtYmVyOiB3ZWVrcyBhcmUgemVyby1iYXNlZClcbiAgICAgICAgICAgICAgICB2YXIgbGFzdERheSA9IG1vbWVudChtb250aFttb250aC5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGJsYW5rIHRpbGVzIGFyZSBuZWVkZWQgZm9yIHRoZSBsYXN0IHdlZWtcbiAgICAgICAgICAgICAgICBpZiAobGFzdERheSA8IFNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLnBhZEJsYW5rVGlsZXMobW9udGgsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPcmdhbml6ZSBpbnRvIHdlZWtzIGFuZCBhZGQgdG8gdGhlIGNhbGVuZGFyIGFycmF5XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIucHVzaCh0aGlzLmNodW5rKG1vbnRoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxlbmRhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZCBhbiBhcnJheSBvZiBkYXlzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbGltaXQgLSBob3cgbWFueSBkYXlzIHRvIGNyZWF0ZVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gZGF5c1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnVpbGREYXlzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF5cyhsaW1pdCkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbmV3IERhdGUoKSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIGRheXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBkYXkgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChjb3VudGVyIDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRheVxuICAgICAgICAgICAgICAgIGRheSA9IG1vbWVudChzdGFydCkuYWRkKGNvdW50ZXIsICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgY291bnRlclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gYmNDYWxlbmRhclNlcnZpY2U7XG59KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBiY0NhbGVuZGFyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLldFRUtfTEVOR1RIID0gNztcblxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IGlzIHByaW9yIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgdW5zZWxlY3RhYmxlIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNCZWZvcmVcbiAgICAgKi9cbiAgICBkYXRlSXNCZWZvcmVUb2RheShkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNCZWZvcmUodG9kYXkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgbWF0Y2hlcyB0aGUgY3VycmVudCBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlMlxuICAgICAqIEByZXR1cm4ge0Jvb2x9IGlzVG9kYXlcbiAgICAgKi9cbiAgICBpc0RheVRvZGF5KGRhdGUsIGRhdGUyID0gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNTYW1lKGRhdGUyKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFR1cm4gYSBpbnRlZ2VyIChlLmcuICc2JykgaW50byBhbiBhcnJheTogJ1sxLDIsMyw0LDUsNl0nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IGRheXNcbiAgICAgKi9cbiAgICBpbnRlZ2VyVG9BcnJheShjb3VudCkge1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBkYXlzLnB1c2goaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBhZCB0aGUgYmVnaW5uaW5nIG9mIGEgd2Vla1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0RGF0ZSAtIGRhdGUgdG8gdG8gd29yayBiYWNrIGZyb21cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb3VudCAtIGhvdyBtYW55IGRheXMgdG8gcGFkXG4gICAgICogQHJldHVybiB7QXJyYXl9IHBhZFxuICAgICAqL1xuICAgIHBhZERheXNMZWZ0KHN0YXJ0RGF0ZSwgY291bnQpIHtcbiAgICAgICAgY29uc3QgcGFkID0gW107XG4gICAgICAgIGNvbnN0IG1pc3NpbmdEYXlzID0gdGhpcy5pbnRlZ2VyVG9BcnJheShjb3VudCk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG1pc3NpbmcgZGF5c1xuICAgICAgICBmb3IgKGNvbnN0IGRheSBpbiBtaXNzaW5nRGF5cykge1xuICAgICAgICAgICAgLy8gSG93IG1hbnkgZGF5cyB0byBnbyBiYWNrXG4gICAgICAgICAgICBjb25zdCBzdWJ0cmFjdGlvbiA9IHBhcnNlSW50KGRheSwgMTApICsgMTtcblxuICAgICAgICAgICAgLy8gRmluZCB0aGF0IGRheVxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBtb21lbnQoc3RhcnREYXRlKS5zdWJ0cmFjdCgoc3VidHJhY3Rpb24pLCAnZGF5cycpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgcGFkLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgIGRhdGU6IHByZXZpb3VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFkIGEgY29sbGVjdGlvbiB3aXRoIGJsYW5rIHRpbGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBwYWRkZWRDb2xsZWN0aW9uXG4gICAgICovXG4gICAgcGFkQmxhbmtUaWxlcyhjb2xsZWN0aW9uLCBjb3VudCwgZGlyZWN0aW9uID0gJ2xlZnQnKSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFycmF5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGRpcmVjdGlvbiBpcyAncmlnaHQnXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIC8vIHBhZCB0aGUgZW5kXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb25jYXQoZGF5cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBwYWQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgcmV0dXJuIGRheXMuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNwbGl0IGFuIGFycmF5IGludG8gY2h1bmtzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdGhlc2UgY2h1bmtzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBncm91cFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gZ3JvdXBzaXplIC0gQ2h1bmsgc2l6ZS4gRGVmYXVsdHMgdG8gNyAob25lIHdlZWspLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBjaHVua3NcbiAgICAgKi9cbiAgICBjaHVuayhncm91cCwgZ3JvdXBzaXplID0gdGhpcy5XRUVLX0xFTkdUSCkge1xuICAgICAgICBjb25zdCBzZXRzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgY2h1bmtzID0gZ3JvdXAubGVuZ3RoIC8gcGFyc2VJbnQoZ3JvdXBzaXplLCAxMCk7XG5cbiAgICAgICAgd2hpbGUoaSA8IGNodW5rcykge1xuICAgICAgICAgICAgc2V0c1tpXSA9IGdyb3VwLnNwbGljZSgwLCBncm91cHNpemUpO1xuICAgICAgICAgICAgaSA9IGkgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldHM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGR1cmF0aW9uIGluIGRheXMgYmV0d2VlbiB0d28gZGF0ZXMgSU5DTFVESU5HIGJvdGggZGF0ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbmRcbiAgICAgKiBAcmV0dXJuIHtJbnRlZ2VyfSBkYXlzXG4gICAgICovXG4gICAgZHVyYXRpb25JbkRheXMoc3RhcnQsIGVuZCkge1xuICAgICAgICBjb25zdCBzZWNvbmRzSW5EYXkgPSA4NjQwMDtcbiAgICAgICAgY29uc3Qgc2Vjb25kc0luWWVhciA9IDMxNTM2MDAwO1xuXG4gICAgICAgIC8vIEFkZCBhIGRheSBzbyB0aGUgZW5kIGRhdGUgaXMgaW5jbHVkZWQgaW4gdGhlIGNhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IHVuaXhFbmQgPSBtb21lbnQoZW5kKS5hZGQoMSwgJ2RheXMnKS51bml4KCk7XG5cbiAgICAgICAgLy8gU3VidHJhY3QgYSBkYXkgc28gdGhlIHN0YXJ0IGRhdGUgaXMgaW5jbHVkZWQgaW4gdGhlIGNhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IHVuaXhTdGFydCA9IG1vbWVudChzdGFydCkuc3VidHJhY3QoMSwgJ2RheXMnKS51bml4KCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZGlmZmVyZW5jZSB3aGVuIGNvbnZlcnRlZCB0byBzZWNvbmRzXG4gICAgICAgIGNvbnN0IGRpZmZlbmNlID0gdW5peEVuZCAtIHVuaXhTdGFydDtcblxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBkaWZmZXJlbmNlIG9mIHNlY29uZHMgYmFjayBpbnRvIGRheXNcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKGRpZmZlbmNlICUgc2Vjb25kc0luWWVhcikgLyBzZWNvbmRzSW5EYXkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYSBjb2xsZWN0aW9uIG9mIGRheXMgaW50byBzdWIgY29sbGVjdGlvbnMgb2Ygd2Vla3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXMgLSBhcnJheSBvZiBkYXlzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBvcmdhbml6ZVdlZWtzKGRheXMpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkYXkgb2YgdGhlIHdlZWsgdGhhdCB0aGUgY2FsZW5kYXIgc3RhcnRzIGFuZCBlbmRzIG9uXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KGRheXNbMF0uZGF0ZSkuZGF5KCk7XG4gICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQoZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG5cbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IHdlZWtkYXkgY29sdW1uXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5wYWRCbGFua1RpbGVzKGRheXMsIGZpcnN0RGF5LCAnbGVmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZGF5IGlzIGJlZm9yZSBTYXR1cmRheVxuICAgICAgICBpZiAobGFzdERheSA8IFNBVFVSREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBsYXN0IHdlZWsncyBkYXlzIGFyZSBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rKGRheXMpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYnkgbW9udGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbERheXMgLSBBbiBhcnJheSBvZiBhbGwgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uIC0gZGF5cyBvcmdhbml6ZWQgaW50byB3ZWVrcyBhbmQgbW9udGhzXG4gICAgICovXG4gICAgb3JnYW5pemVNb250aHMoYWxsRGF5cykge1xuICAgICAgICBjb25zdCBjYWxlbmRhciA9IFtdO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gYWxsRGF5cztcbiAgICAgICAgbGV0IG1vbnRoO1xuICAgICAgICBsZXQgZGF5T2ZNb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRhdGUoKTtcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAvLyBQYWQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGggd2l0aCBhbnkgbWlzc2luZyBkYXlzXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgbm90IHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgICAgIGlmIChtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCkgPiAwKSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoaXMgbW9udGgncyBkYXlzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIG1vbnRoID0gY29sbGVjdGlvbi5zbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIG1pc3NpbmcgZGF5cyBmcm9tIHRoZSBtb250aFxuICAgICAgICAgICAgY29uc3QgcGFkID0gdGhpcy5wYWREYXlzTGVmdChtb250aFswXS5kYXRlLCAoZGF5T2ZNb250aCAtIDEpKTtcblxuICAgICAgICAgICAgLy8gQ29tYmluZSB3aXRoIHRoZSBleGlzdGluZyBhcnJheVxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHBhZC5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFNwbGl0IGludG8gbW9udGhzXG4gICAgICAgIC8vIEFzIGxvbmcgYXMgdGhlcmUgYXJlIGRheXMgbGVmdCBpbiB0aGUgY29sbGVjdGlvblxuICAgICAgICB3aGlsZSAoY29sbGVjdGlvbi5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgdGhlIGZpcnN0IGRhdGUgb2YgdGhlIGNvbGxlY3Rpb24gZWcuICcyNCdcbiAgICAgICAgICAgIGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBob3cgbWFueSBkYXlzIHRoZXJlIGFyZSB0aGlzIG1vbnRoICh0b3RhbClcbiAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc3BsaWNlKDAsIChkYXlzSW5Nb250aCAtIChkYXlPZk1vbnRoIC0gMSkpKTtcblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIHByaW9yIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhpcyBtb250aD9cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KG1vbnRoWzBdLmRhdGUpLmRheSgpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIGFmdGVyIFN1bmRheVxuICAgICAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IGNvbHVtblxuICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5wYWRCbGFua1RpbGVzKG1vbnRoLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIGFmdGVyIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGg/XG4gICAgICAgICAgICAvLyAocmVtZW1iZXI6IHdlZWtzIGFyZSB6ZXJvLWJhc2VkKVxuICAgICAgICAgICAgY29uc3QgbGFzdERheSA9IG1vbWVudChtb250aFttb250aC5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgYmxhbmsgdGlsZXMgYXJlIG5lZWRlZCBmb3IgdGhlIGxhc3Qgd2Vla1xuICAgICAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgdGhpcy5XRUVLX0xFTkdUSCAtIChsYXN0RGF5ICsgMSksICdyaWdodCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcmdhbml6ZSBpbnRvIHdlZWtzIGFuZCBhZGQgdG8gdGhlIGNhbGVuZGFyIGFycmF5XG4gICAgICAgICAgICBjYWxlbmRhci5wdXNoKHRoaXMuY2h1bmsobW9udGgpKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gY2FsZW5kYXI7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuIGFycmF5IG9mIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbGltaXQgLSBob3cgbWFueSBkYXlzIHRvIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydCAtIHRoZSBzdGFydGluZyBkYXRlXG4gICAgICogQHJldHVybiB7QXJyYXl9IGRheXNcbiAgICAgKi9cbiAgICBidWlsZERheXMobGltaXQsIHN0YXJ0ID0gbmV3IERhdGUoKSkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgbGV0IGRheTtcblxuICAgICAgICB3aGlsZSAoY291bnRlciA8IGxpbWl0KSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRheVxuICAgICAgICAgICAgZGF5ID0gbW9tZW50KHN0YXJ0KS5hZGQoY291bnRlciwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmNDYWxlbmRhckRpcmVjdGl2ZSA9IGJjQ2FsZW5kYXJEaXJlY3RpdmU7XG5cbnZhciBfY2FsZW5kYXIgPSByZXF1aXJlKCcuL2NhbGVuZGFyLmNvbnRyb2xsZXInKTtcblxudmFyIF9jYWxlbmRhcjIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sJyk7XG5cbnZhciBfY2FsZW5kYXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FsZW5kYXIyKTtcblxudmFyIF95ZWFyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMveWVhci5odG1sJyk7XG5cbnZhciBfeWVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF95ZWFyKTtcblxudmFyIF9tb250aCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnKTtcblxudmFyIF9tb250aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb250aCk7XG5cbnZhciBfd2VlayA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCcpO1xuXG52YXIgX3dlZWsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vlayk7XG5cbnZhciBfZGF5ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZGF5Lmh0bWwnKTtcblxudmFyIF9kYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYmNDYWxlbmRhckRpcmVjdGl2ZSgkY29tcGlsZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBEZWZpbmUgcG9zc2libGUgdGVtcGxhdGVzXG5cbiAgICB2YXIgdGVtcGxhdGVzID0ge1xuICAgICAgICB5ZWFyOiBfeWVhcjIuZGVmYXVsdCxcbiAgICAgICAgbW9udGg6IF9tb250aDIuZGVmYXVsdCxcbiAgICAgICAgd2VlazogX3dlZWsyLmRlZmF1bHQsXG4gICAgICAgIGRheTogX2RheTIuZGVmYXVsdFxuICAgIH07XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjU3RhcnREYXRlOiAnQD8nLCAvLyBkYXRlIC0gZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAgICAgYmNFbmREYXRlOiAnQD8nLCAvLyBkYXRlIC0gaWYgbm90IHByZXNlbnQsIHVzZSBjcmVhdGUgdXNpbmcgYmNEYXlzXG4gICAgICAgICAgICBiY05lc3RpbmdEZXB0aDogJ0A/JywgLy8gc3RyaW5nIFttb250aHx3ZWVrfGRheV0gLSBkZWZhdWx0czogbW9udGhcbiAgICAgICAgICAgIGJjRGF5czogJ0A/JywgLy8gaW50ZWdlciAtIGRlZmF1bHQgdG8gMzAgKHVzZWQgdG8gY3JlYXRlIGJjRW5kRGF0ZSlcbiAgICAgICAgICAgIGJjRGF5VGl0bGVGb3JtYXQ6ICdAPycsIC8vIHN0cmluZyBbd29yZHxhYmJyZXZpYXRpb258bGV0dGVyXSAtIGRlZmF1bHQ6IGFiYnJldmlhdGlvblxuICAgICAgICAgICAgYmNNb250aFRpdGxlRm9ybWF0OiAnQD8nLCAvLyBzdHJpbmcgLSBhbnkgdmFsaWQgTW9tZW50IGRhdGUgZm9ybWF0IC0gZGVmYXVsdDogTU1NTVxuICAgICAgICAgICAgYmNEYXRlU2VsZWN0ZWQ6ICcmJywgLy8gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRhdGUgaXMgc2VsZWN0ZWQgKHRhcC9jbGljaylcbiAgICAgICAgICAgIGJjU2hvd1dlZWtkYXlzOiAnPT8nLCAvLyBkZXRlcm1pbmUgaWYgdGhlIHdlZWtkYXlzIGhlYWRlciBzaG91bGQgYmUgY3JlYXRlZFxuICAgICAgICAgICAgYmNTaG93TW9udGhUaXRsZXM6ICc9PycsIC8vIGRldGVybWluZSBpZiB0aGUgbW9udGggdGl0bGVzIHNob3VsZCBiZSB2aXNpYmxlXG4gICAgICAgICAgICBiY0RheVRlbXBsYXRlOiAnQD8nLCAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgJ2RheScgdGVtcGxhdGVcbiAgICAgICAgICAgIGJjRGF0ZUZvcm1hdDogJ0A/JyB9LFxuICAgICAgICBsaW5rOiBsaW5rRnVuY3Rpb24sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBfY2FsZW5kYXIzLmRlZmF1bHQsXG4gICAgICAgIGNvbnRyb2xsZXI6IF9jYWxlbmRhci5DYWxlbmRhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogTGlua1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmtGdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIHZtKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjb3JyZWN0IHRlbXBsYXRlIGJhc2VkIG9uIHRoZSBkZXNpcmVkIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3ZtLm5lc3RpbmdEZXB0aF07XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCB7IENhbGVuZGFyQ29udHJvbGxlciB9IGZyb20gJy4vY2FsZW5kYXIuY29udHJvbGxlcic7XG5pbXBvcnQgY2FsZW5kYXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sJztcbmltcG9ydCB5ZWFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMveWVhci5odG1sJztcbmltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuaW1wb3J0IHdlZWtUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xuaW1wb3J0IGRheVRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjQ2FsZW5kYXJEaXJlY3RpdmUoXG4gICAgJGNvbXBpbGVcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBEZWZpbmUgcG9zc2libGUgdGVtcGxhdGVzXG4gICAgY29uc3QgdGVtcGxhdGVzID0ge1xuICAgICAgICB5ZWFyOiB5ZWFyVGVtcGxhdGUsXG4gICAgICAgIG1vbnRoOiBtb250aFRlbXBsYXRlLFxuICAgICAgICB3ZWVrOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGRheTogZGF5VGVtcGxhdGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY1N0YXJ0RGF0ZTogJ0A/JywgICAgICAgLy8gZGF0ZSAtIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgICAgIGJjRW5kRGF0ZTogJ0A/JywgICAgICAgICAvLyBkYXRlIC0gaWYgbm90IHByZXNlbnQsIHVzZSBjcmVhdGUgdXNpbmcgYmNEYXlzXG4gICAgICAgICAgICBiY05lc3RpbmdEZXB0aDogJ0A/JywgICAgLy8gc3RyaW5nIFttb250aHx3ZWVrfGRheV0gLSBkZWZhdWx0czogbW9udGhcbiAgICAgICAgICAgIGJjRGF5czogJ0A/JywgICAgICAgICAgICAvLyBpbnRlZ2VyIC0gZGVmYXVsdCB0byAzMCAodXNlZCB0byBjcmVhdGUgYmNFbmREYXRlKVxuICAgICAgICAgICAgYmNEYXlUaXRsZUZvcm1hdDogJ0A/JywgLy8gc3RyaW5nIFt3b3JkfGFiYnJldmlhdGlvbnxsZXR0ZXJdIC0gZGVmYXVsdDogYWJicmV2aWF0aW9uXG4gICAgICAgICAgICBiY01vbnRoVGl0bGVGb3JtYXQ6ICdAPycsLy8gc3RyaW5nIC0gYW55IHZhbGlkIE1vbWVudCBkYXRlIGZvcm1hdCAtIGRlZmF1bHQ6IE1NTU1cbiAgICAgICAgICAgIGJjRGF0ZVNlbGVjdGVkOiAnJicsICAgICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZCAodGFwL2NsaWNrKVxuICAgICAgICAgICAgYmNTaG93V2Vla2RheXM6ICc9PycsICAgIC8vIGRldGVybWluZSBpZiB0aGUgd2Vla2RheXMgaGVhZGVyIHNob3VsZCBiZSBjcmVhdGVkXG4gICAgICAgICAgICBiY1Nob3dNb250aFRpdGxlczogJz0/JywgLy8gZGV0ZXJtaW5lIGlmIHRoZSBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIGJjRGF5VGVtcGxhdGU6ICdAPycsICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgJ2RheScgdGVtcGxhdGVcbiAgICAgICAgICAgIGJjRGF0ZUZvcm1hdDogJ0A/JywgICAgICAvLyBkZWZpbmUgYSBjdXN0b20gZGF0ZSBmb3JtYXQgZm9yIHRoZSBkYXlcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogbGlua0Z1bmN0aW9uLFxuICAgICAgICB0ZW1wbGF0ZVVybDogY2FsZW5kYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogQ2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua0Z1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgdm0pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGRlc2lyZWQgbmVzdGluZyBkZXB0aFxuICAgICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXNbdm0ubmVzdGluZ0RlcHRoXTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhbGVuZGFyQ29udHJvbGxlciA9IGV4cG9ydHMuQ2FsZW5kYXJDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbGVuZGFyQ29udHJvbGxlcigkdGVtcGxhdGVDYWNoZSwgYmNDYWxlbmRhckNvbmZpZywgYmNDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXJDb250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZyA9IGJjQ2FsZW5kYXJDb25maWc7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UgPSBiY0NhbGVuZGFyU2VydmljZTtcblxuICAgICAgICB0aGlzLl9hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYWxlbmRhckNvbnRyb2xsZXIsIFt7XG4gICAgICAgIGtleTogJ19hY3RpdmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWN0aXZhdGUoKSB7XG4gICAgICAgICAgICAvLyBEZWZpbmUgdG9kYXkncyBkYXRlXG4gICAgICAgICAgICB0aGlzLnRvZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpO1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YXJ0IGRhdGUgZm9yIHRoZSBjYWxlbmRhclxuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLmJjU3RhcnREYXRlIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zdGFydERhdGU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbmQgZGF0ZSB3YXMgZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHRoaXMuYmNFbmREYXRlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaG93IG1hbnkgZGF5cyBhcmUgbmVlZGVkIHVzaW5nIHRoZSBlbmQgZGF0ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuZHVyYXRpb25JbkRheXModGhpcy5zdGFydERhdGUsIHRoaXMuYmNFbmREYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaG93IG1hbnkgZGF5cyBhcmUgbmVlZGVkIGZyb20gdGhlIGNvdW50IHBhc3NlZCBpbiBvciB0aGUgY29uZmlnXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gcGFyc2VJbnQodGhpcy5iY0RheXMgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheXMsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBkZWVwIHRvIG9yZ2FuaXplIHRoZSBjYWxlbmRhclxuICAgICAgICAgICAgdGhpcy5uZXN0aW5nRGVwdGggPSB0aGlzLmJjTmVzdGluZ0RlcHRoIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5uZXN0aW5nRGVwdGg7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgd2Vla2RheSBoZWFkZXJzIGZvcm1hdFxuICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuYmNEYXlUaXRsZUZvcm1hdCA/IHRoaXMuYmNDYWxlbmRhckNvbmZpZy53ZWVrZGF5U3R5bGVbdGhpcy5iY0RheVRpdGxlRm9ybWF0XSA6IHRoaXMuYmNDYWxlbmRhckNvbmZpZy53ZWVrZGF5U3R5bGVbdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRpdGxlRm9ybWF0XTtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBmb3JtYXQgZm9yIHRoZSBtb250aCB0aXRsZVxuICAgICAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gdGhpcy5iY01vbnRoVGl0bGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm1vbnRoVGl0bGVGb3JtYXQ7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBpZiBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHlwZW9mIHRoaXMuYmNTaG93TW9udGhUaXRsZXMgPT09ICdib29sZWFuJyA/IHRoaXMuYmNTaG93TW9udGhUaXRsZXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd01vbnRoVGl0bGVzO1xuXG4gICAgICAgICAgICAvLyBJbml0aWFsbHkgbm8gZGF0ZSBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhbGVuZGFyIHdlZWtkYXlzIGhlYWRlcnNcbiAgICAgICAgICAgIHRoaXMuc2hvd1dlZWtkYXlzID0gdHlwZW9mIHRoaXMuYmNTaG93V2Vla2RheXMgPT09ICdib29sZWFuJyA/IHRoaXMuYmNTaG93V2Vla2RheXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd1dlZWtkYXlzO1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHRlbXBsYXRlIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIG9uIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIGlmICh0aGlzLmJjRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgaW4gdGhlIHByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlTG9jYXRpb24gPSAndXNlckRheVRlbXBsYXRlLmh0bWwnO1xuXG4gICAgICAgICAgICAgICAgLy8gUHV0IHRoZSB1c2VyIHRlbXBsYXRlIGludG8gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0RheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgbG9jYXRpb24gdG8gdGhlIGRpcmVjdGl2ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZUxvY2F0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgaW4gdGhlIHByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFyIF90ZW1wbGF0ZUxvY2F0aW9uID0gJ3VzZXJEYXlUZW1wbGF0ZS5odG1sJztcblxuICAgICAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KF90ZW1wbGF0ZUxvY2F0aW9uLCB0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgbG9jYXRpb24gdG8gdGhlIGRpcmVjdGl2ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSBfdGVtcGxhdGVMb2NhdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gdGVtcGxhdGUgZnJvbSB0aGUgdXNlclxuXG4gICAgICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRlbXBsYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIGRhdGUgZm9ybWF0IGZvciB0aGUgaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9IHRoaXMuYmNEYXRlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXRlRm9ybWF0O1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBhcnJheSBvZiBkYXlzXG4gICAgICAgICAgICB2YXIgZGF5cyA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuYnVpbGREYXlzKHRoaXMuZGF5cywgdGhpcy5zdGFydERhdGUpO1xuXG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTiBhbmQgZXhwb3NlIHRvIHRoZSBET01cbiAgICAgICAgICAgIHRoaXMuX2J1aWxkQ2FsZW5kYXIoZGF5cywgdGhpcy5uZXN0aW5nRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IGlzIHByaW9yIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNCZWZvcmVUb2RheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRGF5VG9kYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNEYXlUb2RheShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5pc0RheVRvZGF5KGRhdGUsIHRoaXMuc3RhcnREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWxlY3QgYSBkYXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXlcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlbGVjdERhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0RGF0ZShkYXkpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgZGF5XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRheTtcblxuICAgICAgICAgICAgLy8gT25seSBjYWxsIHRoZSBwYXNzZWQgbWV0aG9kIGlmIGl0IGV4aXN0cyBhbmQgYSB2YWxpZCBkYXRlIHdhcyBjaG9zZW5cbiAgICAgICAgICAgIGlmIChkYXkuZGF0ZSAmJiB0aGlzLmJjRGF0ZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iY0RhdGVTZWxlY3RlZCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRheS5kYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9ybWF0IGEgZGF0ZSB1c2luZyBtb21lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Zvcm1hdERhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXB0aFxuICAgICAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfYnVpbGRDYWxlbmRhcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYnVpbGRDYWxlbmRhcihkYXlzLCBkZXB0aCkge1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBjb3JyZWN0IG9yZ2FuaXphdGlvbiBtZXRob2QgYmFzZWQgb24gdGhlIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gJ21vbnRoJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplTW9udGhzKGRheXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXB0aCA9PT0gJ3dlZWsnKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVXZWVrcyhkYXlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICdkYXknKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IGRheXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FsZW5kYXJDb250cm9sbGVyO1xufSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkdGVtcGxhdGVDYWNoZSxcbiAgICAgICAgYmNDYWxlbmRhckNvbmZpZywgYmNDYWxlbmRhclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZyA9IGJjQ2FsZW5kYXJDb25maWc7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UgPSBiY0NhbGVuZGFyU2VydmljZTtcblxuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKCk7XG5cbiAgICB9XG5cblxuXG5cbiAgICBfYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIERlZmluZSB0b2RheSdzIGRhdGVcbiAgICAgICAgdGhpcy50b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YXJ0IGRhdGUgZm9yIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuYmNTdGFydERhdGUgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnN0YXJ0RGF0ZTtcblxuICAgICAgICAvLyBJZiB0aGUgZW5kIGRhdGUgd2FzIGRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMuYmNFbmREYXRlKSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgdXNpbmcgdGhlIGVuZCBkYXRlXG4gICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmR1cmF0aW9uSW5EYXlzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmJjRW5kRGF0ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCBmcm9tIHRoZSBjb3VudCBwYXNzZWQgaW4gb3IgdGhlIGNvbmZpZ1xuICAgICAgICAgICAgdGhpcy5kYXlzID0gcGFyc2VJbnQodGhpcy5iY0RheXMgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheXMsIDEwKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGhvdyBkZWVwIHRvIG9yZ2FuaXplIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9IHRoaXMuYmNOZXN0aW5nRGVwdGggfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm5lc3RpbmdEZXB0aDtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHdlZWtkYXkgaGVhZGVycyBmb3JtYXRcbiAgICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuYmNEYXlUaXRsZUZvcm1hdCA/XG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNEYXlUaXRsZUZvcm1hdF0gOlxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGl0bGVGb3JtYXRdO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZm9ybWF0IGZvciB0aGUgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gdGhpcy5iY01vbnRoVGl0bGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm1vbnRoVGl0bGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gRGVmaW5lIGlmIG1vbnRoIHRpdGxlcyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHR5cGVvZih0aGlzLmJjU2hvd01vbnRoVGl0bGVzKSA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgICAgICAgIHRoaXMuYmNTaG93TW9udGhUaXRsZXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd01vbnRoVGl0bGVzO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSBubyBkYXRlIGlzIHNlbGVjdGVkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhbGVuZGFyIHdlZWtkYXlzIGhlYWRlcnNcbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0eXBlb2YodGhpcy5iY1Nob3dXZWVrZGF5cykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd1dlZWtkYXlzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dXZWVrZGF5cztcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHRlbXBsYXRlIGZvciBhbiBpbmRpdmlkdWFsIGRheVxuICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgb24gdGhlIGRpcmVjdGl2ZVxuICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgaW4gdGhlIHByb3ZpZGVyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUxvY2F0aW9uID0gJ3VzZXJEYXlUZW1wbGF0ZS5odG1sJztcblxuICAgICAgICAgICAgLy8gUHV0IHRoZSB1c2VyIHRlbXBsYXRlIGludG8gdGhlIGNhY2hlXG4gICAgICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZUxvY2F0aW9uLCB0aGlzLmJjRGF5VGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZUxvY2F0aW9uO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgaW4gdGhlIHByb3ZpZGVyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUxvY2F0aW9uID0gJ3VzZXJEYXlUZW1wbGF0ZS5odG1sJztcblxuICAgICAgICAgICAgLy8gUHV0IHRoZSB1c2VyIHRlbXBsYXRlIGludG8gdGhlIGNhY2hlXG4gICAgICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZUxvY2F0aW9uLCB0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGVtcGxhdGVMb2NhdGlvbjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gdGVtcGxhdGUgZnJvbSB0aGUgdXNlclxuXG4gICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGRlZmF1bHQgdGVtcGxhdGUgbG9jYXRpb24gdG8gdGhlIGRpcmVjdGl2ZVxuICAgICAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlUZW1wbGF0ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkYXRlIGZvcm1hdCBmb3IgdGhlIGluZGl2aWR1YWwgZGF5XG4gICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9IHRoaXMuYmNEYXRlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXRlRm9ybWF0O1xuXG4gICAgICAgIC8vIEJ1aWxkIGFycmF5IG9mIGRheXNcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuYnVpbGREYXlzKHRoaXMuZGF5cywgdGhpcy5zdGFydERhdGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBjYWxlbmRhciBKU09OIGFuZCBleHBvc2UgdG8gdGhlIERPTVxuICAgICAgICB0aGlzLl9idWlsZENhbGVuZGFyKGRheXMsIHRoaXMubmVzdGluZ0RlcHRoKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgKi9cbiAgICBpc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuZGF0ZUlzQmVmb3JlVG9kYXkoZGF0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9XG4gICAgICovXG4gICAgaXNEYXlUb2RheShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmlzRGF5VG9kYXkoZGF0ZSwgdGhpcy5zdGFydERhdGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRheVxuICAgICAqL1xuICAgIHNlbGVjdERhdGUoZGF5KSB7XG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgZGF5XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF5O1xuXG4gICAgICAgIC8vIE9ubHkgY2FsbCB0aGUgcGFzc2VkIG1ldGhvZCBpZiBpdCBleGlzdHMgYW5kIGEgdmFsaWQgZGF0ZSB3YXMgY2hvc2VuXG4gICAgICAgIGlmIChkYXkuZGF0ZSAmJiB0aGlzLmJjRGF0ZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJjRGF0ZVNlbGVjdGVkKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgYSBkYXRlIHVzaW5nIG1vbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0XG4gICAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWREYXRlXG4gICAgICovXG4gICAgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGNhbGVuZGFyIEpTT05cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVwdGhcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgX2J1aWxkQ2FsZW5kYXIoZGF5cywgZGVwdGgpIHtcblxuICAgICAgICAvLyBDYWxsIHRoZSBjb3JyZWN0IG9yZ2FuaXphdGlvbiBtZXRob2QgYmFzZWQgb24gdGhlIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgaWYgKGRlcHRoID09PSAnbW9udGgnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5vcmdhbml6ZU1vbnRocyhkYXlzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnd2VlaycpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplV2Vla3MoZGF5cyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXB0aCA9PT0gJ2RheScpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSBkYXlzO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NhbGVuZGFyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sJztcbnZhciBodG1sID0gXCI8c2VjdGlvbiBjbGFzcz1iYy1jYWxlbmRhcj4gPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWtkYXlzIGRhdGEtbmctaWY9XFxcInZtLnNob3dXZWVrZGF5cyAmJiB2bS5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYy1jYWxlbmRhcl9fZGF5IGJjLWNhbGVuZGFyX19kYXktLXdlZWtkYXlzXFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluIHZtLndlZWtkYXlzIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxzdHJvbmcgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aXRsZT4ge3sgZGF5IH19IDwvc3Ryb25nPiA8L3NwYW4+IDwvc3Bhbj4gPGRpdiBkYXRhLW5nLWluY2x1ZGU9dm0uZ2V0VGVtcGxhdGVVcmwoKT48L2Rpdj4gPC9zZWN0aW9uPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMveWVhci5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPWJjLWNhbGVuZGFyX195ZWFyIGRhdGEtbmctcmVwZWF0PVxcXCJ5ZWFyIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8YmMtbW9udGggYmMtY29sbGVjdGlvbj15ZWFyIGJjLXdlZWtzLWhlYWRlcj12bS53ZWVrZGF5c0hlYWRlcj48L2JjLW1vbnRoPiA8L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL3llYXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvbW9udGguaHRtbCc7XG52YXIgaHRtbCA9IFwiPHRpbWUgY2xhc3M9YmMtY2FsZW5kYXJfX21vbnRoIGRhdGV0aW1lPVxcXCJ7eyBtb250aFswXVttb250aFswXS5sZW5ndGggLSAxXS5kYXRlIHwgZGF0ZToneXl5eS1NTScgfX1cXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJtb250aCBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX21vbnRoLXRpdGxlIGRhdGEtbmctYmluZD1cXFwidm0uZm9ybWF0RGF0ZShtb250aFswXVttb250aFswXS5sZW5ndGggLSAxXS5kYXRlLCB2bS5tb250aFRpdGxlRm9ybWF0KVxcXCIgZGF0YS1uZy1pZj12bS5zaG93TW9udGhUaXRsZXM+PC9zcGFuPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vla2RheXMgZGF0YS1uZy1pZj12bS5zaG93V2Vla2RheXM+IDxzcGFuIGNsYXNzPVxcXCJiYy1jYWxlbmRhcl9fZGF5IGJjLWNhbGVuZGFyX19kYXktLXdlZWtkYXlzXFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluIHZtLndlZWtkYXlzIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxzdHJvbmcgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aXRsZT4ge3sgZGF5IH19IDwvc3Ryb25nPiA8L3NwYW4+IDwvc3Bhbj4gPGJjLXdlZWsgYmMtY29sbGVjdGlvbj1tb250aD48L2JjLXdlZWs+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHRpbWUgY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWsgZGF0ZXRpbWU9XFxcInt7IHdlZWtbd2Vlay5sZW5ndGggLSAxXS5kYXRlIHwgZGF0ZToneXl5eS13dycgfX1cXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJ3ZWVrIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8YmMtZGF5IGJjLWNvbGxlY3Rpb249d2Vlaz48L2JjLWRheT4gPC90aW1lPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX2RheSBkYXRhLW5nLWNsYXNzPVxcXCJ7ICdiYy1jYWxlbmRhcl9fZGF5LS1kaXNhYmxlZCc6IHZtLmlzQmVmb3JlVG9kYXkoZGF5LmRhdGUpLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tdG9kYXknOiB2bS5pc0RheVRvZGF5KGRheS5kYXRlKSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLWV2ZW4nOiAkZXZlbixcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLW9kZCc6ICRvZGQsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1wYWQnOiAhZGF5LmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS12YWxpZCc6IGRheS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tc2VsZWN0ZWQnOiBkYXkuZGF0ZSA9PT0gdm0uc2VsZWN0ZWREYXRlLmRhdGUgfVxcXCIgZGF0YS1uZy1jbGljaz12bS5zZWxlY3REYXRlKGRheSkgZGF0YS1uZy1yZXBlYXQ9XFxcImRheSBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIiB0aXRsZT1kYXkuZGF0ZT4gPG5nLWluY2x1ZGUgc3JjPXZtLmRheVRlbXBsYXRlPjwvbmctaW5jbHVkZT4gPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmNNb250aERpcmVjdGl2ZSA9IGJjTW9udGhEaXJlY3RpdmU7XG5cbnZhciBfbW9udGggPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9tb250aC5odG1sJyk7XG5cbnZhciBfbW9udGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9udGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBiY01vbnRoRGlyZWN0aXZlKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nLFxuICAgICAgICAgICAgYmNXZWVrZGF5c0hlYWRlcjogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBfbW9udGgyLmRlZmF1bHQsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9udGguZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IG1vbnRoVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvbW9udGguaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY01vbnRoRGlyZWN0aXZlKFxuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgICAgIGJjV2Vla2RheXNIZWFkZXI6ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IG1vbnRoVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL21vbnRoLmRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5iY1dlZWtEaXJlY3RpdmUgPSBiY1dlZWtEaXJlY3RpdmU7XG5cbnZhciBfd2VlayA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCcpO1xuXG52YXIgX3dlZWsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vlayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJjV2Vla0RpcmVjdGl2ZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogX3dlZWsyLmRlZmF1bHQsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd2Vlay5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1dlZWtEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogd2Vla1RlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJjRGF5RGlyZWN0aXZlID0gYmNEYXlEaXJlY3RpdmU7XG5cbnZhciBfZGF5ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZGF5Lmh0bWwnKTtcblxudmFyIF9kYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYmNEYXlEaXJlY3RpdmUoYmNDYWxlbmRhckNvbmZpZykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBfZGF5Mi5kZWZhdWx0LFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RheS5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgZGF5V3JhcHBlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjRGF5RGlyZWN0aXZlKFxuICAgIGJjQ2FsZW5kYXJDb25maWdcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBkYXlXcmFwcGVyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvZGF5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=