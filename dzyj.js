/*
地震预警
[rewrite_local]
#课程题库
https://mobile-new.chinaeew.cn/v1/user/info url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/dzyj.js

[mitm] 

hostname = mobile-new.chinaeew.cn
*/


let obj = JSON.parse($response.body);
obj.data.isLoyalUser = true;
$done({
    body: JSON.stringify(obj)
});
