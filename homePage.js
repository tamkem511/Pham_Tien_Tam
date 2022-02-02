
                       // Phần tài khoản
function openAccount() {

    var formAccount =  document.getElementById("renderFromAccount");
     formAccount.innerHTML = `
     <ul id="form_account">
     <li onclick="backAccount()">
        <span><i class="fas fa-backward"></i></span>
     </li>
     <hr>
     <li onclick="changeName()">
        <i class="fas fa-signature"></i>
         <span>Thay Đổi Tên Hiển Thị</span>
     </li>
     <hr>
     <li onclick="changeAvata()">
         <i class="fas fa-images"></i>
         <span>Thay Đổi Ảnh Đại Diện</span>
     </li>
     <hr>
     <li onclick="changePass()">
         <i class="fas fa-unlock-alt"></i>
         <span>Thay Đổi Mật Khẩu</span>
     </li>
     <hr>
     <li>
         <i class="fas fa-shopping-cart"></i>
         <span onclick="openCart()">Đơn Đã Mua</span>
     </li>
     <hr>
     <li>
         <a href="giaoDien.html">
             <i class="fas fa-outdent"></i>
             <span>Đăng Xuất</span>
         </a>
     </li>
     <hr>
 </ul>
</div>
</li>
</ul>
    `
}


function backAccount() {
    var formAccount =  document.getElementById("renderFromAccount");
     formAccount.innerHTML = ""
}

// Lấy Tên
var accountApi = ' http://localhost:3000/account';
var productsApi = 'http://localhost:3000/products';
var commentsApi = ' http://localhost:3000/comments';
var chatApi = 'http://localhost:3000/chat';

// var phoneN = document.getElementById("phone_number").value;
    fetch(accountApi)
    .then(function(response){
        return response.json();
    })
    .then(function(accounts){
        var exam = accounts.find(function(account) {
            return account.phone === "0397127215";
        })
        // console.log(exam.name)
        document.getElementById("nameUser").innerHTML = exam.name;
    })

                             // Thay ĐỔi Tên
function changeName() {
    var renderFormChangeName = document.getElementById("renderFromAccount");
    renderFormChangeName.innerHTML = `
        <div id="changeNameRender">
            <div id="timesChange" onclick="timesFormChange()"><i class="fas fa-times-circle"></i></div id="timesFormChange">
            <h3>Đổi Tên Hiển Thị</h3>
            <div class="changeNameRender_input">
            <label >ID: </label><br>
            <input type="text" value="3" id="idUser">
            <br><br>
            <label >Tên Mới : </label><br>
            <input type="text" id="newName" placeholder="Tên Thay Đổi">
            <span id="errorNewName"></span>
            <br><br>
            <button type="" onclick="confirmNameChange()">Xác Nhận</button>
        </div>
    `
}
// Xóa form thay đổi tên
function timesFormChange() {
    var renderFormChangeName = document.getElementById("renderFromAccount");
    renderFormChangeName.innerHTML = ""
}

