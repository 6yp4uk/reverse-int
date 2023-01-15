module.exports = function reverse (n) {
    num_str = Math.abs(n) + "";
    var num_rtrn = "";
    for (var item in num_str){
      num_rtrn = (num_rtrn + (num_str[(num_str.length - item) - 1]));
      }
    if (n < 0){
        return(0 - Number(num_rtrn))
      } else if (num_str[num_str.length -1] == 0){
        return(Number(num_rtrn.padStart(1,0)));
      } else {
        return(Number(num_rtrn))
      } 
    } 
