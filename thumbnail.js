function removeHtmlTag(b,a){if(b.indexOf("<")!=-1){var d=b.split("<");for(var c=0;c<d.length;c++){if(d[c].indexOf(">")!=-1){d[c]=d[c].substring(d[c].indexOf(">")+1,d[c].length)}}b=d.join("")}a=(a<b.length-1)?a:b.length-2;while(b.charAt(a-1)!=" "&&b.indexOf(" ",a)!=-1){a++}b=b.substring(0,a-1);return b+" "}function createSummaryAndThumb(d){var f=document.getElementById(d);var a="";var b=f.getElementsByTagName("img");var e=summary_noimg;a='<span style="float:left; margin: 0px 10px 0px 0px;"><img src="http://i.imm.io/12O1O.png" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';if(b.length>=1){a='<div id="thumbnail" style="float:left;"><div class="thumbnail" style="margin: 4px 8px 0px -3px;"><img src="'+b[0].src+'" width=200"'+img_thumb_width+'px" height=110"'+img_thumb_height+'px"/></div></div>';e=summary_img}var c=a+"<p>"+removeHtmlTag(f.innerHTML,e)+"</p>";f.innerHTML=c};
function resizeThumb(el, from, to) {
    $(el).each(function() {
        $(this).attr({
            'src': $(this).attr('src').replace('/s'+from+'-c/', '/s'+to+'-c/'),
            'width': to, 'height': to
        });
    });
}
$(function() {
    resizeThumb('.slider_thumb', '72', '200'); // Ubah ukuran thumbnail dari 72 menjadi 200
    resizeThumb('.alignnone', '72', '250');
});