/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var wind = new UI.Window();
var textfield = new UI.TimeText({
  position: new Vector2(0, 50),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
	text: '%H:%M:%S',
  textAlign: 'center'
});
wind.add(textfield);
wind.show();
