function printText(){
    document.getElementById("demo").innerHTML= document.getElementById('mail').value;
}
function printMail(){
   document.getElementById("demo").innerHTML= document.getElementById('textbox1').value;
}
function ValidateEmail(inputText)
      {
         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         
         if(inputText.value.match(mailformat))
         {
            const changeColor= (button)=>{
                button.style.backgroundcolor='blue';
             };
            document.mail.focus();
            return true;
         }
         else
         {
            document.write("You have entered an invalid email address!");
            document.mail.focus();
            return false;
         }
      }