// Thay Đổi Ảnh Đại Diện
// Thay ĐỔi Ảnh Đại Diện
function chooseFile(fileInput) {
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            document.querySelector('#avata').setAttribute('src',e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}
function changeAvata() {
    var renderFormChangeName = document.getElementById("renderFromAccount");
    renderFormChangeName.innerHTML = `
    <div id="changeAvataRender">
            <div id="timesChange" onclick="timesFormChange()"><i class="fas fa-times-circle"></i></div id="timesFormChange">
                <h3>Thay Đổi Avata</h3>
                <div class="changeAvataRender_input">
                <label >Chọn File :  </label><br>
                <input type="file" id="valueFile" onchange="chooseFile(this)"
                accept="image/gif, image/jpeg, image/png"
                >
    </div>
    `
}

// thay đổi mật khẩu
function changePass() {
    var renderFormChangeName = document.getElementById("renderFromAccount");
    renderFormChangeName.innerHTML = `
    <div id="changePassword">
            <div id="timesChange" onclick="timesFormChange()"><i class="fas fa-times-circle"></i></div id="timesFormChange">
            <h3>Đổi Tên Hiển Thị</h3>
            <div class="changePassword_render">
            <label >ID: </label><br>
            <input type="text" value="3" id="idUser">
            <br><br>
             <label >Mật Khẩu Hiện Tại : </label><br>
            <input type="text" id="oldPassword" placeholder="Nhập Mật Khẩu Cũ">
            <span id="errorOldPassword"></span>
             <br><br>
            <label >Mật Khẩu Mới : </label><br>
             <input type="text" id="newPassword" placeholder="Nhập Mật Khẩu Muốn Thay">
             <span id="errorNewPassword"></span>
             <br><br>
             <button type="" onclick="confirmPasswordChange()">Xác Nhận</button>
     </div>
    `
}

// Xử Lý phần giỏ hàng
function openCart2(){
    var webb = document.getElementById("webb");
    webb.style.display = "none";
    var cartProduct = document.getElementById("cart_product");
    cartProduct.innerHTML = `
    <div class="fullCategoryCart">
    <ul id="category_cart">
        <li onclick="full()">
            <span>Tất Cả</span>
        </li>
        <hr>
        <li onclick="wait_for_confirmation()">
            <span>Chờ Xác Nhận</span>
        </li>
        <hr>
        <li onclick="waiting_for_the_goods()">
            <span>Chờ Lấy Hàng</span>
        </li>
        <hr>
        <li onclick="delivering()">
            <span>Đang Giao</span>
        </li>
        <hr>
        <li onclick="delivered()">
            <span>Đã Giao</span>
        </li>
        <hr>
        <li onclick="cancelled()">
            <span>Đã Hủy</span>
        </li>
    </ul>
</div>
<button id="times_cart" onclick="timesCart2()">X</button>
<!-- Phần sản phẩm trong giỏ hàng -->
<div class="list_product_in_cart">
    <!-- sản phẩm 1 -->
    <div class="product_in_cart" id="product_in_cart_1">
         <div class="product_in_cart_img ">
            <img src="products/sữa tươi dê tuyệt trùng và thanh trùng.jpg">
         </div>
         <div class="product_in_cart_info">
             <div>Combo 2 bộ Sữa tươi dê tuyệt trùng và thanh trùng</div>
             <div>Phân Loại Hàng : chai tròn</div>
             <div>số lượng : 5</div>
             <div>Trạng Thái : Đã Giao</div>
         </div>
         <div class="product_in_cart_price">
             <div>
                 <del>85.000đ</del>
             </div>
             <div>
                 80.000đ
             </div>
         </div>
        
    </div>
    <!-- sản phẩm 2 -->
    <div class="product_in_cart" id="product_in_cart_2">
        <div class="product_in_cart_img">
           <img src="products/combo 3 sản phẩm sữa thanh trùng.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Combo 3 chai sữa tươi thanh trùng</div>
            <div>Phân Loại Hàng : chai tròn,can 2 lít</div>
            <div>số lượng : 9</div>
            <div>Trạng Thái : Đang Giao</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>180.000đ</del>
            </div>
            <div>
                160.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 3 -->
    <div class="product_in_cart" id="product_in_cart_3">
        <div class="product_in_cart_img">
           <img src="products/trà sữa các loại.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Trà sữa vị phô mai</div>
            <div>Phân Loại Hàng : chai nhỏ</div>
            <div>số lượng : 7</div>
            <div>Trạng Thái : Chờ Lấy Hàng</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>80.000đ</del>
            </div>
            <div>
                70.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 4 -->
    <div class="product_in_cart" id="product_in_cart_4">
        <div class="product_in_cart_img">
           <img src="products/bánh sữa đặc có đường.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Bánh sữa đặc có đường</div>
            <div>Phân Loại Hàng : Hộp</div>
            <div>số lượng : 2</div>
            <div>Trạng Thái : Đã Hủy</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>30.000đ</del>
            </div>
            <div>
                30.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 5 -->
    <div class="product_in_cart" id="product_in_cart_5">
        <div class="product_in_cart_img">
           <img src="products/vang-sua-mixxi-vani-plus-1.png">
        </div>
        <div class="product_in_cart_info">
            <div>Váng sữa mixxi vani plus cho trẻ nhỏ</div>
            <div>Phân Loại Hàng : Hộp</div>
            <div>số lượng : 12</div>
            <div>Trạng Thái : Chờ Xác Nhận</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>280.000đ</del>
            </div>
            <div>
                250.000đ
            </div>
        </div>
       
   </div>
</div>
    `
}

function timesCart2(){
    var webb = document.getElementById("webb");
    webb.style.display = "block";
    var cartProduct = document.getElementById("cart_product");
    cartProduct.innerHTML = "";
}

function openCart() {
    var handlerSearch = document.getElementById("handleSearch");
             handlerSearch.style.display = 'none';
    var footer = document.getElementById('footer');
    footer.style.display = 'none';
    var sortByIndex = document.getElementById('sort_by_index');
    sortByIndex.style.display = 'none';
    var nextPages = document.getElementById('nextPage');
    nextPages.style.display = 'none';
    var renderProducts = document.getElementById('renderProducts');
    renderProducts.style.display = 'none';
    var eventWeb = document.getElementById('eventWeb');
    eventWeb.style.display = 'none';
    var banner = document.getElementById("banner");
    banner.style.display = "none";
    var comments = document.getElementById("comment_products");
    comments.style.display = "none";
    var cartProduct = document.getElementById("cart_product");
    cartProduct.innerHTML = `
    <div class="fullCategoryCart">
    <ul id="category_cart">
        <li onclick="full()">
            <span>Tất Cả</span>
        </li>
        <hr>
        <li onclick="wait_for_confirmation()">
            <span>Chờ Xác Nhận</span>
        </li>
        <hr>
        <li onclick="waiting_for_the_goods()">
            <span>Chờ Lấy Hàng</span>
        </li>
        <hr>
        <li onclick="delivering()">
            <span>Đang Giao</span>
        </li>
        <hr>
        <li onclick="delivered()">
            <span>Đã Giao</span>
        </li>
        <hr>
        <li onclick="cancelled()">
            <span>Đã Hủy</span>
        </li>
    </ul>
</div>
<button id="times_cart" onclick="timesCart()">X</button>
<!-- Phần sản phẩm trong giỏ hàng -->
<div class="list_product_in_cart">
    <!-- sản phẩm 1 -->
    <div class="product_in_cart" id="product_in_cart_1">
         <div class="product_in_cart_img ">
            <img src="products/sữa tươi dê tuyệt trùng và thanh trùng.jpg">
         </div>
         <div class="product_in_cart_info">
             <div>Combo 2 bộ Sữa tươi dê tuyệt trùng và thanh trùng</div>
             <div>Phân Loại Hàng : chai tròn</div>
             <div>số lượng : 5</div>
             <div>Trạng Thái : Đã Giao</div>
         </div>
         <div class="product_in_cart_price">
             <div>
                 <del>85.000đ</del>
             </div>
             <div>
                 80.000đ
             </div>
         </div>
        
    </div>
    <!-- sản phẩm 2 -->
    <div class="product_in_cart" id="product_in_cart_2">
        <div class="product_in_cart_img">
           <img src="products/combo 3 sản phẩm sữa thanh trùng.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Combo 3 chai sữa tươi thanh trùng</div>
            <div>Phân Loại Hàng : chai tròn,can 2 lít</div>
            <div>số lượng : 9</div>
            <div>Trạng Thái : Đang Giao</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>180.000đ</del>
            </div>
            <div>
                160.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 3 -->
    <div class="product_in_cart" id="product_in_cart_3">
        <div class="product_in_cart_img">
           <img src="products/trà sữa các loại.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Trà sữa vị phô mai</div>
            <div>Phân Loại Hàng : chai nhỏ</div>
            <div>số lượng : 7</div>
            <div>Trạng Thái : Chờ Lấy Hàng</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>80.000đ</del>
            </div>
            <div>
                70.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 4 -->
    <div class="product_in_cart" id="product_in_cart_4">
        <div class="product_in_cart_img">
           <img src="products/bánh sữa đặc có đường.jpg">
        </div>
        <div class="product_in_cart_info">
            <div>Bánh sữa đặc có đường</div>
            <div>Phân Loại Hàng : Hộp</div>
            <div>số lượng : 2</div>
            <div>Trạng Thái : Đã Hủy</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>30.000đ</del>
            </div>
            <div>
                30.000đ
            </div>
        </div>
       
   </div>
    <!-- sản phẩm 5 -->
    <div class="product_in_cart" id="product_in_cart_5">
        <div class="product_in_cart_img">
           <img src="products/vang-sua-mixxi-vani-plus-1.png">
        </div>
        <div class="product_in_cart_info">
            <div>Váng sữa mixxi vani plus cho trẻ nhỏ</div>
            <div>Phân Loại Hàng : Hộp</div>
            <div>số lượng : 12</div>
            <div>Trạng Thái : Chờ Xác Nhận</div>
        </div>
        <div class="product_in_cart_price">
            <div>
                <del>280.000đ</del>
            </div>
            <div>
                250.000đ
            </div>
        </div>
       
   </div>
</div>
    `
}
function timesCart() {
    var footer = document.getElementById('footer');
    footer.style.display = 'block';
    var sortByIndex = document.getElementById('sort_by_index');
    sortByIndex.style.display = 'block';
    var nextPages = document.getElementById('nextPage');
    nextPages.style.display = 'flex';
    var renderProducts = document.getElementById('renderProducts');
    renderProducts.style.display = 'block';
    var cartProduct = document.getElementById("cart_product");
    cartProduct.innerHTML = "";
    var eventWeb = document.getElementById('eventWeb');
    eventWeb.style.display = 'flex';
    var banner = document.getElementById("banner");
    banner.style.display = "block";
    var handlerSearch = document.getElementById("handleSearch");
    handlerSearch.style.display = 'block';
}

function addCart(){
    document.getElementById("solg_cart").innerHTML = "4"
}
// Chờ xác nhận
// Tất cả
function full() {
    var productInCart1 = document.getElementById("product_in_cart_1");
    var productInCart2 = document.getElementById("product_in_cart_2");
    var productInCart3 = document.getElementById("product_in_cart_3");
    var productInCart4 = document.getElementById("product_in_cart_4");
    var productInCart5 = document.getElementById("product_in_cart_5");
    productInCart1.style.display = "flex";
    productInCart2.style.display = "flex";
    productInCart3.style.display = "flex";
    productInCart4.style.display = "flex";
    productInCart5.style.display = "flex";
}
function wait_for_confirmation() {
    
     var productInCart1 = document.getElementById("product_in_cart_1");
     var productInCart2 = document.getElementById("product_in_cart_2");
     var productInCart3 = document.getElementById("product_in_cart_3");
     var productInCart4 = document.getElementById("product_in_cart_4");
     var productInCart5 = document.getElementById("product_in_cart_5");
     productInCart1.style.display = "none";
     productInCart2.style.display = "none";
     productInCart3.style.display = "none";
     productInCart4.style.display = "none";
     productInCart5.style.display = "flex";
}
// Chờ Lấy Hàng
function waiting_for_the_goods() {
    var productInCart1 = document.getElementById("product_in_cart_1");
    var productInCart2 = document.getElementById("product_in_cart_2");
    var productInCart5 = document.getElementById("product_in_cart_5");
    var productInCart4 = document.getElementById("product_in_cart_4");
    var productInCart3 = document.getElementById("product_in_cart_3");
    productInCart1.style.display = "none";
    productInCart2.style.display = "none";
    productInCart5.style.display = "none";
    productInCart4.style.display = "none";
    productInCart3.style.display = "flex";
}
// Đang Giao
function delivering() {
    var productInCart1 = document.getElementById("product_in_cart_1");
    var productInCart2 = document.getElementById("product_in_cart_2");
    var productInCart5 = document.getElementById("product_in_cart_5");
    var productInCart4 = document.getElementById("product_in_cart_4");
    var productInCart3 = document.getElementById("product_in_cart_3");
    productInCart1.style.display = "none";
    productInCart2.style.display = "flex";
    productInCart5.style.display = "none";
    productInCart4.style.display = "none";
    productInCart3.style.display = "none";
}
// Đã Giao 
function delivered() {
    var productInCart1 = document.getElementById("product_in_cart_1");
    var productInCart2 = document.getElementById("product_in_cart_2");
    var productInCart5 = document.getElementById("product_in_cart_5");
    var productInCart4 = document.getElementById("product_in_cart_4");
    var productInCart3 = document.getElementById("product_in_cart_3");
    productInCart1.style.display = "flex";
    productInCart2.style.display = "none";
    productInCart5.style.display = "none";
    productInCart4.style.display = "none";
    productInCart3.style.display = "none";
}
// Đã Hủy
function cancelled() {
    var productInCart1 = document.getElementById("product_in_cart_1");
    var productInCart2 = document.getElementById("product_in_cart_2");
    var productInCart5 = document.getElementById("product_in_cart_5");
    var productInCart4 = document.getElementById("product_in_cart_4");
    var productInCart3 = document.getElementById("product_in_cart_3");
    productInCart1.style.display = "none";
    productInCart2.style.display = "none";
    productInCart5.style.display = "none";
    productInCart4.style.display = "flex";
    productInCart3.style.display = "none";
}

// Phaanf get product
// document.getElementById("renderProducts").innerHTML = `Tamk em`


var productPerPage= 8;
var currentPage = 1;
var start = 0;
var end= productPerPage;
function renderProduct() {
    
    fetch(productsApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        
        var renderProducts = document.getElementById("renderProducts");
        // var currentPage = 1;

        var examProduct = products.map(function(product,index) {
            
            if(index >= start && index < end) {
                return `
                    <button id="product" class="product" value="${product.id}" onclick="nextProduct(${product.id})">
                        <div class="product_img">
                            ${product.img}
                        </div>
                        <div class="product_content">
                        ${product.name}
                        </div>
                        <div class="price_selled">
                            <div>${product.price}</div>
                            <div>Đã bán : ${product.selled}</div>
                        </div>
                    </button>
                `
            }

        })
        
        renderProducts.innerHTML = examProduct.join("");
    })
}

