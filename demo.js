function fun(inputText){

    var a=document.getElementById("h2").value;
    var b=document.getElementById("h3").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(a=="" || b==""){
        alert('Please Enter your Mail ID and Password');
        return false;
    }
    else{
        if(inputText.value.match(mailformat) && b.length>6){
            alert("Yay it's a Valid Email Id and Password !");
            document.n2.first.focus();
            return true;
        }
        else{
            alert("Sorry Invalid Mail Id or Password");
            document.n2.first.focus();
            return false;
        }
    }
}