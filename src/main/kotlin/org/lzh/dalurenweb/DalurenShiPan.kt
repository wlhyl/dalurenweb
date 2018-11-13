package org.lzh.dalurenweb

import org.lzh.shipan.daluren.getSiZhu
import org.lzh.shipan.daluren.getSunMansion
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.servlet.ModelAndView
import java.time.LocalDateTime

@Controller
class DalurenShiPanController{
@GetMapping("/")
//@ResponseBody
//fun home(model: Model): ModelAndView{
//    model["title"] = "Blo1g"
//    return ModelAndView("blog")
//}
fun home(model: Model): String{
    //TODO
    //没必要在这里通过模板初始化，因为html中已经有函数通过ajax重新计算当时时间和月将
    val t = LocalDateTime.now()
    model["year"]=t.year
    model["month"] = t.monthValue
    model["day"] = t.dayOfMonth
    model["hour"] = t.hour
    model["minutes"] =t.minute
    model["seconds"] = t.second
    model["yearOfBirth"] = t.year
    model["sun"] = getSunMansion(t.year,t.monthValue,t.dayOfMonth,t.hour, t.minute,t.second).num-1
    model["divinationTime"]=getSiZhu(t.year,t.monthValue,t.dayOfMonth,t.hour, t.minute,t.second).hourGanZhi.zhi.num-1
    return "index"
}
}