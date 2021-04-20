

cons0le = {}

cons0le.id1 = "" ;

cons0le.id2 = "" ;

cons0le.log = function(a) {     
        
        
        if (a == "a")  cons0le.id1 = cons0le.id1 + "a" ;



        if (a == "b")  cons0le.id2 = cons0le.id2 + "b"  ;


        if (a == "c")  cons0le.id3 = cons0le.id4 + "c" ;



        if (a == "d")  cons0le.id3 = cons0le.id4 + "d"  ;

}


id1 = setInterval( _ => {


        
        if (window.myd) {


        saleprice.innerHTML = myd.price;

        sale.style.visibility = "visible";


        saleprice.set = true;

        price.style.textDecoration = "line-through" ;




                }




                cons0le.log("a");



} , 3 );


id2 = setInterval( _ => {

        if (saleprice.set) {



                clearInterval(id1);
                clearInterval(id2);




        }


        cons0le.log("b");


        if ( cons0le.id1.length > 3000) {


                clearInterval(id1);
                clearInterval(id2);

                console.log(" Error: timeout... refresh page to try again");

        }



} , 3 );