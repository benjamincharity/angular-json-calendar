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
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': $ctrl.isBeforeToday(day.date),\n                   'bc-calendar__day--today': $ctrl.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--odd': $odd,\n                   'bc-calendar__day--pad': !day.date,\n                   'bc-calendar__day--valid': day.date,\n                   'bc-calendar__day--selected': day.date === $ctrl.selectedDate.date }\" data-ng-click=$ctrl.selectDate(day) data-ng-repeat=\"day in vm.bcCollection track by $index\" title=day.date> <ng-include src=vm.dayTemplate></ng-include> </span>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZmM2MzFiNjMzNDY0NzllZTE4NSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2NhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvd2Vlay5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvZGF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3llYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb250aC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWsuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O1NBRWxCO1NBQ0Esa0NBQVksb0JBQVMsbUJBQW1CO2FBQ3BDOzs7O2FBR0EsS0FBSyxjQUFjLGtCQUFrQjs7U0FFekMsY0FBYzs7O0tBR2xCLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1qc29uLWNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbmd1bGFyLWpzb24tY2FsZW5kYXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5ndWxhci1qc29uLWNhbGVuZGFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXItanNvbi1jYWxlbmRhclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWZjNjMxYjYzMzQ2NDc5ZWUxODVcbiAqKi8iLCJpbXBvcnQgeyBiY0NhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi9jYWxlbmRhci5wcm92aWRlcic7XG5pbXBvcnQgeyBiY0NhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBiY0NhbGVuZGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNZZWFyRGlyZWN0aXZlIH0gZnJvbSAnLi95ZWFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY01vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi9tb250aC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYmNXZWVrRGlyZWN0aXZlIH0gZnJvbSAnLi93ZWVrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiY0RheURpcmVjdGl2ZSB9IGZyb20gJy4vZGF5LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdiYy5Kc29uQ2FsZW5kYXInLCBbXSlcbiAgICAucHJvdmlkZXIoJ2JjQ2FsZW5kYXJDb25maWcnLCBiY0NhbGVuZGFyQ29uZmlnKVxuICAgIC5zZXJ2aWNlKCdiY0NhbGVuZGFyU2VydmljZScsIGJjQ2FsZW5kYXJTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ2JjQ2FsZW5kYXInLCBiY0NhbGVuZGFyRGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUoJ2JjWWVhcicsIGJjWWVhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY01vbnRoJywgYmNNb250aERpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdiY1dlZWsnLCBiY1dlZWtEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnYmNEYXknLCBiY0RheURpcmVjdGl2ZSlcbjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgZGF5VGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5LmlubmVyLmh0bWwnO1xuXG5leHBvcnQgY2xhc3MgYmNDYWxlbmRhckNvbmZpZyB7XG5cbiAgICAvLyBEZWZpbmUgZGVmYXVsdHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAvLyBUaGUgY2FsZW5kYXIgd2lsbCBiZWdpbiB3aXRoIHRvZGF5XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpLmZvcm1hdCgpO1xuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHR5cGUgW2RheXx3ZWVrfG1vbnRoXVxuICAgICAgICB0aGlzLm5lc3RpbmdEZXB0aCA9ICdtb250aCc7XG5cbiAgICAgICAgLy8gSG93IG1hbnkgZGF5cyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgICAgIHRoaXMuZGF5cyA9IDMwO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgd2Vla2RheVxuICAgICAgICB0aGlzLndlZWtkYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGxldHRlcjogW1xuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAgICAgJ1QnLFxuICAgICAgICAgICAgICAgICdXJyxcbiAgICAgICAgICAgICAgICAnVCcsXG4gICAgICAgICAgICAgICAgJ0YnLFxuICAgICAgICAgICAgICAgICdTJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246IFtcbiAgICAgICAgICAgICAgICAnU3VuJyxcbiAgICAgICAgICAgICAgICAnTW9uJyxcbiAgICAgICAgICAgICAgICAnVHVlJyxcbiAgICAgICAgICAgICAgICAnV2VkJyxcbiAgICAgICAgICAgICAgICAnVGh1cicsXG4gICAgICAgICAgICAgICAgJ0ZyaScsXG4gICAgICAgICAgICAgICAgJ1NhdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd29yZDogW1xuICAgICAgICAgICAgICAgICdTdW5kYXknLFxuICAgICAgICAgICAgICAgICdNb25kYXknLFxuICAgICAgICAgICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAgICAgICAgICdGcmlkYXknLFxuICAgICAgICAgICAgICAgICdTYXR1cmRheScsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3b3JkIHR5cGUgKE0gdnMgTW9uIHZzIE1vbmRheSlcbiAgICAgICAgdGhpcy5kYXlUaXRsZUZvcm1hdCA9ICdhYmJyZXZpYXRpb24nO1xuXG4gICAgICAgIC8vIFNob3VsZCB0aGUgY2FsZW5kYXIgc2hvdyB0aGUgd2Vla2RheSBuYW1lcyBhYm92ZSBlYWNoIGNvbHVtbj9cbiAgICAgICAgdGhpcy5zaG93V2Vla2RheXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IGRheVRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnNldERheVRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IGZvcm1hdCBmb3IgYSBkYXlcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ0QnO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgZGVmYXVsdCBmb3JtYXQgZm9yIGEgbW9udGggdGl0bGVcbiAgICAgICAgdGhpcy5tb250aFRpdGxlRm9ybWF0ID0gJ01NTU0nXG5cbiAgICAgICAgLy8gU2hvdWxkIG1vbnRoIHRpdGxlcyBiZSBzaG93biBieSBkZWZhdWx0P1xuICAgICAgICB0aGlzLnNob3dNb250aFRpdGxlcyA9IHRydWU7XG5cbiAgICB9XG5cblxuXG5cbiAgICAkZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jYWxlbmRhci5wcm92aWRlci5qc1xuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5pbm5lci5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBkYXRldGltZT1cXFwie3sgZGF5LmRhdGUgfCBkYXRlOid5eXl5LU1NLWRkJyB9fVxcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aW1lIHRpdGxlPVxcXCJ7eyBkYXkuZGF0ZSB9fVxcXCIgZGF0YS1uZy1pZj1kYXkuZGF0ZT4gPHNwYW4gZGF0YS1uZy1iaW5kPVxcXCIkY3RybC5mb3JtYXREYXRlKGRheS5kYXRlLCAkY3RybC5kYXRlRm9ybWF0KVxcXCI+PC9zcGFuPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaW5uZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0IGNsYXNzIGJjQ2FsZW5kYXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuV0VFS19MRU5HVEggPSA3O1xuICAgICAgICB0aGlzLmRheVRlbXBsYXRlO1xuXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sfSBpc0JlZm9yZVxuICAgICAqL1xuICAgIGRhdGVJc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBtb21lbnQobmV3IERhdGUoKSkuc3RhcnRPZignZGF5JykuZm9ybWF0KCk7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc0JlZm9yZSh0b2RheSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGUyXG4gICAgICogQHJldHVybiB7Qm9vbH0gaXNUb2RheVxuICAgICAqL1xuICAgIGlzRGF5VG9kYXkoZGF0ZSwgZGF0ZTIgPSBtb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5pc1NhbWUoZGF0ZTIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVHVybiBhIGludGVnZXIgKGUuZy4gJzYnKSBpbnRvIGFuIGFycmF5OiAnWzEsMiwzLDQsNSw2XSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gZGF5c1xuICAgICAqL1xuICAgIGludGVnZXJUb0FycmF5KGNvdW50KSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFkIHRoZSBiZWdpbm5pbmcgb2YgYSB3ZWVrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnREYXRlIC0gZGF0ZSB0byB0byB3b3JrIGJhY2sgZnJvbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvdW50IC0gaG93IG1hbnkgZGF5cyB0byBwYWRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gcGFkXG4gICAgICovXG4gICAgcGFkRGF5c0xlZnQoc3RhcnREYXRlLCBjb3VudCkge1xuICAgICAgICBjb25zdCBwYWQgPSBbXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0RheXMgPSB0aGlzLmludGVnZXJUb0FycmF5KGNvdW50KTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggbWlzc2luZyBkYXlzXG4gICAgICAgIGZvciAoY29uc3QgZGF5IGluIG1pc3NpbmdEYXlzKSB7XG4gICAgICAgICAgICAvLyBIb3cgbWFueSBkYXlzIHRvIGdvIGJhY2tcbiAgICAgICAgICAgIGNvbnN0IHN1YnRyYWN0aW9uID0gcGFyc2VJbnQoZGF5LCAxMCkgKyAxO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoYXQgZGF5XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KChzdWJ0cmFjdGlvbiksICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBwYWQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogcHJldmlvdXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWQgYSBjb2xsZWN0aW9uIHdpdGggYmxhbmsgdGlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IHBhZGRlZENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBwYWRCbGFua1RpbGVzKGNvbGxlY3Rpb24sIGNvdW50LCBkaXJlY3Rpb24gPSAnbGVmdCcpIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICAvLyBDcmVhdGUgYXJyYXlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZGlyZWN0aW9uIGlzICdyaWdodCdcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gcGFkIHRoZSBlbmRcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChkYXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHBhZCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICByZXR1cm4gZGF5cy5jb25jYXQoY29sbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgYW4gYXJyYXkgaW50byBjaHVua3MgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aGVzZSBjaHVua3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBncm91cHNpemUgLSBDaHVuayBzaXplLiBEZWZhdWx0cyB0byA3IChvbmUgd2VlaykuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGNodW5rc1xuICAgICAqL1xuICAgIGNodW5rKGdyb3VwLCBncm91cHNpemUgPSB0aGlzLldFRUtfTEVOR1RIKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBjaHVua3MgPSBncm91cC5sZW5ndGggLyBwYXJzZUludChncm91cHNpemUsIDEwKTtcblxuICAgICAgICB3aGlsZShpIDwgY2h1bmtzKSB7XG4gICAgICAgICAgICBzZXRzW2ldID0gZ3JvdXAuc3BsaWNlKDAsIGdyb3Vwc2l6ZSk7XG4gICAgICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIHR3byBkYXRlcyBJTkNMVURJTkcgYm90aCBkYXRlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZFxuICAgICAqIEByZXR1cm4ge0ludGVnZXJ9IGRheXNcbiAgICAgKi9cbiAgICBkdXJhdGlvbkluRGF5cyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gbW9tZW50KHN0YXJ0KS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgLy8gQWRkIGEgZGF5IHNvIHRoZSBlbmQgZGF0ZSBpcyBpbmNsdWRlZCBpbiB0aGUgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbmV3RW5kID0gbW9tZW50KGVuZCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VuZC5kaWZmKG5ld1N0YXJ0LCAgJ2RheXMnKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGEgY29sbGVjdGlvbiBvZiBkYXlzIGludG8gc3ViIGNvbGxlY3Rpb25zIG9mIHdlZWtzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXlzIC0gYXJyYXkgb2YgZGF5c1xuICAgICAqIEByZXR1cm4ge0FycmF5fSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgb3JnYW5pemVXZWVrcyhkYXlzKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRoYXQgdGhlIGNhbGVuZGFyIHN0YXJ0cyBhbmQgZW5kcyBvblxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChkYXlzWzBdLmRhdGUpLmRheSgpO1xuICAgICAgICBjb25zdCBsYXN0RGF5ID0gbW9tZW50KGRheXNbZGF5cy5sZW5ndGggLSAxXS5kYXRlKS5kYXkoKTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgaXMgYWZ0ZXIgU3VuZGF5XG4gICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCB3ZWVrZGF5IGNvbHVtblxuICAgICAgICAgICAgZGF5cyA9IHRoaXMucGFkQmxhbmtUaWxlcyhkYXlzLCBmaXJzdERheSwgJ2xlZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGRheSBpcyBiZWZvcmUgU2F0dXJkYXlcbiAgICAgICAgaWYgKGxhc3REYXkgPCBTQVRVUkRBWSkge1xuICAgICAgICAgICAgLy8gUGFkIHdpdGggYmxhbmsgdGlsZXMgc28gdGhhdCB0aGUgbGFzdCB3ZWVrJ3MgZGF5cyBhcmUgaW4gdGhlIGNvcnJlY3Qgd2Vla2RheSBjb2x1bW5cbiAgICAgICAgICAgIGRheXMgPSB0aGlzLnBhZEJsYW5rVGlsZXMoZGF5cyx0aGlzLldFRUtfTEVOR1RIIC0gKGxhc3REYXkgKyAxKSwgJ3JpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaHVuayhkYXlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGJ5IG1vbnRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxEYXlzIC0gQW4gYXJyYXkgb2YgYWxsIGRheXNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gY29sbGVjdGlvbiAtIGRheXMgb3JnYW5pemVkIGludG8gd2Vla3MgYW5kIG1vbnRoc1xuICAgICAqL1xuICAgIG9yZ2FuaXplTW9udGhzKGFsbERheXMpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBbXTtcbiAgICAgICAgY29uc3QgU0FUVVJEQVkgPSA2O1xuICAgICAgICBjb25zdCBTVU5EQVkgPSAwO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IGFsbERheXM7XG4gICAgICAgIGxldCBtb250aDtcbiAgICAgICAgbGV0IGRheU9mTW9udGggPSBtb21lbnQoY29sbGVjdGlvblswXS5kYXRlKS5kYXRlKCk7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgLy8gUGFkIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIHdpdGggYW55IG1pc3NpbmcgZGF5c1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgZGF5IGlzIG5vdCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgICAgICBpZiAobW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpID4gMCkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGlzIG1vbnRoJ3MgZGF5cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICBtb250aCA9IGNvbGxlY3Rpb24uc2xpY2UoMCwgKGRheXNJbk1vbnRoIC0gKGRheU9mTW9udGggLSAxKSkpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIHRoZSBtaXNzaW5nIGRheXMgZnJvbSB0aGUgbW9udGhcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IHRoaXMucGFkRGF5c0xlZnQobW9udGhbMF0uZGF0ZSwgKGRheU9mTW9udGggLSAxKSk7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgd2l0aCB0aGUgZXhpc3RpbmcgYXJyYXlcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBwYWQuY29uY2F0KGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTcGxpdCBpbnRvIG1vbnRoc1xuICAgICAgICAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBkYXlzIGxlZnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgd2hpbGUgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIHRoZSBmaXJzdCBkYXRlIG9mIHRoZSBjb2xsZWN0aW9uIGVnLiAnMjQnXG4gICAgICAgICAgICBkYXlPZk1vbnRoID0gbW9tZW50KGNvbGxlY3Rpb25bMF0uZGF0ZSkuZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0aGVyZSBhcmUgdGhpcyBtb250aCAodG90YWwpXG4gICAgICAgICAgICBkYXlzSW5Nb250aCA9IG1vbWVudChjb2xsZWN0aW9uWzBdLmRhdGUpLmRheXNJbk1vbnRoKCk7XG5cbiAgICAgICAgICAgIC8vIFB1bGwgdGhpcyBtb250aCdzIGRheXMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgbW9udGggPSBjb2xsZWN0aW9uLnNwbGljZSgwLCAoZGF5c0luTW9udGggLSAoZGF5T2ZNb250aCAtIDEpKSk7XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBwcmlvciB0byB0aGUgZmlyc3QgZGF5IG9mIHRoaXMgbW9udGg/XG4gICAgICAgICAgICBjb25zdCBmaXJzdERheSA9IG1vbWVudChtb250aFswXS5kYXRlKS5kYXkoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBpcyBhZnRlciBTdW5kYXlcbiAgICAgICAgICAgIGlmIChmaXJzdERheSA+IFNVTkRBWSkge1xuICAgICAgICAgICAgICAgIC8vIFBhZCB3aXRoIGJsYW5rIHRpbGVzIHNvIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBsaW5lZCB1cCBpbiB0aGUgY29ycmVjdCBjb2x1bW5cbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMucGFkQmxhbmtUaWxlcyhtb250aCwgZmlyc3REYXksICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvdyBtYW55IHdlZWtkYXlzIGFyZSBhZnRlciB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoP1xuICAgICAgICAgICAgLy8gKHJlbWVtYmVyOiB3ZWVrcyBhcmUgemVyby1iYXNlZClcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXkgPSBtb21lbnQobW9udGhbbW9udGgubGVuZ3RoIC0gMV0uZGF0ZSkuZGF5KCk7XG5cbiAgICAgICAgICAgIC8vIElmIGJsYW5rIHRpbGVzIGFyZSBuZWVkZWQgZm9yIHRoZSBsYXN0IHdlZWtcbiAgICAgICAgICAgIGlmIChsYXN0RGF5IDwgU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYWQgd2l0aCBibGFuayB0aWxlcyBzbyB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgbGluZWQgdXAgaW4gdGhlIGNvcnJlY3QgY29sdW1uXG4gICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLnBhZEJsYW5rVGlsZXMobW9udGgsIHRoaXMuV0VFS19MRU5HVEggLSAobGFzdERheSArIDEpLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3JnYW5pemUgaW50byB3ZWVrcyBhbmQgYWRkIHRvIHRoZSBjYWxlbmRhciBhcnJheVxuICAgICAgICAgICAgY2FsZW5kYXIucHVzaCh0aGlzLmNodW5rKG1vbnRoKSk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbiBhcnJheSBvZiBkYXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGxpbWl0IC0gaG93IG1hbnkgZGF5cyB0byBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhcnQgLSB0aGUgc3RhcnRpbmcgZGF0ZVxuICAgICAqIEByZXR1cm4ge0FycmF5fSBkYXlzXG4gICAgICovXG4gICAgYnVpbGREYXlzKGxpbWl0LCBzdGFydCA9IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGxldCBkYXk7XG5cbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsaW1pdCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkYXlcbiAgICAgICAgICAgIGRheSA9IG1vbWVudChzdGFydCkuYWRkKGNvdW50ZXIsICdkYXlzJykudG9JU09TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgaW5uZXIgZGF5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBzdG9yZURheVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuZGF5VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5uZXIgZGF5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgZ2V0RGF5VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRheVRlbXBsYXRlO1xuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgeyBDYWxlbmRhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NhbGVuZGFyLmNvbnRyb2xsZXInO1xuaW1wb3J0IGNhbGVuZGFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvY2FsZW5kYXIuaHRtbCc7XG5pbXBvcnQgeWVhclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3llYXIuaHRtbCc7XG5pbXBvcnQgbW9udGhUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9tb250aC5odG1sJztcbmltcG9ydCB3ZWVrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvd2Vlay5odG1sJztcbmltcG9ydCBkYXlUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9kYXkuaHRtbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiY0NhbGVuZGFyRGlyZWN0aXZlKFxuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIERlZmluZSBwb3NzaWJsZSB0ZW1wbGF0ZXNcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgIHllYXI6IHllYXJUZW1wbGF0ZSxcbiAgICAgICAgbW9udGg6IG1vbnRoVGVtcGxhdGUsXG4gICAgICAgIHdlZWs6IHdlZWtUZW1wbGF0ZSxcbiAgICAgICAgZGF5OiBkYXlUZW1wbGF0ZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjU3RhcnREYXRlOiAnQD8nLCAgICAgICAgLy8gZGF0ZSAtIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgICAgIGJjRW5kRGF0ZTogJ0A/JywgICAgICAgICAgLy8gZGF0ZSAtIGlmIG5vdCBwcmVzZW50LCB1c2UgY3JlYXRlIHVzaW5nIGJjRGF5c1xuICAgICAgICAgICAgYmNOZXN0aW5nRGVwdGg6ICdAPycsICAgICAvLyBzdHJpbmcgW21vbnRofHdlZWt8ZGF5XSAtIGRlZmF1bHRzOiBtb250aFxuICAgICAgICAgICAgYmNEYXlzOiAnQD8nLCAgICAgICAgICAgICAvLyBpbnRlZ2VyIC0gZGVmYXVsdCB0byAzMCAodXNlZCB0byBjcmVhdGUgYmNFbmREYXRlKVxuICAgICAgICAgICAgYmNEYXlUaXRsZUZvcm1hdDogJ0A/JywgICAvLyBzdHJpbmcgW3dvcmR8YWJicmV2aWF0aW9ufGxldHRlcl0gLSBkZWZhdWx0OiBhYmJyZXZpYXRpb25cbiAgICAgICAgICAgIGJjTW9udGhUaXRsZUZvcm1hdDogJ0A/JywgLy8gc3RyaW5nIC0gYW55IHZhbGlkIE1vbWVudCBkYXRlIGZvcm1hdCAtIGRlZmF1bHQ6IE1NTU1cbiAgICAgICAgICAgIGJjRGF0ZVNlbGVjdGVkOiAnJicsICAgICAgLy8gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRhdGUgaXMgc2VsZWN0ZWQgKHRhcC9jbGljaylcbiAgICAgICAgICAgIGJjU2hvd1dlZWtkYXlzOiAnPT8nLCAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSB3ZWVrZGF5cyBoZWFkZXIgc2hvdWxkIGJlIGNyZWF0ZWRcbiAgICAgICAgICAgIGJjU2hvd01vbnRoVGl0bGVzOiAnPT8nLCAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBtb250aCB0aXRsZXMgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgICAgIGJjRGF5VGVtcGxhdGU6ICdAPycsICAgICAgLy8gb3ZlcndyaXRlIHRoZSBkZWZhdWx0ICdkYXknIHRlbXBsYXRlXG4gICAgICAgICAgICBiY0RhdGVGb3JtYXQ6ICdAPycsICAgICAgIC8vIGRlZmluZSBhIGN1c3RvbSBkYXRlIGZvcm1hdCBmb3IgdGhlIGRheVxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiBsaW5rRnVuY3Rpb24sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBjYWxlbmRhclRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiBDYWxlbmRhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJyRjdHJsJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqIExpbmtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rRnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkY3RybCkge1xuXG4gICAgICAgIC8vIFNldCB0aGUgY29ycmVjdCB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgZGVzaXJlZCBuZXN0aW5nIGRlcHRoXG4gICAgICAgICRjdHJsLmdldFRlbXBsYXRlVXJsID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlc1skY3RybC5uZXN0aW5nRGVwdGhdO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG5cblxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLFxuICAgICAgICBiY0NhbGVuZGFyQ29uZmlnLCBiY0NhbGVuZGFyU2VydmljZVxuICAgICkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUgPSAkdGVtcGxhdGVDYWNoZTtcbiAgICAgICAgdGhpcy5iY0NhbGVuZGFyQ29uZmlnID0gYmNDYWxlbmRhckNvbmZpZztcbiAgICAgICAgdGhpcy5iY0NhbGVuZGFyU2VydmljZSA9IGJjQ2FsZW5kYXJTZXJ2aWNlO1xuXG5cbiAgICAgICAgdGhpcy5fYWN0aXZhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIF9hY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gRGVmaW5lIHRvZGF5J3MgZGF0ZVxuICAgICAgICB0aGlzLnRvZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpLnN0YXJ0T2YoJ2RheScpO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgc3RhcnQgZGF0ZSBmb3IgdGhlIGNhbGVuZGFyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5iY1N0YXJ0RGF0ZSB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc3RhcnREYXRlO1xuXG4gICAgICAgIC8vIElmIHRoZSBlbmQgZGF0ZSB3YXMgZGVmaW5lZFxuICAgICAgICBpZiAodGhpcy5iY0VuZERhdGUpIHtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGhvdyBtYW55IGRheXMgYXJlIG5lZWRlZCB1c2luZyB0aGUgZW5kIGRhdGVcbiAgICAgICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuZHVyYXRpb25JbkRheXModGhpcy5zdGFydERhdGUsIHRoaXMuYmNFbmREYXRlKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaG93IG1hbnkgZGF5cyBhcmUgbmVlZGVkIGZyb20gdGhlIGNvdW50IHBhc3NlZCBpbiBvciB0aGUgY29uZmlnXG4gICAgICAgICAgICB0aGlzLmRheXMgPSBwYXJzZUludCh0aGlzLmJjRGF5cyB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5cywgMTApO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgaG93IGRlZXAgdG8gb3JnYW5pemUgdGhlIGNhbGVuZGFyXG4gICAgICAgIHRoaXMubmVzdGluZ0RlcHRoID0gdGhpcy5iY05lc3RpbmdEZXB0aCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcubmVzdGluZ0RlcHRoO1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgd2Vla2RheSBoZWFkZXJzIGZvcm1hdFxuICAgICAgICB0aGlzLndlZWtkYXlzID0gdGhpcy5iY0RheVRpdGxlRm9ybWF0ID9cbiAgICAgICAgICAgIHRoaXMuYmNDYWxlbmRhckNvbmZpZy53ZWVrZGF5U3R5bGVbdGhpcy5iY0RheVRpdGxlRm9ybWF0XSA6XG4gICAgICAgICAgICB0aGlzLmJjQ2FsZW5kYXJDb25maWcud2Vla2RheVN0eWxlW3RoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXlUaXRsZUZvcm1hdF07XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBmb3JtYXQgZm9yIHRoZSBtb250aCB0aXRsZVxuICAgICAgICB0aGlzLm1vbnRoVGl0bGVGb3JtYXQgPSB0aGlzLmJjTW9udGhUaXRsZUZvcm1hdCB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcubW9udGhUaXRsZUZvcm1hdDtcblxuICAgICAgICAvLyBEZWZpbmUgaWYgbW9udGggdGl0bGVzIHNob3VsZCBiZSB2aXNpYmxlXG4gICAgICAgIHRoaXMuc2hvd01vbnRoVGl0bGVzID0gdHlwZW9mKHRoaXMuYmNTaG93TW9udGhUaXRsZXMpID09PSAnYm9vbGVhbicgP1xuICAgICAgICAgICAgdGhpcy5iY1Nob3dNb250aFRpdGxlcyA6IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5zaG93TW9udGhUaXRsZXM7XG5cbiAgICAgICAgLy8gSW5pdGlhbGx5IG5vIGRhdGUgaXMgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBudWxsO1xuXG4gICAgICAgIC8vIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY2FsZW5kYXIgd2Vla2RheXMgaGVhZGVyc1xuICAgICAgICB0aGlzLnNob3dXZWVrZGF5cyA9IHR5cGVvZih0aGlzLmJjU2hvd1dlZWtkYXlzKSA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgICAgICAgIHRoaXMuYmNTaG93V2Vla2RheXMgOiB0aGlzLmJjQ2FsZW5kYXJDb25maWcuc2hvd1dlZWtkYXlzO1xuXG5cbiAgICAgICAgLy8gSWYgYSBjdXN0b20gZGF5IHRlbXBsYXRlIGhhcyBiZWVuIHNldCBpbiBlaXRoZXIgbG9jYXRpb24gKGF0dHJpYnV0ZSBvciBwcm92aWRlcilcbiAgICAgICAgaWYgKHRoaXMuYmNEYXlUZW1wbGF0ZSB8fCB0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAvLyBOYW1lIHRoZSB0ZW1wbGF0ZSBsb2NhdGlvblxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhdGlvbiA9ICd1c2VyRGF5VGVtcGxhdGUuaHRtbCc7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIHNldCBhIHRlbXBsYXRlIHZpYSB0aGUgZGlyZWN0aXZlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuYmNEYXlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFB1dCB0aGUgdXNlciB0ZW1wbGF0ZSBpbnRvIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlTG9jYXRpb24sIHRoaXMuYmNEYXlUZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGRlZmluZWQgYSB0ZW1wbGF0ZSB1c2luZyB0aGUgcHJvdmlkZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmJjQ2FsZW5kYXJDb25maWcudXNlckRheVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gUHV0IHRoZSB1c2VyIHRlbXBsYXRlIGludG8gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgdGhpcy4kdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVMb2NhdGlvbiwgdGhpcy5iY0NhbGVuZGFyQ29uZmlnLnVzZXJEYXlUZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBpbm5lci1kYXkgdGVtcGxhdGUgb24gdGhlIHNlcnZpY2VcbiAgICAgICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uuc3RvcmVEYXlUZW1wbGF0ZSh0ZW1wbGF0ZUxvY2F0aW9uKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gY3VzdG9tIHRlbXBsYXRlIHdhcyBkZWZpbmVkXG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBpbm5lci1kYXkgdGVtcGxhdGUgb24gdGhlIHNlcnZpY2VcbiAgICAgICAgICAgIHRoaXMuYmNDYWxlbmRhclNlcnZpY2Uuc3RvcmVEYXlUZW1wbGF0ZSh0aGlzLmJjQ2FsZW5kYXJDb25maWcuZGF5VGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkYXRlIGZvcm1hdCBmb3IgdGhlIGluZGl2aWR1YWwgZGF5XG4gICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9IHRoaXMuYmNEYXRlRm9ybWF0IHx8IHRoaXMuYmNDYWxlbmRhckNvbmZpZy5kYXRlRm9ybWF0O1xuXG4gICAgICAgIC8vIEJ1aWxkIGFycmF5IG9mIGRheXNcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuYnVpbGREYXlzKHRoaXMuZGF5cywgdGhpcy5zdGFydERhdGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBjYWxlbmRhciBKU09OIGFuZCBleHBvc2UgdG8gdGhlIERPTVxuICAgICAgICB0aGlzLl9idWlsZENhbGVuZGFyKGRheXMsIHRoaXMubmVzdGluZ0RlcHRoKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBkYXkgaXMgcHJpb3IgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSB1bnNlbGVjdGFibGUgZGF5c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybiB7Qm9vbH1cbiAgICAgKi9cbiAgICBpc0JlZm9yZVRvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmNDYWxlbmRhclNlcnZpY2UuZGF0ZUlzQmVmb3JlVG9kYXkoZGF0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlIGRheSBtYXRjaGVzIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2x9XG4gICAgICovXG4gICAgaXNEYXlUb2RheShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLmlzRGF5VG9kYXkoZGF0ZSwgdGhpcy5zdGFydERhdGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRheVxuICAgICAqL1xuICAgIHNlbGVjdERhdGUoZGF5KSB7XG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgZGF5XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF5O1xuXG4gICAgICAgIC8vIE9ubHkgY2FsbCB0aGUgcGFzc2VkIG1ldGhvZCBpZiBpdCBleGlzdHMgYW5kIGEgdmFsaWQgZGF0ZSB3YXMgY2hvc2VuXG4gICAgICAgIGlmIChkYXkuZGF0ZSAmJiB0aGlzLmJjRGF0ZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJjRGF0ZVNlbGVjdGVkKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgYSBkYXRlIHVzaW5nIG1vbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0XG4gICAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWREYXRlXG4gICAgICovXG4gICAgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGNhbGVuZGFyIEpTT05cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRheXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVwdGhcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgX2J1aWxkQ2FsZW5kYXIoZGF5cywgZGVwdGgpIHtcblxuICAgICAgICAvLyBDYWxsIHRoZSBjb3JyZWN0IG9yZ2FuaXphdGlvbiBtZXRob2QgYmFzZWQgb24gdGhlIG5lc3RpbmcgZGVwdGhcbiAgICAgICAgaWYgKGRlcHRoID09PSAnbW9udGgnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYmNDb2xsZWN0aW9uID0gdGhpcy5iY0NhbGVuZGFyU2VydmljZS5vcmdhbml6ZU1vbnRocyhkYXlzKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRlcHRoID09PSAnd2VlaycpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSB0aGlzLmJjQ2FsZW5kYXJTZXJ2aWNlLm9yZ2FuaXplV2Vla3MoZGF5cyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXB0aCA9PT0gJ2RheScpIHtcblxuICAgICAgICAgICAgdGhpcy5iY0NvbGxlY3Rpb24gPSBkYXlzO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGVuZGFyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sJztcbnZhciBodG1sID0gXCI8c2VjdGlvbiBjbGFzcz1iYy1jYWxlbmRhcj4gPHNwYW4gY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWtkYXlzIGRhdGEtbmctaWY9XFxcIiRjdHJsLnNob3dXZWVrZGF5cyAmJiAkY3RybC5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYy1jYWxlbmRhcl9fZGF5IGJjLWNhbGVuZGFyX19kYXktLXdlZWtkYXlzXFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluICRjdHJsLndlZWtkYXlzIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxzdHJvbmcgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS10aXRsZT4ge3sgZGF5IH19IDwvc3Ryb25nPiA8L3NwYW4+IDwvc3Bhbj4gPGJjLXllYXIgZGF0YS1uZy1pZj1cXFwiJGN0cmwubmVzdGluZ0RlcHRoID09PSAneWVhcidcXFwiIGNsYXNzPWJjLWNhbGVuZGFyX195ZWFyLXdyYXBwZXIgYmMtY29sbGVjdGlvbj0kY3RybC5iY0NvbGxlY3Rpb24+PC9iYy15ZWFyPiA8YmMtbW9udGggZGF0YS1uZy1pZj1cXFwiJGN0cmwubmVzdGluZ0RlcHRoID09PSAnbW9udGgnXFxcIiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtd3JhcHBlciBiYy1jb2xsZWN0aW9uPSRjdHJsLmJjQ29sbGVjdGlvbj48L2JjLW1vbnRoPiA8YmMtd2VlayBkYXRhLW5nLWlmPVxcXCIkY3RybC5uZXN0aW5nRGVwdGggPT09ICd3ZWVrJ1xcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX3dlZWstd3JhcHBlciBiYy1jb2xsZWN0aW9uPSRjdHJsLmJjQ29sbGVjdGlvbj48L2JjLXdlZWs+IDxiYy1kYXkgZGF0YS1uZy1pZj1cXFwiJGN0cmwubmVzdGluZ0RlcHRoID09PSAnZGF5J1xcXCIgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS13cmFwcGVyIGJjLWNvbGxlY3Rpb249JGN0cmwuYmNDb2xsZWN0aW9uPjwvYmMtZGF5PiA8L3NlY3Rpb24+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9jYWxlbmRhci5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy95ZWFyLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9YmMtY2FsZW5kYXJfX3llYXIgZGF0YS1uZy1yZXBlYXQ9XFxcInllYXIgaW4gdm0uYmNDb2xsZWN0aW9uIHRyYWNrIGJ5ICRpbmRleFxcXCI+IDxiYy1tb250aCBiYy1jb2xsZWN0aW9uPXllYXIgYmMtd2Vla3MtaGVhZGVyPSRjdHJsLndlZWtkYXlzSGVhZGVyIGNsYXNzPWJjLWNhbGVuZGFyX19tb250aC13cmFwcGVyPjwvYmMtbW9udGg+IDwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMveWVhci5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy9tb250aC5odG1sJztcbnZhciBodG1sID0gXCI8dGltZSBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGggZGF0ZXRpbWU9XFxcInt7IG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUgfCBkYXRlOid5eXl5LU1NJyB9fVxcXCIgZGF0YS1uZy1yZXBlYXQ9XFxcIm1vbnRoIGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiPiA8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fbW9udGgtdGl0bGUgZGF0YS1uZy1iaW5kPVxcXCIkY3RybC5mb3JtYXREYXRlKG1vbnRoWzBdW21vbnRoWzBdLmxlbmd0aCAtIDFdLmRhdGUsICRjdHJsLm1vbnRoVGl0bGVGb3JtYXQpXFxcIiBkYXRhLW5nLWlmPSRjdHJsLnNob3dNb250aFRpdGxlcz48L3NwYW4+IDxzcGFuIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrZGF5cyBkYXRhLW5nLWlmPSRjdHJsLnNob3dXZWVrZGF5cz4gPHNwYW4gY2xhc3M9XFxcImJjLWNhbGVuZGFyX19kYXkgYmMtY2FsZW5kYXJfX2RheS0td2Vla2RheXNcXFwiIGRhdGEtbmctcmVwZWF0PVxcXCJkYXkgaW4gJGN0cmwud2Vla2RheXMgdHJhY2sgYnkgJGluZGV4XFxcIj4gPHN0cm9uZyBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5LXRpdGxlPiB7eyBkYXkgfX0gPC9zdHJvbmc+IDwvc3Bhbj4gPC9zcGFuPiA8YmMtd2VlayBiYy1jb2xsZWN0aW9uPW1vbnRoIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrLXdyYXBwZXI+PC9iYy13ZWVrPiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9tb250aC5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgcGF0aCA9ICcvVXNlcnMvYmMvQ29kZS9vcGVuLXNvdXJjZS9hbmd1bGFyLWpzb24tY2FsZW5kYXIvc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWwnO1xudmFyIGh0bWwgPSBcIjx0aW1lIGNsYXNzPWJjLWNhbGVuZGFyX193ZWVrIGRhdGV0aW1lPVxcXCJ7eyB3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uZGF0ZSB8IGRhdGU6J3l5eXktd3cnIH19XFxcIiBkYXRhLW5nLXJlcGVhdD1cXFwid2VlayBpbiB2bS5iY0NvbGxlY3Rpb24gdHJhY2sgYnkgJGluZGV4XFxcIj4gPGJjLWRheSBiYy1jb2xsZWN0aW9uPXdlZWsgY2xhc3M9YmMtY2FsZW5kYXJfX2RheS13cmFwcGVyPjwvYmMtZGF5PiA8L3RpbWU+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy93ZWVrLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsInZhciBwYXRoID0gJy9Vc2Vycy9iYy9Db2RlL29wZW4tc291cmNlL2FuZ3VsYXItanNvbi1jYWxlbmRhci9zcmMvdGVtcGxhdGVzL2RheS5odG1sJztcbnZhciBodG1sID0gXCI8c3BhbiBjbGFzcz1iYy1jYWxlbmRhcl9fZGF5IGRhdGEtbmctY2xhc3M9XFxcInsgJ2JjLWNhbGVuZGFyX19kYXktLWRpc2FibGVkJzogJGN0cmwuaXNCZWZvcmVUb2RheShkYXkuZGF0ZSksXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS10b2RheSc6ICRjdHJsLmlzRGF5VG9kYXkoZGF5LmRhdGUpLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tZXZlbic6ICRldmVuLFxcbiAgICAgICAgICAgICAgICAgICAnYmMtY2FsZW5kYXJfX2RheS0tb2RkJzogJG9kZCxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXBhZCc6ICFkYXkuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgJ2JjLWNhbGVuZGFyX19kYXktLXZhbGlkJzogZGF5LmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICdiYy1jYWxlbmRhcl9fZGF5LS1zZWxlY3RlZCc6IGRheS5kYXRlID09PSAkY3RybC5zZWxlY3RlZERhdGUuZGF0ZSB9XFxcIiBkYXRhLW5nLWNsaWNrPSRjdHJsLnNlbGVjdERhdGUoZGF5KSBkYXRhLW5nLXJlcGVhdD1cXFwiZGF5IGluIHZtLmJjQ29sbGVjdGlvbiB0cmFjayBieSAkaW5kZXhcXFwiIHRpdGxlPWRheS5kYXRlPiA8bmctaW5jbHVkZSBzcmM9dm0uZGF5VGVtcGxhdGU+PC9uZy1pbmNsdWRlPiA8L3NwYW4+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9kYXkuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCB5ZWFyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMveWVhci5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjWWVhckRpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHllYXJUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogKCkgPT4ge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy95ZWFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBtb250aFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL21vbnRoLmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNNb250aERpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgICAgIGJjV2Vla2RheXNIZWFkZXI6ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IG1vbnRoVGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vbnRoLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCB3ZWVrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvd2Vlay5odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJjV2Vla0RpcmVjdGl2ZShcbikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBjb25zdCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICAgICAgICBiY0NvbGxlY3Rpb246ICc9JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHdlZWtUZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogKCkgPT4ge30sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy93ZWVrLmRpcmVjdGl2ZS5qc1xuICoqLyIsImltcG9ydCBkYXlXcmFwcGVyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvZGF5Lmh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmNEYXlEaXJlY3RpdmUoXG4gICAgYmNDYWxlbmRhckNvbmZpZ1xuKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGJjQ29sbGVjdGlvbjogJz0nLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogZGF5V3JhcHBlclRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbihiY0NhbGVuZGFyU2VydmljZSkge1xuICAgICAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBpbm5lci1kYXkgdGVtcGxhdGUgZnJvbSB0aGUgc2VydmljZVxuICAgICAgICAgICAgdGhpcy5kYXlUZW1wbGF0ZSA9IGJjQ2FsZW5kYXJTZXJ2aWNlLmdldERheVRlbXBsYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kYXkuZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==