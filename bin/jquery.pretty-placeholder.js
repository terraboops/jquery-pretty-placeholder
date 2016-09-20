// Pretty Placeholder Shim. Making IE8 pretty since 2013.
// Author: Tyler Mauthe
(function($){

  $(function(){
    var inputElement = document.createElement("input");
    $.support.inputPlaceholder = (typeof inputElement.placeholder !== "undefined");
  });

  $.extend($.fn, {
    'prettyPlaceholder': function(options){
      if(!($.support.inputPlaceholder)){
        
        //Hide placeholder on user input
        var defaultUserInputHandler = function(selector) {
          $('body').delegate(selector, 'keydown keypress keyup change paste', function(){
            var $this = $(this);
            var thisPlaceholder = $this.data(options.prettyPlaceholderClass);

            if(thisPlaceholder) {
              if($this.val()!=='') {
                if(typeof thisPlaceholder.hide === 'function') {
                  thisPlaceholder.hide();
                }
              }
              else {
                if(typeof thisPlaceholder.show === 'function') {
                  thisPlaceholder.show();
                }
              }
            }
          });
        };

        //Make a container for the placeholder and wrap the input
        var defaultWrapInputForPlaceholding = function($input){
          if(!$input.parent().hasClass(options.prettyPlaceholderWrapperClass)) {
            $input.wrap('<span class="' + options.prettyPlaceholderWrapperClass + '" style="display:inline-block; position:relative"></span>');
          }
        };

        //Set placeholder width based on input width
        var defaultSetPlaceholderWidth = function($placeholder, $input) {
          $placeholder.width($input.width());
        };

        var defaults = {
          'class': 'placeholder',
          'css': {},
          'userInputHandler': defaultUserInputHandler,
          'wrapInputForPlaceholding': defaultWrapInputForPlaceholding,
          'setPlaceholderWidth': defaultSetPlaceholderWidth,
          'prettyPlaceholderClass': 'jq-pretty-placeholder',
          'prettyPlaceholderWrapperClass': 'jq-pretty-placeholder-wrapper'
        };
        options = $.extend({}, defaults, options);

        options.userInputHandler(this.selector);

        //Iterate selected elements and sexify them
        return this.each(function() {
          var $input = $(this);
          var placeholderText = $input.attr('placeholder');

          var $overlay = $('<span class="' + options.prettyPlaceholderClass + '">' + placeholderText + '</span>');
          $overlay.addClass(options['class'])
                  .css(options.css);
          options.setPlaceholderWidth($overlay, $input);
          options.wrapInputForPlaceholding($input);
          $input.before($overlay);
          $input.data(options.prettyPlaceholderClass,$overlay);
          $overlay.on('click',function(){
            $input.focus();
          });
        });
      }
      else {
        return false;
      }
    },
    'prettyPlaceholderDefaults': function(){
      return this.prettyPlaceholder({
        'css': {
              'position': 'absolute',
              'top': '2px',
              'left': '4px',
              'fontSize': '13px',
              'wordSpacing': '-1px',
              'color': '#A9A9A9'
        }
      });
    }
  });
})(jQuery);