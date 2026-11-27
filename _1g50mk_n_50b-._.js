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
function ChatPanel() {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            from: 'ai',
            text: 'Здравствуйте! Чем могу помочь?'
        }
    ]);
    function send(text) {
        const value = text.trim();
        if (!value) {
            setError('Введите вопрос');
            return;
        }
        setError('');
        setMessages((prev)=>[
                ...prev,
                {
                    from: 'user',
                    text: value
                },
                {
                    from: 'ai',
                    text: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroChatReply"]
                }
            ]);
        setInput('');
    }
    function onSubmit(e) {
        e.preventDefault();
        send(input);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-4 text-left shadow-[0_0_60px_rgba(255,255,255,0.08)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex max-h-56 flex-col gap-3 overflow-y-auto pr-1 text-sm",
                "aria-live": "polite",
                children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${m.from === 'user' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'}`,
                        children: m.text
                    }, i, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatPanel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroChatChips"].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>send(chip),
                        className: "focus-ring rounded-full border border-white/15 px-3 py-1.5 text-xs text-neutral-300 transition hover:border-white/40 hover:text-white",
                        children: chip
                    }, chip, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatPanel.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "hero-chat-input",
                        className: "sr-only",
                        children: "Ваш вопрос AI-менеджеру"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 py-2 pl-4 pr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "hero-chat-input",
                                value: input,
                                onChange: (e)=>{
                                    setInput(e.target.value);
                                    if (error) setError('');
                                },
                                placeholder: "Задайте вопрос AI-менеджеру...",
                                className: "focus-ring flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                "aria-label": "Отправить",
                                className: "focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatPanel.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-neutral-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/ChatPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatPanel.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatPanel.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ChatPanel, "2bWPVEadV+8OybhbIx33DqYh/O0=");
_c = ChatPanel;
var _c;
__turbopack_context__.k.register(_c, "ChatPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2, 'Укажите имя (минимум 2 символа)'),
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(5, 'Укажите email или телефон'),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(1000, 'Не более 1000 символов').optional()
});
function ContactForm() {
    _s();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function onSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const result = schema.safeParse({
            name: fd.get('name') ?? '',
            contact: fd.get('contact') ?? '',
            message: fd.get('message') || undefined
        });
        if (!result.success) {
            const next = {};
            for (const issue of result.error.issues){
                const key = issue.path[0];
                if (!next[key]) next[key] = issue.message;
            }
            setErrors(next);
            setDone(false);
            return;
        }
        setErrors({});
        setDone(true);
    // TODO: отправка на бэкенд, пока заявка только проверяется на клиенте
    }
    const inputClass = 'focus-ring w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        noValidate: true,
        className: "glass mx-auto mt-10 max-w-xl rounded-2xl p-6 text-left",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "name",
                            className: "mb-1.5 block text-xs text-neutral-400",
                            children: "Имя"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "name",
                            name: "name",
                            autoComplete: "name",
                            placeholder: "Как к вам обращаться",
                            "aria-invalid": !!errors.name,
                            className: `${inputClass} ${errors.name ? 'border-red-400/60' : 'border-white/10'}`
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-xs text-red-300",
                            children: errors.name
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 54,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "contact",
                            className: "mb-1.5 block text-xs text-neutral-400",
                            children: "Email или телефон"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "contact",
                            name: "contact",
                            autoComplete: "email",
                            placeholder: "name@company.com",
                            "aria-invalid": !!errors.contact,
                            className: `${inputClass} ${errors.contact ? 'border-red-400/60' : 'border-white/10'}`
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        errors.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-xs text-red-300",
                            children: errors.contact
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 61,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "message",
                            className: "mb-1.5 block text-xs text-neutral-400",
                            children: "Сообщение (необязательно)"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: "message",
                            name: "message",
                            rows: 3,
                            placeholder: "Расскажите о вашем бизнесе",
                            "aria-invalid": !!errors.message,
                            className: `${inputClass} resize-none ${errors.message ? 'border-red-400/60' : 'border-white/10'}`
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-xs text-red-300",
                            children: errors.message
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 68,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "btn-primary focus-ring w-full",
                    children: "Связаться с нами"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    role: "status",
                    className: "text-center text-sm text-neutral-300",
                    children: "Заявка принята (демо). Отправка на сервер будет подключена позже."
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContactForm.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "N1PclYve44XERmlloq9no+3Uas8=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
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
                                className: "focus-ring hidden rounded-full border border-white/15 px-4 py-2 text-xs text-neutral-200 transition hover:border-white/40 sm:inline-flex",
                                children: "Войти"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex",
                                children: "Начать работу"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 31,
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
                                lineNumber: 32,
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
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 45,
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
                                children: "Демонстрационный пример"
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
    "heroChatChips",
    ()=>heroChatChips,
    "heroChatReply",
    ()=>heroChatReply,
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
const siteConfig = {
    name: 'Nimbus Pulse',
    description: 'AI-менеджер для бизнеса: общение с клиентами, консультации и онлайн-запись 24/7.',
    url: 'https://example.com',
    email: 'hello@example.com',
    telegram: 'https://t.me/example'
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
const heroChatChips = [
    'Сколько стоит услуга?',
    'Записаться на завтра',
    'Перенести запись'
];
const heroChatReply = 'Это демонстрационный ответ. После подключения AI-менеджер ответит на ваш вопрос по базе знаний компании.';
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
        title: 'Создаёте аккаунт компании',
        text: 'Регистрация занимает несколько минут.'
    },
    {
        title: 'Заполняете информацию о бизнесе',
        text: 'Услуги, цены, график и часто задаваемые вопросы.'
    },
    {
        title: 'Настраиваете AI-менеджера',
        text: 'Задаёте тон общения и правила передачи диалога сотруднику.'
    },
    {
        title: 'Подключаете каналы общения',
        text: 'Telegram, WhatsApp Business, VK или чат на сайте.'
    },
    {
        title: 'AI начинает общаться с клиентами',
        text: 'Менеджер отвечает, записывает и передаёт сложные вопросы людям.'
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
    price: 4900,
    currency: '₽',
    period: 'в месяц',
    demoNote: 'Демонстрационная цена. Итоговые условия уточняются.',
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
        a: 'Да, вы задаёте тон общения, услуги, цены и правила передачи диалогов.'
    },
    {
        q: 'Нужны ли технические знания для подключения?',
        a: 'Нет, подключение описано пошагово. Если понадобится помощь, поможем с настройкой.'
    },
    {
        q: 'Сколько стоит использование?',
        a: 'Сейчас на сайте указана демонстрационная цена тарифа. Актуальные условия уточняйте у нас.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1g50mk_n_50b-._.js.map