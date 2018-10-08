/** ******************************************************************************************************
 *
 *  app.sidebar.component.ts
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

import { Component }              from "@angular/core";
import { Router }                 from "@angular/router";

import { AuthenticationService }  from "./services/auth.service";

import "./app.sidebar.component.scss";

@Component({
  selector:      "app-sidebar",                            // replace "app-sidebar" by template content
  template:      require( "./app.sidebar.component.html" ) // require resolves relative to current directory/file
})
export class AppSidebarComponent { 
  
  constructor( private router: Router, 
               private authservice: AuthenticationService ) { }

  /**
   *  Called by sidebar elements to get output displayed in content area
   *  (right side)
   */
  public routeTo( destination: Array<String>): void {
    this.router.navigate( destination );
  }
}