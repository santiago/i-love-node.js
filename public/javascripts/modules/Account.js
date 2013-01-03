define(function() {
    return function() {
        $(".form-signin button.signup").click(function(e) {
            e.preventDefault();
            
            var data = {
                email: $(".form-signin").find('input.email').val(),
                password: $(".form-signin").find('input.password').val(),
                repassword: $(".form-signin").find('input.repassword').val()
            }
            
            console.log(data)
            
            if(data.password != data.repassword) {
                alert("Passwords do not match");
                return false;
            }
            
            $.post('/account', data, function(d) {
                console.log(d);
            });
        });
    }
})