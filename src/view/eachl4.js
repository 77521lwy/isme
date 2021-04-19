import React, { Component } from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount(){
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var data = [{
            name: 'IT/通讯/电子/互联网',
            value: 0
        }, {
            name: '金融业',
            value: 0
        }, {
            name: '房地产',
            value: 0
        }, {
            name: '商业服务',
            value: 0
        }, {
            name: '贸易',
            value: 0
        }, {
            name: '生产',
            value: 0
        }, {
            name: '运输/物流',
            value: 0
        },
        {
            name: '服务业',
            value: 0
        },
        {
            name: '文化传媒',
            value: 0
        },
        {
            name: '政府',
            value: 0
        },
    ];
        var option2;
        option2 = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    data: [
                        {value: 0, name: 'A(重点客户)'},
                        {value: 0, name: 'B(普通客户)'},
                        {value: 0, name: 'C(非优先客户)'},
                    ]
                },
            ]
        };
        option2 && myChart.setOption(option2);
    }
    render(){
        return (
            <div id="main" style={{ width: 516, height: 400 }}></div>
        );
    }
}
export default EchartsTest