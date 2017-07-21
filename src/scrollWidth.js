
(function ( $ ) { 
    $.fn.scrollWidth = function() {
			var that = $(this)[0];
		    var temp_el = document.createElement('span');
		    temp_el.style.fontSize = window.getComputedStyle(that).fontSize;
		    temp_el.style.fontFamily = window.getComputedStyle(that).fontFamily;
		    temp_el.style.fontStyle = window.getComputedStyle(that).fontStyle;
		    temp_el.style.textTransform = window.getComputedStyle(that).textTransform;
		    temp_el.style.fontStretch = window.getComputedStyle(that).fontStretch;
		    temp_el.style.fontWeight = window.getComputedStyle(that).fontWeight;
		    temp_el.style.fontVariant = window.getComputedStyle(that).fontVariant;
		    temp_el.innerHTML = $(this).text();
		    temp_el.style.visibility = "hidden";
		    document.body.appendChild(temp_el);
		    var width = temp_el.getBoundingClientRect().width;
		    document.body.removeChild(temp_el);
		    return width;
    };
 
}( jQuery ));
