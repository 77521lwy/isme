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
                subtext: '跟进客户数'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['跟进客户数', '更进次数']
            },
            toolbox: {
                show: true,
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '跟进客户数',
                    type: 'bar',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0],
                },
                {
                    name: '更进次数',
                    type: 'bar',
                    data:  [0,0,0,1,0,0,0,0,0,0,0,0,0],
                   
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