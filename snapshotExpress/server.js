'use strict';

const express = require('express');
const http = require('http');
const app = require('./app');




app.listen(process.env.PORT || 8080, () => {
	console.log(
	`Your app is listening on port ${process.env.PORT || 8080}`
	)
});