var modify = function(str, pos)
{
   let arr=str.split('');
   arr.splice(pos,1);
   str=arr.join('');
   return str;
}

console.log(modify("Sangita",6));