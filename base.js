
//click tìm kiếm

function btnCick() {
    var choice = confirm("Bạn cần đăng nhập để có thể tìm kiếm sản phẩm");
    if(choice == 1){
       window.location.replace("login.html")
    }
}

// Phần chạy banner
var banners = [
    {
        id:1,
        img:"<img src='banner/banhsua1.jpg'>"
    },
    {
        id:2,
        img : "<img src='banner/banhsuakieumoi.jpg'>"
    },
    {
        id:3,
        img:"<img src='banner/baobibanhsua.jpg'>"
    },
    {
        id:4,
        img:"<img src='banner/caramen.jpg'>"
    },
    {
        id:5,
        img:" <img src='banner/nepcap.jpg'>"
    },
    {
        id:6,
        img:"<img src='banner/nhanbanhsua.jpg'>"
    },
    {
        id:7,
        img:"<img src='banner/suachua1.jpg'>"
    },
    {
        id:8,
        img:"<img src='banner/tuoide.jpg'>"
    },
    {
        id:9,
        img:"<img src='banner/vangsua.jpg'>"
    }
];

var bannerPerPage= 1;
var currentPage = 1;
var start = 0;
var end= bannerPerPage;
var totalPage =  Math.ceil(banners.length / bannerPerPage);
function renderBanner() {
    var html='';
    var render = document.getElementById("run_banner");
    var exam = banners.map(function (banner,index) {
        if(index  >= start &&  index < end){
            return `
           ${banner.img}
        `
        }
})
render.innerHTML = exam.join("");
}
renderBanner();

function next() {
    currentPage++;
    if(currentPage > totalPage){
        currentPage = 1;
    }
 
        start = (currentPage - 1)*bannerPerPage;
        end  =  (currentPage)*bannerPerPage;
        renderBanner();
}
setInterval(function(){
    next();
},5000)

var pages = document.getElementsByClassName("items");
for(var page of pages){
    page.addEventListener('click',function(){
       
        this.classList.add("color");
           
        currentPage = this.value;
        // page[0].classList.add("color")
        
        start = (currentPage - 1)*bannerPerPage;
        end  =  (currentPage)*bannerPerPage;
        renderBanner();
        })
}



function back() {
    currentPage--;
    if(currentPage < 1){
        currentPage = 9;
    }
    start = (currentPage - 1)*bannerPerPage;
    end = (currentPage * bannerPerPage);
    renderBanner();
}

//Chữ nhấp nháy Dịch Cửa Hnagf Và Ưu Đãi
var eventWebHeader = document.getElementById("eventWeb_header");
setInterval(function() {
   eventWebHeader.classList.toggle("chageColor");
},2000)


// Phần Sản Phẩm Bán Chạy
var listProductSell = document.getElementsByClassName('clickProductSell');
for(var value of listProductSell){
   value.addEventListener("click",function(){
       var choice = confirm("Bạn Cần Đăng Nhập Để Xem Sản Phẩm");
       if(choice == 1){
        window.location.replace("login.html")
       }
   })

}

var seeMore = document.getElementById("see_more");
seeMore.addEventListener("click",function(){
    var choice = confirm("Bạn Cần Đăng Nhập Để Xem Sản Phẩm");
    if(choice == 1){
        window.location.replace("login.html")
    }
})

// Phần Thời gian chạy FlastSale

setInterval(function() {
    var Day = new Date().getDate();
     var Hours = new Date().getHours();
     var Minutes = new Date().getMinutes();
     var Seconds = new Date().getSeconds();
     document.getElementById("run_time_day").innerHTML=Day;
    document.getElementById("run_time_hours").innerHTML=Hours;
    document.getElementById("run_time_minutes").innerHTML=Minutes;
    document.getElementById("run_time_seconds").innerHTML=Seconds;

},1000)

// Sản Phẩm Sale
var listProductsale = document.getElementsByClassName('list_flastSale_product');
for(var value of listProductsale){
   value.addEventListener("click",function(){
       var choice = confirm("Bạn Cần Đăng Nhập Để Xem Sản Phẩm");
       if(choice == 1){
        window.location.replace("login.html")
       }
   })

}
