function send(){
    var number1= document.getElementById("number1").value;
    var number2= document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    //creating tags to hold the numbers in the output div
    question_number="<h4>"+ number1+ "X" + number2 +  "</h4>";
    input_box= "<br> Answer: <input type='text' id='input_check_box'> ";
    check_btn= "<br><br> <button class='btn btn-info' onclick='check()'> Check Answer!</button> ";
    row= question_number+ input_box+ check_btn;
    //storing the row in the html file
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}