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
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['管理员', '管理员', '管理员', '管理员', '管理员', '管理员','管理员的梦','萤火虫','赵盼','赵薇','郭占斌','金文','阿萨德']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [0, 0, 0, 0, 0, 0]
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