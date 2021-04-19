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
        var option;
        option = {
            title: [{
                left: 'center',
            }, {
                left: '16.67%',
                top: '75%',
                textAlign: 'center'
            }, {
                left: '50%',
                top: '75%',
                textAlign: 'center'
            }, {
                left: '83.33%',
                top: '75%',
                textAlign: 'center'
            }],
            series: [{
                type: 'pie',
                radius: '25%',
                center: ['50%', '50%'],
                data: data,
                label: {
                    position: 'outer',
                    alignTo: 'none',
                    bleedMargin: 5
                },
                left: 0,
                right: '66.6667%',
                top: 0,
                bottom: 0
            },  {
                type: 'pie',
                radius: '25%',
                center: ['50%', '50%'],
                data: data,
                label: {
                    position: 'outer',
                    alignTo: 'edge',
                    margin: 20
                },
                left: '66.6667%',
                right: 0,
                top: 0,
                bottom: 0
            }]
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