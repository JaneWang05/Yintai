$(function(){
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
   var search=getChilds($(".searchbox")[0])[0];
    search.onclick=function(){
        this.value="";
    }
    search.onblur=function(){
        this.value="满99送丝光棉POLO衫";
    }
	 //块 选项卡 
	 var ma=$(".weixin");
	 var botk=$(".select-weixin");
	 botk[0].style.zIndex=999;
	 for(var i=0;i<ma.length;i++){
	 	ma[i].index=i;
	 	ma[i].onmouseover=function(){
	 		botk[this.index].style.display="block";
	 	}
	 	ma[i].onmouseout=function(){
	 		botk[this.index].style.display="none";
	 	}
	}
  var phone=$(".phone");
   var select=$(".select-phone");
   select[0].style.zIndex=999;
   for(var i=0;i<phone.length;i++){
    phone[i].index=i;
    phone[i].onmouseover=function(){
      select[this.index].style.display="block";
    }
    phone[i].onmouseout=function(){
      select[this.index].style.display="none";
    }
  }

   var wo=$(".log-home");
	 var lbxl=$(".yintai-sel");
	 lbxl[0].style.zIndex=999;
	 for(var i=0;i<wo.length;i++){
	 	wo[i].index=i;
	 	wo[i].onmouseover=function(){
	 		lbxl[this.index].style.display="block";
	 	}
	 	wo[i].onmouseout=function(){
	 		lbxl[this.index].style.display="none";
	 	}
	 }

	 // bnl 选项卡
   var sy1=$(".bannerleft");
   var sy2=$(".fu");	   
   for(var i=0;i<sy1.length;i++){
		  sy1[i].index=i;
			  sy1[i].onmouseover=function(){
			  sy2[this.index].style.display="block";
    }  
			  sy1[i].onmouseout=function(){
			  sy2[this.index].style.display="none";
   }
 }

 // 无缝轮播
    var middle=$(".btu")[0];
	var imgs=$("a",$(".bnt")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnL=$(".btnL")[0];
	var btnR=$(".btnR")[0];
	var mw=parseInt(getStyle(middle,"width"));
	for(var i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.left=mw+"px";
	}
	 lis[0].classList.add("hot");
	// now  记录当前窗口图片
	// next 记录下一张

	// 1.下一张就位 2.动画 imgs[now] left----mw,imgs[next]
    var now=0;
    var next=0
    var t=setInterval(move,2000);
    middle.onmouseover=function(){
		clearInterval(t);
	}
	middle.onmouseout=function(){
		t=setInterval(move,2000);
	}
	// 选项卡

	// for(var i=0;i<lis.length;i++){
	// 	lis[i].index=i;
	// 	lis[i].onclick=function(){
	// 		// next----this.index
	// 	   imgs[this.index].style.left=mw+"px";
	// 	   lis[now].classList.remove("hot");
	// 	   lis[this.index].classList.add("hot");
	// 	   animate(imgs[now],{left:-mw});
	// 	   animate(imgs[this.index],{left:0});
	// 	   next=this.index;
	// 	   now=this.index;
	//   }
	// }


	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			// next----this.index
			if(now>this.index){
			  imgs[this.index].style.left=-mw+"px";
			  animate(imgs[now],{left:mw});
		      animate(imgs[this.index],{left:0});	
			}else if(now<this.index){
              imgs[this.index].style.left=mw+"px";
              animate(imgs[now],{left:-mw});
		      animate(imgs[this.index],{left:0});
			}else{
				return;
			}
		   
		   lis[now].classList.remove("hot");
		   lis[this.index].classList.add("hot");
		  
		   next=this.index;
		   now=this.index;
	  }
	}
    
    // btnL btnR
    var flag=true;
	btnR.onclick=function(){
		if (flag){
			move();
			flag=false;
		}
	}
	btnL.onclick=function(){
		if (flag){
			moveL();
			flag=false;
		} 
		
	}	
    

    function move(){
		next++;
		if(next==imgs.length){
			next=0
		}
		imgs[next].style.left=mw+"px";
		lis[now].classList.remove("hot");
		lis[next].classList.add("hot");
		animate(imgs[now],{left:-mw});
		animate(imgs[next],{left:0},function(){flag=true});
		now=next;
	}	
	 function moveL(){
		next--;
		if(next<0){
			next=imgs.length-1
		}
		imgs[next].style.left=-mw+"px";
		lis[now].classList.remove("hot");
		lis[next].classList.add("hot");
		animate(imgs[now],{left:mw});
		animate(imgs[next],{left:0},function(){flag=true});
		now=next;
	}

	// 块1
	 
   var kuai=$(".klt");
   var list=$(".list");
   var jiao=$(".trangle") 
   kuai[0].style.borderBottomColor="#e5004f";
   list[0].style.display="block";

   for(var i=0;i<kuai.length;i++){
      kuai[i].index=i;
        kuai[i].onmouseover=function(){
          for(j=0;j<kuai.length;j++){

            kuai[j].style.borderBottomColor="#333";
          }
           for(j=0;j<list.length;j++){
            list[j].style.display="none";
          }
          this.style.borderBottomColor="#e5004f";
        list[this.index].style.display="block";
    }  
  
 }

// 	    var oDiv = document.getElementById("czrm");
//     var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
//     var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
//     var timer = null;
//     for (var i = 0; i < oLi.length; i++) {
//         oLi[i].index = i;
//         oLi[i].onmouseover = function() {
//             show(this.index);
//         }
//     }
//     function show(a) {
//         index = a;
//         var alpha = 0;
//         for (var j = 0; j < oLi.length; j++) {
//             oLi[j].className = "";
//             aCon[j].className = "";
//             aCon[j].style.opacity = 0;
//             aCon[j].style.filter = "alpha(opacity=0)";
//         }
//         oLi[index].className = "cur";
//         clearInterval(timer);
//         timer = setInterval(function() {
//             alpha += 2;
//             alpha > 100 && (alpha = 100);
//             aCon[index].style.opacity = alpha / 100;
//             aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
//             alpha == 100 && clearInterval(timer);
//         },
//         5)
//     }
// }

   //专柜 
   var zg=$(".zg1");
   var botZ=$(".bztj"); 
   zg[0].style.borderBottomColor="#e5004f";
   botZ[0].style.display="block";
   for(var i=0;i<zg.length;i++){
      zg[i].index=i;
        zg[i].onmouseover=function(){
          for(j=0;j<zg.length;j++){
            zg[j].style.borderBottomColor="#333";
          }
           for(j=0;j<botZ.length;j++){
            botZ[j].style.display="none";
          }
          this.style.borderBottomColor="#e5004f";
        botZ[this.index].style.display="block";
    }  
  
 }



	 
    // neicenter
 function mddlunbo(r){
var anniuBox=getclass('middle3-middle',document)[r]
var anniu=anniuBox.getElementsByTagName('span')
var anImg=anniuBox.getElementsByTagName('a')
var circle=anniuBox.getElementsByTagName('b')
var iw=parseInt(getStyle(anImg[0],'width'))
anImg[0].style.left=0;
circle[0].style.background="#e5004f"
var Mindex=0;
var Mnext=0;
var ff=true;
function move5(){
    if(!ff){
      return;
     }
     Mnext++;
   if(Mnext==anImg.length){
    Mnext=anImg.length-1;
    return;
   }
   ff=false;
   anImg[Mnext].style.left=iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:-iw},500)
    animate(anImg[Mnext],{left:0},500,function(){
      ff=true;
    });
    circle[Mnext].style.background="#e5004f";
    Mindex=Mnext;
}
anniu[1].onclick=function(){
  move5()
}
anniu[0].onclick=function(){
    if(!ff){
      return;
 }
     Mnext--;
   if(Mnext<0){
    Mnext=0;
    return;
   }
   ff=false;
   anImg[Mnext].style.left=-iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:iw},500)
    animate(anImg[Mnext],{left:0},500,function(){
      ff=true;
    });
    circle[Mnext].style.background="#e5004f";
    Mindex=Mnext;
  }
  for (var i = 0; i < circle.length; i++) {
    circle[i].Mindex=i;
    circle[i].onclick=function(){
       Mnext++;
       if(Mindex==this.Mindex){
        return
       }
   if(Mnext==anImg.length){
    Mnext=0;
   }
   anImg[this.Mindex].style.left=iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:-iw},500)
    animate(anImg[this.Mindex],{left:0},500);
    circle[this.Mindex].style.background="#e5004f";
    Mindex=this.Mindex;
    }
  };

  anniuBox.onmouseover=function(){
    animate(anniu[0],{left:0},200)
    animate(anniu[1],{left:360},200)
  }
  anniuBox.onmouseout=function(){
    animate(anniu[0],{left:-30},200)
    animate(anniu[1],{left:390},200)
  }
}
for (var i = 0; i <9; i++) {
  mddlunbo(i)
  }


