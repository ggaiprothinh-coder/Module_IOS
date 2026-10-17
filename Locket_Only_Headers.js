// deleteHeader goc: @duyvinh09. Pham vi moi: chi Locket.
(function () {
  var original = $request.headers || {};
  var ua = Object.keys(original).filter(function (k) { return k.toLowerCase() === "user-agent"; }).map(function (k) { return original[k]; }).join(" ");
  if (String(ua).indexOf("Locket") < 0) { $done({}); return; }
  var headers = {};
  Object.keys(original).forEach(function (key) {
    if (key.toLowerCase() !== "x-revenuecat-etag") headers[key] = original[key];
  });
  $done({headers: headers});
})();
