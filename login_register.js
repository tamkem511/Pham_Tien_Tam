// hiện thị mật khẩu
isBool = true;
function clickEye() { 
    var password = document.getElementById("password");
    if(isBool){
        password.setAttribute("type","text");
        isBool = false;
    }else{
    password.setAttribute("type","password");
    isBool=true;
}
       
}

//Kiểm tra độ chính xác

var accountApi = ' http://localhost:3000/account';
var productsApi = ' http://localhost:3000/products';


function clickLogin(e) {

    var Password = document.getElementById('password').value;
    var phoneNumber = document.getElementById('phone_number').value;
    fetch(accountApi)
    .then(function(response){
        return response.json();
    })
    .then(function(accounts){
             var examPhone =  accounts.filter(function(exam){
                   return exam.phone === phoneNumber
               })
           examPhone.map(function(exam2){
               if(Password == exam2.password){
                document.getElementById("errorLogin").innerHTML=""
                document.getElementById("dangnhap").type = "submit" ;
               }
               else{
                   document.getElementById("errorLogin").innerHTML="Tài Khoản Hoặc Mật Khẩu Không Chính Xác";
                //    e.stopPropagation() ;
               }
           })     
        //    return accounts;     
    })
    // .then(function(accounts){
    //     var exam = accounts.find(function(account) {
    //         return account.phone === phoneNumber;
    //     })
    //     console.log(exam.name)
    //     document.getElementById("nameUser").value = exam.name;
    // })
}

//Thêm tài khoản mới đăng kí
function register(e) {
   
    var nameUser = document.getElementById("name_user").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var Password = document.getElementById("password").value;
    var errorName = document.getElementById("errorName");
    var errorPhone = document.getElementById("errorPhone");
    var errorPassword = document.getElementById("errorPassword");
    var examPhone = /[0-9]{10}/;
    var accentedCharacters = "àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
    var examHoTen = /^[A-Z ][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]/;
    var examMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var promise = new Promise(function(resolve, reject) {
        resolve();
    })
    .then(function(){
        if(!examHoTen.test(nameUser)){
             errorName.innerHTML = "Họ Tên Bắt Đầu Bằng In Hoa Và Cách Nhau Bởi Dấu Phẩy";
        }
        else{
            errorName.innerHTML = "";
            return new Promise(function(resolve, reject){
                resolve();
            })
        }
    })
    .then(function(){
        if(!examPhone.test(phoneNumber)){
                    errorPhone.innerHTML = "Số Điện Thoại Không Hợp Lệ"
            }
        else{
            errorPhone.innerHTML="";
            return new Promise(function(resolve, reject){
                resolve();
            })
        }
    })
    .then(function(){
        if(!examMatKhau.test(Password)){
            errorPassword.innerHTML="Mật Khẩu Phải Chứa Kí Tự Hoa ,Số và kí tự đặc biệt"
         }
         else{
            errorPassword.innerHTML="";
         }
    })
    //Sử dụng fetch để tạo tài khoản
    if(examHoTen.test(nameUser) && examPhone.test(phoneNumber) && examMatKhau.test(Password)){
        var dataPost = {
            name:nameUser,
            phone:phoneNumber,
            password:Password
        }
            var option = {
                
                method: 'POST', // thêm mới thì dùng post
                headers: {
                        'Content-Type': 'application/json',
                        },
                body: JSON.stringify(dataPost),
            }
            fetch(accountApi,option)
            .then(function(response) {
                return response.json();
            })
    }

}

                 // Phần sửa tên hiển thị
// Lấy tên từ account api hiển thị
// 



function handleNameRender() {
    var idUser = document.getElementById("idUser").value;
    var newName = document.getElementById("newName").value;
    var examHoTen = /^[A-Z ][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]/;
    if(!examHoTen.test(newName)){
        document.getElementById("errorNewName").innerHTML="Tên Không Đúng Định Dạng";
    }
    else{
        var dataPost = {
            id:idUser,
            name:newName
        }
        var option = {
            method: 'PATCH', // sửa thì dùng phương thức PATCH
            headers: {
                    'Content-Type': 'application/json',
                    },
            body: JSON.stringify(dataPost)
                }
        fetch(accountApi + '/' + idUser,option)
        .then(function(response) {
            return response.json();
        })
    
    }
    
}

function confirmNameChange() {
    handleNameRender();
}

// Thay Đổi Mật Khẩu

function getOldPassword() {
    fetch(accountApi)
    .then(function(response){
        return response.json();
    })
    .then(function(accounts){
        var examOlePass = accounts.find(function(account){
            return account.id === 3; 
        })
        var oldPassword = document.getElementById("oldPassword").value;
        if(oldPassword != examOlePass.password){
            document.getElementById("errorOldPassword").innerHTML = "Mật Khẩu Không Chính Xác";
        } 
        else{
            handlePasswordRender();
            document.getElementById("errorOldPassword").innerHTML = "";
        }
    })
}


function handlePasswordRender() {
    var idUser = document.getElementById("idUser").value;
    var newPass = document.getElementById("newPassword").value;
    var examMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!examMatKhau.test(newPass)){
        document.getElementById("errorNewPassword").innerHTML = "Mật Khẩu Chưa Đúng Định Dạng";

    }
     if(examMatKhau.test(newPass)){
        var dataPost = {
            id:idUser,
            password:newPass
        }
        var option = {
            method: 'PATCH', // sửa thì dùng phương thức PATCH
            headers: {
                    'Content-Type': 'application/json',
                    },
            body: JSON.stringify(dataPost)
                }
        fetch(accountApi + '/' + idUser,option)
        .then(function(response) {
            return response.json();
        })
    
    }
}

function confirmPasswordChange() {
    // handlePasswordRender();
    getOldPassword();
}



           
            