import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {DatasetJson, DatasetsService} from "../../services/datasets/datasets.service";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-datasets',
    templateUrl: './datasets.component.html',
    styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
    public datasetElements: DatasetJson[];
    displayedColumns = ['table_name', 'create_time', 'modified_time', 'action'];
    dataSource: MatTableDataSource<DatasetJson>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(public datasetsService: DatasetsService, public dialog: MatDialog) {
    }

    async ngOnInit() {
        await this.getDatasets();
    }

    async getDatasets() {
        await this.datasetsService.getDatasets().then((dataObj: any) => {
            this.datasetElements = dataObj.data;
            // console.log(this.datasetElements);
            this.dataSource = new MatTableDataSource<DatasetJson>(this.datasetElements);
            // console.log(this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
        event.preventDefault();
        viewChild.openMenu();
    }

    public downloadFile(fileName) {
        this.datasetsService.downloadFile(fileName).subscribe(res => {
            this.saveCSVFile(res, fileName);
        });
    }

    saveCSVFile(data: Blob, table_name: string) {
        var a = document.createElement('a');
        var blob = new Blob([data], {'type': "application/vnd.ms-excel"});
        a.href = URL.createObjectURL(blob);
        a.download = name + ".csv";
        a.click();
    }

    showDescription(table_name: string) {
        const descRef = this.dialog.open(DatasetsDescriptionDialog, {
            width: '450px',
            data: {name: table_name}
        });

        descRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
}

export interface DialogData {
    table_name: string;
    table_description: string;
}

@Component({
    selector: 'datasets-dialog',
    templateUrl: 'datasets-dialog.html',
})
export class DatasetsDescriptionDialog {

    constructor(
        public dialogRef: MatDialogRef<DatasetsDescriptionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