renderProduct();


function page1() {
    currentPage = 1;
    start = (currentPage - 1)*productPerPage;
    end  =  (currentPage)*productPerPage;
        renderProduct();
}
function page2() {
    currentPage = 2;
    start = (currentPage - 1)*productPerPage;
    end  =  (currentPage)*productPerPage;
        renderProduct();

        
}
function page3() {
    currentPage = 3;
    start = (currentPage - 1)*productPerPage;
    end  =  (currentPage)*productPerPage;
        renderProduct();
}



// Phần click nút mua hange

    function sellProduct(){
        var KichThuoc;
        for(var i=0;i<=2;i++){
            if(window.document.kich_thuoc.size[i].checked){
                KichThuoc = window.document.kich_thuoc.size[i].value
            }
        }
        var gia = document.getElementById("price_Product").innerHTML;
        console.log(parseInt(gia, 10));
        var soLuong = document.getElementById("so_luong").value;
        var TongTien;
        var PhiVanChuyen = 23;
        var DonGia = parseInt(gia);
       if(KichThuoc == "Size Nhỏ" ){
        TongTien = ( parseFloat(DonGia)*parseInt(soLuong) ) + parseInt(PhiVanChuyen);
       }
       else if(KichThuoc == "Size Trung Bình"){
         TongTien = ( parseFloat((DonGia))*parseInt(soLuong) ) + parseInt(PhiVanChuyen);
       }
       else if(KichThuoc == "Size To"){
        TongTien = ( (parseFloat(DonGia) )*parseInt(soLuong) ) + parseInt(PhiVanChuyen);
       }
        
    
   if( soLuong > 0 && KichThuoc != undefined){
    var choice =  confirm("Kích Thước Sản Phẩm : " + KichThuoc + "\n" 
    + "Số Lượng Là  :" + soLuong + "\n" + "Phí Vận Chuyển : 23.000đ" + "\n" 
    + "Tổng Số Tiền Là : " + parseFloat(TongTien)+".000đ");
   }
   else {
       alert("Vui Lòng Chọn Size")
   }
    
        if(choice == 1){
            alert("Cảm Ơn Bạn Đã Đồng Ý Mua Hàng tại Của Hàng Chúng Tôi");
            document.getElementById("sellProduct").innerHTML = "Hủy Đơn Hàng";
            document.getElementById("sellProduct").value = "1";
            document.getElementById("confirmSell").innerHTML = `
               <button id="cancelProduct" onclick="cancelProduct()" value="0">
                   Hủy Đơn Hàng
               </button>
            `
        }
    }
    function cancelProduct() {
       var choise = confirm("Chúng tôi rất xin lỗi về những vấn đề khiến khách hàng không ưng ý !");
        if(choise == 1){
            window.location.reload();
        }
        else{

        }
    }

// var donGia = document.getElementById("price_Product").innerHTML;
function sizeMin(){
    var gia = document.getElementById("price_Product").innerHTML;
    document.getElementById("price_Product").innerHTML = parseInt(gia, 10) + ".000đ";
}
function sizeAVG(){
    var gia = document.getElementById("price_Product").innerHTML;
    document.getElementById("price_Product").innerHTML = parseInt(gia, 10) + 10 + ".000đ";
}

function sizeMax(){
    var gia = document.getElementById("price_Product").innerHTML;
    document.getElementById("price_Product").innerHTML = parseInt(gia, 10) + 10 + 10 + ".000đ";
}




 



