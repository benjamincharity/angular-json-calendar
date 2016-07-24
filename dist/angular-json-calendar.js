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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YzU0ZjY3YWFlYjNiZGE2Y2E0MiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzPzFmMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci5wcm92aWRlci5qcz9iMmY3Iiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanM/ODcyOCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanM/ZDRhYSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcz82YjUzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3llYXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9kYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9udGguZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanM/MzY5YiIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vlay5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzPzJkNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RheS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RheS5kaXJlY3RpdmUuanM/ZGU2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztLQUN6QyxPQUFPOzs7QUNIWDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QURhQSxTQUFRLFVDWE8sUUFBUSxPQUFPLG1CQUFtQixJQUM1QyxTQUFTLG9CQURDLDRCQUVWLFFBQVEscUJBRkUsOEJBR1YsVUFBVSxjQUhBLGdDQUlWLFVBQVUsV0FKQSx5QkFLVixVQUFVLFVBTEEsdUJBTVYsVUFBVSxTQU5BLHFCOzs7Ozs7QUNQZjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0tBQ3pDLE9BQU87O0FBRVgsU0FBUSxtQkFBbUI7O0FBRTNCLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJB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QUFJLFVBQVUsdUJBQXVCOztBQUVyQyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUNUaEYsVUFBUyxtQkFDZDtLQUNFOztLQUVBLElBQU0sWUFBWTtTQUNkLFVBQVU7U0FDVixTQUFTO1NBQ1QsT0FBTztTQUNQLGtCQUFrQjthQUNkLGNBQWM7YUFDZCxrQkFBa0I7O1NBRXRCO1NBQ0EsWUFBWSxzQkFBTTtTQUNsQixjQUFjOzs7S0FHbEIsT0FBTzs7Ozs7OztBQ25CWDs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0tBQ3pDLE9BQU87O0FBRVgsU0NIZ0I7O0FBRmhCOztBRFNBLEtBQUksU0FBUyx1QkFBdUI7O0FBRXBDLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQ1RoRixVQUFTLGtCQUNkO0tBQ0U7O0tBRUEsSUFBTSxZQUFZO1NBQ2QsVUFBVTtTQUNWLFNBQVM7U0FDVCxPQUFPO1NBQ1Asa0JBQWtCO2FBQ2QsY0FBYzs7U0FFbEI7U0FDQSxZQUFZLHNCQUFNO1NBQ2xCLGNBQWM7OztLQUdsQixPQUFPOzs7Ozs7O0FDbEJYOzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0tBQ3pDLE9BQU87O0FBRVgsU0NIZ0I7O0FBRmhCOztBRFNBLEtBQUksUUFBUSx1QkFBdUI7O0FBRW5DLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQ1RoRixVQUFTLGVBQ1osa0JBQ0Y7S0FDRTs7S0FFQSxJQUFNLFlBQVk7U0FDZCxVQUFVO1NBQ1YsU0FBUztTQUNULE9BQU87U0FDUCxrQkFBa0I7YUFDZCxjQUFjOztTQUVsQjtTQUNBLFlBQVksc0JBQU07U0FDbEIsY0FBYzs7O0tBR2xCLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1qc29uLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOGM1NGY2N2FhZWIzYmRhNmNhNDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxlbmRhciA9IHJlcXVpcmUoJy4vY2FsZW5kYXIucHJvdmlkZXInKTtcblxudmFyIF9jYWxlbmRhcjIgPSByZXF1aXJlKCcuL2NhbGVuZGFyLnNlcnZpY2UnKTtcblxudmFyIF9jYWxlbmRhcjMgPSByZXF1aXJlKCcuL2NhbGVuZGFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX21vbnRoID0gcmVxdWlyZSgnLi9tb250aC5kaXJlY3RpdmUnKTtcblxudmFyIF93ZWVrID0gcmVxdWlyZSgnLi93ZWVrLmRpcmVjdGl2ZScpO1xuXG52YXIgX2RheSA9IHJlcXVpcmUoJy4vZGF5LmRpcmVjdGl2ZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhbmd1bGFyLm1vZHVsZSgnYmMuSnNvbkNhbGVuZGFyJywgW10pLnByb3ZpZGVyKCdiY0NhbGVuZGFyQ29uZmlnJywgX2NhbGVuZGFyLmJjQ2FsZW5kYXJDb25maWcpLnNlcnZpY2UoJ2JjQ2FsZW5kYXJTZXJ2aWNlJywgX2NhbGVuZGFyMi5iY0NhbGVuZGFyU2VydmljZSkuZGlyZWN0aXZlKCdiY0NhbGVuZGFyJywgX2NhbGVuZGFyMy5iY0NhbGVuZGFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2JjTW9udGgnLCBfbW9udGguYmNNb250aERpcmVjdGl2ZSkuZGlyZWN0aXZlKCdiY1dlZWsnLCBfd2Vlay5iY1dlZWtEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnYmNEYXknLCBfZGF5LmJjRGF5RGlyZWN0aXZlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7IGJjQ2FsZW5kYXJDb25maWcgfSBmcm9tICcuL2NhbGVuZGFyLnByb3ZpZGVyJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY01vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi9tb250aC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNXZWVrRGlyZWN0aXZlIH0gZnJvbSAnLi93ZWVrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY0RheURpcmVjdGl2ZSB9IGZyb20gJy4vZGF5LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdiYy5Kc29uQ2FsZW5kYXInLCBbXSlcbiAgICAucHJvdmlkZXIoJ2JjQ2FsZW5kYXJDb25maWcnLCBiY0NhbGVuZGFyQ29uZmlnKVxuICAgIC5zZXJ2aWNlKCdiY0NhbGVuZGFyU2VydmljZScsIGJjQ2FsZW5kYXJTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ2JjQ2FsZW5kYXInLCBiY0NhbGVuZGFyRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjTW9udGgnLCBiY01vbnRoRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjV2VlaycsIGJjV2Vla0RpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY0RheScsIGJjRGF5RGlyZWN0aXZlKVxuO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5iY0NhbGVuZGFyQ29uZmlnID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RheUlubmVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnKTtcblxudmFyIF9kYXlJbm5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXlJbm5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBiY0NhbGVuZGFyQ29uZmlnID0gZXhwb3J0cy5iY0NhbGVuZGFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gRGVmaW5lIGRlZmF1bHRzXG4gICAgZnVuY3Rpb24gYmNDYWxlbmRhckNvbmZpZygpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAvLyBUaGUgY2FsZW5kYXIgd2lsbCBiZWdpbiB3aXRoIHRvZGF5XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYmNDYWxlbmRhckNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgaW50ZXJ2YWwgdHlwZSBbZGF5fHdlZWt8bW9udGhdXG4gICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gJ21vbnRoJztcblxuICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5kYXlzID0gMzA7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaWZmZXJlbnQgcG9zc2libGUgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWVrZGF5XG4gICAgICAgIHRoaXMud2Vla2RheVN0eWxlID0ge1xuICAgICAgICAgICAgbGV0dGVyOiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J10sXG4gICAgICAgICAgICB3b3JkOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgdGhlIGRlZmF1bHQgd29yZCB0eXBlIChNIHZzIE1vbiB2cyBNb25kYXkpXG4gICAgICAgIHRoaXMuZGF5VGl0bGVGb3JtYXQgPSAnYWJicmV2aWF0aW9uJztcblxuICAgICAgICAvLyBTaG91bGQgdGhlIGNhbGVuZGFyIHNob3cgdGhlIHdlZWtkYXkgbmFtZXMgYWJvdmUgZWFjaCBjb2x1bW4/XG4gICAgICAgIHRoaXMuc2hvd1dlZWtkYXlzID0gdHJ1ZTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgdGVtcGxhdGUgZm9yIGEgZGF5XG4gICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSBfZGF5SW5uZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2V0IGEgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIHRoaXMuc2V0RGF5VGVtcGxhdGUgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIF90aGlzLnVzZXJEYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCBmb3JtYXQgZm9yIGEgZGF5XG4gICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9ICdEJztcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgZm9ybWF0IGZvciBhIG1vbnRoIHRpdGxlXG4gICAgICAgIHRoaXMubW9udGhUaXRsZUZvcm1hdCA9ICdNTU1NJztcblxuICAgICAgICAvLyBTaG91bGQgbW9udGggdGl0bGVzIGJlIHNob3duIGJ5IGRlZmF1bHQ/XG4gICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoYmNDYWxlbmRhckNvbmZpZywgW3tcbiAgICAgICAga2V5OiAnJGdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAkZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gYmNDYWxlbmRhckNvbmZpZztcbn0oKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5wcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbCc7XG5cbmV4cG9ydCBjbGFzcyBiY0NhbGVuZGFyQ29uZmlnIHtcblxuICAgIC8vIERlZmluZSBkZWZhdWx0c1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIC8vIFRoZSBjYWxlbmRhciB3aWxsIGJlZ2luIHdpdGggdG9kYXlcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgaW50ZXJ2YWwgdHlwZSBbZGF5fHdlZWt8bW9udGhdXG4gICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gJ21vbnRoJztcblxuICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5kYXlzID0gMzA7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaWZmZXJlbnQgcG9zc2libGUgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWVrZGF5XG4gICAgICAgIHRoaXMud2Vla2RheVN0eWxlID0ge1xuICAgICAgICAgICAgbGV0dGVyOiBbXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ1cnLFxuICAgICAgICAgICAgICAgICdUJyxcbiAgICAgICAgICAgICAgICAnRicsXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogW1xuICAgICAgICAgICAgICAgICdTdW4nLFxuICAgICAgICAgICAgICAgICdNb24nLFxuICAgICAgICAgICAgICAgICdUdWUnLFxuICAgICAgICAgICAgICAgICdXZWQnLFxuICAgICAgICAgICAgICAgICdUaHVyJyxcbiAgICAgICAgICAgICAgICAnRnJpJyxcbiAgICAgICAgICAgICAgICAnU2F0JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3b3JkOiBbXG4gICAgICAgICAgICAgICAgJ1N1bmRheScsXG4gICAgICAgICAgICAgICAgJ01vbmRheScsXG4gICAgICAgICAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAgICAgICAgICdXZWRuZXNkYXknLFxuICAgICAgICAgICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICAgICAgICAgJ1NhdHVyZGF5JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBkZWZhdWx0IHdvcmQgdHlwZSAoTSB2cyBNb24gdnMgTW9uZGF5KVxuICAgICAgICB0aGlzLmRheVRpdGxlRm9ybWF0ID0gJ2FiYnJldmlhdGlvbic7XG5cbiAgICAgICAgLy8gU2hvdWxkIHRoZSBjYWxlbmRhciBzaG93IHRoZSB3ZWVrZGF5IG5hbWVzIGFib3ZlIGVhY2ggY29sdW1uP1xuICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHRydWU7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGZvciBhIGRheVxuICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gZGF5VGVtcGxhdGU7XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2V0IGEgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIHRoaXMuc2V0RGF5VGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckRheVRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgZm9ybWF0IGZvciBhIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnRCc7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBtb250aCB0aXRsZVxuICAgICAgICB0aGlzLm1vbnRoVGl0bGVGb3JtYXQgPSAnTU1NTSdcblxuICAgICAgICAvLyBTaG91bGQgbW9udGggdGl0bGVzIGJlIHNob3duIGJ5IGRlZmF1bHQ/XG4gICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHJ1ZTtcblxuICAgIH1cblxuXG5cblxuICAgICRnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGRhdGV0aW1lPVxcXCJ7eyBkYXkuZGF0ZSB8IGRhdGU6J3l5eXktTU0tZGQnIH19XFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpbWUgdGl0bGU9XFxcInt7IGRheS5kYXRlIH19XFxcIiBkYXRhLW5nLWlmPWRheS5kYXRlPiA8c3BhbiBkYXRhLW5nLWJpbmQ9XFxcInZtLmZvcm1hdERhdGUoZGF5LmRhdGUsIHZtLmRhdGVGb3JtYXQpXFxcIj48L3NwYW4+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGJjQ2FsZW5kYXJTZXJ2aWNlID0gZXhwb3J0cy5iY0NhbGVuZGFyU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBiY0NhbGVuZGFyU2VydmljZSgpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYmNDYWxlbmRhclNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuV0VFS19MRU5HVEggPSA3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IGlzIHByaW9yIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgdW5zZWxlY3RhYmxlIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNCZWZvcmVcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKGJjQ2FsZW5kYXJTZXJ2aWNlLCBbe1xuICAgICAgICBrZXk6ICdkYXRlSXNCZWZvcmVUb2RheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRlSXNCZWZvcmVUb2RheShkYXRlKSB7XG4gICAgICAgICAgICB2YXIgdG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaXNCZWZvcmUodG9kYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZTJcbiAgICAgICAgICogQHJldHVybiB7Qm9vbH0gaXNUb2RheVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNEYXlUb2RheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RheVRvZGF5KGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlMiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoKSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc1NhbWUoZGF0ZTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR1cm4gYSBpbnRlZ2VyIChlLmcuICc2JykgaW50byBhbiBhcnJheTogJ1sxLDIsMyw0LDUsNl0nXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IGRheXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ludGVnZXJUb0FycmF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGludGVnZXJUb0FycmF5KGNvdW50KSB7XG4gICAgICAgICAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkYXlzID0gW107XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYWQgdGhlIGJlZ2lubmluZyBvZiBhIHdlZWtcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0RGF0ZSAtIGRhdGUgdG8gdG8gd29yayBiYWNrIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY291bnQgLSBob3cgbWFueSBkYXlzIHRvIHBhZFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYWREYXlzTGVmdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYWREYXlzTGVmdChzdGFydERhdGUsIGNvdW50KSB7XG4gICAgICAgICAgICB2YXIgcGFkID0gW107XG4gICAgICAgICAgICB2YXIgbWlzc2luZ0RheXMgPSB0aGlzLmludGVnZXJUb0FycmF5KGNvdW50KTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG1pc3NpbmcgZGF5c1xuICAgICAgICAgICAgZm9yICh2YXIgZGF5IGluIG1pc3NpbmdEYXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgZGF5cyB0byBnbyBiYWNrXG4gICAgICAgICAgICAgICAgdmFyIHN1YnRyYWN0aW9uID0gcGFyc2VJbnQoZGF5LCAxMCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGF0IGRheVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KHN1YnRyYWN0aW9uLCAnZGF5cycpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBwYWQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHByZXZpb3VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFkIGEgY29sbGVjdGlvbiB3aXRoIGJsYW5rIHRpbGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtJbnRlZ2VyfSBjb3VudFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkZGVkQ29sbGVjdGlvblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGFkQmxhbmtUaWxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYWRCbGFua1RpbGVzKGNvbGxlY3Rpb24sIGNvdW50KSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ2xlZnQnIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkYXlzID0gW107XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhcnJheVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGRpcmVjdGlvbiBpcyAncmlnaHQnXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgLy8gcGFkIHRoZSBlbmRcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb25jYXQoZGF5cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHBhZCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwbGl0IGFuIGFycmF5IGludG8gY2h1bmtzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdGhlc2UgY2h1bmtzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gZ3JvdXBzaXplIC0gQ2h1bmsgc2l6ZS4gRGVmYXVsdHMgdG8gNyAob25lIHdlZWspLlxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gY2h1bmtzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaHVuaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaHVuayhncm91cCkge1xuICAgICAgICAgICAgdmFyIGdyb3Vwc2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuV0VFS19MRU5HVEggOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgICAgIHZhciBzZXRzID0gW107XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB2YXIgY2h1bmtzID0gZ3JvdXAubGVuZ3RoIC8gcGFyc2VJbnQoZ3JvdXBzaXplLCAxMCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChpIDwgY2h1bmtzKSB7XG4gICAgICAgICAgICAgICAgc2V0c1tpXSA9IGdyb3VwLnNwbGljZSgwLCBncm91cHNpemUpO1xuICAgICAgICAgICAgICAgIGkgPSBpICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNldHM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBkdXJhdGlvbiBpbiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzIElOQ0xVRElORyBib3RoIGRhdGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kXG4gICAgICAgICAqIEByZXR1cm4ge0ludGVnZXJ9IGRheXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2R1cmF0aW9uSW5EYXlzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGR1cmF0aW9uSW5EYXlzKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IG1vbWVudChzdGFydCkuc3RhcnRPZignZGF5Jyk7XG4gICAgICAgICAgICAvLyBBZGQgYSBkYXkgc28gdGhlIGVuZCBkYXRlIGlzIGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IG1vbWVudChlbmQpLnN0YXJ0T2YoJ2RheScpLmFkZCgxLCAnZGF5cycpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3RW5kLmRpZmYobmV3U3RhcnQsICdkYXlzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT3JnYW5pemUgYSBjb2xsZWN0aW9uIG9mIGRheXMgaW50byBzdWIgY29sbGVjdGlvbnMgb2Ygd2Vla3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF5cyAtIGFycmF5IG9mIGRheXNcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29yZ2FuaXplV2Vla3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb3JnYW5pemVXZWVrcyhkYXlzKSB7XG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGRheSBvZiB0aGUgd2VlayB0aGF0IHRoZSBjYWxlbmRhciBzdGFydHMgYW5kIGVuZHMgb25cbiAgICAgICAgICAgIHZhciBmaXJzdERheSA9IG1vbWVudChkYXlzWzBdLmRhdGUpLmRheSgpO1xuICAgICAgICAgICAgdmFyIGxhc3REYXkgPSBtb21lbnQoZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUpLmRheSgpO1xuICAgICAgICAgICAgdmFyIFNBVFVSREFZID0gNjtcbiAgICAgICAgICAgIHZhciBTVU5EQVkgPSAwO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIGFmdGVyIFN1bmRheVxuICAgICAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cywgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBsYXN0IGRheSBpcyBiZWZvcmUgU2F0dXJkYXlcbiAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBsYXN0IHdlZWsncyBkYXlzIGFyZSBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cywgdGhpcy5XRUVLX0xFTkdUSCAtIChsYXN0RGF5ICsgMSksICdyaWdodCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaHVuayhkYXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcmdhbml6ZSBieSBtb250aFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxEYXlzIC0gQW4gYXJyYXkgb2YgYWxsIGRheXNcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IGNvbGxlY3Rpb24gLSBkYXlzIG9yZ2FuaXplZCBpbnRvIHdlZWtzIGFuZCBtb250aHNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29yZ2FuaXplTW9udGhzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9yZ2FuaXplTW9udGhzKGFsbERheXMpIHtcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IFtdO1xuICAgICAgICAgICAgdmFyIFNBVFVSREFZID0gNjtcbiAgICAgICAgICAgIHZhciBTVU5EQVkgPSAwO1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBhbGxEYXlzO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG4gICAgICAgICAgICB2YXIgZGF5c0luTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXlzSW5Nb250aCgpO1xuXG4gICAgICAgICAgICAvLyBQYWQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGggd2l0aCBhbnkgbWlzc2luZyBkYXlzXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIG5vdCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgICAgICAgICAgaWYgKG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRhdGUoKSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBQdWxsIHRoaXMgbW9udGgncyBkYXlzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc2xpY2UoMCwgZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpbGwgdGhlIG1pc3NpbmcgZGF5cyBmcm9tIHRoZSBtb250aFxuICAgICAgICAgICAgICAgIHZhciBwYWQgPSB0aGlzLnBhZERheXNMZWZ0KG1vbnRoWzBdLmRhdGUsIGRheU9mTW9udGggLSAxKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbWJpbmUgd2l0aCB0aGUgZXhpc3RpbmcgYXJyYXlcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gcGFkLmNvbmNhdChjb2xsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3BsaXQgaW50byBtb250aHNcbiAgICAgICAgICAgIC8vIEFzIGxvbmcgYXMgdGhlcmUgYXJlIGRheXMgbGVmdCBpbiB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgd2hpbGUgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoIGZvciB0aGUgZmlyc3QgZGF0ZSBvZiB0aGUgY29sbGVjdGlvbiBlZy4gJzI0J1xuICAgICAgICAgICAgICAgIGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0aGVyZSBhcmUgdGhpcyBtb250aCAodG90YWwpXG4gICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXlzSW5Nb250aCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNwbGljZSgwLCBkYXlzSW5Nb250aCAtIChkYXlPZk1vbnRoIC0gMSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIHByaW9yIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhpcyBtb250aD9cbiAgICAgICAgICAgICAgICB2YXIgZmlyc3REYXkgPSBtb21lbnQobW9udGhbMF0uZGF0ZSkuZGF5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIGFmdGVyIFN1bmRheVxuICAgICAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3QgY29sdW1uXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5wYWRCbGFua1RpbGVzKG1vbnRoLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIb3cgbWFueSB3ZWVrZGF5cyBhcmUgYWZ0ZXIgdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aD9cbiAgICAgICAgICAgICAgICAvLyAocmVtZW1iZXI6IHdlZWtzIGFyZSB6ZXJvLWJhc2VkKVxuICAgICAgICAgICAgICAgIHZhciBsYXN0RGF5ID0gbW9tZW50KG1vbnRoW21vbnRoLmxlbmd0aCAtIDFdLmRhdGUpLmRheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYmxhbmsgdGlsZXMgYXJlIG5lZWRlZCBmb3IgdGhlIGxhc3Qgd2Vla1xuICAgICAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IGNvbHVtblxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgdGhpcy5XRUVLX0xFTkdUSCAtIChsYXN0RGF5ICsgMSksICdyaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9yZ2FuaXplIGludG8gd2Vla3MgYW5kIGFkZCB0byB0aGUgY2FsZW5kYXIgYXJyYXlcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5wdXNoKHRoaXMuY2h1bmsobW9udGgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkIGFuIGFycmF5IG9mIGRheXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtJbnRlZ2VyfSBsaW1pdCAtIGhvdyBtYW55IGRheXMgdG8gY3JlYXRlXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydCAtIHRoZSBzdGFydGluZyBkYXRlXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidWlsZERheXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXlzKGxpbWl0KSB7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBuZXcgRGF0ZSgpIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIGRheSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZGF5XG4gICAgICAgICAgICAgICAgZGF5ID0gbW9tZW50KHN0YXJ0KS5hZGQoY291bnRlciwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRheVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBiY0NhbGVuZGFyU2VydmljZTtcbn0oKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGJjQ2FsZW5kYXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuV0VFS19MRU5HVEggPSA3O1xuXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc0JlZm9yZVxuICAgICAqL1xuICAgIGRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc0JlZm9yZSh0b2RheSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGUyXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNUb2RheVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSwgZGF0ZTIgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc1NhbWUoZGF0ZTIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVHVybiBhIGludGVnZXIgKGUuZy4gJzYnKSBpbnRvIGFuIGFycmF5OiAnWzEsMiwzLDQsNSw2XSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gZGF5c1xuICAgICAqL1xuICAgIGludGVnZXJUb0FycmF5KGNvdW50KSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFkIHRoZSBiZWdpbm5pbmcgb2YgYSB3ZWVrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnREYXRlIC0gZGF0ZSB0byB0byB3b3JrIGJhY2sgZnJvbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvdW50IC0gaG93IG1hbnkgZGF5cyB0byBwYWRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkXG4gICAgICovXG4gICAgcGFkRGF5c0xlZnQoc3RhcnREYXRlLCBjb3VudCkge1xuICAgICAgICBjb25zdCBwYWQgPSBbXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0RheXMgPSB0aGlzLmludGVnZXJUb0FycmF5KGNvdW50KTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggbWlzc2luZyBkYXlzXG4gICAgICAgIGZvciAoY29uc3QgZGF5IGluIG1pc3NpbmdEYXlzKSB7XG4gICAgICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHRvIGdvIGJhY2tcbiAgICAgICAgICAgIGNvbnN0IHN1YnRyYWN0aW9uID0gcGFyc2VJbnQoZGF5LCAxMCkgKyAxO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoYXQgZGF5XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KChzdWJ0cmFjdGlvbiksICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBwYWQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogcHJldmlvdXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgYSBjb2xsZWN0aW9uIHdpdGggYmxhbmsgdGlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IHBhZGRlZENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBwYWRCbGFua1RpbGVzKGNvbGxlY3Rpb24sIGNvdW50LCBkaXJlY3Rpb24gPSAnbGVmdCcpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICAvLyBDcmVhdGUgYXJyYXlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZGlyZWN0aW9uIGlzICdyaWdodCdcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gcGFkIHRoZSBlbmRcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChkYXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHBhZCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICByZXR1cm4gZGF5cy5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgYW4gYXJyYXkgaW50byBjaHVua3MgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aGVzZSBjaHVua3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBncm91cHNpemUgLSBDaHVuayBzaXplLiBEZWZhdWx0cyB0byA3IChvbmUgd2VlaykuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNodW5rc1xuICAgICAqL1xuICAgIGNodW5rKGdyb3VwLCBncm91cHNpemUgPSB0aGlzLldFRUtfTEVOR1RIKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBjaHVua3MgPSBncm91cC5sZW5ndGggLyBwYXJzZUludChncm91cHNpemUsIDEwKTtcblxuICAgICAgICB3aGlsZShpIDwgY2h1bmtzKSB7XG4gICAgICAgICAgICBzZXRzW2ldID0gZ3JvdXAuc3BsaWNlKDAsIGdyb3Vwc2l6ZSk7XG4gICAgICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIHR3byBkYXRlcyBJTkNMVURJTkcgYm90aCBkYXRlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZFxuICAgICAqIEByZXR1cm4ge0ludGVnZXJ9IGRheXNcbiAgICAgKi9cbiAgICBkdXJhdGlvbkluRGF5cyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gbW9tZW50KHN0YXJ0KS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgLy8gQWRkIGEgZGF5IHNvIHRoZSBlbmQgZGF0ZSBpcyBpbmNsdWRlZCBpbiB0aGUgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbmV3RW5kID0gbW9tZW50KGVuZCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VuZC5kaWZmKG5ld1N0YXJ0LCAgJ2RheXMnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGEgY29sbGVjdGlvbiBvZiBkYXlzIGludG8gc3ViIGNvbGxlY3Rpb25zIG9mIHdlZWtzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzIC0gYXJyYXkgb2YgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgb3JnYW5pemVXZWVrcyhkYXlzKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRoYXQgdGhlIGNhbGVuZGFyIHN0YXJ0cyBhbmQgZW5kcyBvblxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChkYXlzWzBdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBsYXN0RGF5ID0gbW9tZW50KGRheXNbZGF5cy5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgYWZ0ZXIgU3VuZGF5XG4gICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGRheSBpcyBiZWZvcmUgU2F0dXJkYXlcbiAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgbGFzdCB3ZWVrJ3MgZGF5cyBhcmUgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cyx0aGlzLldFRUtfTEVOR1RIIC0gKGxhc3REYXkgKyAxKSwgJ3JpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaHVuayhkYXlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGJ5IG1vbnRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxEYXlzIC0gQW4gYXJyYXkgb2YgYWxsIGRheXNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY29sbGVjdGlvbiAtIGRheXMgb3JnYW5pemVkIGludG8gd2Vla3MgYW5kIG1vbnRoc1xuICAgICAqL1xuICAgIG9yZ2FuaXplTW9udGhzKGFsbERheXMpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBbXTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IGFsbERheXM7XG4gICAgICAgIGxldCBtb250aDtcbiAgICAgICAgbGV0IGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgLy8gUGFkIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIHdpdGggYW55IG1pc3NpbmcgZGF5c1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIG5vdCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgICAgICBpZiAobW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpID4gMCkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc2xpY2UoMCwgKGRheXNJbk1vbnRoIC0gKGRheU9mTW9udGggLSAxKSkpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIHRoZSBtaXNzaW5nIGRheXMgZnJvbSB0aGUgbW9udGhcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IHRoaXMucGFkRGF5c0xlZnQobW9udGhbMF0uZGF0ZSwgKGRheU9mTW9udGggLSAxKSk7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgd2l0aCB0aGUgZXhpc3RpbmcgYXJyYXlcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBwYWQuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTcGxpdCBpbnRvIG1vbnRoc1xuICAgICAgICAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBkYXlzIGxlZnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgd2hpbGUgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIHRoZSBmaXJzdCBkYXRlIG9mIHRoZSBjb2xsZWN0aW9uIGVnLiAnMjQnXG4gICAgICAgICAgICBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0aGVyZSBhcmUgdGhpcyBtb250aCAodG90YWwpXG4gICAgICAgICAgICBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgICAgIC8vIFB1bGwgdGhpcyBtb250aCdzIGRheXMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNwbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBwcmlvciB0byB0aGUgZmlyc3QgZGF5IG9mIHRoaXMgbW9udGg/XG4gICAgICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChtb250aFswXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBhZnRlciB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoP1xuICAgICAgICAgICAgLy8gKHJlbWVtYmVyOiB3ZWVrcyBhcmUgemVyby1iYXNlZClcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQobW9udGhbbW9udGgubGVuZ3RoIC0gMV0uZGF0ZSkuZGF5KCk7XG5cbiAgICAgICAgICAgIC8vIElmIGJsYW5rIHRpbGVzIGFyZSBuZWVkZWQgZm9yIHRoZSBsYXN0IHdlZWtcbiAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3QgY29sdW1uXG4gICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLnBhZEJsYW5rVGlsZXMobW9udGgsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JnYW5pemUgaW50byB3ZWVrcyBhbmQgYWRkIHRvIHRoZSBjYWxlbmRhciBhcnJheVxuICAgICAgICAgICAgY2FsZW5kYXIucHVzaCh0aGlzLmNodW5rKG1vbnRoKSk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbiBhcnJheSBvZiBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGxpbWl0IC0gaG93IG1hbnkgZGF5cyB0byBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZVxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgYnVpbGREYXlzKGxpbWl0LCBzdGFydCA9IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGxldCBkYXk7XG5cbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsaW1pdCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkYXlcbiAgICAgICAgICAgIGRheSA9IG1vbWVudChzdGFydCkuYWRkKGNvdW50ZXIsICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jYWxlbmRhci5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJjQ2FsZW5kYXJEaXJlY3RpdmUgPSBiY0NhbGVuZGFyRGlyZWN0aXZlO1xuXG52YXIgX2NhbGVuZGFyID0gcmVxdWlyZSgnLi9jYWxlbmRhci5jb250cm9sbGVyJyk7XG5cbnZhciBfY2FsZW5kYXIyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCcpO1xuXG52YXIgX2NhbGVuZGFyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGVuZGFyMik7XG5cbnZhciBfeWVhciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3llYXIuaHRtbCcpO1xuXG52YXIgX3llYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfeWVhcik7XG5cbnZhciBfbW9udGggPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9tb250aC5odG1sJyk7XG5cbnZhciBfbW9udGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9udGgpO1xuXG52YXIgX3dlZWsgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy93ZWVrLmh0bWwnKTtcblxudmFyIF93ZWVrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dlZWspO1xuXG52YXIgX2RheSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2RheS5odG1sJyk7XG5cbnZhciBfZGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJjQ2FsZW5kYXJEaXJlY3RpdmUoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIERlZmluZSBwb3NzaWJsZSB0ZW1wbGF0ZXNcblxuICAgIHZhciB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgIHllYXI6IF95ZWFyMi5kZWZhdWx0LFxuICAgICAgICBtb250aDogX21vbnRoMi5kZWZhdWx0LFxuICAgICAgICB3ZWVrOiBfd2VlazIuZGVmYXVsdCxcbiAgICAgICAgZGF5OiBfZGF5Mi5kZWZhdWx0XG4gICAgfTtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNTdGFydERhdGU6ICdAPycsIC8vIGRhdGUgLSBkZWZhdWx0IHRvIHRvZGF5XG4gICAgICAgICAgICBiY0VuZERhdGU6ICdAPycsIC8vIGRhdGUgLSBpZiBub3QgcHJlc2VudCwgdXNlIGNyZWF0ZSB1c2luZyBiY0RheXNcbiAgICAgICAgICAgIGJjTmVzdGluZ0RlcHRoOiAnQD8nLCAvLyBzdHJpbmcgW21vbnRofHdlZWt8ZGF5XSAtIGRlZmF1bHRzOiBtb250aFxuICAgICAgICAgICAgYmNEYXlzOiAnQD8nLCAvLyBpbnRlZ2VyIC0gZGVmYXVsdCB0byAzMCAodXNlZCB0byBjcmVhdGUgYmNFbmREYXRlKVxuICAgICAgICAgICAgYmNEYXlUaXRsZUZvcm1hdDogJ0A/JywgLy8gc3RyaW5nIFt3b3JkfGFiYnJldmlhdGlvbnxsZXR0ZXJdIC0gZGVmYXVsdDogYWJicmV2aWF0aW9uXG4gICAgICAgICAgICBiY01vbnRoVGl0bGVGb3JtYXQ6ICdAPycsIC8vIHN0cmluZyAtIGFueSB2YWxpZCBNb21lbnQgZGF0ZSBmb3JtYXQgLSBkZWZhdWx0OiBNTU1NXG4gICAgICAgICAgICBiY0RhdGVTZWxlY3RlZDogJyYnLCAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZCAodGFwL2NsaWNrKVxuICAgICAgICAgICAgYmNTaG93V2Vla2RheXM6ICc9PycsIC8vIGRldGVybWluZSBpZiB0aGUgd2Vla2RheXMgaGVhZGVyIHNob3VsZCBiZSBjcmVhdGVkXG4gICAgICAgICAgICBiY1Nob3dNb250aFRpdGxlczogJz0/JywgLy8gZGV0ZXJtaW5lIGlmIHRoZSBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIGJjRGF5VGVtcGxhdGU6ICdAPycsIC8vIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCAnZGF5JyB0ZW1wbGF0ZVxuICAgICAgICAgICAgYmNEYXRlRm9ybWF0OiAnQD8nIH0sXG4gICAgICAgIGxpbms6IGxpbmtGdW5jdGlvbixcbiAgICAgICAgdGVtcGxhdGVVcmw6IF9jYWxlbmRhcjMuZGVmYXVsdCxcbiAgICAgICAgY29udHJvbGxlcjogX2NhbGVuZGFyLkNhbGVuZGFyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBMaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua0Z1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgdm0pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGRlc2lyZWQgbmVzdGluZyBkZXB0aFxuICAgICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXNbdm0ubmVzdGluZ0RlcHRoXTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb250cm9sbGVyIH0gZnJvbSAnLi9jYWxlbmRhci5jb250cm9sbGVyJztcbmltcG9ydCBjYWxlbmRhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xuaW1wb3J0IHllYXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy95ZWFyLmh0bWwnO1xuaW1wb3J0IG1vbnRoVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvbW9udGguaHRtbCc7XG5pbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5pbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5Lmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNDYWxlbmRhckRpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBEZWZpbmUgcG9zc2libGUgdGVtcGxhdGVzXG4gICAgY29uc3QgdGVtcGxhdGVzID0ge1xuICAgICAgICB5ZWFyOiB5ZWFyVGVtcGxhdGUsXG4gICAgICAgIG1vbnRoOiBtb250aFRlbXBsYXRlLFxuICAgICAgICB3ZWVrOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGRheTogZGF5VGVtcGxhdGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY1N0YXJ0RGF0ZTogJ0A/JywgICAgICAgLy8gZGF0ZSAtIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgICAgIGJjRW5kRGF0ZTogJ0A/JywgICAgICAgICAvLyBkYXRlIC0gaWYgbm90IHByZXNlbnQsIHVzZSBjcmVhdGUgdXNpbmcgYmNEYXlzXG4gICAgICAgICAgICBiY05lc3RpbmdEZXB0aDogJ0A/JywgICAgLy8gc3RyaW5nIFttb250aHx3ZWVrfGRheV0gLSBkZWZhdWx0czogbW9udGhcbiAgICAgICAgICAgIGJjRGF5czogJ0A/JywgICAgICAgICAgICAvLyBpbnRlZ2VyIC0gZGVmYXVsdCB0byAzMCAodXNlZCB0byBjcmVhdGUgYmNFbmREYXRlKVxuICAgICAgICAgICAgYmNEYXlUaXRsZUZvcm1hdDogJ0A/JywgIC8vIHN0cmluZyBbd29yZHxhYmJyZXZpYXRpb258bGV0dGVyXSAtIGRlZmF1bHQ6IGFiYnJldmlhdGlvblxuICAgICAgICAgICAgYmNNb250aFRpdGxlRm9ybWF0OiAnQD8nLC8vIHN0cmluZyAtIGFueSB2YWxpZCBNb21lbnQgZGF0ZSBmb3JtYXQgLSBkZWZhdWx0OiBNTU1NXG4gICAgICAgICAgICBiY0RhdGVTZWxlY3RlZDogJyYnLCAgICAgLy8gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRhdGUgaXMgc2VsZWN0ZWQgKHRhcC9jbGljaylcbiAgICAgICAgICAgIGJjU2hvd1dlZWtkYXlzOiAnPT8nLCAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIHdlZWtkYXlzIGhlYWRlciBzaG91bGQgYmUgY3JlYXRlZFxuICAgICAgICAgICAgYmNTaG93TW9udGhUaXRsZXM6ICc9PycsIC8vIGRldGVybWluZSBpZiB0aGUgbW9udGggdGl0bGVzIHNob3VsZCBiZSB2aXNpYmxlXG4gICAgICAgICAgICBiY0RheVRlbXBsYXRlOiAnQD8nLCAgICAgLy8gb3ZlcndyaXRlIHRoZSBkZWZhdWx0ICdkYXknIHRlbXBsYXRlXG4gICAgICAgICAgICBiY0RhdGVGb3JtYXQ6ICdAPycsICAgICAgLy8gZGVmaW5lIGEgY3VzdG9tIGRhdGUgZm9ybWF0IGZvciB0aGUgZGF5XG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGxpbmtGdW5jdGlvbixcbiAgICAgICAgdGVtcGxhdGVVcmw6IGNhbGVuZGFyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IENhbGVuZGFyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogTGlua1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmtGdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsIHZtKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjb3JyZWN0IHRlbXBsYXRlIGJhc2VkIG9uIHRoZSBkZXNpcmVkIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3ZtLm5lc3RpbmdEZXB0aF07XG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuXG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY2FsZW5kYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDYWxlbmRhckNvbnRyb2xsZXIgPSBleHBvcnRzLkNhbGVuZGFyQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWxlbmRhckNvbnRyb2xsZXIoJHRlbXBsYXRlQ2FjaGUsIGJjQ2FsZW5kYXJDb25maWcsIGJjQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGVuZGFyQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcgPSBiY0NhbGVuZGFyQ29uZmlnO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlID0gYmNDYWxlbmRhclNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5fYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FsZW5kYXJDb250cm9sbGVyLCBbe1xuICAgICAgICBrZXk6ICdfYWN0aXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FjdGl2YXRlKCkge1xuICAgICAgICAgICAgLy8gRGVmaW5lIHRvZGF5J3MgZGF0ZVxuICAgICAgICAgICAgdGhpcy50b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKTtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBzdGFydCBkYXRlIGZvciB0aGUgY2FsZW5kYXJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5iY1N0YXJ0RGF0ZSB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc3RhcnREYXRlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZW5kIGRhdGUgd2FzIGRlZmluZWRcbiAgICAgICAgICAgIGlmICh0aGlzLmJjRW5kRGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCB1c2luZyB0aGUgZW5kIGRhdGVcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmR1cmF0aW9uSW5EYXlzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmJjRW5kRGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCBmcm9tIHRoZSBjb3VudCBwYXNzZWQgaW4gb3IgdGhlIGNvbmZpZ1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IHBhcnNlSW50KHRoaXMuYmNEYXlzIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlzLCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgZGVlcCB0byBvcmdhbml6ZSB0aGUgY2FsZW5kYXJcbiAgICAgICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gdGhpcy5iY05lc3RpbmdEZXB0aCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcubmVzdGluZ0RlcHRoO1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgdGhlIHdlZWtkYXkgaGVhZGVycyBmb3JtYXRcbiAgICAgICAgICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLmJjRGF5VGl0bGVGb3JtYXQgPyB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNEYXlUaXRsZUZvcm1hdF0gOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlUaXRsZUZvcm1hdF07XG5cbiAgICAgICAgICAgIC8vIERlZmluZSB0aGUgZm9ybWF0IGZvciB0aGUgbW9udGggdGl0bGVcbiAgICAgICAgICAgIHRoaXMubW9udGhUaXRsZUZvcm1hdCA9IHRoaXMuYmNNb250aFRpdGxlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5tb250aFRpdGxlRm9ybWF0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgbW9udGggdGl0bGVzIHNob3VsZCBiZSB2aXNpYmxlXG4gICAgICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHR5cGVvZiB0aGlzLmJjU2hvd01vbnRoVGl0bGVzID09PSAnYm9vbGVhbicgPyB0aGlzLmJjU2hvd01vbnRoVGl0bGVzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dNb250aFRpdGxlcztcblxuICAgICAgICAgICAgLy8gSW5pdGlhbGx5IG5vIGRhdGUgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjYWxlbmRhciB3ZWVrZGF5cyBoZWFkZXJzXG4gICAgICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHR5cGVvZiB0aGlzLmJjU2hvd1dlZWtkYXlzID09PSAnYm9vbGVhbicgPyB0aGlzLmJjU2hvd1dlZWtkYXlzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dXZWVrZGF5cztcblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSB0ZW1wbGF0ZSBmb3IgYW4gaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGRlZmluZWQgYSB0ZW1wbGF0ZSBvbiB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIGluIHRoZSBwcm92aWRlclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUxvY2F0aW9uID0gJ3VzZXJEYXlUZW1wbGF0ZS5odG1sJztcblxuICAgICAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTG9jYXRpb24sIHRoaXMuYmNEYXlUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGVtcGxhdGVMb2NhdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIGluIHRoZSBwcm92aWRlclxuICAgICAgICAgICAgICAgIHZhciBfdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgICAgICAvLyBQdXQgdGhlIHVzZXIgdGVtcGxhdGUgaW50byB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlLnB1dChfdGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBFeHBvc2UgdGhlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gX3RlbXBsYXRlTG9jYXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vIHRlbXBsYXRlIGZyb20gdGhlIHVzZXJcblxuICAgICAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlUZW1wbGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBkYXRlIGZvcm1hdCBmb3IgdGhlIGluZGl2aWR1YWwgZGF5XG4gICAgICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSB0aGlzLmJjRGF0ZUZvcm1hdCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF0ZUZvcm1hdDtcblxuICAgICAgICAgICAgLy8gQnVpbGQgYXJyYXkgb2YgZGF5c1xuICAgICAgICAgICAgdmFyIGRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmJ1aWxkRGF5cyh0aGlzLmRheXMsIHRoaXMuc3RhcnREYXRlKTtcblxuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGNhbGVuZGFyIEpTT04gYW5kIGV4cG9zZSB0byB0aGUgRE9NXG4gICAgICAgICAgICB0aGlzLl9idWlsZENhbGVuZGFyKGRheXMsIHRoaXMubmVzdGluZ0RlcHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzQmVmb3JlVG9kYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNCZWZvcmVUb2RheShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kYXRlSXNCZWZvcmVUb2RheShkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2x9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0RheVRvZGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGF5VG9kYXkoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuaXNEYXlUb2RheShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VsZWN0IGEgZGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZWxlY3REYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdERhdGUoZGF5KSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIGRheVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgY2FsbCB0aGUgcGFzc2VkIG1ldGhvZCBpZiBpdCBleGlzdHMgYW5kIGEgdmFsaWQgZGF0ZSB3YXMgY2hvc2VuXG4gICAgICAgICAgICBpZiAoZGF5LmRhdGUgJiYgdGhpcy5iY0RhdGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmNEYXRlU2VsZWN0ZWQoe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXkuZGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcm1hdCBhIGRhdGUgdXNpbmcgbW9tZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWREYXRlXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmb3JtYXREYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGQgdGhlIGNhbGVuZGFyIEpTT05cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF5c1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVwdGhcbiAgICAgICAgICogQHJldHVybiB7RWxlbWVudH0gZWxlbWVudFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2J1aWxkQ2FsZW5kYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkQ2FsZW5kYXIoZGF5cywgZGVwdGgpIHtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgY29ycmVjdCBvcmdhbml6YXRpb24gbWV0aG9kIGJhc2VkIG9uIHRoZSBuZXN0aW5nIGRlcHRoXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09ICdtb250aCcpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5vcmdhbml6ZU1vbnRocyhkYXlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICd3ZWVrJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplV2Vla3MoZGF5cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnZGF5Jykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSBkYXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbGVuZGFyQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUsXG4gICAgICAgIGJjQ2FsZW5kYXJDb25maWcsIGJjQ2FsZW5kYXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcgPSBiY0NhbGVuZGFyQ29uZmlnO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlID0gYmNDYWxlbmRhclNlcnZpY2U7XG5cblxuICAgICAgICB0aGlzLl9hY3RpdmF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgX2FjdGl2YXRlKCkge1xuICAgICAgICAvLyBEZWZpbmUgdG9kYXkncyBkYXRlXG4gICAgICAgIHRoaXMudG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5Jyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzdGFydCBkYXRlIGZvciB0aGUgY2FsZW5kYXJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLmJjU3RhcnREYXRlIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zdGFydERhdGU7XG5cbiAgICAgICAgLy8gSWYgdGhlIGVuZCBkYXRlIHdhcyBkZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLmJjRW5kRGF0ZSkge1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaG93IG1hbnkgZGF5cyBhcmUgbmVlZGVkIHVzaW5nIHRoZSBlbmQgZGF0ZVxuICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kdXJhdGlvbkluRGF5cyh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5iY0VuZERhdGUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgZnJvbSB0aGUgY291bnQgcGFzc2VkIGluIG9yIHRoZSBjb25maWdcbiAgICAgICAgICAgIHRoaXMuZGF5cyA9IHBhcnNlSW50KHRoaXMuYmNEYXlzIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlzLCAxMCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBob3cgZGVlcCB0byBvcmdhbml6ZSB0aGUgY2FsZW5kYXJcbiAgICAgICAgdGhpcy5uZXN0aW5nRGVwdGggPSB0aGlzLmJjTmVzdGluZ0RlcHRoIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5uZXN0aW5nRGVwdGg7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSB3ZWVrZGF5IGhlYWRlcnMgZm9ybWF0XG4gICAgICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLmJjRGF5VGl0bGVGb3JtYXQgP1xuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjRGF5VGl0bGVGb3JtYXRdIDpcbiAgICAgICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZy53ZWVrZGF5U3R5bGVbdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRpdGxlRm9ybWF0XTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGZvcm1hdCBmb3IgdGhlIG1vbnRoIHRpdGxlXG4gICAgICAgIHRoaXMubW9udGhUaXRsZUZvcm1hdCA9IHRoaXMuYmNNb250aFRpdGxlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5tb250aFRpdGxlRm9ybWF0O1xuXG4gICAgICAgIC8vIERlZmluZSBpZiBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgdGhpcy5zaG93TW9udGhUaXRsZXMgPSB0eXBlb2YodGhpcy5iY1Nob3dNb250aFRpdGxlcykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd01vbnRoVGl0bGVzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dNb250aFRpdGxlcztcblxuICAgICAgICAvLyBJbml0aWFsbHkgbm8gZGF0ZSBpcyBzZWxlY3RlZFxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjYWxlbmRhciB3ZWVrZGF5cyBoZWFkZXJzXG4gICAgICAgIHRoaXMuc2hvd1dlZWtkYXlzID0gdHlwZW9mKHRoaXMuYmNTaG93V2Vla2RheXMpID09PSAnYm9vbGVhbicgP1xuICAgICAgICAgICAgdGhpcy5iY1Nob3dXZWVrZGF5cyA6IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zaG93V2Vla2RheXM7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSB0ZW1wbGF0ZSBmb3IgYW4gaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIG9uIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgaWYgKHRoaXMuYmNEYXlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIGluIHRoZSBwcm92aWRlclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0RheVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBsb2NhdGlvbiB0byB0aGUgZGlyZWN0aXZlXG4gICAgICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gdGVtcGxhdGVMb2NhdGlvbjtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIGluIHRoZSBwcm92aWRlclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIEV4cG9zZSB0aGUgbG9jYXRpb24gdG8gdGhlIGRpcmVjdGl2ZVxuICAgICAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IHRlbXBsYXRlTG9jYXRpb247XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIHRlbXBsYXRlIGZyb20gdGhlIHVzZXJcblxuICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGxvY2F0aW9uIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGVtcGxhdGU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGF0ZSBmb3JtYXQgZm9yIHRoZSBpbmRpdmlkdWFsIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSB0aGlzLmJjRGF0ZUZvcm1hdCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF0ZUZvcm1hdDtcblxuICAgICAgICAvLyBCdWlsZCBhcnJheSBvZiBkYXlzXG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmJ1aWxkRGF5cyh0aGlzLmRheXMsIHRoaXMuc3RhcnREYXRlKTtcblxuICAgICAgICAvLyBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTiBhbmQgZXhwb3NlIHRvIHRoZSBET01cbiAgICAgICAgdGhpcy5fYnVpbGRDYWxlbmRhcihkYXlzLCB0aGlzLm5lc3RpbmdEZXB0aCk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IGlzIHByaW9yIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgdW5zZWxlY3RhYmxlIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9XG4gICAgICovXG4gICAgaXNCZWZvcmVUb2RheShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgbWF0Y2hlcyB0aGUgY3VycmVudCBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5pc0RheVRvZGF5KGRhdGUsIHRoaXMuc3RhcnREYXRlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXlcbiAgICAgKi9cbiAgICBzZWxlY3REYXRlKGRheSkge1xuICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIGRheVxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRheTtcblxuICAgICAgICAvLyBPbmx5IGNhbGwgdGhlIHBhc3NlZCBtZXRob2QgaWYgaXQgZXhpc3RzIGFuZCBhIHZhbGlkIGRhdGUgd2FzIGNob3NlblxuICAgICAgICBpZiAoZGF5LmRhdGUgJiYgdGhpcy5iY0RhdGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5iY0RhdGVTZWxlY3RlZCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF5LmRhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGEgZGF0ZSB1c2luZyBtb21lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gZm9ybWF0dGVkRGF0ZVxuICAgICAqL1xuICAgIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBjYWxlbmRhciBKU09OXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlcHRoXG4gICAgICogQHJldHVybiB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIF9idWlsZENhbGVuZGFyKGRheXMsIGRlcHRoKSB7XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgY29ycmVjdCBvcmdhbml6YXRpb24gbWV0aG9kIGJhc2VkIG9uIHRoZSBuZXN0aW5nIGRlcHRoXG4gICAgICAgIGlmIChkZXB0aCA9PT0gJ21vbnRoJykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVNb250aHMoZGF5cyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXB0aCA9PT0gJ3dlZWsnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5vcmdhbml6ZVdlZWtzKGRheXMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICdkYXknKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gZGF5cztcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jYWxlbmRhci5jb250cm9sbGVyLmpzXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHNlY3Rpb24gY2xhc3M9YmMtY2FsZW5kYXI+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrZGF5cyBkYXRhLW5nLWlmPVxcXCJ2bS5zaG93V2Vla2RheXMgJiYgdm0ubmVzdGluZ0RlcHRoID09PSAnd2VlaydcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmMtY2FsZW5kYXJfX2RheSBiYy1jYWxlbmRhcl9fZGF5LS13ZWVrZGF5c1xcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcImRheSBpbiB2bS53ZWVrZGF5cyB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3Ryb25nIGNsYXNzPWJjLWNhbGVuZGFyX19kYXktdGl0bGU+IHt7IGRheSB9fSA8L3N0cm9uZz4gPC9zcGFuPiA8L3NwYW4+IDxkaXYgZGF0YS1uZy1pbmNsdWRlPXZtLmdldFRlbXBsYXRlVXJsKCk+PC9kaXY+IDwvc2VjdGlvbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL3llYXIuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1iYy1jYWxlbmRhcl9feWVhciBkYXRhLW5nLXJlcGVhdD1cXFwieWVhciBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPGJjLW1vbnRoIGJjLWNvbGxlY3Rpb249eWVhciBiYy13ZWVrcy1oZWFkZXI9dm0ud2Vla2RheXNIZWFkZXI+PC9iYy1tb250aD4gPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aCBkYXRldGltZT1cXFwie3sgbW9udGhbMF1bbW9udGhbMF0ubGVuZ3RoIC0gMV0uZGF0ZSB8IGRhdGU6J3l5eXktTU0nIH19XFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwibW9udGggaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aC10aXRsZSBkYXRhLW5nLWJpbmQ9XFxcInZtLmZvcm1hdERhdGUobW9udGhbMF1bbW9udGhbMF0ubGVuZ3RoIC0gMV0uZGF0ZSwgdm0ubW9udGhUaXRsZUZvcm1hdClcXFwiIGRhdGEtbmctaWY9dm0uc2hvd01vbnRoVGl0bGVzPjwvc3Bhbj4gPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWtkYXlzIGRhdGEtbmctaWY9dm0uc2hvd1dlZWtkYXlzPiA8c3BhbiBjbGFzcz1cXFwiYmMtY2FsZW5kYXJfX2RheSBiYy1jYWxlbmRhcl9fZGF5LS13ZWVrZGF5c1xcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcImRheSBpbiB2bS53ZWVrZGF5cyB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3Ryb25nIGNsYXNzPWJjLWNhbGVuZGFyX19kYXktdGl0bGU+IHt7IGRheSB9fSA8L3N0cm9uZz4gPC9zcGFuPiA8L3NwYW4+IDxiYy13ZWVrIGJjLWNvbGxlY3Rpb249bW9udGg+PC9iYy13ZWVrPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrIGRhdGV0aW1lPVxcXCJ7eyB3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uZGF0ZSB8IGRhdGU6J3l5eXktd3cnIH19XFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwid2VlayBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPGJjLWRheSBiYy1jb2xsZWN0aW9uPXdlZWs+PC9iYy1kYXk+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL3dlZWsuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX19kYXkgZGF0YS1uZy1jbGFzcz1cXFwieyAnYmMtY2FsZW5kYXJfX2RheS0tZGlzYWJsZWQnOiB2bS5pc0JlZm9yZVRvZGF5KGRheS5kYXRlKSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXRvZGF5Jzogdm0uaXNEYXlUb2RheShkYXkuZGF0ZSksXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1ldmVuJzogJGV2ZW4sXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1vZGQnOiAkb2RkLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tcGFkJzogIWRheS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tdmFsaWQnOiBkYXkuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXNlbGVjdGVkJzogZGF5LmRhdGUgPT09IHZtLnNlbGVjdGVkRGF0ZS5kYXRlIH1cXFwiIGRhdGEtbmctY2xpY2s9dm0uc2VsZWN0RGF0ZShkYXkpIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCIgdGl0bGU9ZGF5LmRhdGU+IDxuZy1pbmNsdWRlIHNyYz12bS5kYXlUZW1wbGF0ZT48L25nLWluY2x1ZGU+IDwvc3Bhbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2RheS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJjTW9udGhEaXJlY3RpdmUgPSBiY01vbnRoRGlyZWN0aXZlO1xuXG52YXIgX21vbnRoID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvbW9udGguaHRtbCcpO1xuXG52YXIgX21vbnRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vbnRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYmNNb250aERpcmVjdGl2ZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgICAgIGJjV2Vla2RheXNIZWFkZXI6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogX21vbnRoMi5kZWZhdWx0LFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vbnRoLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNNb250aERpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgICAgICBiY1dlZWtkYXlzSGVhZGVyOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBtb250aFRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9tb250aC5kaXJlY3RpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmNXZWVrRGlyZWN0aXZlID0gYmNXZWVrRGlyZWN0aXZlO1xuXG52YXIgX3dlZWsgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy93ZWVrLmh0bWwnKTtcblxudmFyIF93ZWVrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dlZWspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBiY1dlZWtEaXJlY3RpdmUoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IF93ZWVrMi5kZWZhdWx0LFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IHdlZWtUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNXZWVrRGlyZWN0aXZlKFxuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHdlZWtUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogKCkgPT4ge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy93ZWVrLmRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5iY0RheURpcmVjdGl2ZSA9IGJjRGF5RGlyZWN0aXZlO1xuXG52YXIgX2RheSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2RheS5odG1sJyk7XG5cbnZhciBfZGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJjRGF5RGlyZWN0aXZlKGJjQ2FsZW5kYXJDb25maWcpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogX2RheTIuZGVmYXVsdCxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gY29udHJvbGxlcigpIHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kYXkuZGlyZWN0aXZlLmpzXG4gKiovIiwiaW1wb3J0IGRheVdyYXBwZXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY0RheURpcmVjdGl2ZShcbiAgICBiY0NhbGVuZGFyQ29uZmlnXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogZGF5V3JhcHBlclRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2RheS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9