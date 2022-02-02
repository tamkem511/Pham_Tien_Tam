
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
                    var accountApi = '   http://localhost:3000/account';
                    var productsApi = ' http://localhost:3000/products';
                    
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
                    function Cart() {
                        // var footer = document.getElementById('footer');
                        // footer.style.display = 'none';
                        // var sortByIndex = document.getElementById('sort_by_index');
                        // sortByIndex.style.display = 'none';
                        // var nextPages = document.getElementById('nextPage');
                        // nextPages.style.display = 'none';
                        // var renderProducts = document.getElementById('renderProducts');
                        // renderProducts.style.display = 'none';
                        // var eventWeb = document.getElementById('eventWeb');
                        // eventWeb.style.display = 'none';
                        // var banner = document.getElementById("banner");
                        // banner.style.display = "none";
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
                                        <div class="product">
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
                                        </div>
                                    `
                                }
                    
                            })
                            renderProducts.innerHTML = examProduct.join("");
                        })
                    }
                    // renderProduct();
                    function seeFull() {
                        renderProduct();
                    }
                    
                    
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
                    

                    
                    
                    