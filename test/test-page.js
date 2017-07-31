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
describe("all elements in the array should be numbers only", ()=>{
    it("should return `Array should contain numbers only` for arrays that contains elements other than numbers", ()=>{
        assert(aritGeo([1,2,3,"hsdb",56])=="Array should contain numbers only")
    });
    it("should return `Array should contain numbers only` for arrays that contains elements other than numbers", ()=>{
    assert(aritGeo([6,"7",9,"45"])=="Array should contain numbers only")
    });
})
