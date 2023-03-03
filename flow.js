// $(document).ready(function () {
//     $(".tab").click(function () {
//         $(".tab").removeClass("active");
//         // $(".tab").addClass("active"); 
//         $(this).addClass("active");
//     });
// });
$(document).ready(function () {
    $(".tab").click(function () {
        var circle = document.getElementById("circleNav");
        $(circle).click(function () {
            circle.classList.remove("circleNav");
            circle.ClassList.add("circleNav");
        })

        $(".tab").click(function () {
            $(".tab").removeClass("active");
            $(this).addClass("active");
        })
    });
});
