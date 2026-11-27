(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BrandLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-client] (ecmascript)");
;
;
;
function BrandLink() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#top",
        className: "focus-ring group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                src: "/favicon.ico",
                alt: "",
                width: 36,
                height: 36,
                unoptimized: true,
                className: "rounded-lg shadow-[0_0_16px_rgba(255,255,255,0.13)] transition-shadow group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            }, void 0, false, {
                fileName: "[project]/components/BrandLink.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-nowrap text-base leading-none font-semibold tracking-tight text-neutral-100",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name
            }, void 0, false, {
                fileName: "[project]/components/BrandLink.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BrandLink.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = BrandLink;
var _c;
__turbopack_context__.k.register(_c, "BrandLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const quickScenarios = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scenarios"].slice(0, 3);
function ChatPanel() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(quickScenarios[0].id);
    const active = quickScenarios.find((scenario)=>scenario.id === activeId) ?? quickScenarios[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-4 text-left shadow-[0_0_60px_rgba(255,255,255,0.08)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-32 flex-col gap-3 text-sm",
                "aria-live": "polite",
                children: active.messages.slice(0, 2).map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${message.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'}`,
                        children: message.text
                    }, message.from, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatPanel.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": "Примеры вопросов",
                className: "mt-4 flex flex-wrap gap-2",
                children: quickScenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": scenario.id === activeId,
                        onClick: ()=>setActiveId(scenario.id),
                        className: "focus-ring rounded-full border border-white/15 px-3 py-1.5 text-xs text-neutral-300 transition hover:border-white/40 hover:text-white aria-pressed:border-white/35 aria-pressed:bg-white/10",
                        children: scenario.title
                    }, scenario.id, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatPanel.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatPanel.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ChatPanel, "7WUyXrkstFItlkWfU4lMxXpH6pM=");
_c = ChatPanel;
var _c;
__turbopack_context__.k.register(_c, "ChatPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLink.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Основная навигация",
                        className: "hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "focus-ring rounded-full px-3 py-1.5 text-xs text-neutral-400 transition hover:text-white",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex",
                                children: "Начать работу"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((v)=>!v),
                                "aria-expanded": open,
                                "aria-controls": "mobile-menu",
                                className: "focus-ring rounded-full border border-white/15 px-3 py-2 text-xs lg:hidden",
                                children: open ? 'Закрыть' : 'Меню'
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-menu",
                "aria-label": "Мобильная навигация",
                className: "border-t border-white/10 bg-ink px-6 py-4 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-3 text-sm",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                className: "focus-ring block text-neutral-300 hover:text-white",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Navbar, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function Reveal({ children, delay = 0, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-80px'
        },
        transition: {
            duration: 0.6,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScenarioDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScenarioDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScenarioDemo() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scenarios"][0].id);
    const scenario = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scenarios"].find((s)=>s.id === activeId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scenarios"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 lg:grid-cols-[280px_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": "Выберите сценарий",
                className: "flex flex-col gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scenarios"].map((s)=>{
                    const selected = s.id === activeId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveId(s.id),
                        "aria-pressed": selected,
                        className: `focus-ring rounded-xl border px-4 py-3 text-left text-sm transition ${selected ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-200'}`,
                        children: s.title
                    }, s.id, false, {
                        fileName: "[project]/components/ScenarioDemo.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ScenarioDemo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-2xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name
                            }, void 0, false, {
                                fileName: "[project]/components/ScenarioDemo.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-500",
                                children: "Пример диалога"
                            }, void 0, false, {
                                fileName: "[project]/components/ScenarioDemo.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ScenarioDemo.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[260px] flex-col gap-3",
                        children: scenario.messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'}`,
                                children: m.text
                            }, i, false, {
                                fileName: "[project]/components/ScenarioDemo.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this))
                    }, scenario.id, false, {
                        fileName: "[project]/components/ScenarioDemo.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ScenarioDemo.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScenarioDemo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ScenarioDemo, "K0qez7OwGqYdXZTmLNx6IrRRD34=");
_c = ScenarioDemo;
var _c;
__turbopack_context__.k.register(_c, "ScenarioDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Все тексты сайта собраны здесь. Меняйте значения в этом файле, не в компонентах.
__turbopack_context__.s([
    "benefits",
    ()=>benefits,
    "faq",
    ()=>faq,
    "features",
    ()=>features,
    "industries",
    ()=>industries,
    "integrations",
    ()=>integrations,
    "navItems",
    ()=>navItems,
    "pricing",
    ()=>pricing,
    "scenarios",
    ()=>scenarios,
    "security",
    ()=>security,
    "siteConfig",
    ()=>siteConfig,
    "steps",
    ()=>steps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const siteConfig = {
    name: 'Nimbus Pulse',
    description: 'AI-менеджер для бизнеса: общение с клиентами, консультации и онлайн-запись 24/7.',
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL?.trim() || undefined,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
    telegram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTACT_TELEGRAM_URL?.trim() || undefined
};
const navItems = [
    {
        label: 'Главная',
        href: '#top'
    },
    {
        label: 'Возможности',
        href: '#features'
    },
    {
        label: 'Решения',
        href: '#industries'
    },
    {
        label: 'Как это работает',
        href: '#how'
    },
    {
        label: 'Тарифы',
        href: '#pricing'
    },
    {
        label: 'FAQ',
        href: '#faq'
    }
];
const integrations = [
    {
        name: 'Telegram'
    },
    {
        name: 'WhatsApp Business'
    },
    {
        name: 'VK'
    },
    {
        name: 'MAX'
    },
    {
        name: 'Website Chat'
    }
];
const features = [
    {
        icon: 'MessageSquare',
        title: 'Общение с клиентами 24/7',
        text: 'Отвечает в любое время, даже когда команда не на работе.'
    },
    {
        icon: 'HelpCircle',
        title: 'Консультации',
        text: 'Рассказывает об услугах и товарах компании простыми словами.'
    },
    {
        icon: 'Wallet',
        title: 'Цены и условия',
        text: 'Отвечает на вопросы о стоимости и условиях по данным вашей компании.'
    },
    {
        icon: 'CalendarPlus',
        title: 'Онлайн-запись',
        text: 'Помогает выбрать время и оформить запись клиента.'
    },
    {
        icon: 'CalendarClock',
        title: 'Перенос и отмена записей',
        text: 'Переносит или отменяет запись по просьбе клиента.'
    },
    {
        icon: 'ClipboardList',
        title: 'Приём заявок',
        text: 'Собирает контакты и детали запроса и передаёт их в работу.'
    },
    {
        icon: 'UserRound',
        title: 'Передача сотруднику',
        text: 'Передаёт диалог живому менеджеру вместе с историей переписки.'
    },
    {
        icon: 'History',
        title: 'История общения',
        text: 'Сохраняет переписку, чтобы контекст диалога не терялся.'
    },
    {
        icon: 'Database',
        title: 'База знаний компании',
        text: 'Отвечает на основе информации, которую вы загрузили о бизнесе.'
    },
    {
        icon: 'Layers',
        title: 'Много диалогов сразу',
        text: 'Обрабатывает множество диалогов одновременно, без очереди.'
    }
];
const scenarios = [
    {
        id: 'price',
        title: 'Узнать стоимость услуги',
        messages: [
            {
                from: 'client',
                text: 'Сколько стоит стрижка?'
            },
            {
                from: 'ai',
                text: 'Стрижка стоит от 1 500 ₽. Точная цена зависит от длины волос и мастера. Подобрать время?'
            }
        ]
    },
    {
        id: 'book',
        title: 'Записаться на услугу',
        messages: [
            {
                from: 'client',
                text: 'Хочу записаться на маникюр на завтра'
            },
            {
                from: 'ai',
                text: 'Есть свободные окна завтра в 11:00 и 16:30. Какое время удобно?'
            },
            {
                from: 'client',
                text: 'В 16:30'
            },
            {
                from: 'ai',
                text: 'Вы записаны на маникюр завтра в 16:30. Подтверждение придёт в этот чат.'
            }
        ]
    },
    {
        id: 'reschedule',
        title: 'Перенести запись',
        messages: [
            {
                from: 'client',
                text: 'Нужно перенести запись с пятницы на понедельник'
            },
            {
                from: 'ai',
                text: 'Нашёл вашу запись на пятницу, 15:00. На понедельник свободно 10:00 и 14:00. Какое время выбрать?'
            },
            {
                from: 'client',
                text: '14:00'
            },
            {
                from: 'ai',
                text: 'Готово. Запись перенесена на понедельник, 14:00.'
            }
        ]
    },
    {
        id: 'cancel',
        title: 'Отменить запись',
        messages: [
            {
                from: 'client',
                text: 'Не смогу прийти, отмените запись'
            },
            {
                from: 'ai',
                text: 'Нашёл запись на завтра, 12:00. Отменить её?'
            },
            {
                from: 'client',
                text: 'Да'
            },
            {
                from: 'ai',
                text: 'Запись отменена. Если захотите записаться снова, напишите в любое время.'
            }
        ]
    },
    {
        id: 'consult',
        title: 'Получить консультацию',
        messages: [
            {
                from: 'client',
                text: 'Какой уход лучше для сухой кожи?'
            },
            {
                from: 'ai',
                text: 'Для сухой кожи обычно подходят процедуры с увлажнением. Могу записать вас на консультацию с косметологом.'
            }
        ]
    },
    {
        id: 'human',
        title: 'Связать с сотрудником',
        messages: [
            {
                from: 'client',
                text: 'Хочу поговорить с администратором'
            },
            {
                from: 'ai',
                text: 'Передаю диалог администратору. Он ответит здесь же, в этом чате.'
            }
        ]
    }
];
const industries = [
    {
        title: 'Салоны красоты',
        text: 'Запись на услуги, ответы о ценах и переносы без звонков.'
    },
    {
        title: 'Клиники и стоматологии',
        text: 'Первичные вопросы, запись на приём и напоминания о визите.'
    },
    {
        title: 'Автосервисы',
        text: 'Запись на ТО и ремонт, уточнение условий и приём заявок.'
    },
    {
        title: 'Фитнес-центры',
        text: 'Информация о тарифах и расписании, запись на пробную тренировку.'
    },
    {
        title: 'Рестораны',
        text: 'Бронирование столиков и ответы на вопросы о меню и доставке.'
    },
    {
        title: 'Магазины',
        text: 'Консультации по товарам, наличие и условия покупки.'
    },
    {
        title: 'Образовательные центры',
        text: 'Ответы о курсах, запись на пробное занятие и заявки.'
    },
    {
        title: 'Другие компании',
        text: 'Любой бизнес, где клиенты задают вопросы и записываются.'
    }
];
const steps = [
    {
        title: 'Обсуждаем вашу задачу',
        text: 'Уточняем, на что должен отвечать помощник и где вам пишут клиенты.'
    },
    {
        title: 'Находим, где теряются заявки',
        text: 'Разбираем, где клиенты долго ждут ответа, остаются без него или не доходят до записи.'
    },
    {
        title: 'Вы делитесь информацией',
        text: 'Присылаете услуги, цены, график работы и ответы на частые вопросы.'
    },
    {
        title: 'Мы настраиваем помощника',
        text: 'Создаём рабочий аккаунт, загружаем данные и настраиваем ответы.'
    },
    {
        title: 'Мы подключаем каналы',
        text: 'Подключаем согласованные каналы и вместе проверяем, как помощник отвечает.'
    },
    {
        title: 'Мы запускаем помощника',
        text: 'После вашего подтверждения помощник начинает отвечать клиентам.'
    }
];
const benefits = [
    'Работает круглосуточно',
    'Быстро отвечает клиентам',
    'Не теряет контекст диалога',
    'Помогает автоматизировать запись',
    'Может передать диалог сотруднику',
    'Работает в нескольких каналах',
    'Настраивается под конкретную компанию'
];
const security = [
    {
        title: 'Изоляция данных компаний',
        text: 'Данные каждой компании хранятся отдельно от остальных.'
    },
    {
        title: 'Защита переписок',
        text: 'Переписки передаются по защищённому соединению.'
    },
    {
        title: 'Контроль доступа',
        text: 'Доступ к настройкам и истории имеют только авторизованные сотрудники.'
    },
    {
        title: 'Безопасное хранение интеграций',
        text: 'Ключи и токены каналов связи хранятся в зашифрованном виде.'
    },
    {
        title: 'Конфиденциальность данных',
        text: 'Данные клиентов не передаются третьим лицам без правовых оснований.'
    }
];
const pricing = {
    name: siteConfig.name,
    features: [
        'AI-менеджер для одной компании',
        'Все поддерживаемые каналы общения',
        'Онлайн-запись и перенос записей',
        'Передача диалога сотруднику',
        'База знаний и история переписок'
    ]
};
const faq = [
    {
        q: `Что такое ${siteConfig.name}?`,
        a: 'Это AI-менеджер для бизнеса. Он отвечает клиентам, консультирует по услугам, помогает записываться и передаёт сложные вопросы сотрудникам.'
    },
    {
        q: 'Как он работает?',
        a: 'Он использует информацию о вашей компании из базы знаний и отвечает клиентам в подключённых каналах.'
    },
    {
        q: 'Может ли он записывать клиентов?',
        a: 'Да, он помогает выбрать свободное время и оформить запись, а также перенести или отменить её.'
    },
    {
        q: 'Какие мессенджеры поддерживает?',
        a: 'Telegram, WhatsApp Business, VK и чат на вашем сайте.'
    },
    {
        q: 'Можно ли передать диалог сотруднику?',
        a: 'Да, диалог передаётся живому менеджеру вместе с историей переписки.'
    },
    {
        q: 'Можно ли настроить его под свой бизнес?',
        a: 'Да. Вы рассказываете, как общаетесь с клиентами, а мы настраиваем ответы по вашим услугам, ценам и правилам.'
    },
    {
        q: 'Нужны ли технические знания для подключения?',
        a: 'Для подключения достаточно рассказать о бизнесе и согласовать сценарии. Аккаунт, помощника и каналы настраивает команда Nimbus Pulse.'
    },
    {
        q: 'Сколько стоит использование?',
        a: 'Стоимость и условия подключения согласуем индивидуально.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18871w6lzn32u._.js.map