function btnCick(params) {
    var enter = document.getElementById("search").value;
    var promise = new Promise(function(resolve, reject) {
        resolve();
    })
    // kiểm tra sữa chua
    promise
    .then(function(){
        if(enter.search("sữa chua") == 0 || 
         enter.search("nếp cẩm") == 0 ||
         enter.search("chanh leo") ==0 ||
         enter.search("nha đam") == 0
         ){
            var footer = document.getElementById('footer');
            footer.style.display = 'none';
            var sortByIndex = document.getElementById('sort_by_index');
            sortByIndex.style.display = 'none';
            var nextPages = document.getElementById('nextPage');
            nextPages.style.display = 'none';
            var renderProducts = document.getElementById('renderProducts');
            renderProducts.style.display = 'none';
            var eventWeb = document.getElementById('eventWeb');
            eventWeb.style.display = 'none';
            var banner = document.getElementById("banner");
            banner.style.display = "none";
             var handlerSearch = document.getElementById("handleSearch");
             handlerSearch.innerHTML = `

       <div id="search_filter">
       <h2 style="color: red;">Bộ Lọc Tìm Kiếm</h2>

       <div id="by_category">
           <h4 style="color: tomato;">Theo Danh Mục</h4><br>
           <input type="radio" name="category">Bánh Sữa 
           <br>
           <input type="radio" name="category">Sữa Chua
           <br>
           <input type="radio" name="category">Caramen
           <br>
           <input type="radio" name="category">Trà Sữa
           <br>
           <input type="radio" name="category">Sữa Tươi
       </div>
       <hr>
       <div id="place_sell">
        <h4 style="color: tomato;">Nơi Bán</h4><br>
        <input type="radio" name="place">Hà Nội
        <br>
        <input type="radio" name="place">Hải Dương
        <br>
        <input type="radio" name="place">Phú Thọ
        <br>
        <input type="radio" name="place">Hải Phòng
        <br>
        <input type="radio" name="place">Sài Gòn
       </div>
       <hr>
       <div id="shipping_unit">
        <h4 style="color: tomato;">Đơn Vị Vận Chuyển</h4><br>
        <input type="radio" name="unit">Hỏa Tốc
        <br>
        <input type="radio" name="unit">Nhanh
        <br>
        <input type="radio" name="unit">Tiết Kiệm
       </div>
       <hr>
       <div id="backfriday">
        <h4 style="color: tomato;">Dịch Vụ & Khuyến Mại</h4>
        <input type="radio" name="sale">Freeship Xtral
        <br>
        <input type="radio" name="sale">Hoàn Xu Xtral
        <br>
        <input type="radio" name="sale">Đang Giảm Giá
        <br>
        <input type="radio" name="sale">Miễn Phí Vận Chuyển
       </div>
       <hr>
       <div id="price_range">
           <h4 style="color: tomato;">Khoảng Giá</h4>
           <input type="text" id="from_price" placeholder="đ Từ"> - 
           <input type="text" id="to_price" placeholder="đ Đến">
           <br><br>
           <button id="confirmSearch">Tìm Kiếm</button>
       </div>
   </div>


    <div id="render_search_product">
        <!-- Phần sữa chua -->
    <div id="search_sua_chua">
        <div class="productSearch">
            <div class="product_search_img">
                <img src='products/37411adc810bc3111a35b0034994e553.jpg' alt=''>
            </div>
            <div class="product_search_content">
                Sữa chua bò size lớn (1 thùng 15 hộp cỡ lớn)
            </div>
            <div class="price_search_selled">
                <div>25.000đ</div>
                <div>Đã bán : 1,2k</div>
            </div>
        </div>
    <!-- sản phẩm 2 -->
    <div class="productSearch">
        <div class="product_search_img">
            <img src='products/3ef941d0c2ec42ffa99ccef56678d57b.jpg' alt=''>
        </div>
        <div class="product_search_content">
            Sữa chua nếp cẩm size to,nhân cẩm từ gạo nếp cái hoa vàng
        </div>
        <div class="price_search_selled">
            <div>25.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    <!-- sản phẩm 3 -->
    <div class="productSearch">
        <div class="product_search_img">
            <img src='products/sữa chua trà xanh size nhỏ.jpg' alt=''>
        </div>
        <div class="product_search_content">
            Sữa chua vị trà xanh size nhỏ (không có nhân)
        </div>
        <div class="price_search_selled">
            <div>65.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    <!-- sản phẩm 4 -->
    <div class="productSearch">
        <div class="product_search_img">
            <img src='products/sữa chua nếp cẩm size nhỏ.jpg' alt=''>
        </div>
        <div class="product_search_content">
            Sữa chua nếp cẩm size nhỏ (nhân gạo cẩm)
        </div>
        <div class="price_search_selled">
            <div>25.000đ</div>
            <div>Đã bán : 1,7k</div>
        </div>
    </div>
<!-- sản phẩm 5 -->
<div class="productSearch">
    <div class="product_search_img">
        <img src='products/sữa chua chanh lep size nhỏ.jpg' alt=''>
    </div>
    <div class="product_search_content">
        Sữa chua chanh leo có đường size nhỏ (Không có nhân)
    </div>
    <div class="price_search_selled">
        <div>75.000đ</div>
        <div>Đã bán : 1,1k</div>
    </div>
</div>
    <!-- sản phẩm 6 -->
<div class="productSearch">
        <div class="product_search_img">
            <img src='products/sữa chua nha đam size nhỏ.jpg' alt=''>
        </div>
        <div class="product_search_content">
            Sữa chua hương vị nha đam có nhân là hạt nha đam size bé (1 thùng 12 hộp)
        </div>
        <div class="price_search_selled">
            <div>80.000đ</div>
            <div>Đã bán : 1,5k</div>
        </div>
</div>
</div>
</div>
              `
              return new Promise(function(resolve,reject){
                  resolve();
              })
         }
         else{
             reject();
         }
    })
    .catch(function(){
        var footer = document.getElementById('footer');
            footer.style.display = 'none';
            var sortByIndex = document.getElementById('sort_by_index');
            sortByIndex.style.display = 'none';
            var nextPages = document.getElementById('nextPage');
            nextPages.style.display = 'none';
            var renderProducts = document.getElementById('renderProducts');
            renderProducts.style.display = 'none';
            var eventWeb = document.getElementById('eventWeb');
            eventWeb.style.display = 'none';
            var banner = document.getElementById("banner");
            banner.style.display = "none";
             var handlerSearch = document.getElementById("handleSearch");
             handlerSearch.innerHTML = `
                <h1>Sản Phẩm Không Có</h1>
             `
    })

    .then(function (){
        if(enter.search("bánh sữa") == 0 || 
         enter.search("nhân phô mai") == 0 ||
         enter.search("socola") ==0 ||
         enter.search("bánh sữa có đường") == 0 ||
         enter.search("bánh sữa không đường") == 0
        ){
            var footer = document.getElementById('footer');
            footer.style.display = 'none';
            var sortByIndex = document.getElementById('sort_by_index');
            sortByIndex.style.display = 'none';
            var nextPages = document.getElementById('nextPage');
            nextPages.style.display = 'none';
            var renderProducts = document.getElementById('renderProducts');
            renderProducts.style.display = 'none';
            var eventWeb = document.getElementById('eventWeb');
            eventWeb.style.display = 'none';
            var banner = document.getElementById("banner");
            banner.style.display = "none";
             var handlerSearch = document.getElementById("handleSearch");
             handlerSearch.innerHTML = `

       <div id="search_filter">
       <h2 style="color: red;">Bộ Lọc Tìm Kiếm</h2>

       <div id="by_category">
           <h4 style="color: tomato;">Theo Danh Mục</h4><br>
           <input type="radio" name="category">Bánh Sữa 
           <br>
           <input type="radio" name="category">Sữa Chua
           <br>
           <input type="radio" name="category">Caramen
           <br>
           <input type="radio" name="category">Trà Sữa
           <br>
           <input type="radio" name="category">Sữa Tươi
       </div>
       <hr>
       <div id="place_sell">
        <h4 style="color: tomato;">Nơi Bán</h4><br>
        <input type="radio" name="place">Hà Nội
        <br>
        <input type="radio" name="place">Hải Dương
        <br>
        <input type="radio" name="place">Phú Thọ
        <br>
        <input type="radio" name="place">Hải Phòng
        <br>
        <input type="radio" name="place">Sài Gòn
       </div>
       <hr>
       <div id="shipping_unit">
        <h4 style="color: tomato;">Đơn Vị Vận Chuyển</h4><br>
        <input type="radio" name="unit">Hỏa Tốc
        <br>
        <input type="radio" name="unit">Nhanh
        <br>
        <input type="radio" name="unit">Tiết Kiệm
       </div>
       <hr>
       <div id="backfriday">
        <h4 style="color: tomato;">Dịch Vụ & Khuyến Mại</h4>
        <input type="radio" name="sale">Freeship Xtral
        <br>
        <input type="radio" name="sale">Hoàn Xu Xtral
        <br>
        <input type="radio" name="sale">Đang Giảm Giá
        <br>
        <input type="radio" name="sale">Miễn Phí Vận Chuyển
       </div>
       <hr>
       <div id="price_range">
           <h4 style="color: tomato;">Khoảng Giá</h4>
           <input type="text" id="from_price" placeholder="đ Từ"> - 
           <input type="text" id="to_price" placeholder="đ Đến">
           <br><br>
           <button id="confirmSearch">Tìm Kiếm</button>
       </div>
   </div>


    <div id="render_search_product">
        <!-- Phần sữa chua -->
    <div id="search_sua_chua">
        <div class="productSearch">
            <div class="product_search_img">
                <img src='products/37411adc810bc3111a35b0034994e553.jpg' alt=''>
            </div>
            <div class="product_search_content">
            Bánh sữa đặc có đường được làm từ sữa bò nguyên chất
            </div>
            <div class="price_search_selled">
                <div>25.000đ</div>
                <div>Đã bán : 1,2k</div>
            </div>
        </div>
    <!-- sản phẩm 2 -->
    <div class="productSearch">
        <div class="product_search_img">
        <img src='products/bánh sữa đặc vị socola.jpg' alt=''>
        </div>
        <div class="product_search_content">
        Bánh sữa đặc vị sôcla được làm từ sữa bò và socola nguyên chất
        </div>
        <div class="price_search_selled">
            <div>25.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    <!-- sản phẩm 3 -->
    <div class="productSearch">
        <div class="product_search_img">
        <img src='products/bánh sữa nhân phô mai.jpg' alt=''>
        </div>
        <div class="product_search_content">
        Bánh sữa có đường nhân phô mai (được làm từ sữa bò)
        </div>
        <div class="price_search_selled">
            <div>65.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    <!-- sản phẩm 4 -->
    <div class="productSearch">
        <div class="product_search_img">
        <img src='products/bánh young cake.jpg' alt=''>
        </div>
        <div class="product_search_content">
        Bánh ngọt Young Cake được chế biến từ sữa bò và lòng đỏ trứng
        </div>
        <div class="price_search_selled">
            <div>25.000đ</div>
            <div>Đã bán : 1,7k</div>
        </div>
    </div>

  </div>
</div>
              `
        }

        return new Promise(function(resolve, reject) {
            resolve();
        })
    })

.then(function(){
    if(enter.search("sữa tươi") == 0 || 
         enter.search("sữa tươi bò") == 0 ||
         enter.search("sữa tươi dê") ==0 ||
         enter.search("sữa tươi thanh trùng") == 0 ||
         enter.search("sữa tươi tiệt trùng") == 0
        ){
            var footer = document.getElementById('footer');
            footer.style.display = 'none';
            var sortByIndex = document.getElementById('sort_by_index');
            sortByIndex.style.display = 'none';
            var nextPages = document.getElementById('nextPage');
            nextPages.style.display = 'none';
            var renderProducts = document.getElementById('renderProducts');
            renderProducts.style.display = 'none';
            var eventWeb = document.getElementById('eventWeb');
            eventWeb.style.display = 'none';
            var banner = document.getElementById("banner");
            banner.style.display = "none";
             var handlerSearch = document.getElementById("handleSearch");
             handlerSearch.innerHTML = `

       <div id="search_filter">
       <h2 style="color: red;">Bộ Lọc Tìm Kiếm</h2>

       <div id="by_category">
           <h4 style="color: tomato;">Theo Danh Mục</h4><br>
           <input type="radio" name="category">Bánh Sữa 
           <br>
           <input type="radio" name="category">Sữa Chua
           <br>
           <input type="radio" name="category">Caramen
           <br>
           <input type="radio" name="category">Trà Sữa
           <br>
           <input type="radio" name="category">Sữa Tươi
       </div>
       <hr>
       <div id="place_sell">
        <h4 style="color: tomato;">Nơi Bán</h4><br>
        <input type="radio" name="place">Hà Nội
        <br>
        <input type="radio" name="place">Hải Dương
        <br>
        <input type="radio" name="place">Phú Thọ
        <br>
        <input type="radio" name="place">Hải Phòng
        <br>
        <input type="radio" name="place">Sài Gòn
       </div>
       <hr>
       <div id="shipping_unit">
        <h4 style="color: tomato;">Đơn Vị Vận Chuyển</h4><br>
        <input type="radio" name="unit">Hỏa Tốc
        <br>
        <input type="radio" name="unit">Nhanh
        <br>
        <input type="radio" name="unit">Tiết Kiệm
       </div>
       <hr>
       <div id="backfriday">
        <h4 style="color: tomato;">Dịch Vụ & Khuyến Mại</h4>
        <input type="radio" name="sale">Freeship Xtral
        <br>
        <input type="radio" name="sale">Hoàn Xu Xtral
        <br>
        <input type="radio" name="sale">Đang Giảm Giá
        <br>
        <input type="radio" name="sale">Miễn Phí Vận Chuyển
       </div>
       <hr>
       <div id="price_range">
           <h4 style="color: tomato;">Khoảng Giá</h4>
           <input type="text" id="from_price" placeholder="đ Từ"> - 
           <input type="text" id="to_price" placeholder="đ Đến">
           <br><br>
           <button id="confirmSearch">Tìm Kiếm</button>
       </div>
   </div>


    <div id="render_search_product">
        <!-- Phần sữa chua -->
    <div id="search_sua_chua">
        <div class="productSearch">
            <div class="product_search_img">
            <img src='products/sữa tươi dê tuyệt trùng và thanh trùng.jpg' alt=''>
            </div>
            <div class="product_search_content">
            Combo 2 chai sữa tươi dê thanh trùng và tuyệt trùng (chai 1 lít rưỡi)
            </div>
            <div class="price_search_selled">
                <div>25.000đ</div>
                <div>Đã bán : 1,2k</div>
            </div>
        </div>
    <!-- sản phẩm 2 -->
    <div class="productSearch">
        <div class="product_search_img">
        <img src='products/combo sữa tươi và bánh sữa.jpg' alt=''>
        </div>
        <div class="product_search_content">
        Combo sữa tươi bò và bánh sữa dê (giảm giá 25%)
        </div>
        <div class="price_search_selled">
            <div>25.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    <!-- sản phẩm 3 -->
    <div class="productSearch">
        <div class="product_search_img">
        <img src='products/sua-tuoi-it-duong-vinamilk-100-sua-tuoi-hop-1-lit-202104121637399877.jpg' alt=''>
        </div>
        <div class="product_search_content">
        Sữa tươi ít đường vinamilk đóng hộp
        </div>
        <div class="price_search_selled">
            <div>65.000đ</div>
            <div>Đã bán : 1,2k</div>
        </div>
    </div>
    
  </div>
</div>
              `
        }
        return new Promise(function(resolve, reject) {
            resolve();
        })
})

.then(function(){
    if(enter.search("trà sữa") == 0 || 
    enter.search("trà sữa ngô") == 0 ||
    enter.search("trà sữa dâu") ==0 ||
    enter.search("trà sữa trà xanh") == 0 ||
    enter.search("trà sữa chanh leo") == 0 ||
    enter.search("sữa hoa quả") == 0 ||
    enter.search("sữa uống hoa quả hương dâu tây") == 0 ||
    enter.search("váng sữa") == 0 
    ){
       var footer = document.getElementById('footer');
       footer.style.display = 'none';
       var sortByIndex = document.getElementById('sort_by_index');
       sortByIndex.style.display = 'none';
       var nextPages = document.getElementById('nextPage');
       nextPages.style.display = 'none';
       var renderProducts = document.getElementById('renderProducts');
       renderProducts.style.display = 'none';
       var eventWeb = document.getElementById('eventWeb');
       eventWeb.style.display = 'none';
       var banner = document.getElementById("banner");
       banner.style.display = "none";
        var handlerSearch = document.getElementById("handleSearch");
        handlerSearch.innerHTML = `

  <div id="search_filter">
  <h2 style="color: red;">Bộ Lọc Tìm Kiếm</h2>

  <div id="by_category">
      <h4 style="color: tomato;">Theo Danh Mục</h4><br>
      <input type="radio" name="category">Bánh Sữa 
      <br>
      <input type="radio" name="category">Sữa Chua
      <br>
      <input type="radio" name="category">Caramen
      <br>
      <input type="radio" name="category">Trà Sữa
      <br>
      <input type="radio" name="category">Sữa Tươi
  </div>
  <hr>
  <div id="place_sell">
   <h4 style="color: tomato;">Nơi Bán</h4><br>
   <input type="radio" name="place">Hà Nội
   <br>
   <input type="radio" name="place">Hải Dương
   <br>
   <input type="radio" name="place">Phú Thọ
   <br>
   <input type="radio" name="place">Hải Phòng
   <br>
   <input type="radio" name="place">Sài Gòn
  </div>
  <hr>
  <div id="shipping_unit">
   <h4 style="color: tomato;">Đơn Vị Vận Chuyển</h4><br>
   <input type="radio" name="unit">Hỏa Tốc
   <br>
   <input type="radio" name="unit">Nhanh
   <br>
   <input type="radio" name="unit">Tiết Kiệm
  </div>
  <hr>
  <div id="backfriday">
   <h4 style="color: tomato;">Dịch Vụ & Khuyến Mại</h4>
   <input type="radio" name="sale">Freeship Xtral
   <br>
   <input type="radio" name="sale">Hoàn Xu Xtral
   <br>
   <input type="radio" name="sale">Đang Giảm Giá
   <br>
   <input type="radio" name="sale">Miễn Phí Vận Chuyển
  </div>
  <hr>
  <div id="price_range">
      <h4 style="color: tomato;">Khoảng Giá</h4>
      <input type="text" id="from_price" placeholder="đ Từ"> - 
      <input type="text" id="to_price" placeholder="đ Đến">
      <br><br>
      <button id="confirmSearch">Tìm Kiếm</button>
  </div>
</div>


<div id="render_search_product">
   <!-- Phần sữa chua -->
<div id="search_sua_chua">
   <div class="productSearch">
       <div class="product_search_img">
       <img src='products/trà sữa các loại.jpg' alt=''>
       </div>
       <div class="product_search_content">
       Trà sữa vị ngô ,nhân từ thạch hương ngô (chai 300ml)
       </div>
       <div class="price_search_selled">
           <div>25.000đ</div>
           <div>Đã bán : 1,2k</div>
       </div>
   </div>
<!-- sản phẩm 2 -->
<div class="productSearch">
   <div class="product_search_img">
   <img src='products/trà sữa các loại.jpg' alt=''>
   </div>
   <div class="product_search_content">
   Trà sữa vị trà xanh ,nhân từ thạch hương trà bát tiên (chai 300ml)
   </div>
   <div class="price_search_selled">
       <div>25.000đ</div>
       <div>Đã bán : 1,2k</div>
   </div>
</div>
<!-- sản phẩm 3 -->
<div class="productSearch">
   <div class="product_search_img">
   <img src='products/trà sữa các loại.jpg' alt=''>
   </div>
   <div class="product_search_content">
   trà sữa hương chanh leo,nhân thạch rau câu (chai 300ml)
   </div>
   <div class="price_search_selled">
       <div>65.000đ</div>
       <div>Đã bán : 1,2k</div>
   </div>
</div>
<!-- sản phẩm 4 -->
<div class="productSearch">
   <div class="product_search_img">
   <img src='products/sua-chua-uong-ba-vi-vi-chanh-giay-95ml.jpg' alt=''>
   </div>
   <div class="product_search_content">
   Sữa hoa quả hương thập cẩm từ 4 loại hoa quả
   </div>
   <div class="price_search_selled">
       <div>25.000đ</div>
       <div>Đã bán : 1,7k</div>
   </div>
</div>
<!-- sản phẩm 5 -->
<div class="productSearch">
<div class="product_search_img">
<img src='products/sua-chua-uong-vi-dau-300x300.jpg' alt=''>
</div>
<div class="product_search_content">
Sữa uống hoa quả hương dâu tây (chai 200ml)
</div>
<div class="price_search_selled">
   <div>75.000đ</div>
   <div>Đã bán : 1,1k</div>
</div>
</div>
<!-- sản phẩm 6 -->
<div class="productSearch">
   <div class="product_search_img">
   <img src='products/vang-sua-mixxi-vani-plus-1.png' alt=''>
   </div>
   <div class="product_search_content">
   Váng sữa chua ba vì ,nguyên chất được làm từ sữa 100%
   </div>
   <div class="price_search_selled">
       <div>80.000đ</div>
       <div>Đã bán : 1,5k</div>
   </div>
</div>
</div>
</div>
         `
    }
    return new Promise((resolve, reject) => {
        resolve();
    })
})
 

.then(function (){
    if(enter.search("caramen") == 0 ){
       var footer = document.getElementById('footer');
       footer.style.display = 'none';
       var sortByIndex = document.getElementById('sort_by_index');
       sortByIndex.style.display = 'none';
       var nextPages = document.getElementById('nextPage');
       nextPages.style.display = 'none';
       var renderProducts = document.getElementById('renderProducts');
       renderProducts.style.display = 'none';
       var eventWeb = document.getElementById('eventWeb');
       eventWeb.style.display = 'none';
       var banner = document.getElementById("banner");
       banner.style.display = "none";
        var handlerSearch = document.getElementById("handleSearch");
        handlerSearch.innerHTML = `

  <div id="search_filter">
  <h2 style="color: red;">Bộ Lọc Tìm Kiếm</h2>

  <div id="by_category">
      <h4 style="color: tomato;">Theo Danh Mục</h4><br>
      <input type="radio" name="category">Bánh Sữa 
      <br>
      <input type="radio" name="category">Sữa Chua
      <br>
      <input type="radio" name="category">Caramen
      <br>
      <input type="radio" name="category">Trà Sữa
      <br>
      <input type="radio" name="category">Sữa Tươi
  </div>
  <hr>
  <div id="place_sell">
   <h4 style="color: tomato;">Nơi Bán</h4><br>
   <input type="radio" name="place">Hà Nội
   <br>
   <input type="radio" name="place">Hải Dương
   <br>
   <input type="radio" name="place">Phú Thọ
   <br>
   <input type="radio" name="place">Hải Phòng
   <br>
   <input type="radio" name="place">Sài Gòn
  </div>
  <hr>
  <div id="shipping_unit">
   <h4 style="color: tomato;">Đơn Vị Vận Chuyển</h4><br>
   <input type="radio" name="unit">Hỏa Tốc
   <br>
   <input type="radio" name="unit">Nhanh
   <br>
   <input type="radio" name="unit">Tiết Kiệm
  </div>
  <hr>
  <div id="backfriday">
   <h4 style="color: tomato;">Dịch Vụ & Khuyến Mại</h4>
   <input type="radio" name="sale">Freeship Xtral
   <br>
   <input type="radio" name="sale">Hoàn Xu Xtral
   <br>
   <input type="radio" name="sale">Đang Giảm Giá
   <br>
   <input type="radio" name="sale">Miễn Phí Vận Chuyển
  </div>
  <hr>
  <div id="price_range">
      <h4 style="color: tomato;">Khoảng Giá</h4>
      <input type="text" id="from_price" placeholder="đ Từ"> - 
      <input type="text" id="to_price" placeholder="đ Đến">
      <br><br>
      <button id="confirmSearch">Tìm Kiếm</button>
  </div>
</div>


<div id="render_search_product">
   <!-- Phần sữa chua -->
<div id="search_sua_chua">
   <div class="productSearch">
       <div class="product_search_img">
       <img src='products/caramen.jpg' alt=''>
       </div>
       <div class="product_search_content">
       Sữa chua caramen ,nguyên liệu chính từ trứng và nhân là lòng đỏ trứng
       </div>
       <div class="price_search_selled">
           <div>25.000đ</div>
           <div>Đã bán : 1,2k</div>
       </div>
   </div>
   `
    }
})
}

