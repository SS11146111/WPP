let random_num = Math.floor((Math.random() * 10) + 1);
let guess_num = prompt("Guess the number between 1 and 10:");

if(guess_num!=null)
{
    if(random_num == guess_num)
        {
            alert("Good Work")
            location.reload()
        }
        else
        {
            alert(" Not matched")
            location.reload()
        }
}
    
