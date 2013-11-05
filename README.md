Sexy HTML5 Placeholder Shim
=======================

A sexier HTML5 placeholder shim. Dress it up however you like.

[![Build Status](https://travis-ci.org/tylermauthe/jquery-sexy-placeholder.png?branch=master)](https://travis-ci.org/tylermauthe/jquery-sexy-placeholder)
[![Selenium Test Status](https://saucelabs.com/buildstatus/sexyplaceholder)](https://saucelabs.com/u/sexyplaceholder)

## Support
This plugin is fully tested with IE8 and IE9 on Windows 7. Might work with other browsers...

## Opinions
* Should not alter input values
* Should create a stylable inline element
* Should as few defaults as possible, unless you use the defaults method
* Should be able to override almost anything

## Usage
Say you've got a few input elements:
```html
  <input placholder="Username" type="text" />
  <input placholder="Password" type="password" />
  ...
```
You can initialize jquery-sexy-placeholder as easily as this: `$('input').sexyPlaceholder()`

Then style the css class `placeholder`: (taken from [WebKit Default User Agent Stylesheet](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css))
```css
  .placeholder {
    position: absolute;
    top: 2px;
    left: 4px;
    font-size: 80%;
    word-spacing: -1px;
    color: #A9A9A9;
  }
```

You can also pass options into the function call in JSON format:
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
If those CSS values above look correct to you and you don't really give a hoot about the styling, instead use `$('input').sexyPlaceholderDefaults()` and you'll have the same CSS defaults set automatically. No need to add the CSS class to your stylesheet as modifications will happen inline - just let the default method do all the work.

## Motivation
Other placeholder shims exist and they're very nice in their own way, but this plugin is unassuming and totally stylable. While some other plugins utilize an approach that sets the value in the input element to simulate a placeholder, this plugin uses a simple span element for greater stylability and simplicity. `jquery-sexy-placeholder` makes no assumptions, it is totally submissive. If you can't seem to make up your mind about what you want from this plugin, then you lay back, relax, and let the plugin do all the work by using a predefined default method - more on this below.

## Testing
`jquery-sexy-plugin` uses Jasmine to ensure it stays sexy even after some crazy forking. Please ensure all pull requests for new features have proper tests and that any bug fixes or feature modifications do not fail the existing tests.

Please feel free to criticize, balk at or otherwise refactor the tests too, because I'm a testing `n00b`.

## License
Same license as jQuery, MIT.

## Thanks
If you find this useful, please endorse me: [![endorse](https://api.coderwall.com/tylermauthe/endorsecount.png)](https://coderwall.com/tylermauthe).
