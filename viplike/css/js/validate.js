$(document).ready(function(){
                $('#submit').click(function(){
                if($('#user').val() == '')
                {
                    alert('Nhập tài khoản');
                    return false;
                }
                else if($('#pass').val() == '')
                {
                    alert('Nhập mật khẩu');
                    return false;
                }
		else if($('#captcha').val() == '')
		{
                    alert('Nhập mã xác nhận');
                    return false;
		}
		else if($('#captcha').val() != $('#captcha_number').val())
		{
                    alert('Nhập sai mã xác nhận');
                    return false;
		}
                else
                {
                    $('#submit').addClass('btn btn-info').html("<i class='fa fa-spinner fa-fw'></i> Đang xử lí..");
                    return true;
                }
        });
    });
