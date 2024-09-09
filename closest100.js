var closest = function (num1, num2)
{
    let val1 = Math.abs(100 - num1);
    let val2 = Math.abs(100-num2);
    if(val1<val2)
        console.log(`Closest to 100 is ${num1}`)
    else
        console.log(`Closest to 100 is ${num2}`)
}

closest(-2, 99);
closest(80, 0);