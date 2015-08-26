$(document).ready(function(){        
	$('li img').on('click',function(){
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive"/>';
		gallerysection = $(this).parent('li').parent('ul').attr('id');
		//start of new code new code
		var index = $(this).parent('li').index();   
		console.log(index);
		var from = $(this).parent('li').parent('ul').attr('data-info');
		var html = '';

		html += img;          
		html += '<p class = "gallery">'+from+'</p>';      
		html += '<div style="height:25px;clear:both;display:block;">';

		html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
		html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
		html += '</div>';
		
	$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		

	
		
   });	
})

var gallerysection;

$(document).ready(function(){        
	$('eventli a').on('click',function(){
		var src = $(this).children('img').attr('src');
		var img = '<img src="' + src + '" class="img-responsive" width = "400" height = "216"/>';
			var info = $(this).attr('data-info');
		//start of new code new code
		// var index = $(this).parent('li').index();   
		
		var html = '';
		html+= '<p></p>'
		html += img;       
		html+= '<p></p>'         
		html += '<div class = "events" style="height:100px;clear:both;display:block;">';
		//	html += '<p class = "executives" style="font-size:70%">' + bio + '</p>';
		html += '<p class = "executives">' + info + '</p>';

		// html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
		// html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
		html += '</div>';
		

		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		
		
		
		
   });	
})




$(document).ready(function(){        
	$('execli img').on('click',function(){
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive" width = "200" height = "108"/>';
		var bio = $(this).attr('alt');
		
		//start of new code new code
		//var index = $(this).parent('execli').index();   
		
		var html = '';
		html+= '<p></p>'
		html += img;       
		html+= '<p></p>'         
		html += '<div class = "executives" style="height:200px;clear:both;display:block;">';
		//	html += '<p class = "executives" style="font-size:70%">' + bio + '</p>';
		html += '<p class = "executives">' + bio + '</p>';

		// html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
		// html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
		html += '</div>';
		
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		
		
		
		
   });	
})


        
         

$(document).ready(function(){
$(document).on('click', 'a.controls', function(){
	var index = $(this).attr('href');
	var hashedsection = '#';
	hashedsection +=gallerysection;
	var src = $(hashedsection).children('li:nth-child('+index+')').children('img').attr('src');      
	console.log(index);
	$('.modal-body img').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	console.log(newNextIndex);
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}

	
 	var total = $(hashedsection).children('li').length; 
	console.log('total:');
	console.log(total);
	//hide next button
	if(total === newNextIndex-2){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 1){
		$('a.previous').hide();
	}else if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});
})
// $(document).on('click', 'a.controls', function(){


// // 	var index = $(this).attr('href');
// 	var hashedsection = '#';
// 	hashedsection +=gallerysection;
// 	var src = $(hashedsection).children('li:nth-child('+index+')').children('img').attr('src');
// 	console.log(index);

	
// 	$('.modal-body img').attr('src', src);

// 	var newPrevIndex = parseInt(index) - 1; 
// 	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
// 	if($(this).hasClass('previous')){               
// 		$(this).attr('href', newPrevIndex); 
// 		$('a.next').attr('href', newNextIndex);
// 	}else{
// 		$(this).attr('href', newNextIndex); 
// 		$('a.previous').attr('href', newPrevIndex);
// 	}
	
// 	var total = $(hashedsection).children('li').length; 
// 	console.log(total);
// 	//hide next button
// 	if(total === newNextIndex){
// 		$('a.next').hide();
// 	}else{
// 		$('a.next').show()
// 	}            
// 	//hide previous button
// 	if(newPrevIndex === 0){
// 		$('a.previous').hide();
// 	}else{
// 		$('a.previous').show()
// 	}
	


// 	return false;
// });