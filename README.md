# MyDiary

MyDiary is an online journal web application where users can pen down their thoughts and feelings.

## Built Status

[![Build Status](https://travis-ci.org/darhmylarhrey/MyDiary.svg?branch=develop)](https://travis-ci.org/darhmylarhrey/MyDiary)
[![Coverage Status](https://coveralls.io/repos/github/darhmylarhrey/MyDiary/badge.svg)](https://coveralls.io/github/darhmylarhrey/MyDiary)
[![Maintainability](https://api.codeclimate.com/v1/badges/0f99b3f728fdc3829e02/maintainability)](https://codeclimate.com/github/darhmylarhrey/MyDiary/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0f99b3f728fdc3829e02/test_coverage)](https://codeclimate.com/github/darhmylarhrey/MyDiary/test_coverage)

### Style guide

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)

### Techn stack

- [Nodejs](https://nodejs.org/en/)
- [Expressjs](https://expressjs.com/)
- [Mocha](https://mochajs.org/)
- [Chai](http://www.chaijs.com/)

### Features

- Users can create an account and log in.
- Users can view all entries to their diary.
- Users can view the contents of a diary.
- Users can add or modify an entry.

## Installing

#### Prerequisites

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed go to the [NodeJS Website](http://nodejs.org), and follow the download instructions

To install this app

```
git clone https://github.com/EphraimDev/MyDiary.git
```

And install the required dependencies

```
npm install
```

Run server

```
npm start
```

MyDiary app listening on port 4000!

## Running the tests

To run test cases

```
npm test
```

### Working Routes

<table>
<thead>
<tr>
<th>Endpoint</th>
<th>Functionality</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET api/v1/entries</td>
<td>Fetch all entries</td>
</tr>
<tr>
<td>GET api/v1/entries/:entryId</td>
<td>Fetch a single entry</td>
</tr>
<tr>
<td>POST api/v1/entries</td>
<td>Create an entry</td>
</tr>
<tr>
<td>PUT api/v1/entries/:entryId</td>
<td>Modify an entry</td>
</tr>
</tbody></table>

## License

This projects is under the ISC LICENSE

## Author  

[Abobarin Afeez](https://github.com/Darhmylarhrey)

## Acknowledgements

- [Andela](http://andela.com)
- [Google Search](https://google.com)
- [Stackoverflow](stackoverflow.com)
- [w3Schools](w3schools.com)
