tinymce.PluginManager.add("advlist",function(e){function t(t){return e.$.contains(e.getBody(),t)}function n(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)&&t(e)}function r(e,t){var n=[];return t&&tinymce.each(t.split(/[ ,]/),function(e){n.push({text:e.replace(/\-/g," ").replace(/\b\w/g,function(e){return e.toUpperCase()}),data:"default"==e?"":e})}),n}function i(t,n){e.undoManager.transact(function(){var r,i=e.dom,o=e.selection;if(r=i.getParent(o.getNode(),"ol,ul"),!r||r.nodeName!=t||n===!1){var a={"list-style-type":n?n:""};e.execCommand("UL"==t?"InsertUnorderedList":"InsertOrderedList",!1,a)}r=i.getParent(o.getNode(),"ol,ul"),r&&tinymce.util.Tools.each(i.select("ol,ul",r).concat([r]),function(e){e.nodeName!==t&&n!==!1&&(e=i.rename(e,t)),i.setStyle(e,"listStyleType",n?n:null),e.removeAttribute("data-mce-style")}),e.focus()})}function o(t){var n=e.dom.getStyle(e.dom.getParent(e.selection.getNode(),"ol,ul"),"listStyleType")||"";t.control.items().each(function(e){e.active(e.settings.data===n)})}var a,s,l=function(e,t){var n=e.settings.plugins?e.settings.plugins:"";return tinymce.util.Tools.inArray(n.split(/[ ,]/),t)!==-1};a=r("OL",e.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")),s=r("UL",e.getParam("advlist_bullet_styles","default,circle,disc,square"));var u=function(t){return function(){var r=this;e.on("NodeChange",function(e){var i=tinymce.util.Tools.grep(e.parents,n);r.active(i.length>0&&i[0].nodeName===t)})}};l(e,"lists")&&(e.addCommand("ApplyUnorderedListStyle",function(e,t){i("UL",t["list-style-type"])}),e.addCommand("ApplyOrderedListStyle",function(e,t){i("OL",t["list-style-type"])}),e.addButton("numlist",{type:a.length>0?"splitbutton":"button",tooltip:"Numbered list",menu:a,onPostRender:u("OL"),onshow:o,onselect:function(e){i("OL",e.control.settings.data)},onclick:function(){i("OL",!1)}}),e.addButton("bullist",{type:s.length>0?"splitbutton":"button",tooltip:"Bullet list",onPostRender:u("UL"),menu:s,onshow:o,onselect:function(e){i("UL",e.control.settings.data)},onclick:function(){i("UL",!1)}}))});