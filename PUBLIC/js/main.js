$(document).ready(function() {
	//must use keydown to prevent error when tabbing out of last input in a category
	$("input").keydown(sumCategory);

	//---Math functions---
	function sumCategory() {
		//adds all inputs in category to array
		var categoryInputs = $(this).parent().children();
		var categoryTotal = 0;
		//iterates through array, adds values to categoryTotal
		for (i=0; i<categoryInputs.length; i++) {
			currentInputValue = parseFloat(categoryInputs[i].value);
			//checks for NaN, as NaN doesn't equal itself in js
			if (currentInputValue !== currentInputValue) {
				console.log('Input' + (i+1) + "is NaN");
			} else {
					categoryTotal += currentInputValue;
				}
		}
		//console.log(categoryTotal);
		//cuts to 2 decimal places
		categoryTotal = categoryTotal.toFixed(2);
		$(this).parent().siblings(".output_field").html("<p>" + categoryTotal + "</p>");
		$(this).siblings(".output_field").find("#receipt_total").text(categoryTotal);
	}


	//---UI functions---
	//show/hide help info
	$('.help_btn').click(function() {
		$('.help_info').slideToggle();
	});
	//add a category (by cloning 1st category module - .clone(true) copies div AND event handlers)
	$('.add_btn_mobile').click(function(){
		$('.category_module:eq(0)').clone(true).appendTo('.category_wrapper');
	});
	//delete categories
	$('.delete_btn').click(function() {
		if(document.getElementsByClassName("category_module").length > 1) {
			$(this).parent().parent().remove();	
		}
		else {
			console.log('There must be at least 1 category');
		}
	});

});	