function convertTest(miles){
    return (miles * 5280)
}

QUnit.test("convert 1mi to feet", function(assert){
    var result = convertTest(1);
    assert.equal(result, "5280", "Testing base case");
})

QUnit.test("convert 10mi to feet", function(assert){
    const result = convertTest(10);
    assert.equal(result, "52800", "Testing double digits");
})

QUnit.test("convert 100mi to feet", function(assert){
    const result = convertTest(100);
    assert.equal(result, "528000", "Testing triple digits");
})

QUnit.test("convert 2.5mi to feet", function(assert){
    const result = convertTest(2.5);
    assert.equal(result, "13200", "Testing decimals");
})

QUnit.test("convert -5mi to feet", function(assert){
    const result = convertTest(-5);
    assert.equal(result, "-26400", "Testing negative");
})