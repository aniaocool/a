$(function(){
	
    theaMsForm();
    
    //倒计时
	var timer = null;
	countDown(2017,11,11);
	function countDown (y,m,d){
		timer = setInterval(function(){
			var now=new Date(),
			    end=new Date(y,m-1,d),
			    time=(end.getTime()-now.getTime())/1000,
			    day=parseInt(time/(24*60*60)),
			    hour=parseInt((time-day*24*60*60)/3600),
			    min=parseInt((time-day*24*60*60-hour*3600)/60);
			if( day < 10){
				day = '0'+day;
			}
			if( hour < 10){
				hour = '0'+hour;
			}
			if( min < 10){
				min = '0'+min;
			}
			$('.day').html(day);
			$('.hour').html(hour);
			$('.min').html(min);
			if(end.getTime()-now.getTime() < 0)
			{
				$('.day').html('00');
				$('.hour').html('00');
				$('.min').html('00');
				clearInterval(timer);
			}
		},1500) 
	}
	
	
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
	    clientHeigh = document.documentElement.clientHeight || document.body.clientHeight;
	window.onscroll=function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		clientHeigh = document.documentElement.clientHeight || document.body.clientHeight;	
		if(scrollTop > 100){
			$('.rightbox').show();
		}
		else{
			$('.rightbox').hide();
		}
		yidong();
	}
	window.onresize=function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		clientHeigh = document.documentElement.clientHeight || document.body.clientHeight;
		yidong();
	}
	
	
	function yidong()
	{	
		$('.rightbox').stop().animate({'top':parseInt(clientHeigh/2 - parseInt($('.rightbox').css('height'))/2 + scrollTop)},500)
	}
	
})
