import _ from 'lodash';
import { colors } from "@yoast/style-guide";
import concat from 'unique-concat';
import "./styles.css";

console.log( "Print iets in onze console" );

console.log( _.toLower( "HALLO DIT IS EEN SUBTIELE LOG") );

var element = document.getElementById( "wpadminbar" ).setAttribute("style", "border: 10px solid "+ colors.$color_pink + ";");

console.log( concat( [ 1,2,3,4,5,6,7,1 ], [ 2,4,6,8,10,12] ) );
