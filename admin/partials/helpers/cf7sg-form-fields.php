<li class="cf7sg-tag-dynamic_select-post">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_post_query','{$field_name_slug}_dynamic_list',10,3);
/**
* Filter post query for dynamic dropdown options.
* @param array $args an arra of query terms.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return array an arra of query terms.
*/
function {$field_name_slug}_dynamic_list($query_args, $field, $cf7_key){
  //if you have a dynamic dropdown field with posts as list source.
  //$query_args array to filter query arguments used to populate dynamic dropdown of posts.
  //these arguments are passed to the function get_posts($query_args). (codex: https://codex.wordpress.org/Template_Tags/get_posts)
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $query_args;
  }
  //setup your custom query...
  return $query_args;
}" href="javascript:void(0);">Filter</a> query arguments to retrieve posts for dynamic dropdown.
</li>
<li class="cf7sg-tag-dynamic_select-taxonomy">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_option_label','{$field_name_slug}_dynamic_option_label',10,3);
/**
* Filter dropdown options label for dynamic drodpwn list of taxonomy terms.
* @param string $label option label value.
* @param WP_Term $term the term object being used to populate this option.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return string $label option label value.
*/
function {$field_name_slug}_dynamic_option_label($label, $term, $name, $cf7_key){
  //these are the label users will see when the dropdown opens.
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $label;
  }
  return $label;
}" href="javascript:void(0);">Filter</a> the option label.
</li>
<li class="cf7sg-tag-dynamic_select-taxonomy">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_option_attributes','{$field_name_slug}_dynamic_option_attributes',10,3);
/**
* Filter dropdown options  attributes.
* @param array $attributes an array of <attribute>=>$value pairs which will be used for populating select options, instead of a string $value, an array of values can be passed such as classes.
* @param WP_Term $term the term object being used to populate this option.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return array array of $value=>$name pairs which will be used for populating select options attributes.
*/
function {$field_name_slug}_dynamic_option_attributes($attributes, $term, $name, $cf7_key){
  //these are the optional attributes you can add to your dynamic list option when populating from taxonomy terms.
  //this is especially useful in the context of select2 fields, as much richer options can be built.
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $attributes;
  }
  //example: $attributes['class'] = array($term->slug);
  return $attributes;
}" href="javascript:void(0);">Filter</a> the option attributes.
</li>
<li class="cf7sg-tag-dynamic_select-post">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_option_label','{$field_name_slug}_dynamic_option_label',10,3);
/**
* Filter dropdown options label for dynamic drodpwn list of existing posts.
* @param string $label option label value.
* @param WP_Post $post the post object being used to populate this option.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return string $label option label value.
*/
function {$field_name_slug}_dynamic_option_label($label, $post, $name, $cf7_key){
  //these are the label users will see when the dropdown opens.
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $label;
  }
  return $label;
}" href="javascript:void(0);">Filter</a> the option label.
</li>
<li class="cf7sg-tag-dynamic_select-post">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_option_attributes','{$field_name_slug}_dynamic_option_attributes',10,3);
/**
* Filter dropdown options  attributes.
* @param array $attributes an array of <attribute>=>$value pairs which will be used for populating select options, instead of a string $value, an array of values can be passed such as classes.
* @param WP_Post $post the post object being used to populate this option.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return array array of $value=>$name pairs which will be used for populating select options attributes.
*/
function {$field_name_slug}_dynamic_option_attributes($attributes, $post, $name, $cf7_key){
  //these are the optional attributes you can add to your dynamic list option when populating from existing posts.
  //this is especially useful in the conctext of select2 fields, as much richer options can be built.
  if('{$form_key}'!==$cf7_key && '{$field_name}' !==$field){
    return $attributes;
  }
  //example: $attributes['class'] = array('author-'.$post->post_author);
  return $attributes;
}" href="javascript:void(0);">Filter</a> the option attributes.
</li>
<li class="cf7sg-tag-dynamic_select">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_default_value','{$field_name_slug}_dynamic_default_option',10,3);
/**
* Filter dynamic dropdown default empty label.
* @param string $label the label for the default value, this is null by default and not shown.
* @param string $name the field name being populated.
* @param string $cf7_key  the form unique key.
* @return string the label for the default value, returning a non-null value with display this as the first option.
*/
function {$field_name_slug}_dynamic_default_option($default, $field, $cf7_key){
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $default;
  }
  $default = 'Please select an option...';
  return $default;
}" href="javascript:void(0);">Filter</a> the default option label.
</li>
<li class="cf7sg-tag-dynamic_select-post-tags <?=$post_my_form_only?>">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_new_post','{$field_name_slug}_select2_newpost',10,7);
function {$field_name_slug}_select2_newpost($post_name, $field, $title, $post_type, $args, $cf7_key, $submitted_data){
  /*
  Filter active when saving forms using Post My CF7 Form plugin.
  select2 dynamic dropdowns can have an option for custom user values to be selected/inserted.
  If a user searches an option which is not available they can simply insert it.  You need to enable the tagging functionality (https://select2.org/tagging) by adding a 'tags' class to your cf7 tag.

  When this option is enabled for a dynamic dropdown with posts as its source of option list, then you need to hook this filter which is fired when a the user has submitted a new custom post title in the select2 field.  This plugin takes not action to create the new post.  This is your reponsibility.
  $post_name new post slug to set.
  $field name of dynamic dropdown.
  $title string submitted by the user.
  $post_type the post type which was used to build the original dropdown list.
  $args an array of any additional arguments set to limit the original dropdown list, such as taxonomy terms.
  $cf7_key unique form key to identify your form, $cf7_id is its post_id.
  $submitted_data array of other submitted $field=>$value pairs.
  */
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $default;
  }
  //create your new post using wp_insert_post();
  $post_name = 'new_sbummision';
  return $post_name;
}" href="javascript:void(0);">Filter</a> user added option.
</li>
<li class="cf7sg-tag-dynamic_select-filter <?=$post_my_form_only?>">
  <a class="helper" data-cf72post="add_filter( 'cf7sg_dynamic_dropdown_filter_select2_submission','{$field_name_slug}_select2_filter_values',10,3);
function {$field_name_slug}_select2_filter_values($values, $field, $cf7_key, $submitted_data){
  /*
  Filter active when saving forms using Post My CF7 Form plugin.
  For a dynamic dropdown with custom option list set by a filter, you need to hook this filter which is fired when a user has submitted select2 field value(s). You can return the filtered selected value(s) which will be stored in the mapped post.
  This filter is especially useful when the select2 tags have been enabled (https://select2.org/tagging) and your user may have submitted new values which your original filtered list did not contain.
  $values selected by user.
  $field name of dynamic dropdown.
  $cf7_key unique form key to identify your form, $cf7_id is its post_id.
  $submitted_data array of other submitted $field=>$value pairs.
  */
  if('{$form_key}'!==$cf7_key && '{$field_name}' !== $field){
    return $default;
  }
  //do something...
  return $values;
}" href="javascript:void(0);">Filter</a> user selection with user added option.
</li>
