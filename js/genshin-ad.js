;(function () {
    if(localStorage.getItem('noPromo') == 'true'){
        return false;
    }
    const FileBaseURL = "https://file-cdn.qmcmc.cn/assets/open/fxgzedu.cn/img/";
    const ADLink = "https://ys.mihoyo.com/?utm_source=ad_fxgzedu&utm_medium=cpc&utm_campaign=paimon_promo";

    const CloseSVG = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1632201977320" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2410" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C229.312 0 0 229.312 0 512s229.312 512 512 512 512-229.312 512-512S794.688 0 512 0z m210.912 713.28c-10.496 10.528-29.76 10.528-40.256 0l-161.024-161.024-161.056 161.056c-10.496 10.496-29.76 10.496-40.256 0-10.496-10.528-10.496-29.76 0-40.288L481.376 512l-161.056-161.024c-10.496-10.528-10.496-29.76 0-40.288 10.496-10.496 29.76-10.496 40.256 0l161.056 160.192 160.16-160.192c11.392-10.496 29.76-10.496 40.256 0 10.496 10.528 10.496 29.76 0 40.288L561.92 512l161.024 161.024c10.528 10.528 10.528 29.76 0 40.288z" fill="#76767B" p-id="2411"></path></svg>';

    let ys = document.createElement('div');
    ys.className = "genshin-pro";
    
    ys.innerHTML += '<div title="关闭推广" id="genshin-close" style="position: relative; left: -16px;">'+ CloseSVG +'</div><img id="genshin-pic" src="'+ FileBaseURL +'Genshin_AD.webp" height="170px">';

    ys.setAttribute('style', 'position:fixed; right:0; bottom:0; cursor:pointer; opacity:85%; z-index:100;');

    if(screen.width <= 680){
        ys.setAttribute('style', 'display:none');

    }

    ys.setAttribute("title", "原神：踏入充满冒险的神奇世界");

    document.body.appendChild(ys)

    ys_pic = document.getElementById("genshin-pic")
    ys_pic.onclick = function(){
        window.open(ADLink)
    }
    document.getElementById("genshin-close").onclick = function () {
        localStorage.setItem('noPromo', 'true');
        ys.remove()
    }
    console.log(ys)
})();