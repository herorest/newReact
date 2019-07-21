var Event = {
    checkBrowser:function(){
        var ua = navigator.userAgent.toLowerCase();
        var ba = [
            {'key':'chrome','name':'chrome'},
            {'key':'msie 6.0','name':'ie6'},
            {'key':'msie 7.0','name':'ie7'},
            {'key':'msie 8.0','name':'ie8'},
            {'key':'msie 9.0','name':'ie9'},
            {'key':'msie 10.0','name':'ie10'},
            {'key':'IE 11.0','name':'ie11'},
            {'key':'rv:11.0','name':'ie11'},
            {'key':'msie 12.0','name':'ie12'},
            {'key':'rv:12.0','name':'ie12'},
            {'key':'mobile','name':'mobile'},
            {'key':'phone','name':'mobile'},
            {'key':'mac os x','name':'mac'}
        ];
        var bname = '';
        for(var i=0;i<ba.length;i++){
            if(ua.indexOf(ba[i].key) > -1){
                bname = ba[i].name;
                break;
            }
        }
        var ie67 = bname == 'ie6' || bname == 'ie7';
        var ie68 = bname == 'ie6' || bname == 'ie7' || bname == 'ie8';
        var lowie10 = ie67 || bname == 'ie8' || bname == 'ie9';
        var isie = lowie10 || bname == 'ie10'|| bname == 'ie11' || bname == 'ie12';
        var mobile = bname == 'mobile';
        this.mobile = mobile;
        return {name:bname,ie67:ie67,lowie10:lowie10,mobile:mobile,isie:isie};
    },
    touchtype : function(type){
        switch(type){
            case 'start' : return this.mobile ? "touchstart" : "mousedown";
            case 'move' : return this.mobile ? "touchmove" : "mousemove";
            case 'end' : return this.mobile ? "touchend" : "mouseup";
            default : return type;
        }
    },
    addEvent:function(elm, evType, fn, check){
        var _self = this;
        if(elm){
            var callback  = fn;
            evType = this.touchtype(evType);
            if(check){
                this.addEvent(elm,'start',function(){
                    _self.currentTarget = elm;
                });
                callback = function(e){
                    if(_self.currentTarget == elm){
                        fn.call(_self,e);
                    }
                };
            }

            if (elm.addEventListener) {
                elm.addEventListener(evType, callback, false);
                return true;
            }else if (elm.attachEvent) {
                var r = elm.attachEvent('on' + evType, callback);
                return r;
            }else {
                elm['on' + evType] = callback;
            }
        }
    },
    orientation:function(){
        if(this.mobile){
            var orient = function(){
                switch(window.orientation) {
                　　case 0:
                　　case 180:
                        window.location.reload(false);
                        break;
                }
            };
            window.addEventListener('orientationchange', orient, false);
        }
    },
    currentTarget:null
}

this.browser = Event.checkBrowser();
