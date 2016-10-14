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
	
	var _month = __webpack_require__(10);
	
	var _week = __webpack_require__(11);
	
	var _day = __webpack_require__(12);
	
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
	var html = "<time datetime=\"{{ day.date | date:'yyyy-MM-dd' }}\" class=bc-calendar__day-time title=\"{{ day.date }}\" data-ng-if=day.date> <span data-ng-bind=\"$ctrl.formatDate(day.date, $ctrl.dateFormat)\"></span> </time>";
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
	        this.dayTemplate;
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
	
	        /**
	         * Set the inner day template
	         *
	         * @param {String} template
	         */
	
	    }, {
	        key: 'storeDayTemplate',
	        value: function storeDayTemplate(template) {
	            this.dayTemplate = template;
	        }
	
	        /**
	         * Get the inner day template
	         *
	         * @return {String} template
	         */
	
	    }, {
	        key: 'getDayTemplate',
	        value: function getDayTemplate() {
	            return this.dayTemplate;
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
	
	var _month = __webpack_require__(7);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _day = __webpack_require__(9);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcCalendarDirective() {
	    'ngInject';
	
	    // Define possible templates
	
	    var templates = {
	        month: _month2.default,
	        week: _week2.default,
	        day: _day2.default
	    };
	
	    var directive = {
	        restrict: 'E',
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
	        controllerAs: '$ctrl'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, $ctrl) {
	
	        // Set the correct template based on the desired nesting depth
	        $ctrl.getTemplateUrl = function () {
	            return templates[$ctrl.nestingDepth];
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
	
	            // If a custom day template has been set in either location (attribute or provider)
	            if (this.bcDayTemplate || this.bcCalendarConfig.userDayTemplate) {
	                // Name the template location
	                var templateLocation = 'userDayTemplate.html';
	
	                // If the user set a template via the directive attribute
	                if (this.bcDayTemplate) {
	                    // Put the user template into the cache
	                    this.$templateCache.put(templateLocation, this.bcDayTemplate);
	                }
	
	                // If the user defined a template using the provider
	                if (this.bcCalendarConfig.userDayTemplate) {
	                    // Put the user template into the cache
	                    this.$templateCache.put(templateLocation, this.bcCalendarConfig.userDayTemplate);
	                }
	
	                // Store the inner-day template on the service
	                this.bcCalendarService.storeDayTemplate(templateLocation);
	            } else {
	                // No custom template was defined
	
	                // Store the inner-day template on the service
	                this.bcCalendarService.storeDayTemplate(this.bcCalendarConfig.dayTemplate);
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
	var html = "<section class=bc-calendar> <span class=bc-calendar__weekdays data-ng-if=\"$ctrl.showWeekdays && $ctrl.nestingDepth === 'week'\"> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in $ctrl.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-month data-ng-if=\"$ctrl.nestingDepth === 'month'\" class=bc-calendar__month-wrapper bc-collection=$ctrl.bcCollection></bc-month> <bc-week data-ng-if=\"$ctrl.nestingDepth === 'week'\" class=bc-calendar__week-wrapper bc-collection=$ctrl.bcCollection></bc-week> <bc-day data-ng-if=\"$ctrl.nestingDepth === 'day'\" class=bc-calendar__day-wrapper bc-collection=$ctrl.bcCollection></bc-day> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/month.html';
	var html = "<time class=bc-calendar__month datetime=\"{{ month[0][month[0].length - 1].date | date:'yyyy-MM' }}\" data-ng-repeat=\"month in vm.bcCollection track by $index\"> <span class=bc-calendar__month-title data-ng-bind=\"$ctrl.formatDate(month[0][month[0].length - 1].date, $ctrl.monthTitleFormat)\" data-ng-if=$ctrl.showMonthTitles></span> <span class=bc-calendar__weekdays data-ng-if=$ctrl.showWeekdays> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in $ctrl.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-week bc-collection=month class=bc-calendar__week-wrapper></bc-week> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/week.html';
	var html = "<time class=bc-calendar__week datetime=\"{{ week[week.length - 1].date | date:'yyyy-ww' }}\" data-ng-repeat=\"week in vm.bcCollection track by $index\"> <bc-day bc-collection=week class=bc-calendar__day-wrapper></bc-day> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.html';
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': $ctrl.isBeforeToday(day.date),\n                   'bc-calendar__day--today': $ctrl.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--odd': $odd,\n                   'bc-calendar__day--pad': !day.date,\n                   'bc-calendar__day--valid': day.date,\n                   'bc-calendar__day--selected': day.date === $ctrl.selectedDate.date }\" data-ng-click=$ctrl.selectDate(day) data-ng-repeat=\"day in vm.bcCollection track by $index\" title=\"{{ day.date ? day.date : '' }}\" tabindex=\"{{ day.date ? 1 : -1 }}\"> <ng-include src=vm.dayTemplate></ng-include> </span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcMonthDirective = bcMonthDirective;
	
	var _month = __webpack_require__(7);
	
	var _month2 = _interopRequireDefault(_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcMonthDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        scope: true,
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcWeekDirective = bcWeekDirective;
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcWeekDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        scope: true,
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	bcDayDirective.$inject = ["bcCalendarConfig"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcDayDirective = bcDayDirective;
	
	var _day = __webpack_require__(9);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcDayDirective(bcCalendarConfig) {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        scope: true,
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _day2.default,
	        controller: ["bcCalendarService", function controller(bcCalendarService) {
	            'ngInject';
	
	            // Get the inner-day template from the service
	
	            this.dayTemplate = bcCalendarService.getDayTemplate();
	        }],
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMjNhYjFiZmVkMTQ2YmViOWFiMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vbnRoLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vlay5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RheS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBLFFBQU8sZUFBZSxT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SGdCOztBQUZoQjs7QUFTQSxLQUFJLFNBQVMsdUJBQXVCOztBQUVwQyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFUaEYsVUFBUyxrQkFDZDtLQUNFOztLQUVBLElBQU0sWUFBWTtTQUNkLFVBQVU7U0FDVixPQUFPO1NBQ1Asa0JBQWtCO2FBQ2QsY0FBYzs7U0FFbEI7U0FDQSxZQUFZLHNCQUFNO1NBQ2xCLGNBQWM7OztLQUdsQixPQUFPOzs7Ozs7O0FDakJYOzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0tBQ3pDLE9BQU87O0FBRVgsU0FIZ0I7O0FBRmhCOztBQVNBLEtBQUksUUFBUSx1QkFBdUI7O0FBRW5DLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQVRoRixVQUFTLGVBQ1osa0JBQ0Y7S0FDRTs7S0FFQSxJQUFNLFlBQVk7U0FDZCxVQUFVO1NBQ1YsT0FBTztTQUNQLGtCQUFrQjthQUNkLGNBQWM7O1NBRWxCO1NBQ0Esa0NBQVksb0JBQVMsbUJBQW1CO2FBQ3BDOzs7O2FBR0EsS0FBSyxjQUFjLGtCQUFrQjs7U0FFekMsY0FBYzs7O0tBR2xCLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1qc29uLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjIzYWIxYmZlZDE0NmJlYjlhYjNcbiAqKi8iLCJpbXBvcnQgeyBiY0NhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi9jYWxlbmRhci5wcm92aWRlcic7XG5pbXBvcnQgeyBiY0NhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBiY0NhbGVuZGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNNb250aERpcmVjdGl2ZSB9IGZyb20gJy4vbW9udGguZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjV2Vla0RpcmVjdGl2ZSB9IGZyb20gJy4vd2Vlay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNEYXlEaXJlY3RpdmUgfSBmcm9tICcuL2RheS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyLm1vZHVsZSgnYmMuSnNvbkNhbGVuZGFyJywgW10pXG4gICAgLnByb3ZpZGVyKCdiY0NhbGVuZGFyQ29uZmlnJywgYmNDYWxlbmRhckNvbmZpZylcbiAgICAuc2VydmljZSgnYmNDYWxlbmRhclNlcnZpY2UnLCBiY0NhbGVuZGFyU2VydmljZSlcbiAgICAuZGlyZWN0aXZlKCdiY0NhbGVuZGFyJywgYmNDYWxlbmRhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY01vbnRoJywgYmNNb250aERpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY1dlZWsnLCBiY1dlZWtEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNEYXknLCBiY0RheURpcmVjdGl2ZSlcbjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xuXG5leHBvcnQgY2xhc3MgYmNDYWxlbmRhckNvbmZpZyB7XG5cbiAgICAvLyBEZWZpbmUgZGVmYXVsdHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAvLyBUaGUgY2FsZW5kYXIgd2lsbCBiZWdpbiB3aXRoIHRvZGF5XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHR5cGUgW2RheXx3ZWVrfG1vbnRoXVxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9ICdtb250aCc7XG5cbiAgICAgICAgLy8gSG93IG1hbnkgZGF5cyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgICAgIHRoaXMuZGF5cyA9IDMwO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgd2Vla2RheVxuICAgICAgICB0aGlzLndlZWtkYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGxldHRlcjogW1xuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAgICAgJ1QnLFxuICAgICAgICAgICAgICAgICdXJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ0YnLFxuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246IFtcbiAgICAgICAgICAgICAgICAnU3VuJyxcbiAgICAgICAgICAgICAgICAnTW9uJyxcbiAgICAgICAgICAgICAgICAnVHVlJyxcbiAgICAgICAgICAgICAgICAnV2VkJyxcbiAgICAgICAgICAgICAgICAnVGh1cicsXG4gICAgICAgICAgICAgICAgJ0ZyaScsXG4gICAgICAgICAgICAgICAgJ1NhdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd29yZDogW1xuICAgICAgICAgICAgICAgICdTdW5kYXknLFxuICAgICAgICAgICAgICAgICdNb25kYXknLFxuICAgICAgICAgICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAgICAgICAgICdGcmlkYXknLFxuICAgICAgICAgICAgICAgICdTYXR1cmRheScsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3b3JkIHR5cGUgKE0gdnMgTW9uIHZzIE1vbmRheSlcbiAgICAgICAgdGhpcy5kYXlUaXRsZUZvcm1hdCA9ICdhYmJyZXZpYXRpb24nO1xuXG4gICAgICAgIC8vIFNob3VsZCB0aGUgY2FsZW5kYXIgc2hvdyB0aGUgd2Vla2RheSBuYW1lcyBhYm92ZSBlYWNoIGNvbHVtbj9cbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IGRheVRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnNldERheVRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ0QnO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCBmb3JtYXQgZm9yIGEgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gJ01NTU0nXG5cbiAgICAgICAgLy8gU2hvdWxkIG1vbnRoIHRpdGxlcyBiZSBzaG93biBieSBkZWZhdWx0P1xuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHRydWU7XG5cbiAgICB9XG5cblxuXG5cbiAgICAkZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5wcm92aWRlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBkYXRldGltZT1cXFwie3sgZGF5LmRhdGUgfCBkYXRlOid5eXl5LU1NLWRkJyB9fVxcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aW1lIHRpdGxlPVxcXCJ7eyBkYXkuZGF0ZSB9fVxcXCIgZGF0YS1uZy1pZj1kYXkuZGF0ZT4gPHNwYW4gZGF0YS1uZy1iaW5kPVxcXCIkY3RybC5mb3JtYXREYXRlKGRheS5kYXRlLCAkY3RybC5kYXRlRm9ybWF0KVxcXCI+PC9zcGFuPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0IGNsYXNzIGJjQ2FsZW5kYXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuV0VFS19MRU5HVEggPSA3O1xuICAgICAgICB0aGlzLmRheVRlbXBsYXRlO1xuXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc0JlZm9yZVxuICAgICAqL1xuICAgIGRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc0JlZm9yZSh0b2RheSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGUyXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNUb2RheVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSwgZGF0ZTIgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc1NhbWUoZGF0ZTIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVHVybiBhIGludGVnZXIgKGUuZy4gJzYnKSBpbnRvIGFuIGFycmF5OiAnWzEsMiwzLDQsNSw2XSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gZGF5c1xuICAgICAqL1xuICAgIGludGVnZXJUb0FycmF5KGNvdW50KSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFkIHRoZSBiZWdpbm5pbmcgb2YgYSB3ZWVrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnREYXRlIC0gZGF0ZSB0byB0byB3b3JrIGJhY2sgZnJvbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvdW50IC0gaG93IG1hbnkgZGF5cyB0byBwYWRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkXG4gICAgICovXG4gICAgcGFkRGF5c0xlZnQoc3RhcnREYXRlLCBjb3VudCkge1xuICAgICAgICBjb25zdCBwYWQgPSBbXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0RheXMgPSB0aGlzLmludGVnZXJUb0FycmF5KGNvdW50KTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggbWlzc2luZyBkYXlzXG4gICAgICAgIGZvciAoY29uc3QgZGF5IGluIG1pc3NpbmdEYXlzKSB7XG4gICAgICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHRvIGdvIGJhY2tcbiAgICAgICAgICAgIGNvbnN0IHN1YnRyYWN0aW9uID0gcGFyc2VJbnQoZGF5LCAxMCkgKyAxO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoYXQgZGF5XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KChzdWJ0cmFjdGlvbiksICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBwYWQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogcHJldmlvdXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgYSBjb2xsZWN0aW9uIHdpdGggYmxhbmsgdGlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IHBhZGRlZENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBwYWRCbGFua1RpbGVzKGNvbGxlY3Rpb24sIGNvdW50LCBkaXJlY3Rpb24gPSAnbGVmdCcpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICAvLyBDcmVhdGUgYXJyYXlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZGlyZWN0aW9uIGlzICdyaWdodCdcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gcGFkIHRoZSBlbmRcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChkYXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHBhZCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICByZXR1cm4gZGF5cy5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgYW4gYXJyYXkgaW50byBjaHVua3MgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aGVzZSBjaHVua3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBncm91cHNpemUgLSBDaHVuayBzaXplLiBEZWZhdWx0cyB0byA3IChvbmUgd2VlaykuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNodW5rc1xuICAgICAqL1xuICAgIGNodW5rKGdyb3VwLCBncm91cHNpemUgPSB0aGlzLldFRUtfTEVOR1RIKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBjaHVua3MgPSBncm91cC5sZW5ndGggLyBwYXJzZUludChncm91cHNpemUsIDEwKTtcblxuICAgICAgICB3aGlsZShpIDwgY2h1bmtzKSB7XG4gICAgICAgICAgICBzZXRzW2ldID0gZ3JvdXAuc3BsaWNlKDAsIGdyb3Vwc2l6ZSk7XG4gICAgICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIHR3byBkYXRlcyBJTkNMVURJTkcgYm90aCBkYXRlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZFxuICAgICAqIEByZXR1cm4ge0ludGVnZXJ9IGRheXNcbiAgICAgKi9cbiAgICBkdXJhdGlvbkluRGF5cyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gbW9tZW50KHN0YXJ0KS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgLy8gQWRkIGEgZGF5IHNvIHRoZSBlbmQgZGF0ZSBpcyBpbmNsdWRlZCBpbiB0aGUgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbmV3RW5kID0gbW9tZW50KGVuZCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VuZC5kaWZmKG5ld1N0YXJ0LCAgJ2RheXMnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGEgY29sbGVjdGlvbiBvZiBkYXlzIGludG8gc3ViIGNvbGxlY3Rpb25zIG9mIHdlZWtzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzIC0gYXJyYXkgb2YgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgb3JnYW5pemVXZWVrcyhkYXlzKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRoYXQgdGhlIGNhbGVuZGFyIHN0YXJ0cyBhbmQgZW5kcyBvblxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChkYXlzWzBdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBsYXN0RGF5ID0gbW9tZW50KGRheXNbZGF5cy5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgYWZ0ZXIgU3VuZGF5XG4gICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGRheSBpcyBiZWZvcmUgU2F0dXJkYXlcbiAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgbGFzdCB3ZWVrJ3MgZGF5cyBhcmUgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cyx0aGlzLldFRUtfTEVOR1RIIC0gKGxhc3REYXkgKyAxKSwgJ3JpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaHVuayhkYXlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGJ5IG1vbnRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxEYXlzIC0gQW4gYXJyYXkgb2YgYWxsIGRheXNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY29sbGVjdGlvbiAtIGRheXMgb3JnYW5pemVkIGludG8gd2Vla3MgYW5kIG1vbnRoc1xuICAgICAqL1xuICAgIG9yZ2FuaXplTW9udGhzKGFsbERheXMpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBbXTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IGFsbERheXM7XG4gICAgICAgIGxldCBtb250aDtcbiAgICAgICAgbGV0IGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgLy8gUGFkIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIHdpdGggYW55IG1pc3NpbmcgZGF5c1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIG5vdCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgICAgICBpZiAobW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpID4gMCkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc2xpY2UoMCwgKGRheXNJbk1vbnRoIC0gKGRheU9mTW9udGggLSAxKSkpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIHRoZSBtaXNzaW5nIGRheXMgZnJvbSB0aGUgbW9udGhcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IHRoaXMucGFkRGF5c0xlZnQobW9udGhbMF0uZGF0ZSwgKGRheU9mTW9udGggLSAxKSk7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgd2l0aCB0aGUgZXhpc3RpbmcgYXJyYXlcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBwYWQuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTcGxpdCBpbnRvIG1vbnRoc1xuICAgICAgICAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBkYXlzIGxlZnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgd2hpbGUgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIHRoZSBmaXJzdCBkYXRlIG9mIHRoZSBjb2xsZWN0aW9uIGVnLiAnMjQnXG4gICAgICAgICAgICBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0aGVyZSBhcmUgdGhpcyBtb250aCAodG90YWwpXG4gICAgICAgICAgICBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgICAgIC8vIFB1bGwgdGhpcyBtb250aCdzIGRheXMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNwbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBwcmlvciB0byB0aGUgZmlyc3QgZGF5IG9mIHRoaXMgbW9udGg/XG4gICAgICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChtb250aFswXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBhZnRlciB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoP1xuICAgICAgICAgICAgLy8gKHJlbWVtYmVyOiB3ZWVrcyBhcmUgemVyby1iYXNlZClcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQobW9udGhbbW9udGgubGVuZ3RoIC0gMV0uZGF0ZSkuZGF5KCk7XG5cbiAgICAgICAgICAgIC8vIElmIGJsYW5rIHRpbGVzIGFyZSBuZWVkZWQgZm9yIHRoZSBsYXN0IHdlZWtcbiAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3QgY29sdW1uXG4gICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLnBhZEJsYW5rVGlsZXMobW9udGgsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JnYW5pemUgaW50byB3ZWVrcyBhbmQgYWRkIHRvIHRoZSBjYWxlbmRhciBhcnJheVxuICAgICAgICAgICAgY2FsZW5kYXIucHVzaCh0aGlzLmNodW5rKG1vbnRoKSk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbiBhcnJheSBvZiBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGxpbWl0IC0gaG93IG1hbnkgZGF5cyB0byBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZVxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgYnVpbGREYXlzKGxpbWl0LCBzdGFydCA9IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGxldCBkYXk7XG5cbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsaW1pdCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkYXlcbiAgICAgICAgICAgIGRheSA9IG1vbWVudChzdGFydCkuYWRkKGNvdW50ZXIsICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgaW5uZXIgZGF5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBzdG9yZURheVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5uZXIgZGF5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgZ2V0RGF5VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRheVRlbXBsYXRlO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgeyBDYWxlbmRhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NhbGVuZGFyLmNvbnRyb2xsZXInO1xuaW1wb3J0IGNhbGVuZGFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCc7XG5pbXBvcnQgbW9udGhUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9tb250aC5odG1sJztcbmltcG9ydCB3ZWVrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvd2Vlay5odG1sJztcbmltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY0NhbGVuZGFyRGlyZWN0aXZlKFxuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIERlZmluZSBwb3NzaWJsZSB0ZW1wbGF0ZXNcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgIG1vbnRoOiBtb250aFRlbXBsYXRlLFxuICAgICAgICB3ZWVrOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGRheTogZGF5VGVtcGxhdGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY1N0YXJ0RGF0ZTogJ0A/JywgICAgICAgIC8vIGRhdGUgLSBkZWZhdWx0IHRvIHRvZGF5XG4gICAgICAgICAgICBiY0VuZERhdGU6ICdAPycsICAgICAgICAgIC8vIGRhdGUgLSBpZiBub3QgcHJlc2VudCwgdXNlIGNyZWF0ZSB1c2luZyBiY0RheXNcbiAgICAgICAgICAgIGJjTmVzdGluZ0RlcHRoOiAnQD8nLCAgICAgLy8gc3RyaW5nIFttb250aHx3ZWVrfGRheV0gLSBkZWZhdWx0czogbW9udGhcbiAgICAgICAgICAgIGJjRGF5czogJ0A/JywgICAgICAgICAgICAgLy8gaW50ZWdlciAtIGRlZmF1bHQgdG8gMzAgKHVzZWQgdG8gY3JlYXRlIGJjRW5kRGF0ZSlcbiAgICAgICAgICAgIGJjRGF5VGl0bGVGb3JtYXQ6ICdAPycsICAgLy8gc3RyaW5nIFt3b3JkfGFiYnJldmlhdGlvbnxsZXR0ZXJdIC0gZGVmYXVsdDogYWJicmV2aWF0aW9uXG4gICAgICAgICAgICBiY01vbnRoVGl0bGVGb3JtYXQ6ICdAPycsIC8vIHN0cmluZyAtIGFueSB2YWxpZCBNb21lbnQgZGF0ZSBmb3JtYXQgLSBkZWZhdWx0OiBNTU1NXG4gICAgICAgICAgICBiY0RhdGVTZWxlY3RlZDogJyYnLCAgICAgIC8vIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkYXRlIGlzIHNlbGVjdGVkICh0YXAvY2xpY2spXG4gICAgICAgICAgICBiY1Nob3dXZWVrZGF5czogJz0/JywgICAgIC8vIGRldGVybWluZSBpZiB0aGUgd2Vla2RheXMgaGVhZGVyIHNob3VsZCBiZSBjcmVhdGVkXG4gICAgICAgICAgICBiY1Nob3dNb250aFRpdGxlczogJz0/JywgIC8vIGRldGVybWluZSBpZiB0aGUgbW9udGggdGl0bGVzIHNob3VsZCBiZSB2aXNpYmxlXG4gICAgICAgICAgICBiY0RheVRlbXBsYXRlOiAnQD8nLCAgICAgIC8vIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCAnZGF5JyB0ZW1wbGF0ZVxuICAgICAgICAgICAgYmNEYXRlRm9ybWF0OiAnQD8nLCAgICAgICAvLyBkZWZpbmUgYSBjdXN0b20gZGF0ZSBmb3JtYXQgZm9yIHRoZSBkYXlcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogbGlua0Z1bmN0aW9uLFxuICAgICAgICB0ZW1wbGF0ZVVybDogY2FsZW5kYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogQ2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICckY3RybCcsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua0Z1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGN0cmwpIHtcblxuICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGRlc2lyZWQgbmVzdGluZyBkZXB0aFxuICAgICAgICAkY3RybC5nZXRUZW1wbGF0ZVVybCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXNbJGN0cmwubmVzdGluZ0RlcHRoXTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG5cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkdGVtcGxhdGVDYWNoZSxcbiAgICAgICAgYmNDYWxlbmRhckNvbmZpZywgYmNDYWxlbmRhclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZyA9IGJjQ2FsZW5kYXJDb25maWc7XG4gICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UgPSBiY0NhbGVuZGFyU2VydmljZTtcblxuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKCk7XG5cbiAgICB9XG5cblxuXG5cbiAgICBfYWN0aXZhdGUoKSB7XG4gICAgICAgIC8vIERlZmluZSB0b2RheSdzIGRhdGVcbiAgICAgICAgdGhpcy50b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHN0YXJ0IGRhdGUgZm9yIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuYmNTdGFydERhdGUgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnN0YXJ0RGF0ZTtcblxuICAgICAgICAvLyBJZiB0aGUgZW5kIGRhdGUgd2FzIGRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMuYmNFbmREYXRlKSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgdXNpbmcgdGhlIGVuZCBkYXRlXG4gICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmR1cmF0aW9uSW5EYXlzKHRoaXMuc3RhcnREYXRlLCB0aGlzLmJjRW5kRGF0ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCBmcm9tIHRoZSBjb3VudCBwYXNzZWQgaW4gb3IgdGhlIGNvbmZpZ1xuICAgICAgICAgICAgdGhpcy5kYXlzID0gcGFyc2VJbnQodGhpcy5iY0RheXMgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheXMsIDEwKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGhvdyBkZWVwIHRvIG9yZ2FuaXplIHRoZSBjYWxlbmRhclxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9IHRoaXMuYmNOZXN0aW5nRGVwdGggfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm5lc3RpbmdEZXB0aDtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIHdlZWtkYXkgaGVhZGVycyBmb3JtYXRcbiAgICAgICAgdGhpcy53ZWVrZGF5cyA9IHRoaXMuYmNEYXlUaXRsZUZvcm1hdCA/XG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNEYXlUaXRsZUZvcm1hdF0gOlxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGl0bGVGb3JtYXRdO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZm9ybWF0IGZvciB0aGUgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gdGhpcy5iY01vbnRoVGl0bGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLm1vbnRoVGl0bGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gRGVmaW5lIGlmIG1vbnRoIHRpdGxlcyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHR5cGVvZih0aGlzLmJjU2hvd01vbnRoVGl0bGVzKSA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgICAgICAgIHRoaXMuYmNTaG93TW9udGhUaXRsZXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd01vbnRoVGl0bGVzO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSBubyBkYXRlIGlzIHNlbGVjdGVkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhbGVuZGFyIHdlZWtkYXlzIGhlYWRlcnNcbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0eXBlb2YodGhpcy5iY1Nob3dXZWVrZGF5cykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd1dlZWtkYXlzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dXZWVrZGF5cztcblxuXG4gICAgICAgIC8vIElmIGEgY3VzdG9tIGRheSB0ZW1wbGF0ZSBoYXMgYmVlbiBzZXQgaW4gZWl0aGVyIGxvY2F0aW9uIChhdHRyaWJ1dGUgb3IgcHJvdmlkZXIpXG4gICAgICAgIGlmICh0aGlzLmJjRGF5VGVtcGxhdGUgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgLy8gTmFtZSB0aGUgdGVtcGxhdGUgbG9jYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlTG9jYXRpb24gPSAndXNlckRheVRlbXBsYXRlLmh0bWwnO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBzZXQgYSB0ZW1wbGF0ZSB2aWEgdGhlIGRpcmVjdGl2ZSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGlmICh0aGlzLmJjRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBQdXQgdGhlIHVzZXIgdGVtcGxhdGUgaW50byB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZUxvY2F0aW9uLCB0aGlzLmJjRGF5VGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBkZWZpbmVkIGEgdGVtcGxhdGUgdXNpbmcgdGhlIHByb3ZpZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTG9jYXRpb24sIHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgaW5uZXItZGF5IHRlbXBsYXRlIG9uIHRoZSBzZXJ2aWNlXG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLnN0b3JlRGF5VGVtcGxhdGUodGVtcGxhdGVMb2NhdGlvbik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIGN1c3RvbSB0ZW1wbGF0ZSB3YXMgZGVmaW5lZFxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgaW5uZXItZGF5IHRlbXBsYXRlIG9uIHRoZSBzZXJ2aWNlXG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLnN0b3JlRGF5VGVtcGxhdGUodGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGF0ZSBmb3JtYXQgZm9yIHRoZSBpbmRpdmlkdWFsIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSB0aGlzLmJjRGF0ZUZvcm1hdCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF0ZUZvcm1hdDtcblxuICAgICAgICAvLyBCdWlsZCBhcnJheSBvZiBkYXlzXG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmJ1aWxkRGF5cyh0aGlzLmRheXMsIHRoaXMuc3RhcnREYXRlKTtcblxuICAgICAgICAvLyBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTiBhbmQgZXhwb3NlIHRvIHRoZSBET01cbiAgICAgICAgdGhpcy5fYnVpbGRDYWxlbmRhcihkYXlzLCB0aGlzLm5lc3RpbmdEZXB0aCk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IGlzIHByaW9yIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gZGlzYWJsZSB0aGUgdW5zZWxlY3RhYmxlIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9XG4gICAgICovXG4gICAgaXNCZWZvcmVUb2RheShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgbWF0Y2hlcyB0aGUgY3VycmVudCBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5pc0RheVRvZGF5KGRhdGUsIHRoaXMuc3RhcnREYXRlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXlcbiAgICAgKi9cbiAgICBzZWxlY3REYXRlKGRheSkge1xuICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIGRheVxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRheTtcblxuICAgICAgICAvLyBPbmx5IGNhbGwgdGhlIHBhc3NlZCBtZXRob2QgaWYgaXQgZXhpc3RzIGFuZCBhIHZhbGlkIGRhdGUgd2FzIGNob3NlblxuICAgICAgICBpZiAoZGF5LmRhdGUgJiYgdGhpcy5iY0RhdGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5iY0RhdGVTZWxlY3RlZCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF5LmRhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGEgZGF0ZSB1c2luZyBtb21lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gZm9ybWF0dGVkRGF0ZVxuICAgICAqL1xuICAgIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBjYWxlbmRhciBKU09OXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlcHRoXG4gICAgICogQHJldHVybiB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIF9idWlsZENhbGVuZGFyKGRheXMsIGRlcHRoKSB7XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgY29ycmVjdCBvcmdhbml6YXRpb24gbWV0aG9kIGJhc2VkIG9uIHRoZSBuZXN0aW5nIGRlcHRoXG4gICAgICAgIGlmIChkZXB0aCA9PT0gJ21vbnRoJykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVNb250aHMoZGF5cyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXB0aCA9PT0gJ3dlZWsnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5vcmdhbml6ZVdlZWtzKGRheXMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICdkYXknKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gZGF5cztcblxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzZWN0aW9uIGNsYXNzPWJjLWNhbGVuZGFyPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vla2RheXMgZGF0YS1uZy1pZj1cXFwiJGN0cmwuc2hvd1dlZWtkYXlzICYmICRjdHJsLm5lc3RpbmdEZXB0aCA9PT0gJ3dlZWsnXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gJGN0cmwud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMtbW9udGggZGF0YS1uZy1pZj1cXFwiJGN0cmwubmVzdGluZ0RlcHRoID09PSAnbW9udGgnXFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtd3JhcHBlciBiYy1jb2xsZWN0aW9uPSRjdHJsLmJjQ29sbGVjdGlvbj48L2JjLW1vbnRoPiA8YmMtd2VlayBkYXRhLW5nLWlmPVxcXCIkY3RybC5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWstd3JhcHBlciBiYy1jb2xsZWN0aW9uPSRjdHJsLmJjQ29sbGVjdGlvbj48L2JjLXdlZWs+IDxiYy1kYXkgZGF0YS1uZy1pZj1cXFwiJGN0cmwubmVzdGluZ0RlcHRoID09PSAnZGF5J1xcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS13cmFwcGVyIGJjLWNvbGxlY3Rpb249JGN0cmwuYmNDb2xsZWN0aW9uPjwvYmMtZGF5PiA8L3NlY3Rpb24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9tb250aC5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGggZGF0ZXRpbWU9XFxcInt7IG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LU1NJyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIm1vbnRoIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtdGl0bGUgZGF0YS1uZy1iaW5kPVxcXCIkY3RybC5mb3JtYXREYXRlKG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUsICRjdHJsLm1vbnRoVGl0bGVGb3JtYXQpXFxcIiBkYXRhLW5nLWlmPSRjdHJsLnNob3dNb250aFRpdGxlcz48L3NwYW4+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrZGF5cyBkYXRhLW5nLWlmPSRjdHJsLnNob3dXZWVrZGF5cz4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gJGN0cmwud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPW1vbnRoIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrLXdyYXBwZXI+PC9iYy13ZWVrPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrIGRhdGV0aW1lPVxcXCJ7eyB3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uZGF0ZSB8IGRhdGU6J3l5eXktd3cnIH19XFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwid2VlayBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPGJjLWRheSBiYy1jb2xsZWN0aW9uPXdlZWsgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS13cmFwcGVyPjwvYmMtZGF5PiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5IGRhdGEtbmctY2xhc3M9XFxcInsgJ2JjLWNhbGVuZGFyX19kYXktLWRpc2FibGVkJzogJGN0cmwuaXNCZWZvcmVUb2RheShkYXkuZGF0ZSksXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS10b2RheSc6ICRjdHJsLmlzRGF5VG9kYXkoZGF5LmRhdGUpLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tZXZlbic6ICRldmVuLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tb2RkJzogJG9kZCxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXBhZCc6ICFkYXkuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXZhbGlkJzogZGF5LmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1zZWxlY3RlZCc6IGRheS5kYXRlID09PSAkY3RybC5zZWxlY3RlZERhdGUuZGF0ZSB9XFxcIiBkYXRhLW5nLWNsaWNrPSRjdHJsLnNlbGVjdERhdGUoZGF5KSBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiIHRpdGxlPVxcXCJ7eyBkYXkuZGF0ZSA/IGRheS5kYXRlIDogJycgfX1cXFwiIHRhYmluZGV4PVxcXCJ7eyBkYXkuZGF0ZSA/IDEgOiAtMSB9fVxcXCI+IDxuZy1pbmNsdWRlIHNyYz12bS5kYXlUZW1wbGF0ZT48L25nLWluY2x1ZGU+IDwvc3Bhbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2RheS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJpbXBvcnQgbW9udGhUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9tb250aC5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjTW9udGhEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgICAgICBiY1dlZWtkYXlzSGVhZGVyOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBtb250aFRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb250aC5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1dlZWtEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd2Vlay5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgZGF5V3JhcHBlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjRGF5RGlyZWN0aXZlKFxuICAgIGJjQ2FsZW5kYXJDb25maWdcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IGRheVdyYXBwZXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oYmNDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgaW5uZXItZGF5IHRlbXBsYXRlIGZyb20gdGhlIHNlcnZpY2VcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSBiY0NhbGVuZGFyU2VydmljZS5nZXREYXlUZW1wbGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGF5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=