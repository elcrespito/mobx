import { CellClickedEvent, GridReadyEvent } from 'ag-grid-community';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-enterprise";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Asset } from '../stores/AssetsStore';

const assets = observable([
    new Asset("CB", "Test CB", 90),
    new Asset("CB-1", "Test CB-1", 250),
    new Asset("CB-2", "Test CB-2", 340),
]);

@observer
class App extends React.Component {

    public render() {
        return (
            <div style={{ height: 525, width: '80%', margin: "auto" }} className="ag-theme-balham">
                <AgGridReact
                    getRowNodeId={this.getRowNodeId}
                    onGridReady={this.handleGridready}
                    deltaRowDataMode={true}
                >
                    <AgGridColumn field="name" />
                    <AgGridColumn field="descriptionData" />
                    <AgGridColumn field="budget" onCellClicked={this.handleCellClicked} />
                </AgGridReact>
            </div>
        );
    }

    private handleGridready(event: GridReadyEvent) {
        event.api.setRowData(assets);
    }

    private getRowNodeId(data: Asset) {
        return data.name;
    }

    private handleCellClicked(event: CellClickedEvent) {
        event.data.inc();

        event.api.updateRowData({ update: [event.data] });
    }
}

export default App;
