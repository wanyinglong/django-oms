webpackJsonp([56],{"76op":function(t,e,s){var r=s("wBgF");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s("rjj0")("71a740ec",r,!0)},IwO3:function(t,e,s){"use strict";function r(t){s("76op")}Object.defineProperty(e,"__esModule",{value:!0});var n=s("fZjL"),o=s.n(n),l=s("8TIX"),c=s("wLjJ"),u={components:{sesectHosts:l.default},data:function(){return{ruleForm:{hosts:[],cmd:"ls /tmp",user:"admin"},rules:{cmd:[{required:!0,message:"请输入命令",trigger:"blur"}]},commands:[{name:"连接数",cmd:"netstat -nt"},{name:"磁盘",cmd:"df -h"},{name:"内存",cmd:"free -m"},{name:"乘法口诀",cmd:'for ((i=1;i<=9;i++)); do for ((j=1;j<=i;j++)); do result=$(($i*$j));echo -n "$i"x"$j"=$result" ";done;echo;done'},{name:"关机",cmd:"init 0"},{name:"删除",cmd:"rm -rf /tmp"},{name:"移动",cmd:"mv aaa /tmp"},{name:"防火墙",cmd:"iptables -I INPUT -p tcp -j DORP"}],denycmd:["rm","rf","shutdown","reboot","init","halt","rmdir","mkdir","iptables","mv","wget","mk",">","dev","&","dd","^"],jid:"",job_results:void 0,running:!1,showresult:!1,cmdrun_result:"",selecthosts:[]}},created:function(){},methods:{submitForm:function(t){var e=this;this.results=[],this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(c.c)(e.ruleForm).then(function(t){e.jid=t.data.results,console.log(e.jid),e.running=e.showresult=!0,e.cmdrun_result=setInterval(function(){console.log("check job_status 3/s"),e.getResult(e.jid)},3e3)})})},getResult:function(t){var e=this;Object(c.d)(t).then(function(t){var s=t.data.results,r=[];o()(s).map(function(t){r.push({host:t,data:s[t]})}),e.job_results=r,t.data.count>0&&(e.running=!1,clearInterval(e.cmdrun_result))})},getHosts:function(t){this.ruleForm.hosts=t},changeCmd:function(t){this.ruleForm.cmd=t}}},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[s("el-card",{staticClass:"runcmd"},[s("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[s("sesect-hosts",{attrs:{selecthost:t.ruleForm.hosts},on:{gethosts:t.getHosts}})],1),t._v(" "),s("el-form-item",{attrs:{label:"命令列表"}},t._l(t.commands,function(e){return s("el-button",{key:e.id,attrs:{type:"danger",size:"small"},on:{click:function(s){t.changeCmd(e.cmd)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),t._v(" "),s("el-form-item",{attrs:{label:"执行命令",prop:"cmd"}},[s("el-input",{attrs:{placeholder:"防止恶意命令，暂时禁止直接输入"},model:{value:t.ruleForm.cmd,callback:function(e){t.$set(t.ruleForm,"cmd",e)},expression:"ruleForm.cmd"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("执行")]),t._v(" "),t.running?s("el-button",{attrs:{type:"success",loading:t.running}},[t._v("执行中")]):t._e(),t._v(" "),t.showresult&&!t.running?s("el-button",{attrs:{type:"success"}},[t._v("执行成功")]):t._e()],1),t._v(" "),t._l(t.job_results,function(e){return s("div",{key:e.id,staticClass:"runlog"},[s("p",{staticClass:"host"},[t._v(t._s(e.host))]),t._v(" "),s("pre",[t._v(t._s(e.data))])])})],2)],1)],1)},a=[],m={render:i,staticRenderFns:a},d=m,f=s("VU/8"),h=r,p=f(u,d,!1,h,null,null);e.default=p.exports},wBgF:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".runcmd{width:80%}",""])}});