import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

// import data from dummy data file
import { kanbanData, kanbanGrid } from '../data/dummy';

// import header component
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        dataSource={kanbanData}
        id="kanban"
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => {
            return (
              <ColumnDirective
                key={index}
                {...item}
              />
            )
          })}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban