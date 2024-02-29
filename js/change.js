let url = "https://www.googleapis.com/books/v1/volumes?q="

function get(str){$.getJSON(str,
    function (data) {
        let view = "";
        view += '<ul>';
        for (let i = 0; i < 3; i++) {
            let item = data.items[i];
            // view += '<li>題名：' + item.volumeInfo.title + '</li>';
            let num = i + 1;
            view += '<li>' + num + '冊目：' + item.volumeInfo.title + '</li>';
        }
        view += '</ul>';
        $("#content").html(view);
    }
)};

$("#searchButton").on("click", function(){
    let element = document.getElementById("keyword");
    url += element.value;
    // console.log(url);
    get(url);
    $("#edit1").html("編集");
    $("#edit2").html("編集");
    $("#edit3").html("編集");
    $(function() {

        $("#edit1").hover(function() {

        // カーソルが当たった時の処理
        $(this).css("background-color", "#f4c33a");

        }, function() {

        // カーソルが離れた時の処理
        $(this).css("background-color", "antiquewhite");

        });
    });
    $(function() {

        $("#edit2").hover(function() {

        // カーソルが当たった時の処理
        $(this).css("background-color", "#f4c33a");

        }, function() {

        // カーソルが離れた時の処理
        $(this).css("background-color", "antiquewhite");

        });
    });
    $(function() {

        $("#edit3").hover(function() {

        // カーソルが当たった時の処理
        $(this).css("background-color", "#f4c33a");

        }, function() {

        // カーソルが離れた時の処理
        $(this).css("background-color", "antiquewhite");

        });
    });
    $("#memo").slideDown(1000);
});

let title1 = "";
$("#edit1").on("click", function(){
    if (localStorage.getItem(true)) {
        let key = `title1_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            title1 = data.items[0].volumeInfo.title;
            let res = "";
            res += "1冊目   "
            res += "概要："
            res += data.items[0].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

let title2 = "";
$("#edit2").on("click", function(){
    if (localStorage.getItem(true)) {
        let key = `title2_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            title2 = data.items[1].volumeInfo.title;
            let res = "";
            res += "2冊目"
            res += "概要："
            res += data.items[1].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

let title3 = "";
$("#edit3").on("click", function(){
    if (localStorage.getItem(true)) {
        let key = `title3_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            title3 = data.items[2].volumeInfo.title;
            let res = "";
            res += "3冊目 "        
            res += "概要："
            res += data.items[2].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

// let i = 1;
let firstBookIndex = 1;
let secondBookIndex = 1;
let thirdBookIndex = 1;
$("#save").on("click", function(){
    const value = $("#text_area").val();
    
    if (value[0] == 1) {
        let key = `${title1}_${firstBookIndex}`;
        console.log({key});
        localStorage.setItem(key, value);
        firstBookIndex ++;
        alert("保存されました");
    };
    if (value[0] == 2) {
        let key = `${title2}_${secondBookIndex}`;
        console.log({key});
        localStorage.setItem(key, value);
        secondBookIndex ++;
        alert("保存されました");
    };
    if (value[0] == 3) {
        let key = `${title3}_${thirdBookIndex}`;
        console.log({key});
        localStorage.setItem(key, value);
        thirdBookIndex ++;
        alert("保存されました");
    };
});

// $("#clear").on("click", function(){
//     localStorage.removeItem("memo");
//     alert("削除しました");
//     $("#text_area").val("");
// })

// if (localStorage.getItem("memo")) {
//     const value = localStorage.getItem("memo");
//     $("#text_area").val(value);
// }