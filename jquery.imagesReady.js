jQuery.fn.imagesReady = function(){
	jQuery.holdReady(true);
	var images_url = new Array();
	this.each(function(i){
		images_url[i] = this.src;
	});
	unholdReady = function(i){
		if((i+1) == images_url.length){
			jQuery.holdReady(false);
		}
	}
	this.each(function(i){
		var img_obj = new Image();
		img_obj.src = images_url[i];
		img_obj.onload = unholdReady(i);
	});
}