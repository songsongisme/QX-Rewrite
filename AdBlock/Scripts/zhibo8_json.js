/*
 * 直播吧(Zhibo8)去广告脚本
 * 功能: 修改APP配置接口响应，关闭所有广告开关
 * 匹配: ^https?://a\.qiumibao\.com/ios/config/
 * 适用: QuantumultX (script-response-body) / Stash (response script)
 */

var body = $response.body;

try {
    var obj = JSON.parse(body);

    if (obj.advert) {
        obj.advert.enable = "false";
    }

    if (obj.advert_config) {
        obj.advert_config.splash_bk = "disable";
        obj.advert_config.splash_bk_show_times = 0;
        obj.advert_config.splash_bk_duration = 0;
        obj.advert_config.inter_bk = "disable";
        obj.advert_config.inter_show_interval = 999999999;
        obj.advert_config.pop_bk = "disable";
        obj.advert_config.pop_bk_time = 0;
        obj.advert_config.other_bk = "disable";
        obj.advert_config.other_bk_time = 0;

        if (obj.advert_config.activities_config) {
            obj.advert_config.activities_config = [];
        }
        if (obj.advert_config.main_pop_labels) {
            obj.advert_config.main_pop_labels = {};
        }
    }

    body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
