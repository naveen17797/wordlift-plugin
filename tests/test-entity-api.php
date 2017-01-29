<?php

/**
 * Test Entity functions from the modules/core/wordlift_core_entity.php file.
 */
require_once 'functions.php';

/**
 * Class EntityTest
 */
class EntityApiTest extends Wordlift_Unit_Test_Case {

	/**
	 * Set up the test.
	 */
	function setUp() {
		parent::setUp();

		// We don't need to check the remote Linked Data store.
		$this->turn_off_entity_push();

		// Configure WordPress with the test settings.
		wl_configure_wordpress_test();

		// Empty the blog.
		wl_empty_blog();
	}

	/**
	 * Test the wl_entity_get_by_title method.
	 */
	function testGetByTitle1() {

		// We're starting up with no entities, we expect 0 entities.
		$posts_1 = wl_entity_get_by_title( 'Test Entity' );
		$this->assertCount( 0, $posts_1 );

		// Create an entity and see that it is found.
		$post_id_2 = wl_create_post( 'Lorem Ipsum', 'test-entity-2', 'Test Entity', 'draft', Wordlift_Entity_Service::TYPE_NAME );
		$posts_2   = wl_entity_get_by_title( 'Test Entity' );
		$this->assertCount( 1, $posts_2 );
		$this->assertEquals( $post_id_2, $posts_2[0]->id );

		// Create another entity and see that it is found too.
		$post_id_3 = wl_create_post( 'Lorem Ipsum', 'test-entity-3', 'Test Entity', 'publish', Wordlift_Entity_Service::TYPE_NAME );
		$posts_3   = wl_entity_get_by_title( 'Test Entity' );
		$this->assertCount( 2, $posts_3 );
		$this->assertEquals( $post_id_2, $posts_3[0]->id );
		$this->assertEquals( $post_id_3, $posts_3[1]->id );

		// Create another entity and see that it is NOT found.
		$post_id_4 = wl_create_post( 'Lorem Ipsum', 'test-entity-4', 'Test Entity 4', 'publish', Wordlift_Entity_Service::TYPE_NAME );
		$posts_4   = wl_entity_get_by_title( 'Test Entity' );
		$this->assertCount( 2, $posts_3 );
		$this->assertEquals( $post_id_2, $posts_4[0]->id );
		$this->assertEquals( $post_id_3, $posts_4[1]->id );

		// Now make a LIKE search by hacking on the search param and see that it is found.
		$posts_5 = wl_entity_get_by_title( 'Test Entity%' );
		$this->assertCount( 3, $posts_5 );
		$this->assertEquals( $post_id_2, $posts_5[0]->id );
		$this->assertEquals( $post_id_3, $posts_5[1]->id );
		$this->assertEquals( $post_id_4, $posts_5[2]->id );

		// Now make a LIKE search using the $autocomplete param
		$posts_5 = wl_entity_get_by_title( 'Test Entity', true );
		$this->assertCount( 3, $posts_5 );
		$this->assertEquals( $post_id_2, $posts_5[0]->id );
		$this->assertEquals( $post_id_3, $posts_5[1]->id );
		$this->assertEquals( $post_id_4, $posts_5[2]->id );

		// Entity service instance
		$entity_service = Wordlift_Entity_Service::get_instance();

		// Verify non existence of 'an alias'
		$this->assertCount( 0, wl_entity_get_by_title( 'an alias', false, true ) );

		// Assign alias to entity 2 and verify it gets found
		$entity_service->set_alternative_labels( $post_id_2, 'an alias' );
		$this->assertCount( 1, wl_entity_get_by_title( 'an alias' ) );

		// The alias above should not be found if we don't ask for aliases
		$this->assertCount( 0, wl_entity_get_by_title( 'an alias', false, false ) );
	}
}
