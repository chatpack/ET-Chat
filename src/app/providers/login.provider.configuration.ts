/** ******************************************************************************************************
 *
 *  login.provider.configuration.ts
 *
 *  © 2018 ch4tp4ck
 *
 *  @see: https://github.com/abacritt/angularx-social-login
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

import { AuthServiceConfig }        from "angular-6-social-login-temp";
import { GoogleLoginProvider }      from "angular-6-social-login-temp";
import { FacebookLoginProvider }    from "angular-6-social-login-temp";
import { LinkedInLoginProvider }    from "angular-6-social-login-temp";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider( "Google-OAuth-Client-Id" )
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider( "Facebook-App-Id" )
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider( "LinkedIn-client-Id", false, 'en_US' )
  }
]);

export class LoginProviderConfiguration {

  public static getAuthServiceConfig(): AuthServiceConfig {
    return config;
  }
}