"use strict";
/**
 * Root module that tells Angular how to assemble the application.
 *
 * -NgModule: decorator function that takes a single metadata object.
 * --properties:
 * ---declarations: the view classes (components, directives and pipes) that belong to this module
 * ---exports: the subset of declaration that should be visible and usable in the component templates of other modules
 * ---imports: other modules are needed by components templates in this module
 * ---providers: creators of services; they become accessible in all parts of the app
 * ---bootstrap: the main application view, called the root component. Only the root module should set bootstrap property
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var window_ref_1 = require("./services/window-ref");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./components/nav.component");
var breadcrumb_component_1 = require("./components/breadcrumb.component");
var projects_component_1 = require("./components/projects.component");
var image_viewer_component_1 = require("./components/image-viewer.component");
var project_service_1 = require("./services/project.service");
var about_component_1 = require("./components/about.component");
var contact_component_1 = require("./components/contact.component");
var error_component_1 = require("./components/error.component");
var play_component_1 = require("./projects/play.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule // custom routing module
        ],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            breadcrumb_component_1.BreadcrumbComponent,
            projects_component_1.ProjectsComponent,
            image_viewer_component_1.ImageViewerComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            error_component_1.ErrorComponent,
            play_component_1.PlayComponent
        ],
        providers: [
            project_service_1.ProjectService,
            window_ref_1.WindowRef
        ],
        bootstrap: [
            app_component_1.AppComponent // root
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map