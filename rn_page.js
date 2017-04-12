(function ($) {

  Drupal.behaviors.baCustom = {
    attach: function (context){
      $('select').selectmenu();
    }
  }

})(jQuery);

