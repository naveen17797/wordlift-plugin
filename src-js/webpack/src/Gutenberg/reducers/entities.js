/*global wlSettings*/
/**
 * Reducers: Entities.
 *
 * Define the reducers related to entities.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */
import { Map } from "immutable";

/**
 * Internal dependencies
 */
import * as types from "../../Edit/constants/ActionTypes";
import AnnotationService from "../services/AnnotationService";
import LinkService from "../services/LinkService";
import WsService from "../../Edit/services/WsService";

/**
 * Define the reducers.
 *
 * @since 3.11.0
 * @param {object} state The `state`.
 * @param {object} action The `action`.
 * @returns {object} The new state.
 */
const entities = function(state = Map(), action) {
  switch (action.type) {
    // Legacy: receive analysis' results.
    case types.RECEIVE_ANALYSIS_RESULTS:
      // Calculate the labels.
      const labels = Map(action.results.entities).groupBy((v, k) => v.label);

      // Return a new map of the received entities. The legacy Angular
      // app doesn't set the `link` property on the entity, therefore we
      // preset it here according to the `occurrences` settings.
      // return ( || return state.mergeDeep(
      return state.mergeDeep(
        Map(action.results.entities)
          .map(x =>
            Object.assign({}, x, {
              link: LinkService.getLink(x.occurrences),
              local: 0 === x.id.indexOf(wlSettings.datasetUri),
              w: WsService.getW(x),
              edit: "no" !== wlSettings.can_create_entities,
              duplicateLabel: 1 < labels.get(x.label).count()
            })
          )
          // Sort by confidence.
          .sort((x, y) => {
            // Get the delta confidence.
            const delta = y.confidence - x.confidence;

            // If the confidence is equal, sort by number of annotations.
            return 0 !== delta ? delta : y.annotations.length - x.annotations.length;
          })
          // Set the shortlist flag to true for the first 20.
          .mapEntries(([k, v], i) => {
            v.shortlist = i < 20;
            return [k, v];
          })
        // Then resort them by label.
        //.sortBy(x => x.label.toLowerCase())
      );

    // Legacy: set the current entity on the `EditPostWidgetController`.
    case types.SET_CURRENT_ENTITY:
      // Open the entity edit URL in new window
      window.open(`${wlSettings["ajax_url"]}?action=wordlift_redirect&uri=${action.entity.id}&to=edit`, "_blank");
      return state;

    // Legacy: toggle the entity selection, fired when clicking on an
    // entity tile.
    case types.TOGGLE_ENTITY:
      // Call the EditPostWidgetController.onSelectedEntityTile method
      AnnotationService.onSelectedEntityTile(state.get(action.entity.id));

      // Update the state by replacing the entity with toggled version.
      return state;

    // Toggle the link/no link on entity's occurrences.
    case types.TOGGLE_LINK:
      // Toggle the link on the occurrences.
      action.entity = LinkService.syncOccurrences(action.entity);
      LinkService.setLink(action.entity.occurrences, !action.entity.link);

      // Update the entity in the state.
      return state.set(
        action.entity.id,
        // A new object instance with the existing props and the new
        // occurrences.
        Object.assign({}, state.get(action.entity.id), {
          occurrences: action.entity.occurrences,
          link: LinkService.getLink(action.entity.occurrences)
        })
      );

    // Update the entity's occurrences. This action is dispatched from
    // within EditPostWidgetController.onSelectedEntityTile
    case types.UPDATE_OCCURRENCES_FOR_ENTITY:
      // Update the entity.
      return state.set(
        action.entityId,
        // A new object instance with the existing props and the new
        // occurrences.
        Object.assign({}, state.get(action.entityId), {
          occurrences: action.occurrences,
          link: LinkService.getLink(action.occurrences)
        })
      );

    default:
      return state;
  }
};

// Finally export the reducer.
export default entities;
