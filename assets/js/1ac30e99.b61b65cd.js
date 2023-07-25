"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),b=o,m=h["".concat(l,".").concat(b)]||h[b]||d[b]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},31910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={title:"FAQs",icon:"ask",sidebar_collapsed:!0,dir:{order:8}},r=void 0,s={unversionedId:"faq/opbnb-faq",id:"faq/opbnb-faq",title:"FAQs",description:"This is a living document and is susceptible to changes.",source:"@site/docs/faq/opbnb-faq.md",sourceDirName:"faq",slug:"/faq/opbnb-faq",permalink:"/opbnb-docs/docs/faq/opbnb-faq",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/faq/opbnb-faq.md",tags:[],version:"current",frontMatter:{title:"FAQs",icon:"ask",sidebar_collapsed:!0,dir:{order:8}},sidebar:"guideSidebar",previous:{title:"Create a Full Stack dapp",permalink:"/opbnb-docs/docs/tutorials/full-stack-dapp"},next:{title:"Contribute",permalink:"/opbnb-docs/docs/contribute"}},l={},c=[{value:"How do you expect the TPS of the opBNB?",id:"how-do-you-expect-the-tps-of-the-opbnb",level:3},{value:"How much does transfer transaction cost on opBNB, and why do you think opBNB has the capacity to enable the mass adoption of daily small amount transactions?",id:"how-much-does-transfer-transaction-cost-on-opbnb-and-why-do-you-think-opbnb-has-the-capacity-to-enable-the-mass-adoption-of-daily-small-amount-transactions",level:3},{value:"What impact of opBNB can bring to web3 games?",id:"what-impact-of-opbnb-can-bring-to-web3-games",level:3},{value:"What is the difference between opBNB and other optimism based layer 2 solution, like base?",id:"what-is-the-difference-between-opbnb-and-other-optimism-based-layer-2-solution-like-base",level:3},{value:"We already have the zkBNB as a scaling solution, why opBNB is needed?",id:"we-already-have-the-zkbnb-as-a-scaling-solution-why-opbnb-is-needed",level:3},{value:"What to do if I get this error code: <code>-32603</code> when doing transfer on opBNB bridge?",id:"what-to-do-if-i-get-this-error-code--32603-when-doing-transfer-on-opbnb-bridge",level:3},{value:"What should I do if I see different (or 0) balance on opBNB bridge and Metamask wallet?",id:"what-should-i-do-if-i-see-different-or-0-balance-on-opbnb-bridge-and-metamask-wallet",level:3},{value:"Why am I NOT able to withdraw? The confirmation hint just pops up and disappears?",id:"why-am-i-not-able-to-withdraw-the-confirmation-hint-just-pops-up-and-disappears",level:3},{value:"Not able to claim/transfer NFT on zkbridge: https://zkbridge.com/ and galxe: https://galxe.com/polyhedra/campaign/GCW7sUEAyS, and having issues: <code>Still processing for more than 24 hours</code>?",id:"not-able-to-claimtransfer-nft-on-zkbridge-httpszkbridgecom-and-galxe-httpsgalxecompolyhedracampaigngcw7sueays-and-having-issues-still-processing-for-more-than-24-hours",level:3},{value:"How to allow smart contract cross chain communication between L1 and L2?",id:"how-to-allow-smart-contract-cross-chain-communication-between-l1-and-l2",level:3}],p={toc:c};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,o.kt)("h3",{id:"how-do-you-expect-the-tps-of-the-opbnb"},"How do you expect the TPS of the opBNB?"),(0,o.kt)("p",null,"The TPS of opBNB can be estimated to be around 4,761 transactions per second based on the calculations. This is significantly higher than Ethereum's current TPS and can enable more frequent daily transactions."),(0,o.kt)("h3",{id:"how-much-does-transfer-transaction-cost-on-opbnb-and-why-do-you-think-opbnb-has-the-capacity-to-enable-the-mass-adoption-of-daily-small-amount-transactions"},"How much does transfer transaction cost on opBNB, and why do you think opBNB has the capacity to enable the mass adoption of daily small amount transactions?"),(0,o.kt)("p",null,"opBNB can make small daily transactions possible because the transaction fees are very low, around $0.005 per transaction. This is much lower than traditional payment methods like credit cards which charge around 1-3% per transaction. The low fees on opBNB make it economical for small purchases and daily transactions."),(0,o.kt)("h3",{id:"what-impact-of-opbnb-can-bring-to-web3-games"},"What impact of opBNB can bring to web3 games?"),(0,o.kt)("p",null,"Performance is important for games because gamers expect a highly responsive experience. Any lag, delay or choppiness can hamper enjoyment and immersion in the game. For blockchain games, fast transaction speeds and throughput are crucial to enable a seamless user experience. Gamers expect in-game assets and currencies to be transferred instantly, so the underlying blockchain network must be high performance"),(0,o.kt)("h3",{id:"what-is-the-difference-between-opbnb-and-other-optimism-based-layer-2-solution-like-base"},"What is the difference between opBNB and other optimism based layer 2 solution, like base?"),(0,o.kt)("p",null,"opBNB is the first layer 2 optimistic rollup on BSC, and BSC layer 1 cost is much lower than ETH, so the cost of layer 2 on BSC will give application developers a more affordable solution. Another difference is the opBNB will include the performance optimization techniques that has been used in BSC to have a much better performance."),(0,o.kt)("h3",{id:"we-already-have-the-zkbnb-as-a-scaling-solution-why-opbnb-is-needed"},"We already have the zkBNB as a scaling solution, why opBNB is needed?"),(0,o.kt)("p",null,"zkBNB is not EVM-comptatible, which means it is more suitable for NFT and token transactions, not for generic dApps. opBNB`s programability is to support applications that need more flexibility."),(0,o.kt)("h3",{id:"what-to-do-if-i-get-this-error-code--32603-when-doing-transfer-on-opbnb-bridge"},"What to do if I get this error code: ",(0,o.kt)("inlineCode",{parentName:"h3"},"-32603")," when doing transfer on opBNB bridge?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:a(6619).Z,width:"1722",height:"958"}),"\nChange your wallet RPC endpoint for BSC testnet and try again: ",(0,o.kt)("a",{parentName:"p",href:"https://www.bnbchainlist.org/"},"https://www.bnbchainlist.org/")),(0,o.kt)("h3",{id:"what-should-i-do-if-i-see-different-or-0-balance-on-opbnb-bridge-and-metamask-wallet"},"What should I do if I see different (or 0) balance on opBNB bridge and Metamask wallet?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:a(80395).Z,width:"1030",height:"629"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change your wallet RPC endpoint for BSC testnet and try again: ",(0,o.kt)("a",{parentName:"li",href:"https://www.bnbchainlist.org/"},"https://www.bnbchainlist.org/")," or ",(0,o.kt)("a",{parentName:"li",href:"https://chainlist.org/?search=bsc&testnets=true"},"https://chainlist.org/?search=bsc&testnets=true")),(0,o.kt)("li",{parentName:"ol"},"If you're still getting this issue, then make sure to disable the VPN and refresh the opBNB bridge: ",(0,o.kt)("a",{parentName:"li",href:"https://opbnb-testnet-bridge.bnbchain.org/?type=deposit"},"https://opbnb-testnet-bridge.bnbchain.org/?type=deposit")," page.")),(0,o.kt)("h3",{id:"why-am-i-not-able-to-withdraw-the-confirmation-hint-just-pops-up-and-disappears"},"Why am I NOT able to withdraw? The confirmation hint just pops up and disappears?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:a(64472).Z,width:"1718",height:"846"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change your wallet RPC endpoint and try again: ",(0,o.kt)("a",{parentName:"li",href:"https://www.bnbchainlist.org/"},"https://www.bnbchainlist.org/")," or ",(0,o.kt)("a",{parentName:"li",href:"https://chainlist.org/?search=bsc&testnets=true"},"https://chainlist.org/?search=bsc&testnets=true")),(0,o.kt)("li",{parentName:"ol"},"If you're still getting this issue, then make sure to disable the VPN and refresh the opBNB bridge: ",(0,o.kt)("a",{parentName:"li",href:"https://opbnb-testnet-bridge.bnbchain.org/?type=deposit"},"https://opbnb-testnet-bridge.bnbchain.org/?type=deposit")," page.")),(0,o.kt)("h3",{id:"not-able-to-claimtransfer-nft-on-zkbridge-httpszkbridgecom-and-galxe-httpsgalxecompolyhedracampaigngcw7sueays-and-having-issues-still-processing-for-more-than-24-hours"},"Not able to claim/transfer NFT on zkbridge: ",(0,o.kt)("a",{parentName:"h3",href:"https://zkbridge.com/"},"https://zkbridge.com/")," and galxe: ",(0,o.kt)("a",{parentName:"h3",href:"https://galxe.com/polyhedra/campaign/GCW7sUEAyS"},"https://galxe.com/polyhedra/campaign/GCW7sUEAyS"),", and having issues: ",(0,o.kt)("inlineCode",{parentName:"h3"},"Still processing for more than 24 hours"),"?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:a(65933).Z,width:"1782",height:"1148"}),"\nAs this is related to ",(0,o.kt)("inlineCode",{parentName:"p"},"zkbridge"),", please check with the appropriate project support team (here: ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/WkjUe5tfZP"},"https://discord.com/invite/WkjUe5tfZP"),"), as the service/website you are using is from Polyhedra team."),(0,o.kt)("h3",{id:"how-to-allow-smart-contract-cross-chain-communication-between-l1-and-l2"},"How to allow smart contract cross chain communication between L1 and L2?"),(0,o.kt)("p",null,"Directly interacting with smart contract functions that exists on L2(opBNB) from L1(BSC), is not possible as all smart contracts on L2 is isolated from L1.",(0,o.kt)("br",null),"\nWith that said, there is a way for developers to allow arbitrary message sending by writing their own contracts to build their required business logic. More details here: ",(0,o.kt)("a",{parentName:"p",href:"https://community.optimism.io/docs/developers/bridge/messaging/#communication-basics-between-layers"},"https://community.optimism.io/docs/developers/bridge/messaging/#communication-basics-between-layers")))}h.isMDXComponent=!0},80395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MM bal mismatch-972c3b496c850c71455ce420e071e68b.png"},6619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Txn. Failed 32603-7db92121c8455f602a47e0cebe802b92.png"},64472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/opBNB Withdraw confirmation-13078febac285fc95b2420c39d5f7409.png"},65933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zkBridge_issue-7825d2d949455cc4f50bb17349173ebc.png"}}]);