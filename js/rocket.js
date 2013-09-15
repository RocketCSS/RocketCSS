//
// RocketCSS- Javascript Functions
// For use with rocket.css
// Licensed under The MIT License (MIT) 
// http://rocketcss.com/license
//

//Progress Bar

//Set Position
(function($) {
	jQuery.fn.extend ({
	setPos: function(val,options,callback) {
	var defaults = {
		animate: true,
		duration: 500 
	};
	var target=$('[class^="progress"]', this)
	//Allow for callback function
	if (callback == undefined) { 
		if ($.isFunction(options)) { 
			var cb = options; //This means the user can have a callback without the options array
		} 
	} else {
		if ($.isFunction(callback)) { 
			var cb = callback;
		} else {
			var cb = function(){}; //Create empty callback function to avoid errors later
		}
	}
	var options = $.extend(defaults,options);
	var ex = 0;
	if (val>=100) {
		val = 100;
		ex = 1; //Let the user know the progress bar is 100% full.
	};
	if (options.animate) {
		target.animate({width: val + "%" },options.duration,cb); //Gives a nice fill animation
	} else {
		target.css("width", val + "%");
		callback.call(cb);
	}
	return ex;
}});
})(jQuery);

//Advance Position
//Adds or subtracts from the current position
(function($) {
jQuery.fn.extend({
	advancePos: function(val,options,callback){
	var defaults = {
                animate: true,
                duration: 500
        };
	var target=$('[class^="progress"]', this)
	if (callback == undefined) {
                if ($.isFunction(options)) {
                        var cb = options;
                }
        } else {
                if ($.isFunction(callback)) {
                        var cb = callback;
                } else {
                        var cb = function(){};
                }
        }

        var options = $.extend(defaults,options);
	var current = parseInt(target[0].style.width.replace("%","")); //Gets current position
	val = parseInt(val);
	val += current;
	var ex = 0;
	if (val>=100) {
                val = 100;
		ex = 1; //Lets the user know if the progress bar is at 1005
        };
	if (options.animate) {
        	target.animate({width: val + "%" },options.duration,cb);        
        } else {
                target.css("width", val + "%");
		callback.call(cb);
        }
	return ex;
}});
})(jQuery);

//Get Position
//Returns current position of progress bar
$.fn.getPos = function(){
	var target=$('[class^="progress"]', this)
	var pos = parseInt(target[0].style.width.replace("%",""));
	return pos;
}

//End Progress Bar

//Text Box Validation
//Sets glow color of textbox
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
	this.removeClass('input--error input--warning input--success').addClass(clas);	//Remove any previous glows, then set glow color
	return 0;
};

//End Text Box Validation

//Alerts
//Ugh this code is messy, imma clean it up tomorrow.

