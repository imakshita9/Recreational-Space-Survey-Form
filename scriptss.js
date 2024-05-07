function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/vWuobRUuvKL4e1S7/',
        type:'post',
        data:$("#surveyForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}