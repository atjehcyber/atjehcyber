//<![CDATA[
function ticker(c){document.write('<div class="tickerwrapper"><span class="tickhead">Latest News</span><div class="ticker2"><ul>');for(var b=0;b<c.feed.entry.length;b++){for(var a=0;a<c.feed.entry[b].link.length;a++){if(c.feed.entry[b].link[a].rel=="alternate"){var f=c.feed.entry[b].link[a].href;break}}var e=c.feed.entry[b].title.$t;var d="<li><a href="+f+">"+e+"</a></li>";document.write(d)}document.write("</ul></div></div>")}; //]]>