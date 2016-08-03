# angular-json-calendar

<img src="https://cloud.githubusercontent.com/assets/270193/17381800/d28f0a98-599b-11e6-8ac5-b6307cefe388.png" align="right" alt="angular-json-calendar">



[![MIT License][license_image]][license_url] [![Coverage Status][coverage_image]][coverage_url] [![NPM version][npm_version_image]][npm_url]

A calendar module that focuses on providing the data needed to construct a calendar without
being constrained to specific styles and layouts.

Over the span of a year and a half, three separate projects I was on needed a calendar. Each time I
searched through the popular calendar and date modules (and there are a _lot_) hoping to find
something. I mean, who really wants to deal with date and time? Unfortunately, on each occasion,
due to design or functional constraints each calendar was knocked off the list of possibilities. Any
time a calendar module supported advanced functionality it almost always came with explicit
constraints on the markup and/or layout of the calendar.

Once the third time rolled around I decided to write something to scratch my own itch. I wanted
to build something that would accept a few parameters and simply generate the calendar markup for me
free of styles. Or allow me to generate the calendar in pure JSON to build out however I needed.

<hr style="clear:both">

A few examples:

- [Simple demo][demo_simple]
- [Custom start and end dates][demo_custom_dates]
- [Custom nesting depth][demo_nesting_depth]
- [Using the service][demo_service]
- [Side-scrolling theme][demo_style_sidescroller]

---

