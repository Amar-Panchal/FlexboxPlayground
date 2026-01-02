'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Stack,
  Slider,
} from '@mui/material';

import { ControlGroup, Select } from '../UI';
import {
  PlaygroundState,
  PlaygroundAction,
  DisplayType,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  FlexWrap,
  GridAutoFlow,
  JustifyItems,
  PlaceContent,
} from '@/app/types';
// import { ItemControls } from './ItemControls';

interface Props {
  state: PlaygroundState;
  dispatch: React.Dispatch<PlaygroundAction>;
}

export const ContainerControls = React.memo(({ state, dispatch }: Props) => {
  const isFlexDisplay =
    state.displayType === 'flex' || state.displayType === 'inline-flex';

  const isGridDisplay =
    state.displayType === 'grid' || state.displayType === 'inline-grid';

  return (
    <div>
      {/* Header */}
      <Stack direction='row' alignItems='center' justifyContent='end' mb={1}>
        <Button
          size='small'
          variant='contained'
          onClick={() => dispatch({ type: 'RESET_ALL' })}
        >
          Reset All
        </Button>
      </Stack>

      <Stack
        spacing={2}
        style={{
          display: 'Grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: '5px 20px',
        }}
      >
        {/* Display */}
        <ControlGroup label='display'>
          <Select<DisplayType>
            label='display'
            value={state.displayType}
            onChange={(v) => dispatch({ type: 'SET_DISPLAY_TYPE', payload: v })}
            options={[
              'flex',
              'inline-flex',
              'grid',
              'inline-grid',
              'block',
              'inline-block',
            ]}
          />
        </ControlGroup>
        {isFlexDisplay && (
          <>
            <ControlGroup label='flex-direction'>
              <Select<FlexDirection>
                label='flex-direction'
                value={state.direction}
                onChange={(v) =>
                  dispatch({ type: 'SET_DIRECTION', payload: v })
                }
                options={['row', 'row-reverse', 'column', 'column-reverse']}
              />
            </ControlGroup>

            <ControlGroup label='justify-content'>
              <Select<JustifyContent>
                label='justify-content'
                value={state.justify}
                onChange={(v) => dispatch({ type: 'SET_JUSTIFY', payload: v })}
                options={[
                  'flex-start',
                  'flex-end',
                  'center',
                  'space-between',
                  'space-around',
                  'space-evenly',
                  'start',
                  'end',
                  'left',
                  'right',
                ]}
              />
            </ControlGroup>

            <ControlGroup label='align-items'>
              <Select<AlignItems>
                label='align-items'
                value={state.alignItems}
                onChange={(v) =>
                  dispatch({ type: 'SET_ALIGN_ITEMS', payload: v })
                }
                options={[
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'baseline',
                  'start',
                  'end',
                  'self-start',
                  'self-end',
                ]}
              />
            </ControlGroup>

            <ControlGroup label='align-content'>
              <Select<AlignContent>
                label='align-content'
                value={state.alignContent}
                onChange={(v) =>
                  dispatch({ type: 'SET_ALIGN_CONTENT', payload: v })
                }
                options={[
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'space-between',
                  'space-around',
                  'space-evenly',
                  'start',
                  'end',
                ]}
              />
            </ControlGroup>

            <ControlGroup label='flex-wrap'>
              <Select<FlexWrap>
                label='flex-wrap'
                value={state.wrap}
                onChange={(v) => dispatch({ type: 'SET_WRAP', payload: v })}
                options={['nowrap', 'wrap', 'wrap-reverse']}
              />
            </ControlGroup>
          </>
        )}

        {/* GRID */}
        {isGridDisplay && (
          <>
            <ControlGroup label='grid-template-columns'>
              <Select<string>
                label='grid-template-columns'
                value={state.gridTemplateColumns}
                onChange={(v) =>
                  dispatch({ type: 'SET_GRID_COLUMNS', payload: v })
                }
                options={[
                  'repeat(3, 1fr)',
                  'repeat(2, 1fr)',
                  'repeat(4, 1fr)',
                  '1fr 2fr 1fr',
                  '100px 1fr',
                  'auto auto auto',
                  'repeat(auto-fit, minmax(100px, 1fr))',
                  'repeat(auto-fill, minmax(100px, 1fr))',
                ]}
              />
            </ControlGroup>

            <ControlGroup label='grid-template-rows'>
              <Select<string>
                label='grid-template-rows'
                value={state.gridTemplateRows}
                onChange={(v) =>
                  dispatch({ type: 'SET_GRID_ROWS', payload: v })
                }
                options={[
                  'auto',
                  'repeat(2, 100px)',
                  'repeat(3, 1fr)',
                  '100px auto 100px',
                  'min-content max-content auto',
                ]}
              />
            </ControlGroup>

            <ControlGroup label='grid-auto-flow'>
              <Select<GridAutoFlow>
                label='grid-auto-flow'
                value={state.gridAutoFlow}
                onChange={(v) =>
                  dispatch({ type: 'SET_GRID_AUTO_FLOW', payload: v })
                }
                options={['row', 'column', 'row dense', 'column dense']}
              />
            </ControlGroup>

            <ControlGroup label='justify-items'>
              <Select<JustifyItems>
                label='justify-items'
                value={state.justifyItems}
                onChange={(v) =>
                  dispatch({ type: 'SET_JUSTIFY_ITEMS', payload: v })
                }
                options={['start', 'end', 'center', 'stretch']}
              />
            </ControlGroup>

            <ControlGroup label='place-content'>
              <Select<PlaceContent>
                label='place-content'
                value={state.placeContent}
                onChange={(v) =>
                  dispatch({ type: 'SET_PLACE_CONTENT', payload: v })
                }
                options={[
                  'start',
                  'end',
                  'center',
                  'stretch',
                  'space-between',
                  'space-around',
                  'space-evenly',
                ]}
              />
            </ControlGroup>
          </>
        )}
        {/* Gap */}
        <ControlGroup label={`gap: ${state.gap}px`}>
          <Slider
            value={state.gap}
            min={0}
            max={50}
            onChange={(_, v) =>
              dispatch({ type: 'SET_GAP', payload: v as number })
            }
          />
        </ControlGroup>

        <ControlGroup label={`row-gap: ${state.rowGap}px`}>
          <Slider
            value={state.rowGap}
            min={0}
            max={50}
            onChange={(_, v) =>
              dispatch({ type: 'SET_ROW_GAP', payload: v as number })
            }
          />
        </ControlGroup>

        <ControlGroup label={`column-gap: ${state.columnGap}px`}>
          <Slider
            value={state.columnGap}
            min={0}
            max={50}
            onChange={(_, v) =>
              dispatch({ type: 'SET_COLUMN_GAP', payload: v as number })
            }
          />
        </ControlGroup>

        <ControlGroup label={`height: ${state.containerHeight}px`}>
          <Slider
            value={state.containerHeight}
            min={200}
            max={600}
            onChange={(_, v) =>
              dispatch({
                type: 'SET_CONTAINER_HEIGHT',
                payload: v as number,
              })
            }
          />
        </ControlGroup>

        <ControlGroup label={`width: ${state.containerWidth}%`}>
          <Slider
            value={state.containerWidth}
            min={50}
            max={100}
            onChange={(_, v) =>
              dispatch({
                type: 'SET_CONTAINER_WIDTH',
                payload: v as number,
              })
            }
          />
        </ControlGroup>
      </Stack>
      {/* <ItemControls state={state} dispatch={dispatch} /> */}
    </div>
  );
});

ContainerControls.displayName = 'ContainerControls';
