function init(){

  // コメント欄を右側に挿入する
  var iframe = document.createElement('iframe'); 
  iframe.className = "live_chat_side_bar"
  iframe.style.backgroundColor = "white"
  iframe.style.height = "100%";
  iframe.style.width = "0px";
  iframe.style.position = "fixed";
  iframe.style.top = "0px";
  iframe.style.right = "0px";
  iframe.style.zIndex = "9000000000000000000";
  iframe.src = "https://www.youtube.com/live_chat?is_popout=1&v=WBfbkPTqUtU"
  document.body.appendChild(iframe);

  // TODO: ショートカットキーで表示切り替えをしているが、不便すぎる
  document.body.addEventListener('keydown', function(e) {
    if( e.code != "Digit1" ) return;

    if( document.querySelector(".live_chat_side_bar").style.width == "0px" ) { // フラグは別に持つべきでは？
      // 重ならないように動画のサイズを変える
      // TODO: 現状まともに動くのが僕のディスプレイのサイズだけです
      document.querySelector("#movie_player > div.html5-video-container > video").style.width = "1561px"
      document.querySelector("#movie_player").style.width = "1561px"
      document.querySelector("#movie_player > div.ytp-chrome-bottom").style.width = "cslc(1561pxpx - 24px - 24px)"

      // コメント欄を表示する
      // TODO: コメント欄の横幅が固定になっとるので可変にすべき
      document.querySelector(".live_chat_side_bar").style.width = "360px";
    } else {
      // 動画サイズをもとに戻す
      document.querySelector("#movie_player > div.html5-video-container > video").style.width = "100%"
      document.querySelector("#movie_player").style.width = "100%"
      document.querySelector("#movie_player > div.ytp-chrome-bottom").style.width = "calc(100% - 24px - 24px)"

      // コメント欄を隠す
      // TODO: この隠し方あまりにもダサすぎでは？
      document.querySelector(".live_chat_side_bar").style.width = "0px"
    }
  });
}

init()
