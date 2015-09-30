(function() {
var FizzBuzz = (function() {  
// scoping FizzBuzz in case it needs to be used elsewhere
  var FizzBuzz = function() {}; 
  // defining FizzBuzz as a function, but can be empty b/c 
  // all the functionality is in the other functions below
  
  function doFizzBuzz(start,stop) {  
  // start and stop come from the READ function where doFizzBuzz is called
    var resultArr = [];
    // array to store the results
    for (var i = start; i < stop + 1; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        resultArr.push('Fizz'); // push result to array
      } else if (i % 5 === 0 && i % 3 !== 0) {
        resultArr.push('Buzz'); // push result to array
      } else if (i % 3 === 0 && i % 5 === 0) {
        resultArr.push('FizzBuzz'); // push result to array
      } else {
        resultArr.push(i); // push result to array
      }
    }
    return resultArr; 
    // return the array so it can be assigned to this.result in READ
  }
  
  FizzBuzz.prototype.read = function(start,stop) {
    // called in the event listener, 
    // given the values entered in the form as start and stop
    this.start = start;
    this.stop = stop + 1;
    this.result = doFizzBuzz(start,stop);
    // now we can refer to this.result instead of the array variable
    if (start >= stop) {
      alert('Your stop value must be larger than your start value.');
    }
    // error checking
  }

  FizzBuzz.prototype.write = function(heading,list) {
    // called in the event listener, given heading and list
    // as DOM objects in the call
    this.heading = heading; 
    this.list = list;
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
    // removes existing DOM nodes from inside the <ul>
    this.heading.textContent = '';
    // removes text content from list heading
    for (var i = 0; i < this.result.length; i++) {
      // for each item in the array in this.result
      var resultItem = document.createElement('li');
      // create a new <li>
      resultItem.appendChild(document.createTextNode(this.result[i]));
      // append a text node of the array element (ie, fizz, buzz, a number, etc)
      this.list.appendChild(resultItem);
      // append the new <li> to the <ul>
    }
    if (this.start < this.stop) {
      // the IF part of this is to keep it from printing if the start
      // value is greater than the stop value
      this.heading.textContent = 'Your FizzBuzz from ' + this.start + ' to ' + (this.stop - 1) + ':';
      // if all is well, it prints the heading
    }
    this.result = [];
    // empties the results array in preparation for the next entry
  }
  return FizzBuzz; 
  // must return FizzBuzz so it can be heard outside the IFFY
})();

  var fizzbuzz = new FizzBuzz();
  // create an instance on page load
  var elButtons = document.getElementsByTagName('button')[0];
  // create variable for submission button element

  elButtons.addEventListener('click', function(evt){
    // put event listener on submission button
    evt.preventDefault();
    // prevent automatic page reload
    var startValue = parseInt(document.getElementById('beginValue').value);
    // put entered beginning value into a variable
    var stopValue = parseInt(document.getElementById('endValue').value);
    // put entered ending value into a variable
    fizzbuzz.read(startValue,stopValue);
    // call the read function, given the start and stop values
    fizzbuzz.write(document.getElementById('range'),document.getElementsByClassName('printout')[0]);
    // call the write function, given the DOM nodes where it should execute
    document.getElementById('beginValue').value = '';
    // clear the entered beginning value
    document.getElementById('endValue').value = '';
    // clear the entered ending value
  });  // end of event listener

})();