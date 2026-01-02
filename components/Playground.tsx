'use client';

import { useReducer } from 'react';
import {
  PlaygroundState,
  FlexItem,
  DisplayType,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  FlexWrap,
  GridAutoFlow,
  JustifyItems,
  PlaceContent,
  PlaygroundAction,
} from '@/app/types';
import { ContainerControls } from './Playground/ContainerControls';
import { ItemControls } from './Playground/ItemControls';
import { LivePreview } from './Playground/LivePreview';
import { CSSOutput } from './Playground/CSSOutput';

const initialItems: FlexItem[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  order: 0,
  grow: 0,
  shrink: 1,
  basis: 'auto',
  alignSelf: 'auto',
  width: 100,
  height: 80,
}));

const initialState: PlaygroundState = {
  displayType: 'flex',
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  wrap: 'nowrap',
  gap: 8,
  rowGap: 8,
  columnGap: 8,
  containerHeight: 300,
  containerWidth: 100,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto',
  gridAutoFlow: 'row',
  gridAutoColumns: 'auto',
  gridAutoRows: 'auto',
  justifyItems: 'stretch',
  placeContent: 'start',
  items: initialItems,
  selectedItemId: 1,
};

function playgroundReducer(
  state: PlaygroundState,
  action: PlaygroundAction
): PlaygroundState {
  switch (action.type) {
    case 'SET_DISPLAY_TYPE':
      return { ...state, displayType: action.payload };
    case 'SET_DIRECTION':
      return { ...state, direction: action.payload };
    case 'SET_JUSTIFY':
      return { ...state, justify: action.payload };
    case 'SET_ALIGN_ITEMS':
      return { ...state, alignItems: action.payload };
    case 'SET_ALIGN_CONTENT':
      return { ...state, alignContent: action.payload };
    case 'SET_WRAP':
      return { ...state, wrap: action.payload };
    case 'SET_GAP':
      return { ...state, gap: action.payload };
    case 'SET_ROW_GAP':
      return { ...state, rowGap: action.payload };
    case 'SET_COLUMN_GAP':
      return { ...state, columnGap: action.payload };
    case 'SET_CONTAINER_HEIGHT':
      return { ...state, containerHeight: action.payload };
    case 'SET_CONTAINER_WIDTH':
      return { ...state, containerWidth: action.payload };
    case 'SET_GRID_COLUMNS':
      return { ...state, gridTemplateColumns: action.payload };
    case 'SET_GRID_ROWS':
      return { ...state, gridTemplateRows: action.payload };
    case 'SET_GRID_AUTO_FLOW':
      return { ...state, gridAutoFlow: action.payload };
    case 'SET_GRID_AUTO_COLUMNS':
      return { ...state, gridAutoColumns: action.payload };
    case 'SET_GRID_AUTO_ROWS':
      return { ...state, gridAutoRows: action.payload };
    case 'SET_JUSTIFY_ITEMS':
      return { ...state, justifyItems: action.payload };
    case 'SET_PLACE_CONTENT':
      return { ...state, placeContent: action.payload };
    case 'SELECT_ITEM':
      return { ...state, selectedItemId: action.payload };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, [action.payload.property]: action.payload.value }
            : item
        ),
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}

export default function Playground() {
  const [state, dispatch] = useReducer(playgroundReducer, initialState);

  return (
    <div className=''>
      <ContainerControls state={state} dispatch={dispatch} />
      <div className='  py-2 grid lg:grid-cols-2 gap-6'>
        <LivePreview state={state} dispatch={dispatch} />
        <CSSOutput state={state} />
      </div>
    </div>
  );
}
