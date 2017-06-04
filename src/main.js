"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Complies the application with the JIT compiler and
 * bootstraps the application's main module (AppModule) to run in the browser.
 *
 */
require("zone.js");
require("reflect-metadata");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map