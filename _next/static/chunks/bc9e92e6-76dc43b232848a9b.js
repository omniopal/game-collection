"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{5002:function(e,t,n){n.d(t,{JU:function(){return ib},ad:function(){return iL},cf:function(){return se},hJ:function(){return ik},r7:function(){return i7}});var r,i,s,a,o=n(9279),l=n(2680),u=n(9053),h=n(3943),c=n(6552),d=n(4575);n(357);var f=n(6300).Buffer;let m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="10.13.0",y=new u.Yd("@firebase/firestore");function v(){return y.logLevel}function w(e,...t){if(y.logLevel<=u.in.DEBUG){let n=t.map(T);y.debug(`Firestore (${p}): ${e}`,...n)}}function _(e,...t){if(y.logLevel<=u.in.ERROR){let n=t.map(T);y.error(`Firestore (${p}): ${e}`,...n)}}function E(e,...t){if(y.logLevel<=u.in.WARN){let n=t.map(T);y.warn(`Firestore (${p}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw _(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new N;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new N,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new N)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||I(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||I(),new g(e)}}class R{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class x{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new R(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,w("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||I(),this.R=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function O(e,t){return e<t?-1:e>t?1:0}function P(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new F(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new F(0,0))}static max(){return new U(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends q{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}let z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends q{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new S(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(B.fromString(e))}static fromName(e){return new K(B.fromString(e).popFirst(5))}static empty(){return new K(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new B(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Q.UNKNOWN_ID=-1;class G{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new G(U.min(),K.empty(),-1)}static max(){return new G(U.max(),K.empty(),-1)}}class j{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e){if(e.code!==C.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof H?t:H.resolve(t)}catch(e){return H.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,n)=>{t(e)})}static reject(e){return new H((t,n)=>{n(e)})}static waitFor(e){return new H((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=H.resolve(!1);for(let n of e)t=t.next(e=>e?H.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new H((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new H((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function Y(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ee(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function et(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}X.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.comparator=e,this.root=t||ei.EMPTY}insert(e,t){return new en(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ei.BLACK,null,null))}remove(e){return new en(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ei.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new er(this.root,e,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new er(this.root,e,this.comparator,!0)}}class er{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ei{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ei.RED,this.left=null!=r?r:ei.EMPTY,this.right=null!=i?i:ei.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ei(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ei.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ei.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ei.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ei.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ei.EMPTY=null,ei.RED=!0,ei.BLACK=!1,ei.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ei(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e,this.data=new en(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ea(this.data.getIterator())}getIteratorFrom(e){return new ea(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new es(this.comparator);return t.data=e,t}}class ea{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new eo([])}unionWith(e){let t=new es($.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eo(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return P(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.binaryString=e}static fromBase64String(e){return new eu(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new el("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eu(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eu.EMPTY_BYTE_STRING=new eu("");let eh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ec(e){if(e||I(),"string"==typeof e){let t=0,n=eh.exec(e);if(n||I(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ed(e.seconds),nanos:ed(e.nanos)}}function ed(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ef(e){return"string"==typeof e?eu.fromBase64String(e):eu.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eg(e){let t=e.mapValue.fields.__previous_value__;return em(t)?eg(t):t}function ep(e){let t=ec(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ev{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ev("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ev&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function e_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?em(e)?4:eV(e)?9007199254740991:ex(e)?10:11:I()}function eE(e,t){if(e===t)return!0;let n=e_(e);if(n!==e_(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ep(e).isEqual(ep(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ec(e.timestampValue),r=ec(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ef(e.bytesValue).isEqual(ef(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ed(e.geoPointValue.latitude)===ed(t.geoPointValue.latitude)&&ed(e.geoPointValue.longitude)===ed(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ed(e.integerValue)===ed(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ed(e.doubleValue),r=ed(t.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],eE);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eE(n[e],r[e])))return!1;return!0}(e,t);default:return I()}}function eT(e,t){return void 0!==(e.values||[]).find(e=>eE(e,t))}function eI(e,t){if(e===t)return 0;let n=e_(e),r=e_(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ed(e.integerValue||e.doubleValue),r=ed(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eC(e.timestampValue,t.timestampValue);case 4:return eC(ep(e),ep(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ef(e),r=ef(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=O(n[e],r[e]);if(0!==t)return t}return O(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=O(ed(e.latitude),ed(t.latitude));return 0!==n?n:O(ed(e.longitude),ed(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eS(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=o.value)||void 0===r?void 0:r.arrayValue,h=O((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eS(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ew.mapValue&&t===ew.mapValue)return 0;if(e===ew.mapValue)return 1;if(t===ew.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=O(r[e],s[e]);if(0!==t)return t;let a=eI(n[r[e]],i[s[e]]);if(0!==a)return a}return O(r.length,s.length)}(e.mapValue,t.mapValue);default:throw I()}}function eC(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);let n=ec(e),r=ec(t),i=O(n.seconds,r.seconds);return 0!==i?i:O(n.nanos,r.nanos)}function eS(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eI(n[e],r[e]);if(t)return t}return O(n.length,r.length)}function eN(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ec(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ef(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,K.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eN(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eN(e.fields[i])}`;return n+"}"}(e.mapValue):I()}function eA(e){return!!e&&"integerValue"in e}function ek(e){return!!e&&"arrayValue"in e}function eb(e){return!!e&&"nullValue"in e}function eD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eR(e){return!!e&&"mapValue"in e}function ex(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eL(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ee(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eL(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eL(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eV(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.value=e}static empty(){return new eM({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eR(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eL(t)}setAll(e){let t=$.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eL(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eR(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eE(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eR(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ee(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eM(eL(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eO(e,0,U.min(),U.min(),U.min(),eM.empty(),0)}static newFoundDocument(e,t,n,r){return new eO(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new eO(e,2,t,U.min(),U.min(),eM.empty(),0)}static newUnknownDocument(e,t){return new eO(e,3,t,U.min(),U.min(),eM.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(U.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eM.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eM.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eO&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eO(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.position=e,this.inclusive=t}}function eF(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?K.comparator(K.fromName(a.referenceValue),n.key):eI(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eU(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eE(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{}class ez extends eB{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eG(e,t,n):"array-contains"===t?new eY(e,n):"in"===t?new eX(e,n):"not-in"===t?new eJ(e,n):"array-contains-any"===t?new eZ(e,n):new ez(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ej(e,n):new eW(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eI(t,this.value)):null!==t&&e_(this.value)===e_(t)&&this.matchesComparison(eI(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e$ extends eB{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new e$(e,t)}matches(e){return eK(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eK(e){return"and"===e.op}function eQ(e){for(let t of e.filters)if(t instanceof e$)return!1;return!0}class eG extends ez{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){let t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class ej extends ez{constructor(e,t){super(e,"in",t),this.keys=eH("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eW extends ez{constructor(e,t){super(e,"not-in",t),this.keys=eH("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eH(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>K.fromName(e.referenceValue))}class eY extends ez{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ek(t)&&eT(t.arrayValue,this.value)}}class eX extends ez{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eT(this.value.arrayValue,t)}}class eJ extends ez{constructor(e,t){super(e,"not-in",t)}matches(e){if(eT(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eT(this.value.arrayValue,t)}}class eZ extends ez{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ek(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eT(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function e1(e,t=null,n=[],r=[],i=null,s=null,a=null){return new e0(e,t,n,r,i,s,a)}function e2(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ez)return t.field.canonicalString()+t.op.toString()+eN(t.value);if(eQ(t)&&eK(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eN(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eN(e)).join(",")),e.ue=t}return e.ue}function e3(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof ez?n instanceof ez&&t.op===n.op&&t.field.isEqual(n.field)&&eE(t.value,n.value):t instanceof e$?n instanceof e$&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void I()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eU(e.startAt,t.startAt)&&eU(e.endAt,t.endAt)}function e4(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e8(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e5(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new es($.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eq(t,r))}),n.has($.keyField().canonicalString())||e.ce.push(new eq($.keyField(),r))}return e.ce}function e6(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return e1(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eq(e.field,t)});let n=e.endAt?new eP(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eP(e.startAt.position,e.startAt.inclusive):null;return e1(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,e5(e))),e.le}function e7(e,t,n){return new e9(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function te(e,t){return e3(e6(e),e6(t))&&e.limitType===t.limitType}function tt(e){return`${e2(e6(e))}|lt:${e.limitType}`}function tn(e){var t;let n;return`Query(target=${n=(t=e6(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ez?`${t.field.canonicalString()} ${t.op} ${eN(t.value)}`:t instanceof e$?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eN(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eN(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tr(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):K.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e5(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e5(e),t))&&(!e.endAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e5(e),t))}function ti(e){return(t,n)=>{let r=!1;for(let i of e5(e)){let e=function(e,t,n){let r=e.field.isKeyField()?K.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eI(r,i):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return I()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ee(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=new en(K.comparator),to=new en(K.comparator);function tl(...e){let t=to;for(let n of e)t=t.insert(n.key,n);return t}function tu(e){let t=to;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function th(){return new ts(e=>e.toString(),(e,t)=>e.isEqual(t))}let tc=new en(K.comparator),td=new es(K.comparator);function tf(...e){let t=td;for(let n of e)t=t.add(n);return t}let tm=new es(O);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function tp(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this._=void 0}}function tv(e,t){return e instanceof tC?eA(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tw extends ty{}class t_ extends ty{constructor(e){super(),this.elements=e}}function tE(e,t){let n=tN(t);for(let t of e.elements)n.some(e=>eE(e,t))||n.push(t);return{arrayValue:{values:n}}}class tT extends ty{constructor(e){super(),this.elements=e}}function tI(e,t){let n=tN(t);for(let t of e.elements)n=n.filter(e=>!eE(e,t));return{arrayValue:{values:n}}}class tC extends ty{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tS(e){return ed(e.integerValue||e.doubleValue)}function tN(e){return ek(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tA{constructor(e,t){this.version=e,this.transformResults=t}}class tk{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tk}static exists(e){return new tk(void 0,e)}static updateTime(e){return new tk(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tb(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tD{}function tR(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tU(e.key,tk.none()):new tV(e.key,e.data,tk.none());{let n=e.data,r=eM.empty(),i=new es($.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tM(e.key,r,new eo(i.toArray()),tk.none())}}function tx(e,t,n,r){return e instanceof tV?function(e,t,n,r){if(!tb(e.precondition,t))return n;let i=e.value.clone(),s=tF(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tM?function(e,t,n,r){if(!tb(e.precondition,t))return n;let i=tF(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tO(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tb(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tL(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&P(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof t_&&r instanceof t_||n instanceof tT&&r instanceof tT?P(n.elements,r.elements,eE):n instanceof tC&&r instanceof tC?eE(n.Pe,r.Pe):n instanceof tw&&r instanceof tw)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tV extends tD{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tM extends tD{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tO(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tP(e,t,n){var r;let i=new Map;e.length===n.length||I();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof t_?tE(o,l):o instanceof tT?tI(o,l):r))}return i}function tF(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tw?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&em(t)&&(t=eg(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof t_?tE(e,s):e instanceof tT?tI(e,s):function(e,t){let n=tv(e,t),r=tS(n)+tS(e.Pe);return eA(n)&&eA(e.Pe)?tp(r):tg(e.serializer,r)}(e,s))}return r}class tU extends tD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tq extends tD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tV?function(e,t,n){let r=e.value.clone(),i=tP(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tM?function(e,t,n){if(!tb(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tP(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tO(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tx(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tx(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=th();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tR(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tf())}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,(e,t)=>tL(e,t))&&P(this.baseMutations,e.baseMutations,(e,t)=>tL(e,t))}}class tz{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||I();let r=tc,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new tz(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e,t){this.count=e,this.unchangedNames=t}}function tQ(e){if(void 0===e)return _("GRPC error has no .code"),C.UNKNOWN;switch(e){case r.OK:return C.OK;case r.CANCELLED:return C.CANCELLED;case r.UNKNOWN:return C.UNKNOWN;case r.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case r.INTERNAL:return C.INTERNAL;case r.UNAVAILABLE:return C.UNAVAILABLE;case r.UNAUTHENTICATED:return C.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case r.NOT_FOUND:return C.NOT_FOUND;case r.ALREADY_EXISTS:return C.ALREADY_EXISTS;case r.PERMISSION_DENIED:return C.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case r.ABORTED:return C.ABORTED;case r.OUT_OF_RANGE:return C.OUT_OF_RANGE;case r.UNIMPLEMENTED:return C.UNIMPLEMENTED;case r.DATA_LOSS:return C.DATA_LOSS;default:return I()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG=new c.z8([4294967295,4294967295],0);function tj(e){let t=(new TextEncoder).encode(e),n=new c.V8;return n.update(t),new Uint8Array(n.digest())}function tW(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([n,r],0),new c.z8([i,s],0)]}class tH{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tY(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=c.z8.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(c.z8.fromNumber(n)));return 1===r.compare(tG)&&(r=new c.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,n]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);if(!this.de(r))return!1}return!0}static create(e,t,n){let r=new tH(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ie)return;let[t,n]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);this.Ae(r)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tJ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tX(U.min(),r,new en(O),ta,tf())}}class tJ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tJ(n,t,tf(),tf(),tf())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class t0{constructor(e,t){this.targetId=e,this.me=t}}class t1{constructor(e,t,n=eu.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class t2{constructor(){this.fe=0,this.ge=t9(),this.pe=eu.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=tf(),t=tf(),n=tf();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I()}}),new tJ(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=t9()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||I()}Ne(){this.we=!0,this.ye=!0}}class t3{constructor(e){this.Le=e,this.Be=new Map,this.ke=ta,this.qe=t4(),this.Qe=new en(O)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:I()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let i=r.target;if(e4(i)){if(0===n){let e=new K(i.path);this.Ue(t,e,eO.newNoDocument(e,U.min()))}else 1===n||I()}else{let r=this.Ye(t);if(r!==n){let n=this.Ze(e),i=n?this.Xe(n,e,r):1;0!==i&&(this.je(t),this.Qe=this.Qe.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=ef(i).toUint8Array()}catch(e){if(e instanceof el)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new tH(t,s,a)}catch(e){return E(e instanceof tY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let i=this.Je(r);if(i){if(n.current&&e4(i.target)){let t=new K(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,eO.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=tf();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new tX(e,t,this.Qe,this.ke,n);return this.ke=ta,this.qe=t4(),this.Qe=new en(O),r}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new t2,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new es(O),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||w("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new t2),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function t4(){return new en(K.comparator)}function t9(){return new en(K.comparator)}let t8={asc:"ASCENDING",desc:"DESCENDING"},t5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t6={and:"AND",or:"OR"};class t7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ne(e,t){return e.useProto3Json||null==t?t:{value:t}}function nt(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nr(e){return e||I(),U.fromTimestamp(function(e){let t=ec(e);return new F(t.seconds,t.nanos)}(e))}function ni(e,t){return ns(e,t).canonicalString()}function ns(e,t){let n=new B(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function na(e){let t=B.fromString(e);return ng(t)||I(),t}function no(e,t){return ni(e.databaseId,t.path)}function nl(e,t){let n=na(t);if(n.get(1)!==e.databaseId.projectId)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(nc(n))}function nu(e,t){return ni(e.databaseId,t)}function nh(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nc(e){return e.length>4&&"documents"===e.get(4)||I(),e.popFirst(5)}function nd(e,t,n){return{name:no(e,t),fields:n.value.mapValue.fields}}function nf(e){return{fieldPath:e.canonicalString()}}function nm(e){return $.fromServerFormat(e.fieldPath)}function ng(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,n,r,i=U.min(),s=U.min(),a=eu.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new np(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ed(e.integerValue));else if("doubleValue"in e){let n=ed(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),J(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=ec(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(ef(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?eV(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ex(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):I()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let n=e.fields||{};for(let e of(this.dt(t,55),Object.keys(n)))this.Vt(e,t),this.Tt(n[e],t)}wt(e,t){var n,r;let i=e.fields||{};this.dt(t,53);let s="value",a=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(ed(a)),this.Vt(s,t),this.Tt(i[s],t)}bt(e,t){let n=e.values||[];for(let e of(this.dt(t,50),n))this.Tt(e,t)}yt(e,t){this.dt(t,37),K.fromName(e).path.forEach(e=>{this.dt(t,60),this.Dt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}nv.vt=new nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.un=new n_}addToCollectionParentIndex(e,t){return this.un.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(G.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(G.min())}updateCollectionGroup(e,t,n){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class n_{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new es(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new es(B.comparator)).toArray()}}new Uint8Array(0);class nE{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nE(e,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nE.DEFAULT_COLLECTION_PERCENTILE=10,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nE.DEFAULT=new nE(41943040,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nE.DISABLED=new nE(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new nT(0)}static kn(){return new nT(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eO.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?H.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tx(n.mutation,e,eo.empty(),F.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tf()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tf()){let r=th();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tl();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=th();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tf()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ta,s=th(),a=th();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tM)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tx(a.mutation,t,a.mutation.getFieldMask(),F.now())):s.set(t.key,eo.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nC(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=th(),r=new en((e,t)=>e-t),i=tf();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eo.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tf()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=th();l.forEach(e=>{if(!i.has(e)){let r=tR(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return H.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return K.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):H.resolve(th()),a=-1,o=i;return s.next(t=>H.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?H.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tf())).next(e=>({batchId:a,changes:tu(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=tl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tl();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,a=>{let o=new e9(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eO.newInvalidDocument(r)))});let n=tl();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tx(s.mutation,r,eo.empty(),F.now()),tr(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return H.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:t.id,version:t.version,createTime:nr(t.createTime)}),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=na(e);return 4===t.length?B.emptyPath():nc(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||I();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nm(e.unaryFilter.field);return ez.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nm(e.unaryFilter.field);return ez.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nm(e.unaryFilter.field);return ez.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nm(e.unaryFilter.field);return ez.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):void 0!==t.fieldFilter?ez.create(nm(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e$.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op)):I()}(e);return n instanceof e$&&eQ(t=n)&&eK(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eq(nm(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new eP(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new eP(e.values||[],t)}(i.endAt)),new e9(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e7(t,t.limit,"L"):t}(t.bundledQuery),readTime:nr(t.readTime)}),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.overlays=new en(K.comparator),this.Ir=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){let n=th();return H.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),H.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Ir.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ir.delete(n)),H.resolve()}getOverlaysForCollection(e,t,n){let r=th(),i=t.length+1,s=new K(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return H.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new en((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=th(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=th(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return H.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new t$(t,n));let i=this.Ir.get(t);void 0===i&&(i=tf(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.sessionToken=eu.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.Tr=new es(nD.Er),this.dr=new es(nD.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let n=new nD(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Vr(new nD(e,t))}mr(e,t){e.forEach(e=>this.removeReference(e,t))}gr(e){let t=new K(new B([])),n=new nD(t,e),r=new nD(t,e+1),i=[];return this.dr.forEachInRange([n,r],e=>{this.Vr(e),i.push(e.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new K(new B([])),n=new nD(t,e),r=new nD(t,e+1),i=tf();return this.dr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nD(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nD{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return K.comparator(e.key,t.key)||O(e.wr,t.wr)}static Ar(e,t){return O(e.wr,t.wr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new es(nD.Er)}checkEmpty(e){return H.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tB(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.br=this.br.add(new nD(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return H.resolve(s)}lookupMutationBatch(e,t){return H.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.vr(t+1),r=n<0?0:n;return H.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nD(t,0),r=new nD(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],e=>{let t=this.Dr(e.wr);i.push(t)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new es(O);return t.forEach(e=>{let t=new nD(e,0),r=new nD(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],e=>{n=n.add(e.wr)})}),H.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;K.isDocumentKey(i)||(i=i.child(""));let s=new nD(new K(i),0),a=new es(O);return this.br.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)},s),H.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.Dr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Fr(t.batchId,"removed")||I(),this.mutationQueue.shift();let n=this.br;return H.forEach(t.mutations,r=>{let i=new nD(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){let n=new nD(t,0),r=this.br.firstAfterOrEqual(n);return H.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.Mr=e,this.docs=new en(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return H.resolve(n?n.document.mutableCopy():eO.newInvalidDocument(t))}getEntries(e,t){let n=ta;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eO.newInvalidDocument(e))}),H.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ta,s=t.path,a=new K(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=K.comparator(e.documentKey,t.documentKey))?n:O(e.largestBatchId,t.largestBatchId)}(new G(a.readTime,a.key,-1),n)||(r.has(a.key)||tr(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,t,n,r){I()}Or(e,t){return H.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nL(this)}getSize(e){return H.resolve(this.size)}}class nL extends nI{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)}),H.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.persistence=e,this.Nr=new ts(e=>e2(e),e3),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nb,this.targetCount=0,this.kr=nT.Bn()}forEachTarget(e,t){return this.Nr.forEach((e,n)=>t(n)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),H.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new nT(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Kn(t),H.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),H.waitFor(i).next(()=>r)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){let n=this.Nr.get(t)||null;return H.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),H.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.yr(t);return H.resolve(n)}containsKey(e,t){return H.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.qr={},this.overlays={},this.Qr=new X(0),this.Kr=!1,this.Kr=!0,this.$r=new nk,this.referenceDelegate=e(this),this.Ur=new nV(this),this.indexManager=new nw,this.remoteDocumentCache=new nx(e=>this.referenceDelegate.Wr(e)),this.serializer=new ny(t),this.Gr=new nN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new nR(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){w("MemoryPersistence","Starting transaction:",e);let r=new nO(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(e=>this.referenceDelegate.jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Hr(e,t){return H.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class nO extends j{constructor(e){super(),this.currentSequenceNumber=e}}class nP{constructor(e){this.persistence=e,this.Jr=new nb,this.Yr=null}static Zr(e){return new nP(e)}get Xr(){if(this.Yr)return this.Yr;throw I()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),H.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),H.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(e=>this.Xr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,n=>{let r=K.fromPath(n);return this.ei(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return H.or([()=>H.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=tf(),r=tf();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nF(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Yi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Zi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nU;return this.Xi(e,t,n).next(r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)})}).next(()=>i.result)}es(e,t,n,r){return n.documentReadCount<this.ji?(v()<=u.in.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(v()<=u.in.DEBUG&&w("QueryEngine","Query:",tn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(v()<=u.in.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e6(t))):H.resolve())}Yi(e,t){if(e8(t))return H.resolve(null);let n=e6(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e6(t=e7(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tf(...r);return this.Ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,e7(t,null,"F")):this.rs(e,s,t,n)}))})))}Zi(e,t,n,r){return e8(t)||r.isEqual(U.min())?H.resolve(null):this.Ji.getDocuments(e,n).next(i=>{let s=this.ts(t,i);return this.ns(t,s,n,r)?H.resolve(null):(v()<=u.in.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tn(t)),this.rs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new G(U.fromTimestamp(1e9===r?new F(n+1,0):new F(n,r)),K.empty(),-1)}(r,0)).next(e=>e))})}ts(e,t){let n=new es(ti(e));return t.forEach((t,r)=>{tr(e,r)&&(n=n.add(r))}),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return v()<=u.in.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",tn(t)),this.Ji.getDocumentsMatchingQuery(e,t,G.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new en(O),this._s=new ts(e=>e2(e),e3),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}async function nz(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tf();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({hs:e,removedBatchIds:i,addedBatchIds:s}))})})}function n$(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}async function nK(e,t,n){let r=e.os.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!Y(e))throw e;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.os=e.os.remove(t),e._s.delete(r.target)}function nQ(e,t,n){let r=U.min(),i=tf();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e._s.get(n);return void 0!==r?H.resolve(e.os.get(r)):e.Ur.getTargetData(t,n)})(e,s,e6(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ur.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ss.getDocumentsMatchingQuery(s,t,n?r:U.min(),n?i:tf())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.us.get(r)||U.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.us.set(r,s),{documents:n,Ts:i}}))}class nG{constructor(){this.activeTargetIds=tm}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class nj{constructor(){this.so=new nG,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new nG,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ho))e(0)}lo(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ho))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nY=null;function nX(){return null===nY?nY=268435456+Math.round(2147483648*Math.random()):nY++,"0x"+nY.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nJ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0="WebChannelConnection";class n1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){let s=nX(),a=this.xo(e,t.toUriEncodedString());w("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,r,i),this.No(e,a,o,n).then(t=>(w("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw E("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}xo(e,t){let n=nJ[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){let i=nX();return new Promise((s,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();w(n0,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.jK.TIMEOUT:w(n0,`RPC '${e}' ${i} timed out`),a(new S(C.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(w(n0,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN}(t.status);a(new S(e,t.message))}else a(new S(C.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new S(C.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w(n0,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);w(n0,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Bo(e,t,n){let i=nX(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new d.zI({})),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");w(n0,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=a.createWebChannel(h,l),f=!1,m=!1,g=new nZ({Io:t=>{m?w(n0,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(w(n0,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),w(n0,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{m||(w(n0,`RPC '${e}' stream ${i} transport opened.`),g.yo())}),p(c,d.ii.EventType.CLOSE,()=>{m||(m=!0,w(n0,`RPC '${e}' stream ${i} transport closed`),g.So())}),p(c,d.ii.EventType.ERROR,t=>{m||(m=!0,E(n0,`RPC '${e}' stream ${i} transport errored:`,t),g.So(new S(C.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||I();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){w(n0,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return tQ(t)}(t),s=a.message;void 0===n&&(n=C.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.So(new S(n,s)),c.close()}else w(n0,`RPC '${e}' stream ${i} received:`,s),g.bo(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?w(n0,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&w(n0,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function n2(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n3(e){return new t7(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t,n,r,i,s,a,o){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new n4(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Yo===t&&this.P_(e,n)},t=>{e(()=>{let e=new S(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)})})}P_(e,t){let n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(e=>{n(()=>this.I_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.e_?this.E_(e):this.onNext(e))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n8 extends n9{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||I(),eu.fromBase64String(i||"")):(void 0===i||i instanceof f||i instanceof Uint8Array||I(),eu.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new t1(s,a,o,l&&new S(void 0===l.code?C.UNKNOWN:tQ(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nl(e,r.document.name),s=nr(r.document.updateTime),a=r.document.createTime?nr(r.document.createTime):U.min(),o=new eM({mapValue:{fields:r.document.fields}}),l=eO.newFoundDocument(i,s,a,o);n=new tZ(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nl(e,r.document),s=r.readTime?nr(r.readTime):U.min(),a=eO.newNoDocument(i,s);n=new tZ([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nl(e,r.document);n=new tZ([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return I();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new tK(r,i);n=new t0(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return U.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?nr(t.readTime):U.min()}(e);return this.listener.d_(t,n)}A_(e){let t={};t.database=nh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=e4(r)?{documents:{documents:[nu(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nu(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ez?function(e){if("=="===e.op){if(eD(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NAN"}};if(eb(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eD(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NAN"}};if(eb(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nf(e.field),op:t5[e.op],value:e.value}}}(t):t instanceof e$?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t6[t.op],filters:n}}}(t):I()}(e$.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nf(e.field),direction:t8[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ne(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:s,parent:i}}(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nn(e,t.resumeToken);let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(U.min())>0){n.readTime=nt(e,t.snapshotVersion.toTimestamp());let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){let t={};t.database=nh(this.serializer),t.removeTarget=e,this.a_(t)}}class n5 extends n9{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return e.streamToken||I(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&I(),this.listener.f_()}onNext(e){var t,n;e.streamToken||I(),this.lastStreamToken=e.streamToken,this.t_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||I(),t.map(e=>{let t;return(t=e.updateTime?nr(e.updateTime):nr(n)).isEqual(U.min())&&(t=nr(n)),new tA(t,e.transformResults||[])})):[]),i=nr(e.commitTime);return this.listener.g_(i,r)}p_(){let e={};e.database=nh(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tV)r={update:nd(e,t.key,t.value)};else if(t instanceof tU)r={delete:no(e,t.key)};else if(t instanceof tM)r={update:nd(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tq))return I();r={verify:no(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tw)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof t_)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tT)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tC)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw I()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nt(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:I()),r})(this.serializer,e))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Mo(e,ns(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString())})}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,ns(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class n7{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(_(t),this.D_=!1):w("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(e=>{n.enqueueAndForget(async()=>{ru(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.L_.add(4),await rn(e),e.q_.set("Unknown"),e.L_.delete(4),await rt(e)}(this))})}),this.q_=new n7(n,r)}}async function rt(e){if(ru(e))for(let t of e.B_)await t(!0)}async function rn(e){for(let t of e.B_)await t(!1)}function rr(e,t){e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),rl(e)?ro(e):rS(e).r_()&&rs(e,t))}function ri(e,t){let n=rS(e);e.N_.delete(t),n.r_()&&ra(e,t),0===e.N_.size&&(n.r_()?n.o_():ru(e)&&e.q_.set("Unknown"))}function rs(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rS(e).A_(t)}function ra(e,t){e.Q_.xe(t),rS(e).R_(t)}function ro(e){e.Q_=new t3({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),rS(e).start(),e.q_.v_()}function rl(e){return ru(e)&&!rS(e).n_()&&e.N_.size>0}function ru(e){return 0===e.L_.size}async function rh(e){e.q_.set("Online")}async function rc(e){e.N_.forEach((t,n)=>{rs(e,t)})}async function rd(e,t){e.Q_=void 0,rl(e)?(e.q_.M_(t),ro(e)):e.q_.set("Unknown")}async function rf(e,t,n){if(e.q_.set("Online"),t instanceof t1&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(n){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rm(e,n)}else if(t instanceof tZ?e.Q_.Ke(t):t instanceof t0?e.Q_.He(t):e.Q_.We(t),!n.isEqual(U.min()))try{let t=await n$(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(eu.EMPTY_BYTE_STRING,r.snapshotVersion)),ra(e,t);let i=new np(r.target,t,n,r.sequenceNumber);rs(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){w("RemoteStore","Failed to raise snapshot:",t),await rm(e,t)}}async function rm(e,t,n){if(!Y(t))throw t;e.L_.add(1),await rn(e),e.q_.set("Offline"),n||(n=()=>n$(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await rt(e)})}function rg(e,t){return t().catch(n=>rm(e,n,t))}async function rp(e){let t=rN(e),n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ru(e)&&e.O_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.O_.length&&t.o_();break}n=r.batchId,function(e,t){e.O_.push(t);let n=rN(e);n.r_()&&n.V_&&n.m_(t.mutations)}(e,r)}catch(t){await rm(e,t)}ry(e)&&rv(e)}function ry(e){return ru(e)&&!rN(e).n_()&&e.O_.length>0}function rv(e){rN(e).start()}async function rw(e){rN(e).p_()}async function r_(e){let t=rN(e);for(let n of e.O_)t.m_(n.mutations)}async function rE(e,t,n){let r=e.O_.shift(),i=tz.from(r,t,n);await rg(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rp(e)}async function rT(e,t){t&&rN(e).V_&&await async function(e,t){var n;if(function(e){switch(e){default:return I();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}(n=t.code)&&n!==C.ABORTED){let n=e.O_.shift();rN(e).s_(),await rg(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rp(e)}}(e,t),ry(e)&&rv(e)}async function rI(e,t){e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");let n=ru(e);e.L_.add(3),await rn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await rt(e)}async function rC(e,t){t?(e.L_.delete(2),await rt(e)):t||(e.L_.add(2),await rn(e),e.q_.set("Unknown"))}function rS(e){var t,n,r;return e.K_||(e.K_=(t=e.datastore,n=e.asyncQueue,r={Eo:rh.bind(null,e),Ro:rc.bind(null,e),mo:rd.bind(null,e),d_:rf.bind(null,e)},t.w_(),new n8(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.B_.push(async t=>{t?(e.K_.s_(),rl(e)?ro(e):e.q_.set("Unknown")):(await e.K_.stop(),e.Q_=void 0)})),e.K_}function rN(e){var t,n,r;return e.U_||(e.U_=(t=e.datastore,n=e.asyncQueue,r={Eo:()=>Promise.resolve(),Ro:rw.bind(null,e),mo:rT.bind(null,e),f_:r_.bind(null,e),g_:rE.bind(null,e)},t.w_(),new n5(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.B_.push(async t=>{t?(e.U_.s_(),await rp(e)):(await e.U_.stop(),e.O_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new N,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new rA(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rk(e,t){if(_("AsyncQueue",`${t}: ${e}`),Y(e))return new S(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=tl(),this.sortedSet=new en(this.comparator)}static emptySet(e){return new rb(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rb)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.W_=new en(K.comparator)}track(e){let t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):I():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rR{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rR(e,t,rb.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&te(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rL{constructor(){this.queries=rV(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=rV(),n.forEach((e,n)=>{for(let e of n.j_)e.onError(t)})}(this,new S(C.ABORTED,"Firestore shutting down"))}}function rV(){return new ts(e=>tt(e),te)}async function rM(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.H_()&&t.J_()&&(n=2):(i=new rx,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await e.onListen(r,!0);break;case 1:i.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=rk(n,`Initialization of query '${tn(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&rU(e)}async function rO(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.j_.indexOf(t);e>=0&&(i.j_.splice(e,1),0===i.j_.length?r=t.J_()?0:1:!i.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rP(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.j_)e.X_(r)&&(n=!0);i.z_=r}}n&&rU(e)}function rF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.j_)e.onError(n);e.queries.delete(t)}function rU(e){e.Y_.forEach(e=>{e.next()})}(a=s||(s={})).ea="default",a.Cache="cache";class rq{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rR(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){return!(e.fromCache&&this.J_())||(!this.options._a||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=rR.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e){this.key=e}}class rz{constructor(e){this.key=e}}class r${constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=tf(),this.mutatedKeys=tf(),this.Aa=ti(e),this.Ra=new rb(this.Aa)}get Va(){return this.Ta}ma(e,t){let n=t?t.fa:new rD,r=t?t.Ra:this.Ra,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tr(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ga(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Aa(h,o)>0||l&&0>this.Aa(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let s=e.fa.G_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return n(e)-n(t)})(e.type,t.type)||this.Aa(e.doc,t.doc)),this.pa(n),r=null!=r&&r;let a=t&&!r?this.ya():[],o=0===this.da.size&&this.current&&!r?1:0,l=o!==this.Ea;return(this.Ea=o,0!==s.length||l)?{snapshot:new rR(this.query,e.Ra,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rD,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=tf(),this.Ra.forEach(e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))});let t=[];return e.forEach(e=>{this.da.has(e)||t.push(new rz(e))}),this.da.forEach(n=>{e.has(n)||t.push(new rB(n))}),t}ba(e){this.Ta=e.Ts,this.da=tf();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rR.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class rK{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rQ{constructor(e){this.key=e,this.va=!1}}class rG{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ts(e=>tt(e),te),this.Ma=new Map,this.xa=new Set,this.Oa=new en(K.comparator),this.Na=new Map,this.La=new nb,this.Ba={},this.ka=new Map,this.qa=nT.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function rj(e,t,n=!0){let r;let i=is(e),s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await rH(i,t,n,!0),r}async function rW(e,t){let n=is(e);await rH(n,t,!0,!1)}async function rH(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=e6(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Ur.getTargetData(e,s).next(n=>n?(t=n,H.resolve(t)):i.Ur.allocateTargetId(e).next(n=>(t=new np(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Ur.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.os.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.os=i.os.insert(e.targetId,e),i._s.set(s,e.targetId)),e})),l=o.targetId,u=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(a=await rY(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rr(e.remoteStore,o),a}async function rY(e,t,n,r,i){e.Ka=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await nQ(e.localStore,t.query,!1).then(({documents:e})=>t.view.ma(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return r7(e,t.targetId,o.wa),o.snapshot})(e,t,n,r);let s=await nQ(e.localStore,t,!0),a=new r$(t,s.Ts),o=a.ma(s.documents),l=tJ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);r7(e,n,u.wa);let h=new rK(t,n,a);return e.Fa.set(t,h),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function rX(e,t,n){let r=e.Fa.get(t),i=e.Ma.get(r.targetId);if(i.length>1)return e.Ma.set(r.targetId,i.filter(e=>!te(e,t))),void e.Fa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await nK(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&ri(e.remoteStore,r.targetId),r5(e,r.targetId)}).catch(W)):(r5(e,r.targetId),await nK(e.localStore,r.targetId,!0))}async function rJ(e,t){let n=e.Fa.get(t),r=e.Ma.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ri(e.remoteStore,n.targetId))}async function rZ(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=r3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r4.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=F.now(),s=t.reduce((e,t)=>e.add(t.key),tf());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ta,l=tf();return e.cs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tv(r.transform,e||null);null!=i&&(null===n&&(n=eM.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tM(e.key,t,function e(t){let n=[];return ee(t.fields,(t,r)=>{let i=new $([t]);if(eR(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eo(n)}(t.value.mapValue),tk.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tu(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Ba[i.currentUser.toKey()])||(e=new en(O)),e=e.insert(r,n),i.Ba[i.currentUser.toKey()]=e,await it(i,s.changes),await rp(i.remoteStore)}catch(t){let e=rk(t,"Failed to persist write");n.reject(e)}}async function r0(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Ur.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Ur.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eu.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Ur.updateTargetData(i,h))});let h=ta,c=tf();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=tf(),o=tf(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=ta;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(U.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):w("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Ps:t,Is:o}})).next(e=>{h=e.Ps,c=e.Is})),!n.isEqual(U.min())){let t=e.Ur.getLastRemoteSnapshotVersion(i).next(t=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return H.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.os=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Na.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||I(),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?r.va||I():t.removedDocuments.size>0&&(r.va||I(),r.va=!1))}),await it(e,n,t)}catch(e){await W(e)}}function r1(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Fa.forEach((e,n)=>{let r=n.view.Z_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.j_)e.Z_(t)&&(n=!0)}),n&&rU(r),i.length&&e.Ca.d_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function r2(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Na.get(t),i=r&&r.key;if(i){let n=new en(K.comparator);n=n.insert(i,eO.newNoDocument(i,U.min()));let r=tf().add(i),s=new tX(U.min(),new Map,new en(O),n,r);await r0(e,s),e.Oa=e.Oa.remove(i),e.Na.delete(t),ie(e)}else await nK(e.localStore,t,!1).then(()=>r5(e,t,n)).catch(W)}async function r3(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=H.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||I(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tf();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});r8(e,r,null),r9(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await it(e,i)}catch(e){await W(e)}}async function r4(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||I(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});r8(e,t,n),r9(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await it(e,i)}catch(e){await W(e)}}function r9(e,t){(e.ka.get(t)||[]).forEach(e=>{e.resolve()}),e.ka.delete(t)}function r8(e,t,n){let r=e.Ba[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Ba[e.currentUser.toKey()]=r}}function r5(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Ma.get(t)))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(t=>{e.La.containsKey(t)||r6(e,t)})}function r6(e,t){e.xa.delete(t.path.canonicalString());let n=e.Oa.get(t);null!==n&&(ri(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),ie(e))}function r7(e,t,n){for(let r of n)r instanceof rB?(e.La.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(w("SyncEngine","New document in limbo: "+n),e.xa.add(r),ie(e))}(e,r)):r instanceof rz?(w("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||r6(e,r.key)):I()}function ie(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){let t=e.xa.values().next().value;e.xa.delete(t);let n=new K(B.fromString(t)),r=e.qa.next();e.Na.set(r,new rQ(n)),e.Oa=e.Oa.insert(n,r),rr(e.remoteStore,new np(e6(new e9(n.path)),r,"TargetPurposeLimboResolution",X.oe))}}async function it(e,t,n){let r=[],i=[],s=[];e.Fa.isEmpty()||(e.Fa.forEach((a,o)=>{s.push(e.Ka(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=nF.Wi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ca.d_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>H.forEach(t,t=>H.forEach(t.$i,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>H.forEach(t.Ui,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!Y(e))throw e;w("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.os.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.os=e.os.insert(t,i)}}}(e.localStore,i))}async function ir(e,t){var n;if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let r=await nz(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.ka.forEach(e=>{e.forEach(e=>{e.reject(new S(C.CANCELLED,n))})}),e.ka.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await it(e,r.hs)}}function ii(e,t){let n=e.Na.get(t);if(n&&n.va)return tf().add(n.key);{let n=tf(),r=e.Ma.get(t);if(!r)return n;for(let t of r){let r=e.Fa.get(t);n=n.unionWith(r.view.Va)}return n}}function is(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=r0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ii.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r2.bind(null,e),e.Ca.d_=rP.bind(null,e.eventManager),e.Ca.$a=rF.bind(null,e.eventManager),e}class ia{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=n3(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new nB(t,new nq,e.initialUser,this.serializer)}createPersistence(e){return new nM(nP.Zr,this.serializer)}createSharedClientState(e){return new nj}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>r1(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ir.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rL}createDatastore(e){let t=n3(e.databaseInfo.databaseId),n=new n1(e.databaseInfo);return new n6(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new re(t,this.datastore,e.asyncQueue,e=>r1(this.syncEngine,e,0),nH.D()?new nH:new nW)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rG(e,t,n,r,i,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){w("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await rn(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=g.UNAUTHENTICATED,this.clientId=M.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{w("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(w("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new N;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rk(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ih(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nz(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ic(e,t){e.asyncQueue.verifyOperationInProgress();let n=await id(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rI(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rI(t.remoteStore,n)),e._onlineComponents=t}async function id(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await ih(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await ih(e,new ia)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await ih(e,new ia)}return e._offlineComponents}async function im(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await ic(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await ic(e,new io))),e._onlineComponents}async function ig(e){let t=await im(e),n=t.eventManager;return n.onListen=rj.bind(null,t.syncEngine),n.onUnlisten=rX.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=rW.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rJ.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(e,t,n){if(!n)throw new S(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iw(e){if(!K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function i_(e){if(K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iE(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":I()}function iT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=iE(e);throw new S(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new S(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ip(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iC{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iI(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iy.get(e);t&&(w("ComponentProvider","Removing Datastore"),iy.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iS(this.firestore,e,this._query)}}class iN{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iA(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iN(this.firestore,e,this._key)}}class iA extends iS{constructor(e,t,n){super(e,t,new e9(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iN(this.firestore,null,new K(e))}withConverter(e){return new iA(this.firestore,e,this._path)}}function ik(e,t,...n){if(e=(0,h.m9)(e),iv("collection","path",t),e instanceof iC){let r=B.fromString(t,...n);return i_(r),new iA(e,null,r)}{if(!(e instanceof iN||e instanceof iA))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return i_(r),new iA(e.firestore,null,r)}}function ib(e,t,...n){if(e=(0,h.m9)(e),1==arguments.length&&(t=M.newId()),iv("doc","path",t),e instanceof iC){let r=B.fromString(t,...n);return iw(r),new iN(e,null,new K(r))}{if(!(e instanceof iN||e instanceof iA))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return iw(r),new iN(e.firestore,e instanceof iA?e.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new n4(this,"async_queue_retry"),this.Eu=()=>{let e=n2();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};let e=n2();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;let t=n2();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});let t=new N;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Y(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){let t=this.au.then(()=>(this.Pu=!0,e().catch(e=>{let t;throw this.hu=e,this.Pu=!1,_("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Pu=!1,e))));return this.au=t,t}enqueueAfterDelay(e,t,n){this.du(),this.Tu.indexOf(e)>-1&&(t=0);let r=rA.createAndSchedule(this,e,t,n,e=>this.Vu(e));return this.lu.push(r),r}du(){this.hu&&I()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(let t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{for(let t of(this.lu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.lu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){let t=this.lu.indexOf(e);this.lu.splice(t,1)}}function iR(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class ix extends iC{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new iD,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iM(this),this._firestoreClient.terminate()}}function iL(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=iT(e,iC))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=g.MOCK_USER;else{t=(0,h.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new g(s)}e._authCredentials=new b(new A(t,n))}}(r,...e)}return r}function iV(e){return e._firestoreClient||iM(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iM(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ey(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ip(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new iu(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new iO(eu.fromBase64String(e))}catch(e){throw new S(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iO(eu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iB=/^__.*__$/;class iz{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tM(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function i$(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class iK{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new iK(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Du:!1});return r.vu(e),r}Cu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Du:!1});return r.yu(),r}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return iZ(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(0===e.length)throw this.Mu("Document fields must not be empty");if(i$(this.wu)&&iB.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class iQ{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n3(e)}Nu(e,t,n,r=!1){return new iK({wu:e,methodName:t,Ou:n,path:$.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}class iG extends iF{_toFieldTransform(e){if(2!==e.wu)throw 1===e.wu?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iG}}function ij(e,t){if(iW(e=(0,h.m9)(e)))return iH("Unsupported field value:",t,e),function(e,t){let n={};return et(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ee(e,(e,r)=>{let i=ij(r,t.bu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}(e,t);if(e instanceof iF)return function(e,t){if(!i$(t.wu))throw t.Mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Mu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&4!==t.wu)throw t.Mu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ij(i,t.Fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!J(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tp(r):tg(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=F.fromDate(e);return{timestampValue:nt(t.serializer,n)}}if(e instanceof F){let n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nt(t.serializer,n)}}if(e instanceof iU)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iO)return{bytesValue:nn(t.serializer,e._byteString)};if(e instanceof iN){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ni(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof iq)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Mu("VectorValues must only contain numeric values.");return tg(t.serializer,e)})}}}}};throw t.Mu(`Unsupported field value: ${iE(e)}`)}(e,t)}function iW(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof iU||e instanceof iO||e instanceof iN||e instanceof iF||e instanceof iq)}function iH(e,t,n){if(!iW(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=iE(n);throw"an object"===r?t.Mu(e+" a custom object"):t.Mu(e+" "+r)}}function iY(e,t,n){if((t=(0,h.m9)(t))instanceof iP)return t._internalPath;if("string"==typeof t)return iJ(e,t);throw iZ("Field path arguments must be of type string or ",e,!1,void 0,n)}let iX=RegExp("[~\\*/\\[\\]]");function iJ(e,t,n){if(t.search(iX)>=0)throw iZ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new iP(...t.split("."))._internalPath}catch(r){throw iZ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function iZ(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new S(C.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new iN(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new i1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(i2("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class i1 extends i0{data(){return super.data()}}function i2(e,t){return"string"==typeof t?iJ(e,t):t instanceof iP?t._internalPath:t._delegate._internalPath}class i3{convertValue(e,t="none"){switch(e_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ed(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ef(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw I()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ee(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new iq(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>ed(e.doubleValue)))}convertGeoPoint(e){return new iU(ed(e.latitude),ed(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eg(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ep(e));default:return null}}convertTimestamp(e){let t=ec(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=B.fromString(e);ng(n)||I();let r=new ev(n.get(1),n.get(3)),i=new K(n.popFirst(5));return r.isEqual(t)||_(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i9 extends i0{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new i8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(i2("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class i8 extends i9{data(e={}){return super.data(e)}}class i5{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new i4(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new i8(this._firestore,this._userDataWriter,n.key,n,new i4(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new i8(e._firestore,e._userDataWriter,n.doc.key,n.doc,new i4(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new i8(e._firestore,e._userDataWriter,t.doc.key,t.doc,new i4(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class i6 extends i3{constructor(e){super(),this.firestore=e}convertBytes(e){return new iO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iN(this.firestore,null,t)}}function i7(e,t,n,...r){var i;e=iT(e,iN);let s=iT(e.firestore,ix),a=function(e){let t=e._freezeSettings(),n=n3(e._databaseId);return new iQ(e._databaseId,!!t.ignoreUndefinedProperties,n)}(s);return i=[("string"==typeof(t=(0,h.m9)(t))||t instanceof iP?function(e,t,n,r,i,s){let a=e.Nu(1,t,n),o=[iY(t,r,n)],l=[i];if(s.length%2!=0)throw new S(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(iY(t,s[e])),l.push(s[e+1]);let u=[],c=eM.empty();for(let e=o.length-1;e>=0;--e)if(!function(e,t){return e.some(e=>e.isEqual(t))}(u,o[e])){let t=o[e],n=l[e];n=(0,h.m9)(n);let r=a.Cu(t);if(n instanceof iG)u.push(t);else{let e=ij(n,r);null!=e&&(u.push(t),c.set(t,e))}}return new iz(c,new eo(u),a.fieldTransforms)}(a,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.Nu(1,t,n);iH("Data must be an object, but it was:",i,r);let s=[],a=eM.empty();return ee(r,(e,r)=>{let o=iJ(t,e,n);r=(0,h.m9)(r);let l=i.Cu(o);if(r instanceof iG)s.push(o);else{let e=ij(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new iz(a,new eo(s),i.fieldTransforms)}(a,"updateDoc",e._key,t)).toMutation(e._key,tk.exists(!0))],function(e,t){let n=new N;return e.asyncQueue.enqueueAndForget(async()=>rZ(await im(e).then(e=>e.syncEngine),t,n)),n.promise}(iV(s),i)}function se(e,...t){var n,r,i;let s,a,o;e=(0,h.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||iR(t[u])||(l=t[u],u++);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(iR(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof iN)a=iT(e.firestore,ix),o=new e9(e._key.path),s={next:n=>{t[u]&&t[u](function(e,t,n){let r=n.docs.get(t._key),i=new i6(e);return new i9(e,i,t._key,r,new i4(n.hasPendingWrites,n.fromCache),t.converter)}(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=iT(e,iS);a=iT(n.firestore,ix),o=n._query;let r=new i6(a);s={next:e=>{t[u]&&t[u](new i5(a,r,n,e))},error:t[u+1],complete:t[u+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){let i=new il(r),s=new rq(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>rM(await ig(e),s)),()=>{i.za(),e.asyncQueue.enqueueAndForget(async()=>rO(await ig(e),s))}}(iV(a),o,c,s)}new WeakMap,function(e=!0){p=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new ix(new D(t.getProvider("auth-internal")),new V(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ev(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,"4.7.0",void 0),(0,o.KN)(m,"4.7.0","esm2017")}()}}]);