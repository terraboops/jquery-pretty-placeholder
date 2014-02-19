// Code here will be linted with JSHint.
/* jshint ignore:start */
// Make jQuery grab Colors in #hex
// http://stackoverflow.com/questions/6177454/can-i-force-jquery-cssbackgroundcolor-returns-on-hexadecimal-format
$.cssHooks.color = { get: function(elem) { if (elem.currentStyle) var bg = elem.currentStyle["color"]; else if (window.getComputedStyle) var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("color"); if (bg.search("rgb") == -1) return bg; else {bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2); } return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);}}};

;window.Modernizr=function(a,b,c){function u(a){i.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}function z(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)o[c[d]]=c[d]in j;return o.list&&(o.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),o}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,g,h,i=a.length;d<i;d++)j.setAttribute("type",g=a[d]),e=j.type!=="text",e&&(j.value=k,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(g)&&j.style.WebkitAppearance!==c?(f.appendChild(j),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(j,null).WebkitAppearance!=="textfield"&&j.offsetHeight!==0,f.removeChild(j)):/^(search|tel)$/.test(g)||(/^(url|email)$/.test(g)?e=j.checkValidity&&j.checkValidity()===!1:e=j.value!=k)),n[a[d]]=!!e;return n}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k=":)",l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var A in m)t(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.input||z(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),h=j=null,e._version=d,e}(this,this.document),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))});
// Code here will be linted with ignored by JSHint.
/* jshint ignore:end */

var testInputSelector             = "input[type=text]";
var sexyPlaceholderClassSelector  = ".jq-sexy-placeholder";

jQuery(function() {
  window.numberOfInputs = jQuery(testInputSelector).size();

  describe("Test Suite:", function(){

    describe("Feature detection",function(){
      it("should work as good as Modernizr", function() {
        expect(Modernizr.placeholder === jQuery.support.inputPlaceholder).toBe(true);
      });
    });

    afterEach(function(){
      jQuery(sexyPlaceholderClassSelector).remove();
    });
    describe("Placeholder function", function() {
      it("should be available on jQuery selections", function() {
        expect(jQuery('body').sexyPlaceholder).toBeDefined();
      });
    });

    describe("The placeholder shim", function(){
      beforeEach(function(){
        jQuery(testInputSelector).sexyPlaceholder();
      });
      if(jQuery.support.inputPlaceholder) {
        it("should do nothing, because you have a good browser", function(){
          expect(jQuery(sexyPlaceholderClassSelector).size()).toBe(0);
        });
      }
      else {
        it("should make you think you have a browser that doesn't suck", function(){
          expect(jQuery(sexyPlaceholderClassSelector).size()).toBe(numberOfInputs);
        });
      }
    });

    if(!jQuery.support.inputPlaceholder){
      describe("Your browser sucks. Sexy Placeholder", function(){

        it("should be totally unassuming by default",function(){
          jQuery(testInputSelector).sexyPlaceholder();
          expect(jQuery(sexyPlaceholderClassSelector).attr('class')).toBe('jq-sexy-placeholder placeholder');
        });

        it("should have reasonable default method",function(){
          var cssDefinition = {
                'position': 'absolute',
                'top': '2px',
                'left': '4px',
                'fontSize': '13px',
                'wordSpacing': '-1px',
                'color': '#a9a9a9'
          };
          var cssAttributes = ['position','top','left','fontSize','wordSpacing','color'];
          jQuery(testInputSelector).sexyPlaceholderDefaults();
          expect(jQuery(sexyPlaceholderClassSelector).css(cssAttributes)).toEqual(cssDefinition);
        });

        it("should allow reasonable defaults to be overridden",function(){
          var className = 'notPlaceholder';
          var cssDefinition = {'position': 'fixed'};
          var cssAttributes = ['position'];
          jQuery(testInputSelector).sexyPlaceholder({'class': className, 'css': cssDefinition});
          expect(jQuery(sexyPlaceholderClassSelector).hasClass(className)).toBe(true);
          expect(jQuery(sexyPlaceholderClassSelector).css(cssAttributes)).toEqual(cssDefinition);
        });

        it("should disappear when input has value", function(){
          jQuery(testInputSelector).trigger('change');
          expect(jQuery(sexyPlaceholderClassSelector).is(':visible')).toBe(false);
        });
      });
    }
  });
  // For development / debugging / hax0ring / etc
  // describe("DEBUGGING / DEVELOPMENT", function() {
  //   it("triggers placeholder without cleanup", function() {
  //     expect(jQuery(testInputSelector).sexyPlaceholder()).toBeDefined();
  //   });
  // });
});
