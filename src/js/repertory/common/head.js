import React from 'react';
import reqwest from 'reqwest';
import Notification from './notification/index.jsx';
import LogoCloudSvg from './LogoCloudSvg';
import LogoFlymeSvg from './LogoFlymeSvg';
import Interface from './interface';

import { Menu,Icon,Dropdown  } from 'antd';
import Select from './select/index.jsx';

import '../../../css/public.css';
import '../../../css/animate.css';
import '../../../css/header.css';
import '../../../css/modify.css';

var headCom = React.createClass({
    getInitialState: function() {
        return {
            login: false,
            icon: "/images/biguserhead.png",
            order_number: 0
        };
    },
    shouldComponentUpdate:function(nextProps, nextState) {
        return false;
    },
    getData: function() {

    },
    onClickHandle:function(k){
        console.log(k);
    },
    imgError:function(){
        let pic = this.refs.pic;
        let src = this.refs.pic.getAttribute('src');
        if(src.indexOf('biguserhead') < 0){
            this.refs.pic.setAttribute('src','/images/biguserhead.png');
        }
    },
    render: function() {
        return (
            <div className="header clearfix">
                <a href="https://cloud.flyme.cn/" className="logo">
                    <svg className="icon-logo">
                        <switch>
                            <use xlinkHref="#iconLogo"></use>
                        </switch>
                    </svg>
                </a>
                <a href="javascript:void(0);" className="logom">
                    <svg className="icon-logo">
                        <use xlinkHref="#iconFlymeLogo"></use>
                    </svg>
                </a>
                <a href="javascript:void(0);" className="menu" id="menu"><span></span></a>
                <div id="users" className="users">
                    <Select click={this.onClickHandle} data={Interface.userDropdown} trigger={['hover']}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">
                            <img src={this.state.icon} className="pic" onError={this.imgError} ref="pic" />
                            <span className="username" id="username">请稍候...</span>
                            <div className="arrow"></div>
                        </a>
                    </Select>
                </div>
                <div className="faq-entry" id="faqEntry">
                    <i></i>
                    <span>常见问题</span>
                </div>
                <div className="back"></div>
                <LogoCloudSvg />
                <LogoFlymeSvg />
            </div>
        )
    },
    componentDidMount:function(){

    }
});
module.exports = headCom;
