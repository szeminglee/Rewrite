/*
小歪微商1.0.9

[rewrite_local]

http://xw.jietuguanjia.com/api/app/userInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xiaowaiweishang.js

[mitm] 

hostname = xw.jietuguanjia.com

*/

var Q = JSON.parse($response.body);
Q.data.isVip = true;//会员
Q.data.vipExpiredTim = "2099-11-01 20:58:21";
$done({body : JSON.stringify(Q)});
