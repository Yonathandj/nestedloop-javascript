// Left Triangle Pattern
let sign = "";
for(a = 0; a < 5; ++a){
    for (b = 0; b <= a; ++b) {
        sign += "*";
    }
    sign += "\n";
}
console.log(sign);

// End of Left Triangle Pattern

// Right Triangle Pattern
let mark = "";
let n = 5;
for(c = 1; c <= n; ++c){
    for(d = 0; d < n - c; ++d){
        mark += " ";
    }
    for(e = 0; e < c; ++e){
        mark += "*";
    }
    mark += "\n";
}
console.log(mark);



// Trace Table or Dry Call Test
/*
c				c <= 5			        d				      d < 5 - c			        e						    e < c				        Output
1				True					0						True					-							-							" "
1				True					1						True					-							-							"  "
1				True					2						True					-							-							"   "
1				True					3						True					-							-							"    "
1				True					4						False					Play			            True				        "     *"
2				True					0						True					-							-							" "
2				True					1						True					-							-							"  "
2				True					2						True					-							-							"   "
2				True					3						False					Play				        -							"   **"
3				True					0						True					-							-							" "
3				True					1						True					-							-							"  "
3				True					2						True					Play			            True					    "  ***"
4				True					0						True					-							-							" "
4				True					1						True					-							-							" ****"
5				True					0						False					Play					    -							"*****"
            

*/