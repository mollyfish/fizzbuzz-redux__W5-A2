(function() {

  function fizzbuzz(start,end) {
    this.start = start;
    this.end = end;

    for (var i = this.start; i < (this.end + 1); i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else {
      console.log(i);
      }
    }
  }

  fizzbuzz(10,100);
})();