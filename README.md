Sexy HTML5 Placeholder Shim
=======================

A sexier HTML5 placeholder shim. Dress it up however you like.

[![Build Status](https://travis-ci.org/tylermauthe/jquery-sexy-placeholder.png?branch=master)](https://travis-ci.org/tylermauthe/jquery-sexy-placeholder)
[![Selenium Test Status](https://saucelabs.com/buildstatus/sexyplaceholder)](https://saucelabs.com/u/sexyplaceholder)

## Support
Tested in the following browsers:

[![Selenium Test Status](https://saucelabs.com/browser-matrix/sexyplaceholder.svg)](https://saucelabs.com/u/sexyplaceholder)

## Opinions
* Should not alter input values, instead overlay a placeholder element
* Should create a stylable inline element to hold placeholder text
* Should use as few defaults as possible, unless you use the defaults method
* These opinions are meaningless, everything should be able to be overridden

## Usage
Say you've got a few input elements:
```html
  <input placholder="Username" type="text" />
  <input placholder="Password" type="password" />
  ...
```
You can initialize jquery-sexy-placeholder as easily as this: `$('input').sexyPlaceholder()`

Then style the css class `placeholder`:
```css
  /*Taken from WebKit Default User Agent Stylesheet*/
  .placeholder {
    position: absolute;
    top: 2px;
    left: 4px;
    font-size: 80%;
    word-spacing: -1px;
    color: #A9A9A9;
  }
```

If you hate CSS, love JavaScript too much, or otherwise do not want to alter your CSS, you can also pass options into the function call in JSON format:
```javascript
$('input').sexyPlaceholder({
'class': 'placeholder', //Class attribute for styling things
  'css': {              //jQuery CSS object for inline styles
          'borderBottom':'10px',
          'color':'#444'
          }
});
```
There are some other options that can be set as well, if you're feeling adventurous take a look at the code.

## Defaults
If those CSS values above look correct to you and you don't really give a hoot about the styling, instead use `$('input').sexyPlaceholderDefaults()` and you'll have the same CSS defaults set automatically. No need to add the CSS class to your stylesheet as modifications will happen inline via jQuery - just let the default method do all the work.

## Motivation
Other placeholder shims exist and they're very nice in their own way, but this plugin is unassuming and totally stylable. While some other plugins utilize an approach that sets the value in the input element to simulate a placeholder, this plugin uses a simple span element for greater stylability and simplicity. `jquery-sexy-placeholder` makes no assumptions, it is totally submissive. If you can't seem to make up your mind about what you want from this plugin, then you lay back, relax, and let the plugin do all the work by using the predefined default method.

## Testing
`jquery-sexy-plugin` uses Jasmine to ensure it stays sexy even after some crazy forking. Please, stay safe: wrap your code in tests before committing.

## License
Same license as jQuery, MIT.

## Thanks
If you find this useful, please endorse me: [![endorse](https://api.coderwall.com/tylermauthe/endorsecount.png)](https://coderwall.com/tylermauthe).
