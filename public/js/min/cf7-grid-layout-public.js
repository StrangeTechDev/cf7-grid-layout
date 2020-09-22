!function(t){"use strict";var e=[],a=[],i={},s=s||{};t.fn.cf7sgWarning=function(e,a){var i=t(this);if(!i.is(":input"))return i;r(a)&&(a=0);var s=t('<span class="cf7sg-validation-warning">'+e+'<span class="confirm-button">ok</span></span>');i.after(s),a>0&&s.delay(a).fadeOut("slow",function(){i.remove()})},t(document).ready(function(){t("form.wpcf7-form").on("click",".confirm-button",function(e){var a=t(e.target);a.is(".cf7sg-validation-warning .confirm-button")&&a.parent().remove()});var e=t("div.cf7-smart-grid.has-table form.wpcf7-form");e.length&&(t(".container.cf7-sg-table",e).each(function(){var a=t(this);if(a[0].hasAttribute("id")){var i=t('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",a.attr("id"));a.prepend(i)}var s=t(".row.cf7-sg-table",a),n="Add Row";switch(!0){case a[0].hasAttribute("data-button"):n=a.data("button");break;case s[0].hasAttribute("data-button"):n=s.data("button")}s.find(":input").each(function(){var e=t(this),a=e.attr("name");a.length>0&&e.addClass("cf7sg-"+a.replace("[]","")+" cf7sgrow-field")});var r=a.next(".container.cf7-sg-table-footer");r.length>0?(r.detach(),a.after(r),r.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+n+"</a></div>")):a.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+n+"</a></div>"),s.attr("data-row","0"),(s=s.clone().addClass("cf7-sg-cloned-table-row")).attr("data-row","-1"),a.append(s.hide()),t(":input",s).prop("disabled",!0),s.append('<span class="row-control"><span class="dashicons dashicons-no-alt"></span></span>'),e.on("cf7SmartGridReady",function(t){a.trigger({type:"sgTableReady","table-id":a.attr("id")})})}),e.click(".container",function(e){var a=t(e.target);if(a.is("div.cf7-sg-table-button a")){if((a=a.parent()).hasClass("disabled"))return;(i=a.prev(".container")).is(".cf7-sg-table-footer")&&(i=i.prev(".container")),i.cf7sgCloneRow()}else if(a.is(".cf7-sg-table .row-control .dashicons")){var i=a.closest(".container");a.closest(".row.cf7-sg-table").remove();var s=i.children(".row.cf7-sg-table").not(".cf7-sg-cloned-table-row").length;i.trigger("sgRowDeleted");var n=i.children(".cf7sg-tracker-field");n.length&&n.val(s)}}));var a=t("div.cf7-smart-grid.has-validation form.wpcf7-form");a.length&&(t('input[type="number"][class*="sgv-"]',a).each(function(){var e=t(this),a=e.attr("value");e.data("current",a)}),a.change('input[type="number"]',function(e){if(t(e.target).is('input[type="number"]')){var a=t(e.target),i=a.data("current"),s=!1;switch(!0){case 0==a.val()&&a.is(".sgv-no-zero"):a.after('<span class="cf7sg-validation-warning">Value cannot be zero</span>'),a.val(i),s=!0;break;case 0>a.val()&&a.is(".sgv-no-negative"):a.after('<span class="cf7sg-validation-warning">Value cannot be negative</span>'),a.val(i),s=!0;break;case""==a.val()&&a.hasClass("sgv-not-empty"):a.after('<span class="cf7sg-validation-warning">Value cannot be empty</span>'),a.val(i),s=!0}s&&a.next("span.cf7sg-validation-warning").delay(3e3).fadeOut("slow").remove()}}));var s=t("div.cf7-smart-grid.has-accordion form.wpcf7-form");s.length>0&&(s.filter("div.has-toggles form.wpcf7-form").each(function(){var e=t(this),a=t(".cf7sg-collapsible.with-toggle",e),i="",s=t('input[name="_cf7sg_toggles"]',e),n=!1,r={};s.length>0&&(i=s.val().length>0?JSON.parse(s.val()):{},n=!0),t.fn.trackToggle=function(e){if(!n)return!1;var a=t(this),r=a.attr("id");if(!a.is(".with-toggle"))return!1;if(e){var c=t(".cf7sg-collapsible-title",a).clone(),l=c.children(".toggle").data("on");c.children(".toggle").remove(),i[r]=c.text().trim()+"|"+l}else i.hasOwnProperty(r)&&delete i[r];void 0!==r&&s.length>0&&s.val(JSON.stringify(i))},e.on("click",".cf7sg-collapsible.with-toggle",function(a){var i,s=t(a.target);if(s.is("span.cf7sg-title.toggled")||s.is(".toggle-on")||s.is(".toggle-off")||s.is(".toggle"))i=s.closest(".cf7sg-collapsible-title");else{if(!s.parent().is(".cf7sg-collapsible.with-toggle"))return;i=s}if(t(".toggle",i).is(".disabled"))return!1;var n=i.closest(".container.cf7sg-collapsible"),c=n.attr("id"),l=i.parent().removeClass("collapsed").data("group");l&&t('.cf7sg-collapsible.with-toggle[data-group="'+l+'"]',e).each(function(){var e=t(this),a=t(".toggle",e),i=e.attr("id");c!==i?0===e.accordion("option","active")&&(e.addClass("collapsed"),a.toggleClass("disabled",!1).data("toggles").toggle(!1),e.accordion("option","active",!1),t(".row.ui-accordion-content :input",e).prop("disabled",!0),e.trackToggle(!1)):r[l]&&a.toggleClass("disabled",!0)});var o=i.children(".toggle").data("toggles");if(void 0===o&&cf7sg.debug&&(console.log("undefined toggleSwitch, header parent:"),console.log(i),console.log("e.target:"),console.log(a.target)),i.hasClass("ui-state-active")){o.toggle(!0);var d=t(".row.ui-accordion-content :input",i.parent()).not(".cf7-sg-cloned-table-row :input").not(".collapsed :input").prop("disabled",!1);e.is(".has-nice-select form")&&d.filter(".wpcf7-form-control.nice-select:enabled").niceSelect(),n.trackToggle(!0)}else o.toggle(!1),t(".row.ui-accordion-content :input",i.parent()).each(function(){var e=this.value;t(this).val(e.trim()).prop("disabled",!0)}),n.trackToggle(!1)}),a.each(function(){var a=t(this),i=a.attr("id");void 0===i&&(i=g(6),a.attr("id",i));var s=a.data("open"),n=a.data("group"),c=!1;if(n&&void 0===r[n]&&(r[n]=!1),void 0===s)s=!1;else switch(s){case!0:s=0,c=!0}0==e.closest("div.cf7_2_post").length&&(c||(t(":input",a.children(".row")).prop("disabled",!0),a.addClass("collapsed"))),a.children(".cf7sg-collapsible-title").children(".toggle").setupToggle(c,n),c&&(a.trackToggle(!0),n&&(r[n]=!0)),t("#"+i).accordion({collapsible:!0,icons:!1,active:s,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(e,a){t(this).trigger("sgContentIncrease")},beforeActivate:function(e,a){if(t(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":i})}})}),a.on("sgContentIncrease",function(){t(this).accordion("refresh")})}),s.each(function(){var e=t(this),a=t(".cf7sg-collapsible",e).not(".cf7sg-collapsible.with-toggle").not(".cf7sg-accordion-rows > .cf7sg-collapsible").not(".cf7sg-slider-section >.cf7sg-collapsible");(a=a.add(t(".cf7sg-accordion-rows",e))).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=g(6),e.attr("id",a));var i=e.data("open"),s=!1;if(void 0===i)i=!1;else switch(i){case!0:i=0,s=!0}s||e.addClass("collapsed");var n={heightStyle:"content",create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":a})}};e.is(".cf7sg-accordion-rows")?Object.assign(n,{header:"div.cf7sg-collapsible-title",animate:!1}):Object.assign(n,{collapsible:!0,active:i,header:"> div.cf7sg-collapsible-title",activate:function(e,a){t(this).trigger("sgContentIncrease")}}),t("#"+a).accordion(n),e.on("sgContentIncrease",function(){t(this).accordion("refresh")})})}));var n=t("div.cf7-smart-grid.has-tabs form.wpcf7-form");n.length&&(i={},n.click("ul.ui-tabs-nav li",function(e){var a=t(e.target),i=a.closest(".cf7-sg-tabs");if(a.is(".cf7sg-close-tab")){var s=a.siblings("a").attr("href"),n=!1;i.children("div"+s).remove(),a.closest("li").remove().is(".ui-state-active")&&(n=!0,i.trigger("sgTabRemoved"));var r=i.find(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab:not(.display-none)");r.length>0&&r.show(),n&&i.tabs({active:0});var c=i.children(".cf7sg-tracker-field");c&&c.val(i.children(".cf7-sg-tabs-panel").length)}else a.is(".cf7sg-add-tab")&&i.cf7sgCloneTab(!0,!0)}),t(".cf7-sg-tabs",n).each(function(){var e=t(this),a=e.children(".cf7-sg-tabs-list");if(1==a.children("li").length){a.after('<ul class="cf7sg-add-tab ui-tabs-nav"><li class="ui-state-default ui-corner-top"><a class="cf7sg-add-tab ui-tabs-anchor"><span class="cf7sg-add-tab dashicons dashicons-plus"></span></a></li></ul>');var s=e.children(".cf7-sg-tabs-panel").first(),n=t('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",s.attr("id"));e.prepend(n),s.find(":input").each(function(){var e=t(this);if(e.is(".cf7-sg-table :input"))e.addClass("cf7sgtab-field");else{var a=e.attr("name");a.length>0&&e.addClass("cf7sg-"+a.replace("[]","")+" cf7sgtab-field")}});var r=t("<div>").append(s.clone());t(":input",r).prop("disabled",!0),i[s.attr("id")]=r.html()}e.tabs({create:function(e){t(this).trigger("sgTabsReady")}})}));var c=t("div.cf7-smart-grid.has-nice-select form.wpcf7-form");c.length>0&&(c.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){t(".cf7sg-dynamic-dropdown.ui-select:enabled",$this).each(function(){t(this).niceSelect()}),t(".wpcf7-form-control.nice-select:enabled",$this).each(function(){t(this).niceSelect()}),t(this).trigger("sgNiceSelect")})}),c.not("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this);t(".cf7sg-dynamic-dropdown.ui-select:enabled",e).each(function(){t(this).niceSelect()}),t(".wpcf7-form-control.nice-select:enabled",e).each(function(){t(this).niceSelect()}),e.on("cf7SmartGridReady",function(t){e.trigger("sgNiceSelect")})}));var l=t("div.cf7-smart-grid.has-select2 form.wpcf7-form");l.length>0&&(l.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){var a=t(this);t("select.wpcf7-form-control.select2:enabled",a).each(function(){var e=t(this);e.select2(e.cf7sgSelect2Options())}),a.trigger("sgSelect2")})}),l.not("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this);t("select.wpcf7-form-control.select2:enabled",e).each(function(){var e=t(this);e.select2(e.cf7sgSelect2Options())}),e.on("cf7SmartGridReady",function(t){e.trigger("sgSelect2")})}));var o=document.createElement("input");o.setAttribute("type","date");var d="date"==o.type,f=t("div.cf7-smart-grid.has-date form.wpcf7-form");function g(t){t||(t=5);for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",i=0;i<t;i++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}f.length>0&&(f.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){t("input.wpcf7-date:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=g(6),e.attr("id",a)),d||e.setupDatePicker()}),t("input.wpcf7-text.datepicker:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=g(6),e.attr("id",a)),e.setupDatePicker()})})}),f.not("div.cf7_2_post form.wpcf7-form").each(function(){t("input.wpcf7-text.datepicker:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=g(6),e.attr("id",a)),e.setupDatePicker()}),t("input.wpcf7-date:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=g(6),e.attr("id",a)),d||e.setupDatePicker()})})),t("div.cf7-smart-grid.has-slider form.wpcf7-form").each(function(){t(this);t(".cf7sg-slider-section").each(function(){var e=t(this).wrapInner('<div class="glider"></div>'),a=t(".glider",e),i=t('<span class="slider-control slider-prev"></span>'),s=t('<span class="slider-control slider-next"></span>'),n=!1,r=null;if(e.data("prev").length>0?i.text(e.data("prev")).addClass("ui-button"):i.addClass("dashicons dashicons-arrow-left-alt"),e.data("next").length>0?s.text(e.data("next")).addClass("ui-button"):s.addClass("dashicons dashicons-arrow-right-alt"),e.append(i).append(s),i.hide(),e.data("submit").length>0){n=!0,r=t('<input type="submit" value="'+e.data("submit")+'" class="wpcf7-form-control wpcf7-submit">'),s.after(r);let a=(r.outerHeight()-16)/2;r.hide().after('<span style="margin:'+a+'px 5px;" class="ajax-loader"></span>')}a.on("glider-loaded",function(t){e.trigger({type:"sgSliderReady",total:a.find(".glider-slide").length})}).on("glider-slide-visible",function(e){switch(i.show(),s.show(),n&&r.hide(),e.detail.slide){case 0:i.hide();break;case c.slides.length-1:s.hide(),n&&r.show()}t(e.target).find(".glider-slide.active").trigger({type:"sgSlideChange",current:e.detail.slide,last:c.slides.length-1})});var c=new Glider(a[0],{arrows:{prev:".slider-prev",next:".slider-next"}});e.on("sgRowAdded sgRowDeleted",function(t){c.refresh(!0)})})}),t.fn.sgCurrentSlide=function(){var e=t(this);return!!e.is(".cf7sg-slider-section")&&parseInt(e.find(".glider-slide.active").data("gslide"))},t.fn.sgChangeSlide=function(e){var a=t(this);if(!a.is(".cf7sg-slider-section"))return a;var i=Glider(t(".glider",a)[0]),s=a.sgCurrentSlide();return r(e)?s<i.slides.length&&i.scrollItem(s++):e<0?s>0&&i.scrollItem(s--):(e=parseInt(e))>=0&&e<=i.slides.length&&i.scrollItem(e),a},t("div.cf7_2_post div.cf7-smart-grid.has-toggles form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){t(".cf7sg-collapsible.with-toggle",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===cf7sg.toggles_status||void 0===cf7sg.toggles_status[a]?t(".row.ui-accordion-content :input",e).prop("disabled",!0):e.children(".cf7sg-collapsible-title").trigger("click")})})}),t("div.cf7-smart-grid form.wpcf7-form").trigger("cf7SmartGridReady"),t("div.cf7-smart-grid.has-grid").on("wpcf7:invalid wpcf7invalid",".wpcf7",function(e){t(e.target);var a=e.detail;if(void 0!==a.apiResponse)for(var i in a=a.apiResponse.invalid_fields){var s=t(a[i].into),n=s.closest(".cf7sg-collapsible:not(.glider-slide)");n.length>0&&n.accordion("option","active",0),(n=s.closest(".cf7sg-slider-section")).length>0&&Glider(t(".glider",n)[0]).scrollItem(s.closest(".glider-slide").data("gslide"))}}),t("div.cf7-smart-grid.has-grid .wpcf7-submit").after('<span class="cf7sg-popup display-none">'+cf7sg.submit_disabled+"</span>").parent().addClass("cf7sg-popup"),t("div.cf7-smart-grid.has-table").on("sgRowAdded",".container.cf7-sg-table",function(e){var a,i,s=t(this);void 0!==(a=s.data("max"))&&0!=a&&--a==e.row&&(i='<span class="max-limit wpcf7-not-valid-tip">'+cf7sg.max_table_rows+"</span>",s.next(".cf7-sg-table-button").addClass("disabled").prepend(i))}),t("div.cf7-smart-grid.has-table").on("sgRowDeleted",".container.cf7-sg-table",function(e){var a,i=t(this);void 0!==(a=i.data("max"))&&0!=a&&i.next(".cf7-sg-table-button").removeClass("disabled").children(".max-limit").remove()})});var n=function(e){if(!e.id)return e.text;var a=t(e.element);return t('<a href="'+a.data("permalink")+'">'+e.text+"</a>")};function r(t){return"number"==typeof t?isNaN(t):!Boolean(t)}t.fn.cf7sgSelect2Options=function(){var e=t(this),a={tags:e.is(".tags")},i=e.attr("name").replace("[]","");return e.is(".cf7sg-permalinks")&&(a.templateSelection=n,a.templateResult=n),void 0!==s.templateSelection&&(a.templateSelection=s.templateSelection),void 0!==s.templateResult&&(a.templateResult=s.templateResult),void 0!==s[i]&&(void 0!==s[i].templateSelection&&(a.templateSelection=s[i].templateSelection),void 0!==s[i].templateResult&&(a.templateResult=s[i].templateResult)),a},t.fn.activateCF7sgCollapsibleSection=function(e=!0){var a,i=t(this);if(!i.is(".cf7sg-collapsible"))return!1;switch(a=i.children(".cf7sg-collapsible-title"),!0){case e&&!a.is(".ui-state-active"):case!e&&a.is(".ui-state-active"):a.trigger("click")}return i},t.fn.getCF7field=function(e,a={}){var i=t(this);if(void 0===e||0==e.length)return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() requires valid field name."),!1;if(!i.is(".wpcf7-form"))return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() using unknown form"),!1;var s=void 0!==a.tab,n=void 0!==a.row,r=[];switch(!0){case s&&a.tab>0&&n&&a.row>0:r=t(':input[name="'+e+"_tab-"+a.tab+"_row-"+a.row+'"]',i);break;case s&&n:r=t(':input[name="'+e+'"]',i);break;case s&&a.tab>0&&n:r=t(':input[name="'+e+"_tab-"+a.tab+'"]',i);break;case s&&a.tab>0:r=t(':input[name*="'+e+"_tab-"+a.tab+'"], :input[name*="'+e+"_tab-"+a.tab+'_row-"]',i);break;case s:r=t(':input[name*="'+e+'_row-"], :input[name="'+e+'"]',i);break;case n&&a.row>0&&s:r=t(':input[name="'+e+"_row-"+a.row+'"]',i);break;case n&&a.row>0:r=t(':input[name="'+e+"_row-"+a.row+'"]',i).add(t(':input[name*="'+e+'_tab-"]',i).filter(':input[name$="_row-'+a.row+'"]'));break;case n:r=t(':input[name="'+e+'"], :input[name$="'+e+'_tab-"]',i);break;default:r=t(':input[name*="'+e+'"]',i)}return r.not(".cf7-sg-cloned-table-row :input")},t.fn.setupDatePicker=function(){var e=t(this);if(!e.is(".wpcf7-date:enabled")&&!e.is(".wpcf7-text.datepicker:enabled"))return e;var a="",i="",s=e.attr("min");void 0===s?s=null:a=(s=new Date(s)).getFullYear();var n=e.attr("max");return void 0===n?n=null:i=(n=new Date(n)).getFullYear(),e.datepicker("destroy"),e.datepicker({defaultDate:e.val(),dateFormat:"yy-mm-dd",minDate:s,maxDate:n,changeMonth:!0,changeYear:!0}),a>0&&i>0?e.datepicker("option","yearRange",a+":"+i):a>0?e.datepicker("option","yearRange",a+":c+20"):i>0&&e.datepicker("option","yearRange","c-20:"+i),e},t.fn.toggleCF7sgTableRowAddition=function(e=!1){var a=t(this);return!!a.is(".container.cf7-sg-table")&&(e?a.next(".cf7-sg-table-button").show():a.next(".cf7-sg-table-button").hide(),a)},t.fn.toggleCF7sgTableRowDeletion=function(e=!1){var a=t(this);return!!a.is(".container.cf7-sg-table")&&(e?t(".row.cf7-sg-table:nth-last-child(2) .row-control",a).removeClass("display-none"):t(".row.cf7-sg-table:nth-last-child(2) .row-control",a).addClass("display-none"),a)},t.fn.cf7sgCloneRow=function(e){void 0===e&&(e=!0);var a=t(this),i="";if(a.is(".cf7-sg-table-footer")&&(i=a,a=a.closest(".container.cf7-sg-table")),!a.is(".container.cf7-sg-table"))return a;var s=a.children(".row.cf7-sg-table").length-1,n=t(".cf7-sg-cloned-table-row",a),r=n.clone();r.removeClass("cf7-sg-cloned-table-row").attr("data-row",s),cf7sg.table_labels&&t("label",r).remove(),i.length>0?i.before(r.show()):n.before(r.show()),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var a=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>a.length)&&(e=a.length),e-=t.length;var i=a.indexOf(t,e);return-1!==i&&i===e}),t(":input",r).each(function(){var a=t(this);a.prop("disabled",!1);var i=a.attr("name"),n="";i.endsWith("[]")&&(i=i.replace("[]",""),n="[]"),a.attr("name",i+"_row-"+s+n),a.closest("span.wpcf7-form-control-wrap").removeClass(i).addClass(i+"_row-"+s),a.is("select.ui-select")&&e&&a.niceSelect(),a.is("select.nice-select")&&e&&a.niceSelect(),a.is("select.select2")&&e&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),a.trigger("sgContentIncrease"),a.trigger({type:"sgRowAdded",row:s});var c=a.children(".cf7sg-tracker-field");return c.length&&c.val(s+1),a},t.fn.toggleCF7sgTabAddition=function(e=!1){var a=t(this);if(!a.is("div.cf7-sg-tabs"))return!1;e?t(".cf7sg-add-tab",a).show():t(".cf7sg-add-tab",a).hide()},t.fn.toggleCF7sgTabDeletion=function(e=!1){var a=t(this);if(!a.is("div.cf7-sg-tabs"))return!1;e?t(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).removeClass("display-none").show():t(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).addClass("display-none").hide()},t.fn.cf7sgCloneTab=function(e,a=!1){var s=t(this);if(void 0===e&&(e=!0),!s.is("div.cf7-sg-tabs"))return!1;var n=s.children(".cf7-sg-tabs-list"),r=n.children("li").length+1,c=s.children(".cf7-sg-tabs-panel").first().attr("id"),l=c+"-"+r,o=n.children("li").first().clone();o.find("a").attr("href","#"+l).text(o.text()+" ("+r+")"),o.append('<span class="cf7sg-close-tab dashicons dashicons-no-alt"></span>'),o.removeClass("ui-tabs-active ui-state-active"),n.find("li .cf7sg-close-tab").hide(),n.append(o);var d=t(i[c]);d.attr("id",l),t(":input",d).each(function(){var a=t(this),i=a.is(".cf7-sg-cloned-table-row :input");i||a.prop("disabled",!1);var s=a.attr("name"),n="";s.endsWith("[]")&&(s=s.replace("[]",""),n="[]"),a.attr("name",s+"_tab-"+(r-1)+n),a.closest("span.wpcf7-form-control-wrap").removeClass(s).addClass(s+"_tab-"+(r-1)),!i&&a.is("select.ui-select")&&e&&a.niceSelect(),!i&&a.is("select.nice-select")&&e&&a.niceSelect(),!i&&a.is("select.select2")&&e&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),s.append(d),d.find("ul.ui-tabs-nav li a").each(function(){var e=t(this);l=e.attr("href"),e.attr("href",l+"-"+r),e.closest("ul.ui-tabs-nav").siblings("div"+l).attr("id",l.substring(1)+"-"+r)}),t(".cf7-sg-tabs",d).each(function(){t(this).tabs()}),t(".cf7sg-collapsible.with-toggle",d).each(function(){var a=t(this),i=a.attr("id"),s=i+"_tab-"+(r-1);a.attr("id",s);var n=a.data("group");n&&(n=n+"_tab-"+(r-1),a.attr("data-group",n));var c=a.data("open"),l=!1;if(void 0===c)c=!1;else switch(c){case!0:c=0,l=!0}t(".toggle",a).setupToggle(l,n),l&&a.trackToggle(!0),!l&&e&&(t(".row.ui-accordion-content :input",a).prop("disabled",!0),a.addClass("collapsed")),t(".cf7sg-collapsible",d).accordion({collapsible:!0,icons:!1,active:c,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(e,a){t(this).trigger("sgContentIncrease")},beforeActivate:function(e,a){if(t(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":i,"tab-index":r-1})}})}),s.tabs("refresh"),a&&s.tabs("option","active",-1),d.trigger({type:"sgTabAdded","tab-index":r-1}),t(".cf7-sg-table.container",d).each(function(){var e=t(this),a=e.attr("id");e.attr("id",a+"_tab-"+(r-1)),e.trigger({type:"sgTableReady","table-id":a,"tab-index":r-1})});var f=s.children(".cf7sg-tracker-field");return f&&f.val(s.children(".cf7-sg-tabs-panel").length),s},t.fn.setupToggle=function(e,a){var i=t(this);if(void 0===e&&(e=!1),!i.is(".toggle"))return i;if(i.length>0){var s=i.data("on");0==s.length&&(s="Yes");var n=i.data("off");0==s.length&&(n="No"),i.toggles({drag:!1,text:{on:s,off:n},on:e}),a&&e&&i.toggleClass("disabled",!0)}return i},t("div.cf7-smart-grid.has-update form.wpcf7-form").on("cf7SmartGridReady",function(){var i=t(this);t.ajax({type:"POST",url:cf7sg.url,dataType:"json",data:{action:"save_grid_fields",nonce:t('input[name="_wpnonce"]',i).val(),tabs_fields:JSON.stringify(e),table_fields:JSON.stringify(a),id:t('input[name="_wpcf7"]',i).val()}}).fail(function(t,e){console.log("CF7 Smart Grid ERROR sending grid fields to server: "+e)})})}(jQuery);
