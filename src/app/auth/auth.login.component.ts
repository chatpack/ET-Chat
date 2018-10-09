/** ******************************************************************************************************
 *
 *  auth.login.component.ts
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

import { Component }              from '@angular/core';
import { Router }                 from "@angular/router";

import { AuthenticationService }  from "../services/auth.service";

// Webpack: loader will replace import
import "./auth.login.component.scss";

@Component({
  selector:      "auth-login",                            // replace "auth-login" by template content (never used)
  template:      require( "./auth.login.component.html" ) // require resolves relative to current directory/file
                                                          // Webpack: loader will replace require statement
})
export class LoginComponent { 
  
  /** sozial connectors - to login via fb, google, ... */
  public connectors: Array<String> = null;

  /** prepare for i18n pipe optimization */
  // Webpack: loader will replace require statment
  public static i18n = { "de-DE": require( "./auth.login.component.de-DE.json" ) };
 
  constructor( private router: Router, 
               private authservice: AuthenticationService ) { 

    this.connectors = authservice.getConnectors();
  }

  signIn( service: string ): void {
    this.authservice.signIn( service );
  }

  signOut(): void {
    this.authservice.signOut();
  }
}