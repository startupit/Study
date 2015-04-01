$('#thiskeyword').click(function(){
	$(this).pinkify();
});
$('#chainCall').click(function(){
	$(this).next().pinkify().css({'font-weight':'bold','text-align':'center'});
});
$('#widgetTextbox').textboxdecorator();

$('.seeCode').click(function(){
	var $li = $(this).parents('li').find('h1');
		code = $(this).parents('li').find('.prettyprint').clone();
	$(this).parents('li').find('.prettyprint').dialog({title: $li.html(), width: 800, height: 400, close: function(event){
		$li.after(code);
	}});
});

var tbar;
$('#progressbarTest').click(function(){
	var t = $(this);
	if ($('.progressbarTest').hasClass('progressbar-with-no-arrow')) {
		tbar.progressbar('option', 'value', tbar.progressbar('value')+10);
	} else {
		tbar = $('.progressbarTest').removeClass('progressbar-with-arrow').addClass('progressbar-with-no-arrow').progressbar({
			showArrow: false,
			value: 10, 
			hide: { 
				effect: "explode",
				duration: 1000
			}}).bind('progressbarcomplete', function(event, data){
				tbar.progressbar('option', 'hide', { effect: "explode", duration: 1000 });
			});
	}
});
$('#progressbarWithArrow').click(function(){
	var t = $(this);
	if ($('.progressbarTest').hasClass('progressbar-with-arrow')) {
		tbar.progressbar('option', 'value', tbar.progressbar('value')+10);
	} else {
		tbar = $('.progressbarTest').removeClass('progressbar-with-no-arrow').addClass('progressbar-with-arrow').progressbar({
			showArrow: true,
			value: 10, 
			hide: { 
				effect: "explode",
				duration: 1000
			}}).bind('progressbarcomplete', function(event, data){
				console.log('complete....');
				tbar.progressbar('option', 'hide', { effect: "explode", duration: 1000 });
			});
	}
});

$.zjdgx.progressbar.prototype.reset = function() {
	this._setOption('value',0);
}

/** widget extension
--------------------*/
$('.widgetExtend').click(function(){
	$(this).next().dialog({title:'widget继承测试'}).dialog('red');
});


/** widget _supper _supperApply
------------------------------*/
$('#supper').click(function(){
	$('#_supperResult p:first').suppercompute().suppercompute('compute', 1, 2);
});

$('#supperSub').click(function(){
	$('#_supperResult p:last').subcompute().subcompute('compute',1,2,3);
});
/** canvas demo
-----------------------------*/
$('button.canvas').click(function(){
	var t = $(this);
	
	if (t.hasClass('canvasDemo1')) {
		$('.test1').canvasizr();
		var img = $('#forDownload')[0].toDataURL("image/jpeg");
		$('.downloadCanvas').attr('href', img);
	}
});


$('div.fntest button').click(function(){
	$('div.fntest p').azure();
});