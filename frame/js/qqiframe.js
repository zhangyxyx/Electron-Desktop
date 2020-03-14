$(function(){
    renderlist()
    $(".content_left").off('click','.listevery').on('click','.listevery',function(){
        var id=$(this).attr('data-id')
        renderContent(id)
    })
})
//左侧
function renderlist(){
    var data=[
        {'id':'id1','name':'qq好友1','logo':'','lastcontent':'在干嘛？','lasttime':'202002021223','allnum':'34'},
        {'id':'id2','name':'qq好友3','logo':'','lastcontent':'在干嘛？','lasttime':'202002021223','allnum':'34'},
        {'id':'id3','name':'qq好友4','logo':'','lastcontent':'在干嘛？','lasttime':'202002021223','allnum':'34'},
        {'id':'id4','name':'qq好友5','logo':'','lastcontent':'在干嘛？','lasttime':'202002021223','allnum':'34'},
        
    ]
    for(var i=0;i<data.length;i++){
        var html=`<div class="listevery" data-id="${data[i]['id']}">
            <div class="every_left"></div>
            <div class="every_content">
                <p>${data[i]['name']}</p>
                <p>${data[i]['lastcontent']}</p>
            </div>
            <div class="every_right">
                <p>${data[i]['lasttime']}</p>
                <p>${data[i]['allnum']}</p>
            </div>
        </div>`
        $(".content_left").append(html)
    }
}
//右侧
function renderContent(id){
    $(".content_right").empty()
    var data={
        'id1':{'name':'qq好友1',content:[{}]},
        'id2':{'name':'qq好友2',content:[{}]},
        'id3':{'name':'qq好友3',content:[{}]},
        'id4':{'name':'qq好友4',content:[{}]},
    }
    var html=`<div class="qqcontent">
        <div class="qqcontentheader">${data[id]['name']}</div>
        <div class="qqcontenttop">11111</div>
        <div class="qqcontentbottom">2222</div>
    </div>`
    $(".content_right").html(html)
}