$(document).ready(function () {
    $(function() {
    $( "#datepicker" ).datepicker();
  });

  // $('form').on('submit', function(e) {
  //   e.preventDefault();

  //   var errors = {}
  //   var date = $('input[name="date"]').val()
  //   var email = $('input[name="organizer_email"]').val()
  //   var title = $('input[name="title"]').val()
  //   var name = $('input[name="organizer_name"]').val()
  //   var notTitle = /.+/
  //   var notName = /.+/
  //   var valiDate = /\d{4}-\d{2}-\d{2}/
  //   var emailValidator = /\w+@\w+\.\w+/

  //   if ( !valiDate.test(date) ){
  //     var key = "date"
  //     var value = "please enter date in the form of 1973-09-27"
  //     errors[key] = value
  //     console.log(errors.date)
  //   };

  //   if ( !emailValidator.test(email) ){
  //     var key = "email"
  //     var value = "please enter a valid email address"
  //     errors[key] = value
  //     console.log(errors.email)
  //   };

  //   if ( !notTitle.test(title) ){
  //     var key = "title"
  //     var value = "please enter a title for your event"
  //     errors[key] = value
  //     console.log(errors.title)
  //   };

  //   if ( !notName.test(name) ){
  //     var key = "name"
  //     var value = "please include your name"
  //     errors[key] = value
  //     console.log(errors.name)
  //   };
    
  // });


  // // send an HTTP DELETE request for the sign-out link
  // $('a#sign-out').on("click", function (e) {
  //   e.preventDefault();
  //   var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
  //   request.done(function () { window.location = "/"; });
  // });

});
