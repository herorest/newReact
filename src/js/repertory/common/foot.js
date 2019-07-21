import React from 'react';

import '../../../css/footer.css';

var footCom = React.createClass({
    shouldComponentUpdate:function(){
        return false;
    },
    render: function() {
        return (
            <div className="footer">
                <span>©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved.</span>
                <a href="http://www.miitbeian.gov.cn/" target="_blank">备案号: 粤ICP备 13003602号-4</a>
                <a href="http://www2.res.meizu.com/zh_cn/images/common/icp2.jpg" target="_blank">经营许可证编号: 粤B2-20130198</a>
                <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg" target="_blank">营业执照</a>
            </div>
        )
    }
});
module.exports = footCom;
