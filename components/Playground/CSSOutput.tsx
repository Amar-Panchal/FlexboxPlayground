'use client';

import React from 'react';
import { PlaygroundState } from '@/app/types';

interface Props {
  state: PlaygroundState;
}

export const CSSOutput = React.memo(({ state }: Props) => {
  const isFlexDisplay =
    state.displayType === 'flex' || state.displayType === 'inline-flex';
  const isGridDisplay =
    state.displayType === 'grid' || state.displayType === 'inline-grid';
  const currentItem = state.items.find((i) => i.id === state.selectedItemId);

  return (
    <div className='bg-slate-900 shadow-lg p-6 text-slate-100'>
      <h2 className='text-xl font-semibold mb-4'>💻 Generated CSS</h2>
      <div className='font-mono text-sm space-y-3 max-h-96 overflow-y-auto'>
        <div>
          <div className='text-emerald-400'>.container {'{'}</div>
          <div className='pl-4 text-slate-300'>
            <div>display: {state.displayType};</div>
            {isFlexDisplay && (
              <>
                <div>flex-direction: {state.direction};</div>
                <div>justify-content: {state.justify};</div>
                <div>align-items: {state.alignItems};</div>
                <div>align-content: {state.alignContent};</div>
                <div>flex-wrap: {state.wrap};</div>
              </>
            )}
            {isGridDisplay && (
              <>
                <div>grid-template-columns: {state.gridTemplateColumns};</div>
                <div>grid-template-rows: {state.gridTemplateRows};</div>
                <div>grid-auto-flow: {state.gridAutoFlow};</div>
                <div>grid-auto-columns: {state.gridAutoColumns};</div>
                <div>grid-auto-rows: {state.gridAutoRows};</div>
                <div>justify-content: {state.justify};</div>
                <div>align-content: {state.alignContent};</div>
                <div>justify-items: {state.justifyItems};</div>
                <div>place-content: {state.placeContent};</div>
              </>
            )}
            <div>gap: {state.gap}px;</div>
            <div>row-gap: {state.rowGap}px;</div>
            <div>column-gap: {state.columnGap}px;</div>
            <div>height: {state.containerHeight}px;</div>
            <div>width: {state.containerWidth}%;</div>
          </div>
          <div className='text-emerald-400'>{'}'}</div>
        </div>

        {/* {currentItem && (
          <div>
            <div className='text-blue-400'>.item-{state.selectedItemId} {'{'}</div>
            <div className='pl-4 text-slate-300'>
              <div>order: {currentItem.order};</div>
              {isFlexDisplay && (
                <>
                  <div>flex-grow: {currentItem.grow};</div>
                  <div>flex-shrink: {currentItem.shrink};</div>
                  <div>flex-basis: {currentItem.basis};</div>
                </>
              )}
              {isGridDisplay && (
                <>
                  <div>grid-column: {currentItem.gridColumn || 'auto'};</div>
                  <div>grid-row: {currentItem.gridRow || 'auto'};</div>
                </>
              )}
              <div>align-self: {currentItem.alignSelf};</div>
              <div>width: {currentItem.width}px;</div>
              <div>height: {currentItem.height}px;</div>
            </div>
            <div className='text-blue-400'>{'}'}</div>
          </div>
        )} */}
      </div>
    </div>
  );
});
