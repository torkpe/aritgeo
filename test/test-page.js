const chai=require("chai");
const assert=chai.assert;
const aritGeo=require("../aritgeo.js");

describe("array should contain more than 2 elements", ()=>{
    it("should return `Array should contain more than two elements` for arrays with length less than 3", ()=>{
    assert(aritGeo([1,2])=="Array should contain more than two elements")
    });
    it("should return `Array should contain more than two elements` for arrays with length less than 3", ()=>{
    assert(aritGeo([2])=="Array should contain more than two elements")
    });
})
