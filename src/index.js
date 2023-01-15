module.exports = function reverse (n) {
    num_str = Math.abs(n) + "";
    var num_rtrn = "";
    for (var item in num_str){
      num_rtrn = (num_rtrn + (num_str[(num_str.length - item) - 1]));
    }
    return (num_rtrn); 
}
