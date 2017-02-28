/**
 * Containers: Entity List.
 *
 * The `EntityListContainer` follows the `react-redux` pattern to bind specific
 * parts of the application state and dispatchers to the contained components.
 *
 * The `EntityListContainer` contains the `EntityList` component.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { setCurrentEntity, toggleEntity, toggleLink } from '../actions';
import EntityList from '../components/EntityList';

/**
 * Filters the provided map of entities according to the specified filter.
 *
 * @since 3.11.0
 *
 * @param {Object} entities A keyed map of entities.
 * @param {String} filter The filter.
 * @returns {Object} The filtered keyed-map of entities.
 */
const getVisibleEntities = ( entities, filter ) => {
	switch ( filter ) {
		case 'SHOW_WHO':
			return entities.filter( x => 'who' === x.w );
		case 'SHOW_WHERE':
			return entities.filter( x => 'where' === x.w );
		case 'SHOW_WHEN':
			return entities.filter( x => 'when' === x.w );
		case 'SHOW_WHAT':
			return entities.filter( x => 'what' === x.w );
		default:
			return entities;
	}
};

/**
 * Map the state to React components' properties.
 *
 * @since 3.11.0
 *
 * @param {object} state A state instance.
 * @returns {{entities}} An object with the list of entities.
 */
const mapStateToProps = ( state ) => {
	return {
		entities: getVisibleEntities( state.entities, state.visibilityFilter )
	};
};

/**
 * Map dispatchers to React components' properties.
 *
 * @since 3.11.0
 * @param {function} dispatch Redux's dispatch function.
 * @returns {{onClick: (Function), onLinkClick: (Function)}} A list of
 *     dispatchers.
 */
const mapDispatchToProps = ( dispatch ) => {
	return {
		/**
		 * The `onClick` dispatchers used by `EntityTile` component.
		 *
		 * @since 3.11.0
		 * @param {Object} entity The entity instance being clicked.
		 */
		onClick: ( entity ) => {
			dispatch( toggleEntity( entity ) );
		},

		/**
		 * The `onLinkClick` function is called when the Link switch is
		 * clicked.
		 * This function will toggle the link/no link on the entity's
		 * occurrences.
		 *
		 * @since 3.11.0
		 * @param {Object} entity The entity.
		 */
		onLinkClick: ( entity ) => {
			dispatch( toggleLink( entity ) );
		},

		onEditClick: ( entity ) => {
			dispatch( setCurrentEntity( entity ) );
		}
	};
};

/**
 * The `EntityListContainer` instance built by `react-redux` by connecting the
 * store with the state and dispatchers merged to properties passed to the React
 * components.
 *
 * @since 3.11.0
 */
const VisibleEntityList = connect(
	mapStateToProps,
	mapDispatchToProps
)( EntityList );

// Finally export the `VisibleEntityList`.
export default VisibleEntityList;