jQuery(document).ready(function () {
    var pageNum = parseInt(ajaxlp.startPage)+1;
    var max = parseInt(ajaxlp.maxPage);
    var next = ajaxlp.nextLink;
    if(pageNum<=max) {
        jQuery('.innerWrap').append('<div class="col-md-12 remPad lmPlaceholder-' + pageNum + '"></div>');
        jQuery('.dirwrap').html('<p id="loadmore"><a href="#">Load More Posts</a></p>');
    }
    jQuery('#loadmore a').click(function () {
        if(pageNum<=max){
            jQuery(this).text('Loading');
            jQuery('.lmPlaceholder-'+pageNum).load(next+' .post',function () {
                sideHeight();
                pageNum++;
                next = next.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
                jQuery('#loadmore').before('<div class="lmPlaceholder-"' + pageNum + '"></div>');
                if(pageNum<=max){
                    jQuery('#loadmore a').text("Load more posts");
                }else{
                    jQuery('#loadmore a').text("No more posts available");
                }

            });
        }else{
            jQuery('#loadmore a').append('.');
        }
        return false;
    });
});