// Xử Lý comments
function renderCommentInSCR() {
fetch(commentsApi)
.then(function (response) {
    return response.json();
})
.then(function (comments) {
    var html = comments.map(function (comment) {
        return  `
        <div class="userCmt user1">
            <div id="avata_user">
                    ${comment.img}
            </div>
            <div id="info_user">
                    <div id="name_user_comment">
                        <span>${comment.name}</span>
                    </div>
                    <div id="rate_star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    </div>
                    <div class="content_comment" contenteditable="true" value="${comment.id}">
                        ${comment.content}
                    </div>
                 
                        <button id="like">
                           <i class="fas fa-heart"></i>
                        </button>
                    
            </div>
            <div class="del_fix">
                <button value="${comment.id}" class="delComments">Xóa</button>
                <button value="${comment.id}" class="fixComments">Sửa</button>
            </div>
            <button class="send">Gửi</button>

        </div>
            
            <hr>
        `
    })
    var renderComments = document.getElementById("user_comment")
        renderComments.innerHTML = html.join("");
})
}
renderCommentInSCR();
// Thêm Mới Comments

function addComments() {
    function promise(ms) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
               resolve();
            },ms)
        })
    }
    promise(2000)
    .then(function(){
        var enterText = document.getElementById("enter_text_comment").value;
        var dataPost = {
            img: "<img src='img/user.jpg'>",
            name: "Pham Tien Tam",
            content: enterText
        };
        var option = {
            method: 'POST', // thêm mới thì dùng post
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(dataPost),
        }
        fetch(commentsApi,option)
        .then(function(response){
            return response.json();   
        })
    })

}

