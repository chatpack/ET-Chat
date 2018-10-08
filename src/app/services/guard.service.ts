/** ******************************************************************************************************
 *
 *  guard.service.ts
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

import { Injectable }             from "@angular/core";
import { CanActivate }            from "@angular/router";
import { CanLoad }                from "@angular/router";
import { Router }                 from "@angular/router";

import { AuthenticationService }  from "./auth.service";

@Injectable()
export class RoutingGuardService implements CanActivate, CanLoad {

  constructor( private router: Router,
               private authservice: AuthenticationService ) {}

  canActivate(): boolean {
    if (( this.authservice.isAuthenticationRequired()) && 
        ( ! this.authservice.isAuthenticated()))        {
          let foreward = [{ outlets: { page: [ "auth", "login" ]}}];
          console.log( "RoutingGuardService::canActivate - foreward to:   '" + foreward + "'" );
          this.router.navigate( foreward );
          return false;
    }
    return true;
  }

  canLoad(): boolean {
    if (( this.authservice.isAuthenticationRequired()) && 
        ( ! this.authservice.isAuthenticated()))        {
          let foreward = [{ outlets: { page: [ "auth", "login" ]}}];
          console.log( "RoutingGuardService::canLoad - foreward to:   '" + foreward + "'" );
          this.router.navigate( foreward );
          return false;
    }
    return true;
  }
}