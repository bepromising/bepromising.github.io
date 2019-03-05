$(document).ready(function(){
	
	page5_jContainer1_tabs=new Array("page5_jTabControl1");
	page5_jContainer1_obj=$('#page5_jContainer1_container').layout({
		onresize:function(){
			Vjjq.refreshContainer(page5_jContainer1_tabs,'');},
		center__paneSelector:'.page5_jContainer1_center'
		,maskIframesOnResize: true
	});
	
	$('#page5_jTabControl1_body').tabs({
		heightStyle: "fill"
	});
	
	$("#page5_jAccordion1_body").accordion({
		heightStyle:"fill"
	});
});

jQuery().ready(function(){
	jQuery('#page5_jDataGrid2_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		colNames:['监控类型','监控名称','监控地址','展示屏幕'],
		colModel:[
			{name:'A0',index:'A0', width:64},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:64}
		],
		width: 280,
		height: 95
	}).navGrid('#page5_jDataGrid2_pager',{edit:false,add:false,del:false});
	$('#page5_jDataGrid2_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',1,{A0:'卡口',A1:'xxx',A2:'石碣大桥',A3:'屏幕1'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',2,{A0:'卡口',A1:'xxx',A2:'环城北路',A3:'屏幕2'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',3,{A0:'交警',A1:'xxx',A2:'崇焕中路XXX',A3:'屏幕3'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',4,{A0:'公安',A1:'xxx',A2:'政文路XXXX',A3:'屏幕4'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',5,{A0:'公安',A1:'xxx',A2:'下一村xxxx',A3:'屏幕5'});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:''});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:''});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:''});
	$('#page5_jDataGrid2_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:''});
	$('#page5_jDataGrid2_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page5_jContainer1_obj.resizeAll();
});
