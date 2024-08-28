var check = function(num)
{
    if(num%3==0 || num%7==0)
    {
        return true;
    }

    else
    {
        return false;
    }
    
}

let bool = [];
bool[0] = check(12);
bool[1] = check(14);
bool[2] = check(10);
bool[3] = check(11);

console.log(bool);
