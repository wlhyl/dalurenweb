if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'dalurenhtml'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dalurenhtml'.");
}
var dalurenhtml = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var equals = Kotlin.equals;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  function format($receiver) {
    return $receiver.getFullYear().toString() + '-' + ($receiver.getMonth() + 1 | 0) + '-' + $receiver.getDate() + ' ' + $receiver.getHours() + ':' + $receiver.getMinutes() + ':' + $receiver.getSeconds();
  }
  var diZhi;
  function main(args) {
  }
  function setDateTime$lambda(data) {
    var tmp$;
    var dt = indexOf(diZhi, data.hour[1]);
    var tSelect = Kotlin.isType(tmp$ = document.getElementById('divinationTime' + dt), HTMLOptionElement) ? tmp$ : throwCCE();
    tSelect.selected = true;
  }
  function setDateTime$lambda$lambda(closure$info0) {
    return function () {
      closure$info0.alert('close');
    };
  }
  function setDateTime$lambda_0(data) {
    var info0 = jQuery('\n' + '<div class=' + '"' + 'alert alert-danger  fade show navbar-fixed-top ' + '"' + '   style=' + '"' + 'z-index:100000' + '"' + '>' + '\n' + '<button type=' + '"' + 'button' + '"' + ' class=' + '"' + 'close' + '"' + ' data-dismiss=' + '"' + 'alert' + '"' + '>&times;<\/button>' + '\n' + '<strong>' + data.responseJSON.message.toString() + '<\/strong>' + '\n' + '<\/div>' + '\n');
    jQuery('#alter').append(info0);
    window.setTimeout(setDateTime$lambda$lambda(info0), 5000);
  }
  function setDateTime() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var t = new Date();
    var year = t.getFullYear();
    var month = t.getMonth() + 1 | 0;
    var day = t.getDate();
    var hour = t.getHours();
    var minutes = t.getMinutes();
    var seconds = t.getSeconds();
    var yearInput = Kotlin.isType(tmp$ = document.getElementById('year'), HTMLInputElement) ? tmp$ : throwCCE();
    var monthInput = Kotlin.isType(tmp$_0 = document.getElementById('month'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var dayInput = Kotlin.isType(tmp$_1 = document.getElementById('day'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var hourInput = Kotlin.isType(tmp$_2 = document.getElementById('hour'), HTMLInputElement) ? tmp$_2 : throwCCE();
    var minutesInput = Kotlin.isType(tmp$_3 = document.getElementById('minutes'), HTMLInputElement) ? tmp$_3 : throwCCE();
    var secondsInput = Kotlin.isType(tmp$_4 = document.getElementById('seconds'), HTMLInputElement) ? tmp$_4 : throwCCE();
    yearInput.value = year.toString();
    monthInput.value = month.toString();
    dayInput.value = day.toString();
    hourInput.value = hour.toString();
    minutesInput.value = minutes.toString();
    secondsInput.value = seconds.toString();
    var divinationTimeRequest = {};
    divinationTimeRequest.year = year;
    divinationTimeRequest.month = month;
    divinationTimeRequest.day = day;
    divinationTimeRequest.hour = hour;
    divinationTimeRequest.minutes = minutes;
    divinationTimeRequest.seconds = seconds;
    var dtSettings = {};
    dtSettings.type = 'PUT';
    dtSettings.data = JSON.stringify(divinationTimeRequest);
    dtSettings.dataType = 'json';
    dtSettings.headers = {};
    dtSettings.headers['Content-Type'] = 'application/json';
    dtSettings.success = setDateTime$lambda;
    dtSettings.error = setDateTime$lambda_0;
    jQuery.ajax('/sizhu', dtSettings);
  }
  function setSun$lambda(data) {
    var dt = data.SunMansion.toString();
    jQuery('#sun').val(dt);
  }
  function setSun$lambda$lambda(closure$info0) {
    return function () {
      closure$info0.alert('close');
    };
  }
  function setSun$lambda_0(data) {
    var message = data.responseJSON.message;
    var info0 = jQuery('\n' + '<div class=' + '"' + 'alert alert-danger  fade show navbar-fixed-top ' + '"' + '   style=' + '"' + 'z-index:100000' + '"' + '>' + '\n' + '<button type=' + '"' + 'button' + '"' + ' class=' + '"' + 'close' + '"' + ' data-dismiss=' + '"' + 'alert' + '"' + '>&times;<\/button>' + '\n' + '<strong>' + message.toString() + '<\/strong>' + '\n' + '<\/div>' + '\n');
    jQuery('#alert').append(info0);
    window.setTimeout(setSun$lambda$lambda(info0), 5000);
  }
  function setSun() {
    var year = jQuery('#year').val();
    var month = jQuery('#month').val();
    var day = jQuery('#day').val();
    var hour = jQuery('#hour').val();
    var minutes = jQuery('#minutes').val();
    var seconds = jQuery('#seconds').val();
    var sunRequest = {};
    sunRequest.year = year;
    sunRequest.month = month;
    sunRequest.day = day;
    sunRequest.hour = hour;
    sunRequest.minutes = minutes;
    sunRequest.seconds = seconds;
    var sunSettings = {};
    sunSettings.type = 'PUT';
    sunSettings.data = JSON.stringify(sunRequest);
    sunSettings.dataType = 'json';
    sunSettings.headers = {};
    sunSettings.headers['Content-Type'] = 'application/json';
    sunSettings.success = setSun$lambda;
    sunSettings.error = setSun$lambda_0;
    jQuery.ajax('/sunmansion', sunSettings);
  }
  function paiPan$lambda(data) {
    var res = data;
    var sp = jQuery('#shipan');
    sp.empty();
    sp.append('<div>' + res.year.toString() + '\u5E74' + res.month.toString() + '\u6708' + res.day.toString() + '\u65E5' + res.hour.toString() + '\u65F6' + res.minutes.toString() + '\u5206' + res.second.toString() + '\u79D2<\/div>');
    sp.append('<div>\u5360\u6D4B\u7684\u4E8B\uFF1A' + res.description.toString() + '<\/div>');
    sp.append('<div>\u56DB\u67F1\uFF1A' + res.siZhu[0].toString() + ' ' + res.siZhu[1].toString() + ' ' + res.siZhu[2].toString() + ' ' + res.siZhu[3].toString() + '<\/div>');
    sp.append('<div>' + res.solarTerms[0].name.toString() + ': ' + format(new Date(res.solarTerms[0].t.toString())) + '<\/div>');
    sp.append('<div>' + res.solarTerms[1].name.toString() + ': ' + format(new Date(res.solarTerms[1].t.toString())) + '<\/div>');
    sp.append(trimMargin('<div>\u6708\u5C06\uFF1A' + res.sunMansion.toString() + '  \u6708\u5BBF\uFF1A' + res.moonMansion.toString() + '\n' + '            |\u5360\u65F6\uFF1A' + res.divinationTime.toString() + ' ' + (res.daytime ? '\u663C\u5360' : '\u591C\u5360') + '\n' + '            \uFF08|\u7A7A\u4EA1\uFF1A' + res.kongWang[0].toString() + ' ' + res.kongWang[1].toString() + '\uFF09<\/div>'));
    sp.append('<div>\u6027\u522B\uFF1A  ' + res.sex.toString() + ' \u672C\u547D\uFF1A' + res.benMing.toString() + '\u884C\u5E74\uFF1A' + res.xingNian.toString() + '<\/div>');
    var table = jQuery('<table><\/table>');
    sp.append(table);
    for (var i = 0; i <= 2; i++) {
      var tr = jQuery('\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.sanChuan.liuQing[i].toString() + '<\/td>' + '\n' + '                <td>' + res.sanChuan.dunGan[i].toString() + '<\/td>' + '\n' + '                <td>' + res.sanChuan.sanChuan[i].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[indexOf(diZhi, res.sanChuan.sanChuan[i])].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>');
      tr.appendTo(table);
    }
    table.append('<tr height="10px"><td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><\/tr>');
    var siKe = '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.tianJiang[indexOf(diZhi, res.siKe.zhiYing)].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[indexOf(diZhi, res.siKe.zhiYang)].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[indexOf(diZhi, res.siKe.ganYing)].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[indexOf(diZhi, res.siKe.ganYang)].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.siKe.zhiYing.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.zhiYang.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.ganYing.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.ganYang.toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.siKe.zhiYang.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.zhi.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.ganYang.toString() + '<\/td>' + '\n' + '                <td>' + res.siKe.gan.toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>';
    table.append(siKe);
    table.append('<tr height="10px"><td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><\/tr>');
    var tp = '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.tianJiang[5].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[6].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[7].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[8].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.tianPan[5].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[6].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[7].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[8].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td>' + res.tianJiang[4].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[4].toString() + '<\/td>' + '\n' + '                <td><\/td><td><\/td>' + '\n' + '                <td>' + res.tianPan[9].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[9].toString() + '<\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td>' + res.tianJiang[3].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[3].toString() + '<\/td>' + '\n' + '                <td><\/td><td><\/td>' + '\n' + '                <td>' + res.tianPan[10].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[10].toString() + '<\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.tianPan[2].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[1].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[0].toString() + '<\/td>' + '\n' + '                <td>' + res.tianPan[11].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '            <tr>' + '\n' + '                <td><\/td>' + '\n' + '                <td>' + res.tianJiang[2].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[1].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[0].toString() + '<\/td>' + '\n' + '                <td>' + res.tianJiang[11].toString() + '<\/td>' + '\n' + '                <td><\/td>' + '\n' + '            <\/tr>' + '\n' + '        ';
    table.append(tp);
    sp.append('<div><b>\u5366\u4F53\uFF1A<\/b> ' + res.guaTi.join('\u3000').toString() + '<\/div>');
  }
  function paiPan$lambda$lambda(closure$info0) {
    return function () {
      closure$info0.alert('close');
    };
  }
  function paiPan$lambda_0(data) {
    data.responseJSON;
    var message = data.responseJSON.message;
    var info0 = jQuery('\n' + '<div class=' + '"' + 'alert alert-danger  fade show navbar-fixed-top ' + '"' + '   style=' + '"' + 'z-index:100000' + '"' + '>' + '\n' + '<button type=' + '"' + 'button' + '"' + ' class=' + '"' + 'close' + '"' + ' data-dismiss=' + '"' + 'alert' + '"' + '>&times;<\/button>' + '\n' + '<strong>' + message.toString() + '<\/strong>' + '\n' + '<\/div>' + '\n');
    jQuery('#alert').append(info0);
    window.setTimeout(paiPan$lambda$lambda(info0), 5000);
  }
  function paiPan() {
    var year = jQuery('#year').val();
    var month = jQuery('#month').val();
    var day = jQuery('#day').val();
    var hour = jQuery('#hour').val();
    var minutes = jQuery('#minutes').val();
    var seconds = jQuery('#seconds').val();
    var sun = jQuery('#sun  option:selected').text();
    var divinationTime = jQuery('#divinationTime  option:selected').text();
    var daytime = equals(jQuery('#daytime  option:selected').text(), '\u663C');
    var sex = jQuery('#sex  option:selected').text();
    var yearOfBirth = jQuery('#yearOfBirth').val();
    var mingJu = jQuery('#mingJu').val();
    var desc = jQuery('#desc').val();
    var req = {};
    req.year = year;
    req.month = month;
    req.day = day;
    req.hour = hour;
    req.minutes = minutes;
    req.second = seconds;
    req.sunMansion = sun;
    req.divinationTime = divinationTime;
    req.daytime = daytime;
    req.yearOfBirth = yearOfBirth;
    req.description = desc;
    req.sex = sex;
    var settings = {};
    settings.type = 'PUT';
    settings.data = JSON.stringify(req);
    settings.dataType = 'json';
    settings.headers = {};
    settings.headers['Content-Type'] = 'application/json';
    settings.success = paiPan$lambda;
    settings.error = paiPan$lambda_0;
    jQuery.ajax('/dalurenshipanjson', settings);
  }
  _.format_t5kl13$ = format;
  Object.defineProperty(_, 'diZhi', {
    get: function () {
      return diZhi;
    }
  });
  _.main_kand9s$ = main;
  _.setDateTime = setDateTime;
  _.setSun = setSun;
  _.paiPan = paiPan;
  diZhi = ['\u5B50', '\u4E11', '\u5BC5', '\u536F', '\u8FB0', '\u5DF3', '\u5348', '\u672A', '\u7533', '\u9149', '\u620C', '\u4EA5'];
  main([]);
  Kotlin.defineModule('dalurenhtml', _);
  return _;
}(typeof dalurenhtml === 'undefined' ? {} : dalurenhtml, kotlin);
