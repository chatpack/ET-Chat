/** ******************************************************************************************************
 *
 *  auth-routing.module.ts
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

import { NgModule }                    from '@angular/core';
import { RouterModule }                from '@angular/router';
import { Routes }                      from '@angular/router';

import { LoginComponent }              from "./auth.login.component";

const childRoutes: Routes = [
  { path: "auth/login", component:  LoginComponent, outlet: "page" }
];

@NgModule({
  imports:      [
                  RouterModule.forChild( childRoutes )
                ],
  exports:      [
                  RouterModule
                ]
})
export class AuthenticationRoutingModule { }