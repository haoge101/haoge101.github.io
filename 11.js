function doSort(n){$(document).ready(function(){$("span[class^=Nsb_r_list_tha]").each(function(){$("#hidSortFields").val().replace(" desc ","")==$(this).attr("id")?($(this).removeClass(),$(this).addClass($.cookie("hidSortFieldsClass"))):($(this).removeClass(),$(this).addClass("Nsb_r_list_tha3")),$(this).bind("click",function(){$(this).attr("class")=="Nsb_r_list_tha1"||$(this).attr("class")=="Nsb_r_list_tha3"?($("#hidSortFields").val($(this).attr("id")),$(this).removeClass("Nsb_r_list_tha3"),$(this).removeClass("Nsb_r_list_tha1"),$(this).addClass("Nsb_r_list_tha2"),$.cookie("hidSortFieldsClass","Nsb_r_list_tha2")):($("#hidSortFields").val($(this).attr("id")+" desc "),$(this).removeClass("Nsb_r_list_tha2"),$(this).addClass("Nsb_r_list_tha1"),$.cookie("hidSortFieldsClass","Nsb_r_list_tha1")),eval(n)})})})}function jcomGetAllSelectedRecords(n){n||(n="chkSelect");var t="",r=document.getElementsByName(n);for(i=0;i<r.length;i++)r[i].checked==!0&&(t=t+r[i].value+",");return t!=""&&(t=t.substr(0,t.length-1)),t}function jcomSelectAllRecords(n,t){n||(n="chkSelectAll"),t||(t="chkSelect");var f=document.getElementById(n).checked,r="",u=document.getElementsByName(t);for(i=0;i<u.length;i++)u[i].checked=f,r=r+u[i].value+",";return r!=""&&(r=r.substr(0,r.length-1)),r}function jscomNewOpenMaxWindow(n,t){var u,o,i,r,e,f;e=screen.width,f=screen.height-60,i=0,i<0&&(i=0),r=0,r<0&&(r=0),u="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",u=u+"width="+e+",height="+f+",left="+i+",top="+r,o=window.open(n,t,u);try{o.focus()}catch(s){}}function jscomPrintPreviewOneFolder(n,t,i,r){_printPreviewReturnParameter=n+"&Spliter;"+t+"&Spliter;"+i+"&Stype;"+r,window.open("../framework/PrintPreview.aspx")}function jscomPrintPreviewCallback(){return _printPreviewReturnParameter}function jscomPrintLabelCallback(){return _printPreviewReturnLabel}function jscomPrintPreviewByLabel(n,t,i,r,u){_printPreviewReturnParameter=n+"&Spliter;"+i+"&Spliter;"+r+"&Stype;"+u,_printPreviewReturnLabel=t,window.open("../framework/PrintPreview.aspx")}function jscomPrintPreview(n,t,i,r){_printPreviewReturnParameter=n+"&Spliter;"+t+"&Spliter;"+i+"&Stype;"+r,window.open("../framework/PrintPreview.aspx")}function jscomDownloadFile(n,t){t==null&&(t="local"),window.open("../../module/DownloadFile.aspx?fileName="+n+"&fileLocation="+t)}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomNewOpenBySize(n,t,i,r){var e,o,u,f;i||(i=screen.width),r||(r=screen.height-60),u=(screen.width-i)/2,u<0&&(u=0),f=(screen.height-60-r)/2,f<0&&(f=0),e="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",e=e+"width="+i+",height="+r+",left="+u+",top="+f,o=window.open(n,t,e);try{o.focus()}catch(s){}}function jscommOnBlurCheckForOnlyPositiveInteger(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&(isNaN(n.value)?(window.alert(Translate("common3","","??????????????????????????????")),n.focus(),n.select()):n.value.indexOf(".",0)>-1?(window.alert(Translate("common3","","??????????????????????????????")),n.focus(),n.select()):parseInt(n.value)<0&&(window.alert(Translate("common3","","??????????????????????????????")),n.focus(),n.select()))}function jscomOnBlurCheckForOnlyPositiveNumber(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&(isNaN(n.value)?(window.alert(Translate("common13","","????????????????????????")),n.focus(),n.select()):parseFloat(n.value)<0&&(window.alert(Translate("common13","","????????????????????????")),n.focus(),n.select()))}function jscomNewOpenModalDialog(n,t,i){var r=new Date;return n=n.lastIndexOf("?")==-1?n+"?currTime="+r.getTime():n+"&currTime="+r.getTime(),showModalDialog(n,window,"dialogWidth:"+t+"px; dialogHeight:"+i+"px;help:0;status:0;resizeable:1;")}function jscomNewOpenBySize(n,t,i,r){var e,o,u,f;i||(i=screen.width),r||(r=screen.height-60),u=(screen.width-i)/2,u<0&&(u=0),f=(screen.height-60-r)/2,f<0&&(f=0),e="toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=yes,",e=e+"width="+i+",height="+r+",left="+u+",top="+f,o=window.open(n,t,e);try{o.focus()}catch(s){}}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomNewOpenFullScreen(n,t){var i=window.open(n,t,"fullscreen=yes,toolbar=no");try{i.focus()}catch(r){}}function jscomSelectDept(n,t,i,r,u,f){f==null&&(f="../../"),t==null&&(t=""),n==null&&(n=""),r==null&&(r=""),u==null&&(u="Y"),i!=""?parent.WebTab_CreateTab("SelectDept",Translate("business5","","????????????"),"framework/user/SelectDept.aspx?OpenerName="+i+"&DeptRight="+r+"&IsLimitByOwner="+u+"&ParentDeptUid="+n+"&SelectDeptUid="+t):jscomNewOpenBySize(f+"framework/user/SelectDept.aspx?OpenerName="+i+"&DeptRight="+r+"&IsLimitByOwner="+u+"&ParentDeptUid="+n+"&SelectDeptUid="+t,"SelectDept",600,480)}function GetEventObject(){if(document.all)return window.event;for(func=GetEventObject.caller;func!=null;){var n=func.arguments[0];if(n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;func=func.caller}return null}function jscomOnBlurCheckForOnlyNumber(){var t=GetEventObject(),n=t.srcElement||t.target;n.tagName=="INPUT"&&isNaN(n.value)&&(window.alert(Translate("common1","","????????????????????????")),n.focus(),n.select())}function GetFormObject(n){n==null&&(n="form1");var t=document.forms[n];return t||(t=eval("document."+n)),t}function bgiframe(n){var i={},u=navigator.userAgent.toLowerCase(),t,r;(t=u.match(/msie ([\d.]+)/))?i.ie=t[1]:(t=u.match(/firefox\/([\d.]+)/))?i.firefox=t[1]:(t=u.match(/chrome\/([\d.]+)/))?i.chrome=t[1]:(t=u.match(/opera.([\d.]+)/))?i.opera=t[1]:(t=u.match(/version\/([\d.]+).*safari/))?i.safari=t[1]:0,i.ie=="6.0"&&(r=document.createElement("iframe"),r.id=n.id,r.src="javascript:false",r.style.cssText="display:block;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:-1; border:0;filter:Alpha(Opacity='0');",n.insertBefore(r,n.firstChild))}function GetNavigator(){var t={},i=navigator.userAgent.toLowerCase(),n;return(n=i.match(/msie ([\d.]+)/))?t.ie=n[1]:(n=i.match(/firefox\/([\d.]+)/))?t.firefox=n[1]:(n=i.match(/chrome\/([\d.]+)/))?t.chrome=n[1]:(n=i.match(/opera.([\d.]+)/))?t.opera=n[1]:(n=i.match(/version\/([\d.]+).*safari/))?t.safari=n[1]:0,t}try{$(function(){$(".commoninput").each(function(){$(this).removeClass("commoninput"),$(this).addClass("Nsb_form_s_tt")}),$(".commontextarea").each(function(){$(this).removeClass("commontextarea"),$(this).addClass("Nsb_form_s_ttarea")}),$("select[id^='extend']").each(function(){$(this).addClass("Nsb_form_s_slct")})})}catch(e){}var _printPreviewReturnParameter="",_printPreviewReturnLabel="";

// ?????????????????????
function getOs() {  
   var OsObject = ""; 
   if(navigator.userAgent.indexOf("MSIE")>0) {  
        return "msie";  
   }  
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
        return "firefox";  
   }  
   if(isSafari=navigator.userAgent.indexOf("Chrome")>0) {  
       return "chrome";  
   }
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {  
        return "safari";  
   }   
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
        return "camino";  
   }  
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){  
        return "gecko";  
   }  
    
}
function isIE6() {  
	   var OsObject = ""; 
	   if(navigator.userAgent.indexOf("MSIE 6")>0) {  
	        return true;  
	   }else{
		   	return false;
	   }
}
function keyUpFloat(obj) {
	obj.value = obj.value.replace(/[^\d\.]/g, '');
}
// ???????????????????????????
function keyUpNum(obj) {
	obj.value = obj.value.replace(/\D/g, '');
}
function Logout(url){
	window.location.href = getRandomUrl(url + "/xk/LoginToXk?method=exit");
}
// ??????????????????
function changeDisplay(id){
 
	if(document.getElementById(id).style.display == "none"){
		document.getElementById(id).style.display = "";
	}else{
		document.getElementById(id).style.display = "none";
	}	
}
// checkbox ??????
function selectAll(obj,lstName){
	var objs = document.getElementsByName(lstName);
	for(i = 0; i < objs.length; i++){
		objs[i].checked = obj.checked;		
	}
}
// ???????????????
function refresh(obj){???
    
	if(obj == null???|| obj == undefined???){ 
		if(getOs() == "chrome"){
			window.location.reload();// ????????????????????????????????????
		}else{
			window.location.href=window.location.href;
		} 
		
	}else{
		if(getOs() == "chrome"){
			obj.location.reload();// ????????????????????????????????????
		}else{
			obj.location.href=obj.location.href;
		}
		
	}	
}
function changeTheme(url,theme){ 
	  
	$.post(url+"/system/changeTheme.do",{
		changeTheme:theme
			  },
			  function(data,status){  
				 // window.location.href=getRandomUrl(url+"/framework/main.jsp");
				  if(data.indexOf("ok") >= 0){
					  document.getElementById("theme_blue").setAttribute("class", "Nsb_top_c3_1");
					  document.getElementById("theme_green").setAttribute("class", "Nsb_top_c3_2");
					  document.getElementById("theme_orange").setAttribute("class", "Nsb_top_c3_3");
					  document.getElementById("theme_red").setAttribute("class", "Nsb_top_c3_4");
					  document.getElementById("theme_purple").setAttribute("class", "Nsb_top_c3_5");
					  document.getElementById("theme_gray").setAttribute("class", "Nsb_top_c3_6");
					  document.getElementById("link_theme").href = url+"/framework/images/"+theme+".css"; 
					  if(theme == "blue"){
						  document.getElementById("theme_blue").setAttribute("class", "Nsb_top_c3_11");
					  }
					  if(theme == "green"){
						  document.getElementById("theme_green").setAttribute("class", "Nsb_top_c3_22");
					  }
					  if(theme == "orange"){
						  document.getElementById("theme_orange").setAttribute("class", "Nsb_top_c3_33");
					  }
					  if(theme == "red"){
						  document.getElementById("theme_red").setAttribute("class", "Nsb_top_c3_44");
					  }
					  if(theme == "purple"){
						  document.getElementById("theme_purple").setAttribute("class", "Nsb_top_c3_55");
					  }
					  if(theme == "gray"){
						  document.getElementById("theme_gray").setAttribute("class", "Nsb_top_c3_66");
					  }
					  changeDisplay('divTopTheme');
				  }
				 
			  });
	 
	
}
// ?????????????????????????????????
function getRandomUrl(htmlurl){
	var count =htmlurl.indexOf("?");
	var  date=new Date();
	var t=Date.parse(date);    
	if(count<0){
		htmlurl=htmlurl+"?tktime="+t;
	}else{
		htmlurl=htmlurl+"&tktime="+t;
	}
	return htmlurl;
}
// ?????? ????????????s
function JsMod(htmlurl,tmpWidth,tmpHeight){
	htmlurl=getRandomUrl(htmlurl);

		
	window.open(htmlurl);
		
	}
}
// ?????? ????????????s??????????????????????????????
function JsModAll(htmlurl,tmpWidth,tmpHeight,formName){
	htmlurl=getRandomUrl(htmlurl);
	var newwin = window.showModalDialog(htmlurl,window,"dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");
	if(formName == null???|| formName == undefined???|| formName == ""){
		document.getElementById("Form1").submit();
	}else{
		document.getElementById(formName).submit();
	}
}
//?????? ????????????s
function JsModForm(htmlurl,tmpWidth,tmpHeight,formName){
	htmlurl=getRandomUrl(htmlurl);
	var newwin = window.showModalDialog(htmlurl,window,"dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");

	if(newwin == "refresh" || newwin == "ok"){		
		if(formName == null???|| formName == undefined???|| formName == ""){
			document.getElementById("Form1").submit();
		}else{
			document.getElementById(formName).submit();
		}
	}
}
// ??????
function pagination(pageIndex){
	if(pageIndex != null && pageIndex != ""){
		document.getElementById("pageIndex").value = pageIndex;
	} 
	window.name = 'win_target';
	document.getElementById("Form1").target = "win_target";
	document.getElementById("Form1").submit();
}
function paginationKeyDown(){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==13){ // enter ???
          pagination(null);
    }
}
function checkInteger(input){
	str = input.value;
  	var allValid = true;
  	if(str==""){return false;}
 	try{
		if(parseInt(str)!=str) allValid = false;
  	} catch(ex){
		allValid = false;
	}
	if(!allValid){
		alert("??????????????????????????????");
		input.value="";
		input.focus();
		return false;
  	}
  	return true;
}
var obj_pa = new Array();
var patt_pa = new Array();
var patt_value = new Array();
var pamess_pa = new Array();
var i_pa = 0;
function checkPattern(object,patternType,pattern_value,mess) {	
	obj_pa[i_pa] = object;
	patt_pa[i_pa] = patternType;
	patt_value[i_pa] = pattern_value;
	pamess_pa[i_pa] = mess;
	i_pa ++;
}

//??????????????????
function JsOpenWin(htmlurl,tmpWidth,tmpHeight){
   var  top = ((window.screen.availHeight-tmpHeight)/2);  
   var  left = ((window.screen.availWidth-tmpWidth)/2);  
	//console.info(window.screen.availHeight);
	//console.info(document.body.clientHeight);
	window.open(htmlurl, "printsetup", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,top=" 
		+ top
		+ " ,left=" 
		+ left
		+ ",width="+tmpWidth+"px,height=" + tmpHeight + "px");
}

function trim(input){
	return input.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

function openWindow(htmlurl,tmpWidth,tmpHeight,itop,ileft){
	var top = ((window.screen.availHeight-document.body.clientHeight)/2);
	if(itop!=null && itop!=""){
		top = itop;
	}
	var left = ((window.screen.availWidth-document.body.clientWidth)/2);  
	if(ileft!=null && ileft!=""){
		left = ileft;
	}
	
	window.open(htmlurl, "printsetup", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,top=" 
			+ top+ ",left=" + left+ ",width="+tmpWidth+"px,height=" + tmpHeight + "px");
}


