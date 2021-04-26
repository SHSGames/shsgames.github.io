"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var OfflinePluginRuntime = __importStar(require("offline-plugin/runtime"));
require("../styles/main.less");
require("script-loader!jquery");
var react_2 = require("photoncss/react"); // Import Photon in to the project
require("photoncss/dist/photon.css"); // Import the Photon stylesheet
var app_1 = __importDefault(require("./app"));
var jquery_1 = __importDefault(require("jquery"));
// Get right router type for app
var Router = location.protocol === "file:" ? react_router_dom_1.HashRouter : react_router_dom_1.BrowserRouter;
// Import all views
var views = [];
var importAll = function (a) { return a.keys().forEach(function (k) { return views.push(a(k)); }); };
importAll(require.context("./views", true, /\.js$/));
// Root component
function Root() {
    // On mount
    react_1.useEffect(function () {
        // Initialize route
        var route = "";
        (function loop() {
            // Run again on next fraome
            requestAnimationFrame(loop);
            // If route/page was changed
            if (route !== app_1.default.getRoute()) {
                // Change route cache
                route = app_1.default.getRoute();
                // Reset scroll
                jquery_1.default(window).scrollTop(0);
                // Get view
                var _view = views.filter(function (_a) {
                    var route = _a.route;
                    return new RegExp(route.replace(/:\w.*/g, "\\w.*"), "g").test(app_1.default.getRoute());
                });
                var view = _view.length > 1 ? _view[_view[0].route === "/" ? 1 : 0] : _view[0];
                // Get title from route
                var title = (view === null || view === void 0 ? void 0 : view.title) !== undefined ? view.title + " \u2022 " + APP_MANIFEST.name : APP_MANIFEST.name;
                // Set new title
                document.title = title;
            }
        }());
    });
    // Render router
    return (react_1.default.createElement(react_2.ThemeProvider, { global: true },
        react_1.default.createElement(Router, null,
            react_1.default.createElement("main", null, views.map(function (_a, key) {
                var route = _a.route, View = _a.View, def = _a.default;
                return react_1.default.createElement(react_router_dom_1.Route, { key: key, path: route, exact: true, component: def || View });
            })))));
}
// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function () {
    // Append a container to the DOM to render content into
    var root = document.createElement("DIV");
    root.id = "root";
    document.body.append(root);
    // Render root component into react-root container
    react_dom_1.render(react_1.default.createElement(Root, null), document.getElementById("root"));
});
// If is running in production
if (PRODUCTION) {
    // Register a static asset caching service-worker
    OfflinePluginRuntime.install();
    // Get client version
    /* eslint @typescript-eslint/no-var-requires: 0 */
    var client_1 = require("raw-loader!../hash").default;
    // Get server version
    (function update() {
        var _this = this;
        fetch("/hash?" + Date.now()).then(function (resp) { return resp.text(); }).then(function (server) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Make sure client recieved a hash
                if (server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {
                    // Update the client
                    if (server !== client_1)
                        app_1.default.update(server.substr(0, 8));
                    // If there is no update available, retry in 60s
                    else
                        setTimeout(update, 60000);
                }
                return [2 /*return*/];
            });
        }); });
    }());
}
//# sourceMappingURL=index.js.map