/** ******************************************************************************************************
 *
 *  app.default.component.ts
 *
 *  © 2018 ch4tp4ck
 *
 *  Component to be routed to by default. Check router configuration if you experience other.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

import { Component }                from "@angular/core"; 

import "./app.default.component.scss";

@Component({
  selector:      "app-default",                            // replace "app-default" by template content
                                                           //          ... in fact this will show up in router-outlet
  template:      require( "./app.default.component.html" ) // require resolves relative to current directory/file
})
export class AppDefaultComponent { }