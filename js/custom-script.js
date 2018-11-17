/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 4.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */
function rightNavBarCheckboxChange()
{
	$('.likesort').click(function(){
		if($('.likesort').is(":checked"))
		{
			$('.timesort').prop('checked',false);
			$('.hotsort').prop('checked',false);
		}
		else
		{
			$('.timesort').prop('checked',true);
			$('.hotsort').prop('checked',false);
		}
	});
	$('.hotsort').click(function(){
		if($('.hotsort').is(':checked'))
		{
			$('.timesort').prop('checked',false);
			$('.likesort').prop('checked',false);
		}
		else
		{
			$('.timesort').prop('checked',true);
			$('.likesort').prop('checked',false);
		}
	});
	$('.timesort').click(function(){
		if($('.timesort').is(':checked'))
		{
			$('.hotsort').prop('checked',false);
			$('.likesort').prop('checked',false);
		}
		else
		{
			$('.hotsort').prop('checked',true);
			$('.likesort').prop('checked',false);
		}
	})
}