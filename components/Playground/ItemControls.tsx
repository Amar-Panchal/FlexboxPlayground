'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Slider,
  Divider,
  TextField,
} from '@mui/material';

import { ControlGroup, Select } from '../UI';
import { PlaygroundState, FlexItem, AlignSelf, FlexBasis } from '@/app/types';

interface Props {
  state: PlaygroundState;
  dispatch: React.Dispatch<any>;
}

export const ItemControls = React.memo(({ state, dispatch }: Props) => {
  const currentItem = state.items.find((i) => i.id === state.selectedItemId);

  const isFlexDisplay =
    state.displayType === 'flex' || state.displayType === 'inline-flex';

  const isGridDisplay =
    state.displayType === 'grid' || state.displayType === 'inline-grid';

  if (!currentItem) return null;

  const updateItem = (property: keyof FlexItem, value: any) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: { id: state.selectedItemId, property, value },
    });
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant='h6' mb={2}>
          🧩 Item
        </Typography>

        <Stack spacing={2}>
          {/* Select Item */}
          <ControlGroup label='Select Item'>
            <Stack direction='row' spacing={1} flexWrap='wrap'>
              {state.items.map((item) => (
                <Button
                  key={item.id}
                  size='small'
                  variant={
                    state.selectedItemId === item.id ? 'contained' : 'outlined'
                  }
                  onClick={() =>
                    dispatch({
                      type: 'SELECT_ITEM',
                      payload: item.id,
                    })
                  }
                >
                  {item.id}
                </Button>
              ))}
            </Stack>
          </ControlGroup>

          <Divider />

          {/* Order */}
          <ControlGroup label={`order: ${currentItem.order}`}>
            <Slider
              value={currentItem.order}
              min={-5}
              max={5}
              valueLabelDisplay='auto'
              onChange={(_, v) => updateItem('order', v as number)}
            />
          </ControlGroup>

          {/* FLEX ITEM */}
          {isFlexDisplay && (
            <>
              <ControlGroup label={`flex-grow: ${currentItem.grow}`}>
                <Slider
                  value={currentItem.grow}
                  min={0}
                  max={5}
                  valueLabelDisplay='auto'
                  onChange={(_, v) => updateItem('grow', v as number)}
                />
              </ControlGroup>

              <ControlGroup label={`flex-shrink: ${currentItem.shrink}`}>
                <Slider
                  value={currentItem.shrink}
                  min={0}
                  max={5}
                  valueLabelDisplay='auto'
                  onChange={(_, v) => updateItem('shrink', v as number)}
                />
              </ControlGroup>

              <ControlGroup label='flex-basis'>
                <Select<FlexBasis>
                  label='flex-basis'
                  value={currentItem.basis}
                  onChange={(v) => updateItem('basis', v)}
                  options={[
                    'auto',
                    '0',
                    '50px',
                    '100px',
                    '150px',
                    '200px',
                    '25%',
                    '50%',
                    '75%',
                    '100%',
                    'content',
                    'max-content',
                    'min-content',
                  ]}
                />
              </ControlGroup>
            </>
          )}

          {/* Align Self */}
          <ControlGroup label='align-self'>
            <Select<AlignSelf>
              label='align-self'
              value={currentItem.alignSelf}
              onChange={(v) => updateItem('alignSelf', v)}
              options={[
                'auto',
                'flex-start',
                'flex-end',
                'center',
                'stretch',
                'baseline',
                'start',
                'end',
                'self-start',
                'self-end',
              ]}
            />
          </ControlGroup>

          {/* GRID ITEM */}
          {isGridDisplay && (
            <>
              <ControlGroup label='grid-column'>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='e.g. span 2, 1 / 3'
                  value={currentItem.gridColumn || 'auto'}
                  onChange={(e) => updateItem('gridColumn', e.target.value)}
                />
              </ControlGroup>

              <ControlGroup label='grid-row'>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='e.g. span 2, 1 / 3'
                  value={currentItem.gridRow || 'auto'}
                  onChange={(e) => updateItem('gridRow', e.target.value)}
                />
              </ControlGroup>
            </>
          )}

          {/* Size */}
          <ControlGroup label={`width: ${currentItem.width}px`}>
            <Slider
              value={currentItem.width}
              min={50}
              max={300}
              valueLabelDisplay='auto'
              onChange={(_, v) => updateItem('width', v as number)}
            />
          </ControlGroup>

          <ControlGroup label={`height: ${currentItem.height}px`}>
            <Slider
              value={currentItem.height}
              min={40}
              max={200}
              valueLabelDisplay='auto'
              onChange={(_, v) => updateItem('height', v as number)}
            />
          </ControlGroup>
        </Stack>
      </CardContent>
    </Card>
  );
});

ItemControls.displayName = 'ItemControls';
