/*
云上写作 

[rewrite_local]

http://www.yunshangxiezuo.com/api/getAuthenticate_2 url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ysxz.js

[mitm]
hostname = www.yunshangxiezuo.com
*/

var body = JSON.parse($response.body);
body.data.user.vip = 1;
body.data.user.vip_forever = 1;
body.data.user.vip_last = "2099-09-29 21:56:16";

$done({ body: JSON.stringify(body) });
