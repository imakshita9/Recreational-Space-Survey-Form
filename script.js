function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/MhbMFT1GMwDRirn5/',
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
