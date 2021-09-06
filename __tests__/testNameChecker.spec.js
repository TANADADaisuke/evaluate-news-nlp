import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the name checker functionality", () => {
    test("Testing the checkForName() function", () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        const input = "Hello Kirk, have a nice day!";
        Object.defineProperty(global, "window", {
            value: {
                alert: jest.fn()
            }
        });
        expect(checkForName(input)).toBeTruthy();
        expect(window.alert).toBeCalled();
    })
});
