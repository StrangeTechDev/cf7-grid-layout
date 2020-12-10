!function(e){"use strict";var t=[],a=[],i={},s=s||{};e.fn.cf7sgWarning=function(t,a){var i=e(this);if(!i.is(":input"))return i;r(a)&&(a=0);var s=e('<span class="cf7sg-validation-warning">'+t+'<span class="confirm-button">ok</span></span>');i.after(s),a>0&&s.delay(a).fadeOut("slow",function(){i.remove()})},e(document).ready(function(){e("form.wpcf7-form").on("click",".confirm-button",function(t){var a=e(t.target);a.is(".cf7sg-validation-warning .confirm-button")&&a.parent().remove()}).each(function(){var t=e(this),a=t.closest("div.cf7-smart-grid").attr("id");t.attr("id","wpcf7-"+a)});var t=e("div.cf7-smart-grid.has-table form.wpcf7-form");t.length&&(e(".container.cf7-sg-table",t).each(function(){var a=e(this),i=a.closest("div.cf7-smart-grid").attr("id");if(a[0].hasAttribute("id")){var s=e('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",a.attr("id"));a.prepend(s)}var n=e(".row.cf7-sg-table",a),c="Add Row";switch(!0){case a[0].hasAttribute("data-button"):c=a.data("button");break;case n[0].hasAttribute("data-button"):c=n.data("button")}n.find(":input").each(function(){var t=e(this),a=t.attr("name").replace("[]","");a.length>0&&t.addClass("cf7sg-"+a+" cf7sgrow-field"),r(cf7sg[i].prefill[a])||(t.prefillCF7Field(cf7sg[i].prefill[a],i),delete cf7sg[i].prefill[a])});var l=a.next(".container.cf7-sg-table-footer");l.length>0?(l.detach(),a.after(l),l.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+c+"</a></div>")):a.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+c+"</a></div>"),n.attr("data-row","0"),(n=n.clone().addClass("cf7-sg-cloned-table-row")).attr("data-row","-1"),a.append(n.hide()),e(":input",n).each(function(){var t=e(this).prop("disabled",!0),a="_cf7sgcloned_"+t.attr("name");t.attr("name",a)}),n.append('<span class="row-control"><span class="dashicons dashicons-no-alt"></span></span>'),t.on("cf7SmartGridReady",function(e){a.trigger({type:"sgTableReady","table-id":a.attr("id")})})}),t.click(".container",function(t){var a=e(t.target);if(a.is("div.cf7-sg-table-button a")){if((a=a.parent()).hasClass("disabled"))return;var i=a.prev(".container");i.is(".cf7-sg-table-footer")&&(i=i.prev(".container")),i.cf7sgCloneRow()}else a.is(".cf7-sg-table .row-control .dashicons")&&a.closest(".container").cf7sgRemoveRow()}));var a=e("div.cf7-smart-grid.has-validation form.wpcf7-form");a.length&&(e('input[type="number"][class*="sgv-"]',a).each(function(){var t=e(this),a=t.attr("name"),i=t.closest("div.cf7-smart-grid").attr("id"),s=t.attr("value");r(cf7sg[i].prefill[a])||(t.prefillCF7Field(cf7sg[i].prefill[a],i),s=cf7sg[i].prefill[a],delete cf7sg[i].prefill[a]),t.data("current",s)}),a.change('input[type="number"]',function(t){if(e(t.target).is('input[type="number"]')){var a=e(t.target),i=a.data("current"),s=!1;switch(!0){case 0==a.val()&&a.is(".sgv-no-zero"):a.after('<span class="cf7sg-validation-warning">Value cannot be zero</span>'),a.val(i),s=!0;break;case 0>a.val()&&a.is(".sgv-no-negative"):a.after('<span class="cf7sg-validation-warning">Value cannot be negative</span>'),a.val(i),s=!0;break;case""==a.val()&&a.hasClass("sgv-not-empty"):a.after('<span class="cf7sg-validation-warning">Value cannot be empty</span>'),a.val(i),s=!0}s&&a.next("span.cf7sg-validation-warning").delay(3e3).fadeOut("slow").remove()}}));var s=e("div.cf7-smart-grid.has-accordion form.wpcf7-form");s.length>0&&(s.filter("div.has-toggles form.wpcf7-form").each(function(){var t=e(this),a=e(".cf7sg-collapsible.with-toggle",t),i="",s=e('input[name="_cf7sg_toggles"]',t),n=!1,c={};s.length>0&&(i=s.val().length>0?JSON.parse(s.val()):{},n=!0),e.fn.trackToggle=function(t){if(!n)return!1;var a=e(this),r=a.attr("id");if(!a.is(".with-toggle"))return!1;if(t){var c=e(".cf7sg-collapsible-title",a).clone(),l=c.children(".toggle").data("on");c.children(".toggle").remove(),i[r]=c.text().trim()+"|"+l}else i.hasOwnProperty(r)&&delete i[r];void 0!==r&&s.length>0&&s.val(JSON.stringify(i))},t.on("click",".cf7sg-collapsible.with-toggle",function(a){var i,s=e(a.target);if(s.is("span.cf7sg-title.toggled")||s.is(".toggle-on")||s.is(".toggle-off")||s.is(".toggle"))i=s.closest(".cf7sg-collapsible-title");else{if(!s.parent().is(".cf7sg-collapsible.with-toggle"))return;i=s}if(e(".toggle",i).is(".disabled"))return!1;var n=i.closest(".container.cf7sg-collapsible"),r=n.attr("id"),l=i.parent().removeClass("collapsed").data("group");l&&e('.cf7sg-collapsible.with-toggle[data-group="'+l+'"]',t).each(function(){var t=e(this),a=e(".toggle",t),i=t.attr("id");r!==i?0===t.accordion("option","active")&&(t.addClass("collapsed"),a.toggleClass("disabled",!1).data("toggles").toggle(!1),t.accordion("option","active",!1),e(".row.ui-accordion-content :input",t).prop("disabled",!0),t.trackToggle(!1)):c[l]&&a.toggleClass("disabled",!0)});var o=i.children(".toggle").data("toggles");if(void 0===o&&cf7sg.debug&&(console.log("undefined toggleSwitch, header parent:"),console.log(i),console.log("e.target:"),console.log(a.target)),i.hasClass("ui-state-active")){o.toggle(!0);var d=e(".row.ui-accordion-content :input",i.parent()).not(".cf7-sg-cloned-table-row :input").not(".collapsed :input").prop("disabled",!1);t.is(".has-nice-select form")&&d.filter(".wpcf7-form-control.nice-select:enabled").niceSelect(),n.trackToggle(!0)}else o.toggle(!1),e(".row.ui-accordion-content :input",i.parent()).each(function(){var t=this.value;e(this).val(t.trim()).prop("disabled",!0)}),n.trackToggle(!1)}),a.each(function(){var a=e(this),i=a.attr("id");void 0===i&&(i=g(6),a.attr("id",i));var s=a.data("open"),n=a.data("group"),l=!1;if(n&&void 0===c[n]&&(c[n]=!1),void 0===s)s=!1;else switch(s){case!0:s=0,l=!0}var o=0==t.closest("div.cf7_2_post").length&&!l,d=a.closest("div.cf7-smart-grid").attr("id");e(":input",a.children(".row")).each(function(){var t=e(this),a=t.attr("name").replace("[]","");r(cf7sg[d].prefill[a])||r(cf7sg[d].prefill._cf7sg_toggles[i])||(t.prefillCF7Field(cf7sg[d].prefill[a],d),s=0,l=!0,delete cf7sg[d].prefill[a]),o&&t.prop("disabled",!0)}),l||a.addClass("collapsed"),a.children(".cf7sg-collapsible-title").children(".toggle").setupToggle(l,n),l&&(a.trackToggle(!0),n&&(c[n]=!0)),e("#"+i).accordion({collapsible:!0,icons:!1,active:s,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(t,a){e(this).trigger("sgContentIncrease")},beforeActivate:function(t,a){if(e(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(t){e(this).trigger({type:"sgCollapsibleRowsReady","section-id":i})}})}),a.on("sgContentIncrease",function(){e(this).accordion("refresh")})}),s.each(function(){var t=e(this),a=e(".cf7sg-collapsible",t).not(".cf7sg-collapsible.with-toggle").not(".cf7sg-accordion-rows > .cf7sg-collapsible").not(".cf7sg-slider-section >.cf7sg-collapsible");(a=a.add(e(".cf7sg-accordion-rows",t))).each(function(){var t=e(this),a=t.attr("id");void 0===a&&(a=g(6),t.attr("id",a));var i=t.data("open");if(void 0===i)i=!1;else switch(i){case!0:i=0,!0}var s={heightStyle:"content",create:function(t){e(this).trigger({type:"sgCollapsibleRowsReady","section-id":a})}};t.is(".cf7sg-accordion-rows")?Object.assign(s,{header:"div.cf7sg-collapsible-title",animate:!1}):Object.assign(s,{collapsible:!0,active:i,header:"> div.cf7sg-collapsible-title",activate:function(t,a){e(this).trigger("sgContentIncrease")}}),e("#"+a).accordion(s),t.on("sgContentIncrease",function(){e(this).accordion("refresh")})})}));var n=e("div.cf7-smart-grid.has-tabs form.wpcf7-form");n.length&&(i={},n.click("ul.ui-tabs-nav li",function(t){var a=e(t.target),i=a.closest(".cf7-sg-tabs");a.is(".cf7sg-close-tab")?i.cf7sgRemoveTab():a.is(".cf7sg-add-tab")&&i.cf7sgCloneTab(!0,!0)}),e(".cf7-sg-tabs",n).each(function(){var t=e(this),a=t.closest("div.cf7-smart-grid").attr("id"),s=t.children(".cf7-sg-tabs-list");if(1==s.children("li").length){s.after('<ul class="cf7sg-add-tab ui-tabs-nav"><li class="ui-state-default ui-corner-top"><a class="cf7sg-add-tab ui-tabs-anchor"><span class="cf7sg-add-tab dashicons dashicons-plus"></span></a></li></ul>');var n=t.children(".cf7-sg-tabs-panel").first(),c=e('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",n.attr("id"));t.prepend(c),n.find(":input").each(function(){var t=e(this);if(t.is(".cf7-sg-table :input"))t.addClass("cf7sgtab-field");else{var i=t.attr("name").replace("[]","");i.length>0&&(t.addClass("cf7sg-"+i+" cf7sgtab-field"),r(cf7sg[a].prefill[i])||(t.prefillCF7Field(cf7sg[a][i],a),delete cf7sg[a].prefill[i]))}});var l=e("<div>").append(n.clone());e(":input",l).prop("disabled",!0),i[n.attr("id")]=l.html()}t.tabs({create:function(t){e(this).trigger("sgTabsReady")}})})),e("div.cf7-smart-grid").each(function(){var t=e(this),a=t.attr("id");r(cf7sg[a].prefill)||Object.keys(cf7sg[a].prefill).forEach(function(i){e("."+i+" :input",t).prefillCF7Field(cf7sg[a].prefill[i],a)})});var c=e("div.cf7-smart-grid.has-nice-select form.wpcf7-form");c.length>0&&(c.filter("div.cf7_2_post form.wpcf7-form").each(function(){var t=e(this),a=t.closest("div.cf7_2_post").attr("id");a.length>0&&t.on(a,function(t){e(".cf7sg-dynamic-dropdown.ui-select:enabled",$this).each(function(){e(this).niceSelect()}),e(".wpcf7-form-control.nice-select:enabled",$this).each(function(){e(this).niceSelect()}),e(this).trigger("sgNiceSelect")})}),c.not("div.cf7_2_post form.wpcf7-form").each(function(){var t=e(this);e(".cf7sg-dynamic-dropdown.ui-select:enabled",t).each(function(){e(this).niceSelect()}),e(".wpcf7-form-control.nice-select:enabled",t).each(function(){e(this).niceSelect()}),t.on("cf7SmartGridReady",function(e){t.trigger("sgNiceSelect")})}));var l=e("div.cf7-smart-grid.has-select2 form.wpcf7-form");l.length>0&&(l.filter("div.cf7_2_post form.wpcf7-form").each(function(){var t=e(this),a=t.closest("div.cf7_2_post").attr("id");a.length>0&&t.on(a,function(t){var a=e(this);e("select.wpcf7-form-control.select2:enabled",a).each(function(){var t=e(this);t.select2(t.cf7sgSelect2Options())}),a.trigger("sgSelect2")})}),l.not("div.cf7_2_post form.wpcf7-form").each(function(){var t=e(this);e("select.wpcf7-form-control.select2:enabled",t).each(function(){var t=e(this);t.select2(t.cf7sgSelect2Options())}),t.on("cf7SmartGridReady",function(e){t.trigger("sgSelect2")})}));var o=document.createElement("input");o.setAttribute("type","date");var d="date"==o.type,f=e("div.cf7-smart-grid.has-date form.wpcf7-form");function g(e){e||(e=5);for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",i=0;i<e;i++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}f.length>0&&(f.filter("div.cf7_2_post form.wpcf7-form").each(function(){var t=e(this),a=t.closest("div.cf7_2_post").attr("id");a.length>0&&t.on(a,function(t){e("input.wpcf7-date:enabled",e(this)).each(function(){var t=e(this),a=t.attr("id");void 0===a&&(a=g(6),t.attr("id",a)),d||t.setupDatePicker()}),e("input.wpcf7-text.datepicker:enabled",e(this)).each(function(){var t=e(this),a=t.attr("id");void 0===a&&(a=g(6),t.attr("id",a)),t.setupDatePicker()})})}),f.not("div.cf7_2_post form.wpcf7-form").each(function(){e("input.wpcf7-text.datepicker:enabled",e(this)).each(function(){var t=e(this),a=t.attr("id");void 0===a&&(a=g(6),t.attr("id",a)),t.setupDatePicker()}),e("input.wpcf7-date:enabled",e(this)).each(function(){var t=e(this),a=t.attr("id");void 0===a&&(a=g(6),t.attr("id",a)),d||t.setupDatePicker()})})),e("div.cf7-smart-grid.has-slider form.wpcf7-form").each(function(){e(this);e(".cf7sg-slider-section").each(function(){var t,a=e(this).wrapInner('<div class="glider"></div>'),i=e(".glider",a),s=e('<span class="slider-control slider-prev"></span>'),n=e('<span class="slider-control slider-next"></span>'),r=!1,c=null;if(a.data("prev").length>0?s.text(a.data("prev")).addClass("ui-button"):s.addClass("dashicons dashicons-arrow-left-alt"),a.data("next").length>0?n.text(a.data("next")).addClass("ui-button"):n.addClass("dashicons dashicons-arrow-right-alt"),a.append(s).append(n),s.hide(),a.data("submit").length>0){r=!0,c=e('<input type="submit" value="'+a.data("submit")+'" class="wpcf7-form-control wpcf7-submit">'),n.after(c);let t=(c.outerHeight()-16)/2;c.hide().after('<span style="margin:'+t+'px 5px;" class="ajax-loader"></span>')}i.on("glider-loaded",function(e){a.trigger({type:"sgSliderReady",total:i.find(".glider-slide").length})}).on("glider-slide-visible",function(a){switch(s.show(),n.show(),r&&c.hide(),a.detail.slide){case 0:s.hide();break;case t.slides.length-1:n.hide(),r&&c.show()}e(a.target).find(".glider-slide.active").trigger({type:"sgSlideChange",current:a.detail.slide,last:e(a.target).find(".glider-slide").length-1})}),t=new Glider(i[0],{arrows:{prev:".slider-prev",next:".slider-next"}}),a.on("sgRowAdded sgRowDeleted",function(e){t.refresh(!0)})})}),e.fn.sgCurrentSlide=function(){var t=e(this);return!!t.is(".cf7sg-slider-section")&&parseInt(t.find(".glider-slide.active").data("gslide"))},e.fn.sgChangeSlide=function(t){var a=e(this);if(!a.is(".cf7sg-slider-section"))return a;var i=Glider(e(".glider",a)[0]),s=a.sgCurrentSlide();return r(t)?s<i.slides.length&&i.scrollItem(s++):t<0?s>0&&i.scrollItem(s--):(t=parseInt(t))>=0&&t<=i.slides.length&&i.scrollItem(t),a},e("div.cf7_2_post div.cf7-smart-grid.has-toggles form.wpcf7-form").each(function(){var t=e(this),a=t.closest("div.cf7-smart-grid").attr("id"),i=t.closest("div.cf7_2_post").attr("id");i.length>0&&t.on(i,function(t){e(".cf7sg-collapsible.with-toggle",e(this)).each(function(){var t=e(this),i=t.attr("id");void 0===cf7sg[a].toggles_status||void 0===cf7sg[a].toggles_status[i]?e(".row.ui-accordion-content :input",t).prop("disabled",!0):t.children(".cf7sg-collapsible-title").trigger("click")})})}),e("div.cf7-smart-grid form.wpcf7-form").trigger("cf7SmartGridReady"),e("div.cf7-smart-grid.has-grid").on("wpcf7:invalid wpcf7invalid wpcf7mailsent",".wpcf7",function(t){var a,i=e(t.target);switch(t.type){case"wpcf7mailsent":if(!r(cf7sg[t.delegateTarget.id])&&cf7sg[t.delegateTarget.id].redirect.length>0){var s=e(".cf7_2_post_draft",i);0!=s.length&&"false"!==s.val()||window.location.replace(cf7sg[t.delegateTarget.id].redirect)}break;case"wpcf7invalid":case"wpcf7:invalid":if(void 0!==(a=t.detail).apiResponse)for(var n in a=a.apiResponse.invalid_fields){var c=e(a[n].into),l=c.closest(".cf7sg-collapsible:not(.glider-slide)");l.length>0&&l.accordion("option","active",0),(l=c.closest(".cf7sg-slider-section")).length>0&&Glider(e(".glider",l)[0]).scrollItem(c.closest(".glider-slide").data("gslide"))}}}),e("div.cf7-smart-grid.has-grid .wpcf7-submit").each(function(){var t=e(this),a=t.closest("div.cf7-smart-grid").attr("id");t.after('<span class="cf7sg-popup display-none">'+cf7sg[a].submit_disabled+"</span>").parent().addClass("cf7sg-popup")}),e("div.cf7-smart-grid.has-table").on("sgRowAdded",".container.cf7-sg-table",function(t){var a,i,s=e(this),n=s.closest("div.cf7-smart-grid").attr("id");void 0!==(a=s.data("max"))&&0!=a&&--a==t.row&&(i='<span class="max-limit wpcf7-not-valid-tip">'+cf7sg[n].max_table_rows+"</span>",s.next(".cf7-sg-table-button").addClass("disabled").prepend(i))}),e("div.cf7-smart-grid.has-table").on("sgRowDeleted",".container.cf7-sg-table",function(t){var a,i=e(this);void 0!==(a=i.data("max"))&&0!=a&&i.next(".cf7-sg-table-button").removeClass("disabled").children(".max-limit").remove()})});var n=function(t){if(!t.id)return t.text;var a=e(t.element);return e('<a href="'+a.data("permalink")+'">'+t.text+"</a>")};function r(e){return"number"==typeof e?isNaN(e):!Boolean(e)}e.fn.prefillCF7Field=function(t,a){var i=e(this);if(!i.is(":input"))return!1;e(this);var s=i.attr("name"),n=i[0],c=n.type;if(r(n))return cf7sg.debug&&console.log("CF7SG ERROR: Unable to retrieve form element "+s),i;switch(i.length>0&&(c=i[0].type),c){case"select-multiple":case"select":Array.isArray(t)||(t=[t]),t.forEach(function(e){n.querySelector('option[value="'+e+'"]').selected=!0});break;case"checkbox":case"radio":n=e(n).closest("."+s.replace("[]","")).get(0),Array.isArray(t)||(t=[t]),t.forEach(function(e){n.querySelector('input[value="'+e+'"]').checked=!0});break;default:n.value=t}return i},e.fn.cf7sgSelect2Options=function(){var t=e(this),a={tags:t.is(".tags")},i=t.attr("name").replace("[]","");return t.is(".cf7sg-permalinks")&&(a.templateSelection=n,a.templateResult=n),void 0!==s.templateSelection&&(a.templateSelection=s.templateSelection),void 0!==s.templateResult&&(a.templateResult=s.templateResult),void 0!==s[i]&&(void 0!==s[i].templateSelection&&(a.templateSelection=s[i].templateSelection),void 0!==s[i].templateResult&&(a.templateResult=s[i].templateResult)),a},e.fn.activateCF7sgCollapsibleSection=function(t=!0){var a,i=e(this);if(!i.is(".cf7sg-collapsible"))return!1;switch(a=i.children(".cf7sg-collapsible-title"),!0){case t&&!a.is(".ui-state-active"):case!t&&a.is(".ui-state-active"):a.trigger("click")}return i},e.fn.getCF7field=function(t,a={}){var i=e(this);if(void 0===t||0==t.length)return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() requires valid field name."),!1;if(!i.is(".wpcf7-form"))return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() using unknown form"),!1;var s=void 0!==a.tab,n=void 0!==a.row,r=[];switch(!0){case s&&a.tab>0&&n&&a.row>0:r=e(':input[name="'+t+"_tab-"+a.tab+"_row-"+a.row+'"]',i);break;case s&&n:r=e(':input[name="'+t+'"]',i);break;case s&&a.tab>0&&n:r=e(':input[name="'+t+"_tab-"+a.tab+'"]',i);break;case s&&a.tab>0:r=e(':input[name*="'+t+"_tab-"+a.tab+'"], :input[name*="'+t+"_tab-"+a.tab+'_row-"]',i);break;case s:r=e(':input[name*="'+t+'_row-"], :input[name="'+t+'"]',i);break;case n&&a.row>0&&s:r=e(':input[name="'+t+"_row-"+a.row+'"]',i);break;case n&&a.row>0:r=e(':input[name="'+t+"_row-"+a.row+'"]',i).add(e(':input[name*="'+t+'_tab-"]',i).filter(':input[name$="_row-'+a.row+'"]'));break;case n:r=e(':input[name="'+t+'"], :input[name$="'+t+'_tab-"]',i);break;default:r=e(':input[name*="'+t+'"]',i)}return r.not(".cf7-sg-cloned-table-row :input")},e.fn.setupDatePicker=function(){var t=e(this);if(!t.is(".wpcf7-date:enabled")&&!t.is(".wpcf7-text.datepicker:enabled"))return t;var a="",i="",s=t.attr("min");void 0===s?s=null:a=(s=new Date(s)).getFullYear();var n=t.attr("max");return void 0===n?n=null:i=(n=new Date(n)).getFullYear(),t.datepicker("destroy"),t.datepicker({defaultDate:t.val(),dateFormat:"yy-mm-dd",minDate:s,maxDate:n,changeMonth:!0,changeYear:!0}),a>0&&i>0?t.datepicker("option","yearRange",a+":"+i):a>0?t.datepicker("option","yearRange",a+":c+20"):i>0&&t.datepicker("option","yearRange","c-20:"+i),t},e.fn.toggleCF7sgTableRowAddition=function(t=!1){var a=e(this);return!!a.is(".container.cf7-sg-table")&&(t?a.next(".cf7-sg-table-button").show():a.next(".cf7-sg-table-button").hide(),a)},e.fn.toggleCF7sgTableRowDeletion=function(t=!1){var a=e(this);return!!a.is(".container.cf7-sg-table")&&(t?e(".row.cf7-sg-table:nth-last-child(2) .row-control",a).removeClass("display-none"):e(".row.cf7-sg-table:nth-last-child(2) .row-control",a).addClass("display-none"),a)},e.fn.cf7sgCountRows=function(){var t=e(this);return!!t.is(".container.cf7-sg-table")&&t.children(".row").not(".cf7-sg-cloned-table-row").length},e.fn.cf7sgRemoveRow=function(){var t=e(this);if(!t.is(".container.cf7-sg-table"))return!1;var a=t.children(".row").not(".cf7-sg-cloned-table-row");if(a.length>1){a.last().remove(),t.trigger("sgRowDeleted");var i=t.children(".cf7sg-tracker-field");i.length&&i.val(a.length-1)}return t},e.fn.cf7sgCloneRow=function(t){void 0===t&&(t=!0);var a=e(this),i="";if(a.is(".cf7-sg-table-footer")&&(i=a,a=a.closest(".container.cf7-sg-table")),!a.is(".container.cf7-sg-table"))return a;var s=a.children(".row.cf7-sg-table").length-1,n=e(".cf7-sg-cloned-table-row",a),r=n.clone(),c=a.closest("div.cf7-smart-grid").attr("id");r.removeClass("cf7-sg-cloned-table-row").attr("data-row",s),cf7sg[c].table_labels&&e(".field > label",r).remove(),i.length>0?i.before(r.show()):n.before(r.show()),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var a=this.toString();("number"!=typeof t||!isFinite(t)||Math.floor(t)!==t||t>a.length)&&(t=a.length),t-=e.length;var i=a.indexOf(e,t);return-1!==i&&i===t}),e(":input",r).each(function(){var a=e(this);a.prop("disabled",!1);var i=a.attr("name").replace("_cf7sgcloned_",""),n="";i.endsWith("[]")&&(i=i.replace("[]",""),n="[]"),a.attr("name",i+"_row-"+s+n),a.closest("span.wpcf7-form-control-wrap").removeClass(i).addClass(i+"_row-"+s),a.is("select.ui-select")&&t&&a.niceSelect(),a.is("select.nice-select")&&t&&a.niceSelect(),a.is("select.select2")&&t&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),a.trigger("sgContentIncrease"),a.trigger({type:"sgRowAdded",row:s});var l=a.children(".cf7sg-tracker-field");return l.length&&l.val(s+1),a},e.fn.toggleCF7sgTabAddition=function(t=!1){var a=e(this);return!!a.is("div.cf7-sg-tabs")&&(t?e(".cf7sg-add-tab",a).show():e(".cf7sg-add-tab",a).hide(),a)},e.fn.toggleCF7sgTabDeletion=function(t=!1){var a=e(this);return!!a.is("div.cf7-sg-tabs")&&(t?e(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).removeClass("display-none").show():e(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).addClass("display-none").hide(),a)},e.fn.cf7sgCountTabs=function(){var t=e(this);return!!t.is("div.cf7-sg-tabs")&&t.find(".cf7-sg-tabs-list").children("li").length},e.fn.cf7sgRemoveTab=function(){var t=e(this);if(!t.is("div.cf7-sg-tabs"))return!1;var a=t.find(".cf7-sg-tabs-list").children("li");if(a.length>1){var i=a.last().find("a").attr("href");t.find("div"+i).remove(),a.last().remove().is(".ui-state-active")&&t.tabs({active:a.length-2}),t.trigger("sgTabRemoved");var s=a.eq(a.length-2).find(".cf7sg-close-tab:not(.display-none)");s.length>0&&s.show();var n=t.children(".cf7sg-tracker-field");n&&n.val(t.children(".cf7-sg-tabs-panel").length)}return t},e.fn.cf7sgCloneTab=function(t,a=!1){var s=e(this);if(void 0===t&&(t=!0),!s.is("div.cf7-sg-tabs"))return!1;var n=s.children(".cf7-sg-tabs-list"),r=n.children("li").length+1,c=s.children(".cf7-sg-tabs-panel").first().attr("id"),l=c+"-"+r,o=n.children("li").first().clone();o.find("a").attr("href","#"+l).text(o.text()+" ("+r+")"),o.append('<span class="cf7sg-close-tab dashicons dashicons-no-alt"></span>'),o.removeClass("ui-tabs-active ui-state-active"),n.find("li .cf7sg-close-tab").hide(),n.append(o);var d=e(i[c]);d.attr("id",l),e(":input",d).each(function(){var a=e(this),i=a.is(".cf7-sg-cloned-table-row :input"),s=a.attr("name"),n="";i||a.prop("disabled",!1),s.endsWith("[]")&&(s=s.replace("[]",""),n="[]"),a.attr("name",s+"_tab-"+(r-1)+n),a.closest("span.wpcf7-form-control-wrap").removeClass(s).addClass(s+"_tab-"+(r-1)),!i&&a.is("select.ui-select")&&t&&a.niceSelect(),!i&&a.is("select.nice-select")&&t&&a.niceSelect(),!i&&a.is("select.select2")&&t&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),s.append(d),d.find("ul.ui-tabs-nav li a").each(function(){var t=e(this);l=t.attr("href"),t.attr("href",l+"-"+r),t.closest("ul.ui-tabs-nav").siblings("div"+l).attr("id",l.substring(1)+"-"+r)}),e(".cf7-sg-tabs",d).each(function(){e(this).tabs()}),e(".cf7sg-collapsible.with-toggle",d).each(function(){var a=e(this),i=a.attr("id"),s=i+"_tab-"+(r-1);a.attr("id",s);var n=a.data("group");n&&(n=n+"_tab-"+(r-1),a.attr("data-group",n));var c=a.data("open"),l=!1;if(void 0===c)c=!1;else switch(c){case!0:c=0,l=!0}e(".toggle",a).setupToggle(l,n),l&&a.trackToggle(!0),!l&&t&&(e(".row.ui-accordion-content :input",a).prop("disabled",!0),a.addClass("collapsed")),e(".cf7sg-collapsible",d).accordion({collapsible:!0,icons:!1,active:c,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(t,a){e(this).trigger("sgContentIncrease")},beforeActivate:function(t,a){if(e(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(t){e(this).trigger({type:"sgCollapsibleRowsReady","section-id":i,"tab-index":r-1})}})}),s.tabs("refresh"),a&&s.tabs("option","active",-1),d.trigger({type:"sgTabAdded","tab-index":r-1}),e(".cf7-sg-table.container",d).each(function(){var t=e(this),a=t.attr("id");t.attr("id",a+"_tab-"+(r-1)),t.trigger({type:"sgTableReady","table-id":a,"tab-index":r-1})});var f=s.children(".cf7sg-tracker-field");return f&&f.val(s.children(".cf7-sg-tabs-panel").length),s},e.fn.setupToggle=function(t,a){var i=e(this);if(void 0===t&&(t=!1),!i.is(".toggle"))return i;if(i.length>0){var s=i.data("on");0==s.length&&(s="Yes");var n=i.data("off");0==s.length&&(n="No"),i.toggles({drag:!1,text:{on:s,off:n},on:t}),a&&t&&i.toggleClass("disabled",!0)}return i},e("div.cf7-smart-grid.has-update form.wpcf7-form").on("cf7SmartGridReady",function(){var i=e(this);e.ajax({type:"POST",url:cf7sg.url,dataType:"json",data:{action:"save_grid_fields",nonce:e('input[name="_wpnonce"]',i).val(),tabs_fields:JSON.stringify(t),table_fields:JSON.stringify(a),id:e('input[name="_wpcf7"]',i).val()}}).fail(function(e,t){console.log("CF7 Smart Grid ERROR sending grid fields to server: "+t)})})}(jQuery);
