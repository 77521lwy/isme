import React, { Component } from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount(){
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            title: {
                top: 'bottom'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                top: 'center',
            },
            series: [
                {
                    name: '金字塔',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '15%',
                    top: '20%',
                    sort: 'ascending',
                    funnelAlign: 'left',
                    center: ['75%', '75%'],
                    data: [
                        {value: 0, name: '验证客户'},
                        {value: 0, name: '需求分析'},
                        {value: 0, name: '方案/报价'},
                        {value: 0, name: '谈判审核'}
                    ]
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