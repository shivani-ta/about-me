function square( x ) {
  return x * x;
}

QUnit.test( "square()", function( assert ) {
  var result = square( 2 );

  assert.equal( result, 4, "square(2) equals 4" );
});
QUnit.test( "square()", function( assert ) {
  var result = square( 3 );

  assert.equal( result, 9, "square(3) equals 9" );
});
QUnit.test( "square()", function( assert ) {
  var result = square( 4 );

  assert.equal( result, 16, "square(4) equals 16" );
});
QUnit.test( "square()", function( assert ) {
  var result = square( 5 );

  assert.equal( result, 25, "square(5) equals 25" );
});
