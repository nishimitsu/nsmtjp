$(window).on('load',function(){
  showPage();
});

function showPage() {
  $('body')
    //add mainvisual
    .delay(1000)
    .queue(function() {
      $(this).addClass('addMainVisual');
      $(this).dequeue();
    })
    // add Logo
    .delay(800)
    .queue(function() {
      $(this).addClass('addLogo');
      $(this).dequeue();
    })
    // add footer
    .delay(1000)
    .queue(function() {
      $(this).addClass('addFooter');
      $(this).dequeue();
    });
}