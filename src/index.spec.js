import isWorking from "./index"

describe("isWorking function", function () {
    it("returns true if `work` is passed", function () {
        expect(isWorking("work")).toBe(true)
    })

    it("returns false if not `work`", function () {
        expect(isWorking("123")).toBe(false)
    })
})