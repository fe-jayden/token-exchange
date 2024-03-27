import { jsx } from '@emotion/react';
import { CSSProperties, ReactNode } from 'react';

export type ObjectType = {
  [key: string]: any;
};

export type IResolveParams = {
  provider: string;
  data?: ObjectType;
};

// ------------------------------
// ---------- FACEBOOK ----------
// ------------------------------
export interface IFacebookProps {
  appId: string;
  scope?: string;
  state?: boolean;
  xfbml?: boolean;
  cookie?: boolean;
  version?: string;
  language?: string;
  auth_type?: string;
  className?: string;
  isDisabled?: boolean;
  isOnlyGetToken?: boolean;
  onLoginStart?: () => void;
  onLogoutSuccess?: () => void;
  onReject: (reject: string | ObjectType) => void;
  onResolve: ({ provider, data }: IResolveParams) => void;
  redirect_uri?: string;
  fieldsProfile?: string;
  response_type?: string;
  return_scopes?: boolean;
  children?: React.ReactNode;
}

// ----------------------------
// ---------- GOOGLE ----------
// ----------------------------

export interface IGoogleProps {
  scope?: string;
  prompt?: string;
  ux_mode?: string;
  client_id: string;
  className?: string;
  login_hint?: string;
  access_type?: string;
  auto_select?: boolean;
  redirect_uri?: string;
  cookie_policy?: string;
  hosted_domain?: string;
  discoveryDocs?: string;
  children?: React.ReactNode;
  onLoginStart?: () => void;
  isOnlyGetToken?: boolean;
  typeResponse?: 'idToken' | 'accessToken';
  onReject: (reject: string | ObjectType) => void;
  fetch_basic_profile?: boolean;
  onResolve: ({ provider, data }: IResolveParams) => void;
}

// ---------------------------
// ---------- APPLE ----------
// ---------------------------
export interface IAppleProps {
  scope?: string;
  client_id: string;
  className?: string;
  redirect_uri?: string;
  children?: React.ReactNode;
  onLoginStart?: () => void;
  onReject: (reject: string | ObjectType) => void;
  onResolve: ({ provider, data }: IResolveParams) => void;
}

// ---------------------------
// ---------- NAVER ----------
// ---------------------------
export interface INaverUser {
  email: string;
  name: string;
  id: string;
  profile_image: string;
  age?: string;
  birthday?: string;
  gender?: string;
  nickname?: string;
}

export interface INaverProps {
  clientId: string;
  callbackUrl?: string;
  render: (props: any) => React.ComponentElement<any, any> | Element;
  onSuccess: (result: INaverUser) => void;
  onFailure: (err: unknown) => void;
}

// --------------------------------
// ---------- KAKAO TALK ----------
// --------------------------------
interface IKakaoError {
  error: string;
  error_description: string;
}

interface IKakaoLoginResponse {
  token_type: string;
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

interface IKakaoLoginParams {
  throughTalk?: boolean /** @default: true */;
  persistAccessToken?: boolean /** @default: true  */;
  scope?: string;
  success: (response: IKakaoLoginResponse) => void;
  fail: (error: IKakaoError) => void;
}

type IKakaoLogoutCallback = () => void;

interface IKakaoAuth {
  login: (params: IKakaoLoginParams) => void;
  loginForm: (params: IKakaoLoginParams) => void;
  logout: (callback: IKakaoLogoutCallback) => void;
  getAccessToken: () => string | null;
}

interface IKakaoProfile {
  nickname: string;
  profile_image: string;
  thumbnail_image_url: string;
  profile_needs_agreement?: boolean;
}

interface KakaoAccount {
  profile: IKakaoProfile;
  email: string;
  age_range: string;
  birthday: string;
  birthyear: string;
  gender: 'female' | 'male';
  phone_number: string;
  ci: string;
}

interface IKakaoUserProfile {
  id: number;
  kakao_account: KakaoAccount;
  synched_at: string;
  connected_at: string;
  properties: IKakaoProfile;
}

interface IKakaoRequestParams {
  url: string;
  success: (profile: IKakaoUserProfile) => void;
  fail: (error: IKakaoError) => void;
}

interface IKakaoAPI {
  request: (params: IKakaoRequestParams) => void;
}

interface IKakao {
  init: (...args: unknown[]) => void;
  Auth: IKakaoAuth;
  API: IKakaoAPI;
}

export interface IKakaoExtendedWindow extends Window {
  Kakao: IKakao;
}

type Scope = 'id' | 'kakao_account' | 'synched_at' | 'connected_at' | 'properties';

export interface IKakaoProps {
  token: string;
  onSuccess: (response: { response: IKakaoLoginResponse; profile?: IKakaoUserProfile }) => void;
  onFail: (error: IKakaoError) => void;
  onLogout?: (token?: string | null) => void;
  scopes?: Scope[];
  needProfile?: boolean;
  throughTalk?: boolean;
  useLoginForm?: boolean;
  persistAccessToken?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
  render?: ({ onClick }: { onClick: () => void }) => ReactNode;
  className?: string;
}
