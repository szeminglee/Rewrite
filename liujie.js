
/*

开发者刘杰两款app合集 
传统文化国学
高考英语听力

[rewrite_local]
https:\/\/.*\.cos\.(ap-guangzhou|ap-beijing)\.myqcloud\.com\/dataUrl url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/liujie.js

[mitm] 

hostname = tingli-1259565884.cos.ap-beijing.myqcloud.com, zeng-1259565884.cos.ap-guangzhou.myqcloud.com
*/

var responseBody = $response.body;

responseBody = responseBody.replace(/("needVip"\s*:\s*)true/g, '$1false');

$done({ body: responseBody });
