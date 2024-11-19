//Tue Nov 19 2024 03:11:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var stray = {
  "start": function () {
    $.ajaxSettings.timeout = "30000";
    $.ajaxSettings.async = true;
    $.post("api.php", {
      "url": config.url,
      "time": config.time,
      "key": config.key
    }, function (_0x4d71c8) {
      _0x4d71c8.code == "200" ? stray.play(_0x4d71c8.url) : stray.TheError();
    }, "json").error(function (_0x16388f, _0x375e51, _0x3ccf88) {
      stray.TheError();
    });
  },
  "play": function (_0x9c3320) {
    $("#loading").remove();
    $("body").append("<div id=\"player\" style=\"position:absolute;left:0px;top:0px;\"></div>");
    config.danmuqidong == 1 ? (stray.danmuapi = config.api + "?ac=dm", stray.danmuapilist = config.api + "?ac=dm", stray.player.dmplay(_0x9c3320)) : stray.player.dplay(_0x9c3320);
    document.pictureInPictureEnabled == true && (document.getElementById("enterhzh") != null && (document.getElementById("enterhzh").addEventListener("click", () => {
      straydmvideo.requestPictureInPicture().catch(_0x15df3d => {
        console.log(_0x15df3d);
      });
    }), document.getElementById("enterhzh").id = "exithzh"), document.getElementById("exithzh") != null && (document.getElementById("exithzh").addEventListener("click", () => {
      document.exitPictureInPicture().catch(_0x38ef2f => {
        console.log(_0x38ef2f);
      });
    }), document.getElementById("exithzh").id = "enterhzh"));
    var _0x26e331 = "<style type=\"text/css\">.showdan-setting .straydmplayer-toggle input+label{border: 1px solid " + config.themeColor + "!important;background: " + config.themeColor + "!important;}.straydmplayer-controller .straydmplayer-icons .straydmplayer-setting .straydmplayer-setting-speed-item:hover .straydmplayer-label{color: " + config.themeColor + ";}.straydmplayer-controller .straydmplayer-icons .straydmplayer-toggle input+label{background: " + config.themeColor + ";}.straydmplayer .straydmplayer-controller .straydmplayer-icons.straydmplayer-comment-box .straydm-straydmplayer-send-icon{background-color: " + config.themeColor + ";}.straydmplayer .straydmplayer-controller .straydmplayer-icons.straydmplayer-comment-box .straydm-straydmplayer-send-icon:active{background-color:" + config.themeColor + ";}.straydmplayer-setting-speeds:hover .title{background-color:" + config.themeColor + "!important;}</style>";
    $("head").append(_0x26e331);
    $(function () {
      $(".straydmplayer-setting-speeds,.straydmplayer-setting-speed-item").on("click", function () {
        $(".speed-stting").toggleClass("speed-stting-open");
      });
      $(".speed-stting.straydmplayer-setting-speed-item").click(function () {
        $(".straydmplayer-setting-speeds.title").text($(this).text());
      });
    });
    $(".straydmplayer-fulloff-icon").on("click", function () {
      stray.dp.fullScreen.cancel();
    });
    $(".straydmplayer-showing").on("click", function () {
      stray.dp.play();
    });
    $(".straydmplayer-notice").remove();
  },
  "player": {
    "dplay": function (_0x3f937a) {
      $("body").addClass("danmu-off");
      stray.dp = new straydmplayer({
        "autoplay": true,
        "element": document.getElementById("player"),
        "theme": config.themeColor,
        "video": {
          "url": decrypt(_0x3f937a),
          "pic": config.background,
          "type": "auto",
          "customType": {
            "customHls": function (_0x2900bd, _0x293173) {
              {
                const _0x201527 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0x201527.loadSource(_0x2900bd.src);
                _0x201527.attachMedia(_0x2900bd);
                _0x201527.p2pEngine.on("stats", function (_0x2d498d) {
                  tota1P2PDownloaded = _0x2d498d.totalP2PDownloaded;
                  totalP2PUploaded = _0x2d498d.totalP2PUploaded;
                  updateStats();
                }).on("peerId", function (_0x2bb8c0) {
                  _peerId = _0x2bb8c0;
                }).on("peers", function (_0x44a94e) {
                  _peers = _0x44a94e.length;
                  updateStats();
                });
              }
            }
          }
        }
      });
      stray.def();
    },
    "dmplay": function (_0x24bdfa) {
      stray.dp = new straydmplayer({
        "autoplay": true,
        "element": document.getElementById("player"),
        "theme": config.themeColor,
        "logo": "",
        "video": {
          "url": decrypt(_0x24bdfa),
          "pic": config.background,
          "type": "auto",
          "customType": {
            "customHls": function (_0x86d628, _0x385b31) {
              {
                const _0x403c23 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0x403c23.loadSource(_0x86d628.src);
                _0x403c23.attachMedia(_0x86d628);
                _0x403c23.p2pEngine.on("stats", function (_0x481b32) {
                  tota1P2PDownloaded = _0x481b32.totalP2PDownloaded;
                  totalP2PUploaded = _0x481b32.totalP2PUploaded;
                  updateStats();
                }).on("peerId", function (_0x4ad66d) {
                  _peerId = _0x4ad66d;
                }).on("peers", function (_0x5e46e5) {
                  _peers = _0x5e46e5.length;
                  updateStats();
                });
              }
            }
          }
        },
        "danmaku": {
          "id": config.vkey,
          "api": stray.danmuapi,
          "user": ""
        }
      });
      stray.load();
    }
  },
  "load": function () {
    stray.danmu.send();
    stray.danmu.list();
    stray.def();
    stray.dp.danmaku.opacity(1);
  },
  "def": function () {
    stray.stime = 0;
    stray.headt = straydmck.get("headt");
    stray.lastt = straydmck.get("lastt");
    stray.last_tip = parseInt(stray.lastt) + 10;
    stray.frists = straydmck.get("frists");
    stray.lasts = straydmck.get("lasts");
    stray.playtime = Number(localStorage.getItem(config.vkey));
    stray.ctime = stray.formatTime(stray.playtime);
    stray.dp.on("loadedmetadata", function () {
      stray.dp.seek(stray.playtime);
    });
    stray.dp.on("timeupdate", function (_0xeece32) {
      {
        var _0x5af86c = Math.floor(stray.dp.video.currentTime);
        localStorage.setItem(config.vkey, _0x5af86c);
      }
    });
    stray.dp.on("pause", function () {
      stray.MYad.pause.play(config.zantingguanggaolianjie, config.zantingguanggaourl);
    });
    stray.dp.on("play", function () {
      stray.MYad.pause.out();
    });
    stray.dp.on("ended", function () {
      localStorage.removeItem(config.vkey);
      config.next ? top.location.href = config.next : stray.dp.notice("视频播放已结束");
    });
    stray.jump.def();
    stray.jump.head();
  },
  "jump": {
    "def": function () {
      h = ".straydmplayer-setting-jfrist label";
      l = ".straydmplayer-setting-jlast label";
      f = "#fristtime";
      j = "#jumptime";
      _0x177d2d(h, "frists", stray.frists, "headt", stray.headt, f);
      _0x177d2d(l, "lasts", stray.lasts, "lastt", stray.lastt, j);
      function _0xb09d5e() {
        layer.msg("请输入有效时间哟！");
      }
      function _0x66f9d2() {
        layer.msg("设置完成，将在刷新或下一集生效");
      }
      function _0x177d2d(_0x45a217, _0x3f35ee, _0xfc2c28, _0x2438ab, _0x853efb, _0x4759df) {
        $(_0x45a217).on("click", function () {
          {
            o = $(_0x4759df).val();
            o > 0 ? ($(_0x45a217).toggleClass("checked"), _0x66f9d2(), _0x853efb = $(_0x4759df).val(), straydmck.set(_0x2438ab, _0x853efb)) : _0xb09d5e();
          }
        });
        _0xfc2c28 == 1 ? ($(_0x45a217).addClass("checked"), $(_0x45a217).click(function () {
          {
            o = $(_0x4759df).val();
            o > 0 ? straydmck.set(_0x3f35ee, 0) : _0xb09d5e();
          }
        })) : $(_0x45a217).click(function () {
          o = $(_0x4759df).val();
          o > 0 ? straydmck.set(_0x3f35ee, 1) : _0xb09d5e();
        });
      }
      $(f).attr({
        "value": stray.headt
      });
      $(j).attr({
        "value": stray.lastt
      });
      stray.jump.last();
    },
    "head": function () {
      if (stray.stime > stray.playtime) stray.playtime = stray.stime;
      stray.frists == 1 && (stray.headt > stray.playtime || stray.playtime == 0 ? stray.jump_f = 1 : stray.jump_f = 0);
      stray.jump_f == 1 && (stray.dp.seek(stray.headt), stray.dp.notice("已为您跳过片头"));
    },
    "last": function () {
      if (config.next != "") {
        stray.lasts == 1 && setInterval(function () {
          var _0x48b0ec = stray.dp.video.duration - stray.dp.video.currentTime;
          if (_0x48b0ec < stray.last_tip) stray.dp.notice("即将为您跳过片尾");
          stray.lastt > 0 && _0x48b0ec < stray.lastt && (localStorage.removeItem(config.vkey, ""), top.location.href = config.next);
        }, 1000);
      } else $(".icon-xj").remove();
    },
    "ad": function (_0x2b87d6, _0x3345d8) {}
  },
  "danmu": {
    "send": function () {
      g = $(".straydm-straydmplayer-send-icon");
      d = $("#dmtext");
      h = ".straydmplayer-comment-setting-";
      $(h + "color input").on("click", function () {
        r = $(this).attr("value");
        setTimeout(function () {
          d.css({
            "color": r
          });
        }, 100);
      });
      $(h + "type input").on("click", function () {
        t = $(this).attr("value");
        setTimeout(function () {
          d.attr("dmtype", t);
        }, 100);
      });
      $(h + "font input").on("click", function () {
        t = $(this).attr("value");
        setTimeout(function () {
          d.attr("size", t);
        }, 100);
      });
      g.on("click", function () {
        a = document.getElementById("dmtext");
        a = a.value;
        b = d.attr("dmtype");
        c = d.css("color");
        z = d.attr("size");
        if (config.pbgjz.length > 0) for (var _0x390862 = 0; _0x390862 < config.pbgjz.length; _0x390862++) {
          {
            if (a.search(config.pbgjz[_0x390862]) != -1) {
              layer.msg("您发送的内容含有敏感字符，请规范您的弹幕内容");
              return;
            }
          }
        }
        if (a.length < 1) {
          layer.msg("要输入内容啊~");
          return;
        }
        var _0x30894d = Date.parse(new Date()),
          _0x4edd64 = straydmck.get("dmsent", _0x30894d);
        if (_0x30894d - _0x4edd64 < config.sendtime * 1000) {
          layer.msg("请勿频繁操作！发送弹幕需间隔" + config.sendtime + "秒~");
          return;
        }
        d.val("");
        stray.dp.danmaku.send({
          "text": a,
          "color": c,
          "type": b,
          "size": z
        });
        straydmck.set("dmsent", _0x30894d);
      });
      function _0x508808() {
        g.trigger("click");
      }
      d.keydown(function (_0x28f04e) {
        _0x28f04e.keyCode == 13 && _0x508808();
      });
    },
    "list": function () {
      $(".straydmplayer-list-icon,.straydm-straydmplayer-send-icon").on("click", function () {
        $(".list-show").empty();
        $.ajax({
          "url": stray.danmuapilist + "&url=" + config.url,
          "success": function (_0x307fab) {
            if (_0x307fab.code == 23) {
              a = _0x307fab.danmuku;
              b = _0x307fab.name;
              c = _0x307fab.danum;
              $(".danmuku-num").text(c);
              $(a).each(function (_0x2544fc, _0x1e0607) {
                l = "<d class=\"danmuku-list\" time=\"" + _0x1e0607[0] + "\"><li>" + stray.formatTime(_0x1e0607[0]) + "</li><li title=\"" + _0x1e0607[4] + "\">" + _0x1e0607[4] + "</li><li title=\"用户：" + _0x1e0607[3] + "  IP地址：" + _0x1e0607[5] + "\">" + _0x1e0607[6] + "</li><li class=\"report\" onclick=\"stray.danmu.report('" + _0x1e0607[5] + "','" + b + "','" + _0x1e0607[4] + "','" + _0x1e0607[3] + "')\">举报</li></d>";
                $(".list-show").append(l);
              });
            }
            $(".danmuku-list").on("dblclick", function () {
              stray.dp.seek($(this).attr("time"));
            });
          }
        });
      });
      $("#vod-title").append("<e>" + config.title + "</e>");
      _0xc49e17(".straydmplayer-list-icon", ".straydmplayer-danmu", "show");
      function _0xc49e17(_0x40f55a, _0x5011dc, _0x46b28d, _0x2ff0e3) {
        $(_0x40f55a).click(function () {
          $(_0x5011dc).toggleClass(_0x46b28d);
          $(_0x2ff0e3).remove();
        });
      }
    },
    "report": function (_0x15fafb, _0x11face, _0x193c49, _0x882d36) {
      layer.confirm("" + _0x193c49 + "<!--br><br><span style=\"color:#333\">请选择需要举报的类型</span-->", {
        "anim": 1,
        "title": "举报弹幕",
        "btn": ["违法违禁", "色情低俗", "恶意刷屏", "赌博诈骗", "人身攻击", "侵犯隐私", "垃圾广告", "剧透", "引战"],
        "btn3": function (_0x36816f, _0x1723fd) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "恶意刷屏");
        },
        "btn4": function (_0x5981fa, _0x6906df) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "赌博诈骗");
        },
        "btn5": function (_0x518c18, _0x2e118d) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "人身攻击");
        },
        "btn6": function (_0x21168b, _0x1c3ea3) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "侵犯隐私");
        },
        "btn7": function (_0xb1a8c3, _0x608afa) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "垃圾广告");
        },
        "btn8": function (_0x503cb3, _0x18c31f) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "剧透");
        },
        "btn9": function (_0x18efe1, _0x4c95fd) {
          stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "引战");
        }
      }, function (_0x12996a, _0x1900dc) {
        stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "违法违禁");
      }, function (_0x4624b6) {
        stray.danmu.post_r(_0x15fafb, _0x11face, _0x193c49, _0x882d36, "色情低俗");
      });
    },
    "post_r": function (_0x1e1bd4, _0xb131f6, _0x4ecd10, _0x3d7861, _0x4d194f) {
      $.ajax({
        "type": "GET",
        "url": config.api + "?ac=dm" + _0x3d7861 + "&user=" + _0x1e1bd4 + "&type=" + _0x4d194f + "&title=" + _0xb131f6 + "&text=" + _0x4ecd10 + "&referer=" + document.referrer,
        "cache": false,
        "dataType": "json",
        "beforeSend": function () {},
        "success": function (_0x4c68c6) {
          layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
        },
        "error": function (_0xbdc12b) {
          {
            var _0x58aa54 = "服务故障 or 网络异常，稍后再试6！";
            layer.msg(_0x58aa54);
          }
        }
      });
    }
  },
  "formatTime": function (_0x20a18b) {
    return [parseInt(_0x20a18b / 60 / 60), parseInt(_0x20a18b / 60 % 60), parseInt(_0x20a18b % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
  },
  "MYad": {
    "pause": {
      "play": function (_0x49d758, _0x2608cd) {
        if (config.zantingguanggaoqidong == 1) {
          var _0x3045e9 = "<div id=\"player_pause\"><div class=\"adimg\"><a style=\"color:#ffffff;\">广告</a></div><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff('player_pause')\" title=\"点击关闭广告\">✖</a></div><a href=\"" + _0x49d758 + "\" target=\"_blank\" ><img src=\"" + _0x2608cd + "\"></a></div>";
          $("#player").before(_0x3045e9);
        }
      },
      "out": function () {
        config.zantingguanggaoqidong == 1 && $("#player_pause").remove();
      }
    }
  },
  "next": function () {
    top.location.href = config.next;
  },
  "TheError": function () {
    $("body").append("<div id=\"error\"><h1>解析失败，请切换线路或刷新！</h1></div>");
    $("#loading").remove();
  }
};
function turnoff(_0x23f03d) {
  document.getElementById(_0x23f03d).style.display = "none";
}
function decrypt(_0x91e279) {
  let _0x6203f3 = CryptoJS.AES.decrypt(_0x91e279, CryptoJS.enc.Utf8.parse("yinghua8eeyinghu"), {
    "iv": CryptoJS.enc.Utf8.parse("yinghua8eeyinghu"),
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  });
  return _0x6203f3.toString(CryptoJS.enc.Utf8);
}
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  document.hidden ? (document.title = "o(╥﹏╥)o你去哪了？快回来！- " + OriginTitile, clearTimeout(titleTime)) : (document.title = "๑乛◡乛๑亲爱的，欢迎回来~• - " + OriginTitile, titleTime = setTimeout(function () {
    document.title = OriginTitile;
  }, 1500));
});