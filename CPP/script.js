function Copy(id){
    var string=document.getElementById(id).textContent;
    navigator.clipboard.writeText(string);
}


window.onload=function(){
    var parent=document.getElementById("part-list");
    var PageList=[
        ["part0.html","目標物を確認しよう"],
        ["part1.html","出力をしよう"],
        ["part2.html","計算をしよう"],
        ["part3.html","変数の使い方"]
    ];

    console.log(parent)

    for(var i=0;i<PageList.length;++i){
        var newelement=document.createElement("a");
        newelement.href=PageList[i][0];
        newelement.textContent=PageList[i][1];
        newelement.classList.add("uk-link-reset","uk-button-text");

        var addelement=document.createElement("li");
        addelement.appendChild(newelement);
        parent.appendChild(addelement);
    }
}