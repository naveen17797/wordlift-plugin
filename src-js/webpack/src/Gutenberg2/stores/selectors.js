/**
 * Define the selectors.
 *
 * @author David Riccitelli <david@wordlift.io>
 * @since 3.23.0
 */

/**
 * WordPress dependencies
 */
import { dispatch, select } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

export const getAnnotationFilter = state => state.annotationFilter;

export const getEditor = state => state.editor;

export const getEntities = state => state.entities;

export const getSelectedEntities = state =>
  getEntities(state)
    .filter(entity => "undefined" !== typeof entity.occurrences && 0 < entity.occurrences.length)
    .map(({ description, id, label, mainType, sameAs, synonyms, types }) => ({
      description,
      id,
      label,
      mainType,
      sameAs,
      synonyms,
      types
    }))
    .toArray();

export const getClassificationBlock = () =>
  select("core/editor")
    .getBlocks()
    .find(block => "wordlift/classification" === block.name);