export type DisplayType =
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'block'
  | 'inline-block';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right';

export type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';

export type AlignContent =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type AlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';

export type FlexBasis =
  | 'auto'
  | '0'
  | '50px'
  | '100px'
  | '150px'
  | '200px'
  | '25%'
  | '50%'
  | '75%'
  | '100%'
  | 'content'
  | 'max-content'
  | 'min-content';

export type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch';

export type PlaceContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface FlexItem {
  id: number;
  order: number;
  grow: number;
  shrink: number;
  basis: FlexBasis;
  alignSelf: AlignSelf;
  width: number;
  height: number;
  gridColumn?: string;
  gridRow?: string;
}

export type PlaygroundAction =
  | { type: 'SET_DISPLAY_TYPE'; payload: DisplayType }
  | { type: 'SET_DIRECTION'; payload: FlexDirection }
  | { type: 'SET_JUSTIFY'; payload: JustifyContent }
  | { type: 'SET_ALIGN_ITEMS'; payload: AlignItems }
  | { type: 'SET_ALIGN_CONTENT'; payload: AlignContent }
  | { type: 'SET_WRAP'; payload: FlexWrap }
  | { type: 'SET_GAP'; payload: number }
  | { type: 'SET_ROW_GAP'; payload: number }
  | { type: 'SET_COLUMN_GAP'; payload: number }
  | { type: 'SET_CONTAINER_HEIGHT'; payload: number }
  | { type: 'SET_CONTAINER_WIDTH'; payload: number }
  | { type: 'SET_GRID_COLUMNS'; payload: string }
  | { type: 'SET_GRID_ROWS'; payload: string }
  | { type: 'SET_GRID_AUTO_FLOW'; payload: GridAutoFlow }
  | { type: 'SET_GRID_AUTO_COLUMNS'; payload: string }
  | { type: 'SET_GRID_AUTO_ROWS'; payload: string }
  | { type: 'SET_JUSTIFY_ITEMS'; payload: JustifyItems }
  | { type: 'SET_PLACE_CONTENT'; payload: PlaceContent }
  | { type: 'UPDATE_ITEM'; payload: { id: number; property: keyof FlexItem; value: any } }
  | { type: 'SELECT_ITEM'; payload: number }
  | { type: 'RESET_ALL' };

export interface PlaygroundState {
  displayType: DisplayType;
  direction: FlexDirection;
  justify: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  wrap: FlexWrap;
  gap: number;
  rowGap: number;
  columnGap: number;
  containerHeight: number;
  containerWidth: number;
  gridTemplateColumns: string;
  gridTemplateRows: string;
  gridAutoFlow: GridAutoFlow;
  gridAutoColumns: string;
  gridAutoRows: string;
  justifyItems: JustifyItems;
  placeContent: PlaceContent;
  items: FlexItem[];
  selectedItemId: number;
}
