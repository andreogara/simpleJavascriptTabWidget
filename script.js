(function(){
    function handleClick(e){
        e.preventDefault();
        var target = e.target;
        if (target.nodeName == "A"){
            var divToShow = target.getAttribute('href');
            var divs = target.parentNode.parentNode.nextElementSibling.children;
            for (var i = 0; i < divs.length; i++){
                var classLists = divs[i].classList;
                if (!classLists.contains("hidden") && divs[i].dataset.id != divToShow){
                    classLists.add("hidden");
                }
                else if(divs[i].dataset.id == divToShow && classLists.contains("hidden")){
                    classLists.remove("hidden");
                }
            }
        }
    }
   var tabContainers = document.getElementsByClassName("tabContainer");
   for (var i = 0; i < tabContainers.length; i++){
       var tabGroup = tabContainers[i];
       tabGroup.addEventListener("click", handleClick, true);
   }
})();