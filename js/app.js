(function() {
  function FizzBuzz() {
    var startValue;
    var stopValue;
    var range;
    var resultList;
    var resultItem;
  }
  FizzBuzz.prototype.read = function() {
    startValue = parseInt(document.getElementById('beginValue').value);
    stopValue = parseInt(document.getElementById('endValue').value);
    if (startValue >= stopValue) {
      alert("Your stop value must be larger than your start value.");
    }
  }
  FizzBuzz.prototype.write = function(start,stop) {
    this.start = start;
    this.stop = stop + 1;
    range = document.getElementById('range');
    resultList = document.getElementsByClassName('printout')[0];
    resultItem = document.createElement('li');
    while (resultList.firstChild) {
      resultList.removeChild(resultList.firstChild);
    }
    range.textContent = '';
    function print(option) {
      resultList = document.getElementsByClassName('printout')[0];
      resultItem = document.createElement('li');
      resultItem.appendChild(document.createTextNode(option));
      resultList.appendChild(resultItem);
    }
    if (startValue < stopValue) {
      range.textContent = 'Your FizzBuzz from ' + startValue + ' to ' + stopValue + ':';
    }
    for (var i = this.start; i < this.stop; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        print('Fizz');
      } else if (i % 5 === 0 && i % 3 !== 0) {
        print('Buzz');
      } else if (i % 3 === 0 && i % 5 === 0) {
        print('FizzBuzz');
      } else {
        print(i);
      }
    }
  }
  var elButtons = document.getElementsByTagName('button')[0];
  elButtons.addEventListener('click', function(evt){
    evt.preventDefault();
    fizzbuzz.read();
    fizzbuzz.write(startValue,stopValue);
    document.getElementById('beginValue').value = '';
    document.getElementById('endValue').value = '';
  });
  var fizzbuzz = new FizzBuzz();
})();