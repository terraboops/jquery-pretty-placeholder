// Code here will be linted with JSHint.
/* jshint ignore:start */
// Make jQuery grab Colors in #hex
// http://stackoverflow.com/questions/6177454/can-i-force-jquery-cssbackgroundcolor-returns-on-hexadecimal-format
$.cssHooks.color = { get: function(elem) { if (elem.currentStyle) var bg = elem.currentStyle["color"]; else if (window.getComputedStyle) var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("color"); if (bg.search("rgb") == -1) return bg; else {bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2); } return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);}}};
// Code here will be linted with ignored by JSHint.
/* jshint ignore:end */

var testInputSelector             = "input[type=text]";
var sexyPlaceholderClassSelector  = ".jq-sexy-placeholder";

jQuery(function() {
  window.numberOfInputs = jQuery(testInputSelector).size();
});
describe("Test Suite:", function(){

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
    if(Modernizr.placeholder) {
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

  if(!Modernizr.placeholder){
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