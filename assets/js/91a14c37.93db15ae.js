"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[6261],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=s(a),g=r,k=c["".concat(d,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(k,o(o({ref:e},p),{},{components:a})):n.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40787:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_lable:"Cross Chain Communication"},o=void 0,i={unversionedId:"build-on-opbnb/cross-chain",id:"build-on-opbnb/cross-chain",title:"cross-chain",description:"Cross Chain Communication",source:"@site/docs/build-on-opbnb/cross-chain.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/cross-chain",permalink:"/opbnb-docs/docs/build-on-opbnb/cross-chain",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/cross-chain.md",tags:[],version:"current",frontMatter:{sidebar_lable:"Cross Chain Communication"},sidebar:"guideSidebar",previous:{title:"Network Information",permalink:"/opbnb-docs/docs/build-on-opbnb/opbnb-testnet-info"},next:{title:"Network Faucets",permalink:"/opbnb-docs/docs/build-on-opbnb/network-faucet"}},d={},s=[{value:"Cross Chain Communication",id:"cross-chain-communication",level:2},{value:"opBNB Protocol addresses",id:"opbnb-protocol-addresses",level:3},{value:"L1 Contract Addresses",id:"l1-contract-addresses",level:3},{value:"L2 Contract Addresses",id:"l2-contract-addresses",level:3}],p={toc:s};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cross-chain-communication"},"Cross Chain Communication"),(0,r.kt)("h3",{id:"opbnb-protocol-addresses"},"opBNB Protocol addresses"),(0,r.kt)("p",null,"The opBNB protocol contracts are smart contracts that enable the execution of transactions on the opBNB network. The main contracts are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"batchInbox: This contract receives batches of transactions from the Sequencer on L1. "),(0,r.kt)("li",{parentName:"ul"},"batchSender: This contract is the authorized sender of batches to the batchInbox. It can be changed by the SystemConfig contract, which governs the parameters of the opBNB network."),(0,r.kt)("li",{parentName:"ul"},"outputProposer: This contract proposes outputs for the opBNB nodes to execute. It receives inputs from the batchInbox and other sources, and generates outputs that are consistent with the opBNB protocol rules.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Sender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x1fd6a75cc72f39147756a663f3ef1fc95ef89495"},"0x1Fd6A75CC72f39147756A663f3eF1fc95eF89495"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Inbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xff00000000000000000000000000000000005611"},"0xfF00000000000000000000000000000000005611"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Proposer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4ae49f1f57358c13a5732cb12e656cf8c8d986df"},"0x4aE49f1f57358c13A5732cb12e656Cf8C8D986DF"))))),(0,r.kt)("h3",{id:"l1-contract-addresses"},"L1 Contract Addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Proxy Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Important Variables"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"L1CrossDomainMessenger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ResolvedDelegateProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"High-level interface for sending messages to and receiving messages from Optimism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," PORTAL;"),"Address of the OptimismPortal.Change via upgrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"L1StandardBridge")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"L1ChugSplashProxy")),(0,r.kt)("td",{parentName:"tr",align:null},"The standard bridges are responsible for allowing cross domain ETH and ERC20 token transfers."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MESSENGER"),"Messenger contract on this domain.Change via upgrade 2.  ",(0,r.kt)("inlineCode",{parentName:"td"},"OTHER_BRIDGE"),"Corresponding bridge on the other domain.Change via upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/develop/packages/contracts-bedrock/contracts/L1/L1ERC721Bridge.sol"},"L1ERC721Bridge")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"The L1 ERC721 bridge is a contract which works together with the L2 ERC721 bridge to make it possible to transfer ERC721 tokens from Ethereum to Optimism."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MESSENGER"),"Messenger contract on this domain.Change via upgrade2.  ",(0,r.kt)("inlineCode",{parentName:"td"},"OTHER_BRIDGE"),"Corresponding bridge on the other domain.Change via upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"L2OutputOracle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"Stores commitments to the state of Optimism which can be used by contracts on L1 to access L2 state"),(0,r.kt)("td",{parentName:"tr",align:null},"1. ",(0,r.kt)("inlineCode",{parentName:"td"},"SUBMISSION_INTERVAL"),"The interval in L2 blocks at which checkpoints must be submittedChange via upgrade.2. ",(0,r.kt)("inlineCode",{parentName:"td"},"L2_BLOCK_TIME"),"The time between L2 blocks in seconds.Change via upgrade.3. ",(0,r.kt)("inlineCode",{parentName:"td"},"CHALLENGER"),"The address of the challengerChange via upgrade.4. ",(0,r.kt)("inlineCode",{parentName:"td"},"PROPOSER"),"The address of the proposerChange via upgrade.5. ",(0,r.kt)("inlineCode",{parentName:"td"},"FINALIZATION_PERIOD_SECONDS"),"Minimum time (in seconds) that must elapse before a withdrawal can be finalized.Change via upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AddressManager")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"AddressManager is a legacy contract that was used in the old version of the Optimism system to manage a registry of string names to addresses. We now use a more standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"_owner"),"openzepplin standard ownable contact.Change via function(transferOwnership(address newOwner)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptimismMintableERC20Factory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory is a factory contract that generates OptimismMintableERC20contracts on the network it's deployed to. Simplifies the deployment process for userswho may be less familiar with deploying smart contracts."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"BRIDGE"),"Address of the StandardBridge on this chain.Change via upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptimismPortal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"The OptimismPortal is a low-level contract responsible for passing messages between L1and L2."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"L2_ORACLE"),"Address of the L2OutputOracle contract.Change via upgrade.2.",(0,r.kt)("inlineCode",{parentName:"td"},"SYSTEM_CONFIG"),"Address of the SystemConfig contract.Change via upgrade.3.",(0,r.kt)("inlineCode",{parentName:"td"},"GUARDIAN"),"Address that has the ability to pause and unpause withdrawals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/deployment/PortalSender.sol"},"PortalSender")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The PortalSender is a simple intermediate contract that will transfer the balance of the L1StandardBridge to the OptimismPortal during the Bedrock migration."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"PORTAL"),"Address of the OptimismPortal contract.Change via upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ProxyAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Contract that can upgrade L1 contracts. It has backwards compatibility logic to workwith the various types of proxies that have been deployed by Optimism in the past."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"_owner"),"openzepplin standard ownable contact.Change via function(transferOwnership(address newOwner)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L1/SystemConfig.sol"},"SystemConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"The SystemConfig contract is used to manage configuration of an Optimism network. All configuration is stored on L1 and picked up by L2 as part of the derviation of the L2chain."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"_owner"),"openzepplin standard OwnableUpgradeable contact.Change via function(transferOwnership(address newOwner)2.",(0,r.kt)("inlineCode",{parentName:"td"},"overhead"),"Fixed L2 gas overhead. Used as part of the L2 fee calculation.Change via function3.",(0,r.kt)("inlineCode",{parentName:"td"},"scalar"),"Dynamic L2 gas overhead. Used as part of the L2 fee calculation.Change via function4.",(0,r.kt)("inlineCode",{parentName:"td"},"batcherHash"),"Identifier for the batcher.Change via function5.",(0,r.kt)("inlineCode",{parentName:"td"},"gasLimit"),"L2 block gas limit.6.",(0,r.kt)("inlineCode",{parentName:"td"},"*UNSAFE_BLOCK_SIGNER_SLOT*"),"Storage slot that the unsafe block signer is stored at.Can't change via function, but the unsafe_block_singer can be updated via function(setUnsafeBlockSigner)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/deployment/SystemDictator.sol"},"SystemDictator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"The SystemDictator is responsible for coordinating the deployment of a full Bedrocksystem. The SystemDictator is designed to support both fresh network deployments andupgrades to existing pre-Bedrock systems."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"_owner"),"openzepplin standard OwnableUpgradeable contact.Change via function(transferOwnership(address newOwner)")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(97901).Z,width:"1232",height:"610"})),(0,r.kt)("h3",{id:"l2-contract-addresses"},"L2 Contract Addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Important Variables"),(0,r.kt)("th",{parentName:"tr",align:null},"Introduced"),(0,r.kt)("th",{parentName:"tr",align:null},"Deprecated"),(0,r.kt)("th",{parentName:"tr",align:null},"Proxied"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/legacy/LegacyMessagePasser.sol"},"LegacyMessagePasser")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000000"),(0,r.kt)("td",{parentName:"tr",align:null},"The contract stores commitments to withdrawal transactions before the Bedrock upgrade."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L2ToL1MessagePasser.sol"},"L2ToL1MessagePasser")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000016"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"L2ToL1MessagePasser")," stores commitments to withdrawal transactions."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/legacy/DeployerWhitelist.sol"},"DeployerWhitelist")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000002"),(0,r.kt)("td",{parentName:"tr",align:null},"DeployerWhitelist is a legacy contract that was originally used to act as a whitelist of  addresses allowed to the Optimism network."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/legacy/LegacyERC20ETH.sol"},"LegacyERC20ETH")),(0,r.kt)("td",{parentName:"tr",align:null},"0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"),(0,r.kt)("td",{parentName:"tr",align:null},"LegacyERC20ETH is a legacy contract that held ETH balances before the Bedrock upgrade. All ETH balances held within this contract were migrated to the state trie as part ofthe Bedrock upgrade."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/vendor/WETH9.sol"},"WETH9")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000006"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WETH9")," is the standard implementation of Wrapped Ether on Optimism."),(0,r.kt)("td",{parentName:"tr",align:null},"string public ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),'     = "Wrapped Ether";string public ',(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),'   = "WETH";uint8  public ',(0,r.kt)("inlineCode",{parentName:"td"},"decimals")," = 18;"),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L2CrossDomainMessenger.sol"},"L2CrossDomainMessenger")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000007"),(0,r.kt)("td",{parentName:"tr",align:null},"The L2CrossDomainMessenger is a high-level interface for message passing between L1 and L2 on the L2 side."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L2StandardBridge.sol"},"L2StandardBridge")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000010"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"L2StandardBridge")," is a higher level API built on top of the ",(0,r.kt)("inlineCode",{parentName:"td"},"L2CrossDomainMessenger")," that gives a standard interface for sending ETH or ERC20 tokens across domains."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L2ERC721Bridge.sol"},"L2ERC721Bridge")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000014"),(0,r.kt)("td",{parentName:"tr",align:null},"The L2 ERC721 bridge is a contract which works together with the L1 ERC721 bridge to make it possible to transfer ERC721 tokens from Ethereum to Optimism."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/legacy/L1BlockNumber.sol"},"L1BlockNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000013"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"L1BlockNumber")," returns the last known L1 block number. This contract was introduced in the legacy system and should be backwards compatible by calling out to the ",(0,r.kt)("inlineCode",{parentName:"td"},"L1Block")," contract under the hood."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/GasPriceOracle.sol"},"GasPriceOracle")),(0,r.kt)("td",{parentName:"tr",align:null},"0x420000000000000000000000000000000000000F"),(0,r.kt)("td",{parentName:"tr",align:null},"After Bedrock, this contract now simply proxies the L1Block contractwhich has the values used to compute the L1 portion of the fee in its state."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L1Block.sol"},"L1Block")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000015"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ethereum-optimism/optimism/blob/develop/specs/glossary.md#l1-attributes-predeployed-contract"},"L1Block")," was introduced in Bedrock and is responsible for maintaining L1 context in L2. This allows for L1 state to be accessed in L2."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/universal/ProxyAdmin.sol"},"ProxyAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000018"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"ProxyAdmin")," is the owner of all of the proxy contracts set at the predeploys. It is itself behind a proxy. The owner of the ",(0,r.kt)("inlineCode",{parentName:"td"},"ProxyAdmin")," will have the ability to upgrade any of the other predeploy contracts."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"_owner"),"openzepplin standard ownable contact.Change via function(transferOwnership(address newOwner)"),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/SequencerFeeVault.sol"},"SequencerFeeVault")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000011"),(0,r.kt)("td",{parentName:"tr",align:null},"The SequencerFeeVault is the contract that holds any fees paid to the Sequencer during transaction processing and block production."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"MIN_WITHDRAWAL_AMOUNT"),"Minimum balance before a withdrawal can be triggered.Change via upgrade.2.",(0,r.kt)("inlineCode",{parentName:"td"},"RECIPIENT"),"Wallet that will receive the fees on L1.Change via upgrade."),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol"},"OptimismMintableERC20Factory")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000012"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"OptimismMintableERC20Factory")," is responsible for creating ERC20 contracts on L2 that can be used for depositing native L1 tokens into."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"BRIDGE"),"Address of the StandardBridge on this chain.Change via upgrade."),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/universal/OptimismMintableERC721Factory.sol"},"OptimismMintableERC721Factory")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000017"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"OptimismMintableERC721Factory")," is responsible for creating ERC721 contracts on L2 that can be used for depositing native L1 NFTs into."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"BRIDGE"),"Address of the StandardBridge on this chain.Change via upgrade.2.",(0,r.kt)("inlineCode",{parentName:"td"},"REMOTE_CHAIN_ID"),"Chain ID for the remote network.Change via upgrade."),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/BaseFeeVault.sol"},"BaseFeeVault")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000019"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"BaseFeeVault")," predeploy receives the basefees on L2. The basefee is not burnt on L2 like it is on L1. Once the contract has received a certain amount of fees, the ETH can be withdrawn to an immutable address on L1."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"MIN_WITHDRAWAL_AMOUNT"),"Minimum balance before a withdrawal can be triggered.Change via upgrade.2.",(0,r.kt)("inlineCode",{parentName:"td"},"RECIPIENT"),"Wallet that will receive the fees on L1.Change via upgrade."),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/L2/L1FeeVault.sol"},"L1FeeVault")),(0,r.kt)("td",{parentName:"tr",align:null},"0x420000000000000000000000000000000000001a"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"L1FeeVault")," predeploy receives the L1 portion of the transaction fees. Once the contract has received a certain amount of fees, the ETH can be withdrawn to an immutable address on L1."),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("inlineCode",{parentName:"td"},"MIN_WITHDRAWAL_AMOUNT"),"Minimum balance before a withdrawal can be triggered.Change via upgrade.2.",(0,r.kt)("inlineCode",{parentName:"td"},"RECIPIENT"),"Wallet that will receive the fees on L1.Change via upgrade."),(0,r.kt)("td",{parentName:"tr",align:null},"Bedrock"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bnb-chain/opbnb/blob/release/testnet/packages/contracts-bedrock/contracts/governance/GovernanceToken.sol"},"GovernanceToken")),(0,r.kt)("td",{parentName:"tr",align:null},"0x4200000000000000000000000000000000000042"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0},97901:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/L1-L2-d63a7d164a92644a592a906d05a647ce.png"}}]);