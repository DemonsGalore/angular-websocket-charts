import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-line-chart',
    styleUrls: ['./line-chart.component.scss'],
    templateUrl: 'line-chart.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnChanges {
    @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;
    @Input() data!: any[];

    maxXAxisTicks = 10;


    lineChartData: ChartDataSets[] = [
        {
            data: [],
            label: ''
        },
    ];

    lineChartLabels: Label[] = [];
    // lineChartLabels: Label[] = [];

    lineChartOptions: ChartOptions = {
        responsive: true,
        elements: {
            point: {
                radius: 0
            },
            line: {
                // stepped: true,
                borderWidth: 0,
                borderColor: '#444',
                backgroundColor: 'purple'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    min: 0,
                    beginAtZero: true,
                    // autoSkip: true,
                    maxTicksLimit: this.maxXAxisTicks,
                    // precision: 0,
                    // stepSize: 100,
                    // minRotation: 10,
                    // maxRotation: 10
                }
                
            }],
            yAxes: [{
                
                ticks: {
                    beginAtZero: true,

                }
            }]
        }
    };

    lineChartColors: Color[] = [
        {
            borderColor: 'rgba(255,165,0,1)',
            backgroundColor: 'rgba(255,165,0,0.25)',
        },
    ];

    lineChartLegend = false;
    lineChartPlugins = [];
    lineChartType: ChartType = 'line';

    constructor(private changeDetectorRef: ChangeDetectorRef) {

        // console.log(this.lineChartData);
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        // for (let i = 0; i < this.lineChartData.length; i++) {
        //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //       this.lineChartData[i].data[j] = this.generateNumber(i);
        //     }
        //   }

        // console.log(changes.data.currentValue);
        

        this.lineChartData[0].data = changes.data.currentValue;


        if (this.lineChartData[0].data) {
            const labels = [];

            for (let index = 0; index < this.lineChartData[0]?.data?.length; index++) {
                labels.push(index.toString());
            }

            this.lineChartLabels = labels;
            const last = parseInt(labels[labels.length - 1]);
            const ticks = (Math.ceil(last / 100) * 100) / 100;
            this.maxXAxisTicks = ticks;
        }



        // this.changeDetectorRef.detectChanges();
        //   this.chart.update();




        // console.log(changes);

        // this.lineChartData = [{
        //     data: changes.data.currentValue,
        //     label: 'Crude oil prices'
        // }]

    }
}
