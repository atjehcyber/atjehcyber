imgr=new Array();imgr[0]="http://4.bp.blogspot.com/-uFzR56TtKgQ/UBL76yKr_qI/AAAAAAAAGDc/ICuw8qf9I4s/s1600/bg.png";showRandomImg=true;aBold=true;summaryPost=140;summaryTitle=20;numposts1=17;label1="news";function removeHtmlTag(f,e){var h=f.split("<");for(var g=0;g<h.length;g++){if(h[g].indexOf(">")!=-1){h[g]=h[g].substring(h[g].indexOf(">")+1,h[g].length)}}h=h.join("");h=h.substring(0,e-1);return h}function showrecentposts(z){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();document.write("<ul>");for(var o=0;o<numposts1;o++){var w=z.feed.entry[o];var g=w.title.$t;var f;var p;if(o==z.feed.entry.length){break}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="alternate"){p=w.link[l].href;break}}for(var l=0;l<w.link.length;l++){if(w.link[l].rel=="replies"&&w.link[l].type=="text/html"){f=w.link[l].title.split(" ")[0];break}}if("content" in w){var r=w.content.$t}else{if("summary" in w){var r=w.summary.$t}else{var r=""}}postdate=w.published.$t;if(j>imgr.length-1){j=0}img[o]=imgr[j];s=r;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){img[o]=d}var q=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var u=postdate.split("-")[2].substring(0,2);var h=postdate.split("-")[1];var t=postdate.split("-")[0];for(var e=0;e<q.length;e++){if(parseInt(h)==q[e]){h=x[e];break}}var n=u+" "+h+" "+t;var v='<li class="car"><div class="thumb"><a href="'+p+'"><img class="alignnone" src="'+img[o]+'"/></a></div><p><a class="slider_title" href="'+p+'">'+g+"</a></p></li>";document.write(v);j++}document.write("</ul>")}; 