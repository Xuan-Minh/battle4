module.exports = [
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js")
    );

    module.exports = mod;
  },
  "[project]/components/FormExampleComponent.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => FormExampleComponent]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)"
      );
    ("use client");
    function FormExampleComponent() {
      const { register, handleSubmit } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useForm"
      ])();
      const onSubmit = (data) => {
        console.log(data);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "input",
              {
                ...register("example"),
              },
              void 0,
              false,
              {
                fileName: "[project]/components/FormExampleComponent.jsx",
                lineNumber: 14,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                type: "submit",
                children: "Submit",
              },
              void 0,
              false,
              {
                fileName: "[project]/components/FormExampleComponent.jsx",
                lineNumber: 15,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/components/FormExampleComponent.jsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        this
      );
    }
    function FormExampleComponent() {
      const { register, handleSubmit } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useForm"
      ])();
      const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          style: {
            maxWidth: 480,
          },
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                style: {
                  marginBottom: 8,
                },
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "label",
                    {
                      children: "Nom",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/FormExampleComponent.jsx",
                      lineNumber: 31,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "input",
                    {
                      ...register("name"),
                      style: {
                        display: "block",
                        width: "100%",
                      },
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/FormExampleComponent.jsx",
                      lineNumber: 32,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/components/FormExampleComponent.jsx",
                lineNumber: 30,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                style: {
                  marginBottom: 8,
                },
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "label",
                    {
                      children: "Email",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/FormExampleComponent.jsx",
                      lineNumber: 39,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "input",
                    {
                      type: "email",
                      ...register("email"),
                      style: {
                        display: "block",
                        width: "100%",
                      },
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/FormExampleComponent.jsx",
                      lineNumber: 40,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/components/FormExampleComponent.jsx",
                lineNumber: 38,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                type: "submit",
                children: "Envoyer",
              },
              void 0,
              false,
              {
                fileName: "[project]/components/FormExampleComponent.jsx",
                lineNumber: 47,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/components/FormExampleComponent.jsx",
          lineNumber: 29,
          columnNumber: 5,
        },
        this
      );
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ab1e1b4._.js.map
