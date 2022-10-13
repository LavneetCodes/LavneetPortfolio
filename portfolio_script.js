

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scrollup button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //removing smooth scrolling of slide up button
        $('html').css("scrollBehavior","auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying the smooth scrolling for each menu of navbar
        $('html').css("scrollBehavior","smooth");
    });

    $('.home .home-content a').click(function(){
        // applying the smooth scrolling for hire me button
        $('html').css("scrollBehavior","smooth");
    });

    


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation script 
    var typed = new Typed(".typing-1", {
        strings: ["Web Developer","Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed = new Typed(".typing-2", {
        strings: ["Web Developer","Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Read more link script
    function myRead(){
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("readmore");

        if(dots.style.display == "none"){
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        }else{
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    

    // Connecting Database
    
     
    /*
    var db=openDatabase("Portfolio", "1.0","Portfolio","65535");
    $(function(){
        $("#insert").click(function(){
            var email = $("Email").val();
            var phone = $("Phone").val();
            var name = $("Cname").val();
            var sub = $("Subject").val();
            var msg =$("Message").val();
            db.transaction(function(transaction){
                var sql = "INSERT INTO contact_me (Email,Phone,Cname,Subject,Message) VALUES (?,?,?,?,?)";
                transaction.executeSql(sql,[email,phone,name,sub,msg],
                    function(){
                        alert("Your message has been sent Successfully..!");
                    },
                    function(transaction,err){
                        alert(err.message);
                    })

            })    
        })
    })

*/

   // owl carousel script
   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
   });
});










