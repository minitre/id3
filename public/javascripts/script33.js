

cons0le.id3 = "" ;

cons0le.id4 = "" ;



id3 = setInterval( _ => {


        
        if (window.exrates) {


        europrice.innerHTML = " &euro; " + 169 * exrates.rates.EUR

        euro.style.visibility = "visible";


        europrice.set = true;


                }




                cons0le.log("c");



} , 3 );


id4 = setInterval( _ => {

        if (europrice.set) {



                clearInterval(id3);
                clearInterval(id4);




        }


        cons0le.log("d");


        if ( cons0le.id3.length > 3000) {


                clearInterval(id3);
                clearInterval(id4);

                console.log(" Error: cannot get exchange rates ...   ");

        }



} , 3 );