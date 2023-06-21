const rutasUsuarios = require("./usuarios");

/* rutasUsuarios(app) */

test ("petición POST correcta a la URL específicada", () => {
    app.post = jest.fn();
    app.post();

    expect(axios.get).toHaveBeenCalledWith("/users/:user_id/tasks", expect.anything());
})

