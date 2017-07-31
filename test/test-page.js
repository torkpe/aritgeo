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
describe("it should return `Arithmetic`", ()=>{
    it("should return `Arithmetic` if the progression is of arithmetic type", ()=>{
        assert(aritGeo([1,2,3])=="Arithmetic")
    });
    it("should return `Arithmetic` if the progression is of arithmetic type", ()=>{
    assert(aritGeo([2,4,6,8])=="Arithmetic")
    });
})
describe("array should return `-1` for neither geometric or arithmetic", ()=>{
    it("should return `-1` for neither geometric or arithmetic", ()=>{
        assert(aritGeo([5,2,39,10])==-1)
    });
});
describe("array should return `0` for an empty array", ()=>{
    it("should return `0` for an empty array", ()=>{
        assert(aritGeo([])==0)
    });
});
describe("array should return `Geometric`", ()=>{
    it("should return `Geometric` if progression is of Geometric type", ()=>{
        assert(aritGeo([3,9,27])=="Geometric")
    });
    it("should return `Geometric` if progression is of Geometric type", ()=>{
    assert(aritGeo([2,4,8,16])=="Geometric")
    });
});
