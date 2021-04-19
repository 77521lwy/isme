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
                bottom: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                bottom: 'bottom',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 0, name: '打电话    '},
                        {value: 0, name: '发邮件'},
                        {value: 0, name: '发短信'},
                        {value: 0, name: '见面拜访'},
                        {value: 0, name: '活动'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        option && myChart.setOption(option);
    }
    render() {
        return (
            <div id="main" style={{ width: 1032, height: 400 }}></div>
        );
    }
}


export default EchartsTest;