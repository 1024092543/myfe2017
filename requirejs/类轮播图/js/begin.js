/**
 * Created by SAMSUNG on 2017/2/14.
 */
require.config({
    paths : {
        "jquery" : "jquery-1.12.4"
    }
});
define(['jquery'], function ($) {
    function Begin(){
        this.defaultSettings = {
            selecter : "body",
            imgs : [],
            buttonStyle: "circle",
            arrowPos : "bottom",
            speed : 500
        };
        this.container = $('<div class="lunbo-container"></div>');
        this.imgs = $('<img class="lunbo"/>');
        // this.tab = $('<ul class="lunbo-ul"></ul>');
        // this.arrows = $('<div class="lunbo-arrow"></div>');
        this.prev = $('<span class="lunbo-prev">&lt;</span>');
        this.next = $('<span class="lunbo-next">&gt;</span>');
    }
    Begin.prototype.action = function(options){
        $.extend(this.defaultSettings, options);
        this.img=new Image();
        this.arrow.append(this.prev).append(this.next);
        for(var i=0 ;i<this.defaultSettings.imgs.length ;i++){
            this.img.src="./img/"+ i+".jpg";
        }
        for(var j=1 ;j<5 ;j++){
            //this.li.html(j);
        }
        this.ul.append(this.li);
        this.contain.append(this.oImg);
        this.container.css({margin : this.defaultSettings.top}).append(this.contain).append(this.ul).append(this.arrow);
        $(document.body).append(this.container);
    };
    var oContainer = document.getElementsByClassName('lunbo-container');
    var aImg = document.getElementsByTagName('img');
    var aLi = document.getElementsByTagName('li');
    var oPrev = document.getElementsByClassName('lunbo-prev');
    var oNext = document.getElementsByClassName('lunbo-next');

    var iNow = 0;

    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            changeImg(this.index);
        };
    }
    function changeImg(iN){
        for(i=0; i<aLi.length; i++){
            aImg[i].className = '';
            aLi[i].className = '';
//            console.log(aLi[i]);
        }
        aImg[iN].className = 'select';
        aLi[iN].className = 'select';
    }

    oPrev.onclick = function () {
        iNow --;
        if(iNow == -1){iNow = aLi.length - 1;}
        changeImg(iNow);
    };

    oNext.onclick = function () {
        iNow++;
//        console.log(iNow);
        if (iNow == 4) {
            iNow = 0;
        }
        changeImg(iNow);
    };
    var timer;
    function run(){
        timer = self.setInterval(function(){
            oNext.onclick();
        },1500);
    }
    run();
    oContainer.onmouseover = function(){
        clearInterval(timer);
    };
    oContainer.onmouseout = function(){
        run();
    };
    return Begin;
});