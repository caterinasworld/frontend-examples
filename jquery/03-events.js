$(document).ready(function () {
  let count = 0;
  $('#input')
    .css({
      width: '200px',
      height: '100px',
      fontSize: '2em',
    })
    .on('click', function () {
      $(this).val('clicked: ' + count++);
      console.log('this is a click event');
    })
    .on('mouseover', function () {
      console.log('this is a mouseover event');
    })
    .on('mousemove', function () {
      console.log('this is a mousemove event');
    })
    .on('mouseout', function () {
      console.log('this is a mouseout event');
    });
});