(function($) {
	jQuery.fn.extend({
		alert: function(options) {
		var defaults = {
			type: "alert",
			animate: true,
			direction: "up",
			duration: 500,
			animation: "slide",
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
		this.removeClass('alert alert--success alert--warning alert--error').addClass(classi);
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

//End Alerts

//jQuery UI Slide Effects
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(2(d,l){d.6={9:{}};(2(){2 g(a,b,c,e){d.1M(a)&&(b=a,a=a.9);a={9:a};H==b&&(b={});d.I(b)&&(e=b,c=H,b={});K("S"===w b||d.j.J[b])e=c,c=b,b={};d.I(c)&&(e=c,c=H);b&&d.M(a,b);c=c||b.C;a.C=d.j.17?0:"S"===w c?c:c 1K d.j.J?d.j.J[c]:d.j.J.1H;a.p=e||b.p;4 a}2 k(a){4!a||("S"===w a||d.j.J[a])||"1A"===w a&&!d.6.9[a]||d.I(a)||"1w"===w a&&!a.9?!0:!1}d.M(d.6,{1o:"@1L",13:2(a,b){Z(8 c=0;c<b.1m;c++)H!==b[c]&&a.18("G-6-"+b[c],a[0].1Y[b[c]])},14:2(a,b){8 c,d;Z(d=0;d<b.1m;d++)H!==b[d]&&(c=a.18("G-6-"+b[d]),c===l&&(c=""),a.7(b[d],c))},1h:2(a,b){"R"===b&&(b=a.N(":X")?"i":"q");4 b},1Z:2(a,b){8 c,d;12(a[0]){v"u":c=0;t;v"1U":c=0.5;t;v"O":c=1;t;1k:c=a[0]/b.E}12(a[1]){v"n":d=0;t;v"1N":d=0.5;t;v"Q":d=1;t;1k:d=a[1]/b.L}4{x:d,y:c}},16:2(a){K(a.D().N(".G-6-T"))4 a.D();8 b={L:a.19(!0),E:a.1a(!0),"1b":a.7("1b")},c=d("<1c></1c>").1n("G-6-T").7({1I:"1E%",1D:"1B",1x:"1u",1t:0,1s:0}),e={L:a.L(),E:a.E()},f=Y.1l;1J{f.1p}1q(g){f=Y.1r}a.24(c);(a[0]===f||d.1j(a[0],f))&&d(f).1i();c=a.D();"1v"===a.7("o")?(c.7({o:"W"}),a.7({o:"W"})):(d.M(b,{o:a.7("o"),1y:a.7("z-1z")}),d.F(["u","n","O","Q"],2(d,c){b[c]=a.7(c);1g(1C(b[c],10))&&(b[c]="V")}),a.7({o:"W",u:0,n:0,Q:"V",O:"V"}));a.7(e);4 c.7(b).i()},1f:2(a){8 b=Y.1l;a.D().N(".G-6-T")&&(a.D().1F(a),(a[0]===b||d.1j(a[0],b))&&d(b).1i());4 a},1G:2(a,b,c,e){e=e||{};d.F(b,2(b,d){8 h=a.1e(d);0<h[0]&&(e[d]=h[0]*c+h[1])});4 e}});d.P.M({9:2(){2 a(a){2 c(){d.I(g)&&g.B(e[0]);d.I(a)&&a()}8 e=d(3),g=b.p,k=b.A;(e.N(":X")?"q"===k:"i"===k)?(e[k](),c()):f.B(e[0],b,c)}8 b=g.s(3,r),c=b.A,e=b.U,f=d.6.9[b.9];4 d.j.17||!f?c?3[c](b.C,b.p):3.F(2(){b.p&&b.p.B(3)}):!1===e?3.F(a):3.U(e||"j",a)},i:2(a){4 2(b){K(k(b))4 a.s(3,r);8 c=g.s(3,r);c.A="i";4 3.9.B(3,c)}}(d.P.i),q:2(a){4 2(b){K(k(b))4 a.s(3,r);8 c=g.s(3,r);c.A="q";4 3.9.B(3,c)}}(d.P.q),R:2(a){4 2(b){K(k(b)||"1O"===w b)4 a.s(3,r);8 c=g.s(3,r);c.A="R";4 3.9.B(3,c)}}(d.P.R),1e:2(a){8 b=3.7(a),c=[];d.F(["1P","1Q","%","1R"],2(a,d){0<b.1S(d)&&(c=[1T(b),d])});4 c}})})()})(1d);(2(d,l){d.6.9.1V=2(g,k){8 a=d(3),b="o u O n Q L E".1W(" "),c=d.6.1h(a,g.A||"i"),e="i"===c,f=g.1X||"n",m="11"===f||"20"===f?"u":"n",f="11"===f||"n"===f,h,l={};d.6.13(a,b);a.i();h=g.21||a["u"===m?"1a":"19"](!0);d.6.16(a).7({22:"X"});e&&a.7(m,f?1g(h)?"-"+h:-h:h);l[m]=(e?f?"+=":"-=":f?"-=":"+=")+h;a.23(l,{U:!1,C:g.C,15:g.15,p:2(){"q"===c&&a.q();d.6.14(a,b);d.6.1f(a);k()}})}})(1d);',62,129,'||function|this|return||effects|css|var|effect|||||||||show|fx||||left|position|complete|hide|arguments|apply|break|top|case|typeof||||mode|call|duration|parent|height|each|ui|null|isFunction|speeds|if|width|extend|is|bottom|fn|right|toggle|number|wrapper|queue|auto|relative|hidden|document|for||up|switch|save|restore|easing|createWrapper|off|data|outerWidth|outerHeight|float|div|jQuery|cssUnit|removeWrapper|isNaN|setMode|focus|contains|default|activeElement|length|addClass|version|id|catch|body|padding|margin|none|static|object|border|zIndex|index|string|transparent|parseInt|background|100|replaceWith|setTransition|_default|fontSize|try|in|VERSION|isPlainObject|center|boolean|em|px|pt|indexOf|parseFloat|middle|slide|split|direction|style|getBaseline|down|distance|overflow|animate|wrap'.split('|'),0,{}))
//End jQuery UI Slide Effects
