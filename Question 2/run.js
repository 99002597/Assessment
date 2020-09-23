
var electronics= ()=>{
    var name = document.getElementById("list").value;
    if(name == "Mobile")
        {
            var product = ['OnePlus','Samsung', 'iPhone', 'Honor'];
            document.getElementById("show").innerHTML=product.join("<br/>");
        }
    else if(name == "Laptop")
        {
            var product = ['Macbook','HP','Dell','Lenovo'];
            document.getElementById("show").innerHTML=product.join("<br/>");
        }
    else
        {
            var product = ['Toshiba','Xiaomi','LG','Samsung 4K'];
            document.getElementById("show").innerHTML=product.join("<br/>");
        }
                     }