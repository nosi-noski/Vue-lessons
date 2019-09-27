
$(function () {
    $('.left-panel').on('keyup', 'input', function (event) {
;
			if( event.which == 37 ){
				$(this).closest('td').prev().find('input').focus();
				event.preventDefault();
			} else if ( event.which == 39 || event.which > 64){
				$(this).closest('td').next().find('input').focus();
				event.preventDefault();
			}
		
	});
	$('.right-panel').on('keyup', 'input', function (event) {
	
			if( event.which == 37 ){
				$(this).closest('td').prev().find('input').focus();
				event.preventDefault();
			} else if ( event.which == 39 || event.which > 48){
				$(this).closest('td').next().find('input').focus();
				event.preventDefault();
			}
		
	}).on('dblclick', 'input', function(event){

		let classStyle = '';
		if( $(this).hasClass('enemy-letter') ){

			if( $(this).hasClass('match') ){
				
				$(this).removeClass('match');
				classStyle = 'position-match'

			}else if( $(this).hasClass('position-match') ){
				
				$(this).removeClass('position-match');
				
			} else {
				classStyle = 'match'
			}
			$(this).addClass(classStyle);
		}
	});
	
});