<?php
/**
 * Tests: Content Filter Service Test.
 *
 * Define the test for the {@link Wordlift_Content_Filter_Service}.
 *
 * @since      3.8.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */

/**
 * Test the {@link Wordlift_Content_Filter_Service} class.
 *
 * @since      3.8.0
 * @package    Wordlift
 * @subpackage Wordlift/tests
 */
class Wordlift_Content_Filter_Service_Test extends Wordlift_Unit_Test_Case {

	/**
	 * A {@link Wordlift_Entity_Service} instance.
	 *
	 * @since  3.8.0
	 * @access private
	 * @var Wordlift_Entity_Service $entity_service A {@link Wordlift_Entity_Service} instance.
	 */
	private $entity_service;

	/**
	 * The {@link Wordlift_Content_Filter_Service} instance to test.
	 * @since  3.8.0
	 * @access private
	 * @var Wordlift_Content_Filter_Service $content_filter_service A {@link Wordlift_Content_Filter_Service} instance.
	 */
	private $content_filter_service;

	/**
	 * The {@link Wordlift_Configuration_Service} instance.
	 *
	 * @since  3.13.0
	 * @access private
	 * @var \Wordlift_Configuration_Service $configuration_service The {@link Wordlift_Configuration_Service} instance.
	 */
	private $configuration_service;

	/**
	 * Array of synonyms to the simulate entity title.
	 *
	 * @since  3.15.0
	 * @access private
	 * @var array
	 */
	private $synonym_labels;

	/**
	 * {@inheritdoc}
	 */
	public function setUp() {
		parent::setUp();

		// We don't need to check the remote Linked Data store.
		Wordlift_Unit_Test_Case::turn_off_entity_push();

		$this->entity_service         = $this->get_wordlift_test()->get_entity_service();
		$this->configuration_service  = $this->get_wordlift_test()->get_configuration_service();
		$this->content_filter_service = new Wordlift_Content_Filter_Service( $this, $this->configuration_service );

	}

	/**
	 * Test a content without entities.
	 *
	 * @since 3.8.0
	 */
	public function test_content_no_entities() {

		$this->assertEquals( 'no entities in this content', $this->content_filter_service->the_content( 'no entities in this content' ) );

	}

	/**
	 * Test a content with one entity.
	 *
	 * @since 3.8.0
	 */
	public function test_content_with_entity() {

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// test with no synonym
		$this->synonym_labels = array();

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content with a link.
		$expected = '<a class=\'wl-entity-page-link\' href=\'http://example.org/link\'>Matt Mullenweg</a> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content with an entity marked as `wl-no-link`.
	 *
	 * @since 3.11.0
	 */
	public function test_entity_no_link() {

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation wl-no-link disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content without a link.
		$expected = 'Matt Mullenweg would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Intercept the permalink call to return a fixed link we can test.
	 * @since 3.8.0
	 *
	 * @param $permalink
	 * @param $post
	 * @param $leavename
	 *
	 * @return string
	 */
	public function post_link( $permalink, $post, $leavename ) {

		return 'http://example.org/link';
	}

	/**
	 * Mock {@link Wordlift_Entity_Service} get_entity_post_by_uri function.
	 *
	 * @since 3.8.0
	 *
	 * @param string $uri The post URI.
	 *
	 * @return mixed A fake post instance.
	 */
	public function get_entity_post_by_uri( $uri ) {

		$pid = $this->factory->post->create( array( 'post_title' => 'Matt Mullenweg' ) );
		return get_post( $pid );
	}

	/**
	 * Mock {@link Wordlift_Entity_Service} get_alternative_labels function.
	 *
	 * @since 3.15.0
	 *
	 * @param int $post_id Post id.
	 *
	 * @return mixed An array  of alternative labels.
	 */
	public function get_alternative_labels( $post_id ) {
		return $this->synonym_labels;
	}

	/**
	 * Test a content with an entity marked as `wl-no-link`.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_no_link_entity_no_link() {

		$this->configuration_service->set_link_by_default( false );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation wl-no-link disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content without a link.
		$expected = 'Matt Mullenweg would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_no_link_entity_not_specified() {

		$this->configuration_service->set_link_by_default( false );

		$this->assertFalse( $this->configuration_service->is_link_by_default() );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content without a link.
		$expected = 'Matt Mullenweg would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content with an entity marked as `wl-link`.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_no_link_entity_link() {

		$this->configuration_service->set_link_by_default( false );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation wl-link disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content with a link.
		$expected = '<a class=\'wl-entity-page-link\' href=\'http://example.org/link\'>Matt Mullenweg</a> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content with an entity marked as `wl-no-link`.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_link_entity_link() {

		$this->configuration_service->set_link_by_default( true );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation wl-link disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content with a link.
		$expected = '<a class=\'wl-entity-page-link\' href=\'http://example.org/link\'>Matt Mullenweg</a> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_link_entity_not_specified() {

		$this->configuration_service->set_link_by_default( true );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content with a link.
		$expected = '<a class=\'wl-entity-page-link\' href=\'http://example.org/link\'>Matt Mullenweg</a> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

	/**
	 * Test a content with an entity marked as `wl-no-link`.
	 *
	 * @since 3.13.0
	 */
	public function test_entity_default_link_entity_no_link() {

		$this->configuration_service->set_link_by_default( true );

		// Add a filter to set the permalink to a fixed value we can test.
		add_filter( 'post_link', array( $this, 'post_link' ), 10, 3 );

		// The content.
		$content = '<span id="urn:enhancement-4b54b56d-7142-5dd3-adc6-27e51c70fdad" class="textannotation wl-no-link disambiguated wl-person" itemid="http://data.example.org/entity">Matt Mullenweg</span> would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// The expected content without a link.
		$expected = 'Matt Mullenweg would love to see what we\'re achieving with WordLift for <span id="urn:enhancement-7aa39603-d48f-8ac8-5437-c74b3b0e28ef" class="textannotation">WordPress</span>!';

		// Check that the expected content matches the function output.
		$this->assertEquals( $expected, $this->content_filter_service->the_content( $content ) );

	}

}
