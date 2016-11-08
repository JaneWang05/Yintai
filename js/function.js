// 1.判断浏览器；2.获取所有元素
// 3.元素类名是否等于指定类名


// function  getClass(classname){
// 	if(document.getElementsByClassName){
// 		// w3c
// 		return document.getElementsByClassName(classname);

// 	}else{
// 		var one=[]
// 		var all=document.getElementsByClassName("*");
// 		for(i=0;i<all.length;i++){
// 			if (all[i].className=classname) {
// 				arr.push(all[i]);
// 			};

// 		}
//         return arr 
// 		}
// 	}


function  getClass(classname,range){

	range=range||document;
	range=range===undefined?document:range;
	range=range?range:document;
	if(document.getElementsByClassName){
		// w3c
		return range.getElementsByClassName(classname);

	}else{
            var all=range.getElementsByTagName("*")
            var arr=[];
            for(var i=0;i<all.length;i++){
            	//当前元素的className是否包含指定的classname
            	// if(all[i].className=classname){
            		if(checkClass(all[i].className,classname)){
            		arr.push(all[i]);
            	// }
             }
            }
            return arr;
    	}   		
    }
	


	function checkClass(classStr,classname){
	var arr=classStr.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]===classname){
			return true;
		}			
	}
	return false;
}
	 

// $(selecter.range)获取所有元素
// $(".one")获取指定类名的元素
// $("#one")获取指定id的元素
// $("div")获取指定标签名的元素
// 思路：1.初始化参数range,2.selecter 去空 3.判断第一个字符，4.获取元素

function $(selecter,range){
	range=range||document;
	// range=range===undefined?document:range;
	// range=range?range:document;
	selecter=selecter.trim();
	// #one  .one
	if(selecter.charAt(0)=="."){
	   return getClass(selecter.substring(1),range);
	}else if(selecter.charAt(0)=="#"){
		return range.getElementById(selecter.substring(1));
	}else if (/^[a-zA-z][a-zA-z1-6]{0,8}$/.test(selecter)) {
		return range.getElementsByTagName(selecter)
	}
}

// getContent(obj,value)  获取或设置obj的文本
// obj  指定对象
// value  颜色设置的文本
// 思路：1、判断获取或分支  2、获取   判断浏览器是否支持属性
//       3、设置   判断浏览器是否支持属性

//          obj.innerText=value   obj.innerContent=value   


function getContent(obj,value){
	if(value){
		// 设置
		if(obj.innerText){
			obj.innerText=value;
		}else{
			obj.innerContent=value;
		}
	}else{
		// 获取
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.innerContent;
		}
	}
}


// getStyle(obj,attr)  获取指定元素样式
// obj   指定对象    attr   样式属性
// 思路：1、判断浏览器是否支持属性 2、返回属性值

function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
    else{
	return obj.currentStyle[attr];
  }
}