/*
CS 290, Week 4: Ajax Interactions
ajax.js
Author: David Rider
July 18, 2018
*/
//API key from openweathermap.org
var apiKey = 'da9a01b0e3e56737158fe27952eb6934';

document.addEventListener('DOMContentLoaded', zipButton);
document.addEventListener('DOMContentLoaded', cityButton);
document.addEventListener('DOMContentLoaded', httpBinButton);
//handles the functionality of the zipcode search via a GET request
function zipButton() {
	document.getElementById('zSubmit').addEventListener('click', function(event) {
		var req = new XMLHttpRequest();
		var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + 
		document.getElementById('zipcode').value + '&units=imperial' + '&appid=' + apiKey;
		req.open('GET', url, true);
		req.addEventListener('load', function() {
			if (req.status >= 200 && req.status < 400) {
				var response = JSON.parse(req.responseText);
				document.getElementById('cityResult').textContent = response.name;
				document.getElementById('tempResult').textContent = response.main.temp;
				document.getElementById('windResult').textContent = response.wind.speed;
				document.getElementById('humResult').textContent = response.main.humidity;
			} else {
				console.log("Error in network request: " + req.statusText);
			};
		});
		req.send(null);
		event.preventDefault();
	});
};
//handles the functionality of the city search via a GET request
function cityButton() {
	document.getElementById('cSubmit').addEventListener('click', function(event) {
		var req = new XMLHttpRequest();
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + 
		document.getElementById('city').value + '&units=imperial' + '&appid=' + apiKey;
		req.open('GET', url, true);
		req.addEventListener('load', function() {
			if(req.status >= 200 && req.status < 400) {
				var response = JSON.parse(req.responseText);
				document.getElementById('cityResult').textContent = response.name;
				document.getElementById('tempResult').textContent = response.main.temp;
				document.getElementById('windResult').textContent = response.wind.speed;
				document.getElementById('humResult').textContent = response.main.humidity;
			} else {
				console.log("Error: " + req.statusText);
			};
		});
		req.send(null);
		event.preventDefault();
	});
};
//POSTS the inpyt to HTTP bin
function httpBinButton() {
	document.getElementById('hSubmit').addEventListener('click', function(event) {
		var req = new XMLHttpRequest();
		var binData = {input:null};
		var url = 'http:httpbin.org/post';
		binData.input = document.getElementById('httpbin').value;
		req.open('POST', url, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function() {
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				console.log(response);
				document.getElementById('httpResult').textContent = response.data;
			} else {
				console.log("Error: " + req.statusText);
			};
		});
		req.send(JSON.stringify(binData));
		event.preventDefault();
	});
};