_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Directive](#directive)
    - [`bc-start-date`](#bc-start-date)
    - [`bc-end-date`](#bc-end-date)
    - [`bc-nesting-depth`](#bc-nesting-depth)
    - [`bc-days`](#bc-days)
    - [`bc-day-title-format`](#bc-day-title-format)
    - [`bc-month-title-format`](#bc-month-title-format)
    - [`bc-date-selected`](#bc-date-selected)
    - [`bc-show-month-titles`](#bc-show-month-titles)
    - [`bc-show-weekdays`](#bc-show-weekdays)
    - [`bc-day-template`](#bc-day-template)
    - [`bc-date-format`](#bc-date-format)
- [Service](#service)
    - [`dateIsBeforeToday()`](#dateisbeforetoday)
    - [`isDayToday()`](#isdaytoday)
    - [`integerToArray()`](#integertoarray)
    - [`padDaysLeft()`](#paddaysleft)
    - [`padBlankTiles()`](#padblanktiles)
    - [`chunk()`](#chunk)
    - [`durationInDays()`](#durationindays)
    - [`organizeWeeks()`](#organizeweeks)
    - [`organizeMonths()`](#organizemonths)
    - [`buildDays()`](#builddays)
- [Provider](#provider)
    - [`startDate`](#startdate)
    - [`nestingDepth`](#nestingdepth)
    - [`days`](#days)
    - [`weekdayStyle`](#weekdaystyle)
    - [`dayTitleFormat`](#daytitleformat)
    - [`showWeekdays`](#showweekdays)
    - [`setDayTemplate`](#setdaytemplate)
    - [`dateFormat`](#dateformat)
    - [`monthTitleFormat`](#monthtitleformat)
    - [`showMonthTitles`](#showmonthtitles)
- [Styling](#styling)
    - [Themes](#themes)
    - [Classes](#classes)
- [Demos](#demos)
- [Development](#development)




## Installation

#### NPM
```bash
npm install angular-json-calendar --save
```

#### Bower
```bash
bower install angular-json-calendar --save
```

#### Manual

```html
<!-- Include the styles (if you need them) -->
<link rel="stylesheet" href="path/to/lib/dist/angular-json-calendar.min.css" />

<!-- Include the module -->
<script src="path/to/lib/dist/angular-json-calendar.min.js"></script>

```


## Dependencies

- Angular.js (~1.4.0)
- Moment.js (~2.13.0)


## Directive

This will generate a basic calendar using the [default settings](#provider).

```html
<bc-calendar></bc-calendar>
```

[Plunker Demo][demo_simple]


#### `bc-start-date`

**Optional:** `String`

This allows you to define a custom starting date for this calendar instance. Defaults to the current
day.

[Custom dates Plunker demo][demo_custom_dates]

```html
<bc-calendar bc-start-date="2016-04-24T00:00:00.027Z"></bc-calendar>
```


#### `bc-end-date`

**Optional:** `String`

This allows you to define a custom end date for this calendar instance. This end-date will define
the length of the calendar and **override** `bc-days` if it is also set.

[Custom dates Plunker demo][demo_custom_dates]

```html
<!-- Not set by default -->
<bc-calendar bc-end-date="2016-08-11T00:00:00.027Z"></bc-calendar>
```


#### `bc-nesting-depth`

**Optional:** `String`

The nesting depth refers to how the days will be wrapped. When set to `day` the calendar will simply
be many day elements inside a single containing element. If the nesting depth is changed to `week`
then the calendar will be a container filled with weeks that in turn are filled with days. If
changed to `month` then the calendar would be a container filled with months, each filled with
weeks and each of those in turn filled with days.

Try changing the nesting depth and inspecting the DOM!

[Nesting depth Plunker demo][demo_nesting_depth]

```html
<!-- Default is 'month' -->
<bc-calendar bc-nesting-depth="week"></bc-calendar>
```


#### `bc-days`

**Optional:** `Integer`

This determines how many days will be output in the calendar. This defaults to `30` and can be
overridden by setting `bc-end-date`.

```html
<!-- Default is 30 -->
<bc-calendar bc-days="45"></bc-calendar>
```


#### `bc-day-title-format`

**Optional:** `String`

This allows you to change the format of the weekday titles. Default is `abbreviation`;

```javascript
bc-day-title-format="letter"
// output: [S, M, T, W, T, F, S]

bc-day-title-format="abbreviation"
// output: [Sun, Mon, Tue, Wed, Thur, Fri, Sat]

bc-day-title-format="word"
// output: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
```

[Plunker Demo][demo_custom_titles]

```html
<!-- Default is 'abbreviation' -->
<bc-calendar bc-day-title-format="word"></bc-calendar>
```


#### `bc-month-title-format`

**Optional:** `String`

This customizes the format of the month name. Any valid Angular [date filter format][angular_date]
can be used. Default is `MMMM` which will output the full month name: `February`.

[Custom titles Plunker demo][demo_custom_titles]

```html
<!-- Default is 'MMMM' -->
<bc-calendar bc-month-title-format="MMMM"></bc-calendar>
```


### `bc-date-selected`

**Optional:** `Method`

Pass in a method which will be called when a date is selected (by a user clicking on a day). This
method only passes in one parameter `date`. This will be the selected date in ISO string format.

[Date selected Plunker demo][demo_callback]

```javascript
// In your controller:
myMethod(date) {
  console.log('User selected: ', date);
  // output: 2016-08-11T00:00:00.027Z
}
```

```html
<!-- In the DOM -->
<bc-calendar bc-date-selected="vm.myMethod(date)"></bc-calendar>
```


#### `bc-show-month-titles`

**Optional:** `Bool`

This boolean value determines if the month titles will be visible. If set to true, the month name
will be output before each month.

```html
<!-- Default is true -->
<bc-calendar bc-show-month-titles="false"></bc-calendar>
```


#### `bc-show-weekdays`

**Optional:** `Bool`

This boolean value determines if the weekday titles will be visible. When `bc-nesting-depth` is set
to `day` or `week`, a single header element will be output above the calendar containing the weekday
names. If `bc-nesting-depth` is set to `month` then a header element will be output at the beginning
of each month.

```html
<!-- Default is true -->
<bc-calendar bc-show-weekdays="false"></bc-calendar>
```


#### `bc-day-template`

**Optional:** `String`

This attribute accepts an HTML template as a string. When a template is passed in, it will be used
in place of the [default inner-day template][source_day_template]. You will have access
to one item to use in the template. Use `day.date` to output the date. Don't forget, you can use
the [Angular date filter][angular_date] in your template.

```html
<!-- Default template can be seen here: /src/templates/day.inner.html -->
<bc-calendar bc-day-template="<span>{{ day.date }}</span>"></bc-calendar>

<!-- You can use the Angular date filter inside your template -->
<bc-calendar bc-day-template="<span>{{ day.date | date:'d / M / yy' }}</span>"></bc-calendar>
```


#### `bc-date-format`

**Optional:** `String`

Pass in a string representing a valid [Angular date filter format][angular_date] to change how the
default date is output in the default day template.

```html
<!-- Default is 'D' -->
<bc-calendar bc-date-format="MMM d, yyyy"></bc-calendar>
```


## Service

Most calendar implementations should be able to simply use the directive. But one of the reasons
this module was created was to give the end user more control over the calendar data itself without
always being tied to HTML output. So the services that I use internally are all exposed to enable
you to create a completely custom calendar.

> Note: Don't be afraid to go look at the [source][source_service]! It isn't too complicated and has plenty of
comments!

Inject the service into your controller to use:

```javascript
// ES6 example
export class MyController {

    constructor(
        bcCalendarService
    ) {
        'ngInject';

        bcCalendarService.dateIsBeforeToday('2016-05-01T00:00:00.027Z');
        // returns true

    }

}

// ES5 example
angular.module('myModule', ['bc.JsonCalendar'])
    .controller('MyController', (bcCalendarService) => {

          bcCalendarService.dateIsBeforeToday('2016-05-01T00:00:00.027Z');
          // returns true

    })
;
```

[Service example Plunker demo][demo_service]


#### `dateIsBeforeToday()`

Check to see if the passed in date occurred before the current date.

- `@param {String} date` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@return {Bool}`

```javascript
bcCalendarService.dateIsBeforeToday('2016-05-01T00:00:00.027Z');
// returns true
```


#### `isDayToday()`

- `@param {String} date` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {String} date2` **Optional**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
  - Default is the current day.
- `@return {Bool}`

Check to see if the passed in date is the same **day** as the current date. You can also pass in a
second date which will be used to check against in place of the current day.

```javascript
bcCalendarService.isDayToday('2016-05-01T00:00:00.027Z');
// returns false

bcCalendarService.isDayToday('2016-05-01T00:00:00.027Z', '2016-05-01T00:00:00.027Z');
// returns true
```


#### `integerToArray()`

- `@param {Integer} count` **Required**
  - The number of array items needed.
- `@return {Array} days`

Turn a integer (`6`) into an array: `[1,2,3,4,5,6]`

```javascript
bcCalendarService.integerToArray(4);
// returns [1, 2, 3, 4]
```


#### `padDaysLeft()`

- `@param {String} startDate` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {Integer} count` **Required**
  - The number of days that should be created.
- `@return {Array} days`

Pad the beginning of a week with any missing days.

If the calendar's nesting depth is set to week or month and the start
date is not at the beginning of the week, you can backfill that week's missing days.

```javascript
bcCalendarService.padDaysLeft('2016-05-18T00:00:00.027Z', 3);
// returns:
[
   {
      "date":"2016-05-15T00:00:00.027Z"
   },
   {
      "date":"2016-05-16T00:00:00.027Z"
   },
   {
      "date":"2016-05-17T00:00:00.027Z"
   }
]
```


#### `padBlankTiles()`

- `@param {Array} collection` **Required**
  - The array that needs blank tiles.
- `@param {Integer} count` **Required**
  - The number of blank tiles needed.
- `@param {String} direction` **Optional**
  - Determines if the tiles are added to the beginning or end of the collection.
  - Valid values: `left`, `right`.
  - Default value: `left`.
- `@return {Array} paddedCollection`

Pad a collection with blank tiles.

If you are generating a classic calendar month and the first day of the month isn't the first day of
the week, then your vertical alignment will be off (meaning your first day may be a Wednesday, but
it is sitting underneath the Sunday label).

```javascript
const collection = [{date: '2016-05-17T00:00:00.027Z'}];

bcCalendarService.padBlankTiles(collection, 2);
// returns:
[
   {
      "date":null
   },
   {
      "date":null
   },
   {
      "date":"2016-05-17T00:00:00.027Z"
   }
]


bcCalendarService.padBlankTiles(collection, 2, 'right');
// returns:
[
   {
      "date":"2016-05-17T00:00:00.027Z"
   },
   {
      "date":null
   },
   {
      "date":null
   }
]
```


#### `chunk()`

- `@param {Array} group` **Required**
  - The array that needs blank tiles.
- `@param {Integer} groupSize` **Optional**
  - How many items each 'chunk' should hold
  - Default value: `7`
- `@return {Array} chunks`

This is an implementation of the `_.chunk()` method you may know from libraries such as Underscore
and Lodash. It will take an array of items and return an array of arrays, each holding the number of
items specified by `groupSize`.

```javascript
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

bcCalendarService.chunk(collection, 4);
// returns:
[
   [
      1,
      2,
      3,
      4
   ],
   [
      5,
      6,
      7,
      8
   ],
   [
      9,
      0
   ]
]
```


#### `durationInDays()`

- `@param {String} date` **Required**
  - The first date to begin the measurement from.
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {String} date` **Required**
  - The second date to measure to.
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@return {Integer} days`

Get the duration in days between two dates **including** both the start and end date.

```javascript
bcCalendarService.durationInDays('2016-04-05T04:00:00.000Z', '2016-04-12T04:00:00.000Z');
// returns: 9
```


#### `organizeWeeks()`

- `@param {Array} days` **Required**
  - The array of days that needs to be organized into weeks.
- `@return {Array} collection`

This method takes a collection of days and organizes them by week, padding any days as needed.

```javascript
bcCalendarService.organizeWeeks(days);
// returns:
[ // collection
  [ // week
    { // day
      date: '2016-04-05T04:00:00.000Z',
    },
    ... // more days
  ],
  ... // more weeks
]
```


#### `organizeMonths()`

- `@param {Array} days` **Required**
  - The array of days that needs to be organized into months.
- `@return {Array} collection`

This method takes a collection of days and organizes them by weeks and months, padding any days as
needed.

```javascript
bcCalendarService.organizeMonths(days);
// returns:
[ // collection
  [ // month
    [ // week
      { // day
        date: '2016-04-05T04:00:00.000Z',
      },
      ... // more days
    ],
    ... // more weeks
  ],
  ... // more months
]
```


#### `buildDays()`

- `@param {Integer} limit` **Required**
  - The number of days to create
- `@param {String} start` **Optional**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
  - Default value: The current day
- `@return {Array} collection`

Build an array with a specific number of days starting from the date specified or the current date.
Although there is only one item, each day is an object so that you can easily add custom properties
to support any features needed.

```javascript
bcCalendarService.buildDays(3, '2016-04-12T04:00:00.000Z');
// returns:
[
   {
      "date":"2016-04-12T04:00:00.000Z"
   },
   {
      "date":"2016-04-13T04:00:00.000Z"
   },
   {
      "date":"2016-04-14T04:00:00.000Z"
   }
]
```

## Provider

The provider allows you to change the default settings for every instance of the calendar within
your project.

> Note: Don't be afraid to go look at the [source][source_provider]! It isn't too complicated and has plenty of
comments!

Inject the provider into your config function to use it:

```javascript
// ES6 example
export function myConfig(
    bcCalendarConfigProvider
) {
    'ngInject';

    // Now every calendar in your project with default to having the header hidden
    bcCalendarConfigProvider.showHeader = false;

}


// ES5 example
angular.module('myModule', ['bc.JsonCalendar'])
    .config(myConfig);

function myConfig(bcCalendarConfigProvider) {
    bcCalendarConfigProvider.showHeader = false;
}
```

[Using the provider Plunker demo][demo_provider_weekday]


#### `startDate`

- `{String}`
  - Any [valid date][moment_parsing] accepted by Moment.js
  - Default value: the current day

Define the default starting date for all calendars.

```javascript
bcCalendarConfigProvider.startDate = '2010-09-20T00:00:00.027Z';
```

#### `nestingDepth`

- `{String}`
  - Valid values: `day`, `week`, `month`
  - Default value: `month`

Define the default nesting depth for all calendars. Learn more about nesting depth in the directive
attribute documentation: [`bc-nesting-depth`](#bc-nesting-depth)

```javascript
bcCalendarConfigProvider.nestingDepth = 'week';
```

### `days`

- `{Integer}`
  - The number of days to be included in each calendar when no [`bc-end-date`](#bc-end-date) is
    defined.
  - Default value: `30`

```javascript
bcCalendarConfigProvider.days = 12;
```

#### `weekdayStyle`

- `{String}`
    - Collections: `letter`, `abbreviation`, `word`

Weekdays can be output in [three formats](#bc-day-title-format). The values for each of these
formats (or all of them) can be overwritten with translations or other custom values.

```javascript
// You can overwrite the entire `weekdayStyle` object or just a subset:
bcCalendarConfigProvider.weekdayStyle.abbreviation = [
    'SU',
    'MO',
    'TU',
    'WE',
    'TH',
    'FR',
    'SA',
];

// Default formats:
// letter       : S, M, ...
// abbreviation : Sun, Mon, ...
// word         : Sunday, Monday, ...
```

#### `dayTitleFormat`

- `{String}`
    - Valid values: `letter`, `abbreviation`, `word`
    - Default value: `abbreviation`

Define the default format for weekday names.

```javascript
bcCalendarConfigProvider.dayTitleFormat = `letter`;
```

#### `showWeekdays`

- `{Bool}`
    - Default value: `true`

Define the visibility of the weekdays header. This is only applicable if
[`nestingDepth`](#nestingdepth) is set to `week` or `month`.

```javascript
bcCalendarConfigProvider.showWeekdays = false;
```

#### `setDayTemplate()`

- `@param {String} template` **Required**

Pass in a template string to be used in place of the default day template. The passed in template
will be put into the [$templateCache][angular_template_cache] with the other templates.

You have access to one item inside this template: `day`. This is an object with a single item. If
the day is a valid day, `day.date` will contain a date formatted as an ISO string:
`2016-05-01T00:00:00.027Z`. If the day is padding for a week or month, `day.date` will be `null`.

```javascript
// Don't forget, you can use the Angular date filter inside the template:
const myTemplate = '<span data-ng-if="day.date">TODAY: {{day.date | date:"d"}}</span>';

bcCalendarConfigProvider.setDayTemplate(myTemplate);
```

```html
<!-- Default day template -->
<time
  datetime="{{ day.date | date:'yyyy-MM-dd' }}"
  class="bc-calendar__day-time"
  title="{{ day.date }}"
  data-ng-if="day.date"
>
  <span data-ng-bind="vm.formatDate(day.date, vm.dateFormat)"></span>
</time>
```

#### `dateFormat`

- `{String}`
    - Any valid Angular [date filter format][angular_date]
    - Default value: `D`

Define the default date format for every day.

```javascript
bcCalendarConfigProvider.dateFormat = 'EEE, d';
// output: Sun, 1
```

#### `monthTitleFormat`

- `{String}`
    - Any valid Angular [date filter format][angular_date]
    - Default value: `MMMM`

Define the default format for the month titles.

```javascript
bcCalendarConfigProvider.monthTitleFormat = 'MMM';
// output: Jan
```

#### `showMonthTitles`

- `{Bool}`
    - Default value: `true`

Define the default visibility of the month names before each month when
[nestingDepth](#nestingdepth) is set to `month`.

```javascript
bcCalendarConfigProvider.showMonthTitles = false;
```


## Styling

One of the primary goals of this project was to create a calendar free of styles and constraints.
Because of this, there are no styles applied by default. But, as a user of open-source modules, I
really value when I can get a simple version up and running without investing too much time.
For that reason there are three _very_ minimal themes included.

There are also plenty of clearly defined [classes](#classes) which allow for the easy creation of
custom themes.


### Themes

These very minimal themes were created to hopefully spark your creativity rather than to use
directly in production apps (unless of course you need something very, very minimal).

To enable a theme, add the corresponding class name to the directive element. Note that the theme may
require a [custom template](#bc-day-template) for the day which adds specific elements and classes
for the theme. You can expand on these examples to build your own custom day and theme.

```javascript
<bc-calendar
  class="bc-calendar--days"
  bc-nesting-depth="week"
  bc-day-template="{{ vm.customDayTemplate }}"
></bc-calendar>
```


#### `.bc-calendar--months`

A classic month by month calendar.

- Nesting depth should be set to `month`
- Custom day template should be used

[Months theme Plunker demo][demo_style_months]

```html
<bc-calendar
  class="bc-calendar--months"
  bc-nesting-depth="month"
  bc-day-template="{{ vm.customDayTemplate }}"
></bc-calendar>

<!-- Note: Since 'month' is the default nesting depth, you can also leave it
     off as long as the default has not been overwritten using the provider -->
<bc-calendar
  class="bc-calendar--months"
  bc-day-template="{{ vm.customDayTemplate }}"
></bc-calendar>
```

**Custom Day Template:**

```html
<time
  class="bc-calendar__day-time"
  datetime="{{ day.date | date:'yyyy-MM-dd' }}"
  title="{{ day.date }}"
  data-ng-if="day.date"
>
  <span class="week--date">{{ day.date | date:"d"}}</span>
  <span class="month">{{ day.date | date:"MMMM"}}</span>
</time>
```


#### `.bc-calendar--days`

A modern vertical calendar comprised of weeks.

- Nesting depth should be set to `week`
- Custom day template should be used

[Days theme Plunker demo][demo_style_weeks]

```html
<bc-calendar
  class="bc-calendar--days"
  bc-nesting-depth="week"
  bc-day-template="{{ vm.yourCustomDayTemplate }}"
></bc-calendar>
```

**Custom Day Template:**

```html
<time
  class="bc-calendar__day-time"
  datetime="{{ day.date | date:'yyyy-MM-dd' }}"
  title="{{ day.date }}"
  data-ng-if="day.date"
>
  <span class="week--date">{{ day.date | date:"d"}}</span>
  <span class="month">{{ day.date | date:"MMMM"}}</span>
</time>
```


#### `.bc-calendar--sidescroll`

A side-scrolling calendar of days.

- Nesting depth should be set to `day`
- Custom day template should be used

[Side-scroll theme Plunker demo][demo_style_sidescroller]

```html
<bc-calendar
  class="bc-calendar--sidescroll"
  bc-nesting-depth="day"
  bc-day-template="{{ vm.customDayTemplate }}"
  bc-days="12"
></bc-calendar>
```

**Custom Day Template:**

```html
<time
  class="bc-calendar__day-time"
  datetime="{{ day.date | date:'yyyy-MM-dd' }}"
  title="{{ day.date }}"
  data-ng-if="day.date"
>
  <span class="week--date">{{ day.date | date:"d"}}th</span>
  <span class="week--day">{{ day.date | date:"EEEE"}}</span>
</time>
```


### Classes

The easiest way to get acquainted with the classes is to check out [one][demo_style_sidescroller] of
the [many][demo_style_weeks], [demos][demo_style_months] and inspect the DOM!

```scss
// <section> Primary container for the calendar
.bc-calendar {}

// <time> The container for a month
.bc-calendar__month {}

// <span> The month title 'March'
.bc-calendar__month-title {}

// <span> Container for the weekday titles 'S M T W T F S'
.bc-calendar__weekdays {}

// <section> The container for an individual day
.bc-calendar__day {}

// <section> Secondary class added to a day when inside the weekdays header
.bc-calendar__day--weekdays {}

// <strong> Wrapper for the text inside a day within the weekdays header
.bc-calendar__day-title {}

// <time> The container for a week
.bc-calendar__week {}

// Class added to a day if it is before today's date
.bc-calendar__day--disabled {}

// Class added to a day if it is the current day
.bc-calendar__day--today {}

// Class added to even days (2nd, 4th, etc)
.bc-calendar__day--even {}

// Class added to odd days (1st, 3rd, etc)
.bc-calendar__day--odd {}

// Class added to a day when it is a 'filler' day rather than a valid day
.bc-calendar__day--pad {}

// Class added to a day when it is a valid day
.bc-calendar__day--valid {}

// Class added to a day when it is the currently selected day
.bc-calendar__day--selected {}

// <span> The inner wrapper for the date in the default day template
.bc-calendar__day-time {}

```


## Demos

- [Simple demo][demo_simple]
- [Custom start and end dates][demo_custom_dates]
- [Custom nesting depth][demo_nesting_depth]
- [Setting custom titles][demo_custom_titles]
- [Using the callback][demo_callback]
- [Custom day template][demo_custom_template]
- [Using the service][demo_service]
- [Using the provider][demo_provider_weekday]
- [Side-scrolling theme][demo_style_sidescroller]
- [Weeks-style vertical calendar theme][demo_style_weeks]
- [Classic months-style theme][demo_style_months]


## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run build:css` - Build CSS
- `npm run watch:css` - Watch CSS and rebuild on change
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/CSS/HTML and rebuild on change




[issues]: https://github.com/benjamincharity/angular-json-calendar/issues
[angular_date]: https://docs.angularjs.org/api/ng/filter/date
[angular_template_cache]: https://docs.angularjs.org/api/ng/service/$templateCache
[moment_format]: http://momentjs.com/docs/#/displaying/format/
[moment_parsing]: http://momentjs.com/docs/#/parsing/string/
[source_day_template]: https://github.com/benjamincharity/angular-json-calendar/blob/master/src/templates/day.inner.html
[source_service]: https://github.com/benjamincharity/angular-json-calendar/blob/master/src/calendar.service.js
[source_provider]: https://github.com/benjamincharity/angular-json-calendar/blob/master/src/calendar.provider.js

[demo_callback]: http://plnkr.co/edit/EIxsl7?p=preview
[demo_custom_titles]: http://plnkr.co/edit/IZblC1?p=preview
[demo_custom_template]: http://plnkr.co/edit/rs86Pt?p=preview
[demo_custom_dates]: http://plnkr.co/edit/PLjpxZ?p=preview
[demo_simple]: http://plnkr.co/edit/U4eJ9n?p=preview
[demo_nesting_depth]: http://plnkr.co/edit/sas4yl?p=preview
[demo_provider_weekday]: http://plnkr.co/edit/kfUK3O?p=preview
[demo_service]: http://plnkr.co/edit/ILCxI3?p=preview
[demo_style_sidescroller]: http://plnkr.co/edit/dhZL1y?p=preview
[demo_style_weeks]: http://plnkr.co/edit/6YQ5u8?p=preview
[demo_style_months]: http://plnkr.co/edit/q7mzZU?p=preview

[coverage_image]: https://coveralls.io/repos/github/benjamincharity/angular-json-calendar/badge.svg
[coverage_url]: https://coveralls.io/github/benjamincharity/angular-json-calendar
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-json-calendar
[npm_version_image]: http://img.shields.io/npm/v/angular-json-calendar.svg

