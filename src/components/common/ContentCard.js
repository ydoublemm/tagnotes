import React, { Component } from 'react';
import { Card } from 'antd';




class ContentCard extends Component{

      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            borderTop:'2px solid red'
        };

      }





      render(){
          let styleObj = {
              borderTop:this.state.borderTop,
              width: '100%',
              height:'120px',
              borderRadius:'4px 4px 0 0'
          }
          return (
              <Card
                      size="small"
                      title="Small size card"
                      hoverable="true"
                      bordered="true"
                      extra={<a href="#">更多</a>}
                      style={styleObj}
                  >
                      <p>Card content</p>
                      <p>Card content</p>
              </Card>
          )
      }
}

export default ContentCard;