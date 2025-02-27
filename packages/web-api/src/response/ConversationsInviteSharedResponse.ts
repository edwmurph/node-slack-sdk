/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type ConversationsInviteSharedResponse = WebAPICallResult & {
  conf_code?:                string;
  error?:                    string;
  invite_id?:                string;
  is_legacy_shared_channel?: boolean;
  needed?:                   string;
  ok?:                       boolean;
  provided?:                 string;
  url?:                      string;
};
