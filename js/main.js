$(document).ready(function(){
    console.log("AVVIO");
    $("#main-form").validate({
        rules:{
            name : "required",
            email : {
                required: true,
                email : true
            },
            message : {
                required: true,

            }
        },
        messages : {
            name : "Required fields",
            email : {
                required : "Required fields",
                email : "Please insert a valid email address"
            }
        },
        showErrors: function(errorMap, errorList) {
            $("#summary").html("Your form contains "
                + this.numberOfInvalids()
                + " errors, see details below.").slideDown();
            this.defaultShowErrors();
        },
        errorPlacement: function(error, element) {
            element.after( error );
            error.hide().slideDown();
            console.log(error);
            console.log(element);
        }


    });
});
