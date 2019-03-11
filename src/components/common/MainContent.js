import React, { Component } from 'react';

import { Layout,Card ,Button ,} from 'antd';

import ContentGrid from './ContentGrid'


const { Header, Content, Footer } = Layout;

class MainContent extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout style={{ background:'#fff'}}>
                <Header style={{  zIndex: 1, width: '100%',backgroundColor:'#fff'  }}>
                    <div style={{paddingLeft:'10%',width: '50%',float:'left'}}><img src={require('../../assests/images/tag.png')}/> TagNotes</div>
                    <div style={{paddingLeft:'90%'}}><Button shape="circle" icon="search" size='small' type='danger'/></div>
                </Header>

                <Content className='content-warp' style={{ marginTop: 64  ,background:'#fff'}}>
                    <div style={{  padding: 24, minHeight: 380 ,background:'#fff'}}>

                        <ContentGrid/>

                    </div>
                </Content>


            </Layout>
        )
    }

}

export default MainContent;