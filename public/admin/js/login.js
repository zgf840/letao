$(function(){

    $('form').bootstrapValidator({
        feedbackIcons: {
            valid:'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating:'glyphicon glyphicon-refresh'
        },
        fields:{
            username: {
                validators: {
                    notEmpty: {
                        message:'用户名不能为空'
                    },
                    stringLength: {
                        min:3,
                        max:8,
                        message:'用户名长度必须在3-8位之间'
                    },
                    callback: {
                        message:'用户名不存在'
                    }
                }

            },
            password: {
                validators: {
                    notEmpty: {
                        message:'密码不能为空'
                    },
                    stringLength: {
                        min:6,
                        max:18,
                        message:'密码长度必须在6-18位之间'
                    },
                    callback: {
                        message:'密码错误'
                    }
                }
            }
        }



    })

    $('form').on('success.form.bv',function(e){
        e.preventDefault();
        // console.log(123);
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            datatype:'json',
            success: function(info){
                console.log(info);

                if(info.error==1000) {
                    $('form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
                }
                if(info.error==1001) {
                    $('form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
                }
                if(info.success) {
                    location.href='index.html';
                }
                
            }
        })

        
    })
    $('[type=reset]').click(function(){
       $('form').data('bootstrapValidator').resetForm(true);
    })




})