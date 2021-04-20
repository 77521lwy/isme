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
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'] 
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '合同金额',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0]
                },
                {
                    name: '目标',
                    type: 'line',
                    stack: '总量',
                    data: [0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0]
                },
                {
                    name: '完成率',
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