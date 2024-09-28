import { c as create_ssr_component, e as escape } from './ssr-CSRYa6Ab.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cmdKey = "Ctrl";
  return `<div class="p-2 min-h-screen w-screen flex flex-col text-primary"><div class="pb-4"><div class="flex flex-row items-center gap-4"><h1 class="mr-auto text-2xl" data-svelte-h="svelte-12fojij"><a href="/">Paste</a></h1>  <a class="underline underline-offset-4 px-2 py-1" href="/dashboard/settings" data-svelte-h="svelte-1tz2ggg">Settings</a> <button class="underline underline-offset-4 px-2 py-1" title="${escape(cmdKey, true) + "+I"}">Info</button> <button class="bg-amber-500 text-black text-lg px-4 py-1" title="${escape(cmdKey, true) + "+N"}">New</button></div></div> <div class="px-24 py-4">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Ci0ZFqYp.js.map
