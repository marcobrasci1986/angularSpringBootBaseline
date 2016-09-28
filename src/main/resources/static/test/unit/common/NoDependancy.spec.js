describe("NoDependency Test", function () {
    
    var NoDependencyService;

    /**
     * Invoke the module that has this service inside of it
     */
    beforeEach(module('services'));
    beforeEach(module('traverson'));

    /**
     * Init service you want to test.
     * Wrap the parameter in underscores
     */
    beforeEach(
        inject(function (_NoDependencyService_) {
            NoDependencyService = _NoDependencyService_;
        })
    );

    /**
     * Simplest test no dependencies
     */
    it("testSum", function () {
        var result = NoDependencyService.sum(5, 3);
        expect(result).toEqual(8);
    });
    
});