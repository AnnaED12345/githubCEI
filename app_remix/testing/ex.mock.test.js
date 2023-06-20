const { getRandomNumber } = require("./ex.mock")

test ("Mock-fn Random Number 0", () => {
    Math.random = jest.fn();
    Math.random.mockReturnValue(0)

    expect(getRandomNumber()).toBe(1);
})

test ("Mock-fn Random Number 1", () => {
    Math.random = jest.fn();
    Math.random.mockReturnValue(1)

    expect(getRandomNumber()).toBe(101);
})

test ("Mock-fn Random Number 0.5", () => {
    Math.random = jest.fn();
    Math.random.mockReturnValue(0.5)

    expect(getRandomNumber()).toBe(51);
})

test ("Mock-fn Random Number 0.22", () => {
    Math.random = jest.fn();
    Math.random.mockReturnValue(0.22)

    expect(getRandomNumber()).toBe(23);
})

