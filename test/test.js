var supertest = require("supertest");
var should = require("chai").should();
var dotenv = require('dotenv')
var PORT = process.env.PORT || 3000
// This agent refers to PORT where program is runninng.
dotenv.config()
var server = supertest.agent("http://localhost:"+PORT);

// UNIT test begin

describe("SAMPLE unit test", function () {

    // #1 should return home page

    it("should return home page", function (done) {

        // calling home page api
        server
            .get("/")
            // .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                // res.body.message.should.equal('Hello World!')
                res.status.should.equal(200);
                done();
            });
    });

});