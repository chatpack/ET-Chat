/** ******************************************************************************************************
 *
 *  define.service.ts
 *
 *  © 2018 ch4tp4ck
 *
 *  Corresponds with webpack.DefinePlugin, which injects defined values into *.ts files.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

import { Injectable }               from '@angular/core';

// declare existancy of constants later replaced by webpacks DefinePlugin
declare var DEFINE_SERVICE_URL_PATH_COOKIES: string;
declare var DEFINE_SERVICE_URL_PATH_IMPRINT: string;
declare var DEFINE_SERVICE_URL_PATH_PPOLICY: string;
declare var DEFINE_SERVICE_URL_PATH_TOS: string;

declare var DEFINE_SERVICE_FILENAME_COOKIES: string;
declare var DEFINE_SERVICE_FILENAME_IMPRINT: string;
declare var DEFINE_SERVICE_FILENAME_PPOLICY: string;
declare var DEFINE_SERVICE_FILENAME_TOS: string;

declare var DEFINE_SERVICE_LINK_COOKIES: boolean;
declare var DEFINE_SERVICE_LINK_IMPRINT: boolean;
declare var DEFINE_SERVICE_LINK_PPOLICY: boolean;
declare var DEFINE_SERVICE_LINK_TOS: boolean;

declare var DEFINE_SERVICE_REQUIRE_ACCEPT_COOKIES: boolean;
declare var DEFINE_SERVICE_REQUIRE_ACCEPT_TOS: boolean;

// Right side will be replaced by webpacks DefinePlugin - results are constant
const URL_PATH_COOKIES:       string  = DEFINE_SERVICE_URL_PATH_COOKIES;
const URL_PATH_IMPRINT:       string  = DEFINE_SERVICE_URL_PATH_IMPRINT;
const URL_PATH_PPOLICY:       string  = DEFINE_SERVICE_URL_PATH_PPOLICY;
const URL_PATH_TOS:           string  = DEFINE_SERVICE_URL_PATH_TOS;
const FILENAME_COOKIES:       string  = DEFINE_SERVICE_FILENAME_COOKIES;
const FILENAME_IMPRINT:       string  = DEFINE_SERVICE_FILENAME_IMPRINT;
const FILENAME_PPOLICY:       string  = DEFINE_SERVICE_FILENAME_PPOLICY;
const FILENAME_TOS:           string  = DEFINE_SERVICE_FILENAME_TOS;
const LINK_COOKIES:           boolean = DEFINE_SERVICE_LINK_COOKIES;
const LINK_IMPRINT:           boolean = DEFINE_SERVICE_LINK_IMPRINT;
const LINK_PPOLICY:           boolean = DEFINE_SERVICE_LINK_PPOLICY;
const LINK_TOS:               boolean = DEFINE_SERVICE_LINK_TOS;
const REQUIRE_ACCEPT_COOKIES: boolean = DEFINE_SERVICE_REQUIRE_ACCEPT_COOKIES;
const REQUIRE_ACCEPT_TOS:     boolean = DEFINE_SERVICE_REQUIRE_ACCEPT_TOS;

/**
 *  Define Service.
 */
@Injectable()
export class DefineService {

  /** link is relative to app path and points to cookies.html - can be null. */
  public url_path_cookies:       string  = URL_PATH_COOKIES;
  /** link is relative to app path and points to imprint.html - can be null. */
  public url_path_imprint:       string  = URL_PATH_IMPRINT;
  /** link is relative to app path and points to privacypolicy.html - can be null. */
  public url_path_ppolicy:       string  = URL_PATH_PPOLICY;
  /** link is relative to app path and points to tos.html - can be null. */
  public url_path_tos:           string  = URL_PATH_TOS;

  /** filename - like /cookies.html - can be null. */
  public filename_cookies:       string  = FILENAME_COOKIES;
  /** filename - like /imprint.html - can be null. */
  public filename_imprint:       string  = FILENAME_IMPRINT;
  /** filename - like privacypolicy.html - can be null. */
  public filename_ppolicy:       string  = FILENAME_PPOLICY;
  /** filename - like tos.html - can be null. */
  public filename_tos:           string  = FILENAME_TOS;

  /** true, if link to cookies.html should be available */
  public link_cookies:           boolean = LINK_COOKIES;
  /** true, if link to imprint.html should be available */
  public link_imprint:           boolean = LINK_IMPRINT;
  /** true, if link to privacypolicy.html should be available */
  public link_ppolicy:           boolean = LINK_PPOLICY;
  /** true, if link to tos.html should be available */
  public link_tos:               boolean = LINK_TOS;

  /** true, if cookies must be accepted to log into chat */
  public require_accept_cookies: boolean = REQUIRE_ACCEPT_COOKIES;
  /** true, if tos must be accepted to log into chat */
  public require_accept_tos:     boolean = REQUIRE_ACCEPT_TOS;

}