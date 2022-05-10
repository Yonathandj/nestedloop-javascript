// Hollow Rectangel Pattern
let sign = "";
for (a = 0; a < 5; ++a){
    for (b = 0; b < 5; ++b){
        if ( a === 0 || a === 5 - 1){
            sign += "*";
        } else if ( b === 0 || b === 5 - 1){
            sign += "*";
        } else {
            sign += " ";
        }
    }
    sign += "\n";
}
console.log(sign);



// DRY CALL TEST HOLLOW RECTANGLE PATTERN
/*
a			a < 5			b			b < 5			OUTPUT

0			TRUE			0			TRUE				*
0			TRUE			1			TRUE				**
0			TRUE			2			TRUE				***
0			TRUE			3			TRUE				****
0			TRUE			4			TRUE				*****\n
0			TRUE			5 		    FALSE			    *****\n

1			TRUE			0			TRUE				*
1			TRUE			1			TRUE				*  "
1			TRUE			2			TRUE				*   "
1			TRUE			3			TRUE				*    "
1			TRUE 		    4 		    TRUE				*     *\n
1			TRUE			5			FALSE			    *      *\n

2			TRUE			0			TRUE				*
2			TRUE			1			TRUE				*  "
2			TRUE			2			TRUE				*	"
2			TRUE			3			TRUE				*    "
2			TRUE			4			TRUE				*     *\n
2			TRUE			5			FALSE			    *	  *\n

3			TRUE			0			TRUE				*
3			TRUE			1			TRUE				*   "
3			TRUE			2			TRUE				*	 "
3			TRUE			3			TRUE				*     "
3			TRUE			4			TRUE				*	   *\n
3			TRUE			5			FALSE			    *      *\n
					                                 
4			TRUE			0			TRUE				*
4			TRUE			1			TRUE				**
4			TRUE			2			TRUE				***
4			TRUE			3			TRUE				****
4			TRUE			4			TRUE				*****\n
5			FALSE		    5			FALSE			    *****\n
*/

// End Of Hollow Rectangle Pattern

// Hollow Rectangular Pattern
let mark = ""
for(n = 0; n < 5; ++n){
    for(o = 0; o < 12; ++o){
        if( n === 0 || n === 5 - 1){
            mark += "*";
        } else if(o === 0 || o === 12 - 1){
            mark += "*";
        } else{
            mark += " ";
        }
    }
    mark += "\n";
}
console.log(mark);
// End of Hollow Rectangular Pattern


