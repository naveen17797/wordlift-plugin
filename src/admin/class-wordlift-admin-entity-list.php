<?php

/**
 * Customization of the entity list in wp-admin/edit.php
 * 
 * @since 3.3.0
 */

/**
 * Wordlift_Entity_List_Service Class
 *
 * Handles the edit entities views.
 */
class Wordlift_Entity_List_Service {
	
	/**
	 * Size of the entity thumbnail in the list
	 * 
	 * @since  3.3.0
	 * 
	 * @access private
	 * 
	 * @var    int $thumb_size Size of the thumb in pixels
	 */
	private $thumb_size;

	/**
	 * Register custom columns for entity listing in backend
	 * @see https://codex.wordpress.org/Plugin_API/Action_Reference/manage_posts_custom_column
	 *
	 * @since 3.3.0
	 *
	 * @param array $columns the default columns.
	 *
	 * @return array Enhanced columns array.
	 */
	public function register_custom_columns( $columns ) {
		
		// Take away first column and keep a reference,
		// so we can later insert the thumbnail between the first and the rest of columns.
		$columns_cb = $columns['cb'];
		unset( $columns['cb'] );
		
		// Thumbnails column is inserted in second place, while the related posts on the end.
		$columns = array_merge(
			array( 'cb'                      => $columns_cb ),                      // re-add first column
			array( 'wl_column_thumbnail'     => __( 'Image', 'wordlift' ) ),        // thumb
			$columns,                                                               // default columns (without the first)
			array( 'wl_column_related_posts' => __( 'Related Posts', 'wordlift' ) ) // related posts
		);

		return $columns;		
	}

	/**
	 * Render custom columns
	 * @see https://codex.wordpress.org/Plugin_API/Action_Reference/manage_$post_type_posts_custom_column
	 *
	 * @since 3.3.0
	 *
	 * @param string $column the current column.
	 * @param int $entity_id An entity post id.
	 *
	 * @return true if the post is an entity otherwise false.
	 */
	public function render_custom_columns( $column, $entity_id ) {
		
		switch ( $column ) {
			
			case 'wl_column_related_posts':
				echo count( wl_core_get_related_post_ids( $entity_id ) );
				break;
			
			case 'wl_column_thumbnail':
				
				$edit_link = get_edit_post_link( $entity_id );
				$thumb     = get_the_post_thumbnail( $entity_id, array( $this->thumb_size, $this->thumb_size ) );
				
				if( ! $thumb ) {
					$thumb = "<img src='" . WL_DEFAULT_THUMBNAIL_PATH . "' width='$this->thumb_size' />";
				}
				echo "<a href='$edit_link'>$thumb</a>";
				break;	
		}
		
	}
}
