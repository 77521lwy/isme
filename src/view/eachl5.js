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
                trigger: 'item'
            },
            legend: {
                bottom: '0%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    data: [
                        {value: 0, name: '促销活动'},
                        {value: 0, name: '搜索引擎'},
                        {value: 0, name: '广告'},
                        {value: 0, name: '转介绍'},
                        {value: 0, name: '线上注册'},
                        {value: 0, name: '线上询价'},
                        {value: 0, name: '预约上门'},
                        {value: 0, name: '陌拜'},
                        {value: 0, name: '招商资源'},
                        {value: 0, name: '公司资源'},
                        {value: 0, name: '展会资源'},
                        {value: 0, name: '个人资源'},
                        {value: 0, name: '电话咨询'},
                        {value: 0, name: '邮件咨询'},
                    ]
                },
            ]
        };
        option && myChart.setOption(option);
    }
    render(){
        return (
            <div id="main" style={{ width: 1170, height: 450 }}></div>
        );
    }
}
export default EchartsTest