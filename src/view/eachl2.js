import React, { Component } from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount(){
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['迎单转化率','商机总数', '赢单商机数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12'] 
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '赢单转化率',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0]
                },
                {
                    name: '商机总数',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0]
                },
                {
                    name: '赢单商机数',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0]
                }
            ]
        };
        option && myChart.setOption(option);
    }
    render(){
        return (
            <div id="main" style={{ width: 1032, height: 400 }}></div>
        );
    }
}
export default EchartsTest