var accountApi = ' http://localhost:3000/account';
var productsApi = ' http://localhost:3000/products';


function infomationProduct() {
    
    // var contentProduct = document.getElementById("contentProduct");
    document.getElementById("contentProduct").innerHTML = `
    <!-- Phần Ảnh sản phẩm -->
    <div id="imgProduct">
        <!-- ẢNh to hiển thị -->
        <div id="imgRender">
            <img src="products/sữa chua nha đam size nhỏ.jpg">
        </div>
        <!-- 1 vài ảnh  -->
        <div id="imgOther">
            <img src="products/sữa chua nha đam size nhỏ.jpg" alt="">
            <img src="products/sữa chua trà xanh size nhỏ.jpg" alt="">
            <img src="products/sữa tươi dê tuyệt trùng và thanh trùng.jpg" alt="">
            <img src="products/trà sữa các loại.jpg" alt="">
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
            <span>bánh sữa nha đam size nhỏ có nhân là hạt nha đam , sữa được làm từ bò tươi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
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
                <span>1.2k</span>
                <span>Đã Bán</span>
            </div>
        </div>
        <!-- giá và số lượng -->
        <div id="price_quantity">
            <div>
                <span>60.000đ</span>
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
            <table border="0" cellspacing="30" cellpadding="50">
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
                      <input type="radio" name="size"> Size Nhỏ <br>
                      <input type="radio" name="size"> Size Trung Bình <br>
                      <input type="radio" name="size"> Size To
                    </td>
                </tr>

                <tr>
                    <td>Số Lượng</td>
                    <td>
                        <input type="number" value="1" style="width:50px">
                        <span>3000 sản phẩm có sẵn</span>
                    </td>
                </tr>

                <tr colspan="2">
                    <td id="confirmSell">
                        <button id="add_cart">
                            Thêm Vào Giỏ Hàng
                        </button>
                        
                        <button id="sellProduct" onclick="testt()">
                            Mua Hàng
                        </button>
                   </td>
                </tr>

            </table>
        </div>
        <hr>

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
 `


}

   fetch(productsApi)
.then(function(response){
    return response.json();
})
.then(function(products){
    var productss = document.getElementsByClassName("product");
    for(var data of productss){
       data.addEventListener("click",function(e){
           var result = this.value;
           console.log(result);
        var exam = products.find(function(product){
            return product.id === parseInt(result);
        })
        // window.location.replace("renderProductSearch.html")

        infomationProduct();
       })
    }
  
})  