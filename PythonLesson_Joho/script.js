window.onload = function(){
    var ProgramElements = document.getElementsByTagName("program");
    // console.log(ProgramElements);
    for(var i=0; i < ProgramElements.length; ++i){
        var id = "code-" + String(i);
        var ProgramBox = document.createElement("div");
        ProgramBox.classList.add("uk-card");
        // ProgramBox.classList.add("uk-card-default");

        var ProgramPre = document.createElement("pre");
        ProgramPre.style="background-color:#fcfcfc;";

        var ProgramCode = document.createElement("code");
        ProgramCode.id = id;
        ProgramCode.classList.add("prettyprint");
        ProgramCode.classList.add("lang-python");
        ProgramCode.textContent=ProgramElements[i].textContent.substr(1).trim();

        ProgramElements[i].textContent="";

        ProgramPre.appendChild(ProgramCode);
        ProgramBox.appendChild(ProgramPre);


        var CopyButton = document.createElement("button");
        CopyButton.id=i;
        CopyButton.classList.add("uk-button");
        CopyButton.classList.add("uk-button-default");
        CopyButton.classList.add("uk-position-top-right");
        CopyButton.classList.add("uk-position-small");
        CopyButton.classList.add("uk-margin-remove");
        CopyButton.classList.add("uk-padding-remove");

        CopyButton.style="border:0px; color: black; padding-right:10px !important;";

        console.log(id)
        CopyButton.addEventListener("click", function(){
            var id = "code-" + this.id;
            console.log(id);
            var string=document.getElementById(id).textContent;
            navigator.clipboard.writeText(string);

            UIkit.notification({
                message: "<span uk-icon='icon: check'></span> コピーしました！", 
                timeout:1500, 
                width: 200,
                status:'success'})
        });

        CopyIcon = document.createElement("span");
        CopyIcon.setAttribute("uk-icon", "icon:copy; ratio:1;");
        CopyButton.appendChild(CopyIcon);
        console.log(CopyButton);

        ProgramBox.appendChild(CopyButton);

        ProgramElements[i].appendChild(ProgramBox);
    }
}
