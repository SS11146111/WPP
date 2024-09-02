var strTest = function(str)
{
    text = str.substring(0, 4);
    if(text == "Java")
        return true;
    else
        return false;
}

var value = strTest("sJavastring");
console.log(value);