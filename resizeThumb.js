function resizeThumb(a,c,b){$(a).each(function(){$(this).attr({src:$(this).attr(&quot;src&quot;).replace(&quot;/s&quot;+c+&quot;-c/&quot;,&quot;/s&quot;+b+&quot;-c/&quot;),width:b,height:b})})}$(function(){resizeThumb(&quot;.label_thumb&quot;,&quot;200&quot;)});
