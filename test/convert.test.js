function convertTest(miles){
    retrun (miles * 5280)
}
QUnit.test("convert", function(assert){
    const result = convertTest(1);
    assert.equal(result, "5280");
})