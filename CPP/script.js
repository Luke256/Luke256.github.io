function Copy(id){
    var string=document.getElementById(id).textContent;
    navigator.clipboard.writeText(string);

    var hide_dropdown=function (){
        var target=document.getElementById(id);
        var drop=target.parentNode.nextElementSibling.nextElementSibling;
        
        UIkit.dropdown(drop).hide();
    }
    setTimeout(hide_dropdown,1000);
}


window.onload=function(){
    var parent=document.getElementById("part-list");
    var PageList=[
        ["part0.html","目標物を確認しよう"],
        ["part1.html","出力をしよう"],
        ["part2.html","計算をしよう"],
        ["part3.html","変数の使い方"]
    ];

    for(var i=0;i<PageList.length;++i){
        var newelement=document.createElement("a");
        newelement.href=PageList[i][0];
        newelement.textContent=PageList[i][1];
        newelement.classList.add("uk-link-reset","uk-button-text");

        var addelement=document.createElement("li");
        addelement.appendChild(newelement);
        parent.appendChild(addelement);
    }

    var codelist=document.getElementsByTagName("pre");
    for(var i=0;i<codelist.length;++i){
        var newelement=document.createElement("div");
        newelement.classList.add("uk-text-center","uk-padding-remove","uk-margin-remove");
        newelement.textContent="copied!"
        newelement.setAttribute("uk-dropdown","mode:click;pos: top-center;delay-hide: 1000;");
        newelement.setAttribute("style","min-width:0px; box-shadow:0 0px 0px; background-color:rgba(0,0,0,0); z-index:0;");
        
        codelist[i].parentElement.appendChild(newelement);
    }
}

function school(){
    alert("アラート!!!");
}