// 中间左边小图标左右滑动开始
function lunn(r){
  var Range=$('.neileft-bottom')[r]
  var San=$('.sanjiao',Range)
  var bbox=$('.imgg-box',Range)
  bbox[0].style.left='0'
  var inn=0;
  var nex=0;
  var flag=true;
    San[0].onclick=function(){
        nex--;
    if(nex<0){
      nex=bbox.length-1;
  }
    if(!flag){
      return
    }
    flag=false;
    bbox[nex].style.left="-170px"
    animate(bbox[inn],{left:170},500)
    animate(bbox[nex],{left:0},500,function(){
      flag=true;
    })
    inn=nex;
 }
 
  San[1].onclick=function(){
    nex++;
    if(nex==bbox.length){
      nex=0;
    }
    if(!flag){
      return
    }
    flag=false;
    bbox[nex].style.left="170px"
    animate(bbox[inn],{left:-170},500)
    animate(bbox[nex],{left:0},500,function(){
      flag=true;
    })
    inn=nex;
  }
}
 for (var i = 0; i< 9; i++) {
   lunn(i)
 };

//  中间左边小图标左右滑动


// 边框

var bor=$(".bor")
var bt=$(".bt")
var bl=$(".bl")
var br=$(".br")
var bottom=$(".bb")
for (var i = 0; i < bor.length; i++) {
  bor[i].aa=i
  bor[i].onmouseover=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(bt[this.aa],{width:ow-2},400)
    animate(bottom[this.aa],{width:ow-2},400)
    animate(bl[this.aa],{height:oh-2},400)
    animate(br[this.aa],{height:oh-2},400)
  }
  bor[i].onmouseout=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(bt[this.aa],{width:0},400)
    animate(bottom[this.aa],{width:0},400)
    animate(bl[this.aa],{height:0},400)
    animate(br[this.aa],{height:0},400)
  }
}

// ce
var guding=$('.guding')[0];
var links=$('div',guding)
var scroll=$('.top')
var arr=[];
for (var i = 0; i < scroll.length; i++) {
  arr.push(scroll[i].offsetTop)
};
window.onscroll=function(){
  var stop=document.documentElement.scrollTop||document.body.scrollTop;  
  if(stop>900){
    guding.style.display="block"
  }else{
     guding.style.display="none"
  }

  for (var i = 0; i < arr.length; i++) {
   if(stop+200>arr[i]){
    for (var j = 0; j < links.length; j++) {
      $('a',links[j])[0].style.opacity="";
    };
     $('a',links[i])[0].style.opacity="1";
   }
  };

  var indd=0
  for (var i = 0; i < links.length; i++) {
    links[i].indd=i;
    links[i].onclick=function(){
 
      animate(document.documentElement,{scrollTop:scroll[this.indd].offsetTop},500)
        animate(document.body,{scrollTop:scroll[this.indd].offsetTop},500)
    }
  };
}
})