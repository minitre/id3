


    cons0le = {}
    
    cons0le.id1 = "" ;
    
    cons0le.id2 = "" ;
    
    cons0le.log = function(a) {     
            
            
            if (a == "a")  cons0le.id1 = cons0le.id1 + "a" ;
    
    
    
            if (a == "b")  cons0le.id2 = cons0le.id2 + "b"  ;
    
    }
    
    
    id1 = setInterval( _ => {
    
    
            
            if (window.myd) {
    
    
    
            i1name.innerHTML = myd.name;
    
            i1price.innerHTML = myd.price;
    
    
            i1name.set = true;
    
    
    
    
                    }
    
    
    
    
                    cons0le.log("a");
    
    
    
    } , 3 );
    
    
    id2 = setInterval( _ => {
    
            if (i1name.set) {
    
    
    
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
    
    
    