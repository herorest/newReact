const $ = require("jquery");

require("../css/common.css");
require("../../src/css/public.css");
require("../css/fullPage.css");
require("../css/intro.css");

var IndexPage = function () {
	if (browser.ie67) {
	    alert('你的浏览器不支持，我们推荐你使用chrome浏览器进行便签操作');
	    return;
	}
	this.init();
};

IndexPage.prototype = {
    init: function () {
		this.entry();
    },
	entry:function(){
		var $contain = $('.container');
		if(browser.lowie10){
			$contain.fadeTo(300,1);
		}else{
			$contain.css('opacity',1);
			setTimeout(function(){
				$contain.removeClass('transall');
			},320);
		}
        this.loadEjsTemple();
		this.bind();
        this.footBind();
		Event.orientation();
	},
	bind: function(){
		var self = this;
		if(browser.ie67){
			$(window).on('scroll', function (e) {
                var pYoffset = document.documentElement.scrollTop || document.body.scrollTop;
            });
		}else{
			if(browser.mobile){
				$('.header').appendTo('.container');
				$('.begin').removeClass('fp-auto-height');
				$('.copyrightWrap').appendTo('.begin');
				$('.section').addClass('fp-section fp-table').wrapInner('<div class="fp-tableCell"></div>');
				var height = $(window).height() - $('.header').height();
				var mySwiper = new Swiper('.wrapper',{
					direction : 'vertical',
					wrapperClass : 'fullpage',
					slideClass : 'section',
					height: height,
					resistanceRatio : 0,
					onInit:function(swiper){
						$.each($('.lazy'),function(){
							var url = $(this).attr('data-url');
							$(this).attr('src',url).removeClass('opacity0');
						});
					}
				});
			}else{
				$('#fullpage').fullpage({
					'anchors': ['intro', 'data', 'safe', 'quick', 'how', 'begin'],
					'css3': true,
					'navigation': true,
					'navigationPosition': 'right',
					'navigationTooltips': ['介绍', '数据管理', '防丢机制', '数据迁移', '如何使用', '开始使用'],
					'ease': 'ease-in-out',
					'autoScrolling':  this.browser != 'mobile',
					'scrollingSpeed': 500,
					'keyboardScrolling': true,
					'afterLoad':function(key){
						var currT = $('.' + key);
						var isVisible = currT.find('.lazy').hasClass('opacity0');
						var target;
						if(isVisible){
							target = currT;
							self.loadPic(target);
						}
						target = currT.next();
						self.loadPic(target);
                        target = currT.prev();
                        self.loadPic(target);
					}
				});
			}
		}

		Event.addEvent($('#service-online')[0],'end',function(){
			window.open('http://live-i.meizu.com/live800/chatClient/chatbox.jsp?companyID=8957&configID=4&enterurl=&pagereferrer=&info=&k=1','_blank','height=575,width=1150,fullscreen=3,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no');
		},true);

		Event.addEvent($('.back-home a')[0],'end',function(){
			mySwiper.slideTo(0, 500, true);
		},true);

		this.menuChange();

        this.changeLanguage();

	},
    //处理ejs
    loadEjsTemple:function(){
        ejs.open = '{{'; ejs.close = '}}';
        $.each($('.template'),function(){
            var _this = $(this);
            var html = ejs.render(_this.html(),lanPack);
            _this.replaceWith(html);
        });
    },
    //多语言切换
    changeLanguage:function(){
        $('#globalContainer a').click(function(){
            window.location.href = window.location.origin + window.location.pathname + '?language=' + $(this).attr('lan')
        });
    },
	loadPic:function(target){
		if(target.length > 0){
			var item = target.find('.lazy');
			$.each(item,function(){
				var self = this;
				var url = $(self).attr('data-url');
				var img = new Image();
				img.onload = function(){
					$(self).attr('src',url).removeClass('opacity0');
				};
				img.src = url;
			});
		}
	},
	menuChange:function(){
		var menu = $('.menu');
		var target = $('.header ul');
		var cover = $('.cover');
		var menuShow = function(){
	        if(!target.hasClass('hover')){
	            if(!target.hasClass('hiding')){
					cover.addClass('show');
					menu.addClass('active');
	                target.removeClass('animated menuHide').addClass('animated menuShow hover showing time03');
					target.one('webkitAnimationEnd mozAnimationEnd MsAnimationEnd oanimationend animationend',function(){
						target.addClass('hiding').removeClass('showing');
					});
	            }
	        }
	    };

	    var menuHide = function(){
	        if(!target.hasClass('showing')){
				cover.removeClass('show');
				menu.removeClass('active');
	            target.removeClass('animated menuShow hover time03').addClass('animated menuHide time03');
				target.one('webkitAnimationEnd mozAnimationEnd MsAnimationEnd oanimationend animationend',function(){
					target.removeClass('hiding');
				});
	        }
	    };

		Event.addEvent(menu[0],'end',function(){
			if(!target.hasClass('hover')){
	            menuShow();
	        }
		},true);

		Event.addEvent($(document)[0],'end',function(e){
			if(
				!$(e.target).is('.header ul') &&
				$(e.target).parents('.header ul').length === 0 &&
				target.hasClass('hover')
			){
				menuHide();
			}
		});
	},
    footBind:function(){
        //微信二维码
        var $wechatPic = $('#wechatPic');
        $('#footer-weChat i').hover(function() {
        	$wechatPic.show();
        }, function() {
        	$wechatPic.hide();
        }).click(function() {
        	return false;
        });

        //语言选择
        var $globalName = $('#globalName'),
        	$globalContainer = $('#globalContainer'),
        	handle = null;
        var _globalDeal = function($o) {
        	$o.on('mouseover', function() {
        		clearTimeout(handle);
        		$globalContainer.show();
        	}).on('mouseout', function() {
        		handle = setTimeout(function() {
        			$globalContainer.hide();
        		}, 500);
        	});
        };
        _globalDeal($globalName);

    }
};

$(function () {
    var indexPage = new IndexPage();
	var deviceTypeObj = browser;
	var deviceType = deviceTypeObj.name === 'mobile' ? 'mobile' : 'pc';
	MeizuBH('action=device_type&device_type=' + deviceType);
});
