'use client';

import React from 'react';
import { PlaygroundState } from '@/app/types';

interface Props {
  state: PlaygroundState;
  dispatch: React.Dispatch<any>;
}

export const LivePreview = React.memo(({ state, dispatch }: Props) => {
  const isFlexDisplay =
    state.displayType === 'flex' || state.displayType === 'inline-flex';
  const isGridDisplay =
    state.displayType === 'grid' || state.displayType === 'inline-grid';

  const containerStyle: React.CSSProperties = {
    display: state.displayType,
    height: `${state.containerHeight}px`,
    width: `${state.containerWidth}%`,
    gap: `${state.gap}px`,
    rowGap: `${state.rowGap}px`,
    columnGap: `${state.columnGap}px`,
  };

  if (isFlexDisplay) {
    Object.assign(containerStyle, {
      flexDirection: state.direction,
      justifyContent: state.justify,
      alignItems: state.alignItems,
      alignContent: state.alignContent,
      flexWrap: state.wrap,
    });
  } else if (isGridDisplay) {
    Object.assign(containerStyle, {
      gridTemplateColumns: state.gridTemplateColumns,
      gridTemplateRows: state.gridTemplateRows,
      gridAutoFlow: state.gridAutoFlow,
      gridAutoColumns: state.gridAutoColumns,
      gridAutoRows: state.gridAutoRows,
      justifyContent: state.justify,
      alignContent: state.alignContent,
      justifyItems: state.justifyItems,
      placeContent: state.placeContent,
    });
  }

  return (
    <div className='border-2 border-dashed border-slate-300 rounded-lg p-4 bg-slate-50 overflow-auto'>
      <h3 className='text-xl font-semibold text-slate-800 mb-4'>
        👀 Live Preview
      </h3>{' '}
      <div style={containerStyle}>
        {state.items.map((item) => {
          const isSelected = item.id === state.selectedItemId;
          const itemStyle: React.CSSProperties = {
            width:
              item.basis === 'auto' && isFlexDisplay
                ? `${item.width}px`
                : undefined,
            height: `${item.height}px`,
            order: item.order,
            alignSelf: item.alignSelf,
          };

          if (isFlexDisplay) {
            Object.assign(itemStyle, {
              flexGrow: item.grow,
              flexShrink: item.shrink,
              flexBasis: item.basis,
            });
          }

          if (isGridDisplay) {
            Object.assign(itemStyle, {
              gridColumn: item.gridColumn || 'auto',
              gridRow: item.gridRow || 'auto',
            });
          }

          if (!isFlexDisplay && !isGridDisplay) {
            itemStyle.width = `${item.width}px`;
          }

          return (
            <div
              key={item.id}
              onClick={() =>
                dispatch({ type: 'SELECT_ITEM', payload: item.id })
              }
              className={`flex items-center justify-center rounded-lg font-semibold cursor-pointer transition-all ${
                isSelected
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
              style={itemStyle}
            >
              {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
});
