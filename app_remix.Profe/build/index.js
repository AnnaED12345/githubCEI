var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "9d9d1517", entry: { module: "/build/entry.client-GMF4FS7U.js", imports: ["/build/_shared/chunk-TUNP7NP7.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MLEA7UA2.js", imports: ["/build/_shared/chunk-HFABFFEP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app-tareas/$userId/editar-tarea/$id": { id: "routes/app-tareas/$userId/editar-tarea/$id", parentId: "root", path: "app-tareas/:userId/editar-tarea/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app-tareas/$userId/editar-tarea/$id-ZHLKAWZU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app-tareas/$userId/index": { id: "routes/app-tareas/$userId/index", parentId: "root", path: "app-tareas/:userId", index: !0, caseSensitive: void 0, module: "/build/routes/app-tareas/$userId/index-XGEJVJO2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app-tareas/index": { id: "routes/app-tareas/index", parentId: "root", path: "app-tareas", index: !0, caseSensitive: void 0, module: "/build/routes/app-tareas/index-7TZFUMMA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ejercicios-cookies/index": { id: "routes/ejercicios-cookies/index", parentId: "root", path: "ejercicios-cookies", index: !0, caseSensitive: void 0, module: "/build/routes/ejercicios-cookies/index-FFJC5QWJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ejercicios/1": { id: "routes/ejercicios/1", parentId: "root", path: "ejercicios/1", index: void 0, caseSensitive: void 0, module: "/build/routes/ejercicios/1-BCA5OHCF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ejercicios/2": { id: "routes/ejercicios/2", parentId: "root", path: "ejercicios/2", index: void 0, caseSensitive: void 0, module: "/build/routes/ejercicios/2-HMT54JNN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ejercicios/3": { id: "routes/ejercicios/3", parentId: "root", path: "ejercicios/3", index: void 0, caseSensitive: void 0, module: "/build/routes/ejercicios/3-OZC5WU73.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ejercicios/4": { id: "routes/ejercicios/4", parentId: "root", path: "ejercicios/4", index: void 0, caseSensitive: void 0, module: "/build/routes/ejercicios/4-TVAE6HWI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Q6ACJOLA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-DA65OQBG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notas/$id": { id: "routes/notas/$id", parentId: "root", path: "notas/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/notas/$id-EUIURG7Z.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notas/index": { id: "routes/notas/index", parentId: "root", path: "notas", index: !0, caseSensitive: void 0, module: "/build/routes/notas/index-XIYKZXIF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/use-effect": { id: "routes/use-effect", parentId: "root", path: "use-effect", index: void 0, caseSensitive: void 0, module: "/build/routes/use-effect-UU6SSOLG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-9D9D1517.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XFZCPTGN.css";

// app/hooks/useLangCookie.js
var import_react2 = require("react"), LangContext = (0, import_react2.createContext)();
function useLangCookie() {
  let [lang, _setLang] = (0, import_react2.useState)("es");
  function setLang(langChoosed) {
    let expireDate = /* @__PURE__ */ new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1), document.cookie = `lang=${langChoosed}; expires=${expireDate.toUTCString()}; path=/`, _setLang(langChoosed);
  }
  return (0, import_react2.useEffect)(() => {
    let langCookie = document.cookie.split("; ").find((cookie) => cookie.startsWith("lang"));
    if (!langCookie)
      return;
    let previousSelectedLang = langCookie.split("=")[1];
    previousSelectedLang && _setLang(previousSelectedLang);
  }, []), [lang, setLang];
}

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  let [lang, setLang] = useLangCookie();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "text-center mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LangContext.Provider, { value: lang, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "select",
        {
          style: {
            position: "absolute",
            bottom: 10,
            right: 10
          },
          onInput: (event) => setLang(event.target.value),
          value: lang,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: "es", children: lang === "es" ? "Espa\xF1ol" : "Spanish" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: "en", children: lang === "es" ? "Ingl\xE9s" : "English" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/root.jsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/app-tareas/$userId/editar-tarea/$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => EditarTarea
});
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function EditarTarea() {
  let { id, userId: userId2 } = (0, import_react4.useParams)(), textAreaRef = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(() => {
    async function cargarTarea() {
      let response = await fetch(`/usuarios/${userId2}/tareas/${id}`);
      if (response.ok) {
        let tarea = await response.json();
        textAreaRef.current.value = tarea.descripcion;
      } else
        window.location.href = `/app-tareas/${userId2}`;
    }
    cargarTarea();
  }, []);
  async function actualizarTarea() {
    let datos = {
      tarea: textAreaRef.current.value
    };
    (await fetch(`/usuarios/${userId2}/tareas/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json"
      }
    })).ok && (window.location.href = `/app-tareas/${userId2}`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Editar tarea" }, void 0, !1, {
      fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "form",
      {
        onSubmit: (event) => {
          event.preventDefault(), actualizarTarea();
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Introduce la nueva tarea:" }, void 0, !1, {
            fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { ref: textAreaRef, cols: "30", rows: "10" }, void 0, !1, {
            fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
            lineNumber: 51,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "submit", value: "Actualizar" }, void 0, !1, {
            fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app-tareas/$userId/editar-tarea/$id.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/app-tareas/$userId/index.jsx
var userId_exports = {};
__export(userId_exports, {
  default: () => AppTareas
});
var import_react9 = require("react");

// app/components/ListaTareas.jsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ListaTareas({ usuarioId, tareas, cargarDatosUsuario }) {
  let [error, setError] = (0, import_react7.useState)();
  async function borrarTarea(tareaId) {
    let options = {
      method: "DELETE"
    };
    (await fetch(
      `/usuarios/${usuarioId}/tareas/${tareaId}`,
      options
    )).ok ? cargarDatosUsuario() : setError(tareaId);
  }
  let style = {
    border: "red 3px solid",
    borderRadius: "3px"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { children: tareas.map((tarea) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { style: error === tarea.id ? style : {}, children: [
    tarea.descripcion,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        className: "pl-4 text-red-700 font-bold",
        onClick: () => borrarTarea(tarea.id),
        children: "X"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ListaTareas.jsx",
        lineNumber: 33,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Link, { to: `/app-tareas/${usuarioId}/editar-tarea/${tarea.id}`, children: "Editar" }, void 0, !1, {
      fileName: "app/components/ListaTareas.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, tarea.id, !0, {
    fileName: "app/components/ListaTareas.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/ListaTareas.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/FormularioNuevaTarea.jsx
var import_react8 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FormularioNuevaTarea({ cargarDatosUsuario, usuarioId }) {
  let inputRef = (0, import_react8.useRef)(), [error, setError] = (0, import_react8.useState)("");
  async function submit(event) {
    event.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify({
        tarea: inputRef.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }, response = await fetch(`/usuarios/${usuarioId}/tareas`, options);
    if (response.ok)
      inputRef.current.value = "", cargarDatosUsuario();
    else {
      let error2 = await response.text();
      setError(error2);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { onSubmit: submit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "nuevaTarea", children: "A\xF1adir tarea:" }, void 0, !1, {
          fileName: "app/components/FormularioNuevaTarea.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "border-2 border-slate-300 ml-2 rounded",
            ref: inputRef,
            type: "text",
            id: "nuevaTarea"
          },
          void 0,
          !1,
          {
            fileName: "app/components/FormularioNuevaTarea.jsx",
            lineNumber: 35,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/FormularioNuevaTarea.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          className: "rounded-full bg-slate-300 p-2 cursor-pointer",
          type: "submit",
          value: "Crear"
        },
        void 0,
        !1,
        {
          fileName: "app/components/FormularioNuevaTarea.jsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/FormularioNuevaTarea.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { id: "errores", style: { color: "red" }, children: error }, void 0, !1, {
      fileName: "app/components/FormularioNuevaTarea.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormularioNuevaTarea.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/app-tareas/$userId/index.jsx
var import_react10 = require("@remix-run/react");

// app/utils/request-http.js
function requestHttp(url, options = {}) {
  return fetch(url, options).then((response) => (response.redirected ? window.location.href = response.url : response.status === 403 && (window.location.href = `/app-tareas/${userId}`), response.json()));
}

// app/routes/app-tareas/$userId/index.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AppTareas() {
  let { userId: userId2 } = (0, import_react10.useParams)(), [usuario, setUsuario] = (0, import_react9.useState)(), lang = (0, import_react9.useContext)(LangContext);
  function cargarDatosUsuario() {
    requestHttp(`/usuarios/${userId2}`).then((datosUsuario) => {
      setUsuario(datosUsuario), localStorage.setItem("datos-usuario", JSON.stringify(datosUsuario));
    });
  }
  return (0, import_react9.useEffect)(() => {
    let datosGuardados = localStorage ? localStorage.getItem("datos-usuario") : null;
    datosGuardados && setUsuario(JSON.parse(datosGuardados)), cargarDatosUsuario();
  }, []), usuario ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold", children: [
      lang === "es" ? "Bienvenid@" : "Welcome",
      " ",
      usuario.nombre
    ] }, void 0, !0, {
      fileName: "app/routes/app-tareas/$userId/index.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      FormularioNuevaTarea,
      {
        cargarDatosUsuario,
        usuarioId: userId2
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app-tareas/$userId/index.jsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      ListaTareas,
      {
        usuarioId: userId2,
        tareas: usuario ? usuario.tareas : [],
        cargarDatosUsuario
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app-tareas/$userId/index.jsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app-tareas/$userId/index.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Cargando..." }, void 0, !1, {
    fileName: "app/routes/app-tareas/$userId/index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/ejercicios-cookies/index.jsx
var ejercicios_cookies_exports = {};
__export(ejercicios_cookies_exports, {
  default: () => EjercicioCookie
});
var import_react11 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function EjercicioCookie() {
  let [cookies, setCookies] = (0, import_react11.useState)([]);
  return (0, import_react11.useEffect)(() => {
    let arrCookies = document.cookie.split("; ");
    setCookies(arrCookies);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Ejercicios cookies" }, void 0, !1, {
      fileName: "app/routes/ejercicios-cookies/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: cookies.map((cookie) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: cookie }, cookie, !1, {
      fileName: "app/routes/ejercicios-cookies/index.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/ejercicios-cookies/index.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ejercicios-cookies/index.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app-tareas/index.jsx
var app_tareas_exports = {};
__export(app_tareas_exports, {
  default: () => SeleccionUsuario
});
var import_react12 = require("@remix-run/react"), import_react13 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function SeleccionUsuario() {
  let [usuarios, setUsuarios] = (0, import_react13.useState)([]), lang = (0, import_react13.useContext)(LangContext);
  return (0, import_react13.useEffect)(() => {
    fetch("/usuarios").then((response) => response.json()).then((arrayUsuarios) => setUsuarios(arrayUsuarios));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "mb-2", children: lang === "es" ? "Selecciona tu usuario" : "Choose your user" }, void 0, !1, {
      fileName: "app/routes/app-tareas/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    usuarios.map((usuario) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react12.Link,
      {
        className: "inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500",
        to: `/app-tareas/${usuario.id}`,
        children: usuario.nombre
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app-tareas/index.jsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ) }, usuario.id, !1, {
      fileName: "app/routes/app-tareas/index.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/app-tareas/index.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/ejercicios/1.jsx
var __exports = {};
__export(__exports, {
  default: () => Ejercicio1
});
var import_react14 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Ejercicio1() {
  let [contador, setContador] = (0, import_react14.useState)(0), [isLoading, setIsLoading] = (0, import_react14.useState)(!0);
  return (0, import_react14.useLayoutEffect)(() => {
    isLoading || (document.querySelector("h1").textContent = `Contador: ${contador}`);
  }, [contador, isLoading]), (0, import_react14.useEffect)(() => {
    setIsLoading(!1);
  }, []), isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/routes/ejercicios/1.jsx",
    lineNumber: 18,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Ejercicio 1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/1.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      "Contador: ",
      contador
    ] }, void 0, !0, {
      fileName: "app/routes/ejercicios/1.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setContador(contador + 1), children: "+1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/1.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setContador(contador - 1), children: "-1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/1.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ejercicios/1.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/ejercicios/2.jsx
var __exports2 = {};
__export(__exports2, {
  default: () => Ejercicio2
});
var import_react15 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Ejercicio2() {
  let [contador, setContador] = (0, import_react15.useState)(1), [post, setPost] = (0, import_react15.useState)();
  return (0, import_react15.useEffect)(() => {
    let controller = new AbortController();
    async function fetchData() {
      let datos = await (await fetch(
        `https://jsonplaceholder.typicode.com/posts/${contador}`,
        {
          signal: controller.signal
        }
      )).json();
      setPost(datos);
    }
    return fetchData(), () => {
      controller.abort();
    };
  }, [contador]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Ejercicio 2" }, void 0, !1, {
      fileName: "app/routes/ejercicios/2.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
      "Title: ",
      post ? post.title : "..."
    ] }, void 0, !0, {
      fileName: "app/routes/ejercicios/2.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
      "Body: ",
      post ? post.body : "..."
    ] }, void 0, !0, {
      fileName: "app/routes/ejercicios/2.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
      "Contador: ",
      contador
    ] }, void 0, !0, {
      fileName: "app/routes/ejercicios/2.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { onClick: () => setContador(contador + 1), children: "+1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/2.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ejercicios/2.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/ejercicios/3.jsx
var __exports3 = {};
__export(__exports3, {
  default: () => Ejercicio3
});
var import_react16 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Ejercicio3() {
  let [contador, setContador] = (0, import_react16.useState)(0), [primerRenderCompletado, setPrimerRenderCompletado] = (0, import_react16.useState)(!1);
  return (0, import_react16.useEffect)(() => {
    primerRenderCompletado || setPrimerRenderCompletado(!0);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Ejercicio 3" }, void 0, !1, {
      fileName: "app/routes/ejercicios/3.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
      "Fase: ",
      primerRenderCompletado ? "rerender" : "mount"
    ] }, void 0, !0, {
      fileName: "app/routes/ejercicios/3.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Contador, { valor: contador }, void 0, !1, {
      fileName: "app/routes/ejercicios/3.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick: () => setContador(contador + 1), children: "+1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/3.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ejercicios/3.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Contador({ valor }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: valor }, void 0, !1, {
    fileName: "app/routes/ejercicios/3.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/routes/ejercicios/4.jsx
var __exports4 = {};
__export(__exports4, {
  default: () => Ejercicio4
});
var import_react17 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Ejercicio4() {
  let [contador, setContador] = (0, import_react17.useState)(0);
  return (0, import_react17.useEffect)(() => {
    let intervalID = setInterval(() => {
      setContador((contador2) => contador2 + 1);
    }, 1e3);
    return () => {
      clearInterval(intervalID);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Ejercicio 4" }, void 0, !1, {
      fileName: "app/routes/ejercicios/4.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: contador }, void 0, !1, {
      fileName: "app/routes/ejercicios/4.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: () => setContador(contador + 1), children: "+1" }, void 0, !1, {
      fileName: "app/routes/ejercicios/4.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ejercicios/4.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/notas/index.jsx
var notas_exports = {};
__export(notas_exports, {
  default: () => Notas
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Notas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "/notas" }, void 0, !1, {
      fileName: "app/routes/notas/index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: "Nota 1" }, void 0, !1, {
        fileName: "app/routes/notas/index.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: "Nota 2" }, void 0, !1, {
        fileName: "app/routes/notas/index.jsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: "Nota 3" }, void 0, !1, {
        fileName: "app/routes/notas/index.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: "Nota 4" }, void 0, !1, {
        fileName: "app/routes/notas/index.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notas/index.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notas/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/use-effect.jsx
var use_effect_exports = {};
__export(use_effect_exports, {
  default: () => UseEffect
});
var import_react18 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function UseEffect() {
  let [contador, setContador] = (0, import_react18.useState)(0), [contadorSecundario, setContadorSecundario] = (0, import_react18.useState)(100);
  return (0, import_react18.useEffect)(() => {
    console.log(document.querySelector("h1")), console.log("Ejecutando useEffect, []");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "Probando useEffect" }, void 0, !1, {
      fileName: "app/routes/use-effect.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { onClick: () => setContador(contador + 1), children: [
      "Contador ",
      contador,
      "+1"
    ] }, void 0, !0, {
      fileName: "app/routes/use-effect.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { onClick: () => setContadorSecundario(contadorSecundario + 1), children: [
      "contadorSecundario ",
      contadorSecundario,
      "+1"
    ] }, void 0, !0, {
      fileName: "app/routes/use-effect.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/use-effect.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/notas/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => NotasId
});
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function NotasId() {
  let id = (0, import_react19.useParams)().id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: [
      "/notas/",
      id
    ] }, void 0, !0, {
      fileName: "app/routes/notas/$id.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
      "Est\xE1s leyendo la nota ",
      id
    ] }, void 0, !0, {
      fileName: "app/routes/notas/$id.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notas/$id.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react20 = require("@remix-run/react"), import_react21 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-xl font-bold mb-4 text-red-700", children: "Bienvenid@ a Remix" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: "/notas", children: "Ir a /notas" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react20.Link, { to: "/notas", children: "Ir a /notas" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react20.Link, { to: "/use-effect", children: "Ir a /use-effect" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react20.Link, { to: "/ejercicios/3", children: "Ir a /ejercicios/3" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});
var import_react22 = require("react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Login() {
  let usernameRef = (0, import_react22.useRef)(), passwordRef = (0, import_react22.useRef)(), [error, setError] = (0, import_react22.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "form",
    {
      onSubmit: (event) => {
        event.preventDefault(), fetch("/login", {
          method: "POST",
          body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => {
          res.status === 200 ? res.json().then(({ id }) => {
            window.location.href = `/app-tareas/${id}`;
          }) : setError("Usuario o contrase\xF1a incorrectos.");
        }).catch((err) => {
          setError(err);
        });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "username", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              ref: usernameRef,
              className: "border",
              id: "username",
              name: "username",
              type: "text",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.jsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.jsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "current-password", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "input",
            {
              className: "border",
              ref: passwordRef,
              id: "current-password",
              name: "password",
              type: "password",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.jsx",
              lineNumber: 47,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.jsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "submit", children: "Identificarse" }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-red-600", children: error }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/login.jsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app-tareas/$userId/editar-tarea/$id": {
    id: "routes/app-tareas/$userId/editar-tarea/$id",
    parentId: "root",
    path: "app-tareas/:userId/editar-tarea/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/app-tareas/$userId/index": {
    id: "routes/app-tareas/$userId/index",
    parentId: "root",
    path: "app-tareas/:userId",
    index: !0,
    caseSensitive: void 0,
    module: userId_exports
  },
  "routes/ejercicios-cookies/index": {
    id: "routes/ejercicios-cookies/index",
    parentId: "root",
    path: "ejercicios-cookies",
    index: !0,
    caseSensitive: void 0,
    module: ejercicios_cookies_exports
  },
  "routes/app-tareas/index": {
    id: "routes/app-tareas/index",
    parentId: "root",
    path: "app-tareas",
    index: !0,
    caseSensitive: void 0,
    module: app_tareas_exports
  },
  "routes/ejercicios/1": {
    id: "routes/ejercicios/1",
    parentId: "root",
    path: "ejercicios/1",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/ejercicios/2": {
    id: "routes/ejercicios/2",
    parentId: "root",
    path: "ejercicios/2",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/ejercicios/3": {
    id: "routes/ejercicios/3",
    parentId: "root",
    path: "ejercicios/3",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  },
  "routes/ejercicios/4": {
    id: "routes/ejercicios/4",
    parentId: "root",
    path: "ejercicios/4",
    index: void 0,
    caseSensitive: void 0,
    module: __exports4
  },
  "routes/notas/index": {
    id: "routes/notas/index",
    parentId: "root",
    path: "notas",
    index: !0,
    caseSensitive: void 0,
    module: notas_exports
  },
  "routes/use-effect": {
    id: "routes/use-effect",
    parentId: "root",
    path: "use-effect",
    index: void 0,
    caseSensitive: void 0,
    module: use_effect_exports
  },
  "routes/notas/$id": {
    id: "routes/notas/$id",
    parentId: "root",
    path: "notas/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
