(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{743:function(t,r,e){"use strict";e.r(r);var i=e(1),a=Object(i.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"architecture-decision-records-adr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture-decision-records-adr"}},[t._v("#")]),t._v(" Architecture Decision Records (ADR)")]),t._v(" "),e("p",[t._v("This is a location to record all high-level architecture decisions in the tendermint project.")]),t._v(" "),e("p",[t._v("You can read more about the ADR concept in this "),e("a",{attrs:{href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog post"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("An ADR should provide:")]),t._v(" "),e("ul",[e("li",[t._v("Context on the relevant goals and the current state")]),t._v(" "),e("li",[t._v("Proposed changes to achieve the goals")]),t._v(" "),e("li",[t._v("Summary of pros and cons")]),t._v(" "),e("li",[t._v("References")]),t._v(" "),e("li",[t._v("Changelog")])]),t._v(" "),e("p",[t._v("Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit stands today.")]),t._v(" "),e("p",[t._v("If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match.")]),t._v(" "),e("p",[t._v("Note the context/background should be written in the present tense.")]),t._v(" "),e("h3",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-001-logging.html"}},[t._v("ADR-001-Logging")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-002-event-subscription.html"}},[t._v("ADR-002-Event-Subscription")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-003-abci-app-rpc.html"}},[t._v("ADR-003-ABCI-APP-RPC")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-004-historical-validators.html"}},[t._v("ADR-004-Historical-Validators")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-005-consensus-params.html"}},[t._v("ADR-005-Consensus-Params")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-006-trust-metric.html"}},[t._v("ADR-006-Trust-Metric")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-007-trust-metric-usage.html"}},[t._v("ADR-007-Trust-Metric-Usage")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-008-priv-validator.html"}},[t._v("ADR-008-Priv-Validator")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-009-ABCI-design.html"}},[t._v("ADR-009-ABCI-Design")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-010-crypto-changes.html"}},[t._v("ADR-010-Crypto-Changes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-011-monitoring.html"}},[t._v("ADR-011-Monitoring")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-012-peer-transport.html"}},[t._v("ADR-012-Peer-Transport")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-013-symmetric-crypto.html"}},[t._v("ADR-013-Symmetric-Crypto")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-014-secp-malleability.html"}},[t._v("ADR-014-Secp-Malleability")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-015-crypto-encoding.html"}},[t._v("ADR-015-Crypto-Encoding")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-016-protocol-versions.html"}},[t._v("ADR-016-Protocol-Versions")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-017-chain-versions.html"}},[t._v("ADR-017-Chain-Versions")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-018-ABCI-Validators.html"}},[t._v("ADR-018-ABCI-Validators")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-019-multisigs.html"}},[t._v("ADR-019-Multisigs")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-020-block-size.html"}},[t._v("ADR-020-Block-Size")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-021-abci-events.html"}},[t._v("ADR-021-ABCI-Events")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-022-abci-errors.html"}},[t._v("ADR-022-ABCI-Errors")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-023-ABCI-propose-tx.html"}},[t._v("ADR-023-ABCI-Propose-tx")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-024-sign-bytes.html"}},[t._v("ADR-024-Sign-Bytes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-025-commit.html"}},[t._v("ADR-025-Commit")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-026-general-merkle-proof.html"}},[t._v("ADR-026-General-Merkle-Proof")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-028-libp2p.html"}},[t._v("ADR-028-libp2p")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-029-check-tx-consensus.html"}},[t._v("ADR-029-Check-Tx-Consensus")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-030-consensus-refactor.html"}},[t._v("ADR-030-Consensus-Refactor")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-031-changelog.html"}},[t._v("ADR-030-Changelog-structure")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-033-pubsub.html"}},[t._v("ADR-033-Pubsub")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-034-priv-validator-file-structure.html"}},[t._v("ADR-034-Priv-Validator-File-Structure")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-035-documentation.html"}},[t._v("ADR-035-Documentation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-037-deliver-block.html"}},[t._v("ADR-037-Deliver-Block")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-038-non-zero-start-height.html"}},[t._v("ADR-038-Non-Zero-Start-Height")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-039-peer-behaviour.html"}},[t._v("ADR-039-Peer-Behaviour")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-041-proposer-selection-via-abci.html"}},[t._v("ADR-041-Proposer-Selection-via-ABCI")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-043-blockchain-riri-org.html"}},[t._v("ADR-043-Blockchain-RiRi-Org")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-044-lite-client-with-weak-subjectivity.html"}},[t._v("ADR-044-Lite-Client-With-Weak-Subjectivity")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-045-abci-evidence.html"}},[t._v("ADR-045-ABCI-Evidence")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-046-light-client-implementation.html"}},[t._v("ADR-046-Light-Client-Implementation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-047-handling-evidence-from-light-client.html"}},[t._v("ADR-047-Handling-Evidence-From-Light-Client")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-051-double-signing-risk-reduction.html"}},[t._v("ADR-051-Double-Signing-Risk-Reduction")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-052-tendermint-mode.html"}},[t._v("ADR-052-Tendermint-Mode")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-053-state-sync-prototype.html"}},[t._v("ADR-053-State-Sync-Prototype")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-054-crypto-encoding-2.html"}},[t._v("ADR-054-Crypto-Encoding-2")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-055-protobuf-design.html"}},[t._v("ADR-055-Protobuf-Design")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"./adr-056-light-client-amnesia-attacks"}},[t._v("ADR-056-Light-Client-Amnesia-Attacks")])]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-057-RPC.html"}},[t._v("ADR-057-RPC")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-058-event-hashing.html"}},[t._v("ADR-058-Event-Hashing")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-059-evidence-composition-and-lifecycle.html"}},[t._v("ADR-059-Evidence-Composition-and-Lifecycle")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-060-go-api-stability.html"}},[t._v("ADR-060-Go-API-Stability")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-061-p2p-refactor-scope.html"}},[t._v("ADR-061-P2P-Refactor-Scope")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/architecture/adr-062-p2p-architecture.html"}},[t._v("ADR-062-P2P-Architecture")])],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);