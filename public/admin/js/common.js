// $(document).ajaxStart(function () {
//     console.log("ajaxStart在开始一个ajax请求时触发");
    
//     NProgress.start();
        
      
//   });

//   $(document).ajaxStart(function () {
//     console.log("ajaxStop结束一个ajax请求时触发");
//    setTimeout(function(){
//     NProgress.done();
//    },2000)
//   });

//侧边栏菜单显示与隐藏
$('.icon_menus').click(function(){
    $('body').toggleClass('active');
    $('.lt_slide').toggleClass('active');

})

//分类管理显示与隐藏

$('.second').prev().on('click',function(){
    // console.log(000);
    
    $(this).next().slideToggle();
})


//点击退出按钮 显示模态框

$('.icon_logout').on('click',function(){
    
    $('#logout_model').modal('show');
})

$('.btn_exit').on('click',function(){
    $.ajax({
        type:'get',
        url:'/employee/employeeLogout',
        success:function(info){
            console.log(info);
            location.href='login.html';
            
        }
    })
})
    

