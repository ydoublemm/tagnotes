import React, { Component } from 'react';


import Responsive from 'react-responsive';


import { Layout,Card } from 'antd';

import './assests/css/header.css'

import ContentGrid from './components/common/ContentGrid'



const Desktop = props => <Responsive {...props} minWidth={992} />;// >992
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />; //768-991
const Mobile = props => <Responsive {...props} maxWidth={767} />; // <767





const { Header, Content, Footer } = Layout;



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }






  render() {
    return (
      <div className="App">

         {/* <Desktop>
*/}
          <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:'#fff'  }}>
                  <div style={{paddingLeft:'10%'}}><img src={require('./assests/images/tag.png')}/> TagNotes</div>
              </Header>

              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>

                      <ContentGrid/>

                  </div>
              </Content>


              <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2018 Created by Ant UED
              </Footer>
          </Layout>


        {/*  </Desktop>
          <Tablet>
              768-991
          </Tablet>
          <Mobile>
              767
          </Mobile>*/}

      </div>
    );
  }
}

export default App;
