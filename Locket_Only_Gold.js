// Tach rieng tu goi ZIP do nguoi dung cung cap. Giu ghi cong trong ma goc.
// Chi xu ly Locket; body loi/ung dung khac duoc giu nguyen.
(function (requestInput, responseInput) {
  var req = typeof requestInput === "undefined" ? {} : requestInput;
  var hdr = req.headers || {};
  var userAgent = Object.keys(hdr).filter(function (k) { return k.toLowerCase() === "user-agent"; }).map(function (k) { return hdr[k]; }).join(" ");
  if (String(userAgent).indexOf("Locket") < 0 || typeof responseInput === "undefined") { $done({}); return; }
  try {
    var parsed = JSON.parse(responseInput.body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) { $done({}); return; }
    if (!parsed.subscriber || typeof parsed.subscriber !== "object" || Array.isArray(parsed.subscriber)) { $done({}); return; }
    if (parsed.subscriber.subscriptions != null && (typeof parsed.subscriber.subscriptions !== "object" || Array.isArray(parsed.subscriber.subscriptions))) { $done({}); return; }
    if (parsed.subscriber.entitlements != null && (typeof parsed.subscriber.entitlements !== "object" || Array.isArray(parsed.subscriber.entitlements))) { $done({}); return; }
    parsed.subscriber.subscriptions = parsed.subscriber.subscriptions || {};
    parsed.subscriber.entitlements = parsed.subscriber.entitlements || {};
    var $request = {headers: {"User-Agent": String(userAgent)}, url: req.url || ""};
    var $response = {body: JSON.stringify(parsed)};
// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @duyvinh09 ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var duyvinh09 = {
      auto_resume_date: null,
      display_name: "locket_1600_1y",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 399000.0,
          "currency": "VND"
      },
      expires_date: "9999-01-09T10:10:14Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2005-01-09T10:10:15Z",
      purchase_date: "2005-01-09T10:10:14Z",
      store: "app_store",
      store_transaction_id: "2000001108724193",
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "2005-01-09T10:10:14Z",
      product_identifier: "locket_1600_1y",
      expires_date: "9999-01-09T10:10:14Z"
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = duyvinh09) : obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09, obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09, obj.subscriber.entitlements.pro = locketGold;
$done({
  body: JSON.stringify(obj)
});


  } catch (error) {
    console.log("[Locket Thinh Le] Khong sua phan hoi: " + String(error));
    $done({});
  }
})(typeof $request === "undefined" ? {} : $request, typeof $response === "undefined" ? undefined : $response);
