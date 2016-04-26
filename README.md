# angular-json-calendar

This is pre pre alpha so don't even think about it.


_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Foo](#foo)
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


## Directive Usage

```
<bc-calendar></bc-calendar>
```


#### `bc-start-date`

```
<bc-calendar bc-start-date="2016-04-24T00:00:00.027Z"></bc-calendar>
```


#### `bc-end-date`

```
<bc-calendar bc-end-date="2016-08-11T00:00:00.027Z"></bc-calendar>
```


#### `bc-nesting-depth`

```
<bc-calendar bc-nesting-depth="week"></bc-calendar>
```


#### `bc-days`

```
<bc-calendar bc-days="45"></bc-calendar>
```


#### `bc-week-title-format`

```
<bc-calendar bc-week-title-format="word"></bc-calendar>
```


#### `bc-month-title-format`

```
<bc-calendar bc-month-title-format="MMMM"></bc-calendar>
```


### `bc-date-selected`

```
<bc-calendar bc-date-selected="vm.myMethod(date)"></bc-calendar>
```


#### `bc-show-weekdays`

```
<bc-calendar bc-show-weekdays="false"></bc-calendar>
```


#### `bc-show-month-titles`

```
<bc-calendar bc-show-month-titles="false"></bc-calendar>
```


#### `bc-day-template`

```
<bc-calendar bc-day-template="<span>{{ vm.day.date }}</span>"></bc-calendar>
```


#### `bc-date-format`

```
<bc-calendar bc-date-format="MMM d, yyyy"></bc-calendar>
```



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

