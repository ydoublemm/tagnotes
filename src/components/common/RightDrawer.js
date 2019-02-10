import React, { Component } from 'react';
import {   Drawer, Button } from 'antd';

import Move from './Move'

/*
 * @author: ymm
 * @date: 2019/2/8 22:08
 * @param:
 * @return:
 * @Description:   右边弹出的抽屉
 */
class RightDrawer extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visible: false
        };
      }


    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

      render(){
          return (
              <div>
                  <Button type="primary" onClick={this.showDrawer}>
                      Open
                  </Button>
                  <Drawer
                      closable="true"
                      title="Basic Drawer"
                      placement="right"
                      closable={false}
                      onClose={this.onClose}
                      visible={this.state.visible}
                  >
                        <Move/>
                  </Drawer>
              </div>
          )
      }
}

export  default RightDrawer;