/**
 *  从当前页面的链接中获取磁力链接地址 
 */
var url = location.href; //获取url中"?"符后的字串 
var magnet;
if(url.indexOf("?")!=-1){
    //取问号后的值
    var str=url.substr(1); 
    //获取磁力链接地址
    magnet=str.split("&")[0].split("=")[1];
}

console.log("当前磁力链接地址为："+magnet);