// Xóa Comments
fetch(commentsApi)
.then(function(response){
    return response.json();
})
.then(function(comments){

        var btnHandle = document.getElementsByClassName("delComments");
        for(var dataHandle of btnHandle){
            // Xóa
            dataHandle.addEventListener("click", function(e){
               var option = {
                method: 'DELETE', // thêm mới thì dùng post
                headers: {
                    'Content-Type': 'application/json',
                    },
               }

               fetch(commentsApi + '/' + parseInt(this.value),option)
               .then(function(response){
                   return response.json();
               })
            })
              
        }

})

fetch(commentsApi)
.then(function(response){
    return response.json();
})
.then(function(comments){
    var btnFix = document.getElementsByClassName("fixComments");
              for(var dataFix of btnFix){
                  
                     dataFix.addEventListener("click",function(){    
                     var test = document.getElementsByClassName("del_fix");
                     for(var dataTest of test){
                         this.innerHTML = `
                           <button class="sendCommentss" onclick="btnSendComments()">Gửi</button>
                         `
                     }   
                    })
              }
})


// sửa comments
function btnSendComments(e) {
    fetch(commentsApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(comments) {
        var exam = comments.filter(function(comment) {
            return comment.img === "<img src='img/user.jpg'>";
        })
         
        exam.map(function(data){
            

       
            console.log(data.id)
            var renderContent = document.getElementsByClassName("content_comment");
        for(var i=0;i<renderContent.length;i++) {
            if(parseInt(data.id ) == i){
                console.log(renderContent[i])
    
                var dataPost = {
                    content:renderContent[i].innerHTML
                }
                var option = {
                   method: 'PATCH', 
                   headers: {
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(dataPost),
                }
                fetch(commentsApi + "/" + data.id,option)
                .then(function(response){
                    return response.json();
                })
            }
        }


        })

    })

}


// click vào sản phẩm
     


//     fetch(productsApi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(products){
//         var BtnProduct = document.getElementsByClassName("product");
//         for(var valueBTN of BtnProduct){
//             valueBTN.addEventListener("click",function(){
//                 var result = parseInt(this.value);
//                 var htmls = products.find(function(product){
//                     return product.id === result;
//                 })
//                 document.getElementById("comment_products").style.top ="230px";
//                 document.getElementById("footer").innerHTML = "";
//                 document.getElementById("web").innerHTML = `
                
            
            
//             <div id="cart_product">
            
            
//             </div>
            
//             <div id="webb">
//                 <div id="contentProduct">
//                     <!-- Phần Ảnh sản phẩm -->
//                     <div id="imgProduct">
//                         <!-- ẢNh to hiển thị -->
//                         <div id="imgRender">
//                             ${htmls.img}
//                         </div>
//                         <!-- 1 vài ảnh  -->
//                         <div id="imgOther">
//                             <img src="products/sữa chua nha đam size nhỏ.jpg" alt=""  id="renderImg1" onclick="renderIMG1()">
//                             <img src="products/sữa chua trà xanh size nhỏ.jpg" alt="" id="renderImg2" onclick="renderIMG2()">
//                             <img src="products/sữa tươi dê tuyệt trùng và thanh trùng.jpg" alt="" id="renderImg3" onclick="renderIMG3()">
//                             <img src="products/trà sữa các loại.jpg" alt="" id="renderImg4" onclick="renderIMG4()">
//                         </div>
//                         <!-- chia sẻ và follow -->
//                         <div id="share_follow">
//                             <div id="share">
//                                 <span>Chia Sẻ : </span>
//                                 <a href="https://www.facebook.com/">
//                                     <i class="fab fa-facebook"></i>
//                                 </a>
//                                 <a href="https://www.messenger.com/">
//                                     <i class="fab fa-facebook-messenger"></i>
//                                 </a>
//                                 <a href="https://twitter.com/">
//                                     <i class="fab fa-twitter"></i>
//                                 </a>
//                                 <a href="https://mail.google.com/mail/u/0/#inbox">
//                                     <i class="fas fa-mail-bulk"></i>
//                                 </a>
//                             </div>
//                             <hr>
//                             <div id="follow">
//                                 <i class="far fa-heart"></i>
//                                 <span>Đã Thích : 2k</span>
//                             </div>
//                         </div>
//                     </div>
            
//                     <!-- Phần thông tin đặt hàng -->
//                     <div id="infosellProduct">
//                         <!-- Tên Sản Phẩm -->
//                         <div id="nameProduct">
//                             <span>${htmls.name}</span>
//                         </div>
//                         <!-- Đánh Giá -->
//                         <div id="evaluate">
//                             <div id="evaluate_star">
//                                 <span>2.7</span>
//                                 <i class="far fa-star"></i>
//                                 <i class="far fa-star"></i>
//                                 <i class="far fa-star"></i>
//                                 <i class="far fa-star"></i>
//                             </div>
//                             <hr>
//                             <div id="danhgia">
//                                 <span>3</span>
//                                 <span>Đánh Giá</span>
//                             </div>
//                             <hr>
//                             <div id="daban">
//                                 <span>${htmls.selled}</span>
//                                 <span>Đã Bán</span>
//                             </div>
//                         </div>
//                         <!-- giá và số lượng -->
//                         <div id="price_quantity">
//                             <div>
//                                 <span id="price_Product">${htmls.price}đ</span>
//                             </div>
//                             <hr>
//                             <div>
//                                 <span>Số Lượng : </span>
//                                 <span style="font-weight:bold;">1,2k</span>
//                             </div>
//                             <hr>
//                             <div>
//                                 <span style="font-weight:bold;">50%</span>
//                                 <span>GIẢM</span>
//                             </div>
//                         </div>
//                         <!-- thông tin sản phảm -->
//                         <div id="productInformation">
//                             <table border="0" cellspacing="20" cellpadding="0">
//                                 <tr>
//                                     <td>Deal Sốc</td>
//                                     <td>
//                                         Mua Kèm Deal Sốc
//                                     </td>
//                                 </tr>
            
//                                 <tr>
//                                     <td>Vận Chuyện Tới </td>
//                                     <td>
//                                         Đồng Thịnh - Minh Đài - Tân Sơn - Phú Thọ
//                                     </td>
//                                 </tr>
            
//                                 <tr>
//                                     <td>Phí Vận Chuyển </td>
//                                     <td>23.000đ</td>
//                                 </tr>
            
//                                 <tr>
//                                     <td>Size</td>
//                                     <td>
//                                       <form name="kich_thuoc">
//                                         <input type="radio" name="size" value="Size Nhỏ" onclick="sizeMin()"> Size Nhỏ <br>
//                                         <input type="radio" name="size" value = "Size Trung Bình" onclick="sizeAVG()"> Size Trung Bình <br>
//                                         <input type="radio" name="size" value="Size To" onclick="sizeMax()"> Size To
//                                       </form>
//                                     </td>
//                                 </tr>
            
//                                 <tr>
//                                     <td>Số Lượng</td>
//                                     <td>
//                                         <input type="number" value="1" style="width:50px" id="so_luong">
//                                         <span>3000 sản phẩm có sẵn</span>
//                                     </td>
//                                 </tr>     
//                             </table>
//                         </div>
//                         <hr>
//                         <div id="confirmSell">
//                             <button id="add_cart" onclick="addCart()">
//                                 Thêm Vào Giỏ Hàng
//                             </button>
                            
//                             <button id="sellProduct" onclick="sellProduct()" value="0">
//                                 Mua Hàng
//                             </button>
//                        </div>
//                         <!-- bảo hành -->
//                         <div id="insurance">
//                             <div>
//                                 <span>Shop Đảm Bảo : </span>
//                             </div>
//                             <div>
//                                 <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
            
            
//                 <!-- Phần chủ của hàng -->
//             <div id="infomation_shop">
//                 <div id="employee">
//                     <div id="logo_shop">
//                         <img src="img/chi-vang-ba-vi-a-1434.jpg">
//                     </div>
//                     <div id="status_shop">
//                         <div id="shop_name">
//                             Sữa Chị Vàng
//                         </div>
//                         <div id="time_active">
//                             Online 25 Phút Trước
//                         </div>
//                         <div id="chat">
//                             <button onclick="chatNow()">
//                                 <i class="fas fa-sms"></i>
//                                 <div>Chát Ngay</div>
//                             </button>
//                             <button>
//                                <a href="xemShop.html" style="text-decoration: none; color:black;">
//                                 <i class="fas fa-store-alt"></i>
//                                 <div>Xem Shop</div>
//                                </a>
//                             </button>
//                             <div id="chat_now">
                                
//                             </div>
//                         </div>
//                     </div>
//                  </div>
             
//                 <hr>
//                  <div id="rate_feedback">
//                      <table border="0" cellspacing="20">
//                          <tr>
//                              <td id="title_rate">
//                                  <span style="color:black">Đánh Giá : </span>
//                                  <span>9</span>
//                              </td>
//                              <td id="title_rate">
//                                 <span>Tỷ Lệ Phản Hồi :</span>
//                                 <span> 62%</span>
//                              </td>
//                              <td id="title_rate">
//                                 <span>Thành Lập : </span>
//                                 <span>10 năm</span>
//                              </td>
//                          </tr>
            
            
//                          <tr>
//                             <td id="title_rate">
//                                 <span style="color:black">Sản Phẩm : </span>
//                                 <span>24</span>
//                             </td>
//                             <td id="title_rate">
//                                <span>Thời Gian Phản Hồi : </span>
//                                <span>Trong Vài Phút</span>
//                             </td>
//                             <td id="title_rate">
//                                <span>Người Tham Gia : </span>
//                                <span>12 Nghìn Người</span>
//                             </td>
//                          </tr>
//                      </table>
//                  </div>
//             </div>
            
          
            
            
             
//             </div>
//                 `
//             })
//         }
       
       
// })


function nextProduct(id){
    // alert(id);
    fetch(productsApi)
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        var htmls = products.find(function(product){
            return product.id == id;
        })
        document.getElementById("comment_products").style.top ="230px";
      document.getElementById("footer").innerHTML = "";
        document.getElementById("web").innerHTML = `
                
            
            
            <div id="cart_product">
            
            
            </div>
            
            <div id="webb">
                <div id="contentProduct">
                    <!-- Phần Ảnh sản phẩm -->
                    <div id="imgProduct">
                        <!-- ẢNh to hiển thị -->
                        <div id="imgRender">
                            ${htmls.img}
                        </div>
                        <!-- 1 vài ảnh  -->
                        <div id="imgOther">
                            <img src="products/sữa chua nha đam size nhỏ.jpg" alt=""  id="renderImg1" onclick="renderIMG1()">
                            <img src="products/sữa chua trà xanh size nhỏ.jpg" alt="" id="renderImg2" onclick="renderIMG2()">
                            <img src="products/sữa tươi dê tuyệt trùng và thanh trùng.jpg" alt="" id="renderImg3" onclick="renderIMG3()">
                            <img src="products/trà sữa các loại.jpg" alt="" id="renderImg4" onclick="renderIMG4()">
                        </div>
                        <!-- chia sẻ và follow -->
                        <div id="share_follow">
                            <div id="share">
                                <span>Chia Sẻ : </span>
                                <a href="https://www.facebook.com/">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.messenger.com/">
                                    <i class="fab fa-facebook-messenger"></i>
                                </a>
                                <a href="https://twitter.com/">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://mail.google.com/mail/u/0/#inbox">
                                    <i class="fas fa-mail-bulk"></i>
                                </a>
                            </div>
                            <hr>
                            <div id="follow">
                                <i class="far fa-heart"></i>
                                <span>Đã Thích : 2k</span>
                            </div>
                        </div>
                    </div>
            
                    <!-- Phần thông tin đặt hàng -->
                    <div id="infosellProduct">
                        <!-- Tên Sản Phẩm -->
                        <div id="nameProduct">
                            <span>${htmls.name}</span>
                        </div>
                        <!-- Đánh Giá -->
                        <div id="evaluate">
                            <div id="evaluate_star">
                                <span>2.7</span>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <hr>
                            <div id="danhgia">
                                <span>3</span>
                                <span>Đánh Giá</span>
                            </div>
                            <hr>
                            <div id="daban">
                                <span>${htmls.selled}</span>
                                <span>Đã Bán</span>
                            </div>
                        </div>
                        <!-- giá và số lượng -->
                        <div id="price_quantity">
                            <div>
                                <span id="price_Product">${htmls.price}đ</span>
                            </div>
                            <hr>
                            <div>
                                <span>Số Lượng : </span>
                                <span style="font-weight:bold;">1,2k</span>
                            </div>
                            <hr>
                            <div>
                                <span style="font-weight:bold;">50%</span>
                                <span>GIẢM</span>
                            </div>
                        </div>
                        <!-- thông tin sản phảm -->
                        <div id="productInformation">
                            <table border="0" cellspacing="20" cellpadding="0">
                                <tr>
                                    <td>Deal Sốc</td>
                                    <td>
                                        Mua Kèm Deal Sốc
                                    </td>
                                </tr>
            
                                <tr>
                                    <td>Vận Chuyện Tới </td>
                                    <td>
                                        Đồng Thịnh - Minh Đài - Tân Sơn - Phú Thọ
                                    </td>
                                </tr>
            
                                <tr>
                                    <td>Phí Vận Chuyển </td>
                                    <td>23.000đ</td>
                                </tr>
            
                                <tr>
                                    <td>Size</td>
                                    <td>
                                      <form name="kich_thuoc">
                                        <input type="radio" name="size" value="Size Nhỏ" onclick="sizeMin()"> Size Nhỏ <br>
                                        <input type="radio" name="size" value = "Size Trung Bình" onclick="sizeAVG()"> Size Trung Bình <br>
                                        <input type="radio" name="size" value="Size To" onclick="sizeMax()"> Size To
                                      </form>
                                    </td>
                                </tr>
            
                                <tr>
                                    <td>Số Lượng</td>
                                    <td>
                                        <input type="number" value="1" style="width:50px" id="so_luong">
                                        <span>3000 sản phẩm có sẵn</span>
                                    </td>
                                </tr>     
                            </table>
                        </div>
                        <hr>
                        <div id="confirmSell">
                            <button id="add_cart" onclick="addCart()">
                                Thêm Vào Giỏ Hàng
                            </button>
                            
                            <button id="sellProduct" onclick="sellProduct()" value="0">
                                Mua Hàng
                            </button>
                       </div>
                        <!-- bảo hành -->
                        <div id="insurance">
                            <div>
                                <span>Shop Đảm Bảo : </span>
                            </div>
                            <div>
                                <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <!-- Phần chủ của hàng -->
            <div id="infomation_shop">
                <div id="employee">
                    <div id="logo_shop">
                        <img src="img/chi-vang-ba-vi-a-1434.jpg">
                    </div>
                    <div id="status_shop">
                        <div id="shop_name">
                            Sữa Chị Vàng
                        </div>
                        <div id="time_active">
                            Online 25 Phút Trước
                        </div>
                        <div id="chat">
                            <button onclick="chatNow()">
                                <i class="fas fa-sms"></i>
                                <div>Chát Ngay</div>
                            </button>
                            <button>
                               <a href="xemShop.html" style="text-decoration: none; color:black;">
                                <i class="fas fa-store-alt"></i>
                                <div>Xem Shop</div>
                               </a>
                            </button>
                            <div id="chat_now">
                                
                            </div>
                        </div>
                    </div>
                 </div>
             
                <hr>
                 <div id="rate_feedback">
                     <table border="0" cellspacing="20">
                         <tr>
                             <td id="title_rate">
                                 <span style="color:black">Đánh Giá : </span>
                                 <span>9</span>
                             </td>
                             <td id="title_rate">
                                <span>Tỷ Lệ Phản Hồi :</span>
                                <span> 62%</span>
                             </td>
                             <td id="title_rate">
                                <span>Thành Lập : </span>
                                <span>10 năm</span>
                             </td>
                         </tr>
            
            
                         <tr>
                            <td id="title_rate">
                                <span style="color:black">Sản Phẩm : </span>
                                <span>24</span>
                            </td>
                            <td id="title_rate">
                               <span>Thời Gian Phản Hồi : </span>
                               <span>Trong Vài Phút</span>
                            </td>
                            <td id="title_rate">
                               <span>Người Tham Gia : </span>
                               <span>12 Nghìn Người</span>
                            </td>
                         </tr>
                     </table>
                 </div>
            </div>
            
          
            
            
             
            </div>
                `
    })

}


