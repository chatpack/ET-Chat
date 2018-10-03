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

import { NgModule }                   from '@angular/core';
import { HttpModule }                 from '@angular/http';

import { BrowserModule }              from '@angular/platform-browser';

import { AppComponent }               from './app.component';

@NgModule({
  imports:      [ 
                  BrowserModule       // Required. Always. And re-exports CommonModule => no need to import it!
                ],
  declarations: [ 
                  AppComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }