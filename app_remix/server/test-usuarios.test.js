const rutasUsuarios = require("./usuarios");

/* rutasUsuarios(app) */

test ("petición POST correcta a la URL específicada", () => {
    const app = {post: jest.fn()}

    expect(app.post).toHaveBeenCalledWith("/users/:user_id/tasks", expect.anything());
})

