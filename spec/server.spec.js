var request = require("request");

var _baseUrl = "http://localhost:8080/";

describe("Repository API Server", function() {
    describe("GET /", function() {

        it("returns status code 200 of base URL", function(done) {
            request.get(_baseUrl, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns status code 200 of GET Repositories", function(done) {
            request.get(_baseUrl + "api/repositories", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns status code 200 of GET Repository", function(done) {
            request.get(_baseUrl + "api/repositories/1", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
});