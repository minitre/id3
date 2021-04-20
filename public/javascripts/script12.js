d = document;

item = ""

g = ""



img = d.getElementsByTagName("img");

for (i = 0 ;  i < img.length ; ++ i) {


    if ( img[i].alt = "shirt" ) {


        item = img[i].parentElement;






        img[i].outerHTML = '<a href = "item3.htm">' + img[i].outerHTML + ' </a> '    ;



        console.log(img[i].parentElement);   




        img[i].style.width = "100%";





        g = item.getElementsByTagName("span");

        g[0].outerHTML = '<a href = "item3.htm">' + g[0].outerHTML + ' </a> '    ;

        g[1].outerHTML = '<a href = "item3.htm">' + g[1].outerHTML + ' </a> '    ;

        h = item.getElementsByTagName("a");

        h[0].style.margin = "0px";






    }
}