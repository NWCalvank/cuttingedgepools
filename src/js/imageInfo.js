let $ = require('jquery');

function imageInfo() {
  $(function() {
    // cache DOM
    let $image = $('.image');
    let $imageInfo = $('.image-info');

    // functions
    function showHideText() {
      let imageId = $(this).attr('data-imageId');
      let title = $(this).attr('data-titleState');
      if (title === 'true') {
        $('#' + 'title' + imageId).fadeOut(250);
        $('#' + 'info' + imageId)
          .delay(250)
          .fadeIn(250);
        $(this).attr('data-titleState', 'false');
      } else {
        $('#' + 'info' + imageId).fadeOut(250);
        $('#' + 'title' + imageId)
          .delay(250)
          .fadeIn(250);
        $(this).attr('data-titleState', 'true');
      }
    }

    // bind events
    $imageInfo.fadeOut(0); // display: flex - must hide element on load
    $image.on('click', showHideText);
  });
}

module.exports = imageInfo;
