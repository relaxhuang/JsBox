$http.get({
    url: "https://ipinfo.io/json",
    header: { "User-Agent": "curl/1.0" },
    handler: function(resp) {
        $ui.toast(resp.data.ip)
    }
})
