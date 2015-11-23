<?php

/**
 * Displays notices in the admin UI.
 *
 * @since 3.2.0
 */
class Wordlift_Notice_Service {

	/**
	 * The template used to display notices.
	 *
	 * @since 3.2.0
	 */
	const TEMPLATE = '<div class="wl-notice %s"><p>%s</p></div>';

	/**
	 * The standard WordPress <em>update</em> style class.
	 *
	 * @since 3.2.0
	 */
	const UPDATE = 'update';

	/**
	 * The standard WordPress <em>update-nag</em> style class.
	 *
	 * @since 3.2.0
	 */
	const UPDATE_NAG = 'update-nag';

	/**
	 * The standard WordPress <em>error</em> style class.
	 *
	 * @since 3.2.0
	 */
	const ERROR = 'error';

	/**
	 * The array of notices.
	 *
	 * @since 3.2.0
	 * @access private
	 * @var array $notices The array of notices.
	 */
	private $notices = array();

	/**
	 * Create an instance of the Notice service.
	 *
	 * @since 3.2.0
	 */
	public function __construct() {

		// Hook to be called when to display notices.
		add_action( 'admin_notices', array( $this, 'admin_notices' ) );

	}

	/**
	 * Add a notice.
	 *
	 * @since 3.2.0
	 *
	 * @param string $class The css class.
	 * @param string $message The message.
	 */
	public function add( $class, $message ) {

		$this->notices[] = sprintf( self::TEMPLATE, $class, $message );

	}

	/**
	 * Add an update notice (message with a white background and a green left border).
	 *
	 * @since 3.2.0
	 *
	 * @param string $message The message to display.
	 */
	public function add_update( $message ) {

		$this->add( self::UPDATE, $message );

	}

	/**
	 * Add an update nag notice (message with a white background and a yellow left border).
	 *
	 * @since 3.2.0
	 *
	 * @param string $message The message to display.
	 */
	public function add_update_nag( $message ) {

		$this->add( self::UPDATE_NAG, $message );

	}

	/**
	 * Add an error notice (message with a white background and a red left border).
	 *
	 * @since 3.2.0
	 *
	 * @param string $message The message to display.
	 */
	public function add_error( $message ) {

		$this->add( self::ERROR, $message );

	}

	/**
	 * Print out the notices when the admin_notices action is called.
	 *
	 * @since 3.2.0
	 */
	public function admin_notices() {

		foreach ( $this->notices as $notice ) {
			echo( $notice );
		}

	}

}
