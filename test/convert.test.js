function convertTest(miles){
    retrun (miles * 5280)
}

QUnit.test("convert", function(assert){
    const result = convertTest(1);
    assert.equal(result, "5280", "Testing base case");
})

QUnit.test("convert", function(assert){
    const result = convertTest(10);
    assert.equal(result, "52800", "Testing double digits");
})

QUnit.test("convert", function(assert){
    const result = convertTest(100);
    assert.equal(result, "528000", "Testing triple digits");
})

QUnit.test("convert", function(assert){
    const result = convertTest(2.5);
    assert.equal(result, "13200", "Testing decimals");
})

QUnit.test("convert", function(assert){
    const result = convertTest(-5);
    assert.equal(result, "-26400", "Testing negative");
})