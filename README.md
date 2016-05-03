# angular-json-calendar

- Had to create 3 calendars over the past couple years.
- Always needed a custom design which didn't work with existing calendar directives.
- Wanted to create something that took off the load of building out the calendar data without
    forcing me into a specific design solution (paginated months/etc)


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
    - [`bc-day-template`](#bc-day template)
    - [`bc-date-format`](#bc-date-format)
- [Service](#service)
    - [`dateIsBeforeToday()`](#dateIsBeforeToday)
    - [`isDayToday`](#isDayToday)
    - [`integerToArray`](#integerToArray)
    - [`padDaysLeft`](#padDaysLeft)
    - [`padBlankTiles`](#padBlankTiles)
    - [`chunk`](#chunk)
    - [`durationInDays`](#durationInDays)
    - [`organizeWeeks`](#organizeWeeks)
    - [`organizeMonths`](#organizeMonths)
    - [`buildDays`](#buildDays)
- [Provider](#provider)
    - [`startDate`](#startDate)
    - [`nestingDepth`](#nestingDepth)
    - [`weekdayStyle`](#weekdayStyle)
    - [`dayTitleFormat`](#dayTitleFormat)
    - [`showWeekdays`](#showWeekdays)
    - [`setDayTemplate`](#setDayTemplate)
    - [`dateFormat`](#dateFormat)
    - [`monthTitleFormat`](#monthTitleFormat)
    - [`showMonthTitles`](#showMonthTitles)
- [Styling](#styling)
    - [Theme](#theme)
    - [Classes](#classes)
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

## Dependencies

- Angular.js (~1.4.0)
- Moment.js (~2.13.0)


## Directive

[Plunker Demo][demo_simple]

```
<bc-calendar></bc-calendar>
```

This will generate a basic calendar using the [default settings][TODO].



#### `bc-start-date`

**Optional:** `String`

This allows you to define a custom starting date for this calendar instance. Defaults to the current
day.

[Custom dates Plunker demo][demo_custom_dates]

```
<bc-calendar bc-start-date="2016-04-24T00:00:00.027Z"></bc-calendar>
```


#### `bc-end-date`

**Optional:** `String`

This allows you to define a custom end date for this calendar instance. This end-date will define
the length of the calendar and **override** `bc-days` if it is also set.

[Custom dates Plunker demo][demo_custom_dates]

```
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

```
<bc-calendar bc-nesting-depth="week"></bc-calendar>
```


#### `bc-days`

**Optional:** `Integer`

This determines how many days will be output in the calendar. This defaults to `30` and can be
overridden by setting `bc-end-date`.

```
<bc-calendar bc-days="45"></bc-calendar>
```


#### `bc-day-title-format`

**Optional:** `String`

This allows you to change the format of the weekday titles. Default is `abbreviation`;

```
bc-day-title-format="letter"
// output: [S, M, T, W, T, F, S]

bc-day-title-format="abbreviation"
// output: [Sun, Mon, Tue, Wed, Thur, Fri, Sat]

bc-day-title-format="word"
// output: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
```

[Plunker Demo][demo_custom_titles]

```
<bc-calendar bc-day-title-format="word"></bc-calendar>
```


#### `bc-month-title-format`

**Optional:** `String`

This customizes the month name format. Any valid Angular [date filter format][angular_date] can be
used. Default is `MMMM` which will output the full month name eg `February`.

[Custom titles Plunker demo][demo_custom_titles]

```
<bc-calendar bc-month-title-format="MMMM"></bc-calendar>
```


### `bc-date-selected`

**Optional:** `Method`

Pass in a method which will be called when a date is selected (by a user clicking on a day). This
method only passes in one parameter `date`. This will be the selected date in ISO string format.

[Date selected Plunker demo][demo_callback]

```
// In your controller:
myMethod(date) {
  console.log('User selected: ', date);
  // output: 2016-08-11T00:00:00.027Z
}

// In the dom:
<bc-calendar bc-date-selected="vm.myMethod(date)"></bc-calendar>
```


#### `bc-show-month-titles`

**Optional:** `Bool`

This boolean value determines if the month titles will be visible. If set to true, The month name
will be output before each month. Default is `true`.

```
<bc-calendar bc-show-month-titles="false"></bc-calendar>
```


#### `bc-show-weekdays`

**Optional:** `Bool`

This boolean value determines if the weekday titles will be visible. When `bc-nesting-depth` is set
to `day` or `week`, a single header element will be output above the calendar containing the weekday
names. If `bc-nesting-depth` is set to `month` then a header element will be output at the beginning
of each month. Default is `true`.

```
<bc-calendar bc-show-weekdays="false"></bc-calendar>
```


#### `bc-day-template`

**Optional:** `String`

This attribute accepts an HTML template as a string. When a template is passed in, it will be used
in place of the [default inner-day template][source_day_template]. You will have access
to one item to use in the template. Use `vm.day.date` to output the date. Don't forget, you can use
the [Angular date filter][angular_date] in your template.

```html
<bc-calendar bc-day-template="<span>{{ vm.day.date }}</span>"></bc-calendar>

<!-- Using the date filter -->
<bc-calendar bc-day-template="<span>{{ vm.day.date | date:'d / M / yy' }}</span>">
</bc-calendar>
```


#### `bc-date-format`

**Optional:** `String`

Pass in a string representing a valid [Angular date filter format][angular_date] to change how the
default date is output.

```
<bc-calendar bc-date-format="MMM d, yyyy"></bc-calendar>
```


## Service

Most calendar implementations should be able to simply use the directive. But one of the reasons
this module was created was to give the end user more control over the calendar data itself without
always being tied to HTML output. So the services that I use internally are all exposed so that you
can build a completely custom calendar.

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

    }

}

// ES5 example
angular.module('myModule')
    .controller('MyController', (bcCalendarService) => {

          bcCalendarService.dateIsBeforeToday('2016-05-01T00:00:00.027Z');

    })
;
```

[Using the service Plunker demo][demo_service]


#### `dateIsBeforeToday()`

A simple check to see if the passed in date occurred before the current date.

- `@param {String} date` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@return {Bool} isBefore`

```javascript
bcCalendarService.dateIsBeforeToday('2016-05-01T00:00:00.027Z');
// returns true
```


#### `isDayToday`

- `@param {String} date` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {String} date2` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@return {Bool} isToday`

A simple check to see if the passed in date is the same **day** as the current date.

```javascript
bcCalendarService.isDayToday('2016-05-01T00:00:00.027Z');
// returns false
```


#### `integerToArray`

- `@param {Integer} count` **Required**
  - The number of array items needed.
- `@return {Array} days`

Turn a integer (e.g. 6) into an array: '[1,2,3,4,5,6]'

```javascript
bcCalendarService.integerToArray(4);
// returns [1, 2, 3, 4]
```


#### `padDaysLeft`

- `@param {String} startDate` **Required**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {Integer} count` **Required**
  - The number of days that should be created.
- `@return {Array} days`

Pad the beginning of a week.

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


#### `padBlankTiles`

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


#### `chunk`

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


#### `durationInDays`

- `@param {String} date` **Required**
  - The first date to begin the measurement from.
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@param {String} date` **Required**
  - The second date to measure to.
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
- `@return {Integer} days`

Get the duration in days between two dates **including** both the start and end date.

```javascript
const start = '2016-04-05T04:00:00.000Z';
const end = '2016-04-12T04:00:00.000Z';

bcCalendarService.durationInDays(start, end);
// returns: 9
```


#### `organizeWeeks`

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


#### `organizeMonths`

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


#### `buildDays`

- `@param {Integer} limit` **Required**
  - The number of days to create
- `@param {String} start` **Optional**
  - Any string representing a [valid date][moment_parsing] accepted by Moment.js
  - Default value: `new Date()`
- `@return {Array} collection`

Build an array with a specific number of days starting from the date specified.

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

[Plunker Demo][demo_provider_weekday]

#### `startDate`


#### `nestingDepth`


#### `weekdayStyle`


#### `dayTitleFormat`


#### `showWeekdays`


#### `setDayTemplate`


#### `dateFormat`


#### `monthTitleFormat`


#### `showMonthTitles`


## Styling

- Purposefully no real style.
- Couple lean themes so it can be 'plug n play'

### Theme


### Classes

`section.bc-calendar` Primary container.
`span.bc-calendar__month-title` Container for the month name.
`span.bc-calendar__weekday` Container for the weekday titles (M, W, T, etc).
`time.bc-calendar__month` Month element.
`time.bc-calendar__week` week element.
`span.bc-calendar__day` day element.
`time.bc-calendar__day-time` inner day element.



## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run build:css` - Build CSS
- `npm run watch:css` - Watch CSS and rebuild on change
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/CSS/HTML and rebuild on change




[issues]: https://github.com/benjamincharity/angular-json-calendar/issues
[angular_date]: https://docs.angularjs.org/api/ng/filter/date
[moment_format]: http://momentjs.com/docs/#/displaying/format/
[moment_parsing]: http://momentjs.com/docs/#/parsing/string/
[source_day_template]: https://github.com/benjamincharity/angular-json-calendar/blob/master/src/templates/day.inner.html
[source_service]: https://github.com/benjamincharity/angular-json-calendar/blob/master/src/calendar.service.js

[demo_callback]: http://plnkr.co/edit/EIxsl7?p=preview
[demo_custom_titles]: http://plnkr.co/edit/IZblC1?p=preview
[demo_custom_template]: http://plnkr.co/edit/rs86Pt?p=preview
[demo_custom_dates]: http://plnkr.co/edit/PLjpxZ?p=preview
[demo_simple]: http://plnkr.co/edit/U4eJ9n?p=preview
[demo_nesting_depth]: http://plnkr.co/edit/sas4yl?p=preview
[demo_provider_weekday]: http://plnkr.co/edit/kfUK3O?p=preview
[demo_service]: http://plnkr.co/edit/ILCxI3?p=preview

