import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingDirective, RangeColorSettingsDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg:white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Color Mapping" title="USA CLIMATE _ WEATHER BY MONTH" />
      <ChartComponent
        id="color-mapping"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white', mode: 'Range'}}
      >
        <Inject services={[ColumnSeries, Legend, Category, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            xName="x"
            yName="y"
            name="USA CLIMATE"
            type="Column"
            animation={{ enable: true }}
            cornerRadius={{ topLeft: 10, topRight: 10 }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => {
            return (
              <RangeColorSettingDirective
                key={index}
                {...item}
                labelRender={({ value }) => `${value}°C`}
              />
            )
          })}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  )
}

export default ColorMapping