(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{807:function(e,a,t){"use strict";t.r(a);var c=t(1),r=Object(c.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-039-peer-behaviour-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-039-peer-behaviour-interface"}},[e._v("#")]),e._v(" ADR 039: Peer Behaviour Interface")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("07-03-2019: Initial draft")]),e._v(" "),t("li",[e._v("14-03-2019: Updates from feedback")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("The responsibility for signaling and acting upon peer behaviour lacks a single\nowning component and is heavily coupled with the network stack"),t("a",{attrs:{href:"#references"}},[t("sup",[e._v("1")])]),e._v(". Reactors\nmaintain a reference to the "),t("code",[e._v("p2p.Switch")]),e._v(" which they use to call\n"),t("code",[e._v("switch.StopPeerForError(...)")]),e._v(" when a peer misbehaves and\n"),t("code",[e._v("switch.MarkAsGood(...)")]),e._v(" when a peer contributes in some meaningful way.\nWhile the switch handles "),t("code",[e._v("StopPeerForError")]),e._v(" internally, the "),t("code",[e._v("MarkAsGood")]),e._v("\nmethod delegates to another component, "),t("code",[e._v("p2p.AddrBook")]),e._v(". This scheme of delegation\nacross Switch obscures the responsibility for handling peer behaviour\nand ties up the reactors in a larger dependency graph when testing.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("Introduce a "),t("code",[e._v("PeerBehaviour")]),e._v(" interface and concrete implementations which\nprovide methods for reactors to signal peer behaviour without direct\ncoupling "),t("code",[e._v("p2p.Switch")]),e._v(".  Introduce a ErrorBehaviourPeer to provide\nconcrete reasons for stopping peers. Introduce GoodBehaviourPeer to provide\nconcrete ways in which a peer contributes.")]),e._v(" "),t("h3",{attrs:{id:"implementation-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-changes"}},[e._v("#")]),e._v(" Implementation Changes")]),e._v(" "),t("p",[e._v("PeerBehaviour then becomes an interface for signaling peer errors as well\nas for marking peers as "),t("code",[e._v("good")]),e._v(".")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQZWVyQmVoYXZpb3VyIGludGVyZmFjZSB7CiAgICBCZWhhdmVkKHBlZXIgUGVlciwgcmVhc29uIEdvb2RCZWhhdmlvdXJQZWVyKQogICAgRXJyb3JlZChwZWVyIFBlZXIsIHJlYXNvbiBFcnJvckJlaGF2aW91clBlZXIpCn0K"}}),e._v(" "),t("p",[e._v("Instead of signaling peers to stop with arbitrary reasons:\n"),t("code",[e._v("reason interface{}")])]),e._v(" "),t("p",[e._v("We introduce a concrete error type ErrorBehaviourPeer:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFcnJvckJlaGF2aW91clBlZXIgaW50Cgpjb25zdCAoCiAgICBFcnJvckJlaGF2aW91clVua25vd24gPSBpb3RhCiAgICBFcnJvckJlaGF2aW91ckJhZE1lc3NhZ2UKICAgIEVycm9yQmVoYXZpb3VyTWVzc2FnZU91dG9mT3JkZXIKICAgIC4uLgopCg=="}}),e._v(" "),t("p",[e._v("To provide additional information on the ways a peer contributed, we introduce\nthe GoodBehaviourPeer type.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHb29kQmVoYXZpb3VyUGVlciBpbnQKCmNvbnN0ICgKICAgIEdvb2RCZWhhdmlvdXJWb3RlID0gaW90YQogICAgR29vZEJlaGF2aW91ckJsb2NrUGFydAogICAgLi4uCikK"}}),e._v(" "),t("p",[e._v("As a first iteration we provide a concrete implementation which wraps\nthe switch:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTd2l0Y2hlZFBlZXJCZWhhdmlvdXIgc3RydWN0IHsKICAgIHN3ICpTd2l0Y2gKfQoKZnVuYyAoc3BiICpTd2l0Y2hlZFBlZXJCZWhhdmlvdXIpIEVycm9yZWQocGVlciBQZWVyLCByZWFzb24gRXJyb3JCZWhhdmlvdXJQZWVyKSB7CiAgICBzcGIuc3cuU3RvcFBlZXJGb3JFcnJvcihwZWVyLCByZWFzb24pCn0KCmZ1bmMgKHNwYiAqU3dpdGNoZWRQZWVyQmVoYXZpb3VyKSBCZWhhdmVkKHBlZXIgUGVlciwgcmVhc29uIEdvb2RCZWhhdmlvdXJQZWVyKSB7CiAgICBzcGIuc3cuTWFya1BlZXJBc0dvb2QocGVlcikKfQoKZnVuYyBOZXdTd2l0Y2hlZFBlZXJCZWhhdmlvdXIoc3cgKlN3aXRjaCkgKlN3aXRjaGVkUGVlckJlaGF2aW91ciB7CiAgICByZXR1cm4gJmFtcDtTd2l0Y2hlZFBlZXJCZWhhdmlvdXJ7CiAgICAgICAgc3c6IHN3LAogICAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("Reactors, which are often difficult to unit test"),t("a",{attrs:{href:"#references"}},[t("sup",[e._v("2")])]),e._v(" could use an implementation which exposes the signals produced by the reactor in\nmanufactured scenarios:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFcnJvckJlaGF2aW91cnMgbWFwW1BlZXJdW11FcnJvckJlaGF2aW91clBlZXIKdHlwZSBHb29kQmVoYXZpb3VycyBtYXBbUGVlcl1bXUdvb2RCZWhhdmlvdXJQZWVyCgp0eXBlIFN0b3JlUGVlckJlaGF2aW91ciBzdHJ1Y3QgewogICAgZWIgRXJyb3JCZWhhdmlvdXJzCiAgICBnYiBHb29kQmVoYXZpb3Vycwp9CgpmdW5jIE5ld1N0b3JlUGVlckJlaGF2aW91cigpICpTdG9yZVBlZXJCZWhhdmlvdXJ7CiAgICByZXR1cm4gJmFtcDtTdG9yZVBlZXJCZWhhdmlvdXJ7CiAgICAgICAgZWI6IG1ha2UoRXJyb3JCZWhhdmlvdXJzKSwKICAgICAgICBnYjogbWFrZShHb29kQmVoYXZpb3VycyksCiAgICB9Cn0KCmZ1bmMgKHNwYiBTdG9yZVBlZXJCZWhhdmlvdXIpIEVycm9yZWQocGVlciBQZWVyLCByZWFzb24gRXJyb3JCZWhhdmlvdXJQZWVyKSB7CiAgICBpZiBfLCBvayA6PSBzcGIuZWJbcGVlcl07ICFvayB7CiAgICAgICAgc3BiLmViW3BlZXJdID0gW11FcnJvckJlaGF2aW91cnN7cmVhc29ufQogICAgfSBlbHNlIHsKICAgICAgICBzcGIuZWJbcGVlcl0gPSBhcHBlbmQoc3BiLmViW3BlZXJdLCByZWFzb24pCiAgICB9Cn0KCmZ1bmMgKG1wYiAqU3RvcmVQZWVyQmVoYXZpb3VyKSBHZXRFcnJvcmVkKCkgRXJyb3JCZWhhdmlvdXJzIHsKICAgIHJldHVybiBtcGIuZWIKfQoKCmZ1bmMgKHNwYiBTdG9yZVBlZXJCZWhhdmlvdXIpIEJlaGF2ZWQocGVlciBQZWVyLCByZWFzb24gR29vZEJlaGF2aW91clBlZXIpIHsKICAgIGlmIF8sIG9rIDo9IHNwYi5nYltwZWVyXTsgIW9rIHsKICAgICAgICBzcGIuZ2JbcGVlcl0gPSBbXUdvb2RCZWhhdmlvdXJQZWVye3JlYXNvbn0KICAgIH0gZWxzZSB7CiAgICAgICAgc3BiLmdiW3BlZXJdID0gYXBwZW5kKHNwYi5nYltwZWVyXSwgcmVhc29uKQogICAgfQp9CgpmdW5jIChzcGIgKlN0b3JlUGVlckJlaGF2aW91cikgR2V0QmVoYXZlZCgpIEdvb2RCZWhhdmlvdXJzIHsKICAgIHJldHVybiBzcGIuZ2IKfQo="}}),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Accepted")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("* De-couple signaling from acting upon peer behaviour.\n* Reduce the coupling of reactors and the Switch and the network\n  stack\n* The responsibility of managing peer behaviour can be migrated to\n  a single component instead of split between the switch and the\n  address book.\n")])])]),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("* The first iteration will simply wrap the Switch and introduce a\n  level of indirection.\n")])])]),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ol",[t("li",[e._v("Issue "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2067"),t("OutboundLink")],1),e._v(": P2P Refactor")]),e._v(" "),t("li",[e._v("PR: "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3506",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3506"),t("OutboundLink")],1),e._v(": ADR 036: Blockchain Reactor Refactor")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);