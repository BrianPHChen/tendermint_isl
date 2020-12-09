(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{757:function(e,n,t){"use strict";t.r(n);var s=t(1),o=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-008-socketpv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-008-socketpv"}},[e._v("#")]),e._v(" ADR 008: SocketPV")]),e._v(" "),t("p",[e._v("Tendermint node's should support only two in-process PrivValidator\nimplementations:")]),e._v(" "),t("ul",[t("li",[e._v('FilePV uses an unencrypted private key in a "priv_validator.json" file - no\nconfiguration required (just '),t("code",[e._v("tendermint init")]),e._v(").")]),e._v(" "),t("li",[e._v("TCPVal and IPCVal use TCP and Unix sockets respectively to send signing requests\nto another process - the user is responsible for starting that process themselves.")])]),e._v(" "),t("p",[e._v("Both TCPVal and IPCVal addresses can be provided via flags at the command line\nor in the configuration file; TCPVal addresses must be of the form\n"),t("code",[e._v("tcp://<ip_address>:<port>")]),e._v(" and IPCVal addresses "),t("code",[e._v("unix:///path/to/file.sock")]),e._v(" -\ndoing so will cause Tendermint to ignore any private validator files.")]),e._v(" "),t("p",[e._v("TCPVal will listen on the given address for incoming connections from an external\nprivate validator process. It will halt any operation until at least one external\nprocess successfully connected.")]),e._v(" "),t("p",[e._v("The external priv_validator process will dial the address to connect to\nTendermint, and then Tendermint will send requests on the ensuing connection to\nsign votes and proposals. Thus the external process initiates the connection,\nbut the Tendermint process makes all requests. In a later stage we're going to\nsupport multiple validators for fault tolerance. To prevent double signing they\nneed to be synced, which is deferred to an external solution (see #1185).")]),e._v(" "),t("p",[e._v("Conversely, IPCVal will make an outbound connection to an existing socket opened\nby the external validator process.")]),e._v(" "),t("p",[e._v("In addition, Tendermint will provide implementations that can be run in that\nexternal process. These include:")]),e._v(" "),t("ul",[t("li",[e._v("FilePV will encrypt the private key, and the user must enter password to\ndecrypt key when process is started.")]),e._v(" "),t("li",[e._v("LedgerPV uses a Ledger Nano S to handle all signing.")])])])}),[],!1,null,null,null);n.default=o.exports}}]);