(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{749:function(e,a,t){"use strict";t.r(a);var s=t(1),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-3-must-an-abci-app-have-an-rpc-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-3-must-an-abci-app-have-an-rpc-server"}},[e._v("#")]),e._v(" ADR 3: Must an ABCI-app have an RPC server?")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("ABCI-server could expose its own RPC-server and act as a proxy to Tendermint.")]),e._v(" "),t("p",[e._v("The idea was for the Tendermint RPC to just be a transparent proxy to the app.\nClients need to talk to Tendermint for proofs, unless we burden all app devs\nwith exposing Tendermint proof stuff. Also seems less complex to lock down one\nserver than two, but granted it makes querying a bit more kludgy since it needs\nto be passed as a "),t("code",[e._v("Query")]),e._v(". Also, "),t("strong",[e._v("having a very standard rpc interface means\nthe light-client can work with all apps and handle proofs")]),e._v(". The only\napp-specific logic is decoding the binary data to a more readable form (eg.\njson). This is a huge advantage for code-reuse and standardization.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("We dont expose an RPC server on any of our ABCI-apps.")]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("accepted")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Unified interface for all apps")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Query")]),e._v(" interface")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])])}),[],!1,null,null,null);a.default=r.exports}}]);