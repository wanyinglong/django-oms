webpackJsonp([48],{"3IDq":function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".jobname{font-weight:600;margin-left:20px}.deploycmd{margin-bottom:25px}.deploycmd .lable-text{margin-left:25px;font-weight:600;margin-right:5px}",""])},RrUo:function(e,t,o){var s=o("3IDq");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o("rjj0")("1999fed1",s,!0)},hB7h:function(e,t,o){"use strict";function s(e){o("RrUo")}Object.defineProperty(t,"__esModule",{value:!0});var r=o("fZjL"),l=o.n(r),n=o("Dd8w"),a=o.n(n),i=o("iVC1"),c=o("QmSG"),u=o("NYxO"),d=o("nSkA"),m={components:{},data:function(){return{route_path:this.$route.path.split("/"),job_id:this.$route.params.job_id,ruleForm:{job:"",env:"",deploy_hosts:[],version:"",deploy_cmd:"",content:"",action_user:localStorage.getItem("username")},otherForm:{job:"",env:"",deploy_hosts:[],version:"",deploy_cmd:"",content:"",action_user:localStorage.getItem("username")},svnrules:{deploy_cmd:[{required:!0,message:"请输入正确的内容",trigger:"change"}],version:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},envs:[],cmds:[],jobs:{},currentPage:1,listQuery:{limit:c.LIMIT,offset:"",search:"",job__name:""},pagesize:c.pagesize,pageformat:c.pageformat,tableData:[],tabletotal:0,DEPLOY_STATUS:{deploy:{text:"发布中",type:"primary",icon:"el-icon-loading"},success:{text:"发布成功",type:"success",icon:"el-icon-success"},failed:{text:"发布失败",type:"danger",icon:"el-icon-error"}},selectId:[],butstatus:!0,showresult:!1,job_results:[],check_job_status:"",sendnotice:!0,showsvn:!0}},computed:a()({},Object(u.b)(["role"])),created:function(){this.fetchJobData(),this.fetchJobenvData()},methods:{fetchJobData:function(){var e=this;Object(i.h)(null,this.job_id).then(function(t){e.jobs=t.data,e.otherForm.job=e.ruleForm.job=e.listQuery.job__name=e.jobs.name,e.fetchDeployJobData()})},fetchJobenvData:function(){var e=this,t={job__id:this.job_id};Object(i.g)(t).then(function(t){e.envs=t.data})},fetchDeploycmdData:function(e){var t=this,o={env__id:e};Object(i.f)(o).then(function(e){t.cmds=e.data})},selectEnv:function(e){var t=this.envs.filter(function(t){return t.name===e})[0];this.otherForm.deploy_hosts=this.ruleForm.deploy_hosts=t.deploy_hosts,this.ruleForm.version=this.ruleForm.content=this.ruleForm.deploy_cmd=this.otherForm.deploy_cmd="","svn"===this.ruleForm.env?this.showsvn=!0:(this.showsvn=!1,this.$refs.ruleForm.clearValidate()),this.fetchDeploycmdData(t.id)},fetchDeployJobData:function(){var e=this;Object(i.e)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count,e.tableData.map(function(e){return e.deploy_status}).indexOf("deploy")>-1?e.check_job_status=setInterval(function(){var t={job__name:e.jobs.name};Object(i.i)(t).then(function(t){0===t.data.count?(clearInterval(e.check_job_status),e.fetchDeployJobData()):console.log("check job_status 3/s")})},3e3):clearInterval(e.check_job_status)})},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchDeployJobData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*c.LIMIT,this.fetchDeployJobData()},svnsubmitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;"string"==typeof t.ruleForm.deploy_hosts&&(t.ruleForm.deploy_hosts=t.ruleForm.deploy_hosts.split(",")),t.ruleForm.deploy_hosts=t.ruleForm.deploy_hosts.join(),t.ruleForm.deploy_cmd=t.ruleForm.deploy_cmd.replace(/\$\w+/,t.jobs.deploy_path)+" -r "+t.ruleForm.version,Object(i.j)(t.ruleForm).then(function(e){if(console.log(e.data.j_id),t.$message({message:"构建成功，系统正在玩命发布中 ...",type:"success"}),t.fetchDeployJobData(),t.sendnotice){var o={action_user:"ITDept_SkypeID",title:"【"+t.ruleForm.job+"】更新",message:"版本号: "+t.ruleForm.version+"\n更新内容: "+t.ruleForm.content+"\n操作人: "+t.ruleForm.action_user};Object(d.h)(o)}}).catch(function(e){t.$message.error("构建失败，请检查参数是否正确！"),console.log(e)})})},othersubmitForm:function(e){var t=this;this.otherForm.env=this.otherForm.version=this.otherForm.content=this.ruleForm.env,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;"string"==typeof t.otherForm.deploy_hosts&&(t.otherForm.deploy_hosts=t.otherForm.deploy_hosts.split(",")),t.otherForm.deploy_hosts=t.otherForm.deploy_hosts.join(),Object(i.j)(t.otherForm).then(function(e){if(console.log(e.data.j_id),t.$message({message:"构建成功，系统正在玩命发布中 ...",type:"success"}),t.fetchDeployJobData(),t.sendnotice){var o={action_user:"ITDept_SkypeID",title:"【"+t.otherForm.job+"】更新",message:"版本号: "+t.otherForm.version+"\n更新内容: "+t.otherForm.content+"\n操作人: "+t.otherForm.action_user};Object(d.h)(o)}}).catch(function(e){t.$message.error("构建失败，请检查参数是否正确！"),console.log(e)})})},handleSelectionChange:function(e){this.selectId=[];for(var t=0,o=e.length;t<o;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},deleteForm:function(){var e=this;clearInterval(this.check_job_status);for(var t=0,o=this.selectId.length;t<o;t++)Object(i.a)(this.selectId[t]).then(function(o){delete e.selectId[t]});setTimeout(this.fetchDeployJobData,1e3)},showJobResult:function(e){this.showresult=!0;var t=new Function("return "+e)(),o=[];l()(t).map(function(e){o.push({host:e,data:t[e]})}),this.job_results=o},searchClick:function(){this.fetchDeployJobData()}}},h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("a",{staticClass:"jobname"},[e._v(e._s(e.jobs.name))])]),e._v(" "),o("div",{staticClass:"deploycmd"},[o("a",{staticClass:"lable-text"},[e._v("发布步骤")]),e._v(" "),o("el-select",{attrs:{placeholder:"请选择发布环境"},on:{change:e.selectEnv},model:{value:e.ruleForm.env,callback:function(t){e.$set(e.ruleForm,"env",t)},expression:"ruleForm.env"}},e._l(e.envs,function(e){return o("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),e.showsvn?o("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.svnrules,"label-width":"90px"}},[o("el-form-item",{attrs:{label:"发布命令",prop:"deploy_cmd"}},[o("el-select",{attrs:{placeholder:"请选择发布命令"},model:{value:e.ruleForm.deploy_cmd,callback:function(t){e.$set(e.ruleForm,"deploy_cmd",t)},expression:"ruleForm.deploy_cmd"}},e._l(e.cmds,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.deploy_cmd}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"代码路径"}},[o("el-input",{attrs:{disabled:""},model:{value:e.jobs.code_url,callback:function(t){e.$set(e.jobs,"code_url",t)},expression:"jobs.code_url"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发布版本",prop:"version"}},[o("el-input",{model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"更新内容",prop:"content"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"通知skype"}},[o("el-checkbox",{model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")])],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.svnsubmitForm("ruleForm")}}},[e._v("svn更新")])],1)],1):o("el-form",{ref:"otherForm",attrs:{model:e.otherForm,rules:e.svnrules,"label-width":"90px"}},[o("el-form-item",{attrs:{label:"发布命令",prop:"deploy_cmd"}},[o("el-select",{attrs:{placeholder:"请选择发布命令"},model:{value:e.otherForm.deploy_cmd,callback:function(t){e.$set(e.otherForm,"deploy_cmd",t)},expression:"otherForm.deploy_cmd"}},e._l(e.cmds,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.deploy_cmd}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"代码路径"}},[o("el-input",{attrs:{disabled:""},model:{value:e.jobs.code_url,callback:function(t){e.$set(e.jobs,"code_url",t)},expression:"jobs.code_url"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"通知skype"}},[o("el-checkbox",{model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")])],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.othersubmitForm("otherForm")}}},[e._v("开始构建")])],1)],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:16}},[o("el-card",[o("div",{staticClass:"table-button"},[o("a",{staticClass:"jobname"},[e._v("发布记录")]),e._v(" "),o("el-button",{staticStyle:{padding:"3px 0","margin-left":"20px"},attrs:{type:"danger",plain:"",icon:"el-icon-refresh"},on:{click:e.fetchDeployJobData}},[e._v("刷新\n          ")])],1),e._v(" "),o("div",{staticClass:"table-search"},[o("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[o("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1),e._v(" "),o("div",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},["super"===e.role?o("el-table-column",{attrs:{type:"selection"}}):e._e(),e._v(" "),o("el-table-column",{attrs:{prop:"version",label:"发布版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[o("el-popover",{attrs:{placement:"top",width:"200",trigger:"hover",content:t.row.content}},[o("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v(e._s(t.row.version))])],1)],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"deploy_status",label:"发布状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[o("el-button",{attrs:{plain:"",size:"mini",type:e.DEPLOY_STATUS[t.row.deploy_status].type,icon:e.DEPLOY_STATUS[t.row.deploy_status].icon}},[e._v("\n                    "+e._s(e.DEPLOY_STATUS[t.row.deploy_status].text)+"\n                  ")])],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"action_user",label:"发布人"}}),e._v(" "),o("el-table-column",{attrs:{prop:"create_time",label:"发布时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                  "+e._s(e._f("formatTime")(t.row.create_time))+"\n                ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"success",size:"mini",disabled:!t.row.result},on:{click:function(o){e.showJobResult(t.row.result)}}},[e._v("查看结果\n                ")])]}}])})],1)],1),e._v(" "),o("div",{staticClass:"table-footer"},["super"===e.role?o("div",{staticClass:"table-button"},[o("el-button",{attrs:{type:"danger",icon:"delete",disabled:e.butstatus},on:{click:e.deleteForm}},[e._v("删除记录")])],1):e._e(),e._v(" "),o("div",{staticClass:"table-pagination"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])])],1)],1),e._v(" "),o("el-dialog",{attrs:{visible:e.showresult},on:{"update:visible":function(t){e.showresult=t}}},[o("div",e._l(e.job_results,function(t){return o("div",{key:t.id,staticClass:"runlog"},[o("p",{staticClass:"host"},[e._v(e._s(t.host))]),e._v(" "),o("pre",[e._v(e._s(t.data))])])}))])],1)},p=[],_={render:h,staticRenderFns:p},b=_,f=o("VU/8"),v=s,y=f(m,b,!1,v,null,null);t.default=y.exports}});