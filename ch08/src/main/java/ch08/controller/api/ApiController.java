package ch08.controller.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.vo.UserVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/01")
	public Object ajax01() {
		
		Map<String, Object> map = new HashMap<>();
		map.put("name", "dooly");
		map.put("age", 10);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value="/02", method=RequestMethod.POST)
	public Object ajax02(UserVo vo) {
		vo.setNo(10L);
		return vo;
	}
	
	@ResponseBody
	@RequestMapping(value="/03", method=RequestMethod.POST)
	public Object ajax03(@RequestBody UserVo vo) {
		System.out.println(vo);
		vo.setNo(10L);
		return vo;
	}
	/* @RequestBody: HTTP Body 안에 JSON을 vo에 mapping
	   @ResponseBody: vo 객체를 JSON으로 바꿔 HTTP Body 안에 담음
	   HTTP Body 부분에 들어가는 것들 중 가장 많이 쓰이는 형식이 JSON 형식
	   JSON(JavaScript Object Notation):
			JS 객체 리터럴(literal) 문법으로, 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
	   XML형식에 비해 필요한 구조가 적고 key:value로 보통 존재함
	 */
}
