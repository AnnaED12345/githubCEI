const { default: axios } = require("axios");
const { getRandomNumber, sendRequest } = require("./ex.mock")

//Ejercicio 1

// test ("Random Number 0 return 1", () => {
//     Math.random = jest.fn(); //le asignamos una función simulada --> jest.fn sería lo mismo que Math.random = () => {}
//     Math.random.mockReturnValue(0)

//     expect(getRandomNumber()).toBe(1);
// })

// test ("Mock-fn Random Number 0.5", () => {
//     Math.random = jest.fn();
//     Math.random.mockReturnValue(0.5)

//     expect(getRandomNumber()).toBe(51);
// })

// test ("Mock-fn Random Number 0.9999 return 100", () => {
//     Math.random = jest.fn();
//     Math.random.mockReturnValue(0.9999)

//     expect(getRandomNumber()).toBe(100);
// })


//Ejercicio 2

test ("Petición GET a la url que especificamos como parámentro", () => {
    axios.get = jest.fn();
    sendRequest("https://example.com/test");

    /* expect(axios.get).toHaveBeenCalled(); */
    expect(axios.get).toHaveBeenCalledWith("https://example.com/test");
})


test ("Petición GET a la url que especificamos como parámentro", () => {
    axios.get = jest.fn();
    axios.get.mockReturnValue({
        data: "respuesta de ejemplo"
    });

    const result = sendRequest("https://example.com/test");

    expect(result).toEqual(data)
})


test ("devuelve null", () => {
    const result = sendRequest();
    expect(result).toEqual(null);
});
