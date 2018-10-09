/** ******************************************************************************************************
 *
 *  auth.module.ts
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

import { NgModule }                                 from "@angular/core";
import { CommonModule }                             from "@angular/common";
import { FormsModule }                              from "@angular/forms";

import { MatButtonModule }                          from "@angular/material/button";
import { MatCardModule }                            from "@angular/material/card";
import { MatCheckboxModule }                        from "@angular/material/checkbox";
import { MatDividerModule }                         from "@angular/material/divider";
import { MatFormFieldModule }                       from "@angular/material/form-field";
import { MatInputModule }                           from "@angular/material/input";

import { LoginComponent }                           from "./auth.login.component";

import { AuthenticationRoutingModule }              from "./auth-routing.module";
import { ToolsModule }                              from "../tools/tools.module";

@NgModule({
  imports:      [
                  CommonModule,
                  FormsModule,

                  AuthenticationRoutingModule ,     // Add routing to module auth.
                  ToolsModule,                      // Add pipes and stuff

                  MatButtonModule,
                  MatCardModule,
                  MatCheckboxModule,
                  MatDividerModule,
                  MatFormFieldModule,
                  MatInputModule
                ],
  declarations: [
                  LoginComponent
                ]
})
export class AuthenticationModule {}
