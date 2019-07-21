var model = {
    apiUrl:{
        loaduserdata: "/c/browser/index/loaduserdata",
        //远程退出
        remotelogout: "/c/browser/index/remotelogout",
        //修改设备名
        flushdevicename: "/c/browser/index/flushdevicename",
        //验证短信
		checksms:"/c/browser/index/checkSms",
        //发送短信
        sendsms:"/c/browser/index/sendchecksms",
        //验证绑定手机
        checkbind:"/c/browser/index/checkSmsBend",
		checkable: '/c/browser/contact_check/checkable',
		getMaterial: '/c/browser/contact_check/get_material',
		contactCheck: '/c/browser/contact_check/check',
		getUserDeviceList: '/c/browser/index/getuserdevicelist',
        //查询时光机时光轴
        queryTimeline: '/c/browser/tdcontact/querytdtimeline',
        //时光机查询详情
        queryTdDetail: '/c/browser/tdcontact/querytddetail',
		timeSearchContact: 'c/browser/contact/searchcontact',
        //获取短信列表
        getsmsgroups:'/c/browser/sms/getsmsgroups',
        //获取短信详情列表
        getsmsdialogs:'/c/browser/sms/getsmsdialogs',
        //删除短信
        deletesmstorecycle:'/c/browser/sms/deletesmstorecycle',
        //收藏
        updatesmsfavourite:'/c/browser/sms/updatesmsfavourite',
        //清空回收站
        cleanSMSRecycleBin:'/c/browser/recycle/cleanSMSRecycleBin',
        cleanContactRecycleBin:'/c/browser/recycle/cleanContactRecycleBin',
        cleanNoteRecycleBin:'/c/browser/recycle/cleanNoteRecycleBin',
        cleanAlbum:'/c/browser/recycle/cleanAlbum',
        //验证密码
        verify:'/c/browser/recycle/verify',
        //查询时光机时光轴
        queryTimeline: '/c/browser/tdcontact/querytdtimeline',
        // 时光机查看全部
        queryShowAll: '/c/browser/tdcontact/querytdtimeline',
        // 搜索单个联系人
        timeSearchContact: 'c/browser/contact/searchcontact',
        // 搜索联系人
        searchTimeline: 'c/browser/tdcontact/searchtdtimeline',
        // 获取搜索结果的数量
        searchTimelineCount: 'c/browser/tdcontact/searchtdtimelinecount',
        // 时光机查看详情接口：
        querytddetail: 'c/browser/tdcontact/querytddetail',
        //清空时光机密码校验
        checkPassword: '/c/browser/recycle/verify',
        //清空时光机
        cleanTimemachine: '/c/browser/tdcontact/clear',
        // 时光机恢复
        recover: '/c/browser/tdcontact/restoretd',
        // 时光机删除
        timeDelete: '/c/browser/tdcontact/deletetd',
        // 联系人列表
        searchsimplecontact: '/c/browser/contact/searchsimplecontact',
        // 获取联系人分组
        getContactGroup: '/c/browser/category/countbycategory',
        // 搜索联系人
        searchContactByContent: '/c/browser/contact/searchcontactbycontent',
        // 搜索联系人的结果条数
        searchCount: '/c/browser/contact/countbycontent',
        // 联系人详情
        searchContact: '/c/browser/contact/searchcontact',
        //获取便签列表
        getnotegroups:'/c/browser/note/getnotegroups',
        //获取便签详情
        getnote:'/c/browser/note/getnote',
        //获取便签分类
        gettags:'/c/browser/note/gettags',
        //搜索便签
        getnotebycontent:'/c/browser/note/getnotebycontent',
        //删除便签
        recyclenote:'/c/browser/note/recyclenote',
        //更新便签
        updatenote:'/c/browser/note/updatenote'
    },
    tipInfo:{
    	'endtip':'已经到达最后一页了！',
    	'del':'确定要删除吗？',
    	'offline':'确定要下线吗？',
    	'online':'确定要上线吗？',
    	'noresponse':'无可用数据！',
    	'modsuccess':'修改成功！',
    	'modfailure':'修改失败！',
    	'delsuccess':'删除成功',
    	'delfailure':'删除失败',
    	'buildleftfail':'构建左侧失败！',
    	'buildpreviewfail':'构建预览失败！',
    	'buildnodata':'缺少页面数据',
    	'checkauthfail':'获取用户身份失败',
    	'templeSaveTip':'请复制上方文本框内文本，当前仅显示编辑中的模板信息',
    	'delNotEmpty':'项目内页面数不能为零！',
    	'endmstart':'结束日期不能小于开始日期！',
    	'insertPicError':'请先选择图片！',
    	'deltip':'确定要删除本页吗？',
    	'pageTooMore':'页面数超过限制！'

    },
    errorCode:{
    	'Q_TYPE_DENIED':'上传文件类型不匹配',
    	'F_EXCEED_SIZE':'文件大小超过限制',
    	'F_DUPLICATE':'文件已存在',
    	'Q_EXCEED_NUM_LIMIT':'文件数量超出限制',
    	'Q_EXCEED_SIZE_LIMIT':'文件过大'
    },
    userDropdown:['账号信息','论坛反馈','账户退出']
};

module.exports = model;
