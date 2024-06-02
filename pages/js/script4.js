// typewriter effect
// TxtType constructor function
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate; // array of strings to type out
    this.el = el; // HTML element where the text will be displayed
    this.loopNum = 0; // current loop iteration
    this.period = parseInt(period, 10) || 2000; // typing period, default is 2000ms
    this.txt = ''; // current text being typed
    this.tick(); // start the typing effect
    this.isDeleting = false; // flag to indicate if text is being deleted
};

// tick method for the typing effect
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length; // get the current string to type
    var fullTxt = this.toRotate[i]; // the full string to be typed

    if (this.isDeleting) {
    // remove one character from the current text
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    // add one character from the current text
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // update the HTML content of the element
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this; // store reference
    var delta = 200 - Math.random() * 100; // random typing speed

    if (this.isDeleting) { delta /= 2; } // make typing speed faster

    if (!this.isDeleting && this.txt === fullTxt) {
    // pause before deleting once done typing the full text
    delta = this.period; 
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    // move to the next string and start typing once done deleting, 
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    // set timeout to call the tick method again after the calculated delay
    setTimeout(function() {
    that.tick();
    }, delta);
};

// execute function when the window loads
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // inject CSS for the typewriter effect
    var css = document.createElement("style");
    css.type = "text/css";
    // blinking cursor effect, add right border
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};