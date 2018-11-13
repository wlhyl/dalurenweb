package org.lzh.dalurenweb

import com.beust.klaxon.JsonArray
import com.beust.klaxon.JsonObject
import com.beust.klaxon.Parser
import org.lzh.calendar.SolarToLunar
import org.lzh.ganzhiwuxing.DiZhi
import org.lzh.shipan.daluren.*
import org.lzh.util.GetJulianDayFromDateTime
import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.cache.annotation.CacheConfig
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import java.time.DateTimeException
import java.time.LocalDateTime
import kotlin.math.min


@RestController
@CrossOrigin(origins = ["*"])
class DalurenShiPanRestController {
    @PutMapping("/dalurenshipanjson")
//    @ResponseBody
    fun dalurenShiPanJson(@RequestBody shiPanRequestJson: DalurenShiPanRequestJson): ResponseEntity<Map<*,*>> {
//    fun dalurenShiPanJson(@RequestBody shiPanRequestJson: DalurenShiPanRequestJson): List<Int> {
        val year = shiPanRequestJson.year
        val month = shiPanRequestJson.month
        val day = shiPanRequestJson.day
        val hour = shiPanRequestJson.hour
        val minutes = shiPanRequestJson.minutes
        val second = shiPanRequestJson.second
        val sunMansion = DiZhi(shiPanRequestJson.sunMansion)
        val divinationTime = DiZhi(shiPanRequestJson.divinationTime)//占测时间
        val daytime = shiPanRequestJson.daytime //昼占
        val yearOfBirth = shiPanRequestJson.yearOfBirth//出生年份
        val description = shiPanRequestJson.description //占测的事
        val sex = if (shiPanRequestJson.sex == "男") Sex.MAN else Sex.WOMEN

        val headers = HttpHeaders()
        headers.add("Content-Type", "application/json; charset=utf-8")
        try {
            LocalDateTime.of(year,month,day,hour, minutes,second)
            val s = ShiPan(
                    year, month, day, hour, minutes, second,
                    sunMansion,
                    divinationTime,
                    daytime,
                    yearOfBirth, description, sex)

//        headers.add("head1", "head1value");
            val sJSON = Parser().parse(StringBuilder(s.toJSON())) as Map<*, *>
            return ResponseEntity(sJSON,headers,HttpStatus.CREATED)
//            return ResponseEntity.status(201).headers(headers).body(s.toJSON())
        }catch (e: DateTimeException) {
//            val errorMap= """
//                "status":"400",
//                "message": "${year}-${month}-${day} ${hour}:${minutes}:${second} error"
//""".trimIndent()
            val errorMap= mapOf(
                "status" to "400",
                "message" to  "${year}-${month}-${day} ${hour}:${minutes}:${second} error"
            )
            return ResponseEntity(errorMap,headers,HttpStatus.BAD_REQUEST)
        }

//        return Parser().parse(StringBuilder(s.toJSON())) as Map<*,*>
//    val result = Klaxon().toJsonString(s)

    }

    @PutMapping("/sunmansion")
    fun getSunMansionJson(@RequestBody sunMansionRequestJson: SunMansionRequestJson): ResponseEntity<Map<String,String>> {
        val year = sunMansionRequestJson.year
        val month = sunMansionRequestJson.month
        val day = sunMansionRequestJson.day
        val hour = sunMansionRequestJson.hour
        val minutes = sunMansionRequestJson.minutes
        val second = sunMansionRequestJson.second
        val headers = HttpHeaders()
        headers.add("Content-Type", "application/json; charset=utf-8")
        try {
            LocalDateTime.of(year,month,day,hour, minutes,second)
            val sun = getSunMansion(year,month,day,hour, minutes,second)
            val SunMansion= mapOf("SunMansion" to sun.toString())
            return ResponseEntity(SunMansion,headers,HttpStatus.CREATED)
        }catch (e: DateTimeException) {
            val errorMap= mapOf("status" to "400", "message" to "${year}-${month}-${day} ${hour}:${minutes}:${second} error")
            return ResponseEntity(errorMap,headers,HttpStatus.BAD_REQUEST)
        }
//        val sun = getSunMansion(year,month,day,hour, minutes,second)
//        return ResponseEntity.status(201).headers(headers).body("{\"SunMansion\":\"${sun.toString()}\"}")
    }

    @PutMapping("/sizhu")
    fun getSiZhuJson(@RequestBody sunMansionRequestJson: SunMansionRequestJson): ResponseEntity<Map<String,String>> {
        val year = sunMansionRequestJson.year
        val month = sunMansionRequestJson.month
        val day = sunMansionRequestJson.day
        val hour = sunMansionRequestJson.hour
        val minutes = sunMansionRequestJson.minutes
        val second = sunMansionRequestJson.second
        val sizhu = getSiZhu(year,month,day,hour, minutes,second)
        val sizhuMap= mapOf(
                "year" to sizhu.yearGanZhi.toString(),
                "month" to sizhu.monthGanZhi.toString(),
                "day" to sizhu.dayGanZhi.toString(),
                "hour" to sizhu.hourGanZhi.toString()
        )
        val headers = HttpHeaders()
        headers.add("Content-Type", "application/json; charset=utf-8")
        return ResponseEntity(sizhuMap,headers,HttpStatus.CREATED)
//        ResponseEntity<Map<String,Object>>(map,HttpStatus.OK)
//        return ResponseEntity.status(201).headers(headers).body("{\"SiZhu\":\"${sizhu.toString()}\"}")
    }
   @PutMapping("a")
    fun test(): ResponseEntity<Map<String,String>>{
    val headers = HttpHeaders()
    headers.add("Content-Type", "application/json; charset=utf-8")
//    headers.add("Access-Control-Allow-Origin","*")
//    Access-Control-Allow-Origin
    return ResponseEntity(mapOf("a" to "abc"),headers,HttpStatus.CREATED)
}
}


data class DalurenShiPanRequestJson(
        val year: Int,
        val month: Int,
        val day: Int,
        val hour: Int,
        val minutes: Int,
        val second: Int,
        val sunMansion: String,
        val divinationTime: String,//占测时间
        val daytime: Boolean,//昼占
        val yearOfBirth: Int,//出生年份
        val description: String = "", //占测的事
        val sex: String
)

data class SunMansionRequestJson(
        val year: Int,
        val month: Int,
        val day: Int,
        val hour: Int,
        val minutes: Int,
        val second: Int
)


