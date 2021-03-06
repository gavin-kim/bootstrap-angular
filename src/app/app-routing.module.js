"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var projects_component_1 = require("./components/projects.component");
var error_component_1 = require("./components/error.component");
var contact_component_1 = require("./components/contact.component");
var play_component_1 = require("./projects/play.component");
var routes = [
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: play_component_1.PlayComponent // used in <router-outlet>
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: '**',
        component: error_component_1.ErrorComponent
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes) // forRoot: +router service, forChild: no router service
        ],
        exports: [
            router_1.RouterModule // components in the companion module have access to RouterLink, RouterOutlet etc...
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map