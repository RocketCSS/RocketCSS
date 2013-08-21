//
// RocketCSS- Javascript Functions
// For use with rocket.css
// Licensed under The MIT License (MIT) 
// http://rocketcss.com/license.txt
//

//Progress Bar

(function($) {
	jQuery.fn.extend ({
	setPos: function(val,options) {
	var defaults = {
		animate: true,
		duration: 8
	};
	var options = $.extend(defaults,options);
	var ex = 0;
	if (val>=100) {
		val = 100;
		ex = 1;
	};
	if (options.animate) {
		var size = parseInt(this[0].style.width.replace("%",""));
		var lethis=this
		if (val >=size) { 
			x=setInterval(function(){ size++; if (size <= val) { lethis.css("width", size + "%"); } else { clearInterval(x) }},options.duration)
		} else {
			x=setInterval(function(){ size--; if (size >= val) { lethis.css("width", size + "%"); } else { clearInterval(x) }},options.duration)
                }
		

	} else {
		this.css("width", val + "%");
	}
	return ex;
}});
})(jQuery);
(function($) {
jQuery.fn.extend({
	advancePos: function(val,options){
	var defaults = {
                animate: true,
                duration: 8
        };
        var options = $.extend(defaults,options);
	var tmp = parseInt(this[0].style.width.replace("%",""));
	val = parseInt(val);
	val += tmp;
	var ex = 0;
	if (val>=100) {
                val = 100;
		ex = 1;
        };
	if (options.animate) {
                var lethis=this
                if (val >=tmp) {
                        x=setInterval(function(){ tmp++; if (tmp <= val) { lethis.css("width", tmp + "%"); } else { clearInterval(x) }},options.duration)
                } else {
                        x=setInterval(function(){ tmp--; if (tmp >= val) { lethis.css("width", tmp + "%"); } else { clearInterval(x) }},options.duration)
                }


        } else {
                this.css("width", val + "%");
        }
	return ex;
}});
})(jQuery);

$.fn.getPos = function(){
	var tmp = parseInt(this[0].style.width.replace("%",""));
	return tmp;
}
//Text Box Validation

$.fn.status = function( stat ) {
	var clas
	switch (stat) {
		case "normal":
			clas="input";
			break;
		case "success":
			clas="input--success";
			break;
		case "warning":
			clas="input--warning";
			break;
		case "error":
			clas="input--error";
			break;
		}
	this.removeClass('input--error input--warning input--success').addClass(clas);	
	return 0;
};

//Alerts

(function($) {
	jQuery.fn.extend({
		alert: function(options) {
		var defaults = {
			type: "alert",
			animate: true,
			direction: "up",
			duration: 500,
			animation: "fade",
			html: ""
		};
		var ids = this.attr('id');
		var options = $.extend(defaults,options);
		if (options.animate) {
			if (options.animation == "slide" ) {
				var reptxt="<i class='icon-white-cross right clickable' onclick=\"$('#" + ids + "').hide('slide', {direction: &quot;" + options.direction + "&quot;}," +options.duration +")\"></i>"
			} else {
				var reptxt="<i class='icon-white-cross right clickable' onclick=\"$('#" + ids + "').fadeOut(" + options.duration + ")\"></i>"
			}
		} else {
				var reptxt="<i class='icon-white-cross right clickable' onclick=\"$('#" + ids + "').hide(0)\"></i>"
		}
		if (options.html == "") {
			this.append(reptxt);
			
		} else {
		this.html(options.html + reptxt)
		}
		switch(options.type) {
			case "alert":
				classi="alert";
				break;
			case "success":
				classi="alert--success";
				break;
			case "warning":
				classi="alert--warning";
				break;
			case "error":
				classi="alert--error";
				break;
		}
		this.attr('class',classi)
		if (options.animate) {
			if (options.animation=="slide") {
				this.show('slide',{direction: options.direction}, options.duration);
			} else {
				this.fadeIn(options.duration);
			}
		} else {
			this.show(0);
		}
}});
})(jQuery);
