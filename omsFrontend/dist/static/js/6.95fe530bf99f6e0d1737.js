webpackJsonp([6,53],{E5QM:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},"HQ/U":function(t,e,a){"use strict";function r(t){a("HwB7")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("lLHC"),s=a("nSkA"),n=a("vMJZ"),l=a("0xDb"),i={components:{},props:["demand"],data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",content1:"",content2:"",create_user:localStorage.getItem("username"),level:1,complete:0,action_user:"",pid:"",is_public:!0,time:[]},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content1:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],time:[{required:!0,type:"array",message:"请输入正确的内容",trigger:"blur"}]},users:[],sendnotice:!1}},created:function(){this.getUsers()},methods:{postForm:function(t){var e=this;this.ruleForm.demand=this.demand,this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.ruleForm.start_time=e.ruleForm.time[0],e.ruleForm.end_time=e.ruleForm.time[1],e.ruleForm.pid="pps"+Object(l.a)(),Object(o.i)(e.ruleForm).then(function(t){if('"Created"'===t.statusText&&e.$message({type:"success",message:"恭喜你，新建成功"}),e.sendnotice){var a={action_user:e.ruleForm.action_user,title:"【"+e.ruleForm.type+"】"+e.ruleForm.title,message:"提交人: "+e.ruleForm.create_user+"\n指派人: "+e.ruleForm.action_user};Object(s.h)(a)}e.$emit("DialogStatus",!1)})})},resetForm:function(t){this.$refs[t].resetFields()},getUsers:function(){var t=this,e={groups__name:"ITDept"};Object(n.f)(e).then(function(e){t.users=e.data})}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:t.ruleForm.action_user,callback:function(e){t.$set(t.ruleForm,"action_user",e)},expression:"ruleForm.action_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content1"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.ruleForm.content1,callback:function(e){t.$set(t.ruleForm,"content1",e)},expression:"ruleForm.content1"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.ruleForm.time,callback:function(e){t.$set(t.ruleForm,"time",e)},expression:"ruleForm.time"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发送通知",prop:"sendnotice"}},[a("el-checkbox",{model:{value:t.sendnotice,callback:function(e){t.sendnotice=e},expression:"sendnotice"}},[t._v("发送通知")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.postForm("ruleForm")}}},[t._v("提交")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.resetForm("ruleForm")}}},[t._v("清空")])],1)],1)},u=[],m={render:c,staticRenderFns:u},d=m,p=a("VU/8"),f=r,_=p(i,d,!1,f,null,null);e.default=_.exports},HwB7:function(t,e,a){var r=a("E5QM");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("3b452f3d",r,!0)},t9aM:function(t,e,a){"use strict";function r(t){a("zQwN")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("BO1k"),s=a.n(o),n=a("lLHC"),l=a("QmSG"),i=a("HQ/U"),c={components:{addProject:i.default},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:l.pagesize,pageformat:l.pageformat,STATUS_TEXT:{0:"进行中",1:"已完成",2:"搁置"},STATUS_COLOR:{0:"primary",1:"success",2:"warning"},listQuery:{limit:l.LIMIT,offset:"",pid:"",status:"",create_user__username:"",search:"",ordering:""},addProForm:!1,showProForm:!1,demand_id:"",proContent:{},demandstatusForm:!1,taskCompleteForm:!1,updateform:{id:"",status:"1"},updatetaskform:{id:"",task_complete:""},updatecontent2form:{id:"",content2:""},content2ProForm:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(n.e)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count,t.tableData.map(function(t){var e={demand__id:t.id};Object(n.f)(e).then(function(e){t.projectData=e.data,t.task_complete=0;var a=!0,r=!1,o=void 0;try{for(var l,i=s()(e.data);!(a=(l=i.next()).done);a=!0){var c=l.value;t.task_complete+=Math.round(c.task_complete/e.data.length)}}catch(t){r=!0,o=t}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}var u={task_complete:t.task_complete};Object(n.g)(t.id,u)})})})},showAll:function(){this.listQuery={limit:l.LIMIT,offset:"",pid:"",status:"",create_user__username:"",search:"",ordering:""},this.fetchData()},getDialogStatus:function(t){this.addProForm=t,this.fetchData()},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*l.LIMIT,this.fetchData()},changeStatus:function(){this.fetchData()},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()},deleteDemand:function(t){var e=this;Object(n.b)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},addProject:function(t){this.addProForm=!0,this.demand_id=t.id},showProject:function(t){this.showProForm=!0,this.proContent=t},deleteProject:function(t){var e=this;Object(n.c)(t.id).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},updateDemand:function(t){this.demandstatusForm=!0,this.updateform.id=t},changeDemandStatus:function(){var t=this;Object(n.g)(this.updateform.id,this.updateform).then(function(){t.demandstatusForm=!1,t.fetchData()})},updateTaskComplete:function(t){this.taskCompleteForm=!0,this.updatetaskform.id=t.id,this.updatetaskform.task_complete=t.task_complete},changeComplete:function(){var t=this;100===this.updatetaskform.task_complete&&(this.updatetaskform.status=1),Object(n.h)(this.updatetaskform.id,this.updatetaskform).then(function(e){t.fetchData(),t.taskCompleteForm=!1})},updateProjectContent2:function(t){this.content2ProForm=!0,this.updatecontent2form.id=t.id,this.updatecontent2form.content2=t.content2},changeProjectContent2:function(){var t=this;Object(n.h)(this.updatecontent2form.id,this.updatecontent2form).then(function(e){t.content2ProForm=!1,t.fetchData()})}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("router-link",{attrs:{to:"addopsdemand"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建")])],1),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.showAll}},[t._v("全部")]),t._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"编号、标题、内容"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.handleSortChange}},[a("el-table-column",{attrs:{label:"任务",type:"expand",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.row.projectData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pid",label:"编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务概要"}}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"负责人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"start_time",label:"开始日期",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"完成日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini",type:t.STATUS_COLOR[e.row.status]}},[t._v("\n                      "+t._s(t.STATUS_TEXT[e.row.status])+"\n                    ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"task_complete",label:"进度",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(r.row.task_complete)+"%\n                    "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更新任务进度",placement:"top"}},[0==e.row.status&&100!=r.row.task_complete?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){t.updateTaskComplete(r.row)}}}):t._e()],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){t.showProject(e.row)}}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){t.updateProjectContent2(e.row)}}},[t._v("完成情况\n                    ")]),t._v(" "),a("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(a){t.deleteProject(e.row)}}},[t._v("删除")])],1)]}}])})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"pid",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("router-link",{attrs:{to:"viewopsdemand/"+e.row.id}},[a("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.pid))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"start_time",label:"开始日期",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"结束日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini",type:t.STATUS_COLOR[e.row.status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[e.row.status])+"\n              ")]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更改状态",placement:"top"}},[1!=e.row.status?a("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){t.updateDemand(e.row.id)}}}):t._e()],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"task_complete",label:"项目进度",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.task_complete)+"%\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.addProject(e.row)}}},[t._v("增加任务")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.deleteDemand(e.row.id)}}},[t._v("删除")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),a("el-dialog",{attrs:{visible:t.addProForm},on:{"update:visible":function(e){t.addProForm=e}}},[a("add-project",{attrs:{demand:t.demand_id},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{title:"任务详情",visible:t.showProForm},on:{"update:visible":function(e){t.showProForm=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"内容",prop:"status"}},[a("div",[t._v(t._s(t.proContent.content1))])]),t._v(" "),a("el-form-item",{attrs:{label:"实际完成情况",prop:"status"}},[a("div",[t._v(t._s(t.proContent.content2))])])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.demandstatusForm},on:{"update:visible":function(e){t.demandstatusForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"更改状态",prop:"status"}},[a("el-radio-group",{model:{value:t.updateform.status,callback:function(e){t.$set(t.updateform,"status",e)},expression:"updateform.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.changeDemandStatus}},[t._v("确 定")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"更新任务进度",visible:t.taskCompleteForm},on:{"update:visible":function(e){t.taskCompleteForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"完成百分比",prop:"task_complete"}},[a("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.updatetaskform.task_complete,callback:function(e){t.$set(t.updatetaskform,"task_complete",e)},expression:"updatetaskform.task_complete"}}),t._v(" "),a("a",[t._v(t._s(t.updatetaskform.task_complete)+"%")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeComplete}},[t._v("确定")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"更新完成情况",visible:t.content2ProForm},on:{"update:visible":function(e){t.content2ProForm=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"实际完成情况",prop:"content2"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.updatecontent2form.content2,callback:function(e){t.$set(t.updatecontent2form,"content2",e)},expression:"updatecontent2form.content2"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeProjectContent2}},[t._v("确定")])],1)],1)],1)],1)},m=[],d={render:u,staticRenderFns:m},p=d,f=a("VU/8"),_=r,h=f(c,p,!1,_,null,null);e.default=h.exports},zQwN:function(t,e,a){var r=a("zTBz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7a283fcf",r,!0)},zTBz:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".modifychange{margin:5px}",""])}});