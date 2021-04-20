d = document;

item = ""

g = ""



img = d.getElementsByTagName("img");

for (i = 0 ;  i < img.length ; ++ i) {


    if ( img[i].alt = "hoodie" ) {


        item = img[i].parentElement.parentElement;






        img[i].outerHTML = '<a href = "item3.htm">' + img[i].outerHTML + ' </a> '    ;





        g = item.getElementsByTagName("span");

        g[0].outerHTML = '<a href = "item3.htm">' + g[0].outerHTML + ' </a> '    ;

        g[1].outerHTML = '<a href = "item3.htm">' + g[1].outerHTML + ' </a> '    ;



    }
}