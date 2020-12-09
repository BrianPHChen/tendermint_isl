(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{781:function(e,t,n){"use strict";n.r(t);var o=n(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-023-abci-codespaces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-023-abci-codespaces"}},[e._v("#")]),e._v(" ADR 023: ABCI Codespaces")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("2018-09-01")]),e._v(" Initial version")])]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("ABCI errors should provide an abstraction between application details\nand the client interface responsible for formatting & displaying errors to the user.")]),e._v(" "),n("p",[e._v("Currently, this abstraction consists of a single integer (the "),n("code",[e._v("code")]),e._v("), where any\n"),n("code",[e._v("code > 0")]),e._v(" is considered an error (ie. invalid transaction) and all type\ninformation about the error is contained in the code. This integer is\nexpected to be decoded by the client into a known error string, where any\nmore specific data is contained in the "),n("code",[e._v("data")]),e._v(".")]),e._v(" "),n("p",[e._v("In a "),n("a",{attrs:{href:"https://github.com/tendermint/abci/issues/165#issuecomment-353704015",target:"_blank",rel:"noopener noreferrer"}},[e._v("previous conversation"),n("OutboundLink")],1),e._v(",\nit was suggested that not all non-zero codes need to be errors, hence why it's called "),n("code",[e._v("code")]),e._v(" and not "),n("code",[e._v("error code")]),e._v(".\nIt is unclear exactly how the semantics of the "),n("code",[e._v("code")]),e._v(" field will evolve, though\nbetter lite-client proofs (like discussed for tags\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1007#issuecomment-413917763",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(")\nmay play a role.")]),e._v(" "),n("p",[e._v('Note that having all type information in a single integer\nprecludes an easy coordination method between "module implementers" and "client\nimplementers", especially for apps with many "modules". With an unbounded error domain (such as a string), module\nimplementers can pick a globally unique prefix & error code set, so client\nimplementers could easily implement support for "module A" regardless of which\nparticular blockchain network it was running in and which other modules were running with it. With\nonly error codes, globally unique codes are difficult/impossible, as the space\nis finite and collisions are likely without an easy way to coordinate.')]),e._v(" "),n("p",[e._v('For instance, while trying to build an ecosystem of modules that can be composed into a single\nABCI application, the Cosmos-SDK had to hack a higher level "codespace" into the\nsingle integer so that each module could have its own space to express its\nerrors.')]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("Include a "),n("code",[e._v("string code_space")]),e._v(" in all ABCI messages that have a "),n("code",[e._v("code")]),e._v(".\nThis allows applications to namespace the codes so they can experiment with\ntheir own code schemes.")]),e._v(" "),n("p",[e._v("It is the responsibility of applications to limit the size of the "),n("code",[e._v("code_space")]),e._v("\nstring.")]),e._v(" "),n("p",[e._v("How the codespace is hashed into block headers (ie. so it can be queried\nefficiently by lite clients) is left for a separate ADR.")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h2",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("No need for complex codespacing on a single integer")]),e._v(" "),n("li",[e._v("More expressive type system for errors")])]),e._v(" "),n("h2",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("Another field in the response needs to be accounted for")]),e._v(" "),n("li",[e._v("Some redundancy with "),n("code",[e._v("code")]),e._v(" field")]),e._v(" "),n("li",[e._v("May encourage more error/code type info to move to the "),n("code",[e._v("codespace")]),e._v(" string, which\ncould impact lite clients.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);