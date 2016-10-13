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
	var html = "<section class=bc-calendar> <span class=bc-calendar__weekdays data-ng-if=\"$ctrl.showWeekdays && $ctrl.nestingDepth === 'week'\"> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in $ctrl.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-year data-ng-if=\"$ctrl.nestingDepth === 'year'\" class=bc-calendar__year-wrapper bc-collection=$ctrl.bcCollection></bc-year> <bc-month data-ng-if=\"$ctrl.nestingDepth === 'month'\" class=bc-calendar__month-wrapper bc-collection=$ctrl.bcCollection></bc-month> <bc-week data-ng-if=\"$ctrl.nestingDepth === 'week'\" class=bc-calendar__week-wrapper bc-collection=$ctrl.bcCollection></bc-week> <bc-day data-ng-if=\"$ctrl.nestingDepth === 'day'\" class=bc-calendar__day-wrapper bc-collection=$ctrl.bcCollection></bc-day> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/year.html';
	var html = "<div class=bc-calendar__year data-ng-repeat=\"year in vm.bcCollection track by $index\"> <bc-month bc-collection=year bc-weeks-header=$ctrl.weekdaysHeader class=bc-calendar__month-wrapper></bc-month> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/month.html';
	var html = "<time class=bc-calendar__month datetime=\"{{ month[0][month[0].length - 1].date | date:'yyyy-MM' }}\" data-ng-repeat=\"month in vm.bcCollection track by $index\"> <span class=bc-calendar__month-title data-ng-bind=\"$ctrl.formatDate(month[0][month[0].length - 1].date, $ctrl.monthTitleFormat)\" data-ng-if=$ctrl.showMonthTitles></span> <span class=bc-calendar__weekdays data-ng-if=$ctrl.showWeekdays> <span class=\"bc-calendar__day bc-calendar__day--weekdays\" data-ng-repeat=\"day in $ctrl.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </span> <bc-week bc-collection=month class=bc-calendar__week-wrapper></bc-week> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/week.html';
	var html = "<time class=bc-calendar__week datetime=\"{{ week[week.length - 1].date | date:'yyyy-ww' }}\" data-ng-repeat=\"week in vm.bcCollection track by $index\"> <bc-day bc-collection=week class=bc-calendar__day-wrapper></bc-day> </time>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.html';
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': $ctrl.isBeforeToday(day.date),\n                   'bc-calendar__day--today': $ctrl.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--odd': $odd,\n                   'bc-calendar__day--pad': !day.date,\n                   'bc-calendar__day--valid': day.date,\n                   'bc-calendar__day--selected': day.date === $ctrl.selectedDate.date }\" data-ng-click=$ctrl.selectDate(day) data-ng-repeat=\"day in vm.bcCollection track by $index\" title=\"{{ day.date ? day.date : '' }}\" tabindex=\"{{ day.date ? 1 : -1 }}\"> <ng-include src=vm.dayTemplate></ng-include> </span>";
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
	        scope: true,
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _year2.default,
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
	exports.bcMonthDirective = bcMonthDirective;
	
	var _month = __webpack_require__(8);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZjM4ZDEwZmFhNzY3Yjg2MTkwZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3llYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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VixPQUFPO1NBQ1Asa0JBQWtCO2FBQ2QsY0FBYzs7U0FFbEI7U0FDQSxrQ0FBWSxvQkFBUyxtQkFBbUI7YUFDcEM7Ozs7YUFHQSxLQUFLLGNBQWMsa0JBQWtCOztTQUV6QyxjQUFjOzs7S0FHbEIsT0FBTyIsImZpbGUiOiJhbmd1bGFyLWpzb24tY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyZjM4ZDEwZmFhNzY3Yjg2MTkwZVxuICoqLyIsImltcG9ydCB7IGJjQ2FsZW5kYXJDb25maWcgfSBmcm9tICcuL2NhbGVuZGFyLnByb3ZpZGVyJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IGJjQ2FsZW5kYXJEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY1llYXJEaXJlY3RpdmUgfSBmcm9tICcuL3llYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjTW9udGhEaXJlY3RpdmUgfSBmcm9tICcuL21vbnRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY1dlZWtEaXJlY3RpdmUgfSBmcm9tICcuL3dlZWsuZGlyZWN0aXZlJztcbmltcG9ydCB7IGJjRGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9kYXkuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2JjLkpzb25DYWxlbmRhcicsIFtdKVxuICAgIC5wcm92aWRlcignYmNDYWxlbmRhckNvbmZpZycsIGJjQ2FsZW5kYXJDb25maWcpXG4gICAgLnNlcnZpY2UoJ2JjQ2FsZW5kYXJTZXJ2aWNlJywgYmNDYWxlbmRhclNlcnZpY2UpXG4gICAgLmRpcmVjdGl2ZSgnYmNDYWxlbmRhcicsIGJjQ2FsZW5kYXJEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNZZWFyJywgYmNZZWFyRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjTW9udGgnLCBiY01vbnRoRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjV2VlaycsIGJjV2Vla0RpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY0RheScsIGJjRGF5RGlyZWN0aXZlKVxuO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbCc7XG5cbmV4cG9ydCBjbGFzcyBiY0NhbGVuZGFyQ29uZmlnIHtcblxuICAgIC8vIERlZmluZSBkZWZhdWx0c1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIC8vIFRoZSBjYWxlbmRhciB3aWxsIGJlZ2luIHdpdGggdG9kYXlcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgaW50ZXJ2YWwgdHlwZSBbZGF5fHdlZWt8bW9udGhdXG4gICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gJ21vbnRoJztcblxuICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5kYXlzID0gMzA7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaWZmZXJlbnQgcG9zc2libGUgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWVrZGF5XG4gICAgICAgIHRoaXMud2Vla2RheVN0eWxlID0ge1xuICAgICAgICAgICAgbGV0dGVyOiBbXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ1cnLFxuICAgICAgICAgICAgICAgICdUJyxcbiAgICAgICAgICAgICAgICAnRicsXG4gICAgICAgICAgICAgICAgJ1MnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogW1xuICAgICAgICAgICAgICAgICdTdW4nLFxuICAgICAgICAgICAgICAgICdNb24nLFxuICAgICAgICAgICAgICAgICdUdWUnLFxuICAgICAgICAgICAgICAgICdXZWQnLFxuICAgICAgICAgICAgICAgICdUaHVyJyxcbiAgICAgICAgICAgICAgICAnRnJpJyxcbiAgICAgICAgICAgICAgICAnU2F0JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3b3JkOiBbXG4gICAgICAgICAgICAgICAgJ1N1bmRheScsXG4gICAgICAgICAgICAgICAgJ01vbmRheScsXG4gICAgICAgICAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAgICAgICAgICdXZWRuZXNkYXknLFxuICAgICAgICAgICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICAgICAgICAgJ1NhdHVyZGF5JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBkZWZhdWx0IHdvcmQgdHlwZSAoTSB2cyBNb24gdnMgTW9uZGF5KVxuICAgICAgICB0aGlzLmRheVRpdGxlRm9ybWF0ID0gJ2FiYnJldmlhdGlvbic7XG5cbiAgICAgICAgLy8gU2hvdWxkIHRoZSBjYWxlbmRhciBzaG93IHRoZSB3ZWVrZGF5IG5hbWVzIGFib3ZlIGVhY2ggY29sdW1uP1xuICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHRydWU7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGZvciBhIGRheVxuICAgICAgICB0aGlzLmRheVRlbXBsYXRlID0gZGF5VGVtcGxhdGU7XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2V0IGEgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIHRoaXMuc2V0RGF5VGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckRheVRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRlZmF1bHQgZm9ybWF0IGZvciBhIGRheVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnRCc7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBtb250aCB0aXRsZVxuICAgICAgICB0aGlzLm1vbnRoVGl0bGVGb3JtYXQgPSAnTU1NTSdcblxuICAgICAgICAvLyBTaG91bGQgbW9udGggdGl0bGVzIGJlIHNob3duIGJ5IGRlZmF1bHQ/XG4gICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHJ1ZTtcblxuICAgIH1cblxuXG5cblxuICAgICRnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGRhdGV0aW1lPVxcXCJ7eyBkYXkuZGF0ZSB8IGRhdGU6J3l5eXktTU0tZGQnIH19XFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpbWUgdGl0bGU9XFxcInt7IGRheS5kYXRlIH19XFxcIiBkYXRhLW5nLWlmPWRheS5kYXRlPiA8c3BhbiBkYXRhLW5nLWJpbmQ9XFxcIiRjdHJsLmZvcm1hdERhdGUoZGF5LmRhdGUsICRjdHJsLmRhdGVGb3JtYXQpXFxcIj48L3NwYW4+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJleHBvcnQgY2xhc3MgYmNDYWxlbmRhclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy5XRUVLX0xFTkdUSCA9IDc7XG4gICAgICAgIHRoaXMuZGF5VGVtcGxhdGU7XG5cbiAgICB9XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9IGlzQmVmb3JlXG4gICAgICovXG4gICAgZGF0ZUlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RheSA9IG1vbWVudChuZXcgRGF0ZSgpKS5zdGFydE9mKCdkYXknKS5mb3JtYXQoKTtcblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzQmVmb3JlKHRvZGF5KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZTJcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc1RvZGF5XG4gICAgICovXG4gICAgaXNEYXlUb2RheShkYXRlLCBkYXRlMiA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoKSkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmlzU2FtZShkYXRlMik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBUdXJuIGEgaW50ZWdlciAoZS5nLiAnNicpIGludG8gYW4gYXJyYXk6ICdbMSwyLDMsNCw1LDZdJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgaW50ZWdlclRvQXJyYXkoY291bnQpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgdGhlIGJlZ2lubmluZyBvZiBhIHdlZWtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydERhdGUgLSBkYXRlIHRvIHRvIHdvcmsgYmFjayBmcm9tXG4gICAgICogQHBhcmFtIHtBcnJheX0gY291bnQgLSBob3cgbWFueSBkYXlzIHRvIHBhZFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBwYWRcbiAgICAgKi9cbiAgICBwYWREYXlzTGVmdChzdGFydERhdGUsIGNvdW50KSB7XG4gICAgICAgIGNvbnN0IHBhZCA9IFtdO1xuICAgICAgICBjb25zdCBtaXNzaW5nRGF5cyA9IHRoaXMuaW50ZWdlclRvQXJyYXkoY291bnQpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBtaXNzaW5nIGRheXNcbiAgICAgICAgZm9yIChjb25zdCBkYXkgaW4gbWlzc2luZ0RheXMpIHtcbiAgICAgICAgICAgIC8vIEhvdyBtYW55IGRheXMgdG8gZ28gYmFja1xuICAgICAgICAgICAgY29uc3Qgc3VidHJhY3Rpb24gPSBwYXJzZUludChkYXksIDEwKSArIDE7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhhdCBkYXlcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gbW9tZW50KHN0YXJ0RGF0ZSkuc3VidHJhY3QoKHN1YnRyYWN0aW9uKSwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIHBhZC51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICBkYXRlOiBwcmV2aW91cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBhZCBhIGNvbGxlY3Rpb24gd2l0aCBibGFuayB0aWxlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkZGVkQ29sbGVjdGlvblxuICAgICAqL1xuICAgIHBhZEJsYW5rVGlsZXMoY29sbGVjdGlvbiwgY291bnQsIGRpcmVjdGlvbiA9ICdsZWZ0Jykge1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhcnJheVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBkaXJlY3Rpb24gaXMgJ3JpZ2h0J1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyBwYWQgdGhlIGVuZFxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29uY2F0KGRheXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgcGFkIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIHJldHVybiBkYXlzLmNvbmNhdChjb2xsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCBhbiBhcnJheSBpbnRvIGNodW5rcyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRoZXNlIGNodW5rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3JvdXBcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGdyb3Vwc2l6ZSAtIENodW5rIHNpemUuIERlZmF1bHRzIHRvIDcgKG9uZSB3ZWVrKS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY2h1bmtzXG4gICAgICovXG4gICAgY2h1bmsoZ3JvdXAsIGdyb3Vwc2l6ZSA9IHRoaXMuV0VFS19MRU5HVEgpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGNodW5rcyA9IGdyb3VwLmxlbmd0aCAvIHBhcnNlSW50KGdyb3Vwc2l6ZSwgMTApO1xuXG4gICAgICAgIHdoaWxlKGkgPCBjaHVua3MpIHtcbiAgICAgICAgICAgIHNldHNbaV0gPSBncm91cC5zcGxpY2UoMCwgZ3JvdXBzaXplKTtcbiAgICAgICAgICAgIGkgPSBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBpbiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzIElOQ0xVRElORyBib3RoIGRhdGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kXG4gICAgICogQHJldHVybiB7SW50ZWdlcn0gZGF5c1xuICAgICAqL1xuICAgIGR1cmF0aW9uSW5EYXlzKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgY29uc3QgbmV3U3RhcnQgPSBtb21lbnQoc3RhcnQpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICAvLyBBZGQgYSBkYXkgc28gdGhlIGVuZCBkYXRlIGlzIGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvblxuICAgICAgICBjb25zdCBuZXdFbmQgPSBtb21lbnQoZW5kKS5zdGFydE9mKCdkYXknKS5hZGQoMSwgJ2RheXMnKTtcblxuICAgICAgICByZXR1cm4gbmV3RW5kLmRpZmYobmV3U3RhcnQsICAnZGF5cycpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYSBjb2xsZWN0aW9uIG9mIGRheXMgaW50byBzdWIgY29sbGVjdGlvbnMgb2Ygd2Vla3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXMgLSBhcnJheSBvZiBkYXlzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBvcmdhbml6ZVdlZWtzKGRheXMpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkYXkgb2YgdGhlIHdlZWsgdGhhdCB0aGUgY2FsZW5kYXIgc3RhcnRzIGFuZCBlbmRzIG9uXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KGRheXNbMF0uZGF0ZSkuZGF5KCk7XG4gICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQoZGF5c1tkYXlzLmxlbmd0aCAtIDFdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG5cbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IHdlZWtkYXkgY29sdW1uXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5wYWRCbGFua1RpbGVzKGRheXMsIGZpcnN0RGF5LCAnbGVmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZGF5IGlzIGJlZm9yZSBTYXR1cmRheVxuICAgICAgICBpZiAobGFzdERheSA8IFNBVFVSREFZKSB7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBsYXN0IHdlZWsncyBkYXlzIGFyZSBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rKGRheXMpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYnkgbW9udGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbERheXMgLSBBbiBhcnJheSBvZiBhbGwgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uIC0gZGF5cyBvcmdhbml6ZWQgaW50byB3ZWVrcyBhbmQgbW9udGhzXG4gICAgICovXG4gICAgb3JnYW5pemVNb250aHMoYWxsRGF5cykge1xuICAgICAgICBjb25zdCBjYWxlbmRhciA9IFtdO1xuICAgICAgICBjb25zdCBTQVRVUkRBWSA9IDY7XG4gICAgICAgIGNvbnN0IFNVTkRBWSA9IDA7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gYWxsRGF5cztcbiAgICAgICAgbGV0IG1vbnRoO1xuICAgICAgICBsZXQgZGF5T2ZNb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRhdGUoKTtcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAvLyBQYWQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGggd2l0aCBhbnkgbWlzc2luZyBkYXlzXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgbm90IHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgICAgIGlmIChtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCkgPiAwKSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoaXMgbW9udGgncyBkYXlzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIG1vbnRoID0gY29sbGVjdGlvbi5zbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgdGhlIG1pc3NpbmcgZGF5cyBmcm9tIHRoZSBtb250aFxuICAgICAgICAgICAgY29uc3QgcGFkID0gdGhpcy5wYWREYXlzTGVmdChtb250aFswXS5kYXRlLCAoZGF5T2ZNb250aCAtIDEpKTtcblxuICAgICAgICAgICAgLy8gQ29tYmluZSB3aXRoIHRoZSBleGlzdGluZyBhcnJheVxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHBhZC5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFNwbGl0IGludG8gbW9udGhzXG4gICAgICAgIC8vIEFzIGxvbmcgYXMgdGhlcmUgYXJlIGRheXMgbGVmdCBpbiB0aGUgY29sbGVjdGlvblxuICAgICAgICB3aGlsZSAoY29sbGVjdGlvbi5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgdGhlIGZpcnN0IGRhdGUgb2YgdGhlIGNvbGxlY3Rpb24gZWcuICcyNCdcbiAgICAgICAgICAgIGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBob3cgbWFueSBkYXlzIHRoZXJlIGFyZSB0aGlzIG1vbnRoICh0b3RhbClcbiAgICAgICAgICAgIGRheXNJbk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF5c0luTW9udGgoKTtcblxuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc3BsaWNlKDAsIChkYXlzSW5Nb250aCAtIChkYXlPZk1vbnRoIC0gMSkpKTtcblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIHByaW9yIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhpcyBtb250aD9cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbW9tZW50KG1vbnRoWzBdLmRhdGUpLmRheSgpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIGFmdGVyIFN1bmRheVxuICAgICAgICAgICAgaWYgKGZpcnN0RGF5ID4gU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgZmlyc3QgZGF5IGlzIGxpbmVkIHVwIGluIHRoZSBjb3JyZWN0IGNvbHVtblxuICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5wYWRCbGFua1RpbGVzKG1vbnRoLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSG93IG1hbnkgd2Vla2RheXMgYXJlIGFmdGVyIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGg/XG4gICAgICAgICAgICAvLyAocmVtZW1iZXI6IHdlZWtzIGFyZSB6ZXJvLWJhc2VkKVxuICAgICAgICAgICAgY29uc3QgbGFzdERheSA9IG1vbWVudChtb250aFttb250aC5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgYmxhbmsgdGlsZXMgYXJlIG5lZWRlZCBmb3IgdGhlIGxhc3Qgd2Vla1xuICAgICAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgdGhpcy5XRUVLX0xFTkdUSCAtIChsYXN0RGF5ICsgMSksICdyaWdodCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcmdhbml6ZSBpbnRvIHdlZWtzIGFuZCBhZGQgdG8gdGhlIGNhbGVuZGFyIGFycmF5XG4gICAgICAgICAgICBjYWxlbmRhci5wdXNoKHRoaXMuY2h1bmsobW9udGgpKTtcblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gY2FsZW5kYXI7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuIGFycmF5IG9mIGRheXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbGltaXQgLSBob3cgbWFueSBkYXlzIHRvIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydCAtIHRoZSBzdGFydGluZyBkYXRlXG4gICAgICogQHJldHVybiB7QXJyYXl9IGRheXNcbiAgICAgKi9cbiAgICBidWlsZERheXMobGltaXQsIHN0YXJ0ID0gbmV3IERhdGUoKSkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgbGV0IGRheTtcblxuICAgICAgICB3aGlsZSAoY291bnRlciA8IGxpbWl0KSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRheVxuICAgICAgICAgICAgZGF5ID0gbW9tZW50KHN0YXJ0KS5hZGQoY291bnRlciwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBkYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBpbm5lciBkYXkgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHN0b3JlRGF5VGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbm5lciBkYXkgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBnZXREYXlUZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5VGVtcGxhdGU7XG4gICAgfVxuXG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuc2VydmljZS5qc1xuICoqLyIsImltcG9ydCB7IENhbGVuZGFyQ29udHJvbGxlciB9IGZyb20gJy4vY2FsZW5kYXIuY29udHJvbGxlcic7XG5pbXBvcnQgY2FsZW5kYXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sJztcbmltcG9ydCB5ZWFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMveWVhci5odG1sJztcbmltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuaW1wb3J0IHdlZWtUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xuaW1wb3J0IGRheVRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjQ2FsZW5kYXJEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gRGVmaW5lIHBvc3NpYmxlIHRlbXBsYXRlc1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHtcbiAgICAgICAgeWVhcjogeWVhclRlbXBsYXRlLFxuICAgICAgICBtb250aDogbW9udGhUZW1wbGF0ZSxcbiAgICAgICAgd2Vlazogd2Vla1RlbXBsYXRlLFxuICAgICAgICBkYXk6IGRheVRlbXBsYXRlLFxuICAgIH07XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNTdGFydERhdGU6ICdAPycsICAgICAgICAvLyBkYXRlIC0gZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAgICAgYmNFbmREYXRlOiAnQD8nLCAgICAgICAgICAvLyBkYXRlIC0gaWYgbm90IHByZXNlbnQsIHVzZSBjcmVhdGUgdXNpbmcgYmNEYXlzXG4gICAgICAgICAgICBiY05lc3RpbmdEZXB0aDogJ0A/JywgICAgIC8vIHN0cmluZyBbbW9udGh8d2Vla3xkYXldIC0gZGVmYXVsdHM6IG1vbnRoXG4gICAgICAgICAgICBiY0RheXM6ICdAPycsICAgICAgICAgICAgIC8vIGludGVnZXIgLSBkZWZhdWx0IHRvIDMwICh1c2VkIHRvIGNyZWF0ZSBiY0VuZERhdGUpXG4gICAgICAgICAgICBiY0RheVRpdGxlRm9ybWF0OiAnQD8nLCAgIC8vIHN0cmluZyBbd29yZHxhYmJyZXZpYXRpb258bGV0dGVyXSAtIGRlZmF1bHQ6IGFiYnJldmlhdGlvblxuICAgICAgICAgICAgYmNNb250aFRpdGxlRm9ybWF0OiAnQD8nLCAvLyBzdHJpbmcgLSBhbnkgdmFsaWQgTW9tZW50IGRhdGUgZm9ybWF0IC0gZGVmYXVsdDogTU1NTVxuICAgICAgICAgICAgYmNEYXRlU2VsZWN0ZWQ6ICcmJywgICAgICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZCAodGFwL2NsaWNrKVxuICAgICAgICAgICAgYmNTaG93V2Vla2RheXM6ICc9PycsICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIHdlZWtkYXlzIGhlYWRlciBzaG91bGQgYmUgY3JlYXRlZFxuICAgICAgICAgICAgYmNTaG93TW9udGhUaXRsZXM6ICc9PycsICAvLyBkZXRlcm1pbmUgaWYgdGhlIG1vbnRoIHRpdGxlcyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICAgICAgYmNEYXlUZW1wbGF0ZTogJ0A/JywgICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgJ2RheScgdGVtcGxhdGVcbiAgICAgICAgICAgIGJjRGF0ZUZvcm1hdDogJ0A/JywgICAgICAgLy8gZGVmaW5lIGEgY3VzdG9tIGRhdGUgZm9ybWF0IGZvciB0aGUgZGF5XG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGxpbmtGdW5jdGlvbixcbiAgICAgICAgdGVtcGxhdGVVcmw6IGNhbGVuZGFyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6IENhbGVuZGFyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogTGlua1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmtGdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRjdHJsKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjb3JyZWN0IHRlbXBsYXRlIGJhc2VkIG9uIHRoZSBkZXNpcmVkIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgJGN0cmwuZ2V0VGVtcGxhdGVVcmwgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzWyRjdHJsLm5lc3RpbmdEZXB0aF07XG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuXG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUsXG4gICAgICAgIGJjQ2FsZW5kYXJDb25maWcsIGJjQ2FsZW5kYXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcgPSBiY0NhbGVuZGFyQ29uZmlnO1xuICAgICAgICB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlID0gYmNDYWxlbmRhclNlcnZpY2U7XG5cblxuICAgICAgICB0aGlzLl9hY3RpdmF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgX2FjdGl2YXRlKCkge1xuICAgICAgICAvLyBEZWZpbmUgdG9kYXkncyBkYXRlXG4gICAgICAgIHRoaXMudG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5Jyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzdGFydCBkYXRlIGZvciB0aGUgY2FsZW5kYXJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLmJjU3RhcnREYXRlIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zdGFydERhdGU7XG5cbiAgICAgICAgLy8gSWYgdGhlIGVuZCBkYXRlIHdhcyBkZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLmJjRW5kRGF0ZSkge1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaG93IG1hbnkgZGF5cyBhcmUgbmVlZGVkIHVzaW5nIHRoZSBlbmQgZGF0ZVxuICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kdXJhdGlvbkluRGF5cyh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5iY0VuZERhdGUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIERlZmluZSBob3cgbWFueSBkYXlzIGFyZSBuZWVkZWQgZnJvbSB0aGUgY291bnQgcGFzc2VkIGluIG9yIHRoZSBjb25maWdcbiAgICAgICAgICAgIHRoaXMuZGF5cyA9IHBhcnNlSW50KHRoaXMuYmNEYXlzIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlzLCAxMCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBob3cgZGVlcCB0byBvcmdhbml6ZSB0aGUgY2FsZW5kYXJcbiAgICAgICAgdGhpcy5uZXN0aW5nRGVwdGggPSB0aGlzLmJjTmVzdGluZ0RlcHRoIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5uZXN0aW5nRGVwdGg7XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSB3ZWVrZGF5IGhlYWRlcnMgZm9ybWF0XG4gICAgICAgIHRoaXMud2Vla2RheXMgPSB0aGlzLmJjRGF5VGl0bGVGb3JtYXQgP1xuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLndlZWtkYXlTdHlsZVt0aGlzLmJjRGF5VGl0bGVGb3JtYXRdIDpcbiAgICAgICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZy53ZWVrZGF5U3R5bGVbdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRheVRpdGxlRm9ybWF0XTtcblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGZvcm1hdCBmb3IgdGhlIG1vbnRoIHRpdGxlXG4gICAgICAgIHRoaXMubW9udGhUaXRsZUZvcm1hdCA9IHRoaXMuYmNNb250aFRpdGxlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5tb250aFRpdGxlRm9ybWF0O1xuXG4gICAgICAgIC8vIERlZmluZSBpZiBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgdGhpcy5zaG93TW9udGhUaXRsZXMgPSB0eXBlb2YodGhpcy5iY1Nob3dNb250aFRpdGxlcykgPT09ICdib29sZWFuJyA/XG4gICAgICAgICAgICB0aGlzLmJjU2hvd01vbnRoVGl0bGVzIDogdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnNob3dNb250aFRpdGxlcztcblxuICAgICAgICAvLyBJbml0aWFsbHkgbm8gZGF0ZSBpcyBzZWxlY3RlZFxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjYWxlbmRhciB3ZWVrZGF5cyBoZWFkZXJzXG4gICAgICAgIHRoaXMuc2hvd1dlZWtkYXlzID0gdHlwZW9mKHRoaXMuYmNTaG93V2Vla2RheXMpID09PSAnYm9vbGVhbicgP1xuICAgICAgICAgICAgdGhpcy5iY1Nob3dXZWVrZGF5cyA6IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zaG93V2Vla2RheXM7XG5cblxuICAgICAgICAvLyBJZiBhIGN1c3RvbSBkYXkgdGVtcGxhdGUgaGFzIGJlZW4gc2V0IGluIGVpdGhlciBsb2NhdGlvbiAoYXR0cmlidXRlIG9yIHByb3ZpZGVyKVxuICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlIHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIC8vIE5hbWUgdGhlIHRlbXBsYXRlIGxvY2F0aW9uXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUxvY2F0aW9uID0gJ3VzZXJEYXlUZW1wbGF0ZS5odG1sJztcblxuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgc2V0IGEgdGVtcGxhdGUgdmlhIHRoZSBkaXJlY3RpdmUgYXR0cmlidXRlXG4gICAgICAgICAgICBpZiAodGhpcy5iY0RheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gUHV0IHRoZSB1c2VyIHRlbXBsYXRlIGludG8gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0RheVRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGVmaW5lZCBhIHRlbXBsYXRlIHVzaW5nIHRoZSBwcm92aWRlclxuICAgICAgICAgICAgaWYgKHRoaXMuYmNDYWxlbmRhckNvbmZpZy51c2VyRGF5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBQdXQgdGhlIHVzZXIgdGVtcGxhdGUgaW50byB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZUxvY2F0aW9uLCB0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGlubmVyLWRheSB0ZW1wbGF0ZSBvbiB0aGUgc2VydmljZVxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyU2VydmljZS5zdG9yZURheVRlbXBsYXRlKHRlbXBsYXRlTG9jYXRpb24pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBjdXN0b20gdGVtcGxhdGUgd2FzIGRlZmluZWRcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGlubmVyLWRheSB0ZW1wbGF0ZSBvbiB0aGUgc2VydmljZVxuICAgICAgICAgICAgdGhpcy5iY0NhbGVuZGFyU2VydmljZS5zdG9yZURheVRlbXBsYXRlKHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlUZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdGhlIGRhdGUgZm9ybWF0IGZvciB0aGUgaW5kaXZpZHVhbCBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5iY0RhdGVGb3JtYXQgfHwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLmRhdGVGb3JtYXQ7XG5cbiAgICAgICAgLy8gQnVpbGQgYXJyYXkgb2YgZGF5c1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5idWlsZERheXModGhpcy5kYXlzLCB0aGlzLnN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGNhbGVuZGFyIEpTT04gYW5kIGV4cG9zZSB0byB0aGUgRE9NXG4gICAgICAgIHRoaXMuX2J1aWxkQ2FsZW5kYXIoZGF5cywgdGhpcy5uZXN0aW5nRGVwdGgpO1xuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBpcyBwcmlvciB0byB0aGUgY3VycmVudCBkYXRlXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIHVuc2VsZWN0YWJsZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfVxuICAgICAqL1xuICAgIGlzQmVmb3JlVG9kYXkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5kYXRlSXNCZWZvcmVUb2RheShkYXRlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgZGF5IG1hdGNoZXMgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgKi9cbiAgICBpc0RheVRvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuaXNEYXlUb2RheShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gICAgICovXG4gICAgc2VsZWN0RGF0ZShkYXkpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBkYXlcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXk7XG5cbiAgICAgICAgLy8gT25seSBjYWxsIHRoZSBwYXNzZWQgbWV0aG9kIGlmIGl0IGV4aXN0cyBhbmQgYSB2YWxpZCBkYXRlIHdhcyBjaG9zZW5cbiAgICAgICAgaWYgKGRheS5kYXRlICYmIHRoaXMuYmNEYXRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmNEYXRlU2VsZWN0ZWQoe1xuICAgICAgICAgICAgICAgIGRhdGU6IGRheS5kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBhIGRhdGUgdXNpbmcgbW9tZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZERhdGVcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCkge1xuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgY2FsZW5kYXIgSlNPTlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF5c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXB0aFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBfYnVpbGRDYWxlbmRhcihkYXlzLCBkZXB0aCkge1xuXG4gICAgICAgIC8vIENhbGwgdGhlIGNvcnJlY3Qgb3JnYW5pemF0aW9uIG1ldGhvZCBiYXNlZCBvbiB0aGUgbmVzdGluZyBkZXB0aFxuICAgICAgICBpZiAoZGVwdGggPT09ICdtb250aCcpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplTW9udGhzKGRheXMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVwdGggPT09ICd3ZWVrJykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uub3JnYW5pemVXZWVrcyhkYXlzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnZGF5Jykge1xuXG4gICAgICAgICAgICB0aGlzLmJjQ29sbGVjdGlvbiA9IGRheXM7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzZWN0aW9uIGNsYXNzPWJjLWNhbGVuZGFyPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vla2RheXMgZGF0YS1uZy1pZj1cXFwiJGN0cmwuc2hvd1dlZWtkYXlzICYmICRjdHJsLm5lc3RpbmdEZXB0aCA9PT0gJ3dlZWsnXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gJGN0cmwud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMteWVhciBkYXRhLW5nLWlmPVxcXCIkY3RybC5uZXN0aW5nRGVwdGggPT09ICd5ZWFyJ1xcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX3llYXItd3JhcHBlciBiYy1jb2xsZWN0aW9uPSRjdHJsLmJjQ29sbGVjdGlvbj48L2JjLXllYXI+IDxiYy1tb250aCBkYXRhLW5nLWlmPVxcXCIkY3RybC5uZXN0aW5nRGVwdGggPT09ICdtb250aCdcXFwiIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aC13cmFwcGVyIGJjLWNvbGxlY3Rpb249JGN0cmwuYmNDb2xsZWN0aW9uPjwvYmMtbW9udGg+IDxiYy13ZWVrIGRhdGEtbmctaWY9XFxcIiRjdHJsLm5lc3RpbmdEZXB0aCA9PT0gJ3dlZWsnXFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fd2Vlay13cmFwcGVyIGJjLWNvbGxlY3Rpb249JGN0cmwuYmNDb2xsZWN0aW9uPjwvYmMtd2Vlaz4gPGJjLWRheSBkYXRhLW5nLWlmPVxcXCIkY3RybC5uZXN0aW5nRGVwdGggPT09ICdkYXknXFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXdyYXBwZXIgYmMtY29sbGVjdGlvbj0kY3RybC5iY0NvbGxlY3Rpb24+PC9iYy1kYXk+IDwvc2VjdGlvbj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL3llYXIuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1iYy1jYWxlbmRhcl9feWVhciBkYXRhLW5nLXJlcGVhdD1cXFwieWVhciBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPGJjLW1vbnRoIGJjLWNvbGxlY3Rpb249eWVhciBiYy13ZWVrcy1oZWFkZXI9JGN0cmwud2Vla2RheXNIZWFkZXIgY2xhc3M9YmMtY2FsZW5kYXJfX21vbnRoLXdyYXBwZXI+PC9iYy1tb250aD4gPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aCBkYXRldGltZT1cXFwie3sgbW9udGhbMF1bbW9udGhbMF0ubGVuZ3RoIC0gMV0uZGF0ZSB8IGRhdGU6J3l5eXktTU0nIH19XFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwibW9udGggaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aC10aXRsZSBkYXRhLW5nLWJpbmQ9XFxcIiRjdHJsLmZvcm1hdERhdGUobW9udGhbMF1bbW9udGhbMF0ubGVuZ3RoIC0gMV0uZGF0ZSwgJGN0cmwubW9udGhUaXRsZUZvcm1hdClcXFwiIGRhdGEtbmctaWY9JGN0cmwuc2hvd01vbnRoVGl0bGVzPjwvc3Bhbj4gPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWtkYXlzIGRhdGEtbmctaWY9JGN0cmwuc2hvd1dlZWtkYXlzPiA8c3BhbiBjbGFzcz1cXFwiYmMtY2FsZW5kYXJfX2RheSBiYy1jYWxlbmRhcl9fZGF5LS13ZWVrZGF5c1xcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcImRheSBpbiAkY3RybC53ZWVrZGF5cyB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3Ryb25nIGNsYXNzPWJjLWNhbGVuZGFyX19kYXktdGl0bGU+IHt7IGRheSB9fSA8L3N0cm9uZz4gPC9zcGFuPiA8L3NwYW4+IDxiYy13ZWVrIGJjLWNvbGxlY3Rpb249bW9udGggY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWstd3JhcHBlcj48L2JjLXdlZWs+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL21vbnRoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG52YXIgaHRtbCA9IFwiPHRpbWUgY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWsgZGF0ZXRpbWU9XFxcInt7IHdlZWtbd2Vlay5sZW5ndGggLSAxXS5kYXRlIHwgZGF0ZToneXl5eS13dycgfX1cXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJ3ZWVrIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8YmMtZGF5IGJjLWNvbGxlY3Rpb249d2VlayBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXdyYXBwZXI+PC9iYy1kYXk+IDwvdGltZT5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL3dlZWsuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIHBhdGggPSAnL1VzZXJzL2JjL0NvZGUvb3Blbi1zb3VyY2UvYW5ndWxhci1qc29uLWNhbGVuZGFyL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwnO1xudmFyIGh0bWwgPSBcIjxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX19kYXkgZGF0YS1uZy1jbGFzcz1cXFwieyAnYmMtY2FsZW5kYXJfX2RheS0tZGlzYWJsZWQnOiAkY3RybC5pc0JlZm9yZVRvZGF5KGRheS5kYXRlKSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXRvZGF5JzogJGN0cmwuaXNEYXlUb2RheShkYXkuZGF0ZSksXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1ldmVuJzogJGV2ZW4sXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1vZGQnOiAkb2RkLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tcGFkJzogIWRheS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tdmFsaWQnOiBkYXkuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXNlbGVjdGVkJzogZGF5LmRhdGUgPT09ICRjdHJsLnNlbGVjdGVkRGF0ZS5kYXRlIH1cXFwiIGRhdGEtbmctY2xpY2s9JGN0cmwuc2VsZWN0RGF0ZShkYXkpIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCIgdGl0bGU9XFxcInt7IGRheS5kYXRlID8gZGF5LmRhdGUgOiAnJyB9fVxcXCIgdGFiaW5kZXg9XFxcInt7IGRheS5kYXRlID8gMSA6IC0xIH19XFxcIj4gPG5nLWluY2x1ZGUgc3JjPXZtLmRheVRlbXBsYXRlPjwvbmctaW5jbHVkZT4gPC9zcGFuPlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJpbXBvcnQgeWVhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3llYXIuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1llYXJEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiB5ZWFyVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMveWVhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgbW9udGhUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9tb250aC5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjTW9udGhEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgICAgICBiY1dlZWtkYXlzSGVhZGVyOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBtb250aFRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb250aC5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgd2Vla1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3dlZWsuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY1dlZWtEaXJlY3RpdmUoXG4pIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xuICAgICAgICAgICAgYmNDb2xsZWN0aW9uOiAnPScsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiB3ZWVrVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd2Vlay5kaXJlY3RpdmUuanNcbiAqKi8iLCJpbXBvcnQgZGF5V3JhcHBlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RheS5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjRGF5RGlyZWN0aXZlKFxuICAgIGJjQ2FsZW5kYXJDb25maWdcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IGRheVdyYXBwZXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oYmNDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgaW5uZXItZGF5IHRlbXBsYXRlIGZyb20gdGhlIHNlcnZpY2VcbiAgICAgICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSBiY0NhbGVuZGFyU2VydmljZS5nZXREYXlUZW1wbGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGF5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=