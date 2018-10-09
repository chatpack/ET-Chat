/** ******************************************************************************************************
 *
 *  tools.module.ts
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

import { NgModule } from "@angular/core";

import { I18nPipe } from "./pipe.i18n";


@NgModule({
  declarations: [
                  I18nPipe  // internationalize (translate) strings
                ],
  exports:      [ // make classes available for use with other modules 
                  // import { ToolsModule } from "<path>/tools.module"; 
                  // and append ToolsModule to @NgModule(s) array of "imports".
                  I18nPipe
                ]
})
export class ToolsModule {}
