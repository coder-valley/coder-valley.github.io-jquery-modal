$(document).ready( ()=> {
	$('.modal').hide();
	$('#myBtn').click( ()=>{
		$('.modal').slideDown('60000');
	})
	$('.close').click( ()=> {
		$('.modal').slideUp('60000');	
	})
})