// form chat
function chat_user(){
    var FollowChat = document.getElementById("formChat");
    FollowChat.innerHTML = `
    <div class="logChat">
    <img src="img/duong.jpg">
    <span>Cửa hàng Sữa Chị Vàng</span>
    <button id="timesChat" onclick="timeChat()">X</button>
</div>
<div id="render_chat">
    
</div>
<div class="enterChat">
    <input type="text" placeholder="Nhập Tin Nhắn..." id="enterChatss">
    <button id="send" onclick="send()">
        <img src="https://image.flaticon.com/icons/png/512/60/60525.png">
    </button>
</div>
    `
    FollowChat.style.backgroundColor = "papayawhip";
    FollowChat.style.border = "1px solid black";
}

function timeChat(){
    var FollowChat = document.getElementById("formChat");
    FollowChat.innerHTML = "";
    FollowChat.style.backgroundColor = "transparent";
    FollowChat.style.border = "none";
}

function renderTextChat(){
    fetch(chatApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (chat) {
        var html = chat.map(function (chatValue) {
            return `
              <div>${chatValue.content}</div>
            `;
        })
        var renderTextChats = document.getElementById("render_chat");
        renderTextChats.innerHTML = html.join("");
        })
};
renderTextChat();

function send(){
    function promise(ms) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
               resolve();
            },ms)
        })
    }
    promise(1000)
    .then(function(){
        var enterTextChat = document.getElementById("enterChatss").value;
        var dataPost = {
            content: enterTextChat
        };
        var option = {
            method: 'POST', // thêm mới thì dùng post
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(dataPost),
        }
        fetch(chatApi,option)
        .then(function(response){
            return response.json();   
        })
        
    })
    renderTextChat();
   
}


