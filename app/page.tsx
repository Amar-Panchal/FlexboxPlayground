'use client';

import { useState } from 'react';

type DisplayType =
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'block'
  | 'inline-block';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type JustifyContent =
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
type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end';
type AlignContent =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignSelf =
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
type FlexBasis =
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
type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';
type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
type PlaceContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface FlexItem {
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

export default function FlexboxPlayground() {
  // Display Type
  const [displayType, setDisplayType] = useState<DisplayType>('flex');

  // Flex Container Properties
  const [direction, setDirection] = useState<FlexDirection>('row');
  const [justify, setJustify] = useState<JustifyContent>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignItems>('stretch');
  const [alignContent, setAlignContent] = useState<AlignContent>('stretch');
  const [wrap, setWrap] = useState<FlexWrap>('nowrap');
  const [gap, setGap] = useState<number>(8);
  const [rowGap, setRowGap] = useState<number>(8);
  const [columnGap, setColumnGap] = useState<number>(8);
  const [containerHeight, setContainerHeight] = useState<number>(400);
  const [containerWidth, setContainerWidth] = useState<number>(100); // percentage

  // Grid Properties
  const [gridTemplateColumns, setGridTemplateColumns] =
    useState<string>('repeat(3, 1fr)');
  const [gridTemplateRows, setGridTemplateRows] = useState<string>('auto');
  const [gridAutoFlow, setGridAutoFlow] = useState<GridAutoFlow>('row');
  const [gridAutoColumns, setGridAutoColumns] = useState<string>('auto');
  const [gridAutoRows, setGridAutoRows] = useState<string>('auto');
  const [justifyItems, setJustifyItems] = useState<JustifyItems>('stretch');
  const [placeContent, setPlaceContent] = useState<PlaceContent>('start');

  // Individual Item Properties
  const [items, setItems] = useState<FlexItem[]>([
    {
      id: 1,
      order: 0,
      grow: 0,
      shrink: 1,
      basis: 'auto',
      alignSelf: 'auto',
      width: 100,
      height: 80,
    },
    {
      id: 2,
      order: 0,
      grow: 0,
      shrink: 1,
      basis: 'auto',
      alignSelf: 'auto',
      width: 100,
      height: 80,
    },
    {
      id: 3,
      order: 0,
      grow: 0,
      shrink: 1,
      basis: 'auto',
      alignSelf: 'auto',
      width: 100,
      height: 80,
    },
    {
      id: 4,
      order: 0,
      grow: 0,
      shrink: 1,
      basis: 'auto',
      alignSelf: 'auto',
      width: 100,
      height: 80,
    },
    {
      id: 5,
      order: 0,
      grow: 0,
      shrink: 1,
      basis: 'auto',
      alignSelf: 'auto',
      width: 100,
      height: 80,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState<number>(1);

  const isFlexDisplay = displayType === 'flex' || displayType === 'inline-flex';
  const isGridDisplay = displayType === 'grid' || displayType === 'inline-grid';

  const updateItem = (id: number, property: keyof FlexItem, value: any) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [property]: value } : item
      )
    );
  };

  const resetAll = () => {
    setDisplayType('flex');
    setDirection('row');
    setJustify('flex-start');
    setAlignItems('stretch');
    setAlignContent('stretch');
    setWrap('nowrap');
    setGap(8);
    setRowGap(8);
    setColumnGap(8);
    setContainerHeight(400);
    setContainerWidth(100);
    setGridTemplateColumns('repeat(3, 1fr)');
    setGridTemplateRows('auto');
    setGridAutoFlow('row');
    setGridAutoColumns('auto');
    setGridAutoRows('auto');
    setJustifyItems('stretch');
    setPlaceContent('start');
    setItems([
      {
        id: 1,
        order: 0,
        grow: 0,
        shrink: 1,
        basis: 'auto',
        alignSelf: 'auto',
        width: 100,
        height: 80,
      },
      {
        id: 2,
        order: 0,
        grow: 0,
        shrink: 1,
        basis: 'auto',
        alignSelf: 'auto',
        width: 100,
        height: 80,
      },
      {
        id: 3,
        order: 0,
        grow: 0,
        shrink: 1,
        basis: 'auto',
        alignSelf: 'auto',
        width: 100,
        height: 80,
      },
      {
        id: 4,
        order: 0,
        grow: 0,
        shrink: 1,
        basis: 'auto',
        alignSelf: 'auto',
        width: 100,
        height: 80,
      },
      {
        id: 5,
        order: 0,
        grow: 0,
        shrink: 1,
        basis: 'auto',
        alignSelf: 'auto',
        width: 100,
        height: 80,
      },
    ]);
  };

  const currentItem = items.find((i) => i.id === selectedItem);

  const containerStyle: React.CSSProperties = {
    display: displayType,
    height: `${containerHeight}px`,
    width: `${containerWidth}%`,
  };

  if (isFlexDisplay) {
    Object.assign(containerStyle, {
      flexDirection: direction,
      justifyContent: justify,
      alignItems: alignItems,
      alignContent: alignContent,
      flexWrap: wrap,
      gap: `${gap}px`,
      rowGap: `${rowGap}px`,
      columnGap: `${columnGap}px`,
    });
  } else if (isGridDisplay) {
    Object.assign(containerStyle, {
      gridTemplateColumns,
      gridTemplateRows,
      gridAutoFlow,
      gridAutoColumns,
      gridAutoRows,
      justifyContent: justify,
      alignContent: alignContent,
      justifyItems,
      placeContent,
      gap: `${gap}px`,
      rowGap: `${rowGap}px`,
      columnGap: `${columnGap}px`,
    });
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-slate-800 mb-2'>
            🎨 Complete CSS Layout Playground
          </h1>
          <p className='text-slate-600'>
            Master Flexbox, Grid, and all CSS layout properties with interactive
            controls
          </p>
        </div>

        <div className='grid lg:grid-cols-12 gap-6'>
          {/* Left Panel - Controls */}
          <div className='lg:col-span-4 space-y-4 max-h-screen overflow-y-auto'>
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-semibold text-slate-800'>
                  📦 Container
                </h2>
                <button
                  onClick={resetAll}
                  className='text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md transition-colors'
                >
                  Reset All
                </button>
              </div>

              <div className='space-y-4'>
                <ControlGroup label='display'>
                  <Select<DisplayType>
                    value={displayType}
                    onChange={setDisplayType}
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

                {/* Common Properties */}
                <ControlGroup label={`gap: ${gap}px`}>
                  <input
                    type='range'
                    min='0'
                    max='50'
                    value={gap}
                    onChange={(e) => setGap(Number(e.target.value))}
                    className='w-full'
                  />
                </ControlGroup>

                <ControlGroup label={`row-gap: ${rowGap}px`}>
                  <input
                    type='range'
                    min='0'
                    max='50'
                    value={rowGap}
                    onChange={(e) => setRowGap(Number(e.target.value))}
                    className='w-full'
                  />
                </ControlGroup>

                <ControlGroup label={`column-gap: ${columnGap}px`}>
                  <input
                    type='range'
                    min='0'
                    max='50'
                    value={columnGap}
                    onChange={(e) => setColumnGap(Number(e.target.value))}
                    className='w-full'
                  />
                </ControlGroup>

                <ControlGroup label={`height: ${containerHeight}px`}>
                  <input
                    type='range'
                    min='200'
                    max='600'
                    value={containerHeight}
                    onChange={(e) => setContainerHeight(Number(e.target.value))}
                    className='w-full'
                  />
                </ControlGroup>

                <ControlGroup label={`width: ${containerWidth}%`}>
                  <input
                    type='range'
                    min='50'
                    max='100'
                    value={containerWidth}
                    onChange={(e) => setContainerWidth(Number(e.target.value))}
                    className='w-full'
                  />
                </ControlGroup>

                {/* Flexbox Specific */}
                {isFlexDisplay && (
                  <>
                    <div className='border-t pt-4 mt-4'>
                      <h3 className='text-sm font-semibold text-slate-600 mb-3'>
                        FLEXBOX PROPERTIES
                      </h3>
                    </div>

                    <ControlGroup label='flex-direction'>
                      <Select<FlexDirection>
                        value={direction}
                        onChange={setDirection}
                        options={[
                          'row',
                          'row-reverse',
                          'column',
                          'column-reverse',
                        ]}
                      />
                    </ControlGroup>

                    <ControlGroup label='justify-content'>
                      <Select<JustifyContent>
                        value={justify}
                        onChange={setJustify}
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
                        value={alignItems}
                        onChange={setAlignItems}
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
                        value={alignContent}
                        onChange={setAlignContent}
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
                        value={wrap}
                        onChange={setWrap}
                        options={['nowrap', 'wrap', 'wrap-reverse']}
                      />
                    </ControlGroup>
                  </>
                )}

                {/* Grid Specific */}
                {isGridDisplay && (
                  <>
                    <div className='border-t pt-4 mt-4'>
                      <h3 className='text-sm font-semibold text-slate-600 mb-3'>
                        GRID PROPERTIES
                      </h3>
                    </div>

                    <ControlGroup label='grid-template-columns'>
                      <Select<string>
                        value={gridTemplateColumns}
                        onChange={setGridTemplateColumns}
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
                        value={gridTemplateRows}
                        onChange={setGridTemplateRows}
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
                        value={gridAutoFlow}
                        onChange={setGridAutoFlow}
                        options={['row', 'column', 'row dense', 'column dense']}
                      />
                    </ControlGroup>

                    <ControlGroup label='grid-auto-columns'>
                      <Select<string>
                        value={gridAutoColumns}
                        onChange={setGridAutoColumns}
                        options={[
                          'auto',
                          '1fr',
                          '100px',
                          'min-content',
                          'max-content',
                          'minmax(100px, 1fr)',
                        ]}
                      />
                    </ControlGroup>

                    <ControlGroup label='grid-auto-rows'>
                      <Select<string>
                        value={gridAutoRows}
                        onChange={setGridAutoRows}
                        options={[
                          'auto',
                          '1fr',
                          '100px',
                          'min-content',
                          'max-content',
                          'minmax(50px, auto)',
                        ]}
                      />
                    </ControlGroup>

                    <ControlGroup label='justify-content'>
                      <Select<JustifyContent>
                        value={justify}
                        onChange={setJustify}
                        options={[
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

                    <ControlGroup label='align-content'>
                      <Select<AlignContent>
                        value={alignContent}
                        onChange={setAlignContent}
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

                    <ControlGroup label='justify-items'>
                      <Select<JustifyItems>
                        value={justifyItems}
                        onChange={setJustifyItems}
                        options={['start', 'end', 'center', 'stretch']}
                      />
                    </ControlGroup>

                    <ControlGroup label='place-content'>
                      <Select<PlaceContent>
                        value={placeContent}
                        onChange={setPlaceContent}
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
              </div>
            </div>

            {/* Item Controls */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <div className='space-y-4'>
                <ControlGroup label='Select Item'>
                  <div className='flex gap-2 flex-wrap'>
                    {items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          selectedItem === item.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {item.id}
                      </button>
                    ))}
                  </div>
                </ControlGroup>

                {currentItem && (
                  <>
                    <ControlGroup label={`order: ${currentItem.order}`}>
                      <input
                        type='range'
                        min='-5'
                        max='5'
                        value={currentItem.order}
                        onChange={(e) =>
                          updateItem(
                            selectedItem,
                            'order',
                            Number(e.target.value)
                          )
                        }
                        className='w-full'
                      />
                    </ControlGroup>

                    {isFlexDisplay && (
                      <>
                        <ControlGroup label={`flex-grow: ${currentItem.grow}`}>
                          <input
                            type='range'
                            min='0'
                            max='5'
                            value={currentItem.grow}
                            onChange={(e) =>
                              updateItem(
                                selectedItem,
                                'grow',
                                Number(e.target.value)
                              )
                            }
                            className='w-full'
                          />
                        </ControlGroup>

                        <ControlGroup
                          label={`flex-shrink: ${currentItem.shrink}`}
                        >
                          <input
                            type='range'
                            min='0'
                            max='5'
                            value={currentItem.shrink}
                            onChange={(e) =>
                              updateItem(
                                selectedItem,
                                'shrink',
                                Number(e.target.value)
                              )
                            }
                            className='w-full'
                          />
                        </ControlGroup>

                        <ControlGroup label='flex-basis'>
                          <Select<FlexBasis>
                            value={currentItem.basis}
                            onChange={(v) =>
                              updateItem(selectedItem, 'basis', v)
                            }
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

                    <ControlGroup label='align-self'>
                      <Select<AlignSelf>
                        value={currentItem.alignSelf}
                        onChange={(v) =>
                          updateItem(selectedItem, 'alignSelf', v)
                        }
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

                    {isGridDisplay && (
                      <>
                        <ControlGroup label='grid-column'>
                          <input
                            type='text'
                            value={currentItem.gridColumn || 'auto'}
                            onChange={(e) =>
                              updateItem(
                                selectedItem,
                                'gridColumn',
                                e.target.value
                              )
                            }
                            placeholder='e.g., span 2, 1 / 3'
                            className='w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                          />
                        </ControlGroup>

                        <ControlGroup label='grid-row'>
                          <input
                            type='text'
                            value={currentItem.gridRow || 'auto'}
                            onChange={(e) =>
                              updateItem(
                                selectedItem,
                                'gridRow',
                                e.target.value
                              )
                            }
                            placeholder='e.g., span 2, 1 / 3'
                            className='w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                          />
                        </ControlGroup>
                      </>
                    )}

                    <ControlGroup label={`width: ${currentItem.width}px`}>
                      <input
                        type='range'
                        min='50'
                        max='300'
                        value={currentItem.width}
                        onChange={(e) =>
                          updateItem(
                            selectedItem,
                            'width',
                            Number(e.target.value)
                          )
                        }
                        className='w-full'
                      />
                    </ControlGroup>

                    <ControlGroup label={`height: ${currentItem.height}px`}>
                      <input
                        type='range'
                        min='40'
                        max='200'
                        value={currentItem.height}
                        onChange={(e) =>
                          updateItem(
                            selectedItem,
                            'height',
                            Number(e.target.value)
                          )
                        }
                        className='w-full'
                      />
                    </ControlGroup>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className='lg:col-span-8 space-y-4'>
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h2 className='text-xl font-semibold text-slate-800 mb-4'>
                👀 Live Preview
              </h2>

              <div className='border-2 border-dashed border-slate-300 rounded-lg p-4 bg-slate-50 overflow-auto'>
                <div style={containerStyle}>
                  {items.map((item) => {
                    const isSelected = item.id === selectedItem;
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
                        onClick={() => setSelectedItem(item.id)}
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
            </div>

            {/* CSS Output */}
            <div className='bg-slate-900 rounded-xl shadow-lg p-6 text-slate-100'>
              <h2 className='text-xl font-semibold mb-4'>💻 Generated CSS</h2>
              <div className='font-mono text-sm space-y-3 max-h-96 overflow-y-auto'>
                <div>
                  <div className='text-emerald-400'>.container {'{'}</div>
                  <div className='pl-4 text-slate-300'>
                    <div>display: {displayType};</div>
                    {isFlexDisplay && (
                      <>
                        <div>flex-direction: {direction};</div>
                        <div>justify-content: {justify};</div>
                        <div>align-items: {alignItems};</div>
                        <div>align-content: {alignContent};</div>
                        <div>flex-wrap: {wrap};</div>
                      </>
                    )}
                    {isGridDisplay && (
                      <>
                        <div>grid-template-columns: {gridTemplateColumns};</div>
                        <div>grid-template-rows: {gridTemplateRows};</div>
                        <div>grid-auto-flow: {gridAutoFlow};</div>
                        <div>grid-auto-columns: {gridAutoColumns};</div>
                        <div>grid-auto-rows: {gridAutoRows};</div>
                        <div>justify-content: {justify};</div>
                        <div>align-content: {alignContent};</div>
                        <div>justify-items: {justifyItems};</div>
                        <div>place-content: {placeContent};</div>
                      </>
                    )}
                    <div>gap: {gap}px;</div>
                    <div>row-gap: {rowGap}px;</div>
                    <div>column-gap: {columnGap}px;</div>
                    <div>height: {containerHeight}px;</div>
                    <div>width: {containerWidth}%;</div>
                  </div>
                  <div className='text-emerald-400'>{'}'}</div>
                </div>

                {currentItem && (
                  <div>
                    <div className='text-blue-400'>
                      .item-{selectedItem} {'{'}
                    </div>
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
                          <div>
                            grid-column: {currentItem.gridColumn || 'auto'};
                          </div>
                          <div>grid-row: {currentItem.gridRow || 'auto'};</div>
                        </>
                      )}
                      <div>align-self: {currentItem.alignSelf};</div>
                      <div>width: {currentItem.width}px;</div>
                      <div>height: {currentItem.height}px;</div>
                    </div>
                    <div className='text-blue-400'>{'}'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ControlGroupProps {
  label: string;
  children: React.ReactNode;
}

function ControlGroup({ label, children }: ControlGroupProps) {
  return (
    <div>
      <label className='block text-sm font-medium text-slate-700 mb-2'>
        {label}
      </label>
      {children}
    </div>
  );
}
interface SelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
}

function Select<T extends string>({
  value,
  onChange,
  options,
}: SelectProps<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className='w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
