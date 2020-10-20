if (document.cookie.split('; ').indexOf('cookieaccept=1') === -1) void function () {
	var options,i
	try{
		var src = document.currentScript.src
		i = src.indexOf('#')
		if (i === -1) throw i
		options = JSON.parse(decodeURIComponent(src.substr(i + 1)))
	}catch(e){}

	var opt = {buttonBgColor:'orange',buttonColor:'white',color:'#555',bannerBg:'white',font:'',link:'cookie-policy.html',showIcon:true};
	if (options) {for (i in opt) if (!options.hasOwnProperty(i)) options[i] = opt[i]}
	else options = opt

	;(document.body || document.firstElementChild).append(function (_, o) {
		o.font += ''
		if (!o.font.startsWith('font:'))o.font='font:'+o.font
		_.innerHTML =
			'<div class="cookie-banner" style="position: fixed; z-index: 2147483645; bottom: 0;  max-width: 350px; box-shadow: 0 0 16px 0px rgba(0,0,0,.15); padding: 10px 20px; margin: 10px; border-radius: 20px; background: '+o.bannerBg+'; '+o.font+'">'+
				'<span>We use our own and third-party cookies to personalize content and to analyze web traffic. </span>'+
				'<a href="cookie-policy.html" style="color: '+o.color+'" target="_blank">Read more about cookies</a>'+
				'<button type="button" style="background-color: '+o.buttonBgColor+'; color: '+o.buttonColor+'; border-radius: 99px; float: right; border: none; padding: 11px 13px">'+
					(o.showIcon?'<svg viewBox="0 0 512 512" height="1.3em" style="margin: 0 .25em 0 0; vertical-align: text-top" fill="currentColor">'+
						'<path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>'+
					'</svg>':'') +
					'Ok'+
				'</button>'+
			'</div>'
		;
		_.querySelector('button').addEventListener('click', function () {
			_.style.display = 'none'
			_.remove()
			var t = new Date()
			t.setTime(+t + 30 * 864e+5) // after 30 days
			document.cookie = 'cookieaccept=1; expires=' + t.toUTCString() + '; path=/'
		})
		return _
	}(document.createElement('div'), options));
}();
