/*

‎地震预警 
2023.12.19

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/itunes/dzyj.js

[mitm] 

hostname = buy.itunes.apple.com

*/


var objc = JSON.parse($response.body);

    objc = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6464280940,
    "receipt_creation_date" : "2023-12-19 08:23:41 Etc/GMT",
    "bundle_id" : "com.qvqiu.qv",
    "original_purchase_date" : "2023-12-19 07:54:46 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1702973445000",
        "expires_date" : "2099-09-09 08:10:45 Etc/GMT",
        "expires_date_pst" : "2099-09-09 00:10:45 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "220001836452966",
        "is_trial_period" : "true",
        "original_transaction_id" : "220001836452966",
        "purchase_date" : "2023-12-19 08:10:45 Etc/GMT",
        "product_id" : "qvqiu_y2",
        "original_purchase_date_pst" : "2023-12-19 00:10:46 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1702973446000",
        "web_order_line_item_id" : "220000843891485",
        "expires_date_ms" : "4092595200000",
        "purchase_date_pst" : "2023-12-19 00:10:45 America/Los_Angeles",
        "original_purchase_date" : "2023-12-19 08:10:46 Etc/GMT"
      }
    ],
    "adam_id" : 6464280940,
    "receipt_creation_date_pst" : "2023-12-19 00:23:41 America/Los_Angeles",
    "request_date" : "2023-12-19 08:23:43 Etc/GMT",
    "request_date_pst" : "2023-12-19 00:23:43 America/Los_Angeles",
    "version_external_identifier" : 859759661,
    "request_date_ms" : "1702974223804",
    "original_purchase_date_pst" : "2023-12-18 23:54:46 America/Los_Angeles",
    "application_version" : "2",
    "original_purchase_date_ms" : "1702972486000",
    "receipt_creation_date_ms" : "1702974221000",
    "original_application_version" : "2",
    "download_id" : 503052327735630001
  },
  "pending_renewal_info" : [
    {
      "product_id" : "qvqiu_y2",
      "original_transaction_id" : "220001836452966",
      "auto_renew_product_id" : "qvqiu_y2",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1702973445000",
      "expires_date" : "2099-09-09 08:10:45 Etc/GMT",
      "expires_date_pst" : "2099-09-09 00:10:45 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "220001836452966",
      "is_trial_period" : "true",
      "original_transaction_id" : "220001836452966",
      "purchase_date" : "2023-12-19 08:10:45 Etc/GMT",
      "product_id" : "qvqiu_y2",
      "original_purchase_date_pst" : "2023-12-19 00:10:46 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21385837",
      "original_purchase_date_ms" : "1702973446000",
      "web_order_line_item_id" : "220000843891485",
      "expires_date_ms" : "4092595200000",
      "purchase_date_pst" : "2023-12-19 00:10:45 America/Los_Angeles",
      "original_purchase_date" : "2023-12-19 08:10:46 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}


$done({body : JSON.stringify(objc)});

