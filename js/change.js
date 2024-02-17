let url = "https://www.googleapis.com/books/v1/volumes?q="

function get(str){$.getJSON(str,
    function (data) {
        let view = "";
        view += '<ul>';
        for (let i = 0; i < 3; i++) {
            let item = data.items[i];
            view += '<li>題名：' + item.volumeInfo.title + '</li>';
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
});

$("#edit1").on("click", function(){
    if (localStorage.getItem("memo_1")) {
        let key = `memo_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            let res = "";
            res += "題名："
            res += data.items[0].volumeInfo.title + "         ";
            // res += '<br>'
            res += "概要："
            res += data.items[0].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

$("#edit2").on("click", function(){
    if (localStorage.getItem("memo_1")) {
        let key = `memo_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            let res = "";
            res += "題名："
            res += data.items[1].volumeInfo.title + "         ";
            res += "概要："
            res += data.items[1].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

$("#edit3").on("click", function(){
    if (localStorage.getItem("memo_1")) {
        let key = `memo_${Object.keys(localStorage).length}`;
        const value = localStorage.getItem(key);
        $("#text_area").val(value);
    }
    else {
        $.getJSON(url, function (data) {
            let res = "";
            res += "題名："
            res += data.items[2].volumeInfo.title + "         ";
            res += "概要："
            res += data.items[2].volumeInfo.description
            $("#text_area").val(res);
        });
    }
});

let i = 1;
$("#save").on("click", function(){
    const value = $("#text_area").val();
    let key = `memo_${i}`;
    localStorage.setItem(key, value);
    i ++;
    alert("保存されました");
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