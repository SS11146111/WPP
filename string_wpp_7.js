var create = function(str)
{
    if(str.length>=3)
    {
        text = str.substring(str.length-3, str.length);
        str = text+str+text;
        console.log(str);
    }
    else{

        console.log("String is too short!!");
    }
}

create("Sangita");
create("Sam");
create("Ro");