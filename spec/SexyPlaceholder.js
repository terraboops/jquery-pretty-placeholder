// ES5 15.2.3.14 - Object.keys shim
// http://es5.github.com/#x15.2.3.14
if(!Object.keys){var hasDontEnumBug=!0,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function n(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var n=[];for(var o in t)owns(t,o)&&n.push(o);if(hasDontEnumBug)for(var r=0,e=dontEnumsLength;e>r;r++){var u=dontEnums[r];owns(t,u)&&n.push(u)}return n}}

var testInputSelector             = "#tester";
var sexyPlaceholderClassSelector  = ".jq-sexy-placeholder";

describe("Placeholder", function() {
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
      expect(jQuery(sexyPlaceholderClassSelector).size()).toBe(1);
    });
  }
});

if(!Modernizr.placeholder){
  describe("Your browser sucks, tests continuing...", function(){  
    it("should allow reasonable defaults",function(){
      var className = 'notPlaceholder';
      var cssDefinition = {'position': 'fixed'};
      var cssAttributes = Object.keys(cssDefinition);
      jQuery(testInputSelector).sexyPlaceholder({class: className, css: cssDefinition});
      expect(jQuery(sexyPlaceholderClassSelector).hasClass(className)).toBe(true);
      expect(jQuery(sexyPlaceholderClassSelector).css(cssAttributes)).toEqual(cssDefinition);
    });
  });
}