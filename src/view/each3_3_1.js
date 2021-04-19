import React, { Component } from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        console.log(this.props)
        
        option = {
            title: {
                subtext: '(个)'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['当月合同数量', '上月合同数量', '去年当月合同数量', '环比增长', '同比增长']
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
                data: ['0','1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月','0']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '当月合同数量',
                    type: 'line',
                    stack: '总量',
                    data: [,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    name: '上月合同数量',
                    type: 'line',
                    stack: '总量',
                    data: [,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    name: '去年当月合同数量',
                    type: 'line',
                    stack: '总量',
                    data: [,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    name: '环比增长',
                    type: 'line',
                    stack: '总量',
                    data: [,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                    name: '同比增长',
                    type: 'line',
                    stack: '总量',
                    data: [,0,0,0,0,0,0,0,0,0,0,0,0]
                }
            ]
        };
        option && myChart.setOption(option);
    }
    render() {
        return (
            <div id="main" style={{ width: 1032, height: 400 }}></div>
        );
    }
}


export default EchartsTest;