/** ******************************************************************************************************
 *
 *  app.module.ts
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
import { HttpModule }                 from "@angular/http";

import { BrowserModule }              from "@angular/platform-browser";
import { BrowserAnimationsModule }    from "@angular/platform-browser/animations";

import { MatButtonModule }            from "@angular/material/button";
import { MatIconModule }              from "@angular/material/icon";
import { MatListModule }              from "@angular/material/list";
import { MatSidenavModule }           from "@angular/material/sidenav";
import { MatSnackBarModule }          from "@angular/material";
import { MatToolbarModule }           from "@angular/material/toolbar";

import { AuthServiceConfig }          from "angular-6-social-login-temp";
import { SocialLoginModule }          from "angular-6-social-login-temp";

import { AppComponent }               from "./app.component";
import { AppRoutingModule }           from "./app-routing.module";
import { AppDashboardComponent }      from "./app.dashboard.component";
import { AppDefaultComponent }        from "./app.default.component";
import { AppSidebarComponent }        from "./app.sidebar.component";
import { AppToolbarComponent }        from "./app.toolbar.component";

import { AuthenticationModule }       from "./auth/auth.module";

import { LoginProviderConfiguration}  from "./providers/login.provider.configuration";

import { AuthenticationService }      from "./services/auth.service";
import { ErrorService }               from "./services/error.service";
import { RoutingForewardService }     from "./services/foreward.service";
import { RoutingGuardService }        from "./services/guard.service";


@NgModule({
  imports:      [ 
                  BrowserModule,            // Required. Always. And re-exports CommonModule => no need to import it!
                  BrowserAnimationsModule,  // yes, we'd like to see animations!

                  SocialLoginModule,        // angularx-social-login (Login via Google/Facebook/*)

                  AppRoutingModule,         // Add routing to the app. Note: Each module uses its child routing!
                  
                  AuthenticationModule,     // Add authentication module

                  // material controls
                  MatButtonModule,
                  MatIconModule,
                  MatListModule,
                  MatSidenavModule,
                  MatSnackBarModule,
                  MatToolbarModule
                ],
  declarations: [ 
                  AppComponent,
                  AppDashboardComponent,    // Display in case something went wrong or if we do not really know what to display.
                  AppDefaultComponent,
                  AppSidebarComponent,
                  AppToolbarComponent
                ],
  providers:    [ // The following services kan be injected application-wide (kind of singletons)
                  AuthenticationService,    // Keeps track of authentication status
                  ErrorService,             // Send, log and request error data to/from this service

                  // The following services depend on the previous ones...
                  RoutingForewardService,
                  RoutingGuardService,

                  // angularx-social-login
                  { provide: AuthServiceConfig, useFactory: LoginProviderConfiguration.getAuthServiceConfig }
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }