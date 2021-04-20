d = document;

img = d.getElementsByTagName("img");

for (i = 0 ;  i < img.length ; ++ i) {


    if ( img[i].alt = "hoodie" ) {

        img[i].outerHTML = '<a href = "item3.htm"> <img src="hoodie2.PNG" alt = "hoodie"> </a> '    ;
    }
}