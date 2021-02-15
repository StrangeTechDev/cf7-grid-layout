!function(t){"use strict";var e=[],a=[],i={},s=s||{};t.fn.cf7sgWarning=function(e,a){var i=t(this);if(!i.is(":input"))return i;c(a)&&(a=0);var s=t('<span class="cf7sg-validation-warning">'+e+'<span class="confirm-button">ok</span></span>');i.after(s),a>0&&s.delay(a).fadeOut("slow",function(){i.remove()})},t(document).ready(function(){t("form.wpcf7-form").on("click",".confirm-button",function(e){var a=t(e.target);a.is(".cf7sg-validation-warning .confirm-button")&&a.parent().remove()}).each(function(){var e=t(this),a=e.closest("div.cf7-smart-grid").attr("id");e.attr("id","wpcf7-"+a)});var e=t("div.cf7-smart-grid.has-table form.wpcf7-form");e.length&&(t(".container.cf7-sg-table",e).each(function(){var a=t(this),i=a.closest("div.cf7-smart-grid").attr("id");if(a[0].hasAttribute("id")){var s=t('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",a.attr("id"));a.prepend(s)}var r=t(".row.cf7-sg-table",a),c="Add Row";switch(!0){case a[0].hasAttribute("data-button"):c=a.data("button");break;case r[0].hasAttribute("data-button"):c=r.data("button")}r.find(":input").each(function(){var e=t(this),a=e.attr("name").replace("[]","");a.length>0&&e.addClass("cf7sg-"+a+" cf7sgrow-field"),n(cf7sg[i],["prefill",a])||(e.prefillCF7Field(cf7sg[i].prefill[a],i),delete cf7sg[i].prefill[a])});var l=a.next(".container.cf7-sg-table-footer");l.length>0?(l.detach(),a.after(l),l.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+c+"</a></div>")):a.after('<div class="cf7-sg-table-button"><a href="javascript:void(0);" class="ui-button">'+c+"</a></div>"),r.attr("data-row","0"),(r=r.clone().addClass("cf7-sg-cloned-table-row")).attr("data-row","-1"),a.append(r.hide()),t(":input",r).each(function(){var e=t(this).prop("disabled",!0),a="_cf7sgcloned_"+e.attr("name");e.attr("name",a)}),r.append('<span class="row-control"><span class="dashicons dashicons-no-alt"></span></span>'),e.on("cf7SmartGridReady",function(t){a.trigger({type:"sgTableReady","table-id":a.attr("id")})})}),e.click(".container",function(e){var a=t(e.target);if(a.is("div.cf7-sg-table-button a")){if((a=a.parent()).hasClass("disabled"))return;var i=a.prev(".container");i.is(".cf7-sg-table-footer")&&(i=i.prev(".container")),i.cf7sgCloneRow()}else a.is(".cf7-sg-table .row-control .dashicons")&&a.closest(".container").cf7sgRemoveRow()}));var a=t("div.cf7-smart-grid.has-validation form.wpcf7-form");a.length&&(t('input[type="number"][class*="sgv-"]',a).each(function(){var e=t(this),a=e.attr("name"),i=e.closest("div.cf7-smart-grid").attr("id"),s=e.attr("value");n(cf7sg[i],["prefill",a])||(e.prefillCF7Field(cf7sg[i].prefill[a],i),s=cf7sg[i].prefill[a],delete cf7sg[i].prefill[a]),e.data("current",s)}),a.change('input[type="number"]',function(e){if(t(e.target).is('input[type="number"]')){var a=t(e.target),i=a.data("current"),s=!1;switch(!0){case 0==a.val()&&a.is(".sgv-no-zero"):a.after('<span class="cf7sg-validation-warning">Value cannot be zero</span>'),a.val(i),s=!0;break;case 0>a.val()&&a.is(".sgv-no-negative"):a.after('<span class="cf7sg-validation-warning">Value cannot be negative</span>'),a.val(i),s=!0;break;case""==a.val()&&a.hasClass("sgv-not-empty"):a.after('<span class="cf7sg-validation-warning">Value cannot be empty</span>'),a.val(i),s=!0}s&&a.next("span.cf7sg-validation-warning").delay(3e3).fadeOut("slow").remove()}}));var s=t("div.cf7-smart-grid.has-accordion form.wpcf7-form");s.length>0&&(s.filter("div.has-toggles form.wpcf7-form").each(function(){var e=t(this),a=t(".cf7sg-collapsible.with-toggle",e),i="",s=t('input[name="_cf7sg_toggles"]',e),r=!1,c={};s.length>0&&(i=s.val().length>0?JSON.parse(s.val()):{},r=!0),t.fn.trackToggle=function(e){if(!r)return!1;var a=t(this),n=a.attr("id");if(!a.is(".with-toggle"))return!1;if(e){var c=t(".cf7sg-collapsible-title",a).clone(),l=c.children(".toggle").data("on");c.children(".toggle").remove(),i[n]=c.text().trim()+"|"+l}else i.hasOwnProperty(n)&&delete i[n];void 0!==n&&s.length>0&&s.val(JSON.stringify(i))},e.on("click",".cf7sg-collapsible.with-toggle",function(a){var i,s=t(a.target);if(s.is("span.cf7sg-title.toggled")||s.is(".toggle-on")||s.is(".toggle-off")||s.is(".toggle"))i=s.closest(".cf7sg-collapsible-title");else{if(!s.parent().is(".cf7sg-collapsible.with-toggle"))return;i=s}if(t(".toggle",i).is(".disabled"))return!1;var r=i.closest(".container.cf7sg-collapsible"),n=r.attr("id"),l=i.parent().removeClass("collapsed").data("group");l&&t('.cf7sg-collapsible.with-toggle[data-group="'+l+'"]',e).each(function(){var e=t(this),a=t(".toggle",e),i=e.attr("id");n!==i?0===e.accordion("option","active")&&(e.addClass("collapsed"),a.toggleClass("disabled",!1).data("toggles").toggle(!1),e.accordion("option","active",!1),t(".row.ui-accordion-content :input",e).prop("disabled",!0),e.trackToggle(!1)):c[l]&&a.toggleClass("disabled",!0)});var o=i.children(".toggle").data("toggles");if(void 0===o&&cf7sg.debug&&(console.log("undefined toggleSwitch, header parent:"),console.log(i),console.log("e.target:"),console.log(a.target)),i.hasClass("ui-state-active")){o.toggle(!0);var d=t(".row.ui-accordion-content :input",i.parent()).not(".cf7-sg-cloned-table-row :input").not(".collapsed :input").prop("disabled",!1);e.is(".has-nice-select form")&&d.filter(".wpcf7-form-control.nice-select:enabled").niceSelect(),r.trackToggle(!0)}else o.toggle(!1),t(".row.ui-accordion-content :input",i.parent()).each(function(){var e=this.value;t(this).val(e.trim()).prop("disabled",!0)}),r.trackToggle(!1)}),a.each(function(){var a=t(this),i=a.attr("id");void 0===i&&(i=p(6),a.attr("id",i));var s=a.data("open"),r=a.data("group"),l=!1;if(r&&void 0===c[r]&&(c[r]=!1),void 0===s)s=!1;else switch(s){case!0:s=0,l=!0}var o=0==e.closest("div.cf7_2_post").length&&!l,d=a.closest("div.cf7-smart-grid").attr("id");t(":input",a.children(".row")).each(function(){var e=t(this),a=e.attr("name").replace("[]","");n(cf7sg[d],["prefill","_cf7sg_toggles",i])||(e.prefillCF7Field(cf7sg[d].prefill[a],d),s=0,l=!0,delete cf7sg[d].prefill[a]),o&&e.prop("disabled",!0)}),l||a.addClass("collapsed"),a.children(".cf7sg-collapsible-title").children(".toggle").setupToggle(l,r),l&&(a.trackToggle(!0),r&&(c[r]=!0)),t("#"+i).accordion({collapsible:!0,icons:!1,active:s,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(e,a){t(this).trigger("sgContentIncrease")},beforeActivate:function(e,a){if(t(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":i})}})}),a.on("sgContentIncrease",function(){t(this).accordion("refresh")})}),s.each(function(){var e=t(this),a=t(".cf7sg-collapsible",e).not(".cf7sg-collapsible.with-toggle").not(".cf7sg-accordion-rows > .cf7sg-collapsible").not(".cf7sg-slider-section >.cf7sg-collapsible");(a=a.add(t(".cf7sg-accordion-rows",e))).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=p(6),e.attr("id",a));var i=e.data("open");if(void 0===i)i=!1;else switch(i){case!0:i=0,!0}var s={heightStyle:"content",create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":a})}};e.is(".cf7sg-accordion-rows")?(e.children(".cf7sg-collapsible").children(".cf7sg-collapsible-title").addClass("accordion"),Object.assign(s,{header:"div.cf7sg-collapsible-title.accordion",animate:!1})):Object.assign(s,{collapsible:!0,active:i,header:"> div.cf7sg-collapsible-title",activate:function(e,a){t(this).trigger("sgContentIncrease")}}),t("#"+a).accordion(s),e.on("sgContentIncrease",function(){t(this).accordion("refresh")})})}));var r=t("div.cf7-smart-grid.has-tabs form.wpcf7-form");r.length&&(i={},r.click("ul.ui-tabs-nav li",function(e){var a=t(e.target),i=a.closest(".cf7-sg-tabs");a.is(".cf7sg-close-tab")?i.cf7sgRemoveTab():a.is(".cf7sg-add-tab")&&i.cf7sgCloneTab(!0,!0)}),t(".cf7-sg-tabs",r).each(function(){var e=t(this),a=e.closest("div.cf7-smart-grid").attr("id"),s=e.children(".cf7-sg-tabs-list");if(1==s.children("li").length){s.after('<ul class="cf7sg-add-tab ui-tabs-nav"><li class="ui-state-default ui-corner-top"><a class="cf7sg-add-tab ui-tabs-anchor"><span class="cf7sg-add-tab dashicons dashicons-plus"></span></a></li></ul>');var r=e.children(".cf7-sg-tabs-panel").first(),c=t('<input class="cf7sg-tracker-field" value="1" type="hidden">').attr("name",r.attr("id"));e.prepend(c),r.find(":input").each(function(){var e=t(this);if(e.is(".cf7-sg-table :input"))e.addClass("cf7sgtab-field");else{var i=e.attr("name").replace("[]","");i.length>0&&(e.addClass("cf7sg-"+i+" cf7sgtab-field"),n(cf7sg[a],["prefill",i])||(e.prefillCF7Field(cf7sg[a][i],a),delete cf7sg[a].prefill[i]))}});var l=t("<div>").append(r.clone());t(":input",l).prop("disabled",!0),i[r.attr("id")]=l.html()}e.tabs({create:function(e){t(this).trigger("sgTabsReady")}})})),t("div.cf7-smart-grid").each(function(){var e=t(this),a=e.attr("id");n(cf7sg[a],["prefill"])||Object.keys(cf7sg[a].prefill).forEach(function(i){var s=t("."+i+" :input",e);0==s.length&&(s=t(':input[name="'+i+'"]',e)),s.prefillCF7Field(cf7sg[a].prefill[i],a)})});var l=t("div.cf7-smart-grid.has-nice-select form.wpcf7-form");l.length>0&&(l.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){t(".cf7sg-dynamic-dropdown.ui-select:enabled",$this).each(function(){t(this).niceSelect()}),t(".wpcf7-form-control.nice-select:enabled",$this).each(function(){t(this).niceSelect()}),t(this).trigger("sgNiceSelect")})}),l.not("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this);t(".cf7sg-dynamic-dropdown.ui-select:enabled",e).each(function(){t(this).niceSelect()}),t(".wpcf7-form-control.nice-select:enabled",e).each(function(){t(this).niceSelect()}),e.on("cf7SmartGridReady",function(t){e.trigger("sgNiceSelect")})}));var o=t("div.cf7-smart-grid.has-select2 form.wpcf7-form");o.length>0&&(o.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){var a=t(this);t("select.wpcf7-form-control.select2:enabled",a).each(function(){var e=t(this);e.select2(e.cf7sgSelect2Options())}),a.trigger("sgSelect2")})}),o.not("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this);t("select.wpcf7-form-control.select2:enabled",e).each(function(){var e=t(this);e.select2(e.cf7sgSelect2Options())}),e.on("cf7SmartGridReady",function(t){e.trigger("sgSelect2")})}));var d=document.createElement("input");d.setAttribute("type","date");var f="date"==d.type,g=t("div.cf7-smart-grid.has-date form.wpcf7-form");function p(t){t||(t=5);for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",i=0;i<t;i++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}g.length>0&&(g.filter("div.cf7_2_post form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7_2_post").attr("id");a.length>0&&e.on(a,function(e){t("input.wpcf7-date:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=p(6),e.attr("id",a)),f||e.setupDatePicker()}),t("input.wpcf7-text.datepicker:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=p(6),e.attr("id",a)),e.setupDatePicker()})})}),g.not("div.cf7_2_post form.wpcf7-form").each(function(){t("input.wpcf7-text.datepicker:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=p(6),e.attr("id",a)),e.setupDatePicker()}),t("input.wpcf7-date:enabled",t(this)).each(function(){var e=t(this),a=e.attr("id");void 0===a&&(a=p(6),e.attr("id",a)),f||e.setupDatePicker()})})),t("div.cf7-smart-grid.has-slider form.wpcf7-form").each(function(){t(this);t(".cf7sg-slider-section").each(function(){var e,a=t(this).wrapInner('<div class="glider"></div>'),i=t(".glider",a),s=t('<span class="slider-control slider-prev"></span>'),r=t('<span class="slider-control slider-next"></span>'),n=!1,c=null,l={arrows:{prev:".slider-prev",next:".slider-next"}};if(a.data("prev").length>0?s.text(a.data("prev")).addClass("ui-button"):s.addClass("dashicons dashicons-arrow-left-alt"),a.data("next").length>0?r.text(a.data("next")).addClass("ui-button"):r.addClass("dashicons dashicons-arrow-right-alt"),a.append(s).append(r),s.hide(),a.data("submit").length>0){n=!0,c=t('<input type="submit" value="'+a.data("submit")+'" class="wpcf7-form-control wpcf7-submit">'),r.after(c);let e=(c.outerHeight()-16)/2;c.hide().after('<span style="margin:'+e+'px 5px;" class="ajax-loader"></span>')}a.data("dots")&&(s.before('<span class="slider-dots"></span>'),l.dots=".slider-dots"),i.on("glider-loaded",function(t){a.trigger({type:"sgSliderReady",total:i.find(".glider-slide").length})}).on("glider-slide-visible",function(a){switch(s.show(),r.show(),n&&c.hide(),a.detail.slide){case 0:s.hide();break;case e.slides.length-1:r.hide(),n&&c.show()}t(a.target).find(".glider-slide.active").trigger({type:"sgSlideChange",current:a.detail.slide,last:t(a.target).find(".glider-slide").length-1})}),e=new Glider(i[0],l),a.on("sgRowAdded sgRowDeleted",function(t){e.refresh(!0)})})}),t.fn.sgCurrentSlide=function(){var e=t(this);return!!e.is(".cf7sg-slider-section")&&parseInt(e.find(".glider-slide.active").data("gslide"))},t.fn.sgChangeSlide=function(e){var a=t(this);if(!a.is(".cf7sg-slider-section"))return a;var i=Glider(t(".glider",a)[0]),s=a.sgCurrentSlide();return c(e)?s<i.slides.length&&i.scrollItem(s++):e<0?s>0&&i.scrollItem(s--):(e=parseInt(e))>=0&&e<=i.slides.length&&i.scrollItem(e),a},t("div.cf7_2_post div.cf7-smart-grid.has-toggles form.wpcf7-form").each(function(){var e=t(this),a=e.closest("div.cf7-smart-grid").attr("id"),i=e.closest("div.cf7_2_post").attr("id");i.length>0&&e.on(i,function(e){t(".cf7sg-collapsible.with-toggle",t(this)).each(function(){var e=t(this),i=e.attr("id");n(cf7sg[a],["toggles_status",i])?t(".row.ui-accordion-content :input",e).prop("disabled",!0):e.children(".cf7sg-collapsible-title").trigger("click")})})}),t("div.cf7-smart-grid form.wpcf7-form").trigger("cf7SmartGridReady"),t("div.cf7-smart-grid").on("wpcf7:invalid wpcf7invalid wpcf7mailsent",".wpcf7",function(e){var a,i=t(e.target);switch(e.type){case"wpcf7mailsent":if(!c(cf7sg[e.delegateTarget.id])&&cf7sg[e.delegateTarget.id].redirect.length>0){var s=t(".cf7_2_post_draft",i);0!=s.length&&"false"!==s.val()||window.location.replace(cf7sg[e.delegateTarget.id].redirect)}break;case"wpcf7invalid":case"wpcf7:invalid":if(void 0!==(a=e.detail).apiResponse)for(var r in a=a.apiResponse.invalid_fields){for(var n=t(a[r].into),l=n.parents(".cf7sg-collapsible:not(.glider-slide)"),o=0;o<l.length;o++)t(l[o]).attr("data-cf7sg","error"),t(l[o]).is(".cf7sg-accordion-rows .cf7sg-collapsible")?t(l[o]).closest(".cf7sg-accordion-rows").accordion("option","active",o):l.accordion("option","active",0);if((l=n.closest(".cf7-sg-tabs-panel")).length>0){var d=l.attr("id");l=l.closest(".cf7-sg-tabs");for(var f=t(".cf7-sg-tabs-list",l).children(),g=0;g<f.length;g++)if(d==t(f[g]).attr("aria-controls")){t(f[g]).attr("data-cf7sg","error"),l.tabs("option","active",g);break}}if((l=n.closest(".cf7sg-slider-section")).length>0){var p=n.closest(".glider-slide");p.attr("data-cf7sg","error"),Glider(t(".glider",l)[0]).scrollItem(p.data("gslide")),l.data("dots")&&t('.slider-dots button[data-index="'+p.data("gslide")+'"]',l).attr("data-cf7sg","error")}}}}).submit(function(e){var a=t(e.target);t('.cf7-sg-tabs-list li[data-cf7sg="error"]',a).attr("data-cf7sg",""),t('.cf7sg-collapsible[data-cf7sg="error"]',a).attr("data-cf7sg",""),t('.slider-dots button[data-cf7sg="error"]',a).attr("data-cf7sg","")}),t("div.cf7-smart-grid.has-grid .wpcf7-submit").each(function(){var e=t(this),a=e.closest("div.cf7-smart-grid").attr("id");e.after('<span class="cf7sg-popup display-none">'+cf7sg[a].submit_disabled+"</span>").parent().addClass("cf7sg-popup")}),t("div.cf7-smart-grid.has-table").on("sgRowAdded",".container.cf7-sg-table",function(e){var a,i,s=t(this),r=s.closest("div.cf7-smart-grid").attr("id");void 0!==(a=s.data("max"))&&0!=a&&--a==e.row&&(i='<span class="max-limit wpcf7-not-valid-tip">'+cf7sg[r].max_table_rows+"</span>",s.next(".cf7-sg-table-button").addClass("disabled").prepend(i))}),t("div.cf7-smart-grid.has-table").on("sgRowDeleted",".container.cf7-sg-table",function(e){var a,i=t(this);void 0!==(a=i.data("max"))&&0!=a&&i.next(".cf7-sg-table-button").removeClass("disabled").children(".max-limit").remove()})});var r=function(e){if(!e.id)return e.text;var a=t(e.element);return t('<a href="'+a.data("permalink")+'">'+e.text+"</a>")};function n(t,e){if(c(e)&&(e=[]),c(t))return!0;for(var a=t,i=0;i<e.length;i++){if(c(a[e[i]]))return!0;a=e[i]}return!1}function c(t){return null==t||("number"==typeof t?isNaN(t):!Boolean(t))}t.fn.prefillCF7Field=function(e,a){var i=t(this);if(!i.is(":input"))return!1;t(this);var s=i.attr("name"),r=i[0],n=r.type;if(c(r))return cf7sg.debug&&console.log("CF7SG ERROR: Unable to retrieve form element "+s),i;switch(i.length>0&&(n=i[0].type),n){case"select-multiple":case"select":Array.isArray(e)||(e=[e]),e.forEach(function(t){r.querySelector('option[value="'+t+'"]').selected=!0});break;case"checkbox":case"radio":r=t(r).closest("."+s.replace("[]","")).get(0),Array.isArray(e)||(e=[e]),e.forEach(function(t){r.querySelector('input[value="'+t+'"]').checked=!0});break;default:r.value=e}return i},t.fn.cf7sgSelect2Options=function(){var e=t(this),a={tags:e.is(".tags")},i=e.attr("name").replace("[]","");return e.is(".cf7sg-permalinks")&&(a.templateSelection=r,a.templateResult=r),void 0!==s.templateSelection&&(a.templateSelection=s.templateSelection),void 0!==s.templateResult&&(a.templateResult=s.templateResult),void 0!==s[i]&&(void 0!==s[i].templateSelection&&(a.templateSelection=s[i].templateSelection),void 0!==s[i].templateResult&&(a.templateResult=s[i].templateResult)),a},t.fn.activateCF7sgCollapsibleSection=function(e=!0){var a,i=t(this);if(!i.is(".cf7sg-collapsible"))return!1;switch(a=i.children(".cf7sg-collapsible-title"),!0){case e&&!a.is(".ui-state-active"):case!e&&a.is(".ui-state-active"):a.trigger("click")}return i},t.fn.getCF7field=function(e,a){null===a&&(a={});var i=t(this);if(void 0===e||0==e.length)return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() requires valid field name."),!1;if(!i.is(".wpcf7-form"))return cf7sg.debug&&console.log("CF7 Smart-grid ERROR: getCF7field() using unknown form"),!1;var s=void 0!==a.tab,r=void 0!==a.row,n=[];switch(!0){case s&&a.tab>0&&r&&a.row>0:n=t(':input[name="'+e+"_tab-"+a.tab+"_row-"+a.row+'"]',i);break;case s&&r:n=t(':input[name="'+e+'"]',i);break;case s&&a.tab>0&&r:n=t(':input[name="'+e+"_tab-"+a.tab+'"]',i);break;case s&&a.tab>0:n=t(':input[name*="'+e+"_tab-"+a.tab+'"], :input[name*="'+e+"_tab-"+a.tab+'_row-"]',i);break;case s:n=t(':input[name*="'+e+'_row-"], :input[name="'+e+'"]',i);break;case r&&a.row>0&&s:n=t(':input[name="'+e+"_row-"+a.row+'"]',i);break;case r&&a.row>0:n=t(':input[name="'+e+"_row-"+a.row+'"]',i).add(t(':input[name*="'+e+'_tab-"]',i).filter(':input[name$="_row-'+a.row+'"]'));break;case r:n=t(':input[name="'+e+'"], :input[name$="'+e+'_tab-"]',i);break;default:n=t(':input[name*="'+e+'"]',i)}return n.not(".cf7-sg-cloned-table-row :input")},t.fn.setupDatePicker=function(){var e=t(this);if(!e.is(".wpcf7-date:enabled")&&!e.is(".wpcf7-text.datepicker:enabled"))return e;var a="",i="",s=e.attr("min");void 0===s?s=null:a=(s=new Date(s)).getFullYear();var r=e.attr("max");return void 0===r?r=null:i=(r=new Date(r)).getFullYear(),e.datepicker("destroy"),e.datepicker({defaultDate:e.val(),dateFormat:"yy-mm-dd",minDate:s,maxDate:r,changeMonth:!0,changeYear:!0}),a>0&&i>0?e.datepicker("option","yearRange",a+":"+i):a>0?e.datepicker("option","yearRange",a+":c+20"):i>0&&e.datepicker("option","yearRange","c-20:"+i),e},t.fn.toggleCF7sgTableRowAddition=function(e){null===e&&(e=!1);var a=t(this);return!!a.is(".container.cf7-sg-table")&&(e?a.next(".cf7-sg-table-button").show():a.next(".cf7-sg-table-button").hide(),a)},t.fn.toggleCF7sgTableRowDeletion=function(e){null===e&&(e=!1);var a=t(this);return!!a.is(".container.cf7-sg-table")&&(e?t(".row.cf7-sg-table:nth-last-child(2) .row-control",a).removeClass("display-none"):t(".row.cf7-sg-table:nth-last-child(2) .row-control",a).addClass("display-none"),a)},t.fn.cf7sgCountRows=function(){var e=t(this);return!!e.is(".container.cf7-sg-table")&&e.children(".row").not(".cf7-sg-cloned-table-row").length},t.fn.cf7sgRemoveRow=function(){var e=t(this);if(!e.is(".container.cf7-sg-table"))return!1;var a=e.children(".row").not(".cf7-sg-cloned-table-row");if(a.length>1){a.last().remove(),e.trigger("sgRowDeleted");var i=e.children(".cf7sg-tracker-field");i.length&&i.val(a.length-1)}return e},t.fn.cf7sgCloneRow=function(e){void 0===e&&(e=!0);var a=t(this),i="";if(a.is(".cf7-sg-table-footer")&&(i=a,a=a.closest(".container.cf7-sg-table")),!a.is(".container.cf7-sg-table"))return a;var s=a.children(".row.cf7-sg-table").length-1,r=t(".cf7-sg-cloned-table-row",a),n=r.clone(),c=a.closest("div.cf7-smart-grid").attr("id");n.removeClass("cf7-sg-cloned-table-row").attr("data-row",s),cf7sg[c].table_labels&&t(".field > label",n).remove(),i.length>0?i.before(n.show()):r.before(n.show()),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var a=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>a.length)&&(e=a.length),e-=t.length;var i=a.indexOf(t,e);return-1!==i&&i===e}),t(":input",n).each(function(){var a=t(this);a.prop("disabled",!1);var i=a.attr("name").replace("_cf7sgcloned_",""),r="";i.endsWith("[]")&&(i=i.replace("[]",""),r="[]"),a.attr("name",i+"_row-"+s+r),a.closest("span.wpcf7-form-control-wrap").removeClass(i).addClass(i+"_row-"+s),a.is("select.ui-select")&&e&&a.niceSelect(),a.is("select.nice-select")&&e&&a.niceSelect(),a.is("select.select2")&&e&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),a.trigger("sgContentIncrease"),a.trigger({type:"sgRowAdded",row:s});var l=a.children(".cf7sg-tracker-field");return l.length&&l.val(s+1),a},t.fn.toggleCF7sgTabAddition=function(e){null===e&&(e=!1);var a=t(this);return!!a.is("div.cf7-sg-tabs")&&(e?t(".cf7sg-add-tab",a).show():t(".cf7sg-add-tab",a).hide(),a)},t.fn.toggleCF7sgTabDeletion=function(e){null===e&&(e=!1);var a=t(this);return!!a.is("div.cf7-sg-tabs")&&(e?t(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).removeClass("display-none").show():t(".cf7-sg-tabs-list li:last-child .cf7sg-close-tab",a).addClass("display-none").hide(),a)},t.fn.cf7sgCountTabs=function(){var e=t(this);return!!e.is("div.cf7-sg-tabs")&&e.find(".cf7-sg-tabs-list").children("li").length},t.fn.cf7sgRemoveTab=function(){var e=t(this);if(!e.is("div.cf7-sg-tabs"))return!1;var a=e.find(".cf7-sg-tabs-list").children("li");if(a.length>1){var i=a.last().find("a").attr("href");e.find("div"+i).remove(),a.last().remove().is(".ui-state-active")&&e.tabs({active:a.length-2}),e.trigger("sgTabRemoved");var s=a.eq(a.length-2).find(".cf7sg-close-tab:not(.display-none)");s.length>0&&s.show();var r=e.children(".cf7sg-tracker-field");r&&r.val(e.children(".cf7-sg-tabs-panel").length)}return e},t.fn.cf7sgCloneTab=function(e,a){null===a&&(a=!1);var s=t(this);if(void 0===e&&(e=!0),!s.is("div.cf7-sg-tabs"))return!1;var r=s.children(".cf7-sg-tabs-list"),n=r.children("li").length+1,c=s.children(".cf7-sg-tabs-panel").first().attr("id"),l=c+"-"+n,o=r.children("li").first().clone();o.find("a").attr("href","#"+l).text(o.text()+" ("+n+")"),o.append('<span class="cf7sg-close-tab dashicons dashicons-no-alt"></span>'),o.removeClass("ui-tabs-active ui-state-active"),r.find("li .cf7sg-close-tab").hide(),r.append(o);var d=t(i[c]);d.attr("id",l),t(":input",d).each(function(){var a=t(this),i=a.is(".cf7-sg-cloned-table-row :input"),s=a.attr("name"),r="";i||a.prop("disabled",!1),s.endsWith("[]")&&(s=s.replace("[]",""),r="[]"),a.attr("name",s+"_tab-"+(n-1)+r),a.closest("span.wpcf7-form-control-wrap").removeClass(s).addClass(s+"_tab-"+(n-1)),!i&&a.is("select.ui-select")&&e&&a.niceSelect(),!i&&a.is("select.nice-select")&&e&&a.niceSelect(),!i&&a.is("select.select2")&&e&&(a.select2(a.cf7sgSelect2Options()),a.trigger("sgSelect2"))}),s.append(d),d.find("ul.ui-tabs-nav li a").each(function(){var e=t(this);l=e.attr("href"),e.attr("href",l+"-"+n),e.closest("ul.ui-tabs-nav").siblings("div"+l).attr("id",l.substring(1)+"-"+n)}),t(".cf7-sg-tabs",d).each(function(){t(this).tabs()}),t(".cf7sg-collapsible.with-toggle",d).each(function(){var a=t(this),i=a.attr("id"),s=i+"_tab-"+(n-1);a.attr("id",s);var r=a.data("group");r&&(r=r+"_tab-"+(n-1),a.attr("data-group",r));var c=a.data("open"),l=!1;if(void 0===c)c=!1;else switch(c){case!0:c=0,l=!0}t(".toggle",a).setupToggle(l,r),l&&a.trackToggle(!0),!l&&e&&(t(".row.ui-accordion-content :input",a).prop("disabled",!0),a.addClass("collapsed")),t(".cf7sg-collapsible",d).accordion({collapsible:!0,icons:!1,active:c,header:"> div.cf7sg-collapsible-title",heightStyle:"content",activate:function(e,a){t(this).trigger("sgContentIncrease")},beforeActivate:function(e,a){if(t(".toggle",a.oldHeader).is(".disabled"))return!1},create:function(e){t(this).trigger({type:"sgCollapsibleRowsReady","section-id":i,"tab-index":n-1})}})}),s.tabs("refresh"),a&&s.tabs("option","active",-1),d.trigger({type:"sgTabAdded","tab-index":n-1}),t(".cf7-sg-table.container",d).each(function(){var e=t(this),a=e.attr("id");e.attr("id",a+"_tab-"+(n-1)),e.trigger({type:"sgTableReady","table-id":a,"tab-index":n-1})});var f=s.children(".cf7sg-tracker-field");return f&&f.val(s.children(".cf7-sg-tabs-panel").length),s},t.fn.setupToggle=function(e,a){var i=t(this);if(void 0===e&&(e=!1),!i.is(".toggle"))return i;if(i.length>0){var s=i.data("on");0==s.length&&(s="Yes");var r=i.data("off");0==s.length&&(r="No"),i.toggles({drag:!1,text:{on:s,off:r},on:e}),a&&e&&i.toggleClass("disabled",!0)}return i},t("div.cf7-smart-grid.has-update form.wpcf7-form").on("cf7SmartGridReady",function(){var i=t(this);t.ajax({type:"POST",url:cf7sg.url,dataType:"json",data:{action:"save_grid_fields",nonce:t('input[name="_wpnonce"]',i).val(),tabs_fields:JSON.stringify(e),table_fields:JSON.stringify(a),id:t('input[name="_wpcf7"]',i).val()}}).fail(function(t,e){console.log("CF7 Smart Grid ERROR sending grid fields to server: "+e)})})}(jQuery);
