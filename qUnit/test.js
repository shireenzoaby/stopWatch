//Checking that the files and links are set up correctly to test:
QUnit.test( "Initial test", function( assert ) {

  assert.ok( 1 == "1", "Passed!" );
});

// Checking that the HTML elements are present:
QUnit.test( "Test for start button", function( assert ) {
  var actual = document.getElementById("startButton").innerHTML;
  assert.ok(actual === 'Start', "Start button exists" );
});

QUnit.test( "Test for stop button", function( assert ) {
  var actual = document.getElementById("stopButton").innerHTML;
  assert.ok(actual === 'Stop', "Stop button exists" );
});

QUnit.test( "Test for clear button", function( assert ) {
  var actual = document.getElementById("clearButton").innerHTML;
  assert.ok(actual === 'Clear', "Clear button exists" );
});

QUnit.test( "Test for stopwatch title", function( assert ) {
  var actual = document.getElementById('stopWatch').innerHTML;
  assert.ok(actual === 'Stopwatch', "stopwatch title exists" );
});

QUnit.test( "Test that start number is correct", function( assert ) {
  var actual = document.getElementById('watch').innerHTML;
  assert.ok(actual === '00:00:00:00', "stopwatch start number is correct" );
});

// Checking that the js timer function is working:
QUnit.test( "Test start button function", function( assert ) {
  var done = assert.async();
  startWatch();
  window.setTimeout(function(){
    var time = document.getElementById('watch').innerHTML;
    assert.ok(time != '00:00:00:00', "start button triggers time" );
    stop();
    done();
  },500);
});

QUnit.test( "Test startCount variable", function( assert ) {
  startWatch();
  var done = assert.async();
  window.setTimeout(function(){
    var time = document.getElementById('watch').innerHTML;
    stop();
    reset();
    var newTime = document.getElementById('watch').innerHTML;
    assert.ok(startCount === 0, "startCount is equal to 0" );
    done();
  },500);
});

QUnit.test( "Test lapTime variable", function( assert ) {
  startWatch();
  var done = assert.async();
  window.setTimeout(function(){
    var time = document.getElementById('watch').innerHTML;
    stop();
    reset();
    var newTime = document.getElementById('watch').innerHTML;
    assert.ok(lapTime === 0, "lapTime is equal to 0" );
    done();
  },500);
});

QUnit.test( "Test stop buttom function", function( assert ) {
  startWatch();
  var done = assert.async();
  window.setTimeout(function(){
    var time = document.getElementById('watch').innerHTML;
    stop();
    var newTime = document.getElementById('watch').innerHTML;
    assert.ok(newTime === time, "stop button stops time at 00:00:00:50" );
    done();
  },100);
});

QUnit.test( "Test clear buttom function", function( assert ) {
  startWatch();
  var done = assert.async();
  window.setTimeout(function(){
    var time = document.getElementById('watch').innerHTML;
    stop();
    reset();
    var newTime = document.getElementById('watch').innerHTML;
    assert.ok(newTime === '00:00:00:00', "clear button resets to 00:00:00:00" );
    done();
  },500);
});
