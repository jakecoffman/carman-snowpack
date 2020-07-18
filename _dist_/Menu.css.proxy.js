
const code = "ul.svelte-au0xn4{list-style:none;font-size:16pt;padding:0;margin:1rem;position:absolute;left:0;right:0;top:0;bottom:0;display:grid;grid-template-columns:auto auto;justify-content:space-between;align-content:space-between}li.svelte-au0xn4{padding:1rem;border:1px solid;border-radius:5px;opacity:.7}.red.svelte-au0xn4{background:red}.green.svelte-au0xn4{background:#207d20}.blue.svelte-au0xn4{background:#3c3cf8}.purple.svelte-au0xn4{background:#8b578b}.middle-text.svelte-au0xn4{position:absolute;left:0;top:50%;width:100%;height:100%;text-align:center;color:white}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);