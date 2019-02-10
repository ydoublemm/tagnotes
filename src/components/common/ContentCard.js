import React, { Component } from 'react';
import { Card } from 'antd';


class ContentCard extends Component{

      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }


      render(){
          return (
              <Card
                  size="small"
                  title="Small size card"
                  hoverable="true"
                  extra={<a href="#">更多</a>}
                  style={{ width: '100%',height:'120px' }}
              >
                  <p>Card content</p>
                  <p>Card content</p>
              </Card>
          )
      }
}

export default ContentCard;