// đánh giá
function evaluateShop(){
    var RenderEvaluate = document.getElementById("danh_gia");
    RenderEvaluate.innerHTML = `
 <button onclick="clickEvaluate()">                      
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png">
</button>
<span>1sao</span>
<button onclick="clickEvaluate()">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png">
</button>
<span>2sao</span>
<button onclick="clickEvaluate()">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png">
</button>
<span>3sao</span>
<button onclick="clickEvaluate()">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png">
</button>
<span>4sao</span>
<button onclick="clickEvaluate()">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png">
</button>
<span>5sao</span>
    `
    document.getElementById("danh_gia").style.backgroundColor = "aqua"
}


function clickEvaluate(){
    alert("Cảm Ơn Bạn Đã Đánh Giá");
    var RenderEvaluate = document.getElementById("danh_gia");
    RenderEvaluate.innerHTML = "";
    document.getElementById("danh_gia").style.backgroundColor = "transparent"
}

// phần report
function reportt(){
    var Report = document.getElementById("report");
    Report.innerHTML = `
    <button id="time_report" onclick="timeReport()">X</button>
    <input type="radio">
     <span>Do sản phẩm của shop kém chất lượng</span>
    <br>
    <input type="radio">
    <span>Khách hàng phục vụ không tận tình</span>
    <br>
    <input type="radio">
    <span>Chất lượng giao hàng không đúng tiến độ</span>
    <br>
    <input type="radio">
    <span>Giao hàng không đúng sản phầm đã mua</span>
    <br>
    <input type="radio">
    <span>Sản phẩm đã quá hạn sử dụng</span>
    <br>
    <button id="send_report" onclick="sendReport()">Gửi</button>
     `
     document.getElementById("report").style.backgroundColor = "aqua";
}

function timeReport(){
    var Report = document.getElementById("report");
    Report.innerHTML = "";
    document.getElementById("report").style.backgroundColor = "transparent";
}

function sendReport(){
    alert("Cảm Ơn Bạn Đã Góp Ý Về Của Hàng");
    var Report = document.getElementById("report");
    Report.innerHTML = "";
    document.getElementById("report").style.backgroundColor = "transparent";
}
// xử lý ảnh hiển Thị

function renderIMG1(){
    var BigIMG = document.getElementById("big_img");
    var renderImg1 = document.getElementById("renderImg1");
    var renderImg2 = document.getElementById("renderImg2");
    var renderImg3 = document.getElementById("renderImg3");
    var renderImg4 = document.getElementById("renderImg4");

    BigIMG.src = "products/sữa chua nha đam size nhỏ.jpg";
    // renderImg1.src = "products/bánh sữa non.jpg";
}

function renderIMG2(){
    var BigIMG = document.getElementById("big_img");
    var renderImg2 = document.getElementById("renderImg2");
    BigIMG.src = "products/sữa chua trà xanh size nhỏ.jpg";

}
function renderIMG3(){
    var BigIMG = document.getElementById("big_img");
    var renderIm3 = document.getElementById("renderImg3");
    BigIMG.src = "products/sữa tươi dê tuyệt trùng và thanh trùng.jpg";

}
function renderIMG4(){
    var BigIMG = document.getElementById("big_img");
    var renderIm4 = document.getElementById("renderImg4");
    BigIMG.src = "products/trà sữa các loại.jpg";

}

// Phần chat ngay
function sendTextChat(){
    
}

function renderTextChats(){
    fetch(chatApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (chat){
        var html = chat.map(function(chatValue){
            return `
              <div>${chatValue.content}</div>
            `
        })
        var Render = document.getElementById("text_by_client");
        Render.innerHTML += html.join("");
    })
}


function sendTextChats(){
    function promise(ms) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
               resolve();
            },ms)
        })
    }
    promise(1000)
    .then(function(){
        var enterTextChat = document.getElementById("nhap_text").value;
        var dataPost = {
            content: enterTextChat
        };
        var option = {
            method: 'POST', // thêm mới thì dùng post
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(dataPost),
        }
        fetch(chatApi,option)
        .then(function(response){
            return response.json();   
        })
      
    })
    // renderTextChats();
   
}

function chatNow(){
   document.getElementById("chat_now").innerHTML = `
   <button style="position:absolute;right:0px" onclick="timesChatNow()">X</button>
                          <div class="logo_name_shop">
                              <img src="img/duong.jpg">
                              <span>CTY SỮA CHỊ VÀNG</span>
                          </div>
                          <div class="contentChat">
                              <div class="text_by_user">
                                  Cửa hàng sữa chị vàng kính chào quý khách
                              </div>
                              <div id="text_by_client">
                                  <div>Chảo shop em muốn phản hồi về shop rất nheieuf</div>
                              </div>
                          </div>
                          <div class="enterChats">
                              <input type="text" placeholder="Mời bạn nhập tin nhắn..." id="nhap_text">
                              <button onclick="sendTextChats()">Gửi</button>
                          </div>
   `
   document.getElementById("chat_now").style.backgroundColor = "wheat";
   document.getElementById("chat_now").style.border = "2px solid sienna";

}

function timesChatNow(){
    document.getElementById("chat_now").innerHTML = "";
    document.getElementById("chat_now").style.backgroundColor = "transparent";
    document.getElementById("chat_now").style.border = "none";
}