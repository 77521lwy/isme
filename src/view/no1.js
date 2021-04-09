import React, {  } from 'react';
import { Menu,  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;

moment.locale('zh-cn');

class App extends React.Component {
    state = {
      theme: 'dark',
      current: '1',
    };
  
    changeTheme = value => {
      this.setState({
        theme: value ? 'dark' : 'light',
      });
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      return (
        <div>
          
        </div>
      );
    }
  }
  
  

export default App