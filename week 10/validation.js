function validation(){
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;

    if(username==""){
        alert("Username must be entered");
        return false;
    }else if(password==""){
        alert("Password must be entered");
        return false;
    }else if(password.length<8){
        alert("Password week")
        return false;
    }else{
        alert("Login successful");
        return true;
    }
}