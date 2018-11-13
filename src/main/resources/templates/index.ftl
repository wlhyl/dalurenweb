<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- 新 Bootstrap4 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.3/css/bootstrap.min.css">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>

    <!-- popper.min.js 用于弹窗、提示、下拉菜单 -->
    <script src="https://cdn.staticfile.org/popper.js/1.14.3/umd/popper.min.js"></script>

    <!-- 最新的 Bootstrap4 核心 JavaScript 文件 -->
    <script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <title>Title</title>
    <style type="text/css">
.btn-circle {
background-color: green;
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circle.btn-sl {
  width: 20px;
  height: 20px;
  padding: 5px 5px;
  font-size: 9px;
  line-height: 1.33;
  border-radius: 12px;
}
.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

.pull-right {
    position: absolute;
    right: 0;
    top:0;
    z-index:1000000;
}





    </style>
</head>
<body>
<div id="alert" class="pull-right"></div>
<!--
<div id="alert" class="float-right" style="z-index:100000"></div>
-->
<div class="container">
    <div class="form-group row">
        <div class="col-sm-2">
            <input type="button" class="btn btn-default btn-circle btn-sl" data-toggle="tooltip" title="我是提示内容!"
                   onclick="dalurenhtml.setDateTime()"/>
            <label class="col-form-label">占测时间</label>
        </div>

        <div class="col-sm-10 row">
            <input type="number" class="form-control col-sm-2" name="year" id="year" value="${year}"/>
            <label class="col-form-label" for="year">年</label>

            <input type="number" class="form-control col-sm-1" name="month" id="month" min="1" max="12" step="1"
                   value="${month}"/>
            <label class="col-form-label" for="month">月</label>

            <input type="number" class="form-control col-sm-1" name="day" id="day" min="1" max="31" step="1"
                   value="${day}"/>
            <label class="col-form-label" for="day">日</label>

            <input type="number" class="form-control col-sm-1" name="hour" id="hour" min="0" max="59" step="1"
                   value="${hour}"/>
            <label class="col-form-label" for="hour">时</label>

            <input type="number" class="form-control col-sm-1" name="minutes" id="minutes" value="${minutes}"/>
            <label class="col-form-label" for="minutes" min="0" max="59" step="1">分</label>

            <input type="number" class="form-control col-sm-1" name="seconds" id="seconds" min="0" max="59" step="1"
                   value="${seconds}"/>
            <label class="col-form-label" for="seconds">秒</label>
        </div>
    </div>

    <div class="row">
        <div class="form-group col-sm-4">
            <div class="row">
                <div class="col-sm-3 offset-md-3" for="sun">
                    <input type="button" class="m-auto btn btn-default btn-circle btn-sl" data-toggle="tooltip"
                           title="计算月将" onclick="dalurenhtml.setSun()"/>
                    <label class="col-form-label">月将:</label>
                </div>
                <select class="form-control col-sm-6" id="sun">
                    <#list ["子", "丑", "寅","卯","辰","巳","午","未", "申","酉", "戌", '亥'] as n>
                    <option id="sun${n_index}"
                    <#if sun==n_index>selected</#if> >${n}</option>
					</#list>
				</select>
			</div>
		</div>
    <div class="row col-sm-4">
		<label class="col-form-label col-sm-3  offset-md-3" for="divinationTime">占时：</label>
		<select class="form-control col-sm-6" id="divinationTime">
		<#list ["子", "丑", "寅","卯","辰","巳","午","未", "申","酉", "戌", '亥'] as n>
		<option id="divinationTime${n_index}"
		<#if divinationTime==n_index>selected</#if> >${n}</option>
		</#list>
		</select>
	</div>
	<div class="row col-sm-4">
		<label class="col-form-label col-sm-6" for="daytime">昼占/昼生人：</label>
		<select class="form-control col-sm-6" id="daytime">
			<option>昼</option>
			<option>夜</option>
		</select>
	</div>
</div>
<div class="row">
    <div class="row col-sm-4">
        <label class="col-form-label col-sm-3 offset-md-3" for="sex">性别：</label>
        <select class="form-control col-sm-6" id="sex">
            <option>男</option>
            <option>女</option>
        </select>
    </div>
    <div class="row col-sm-4">
        <label class="col-form-label col-sm-4 offset-md-2" for="yearOfBirth">出生时间：</label>
        <input type="number" class="form-control col-sm-6" name="yearOfBirth" id="yearOfBirth" value="${yearOfBirth}"/>
    </div>
    <div class="row col-sm-4">
        <label class="col-form-label col-sm-3 offset-md-3" for="mingJu">命局：</label>
        <select class="form-control col-sm-6" id="mingJu">
            <option>是</option>
            <option selected="selected">否</option>
        </select>
    </div>
</div>
	<div class="row">
		<label class="col-form-label offset-sm-1" for="desc">占测的事：</label>
		<input type="text" class="form-control col-sm-4" name="desc" id="desc"/>

		<button type="submit" class="btn btn-primary" onclick="dalurenhtml.paiPan()">提交</button>
	</div>
</div>

<div class="container" id="shipan">
</div>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>
<script type="text/javascript" src="js/lib/kotlin.js"></script>
<script type="text/javascript" src="js/dalurenhtml.js"></script>
</body>
</html>