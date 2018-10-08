/** ******************************************************************************************************
 *
 *  app-routing.module.ts
 *
 *  © 2018 ch4tp4ck
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

import { NgModule }                   from "@angular/core";
import { RouterModule }               from "@angular/router";
import { Routes }                     from "@angular/router";

import { AppDashboardComponent }      from "./app.dashboard.component";
import { AppDefaultComponent }        from "./app.default.component";

import { RoutingGuardService }        from "./services/guard.service";

const appRoutes: Routes = [
  { path: "dashboard",  component:   AppDashboardComponent, pathMatch:    "full" },
  { path: "default",    component:   AppDefaultComponent,   pathMatch:    "full",   outlet: "page",
                        canLoad:     [RoutingGuardService], canActivate:  [RoutingGuardService]},
  { path: "",           redirectTo:  "/(page:default)",     pathMatch:    "full" },
  { path: "**",         redirectTo:  "/default",            pathMatch:    "full" }
];


@NgModule({
  imports:  [ // enableTracing: true <-- debugging purposes only.
              RouterModule.forRoot( appRoutes, { enableTracing: true })
            ],
  exports:  [
              RouterModule
            ]
})
export class AppRoutingModule { }