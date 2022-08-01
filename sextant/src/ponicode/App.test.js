const App = require("../App")
// @ponicode
describe("App.default", () => {
    test("0", () => {
        let result = App.default()
        expect(result).toMatchSnapshot()
    })
})
