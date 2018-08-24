import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{

    handleScrollTop(){
        window.scroll(0, 0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        alt=''
                        src= "https://upload.jianshu.io/admin_banners/web_images/4405/fecf3937f294094b7e9b91db8caaa3340a310c9a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollShow);
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action =  actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        };
    }
});

export default connect(mapState, mapDispatch)(Home);