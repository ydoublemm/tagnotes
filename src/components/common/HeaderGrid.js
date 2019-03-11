import React from 'react'

import {
    Row, Col
} from 'antd';

import ContentCard from './ContentCard'

//栅格布局
class ContentGrid extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }



    render() {
        return (
                <div style={{float:'left'}}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                        <Col xs={{ span: 24 }}
                             sm={{ span: 12}}
                             lg={{ span: 8 }}
                             md={{ span: 8}}
                             xl={{ span: 6}}
                             xxl={{ span: 6 }}
                        >

                        </Col>


                    </Row>
                </div>
        );
    }
}

/*

    xs	<576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-
    sm	≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-
    md	≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-
    lg	≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-
    xl	≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-
    xxl	≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象	number|object	-

* */

export default ContentGrid;