module ("Temperature conversion", {
    setup : function() {
        this.celsius1 = 20;
        this.celsius2 = 30;
         
        this.fahrenheit1 = 68;
        this.fahrenheit2 = 86;
    }
});test("conversion to F", function(){
    var actual1 = convertFromCelsiusToFahrenheit(this.celsius1);
    equal(actual1, this.fahrenheit1);
     
    var actual2 = convertFromCelsiusToFahrenheit(this.celsius2);
    equal(actual2, this.fahrenheit2);
});
