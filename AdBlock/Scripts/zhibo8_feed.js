/*
 * 直播吧(Zhibo8)推荐页短视频过滤脚本
 * 功能: 过滤推荐页信息流中 model=video 的短视频条目，仅保留新闻
 * 匹配: ^https?://api\.qiumibao\.com/application/app/\?_url=/news/hot
 * 适用: QuantumultX (script-response-body) / Stash (response script)
 */

var body = $response.body;

try {
    var obj = JSON.parse(body);

    if (obj.news && Array.isArray(obj.news)) {
        obj.news = obj.news.filter(function (item) {
            return item.model !== "video";
        });
    }

    body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
