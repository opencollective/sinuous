import {RawResult} from './Common';

export let results: RawResult[]=[
{"f":"angular-v8.0.1-keyed","b":"01_run1k","v":[218.356]},
{"f":"angular-v8.0.1-keyed","b":"02_replace1k","v":[175.861]},
{"f":"angular-v8.0.1-keyed","b":"03_update10th1k_x16","v":[268.975]},
{"f":"angular-v8.0.1-keyed","b":"04_select1k","v":[70.705]},
{"f":"angular-v8.0.1-keyed","b":"05_swap1k","v":[726.253]},
{"f":"angular-v8.0.1-keyed","b":"06_remove-one-1k","v":[52.107]},
{"f":"angular-v8.0.1-keyed","b":"07_create10k","v":[1897.687]},
{"f":"angular-v8.0.1-keyed","b":"08_create1k-after1k_x2","v":[418.851]},
{"f":"angular-v8.0.1-keyed","b":"09_clear1k_x8","v":[499.473]},
{"f":"angular-v8.0.1-keyed","b":"21_ready-memory","v":[4.637504577636719]},
{"f":"angular-v8.0.1-keyed","b":"22_run-memory","v":[9.011741638183594]},
{"f":"angular-v8.0.1-keyed","b":"23_update5-memory","v":[9.3033447265625]},
{"f":"angular-v8.0.1-keyed","b":"24_run5-memory","v":[9.734306335449219]},
{"f":"angular-v8.0.1-keyed","b":"25_run-clear-memory","v":[6.39349365234375]},
{"f":"angular-v8.0.1-keyed","b":"31_startup-ci","v":[2761.384]},
{"f":"angular-v8.0.1-keyed","b":"32_startup-bt","v":[277.552]},
{"f":"angular-v8.0.1-keyed","b":"33_startup-mainthreadcost","v":[714.0160000000003]},
{"f":"angular-v8.0.1-keyed","b":"34_startup-totalbytes","v":[295.51171875]},
{"f":"react-v16.8.6-keyed","b":"01_run1k","v":[229.671]},
{"f":"react-v16.8.6-keyed","b":"02_replace1k","v":[167.947]},
{"f":"react-v16.8.6-keyed","b":"03_update10th1k_x16","v":[332.276]},
{"f":"react-v16.8.6-keyed","b":"04_select1k","v":[76.989]},
{"f":"react-v16.8.6-keyed","b":"05_swap1k","v":[688.412]},
{"f":"react-v16.8.6-keyed","b":"06_remove-one-1k","v":[65.676]},
{"f":"react-v16.8.6-keyed","b":"07_create10k","v":[2233.24]},
{"f":"react-v16.8.6-keyed","b":"08_create1k-after1k_x2","v":[497.475]},
{"f":"react-v16.8.6-keyed","b":"09_clear1k_x8","v":[278.179]},
{"f":"react-v16.8.6-keyed","b":"21_ready-memory","v":[2.0519485473632812]},
{"f":"react-v16.8.6-keyed","b":"22_run-memory","v":[6.658531188964844]},
{"f":"react-v16.8.6-keyed","b":"23_update5-memory","v":[7.7660064697265625]},
{"f":"react-v16.8.6-keyed","b":"24_run5-memory","v":[8.613700866699219]},
{"f":"react-v16.8.6-keyed","b":"25_run-clear-memory","v":[4.474296569824219]},
{"f":"react-v16.8.6-keyed","b":"31_startup-ci","v":[2546]},
{"f":"react-v16.8.6-keyed","b":"32_startup-bt","v":[74.508]},
{"f":"react-v16.8.6-keyed","b":"33_startup-mainthreadcost","v":[270.63999999999993]},
{"f":"react-v16.8.6-keyed","b":"34_startup-totalbytes","v":[260.7021484375]},
{"f":"sinuous-v0.9.0-keyed","b":"01_run1k","v":[126.758]},
{"f":"sinuous-v0.9.0-keyed","b":"02_replace1k","v":[185.185]},
{"f":"sinuous-v0.9.0-keyed","b":"03_update10th1k_x16","v":[160.887]},
{"f":"sinuous-v0.9.0-keyed","b":"04_select1k","v":[47.271]},
{"f":"sinuous-v0.9.0-keyed","b":"05_swap1k","v":[80.502]},
{"f":"sinuous-v0.9.0-keyed","b":"06_remove-one-1k","v":[57.22]},
{"f":"sinuous-v0.9.0-keyed","b":"07_create10k","v":[1400.447]},
{"f":"sinuous-v0.9.0-keyed","b":"08_create1k-after1k_x2","v":[328.438]},
{"f":"sinuous-v0.9.0-keyed","b":"09_clear1k_x8","v":[209.518]},
{"f":"sinuous-v0.9.0-keyed","b":"21_ready-memory","v":[1.6993942260742188]},
{"f":"sinuous-v0.9.0-keyed","b":"22_run-memory","v":[3.2637710571289062]},
{"f":"sinuous-v0.9.0-keyed","b":"23_update5-memory","v":[3.5739288330078125]},
{"f":"sinuous-v0.9.0-keyed","b":"24_run5-memory","v":[3.8184890747070312]},
{"f":"sinuous-v0.9.0-keyed","b":"25_run-clear-memory","v":[2.8927154541015625]},
{"f":"sinuous-v0.9.0-keyed","b":"31_startup-ci","v":[1812.1695]},
{"f":"sinuous-v0.9.0-keyed","b":"32_startup-bt","v":[16]},
{"f":"sinuous-v0.9.0-keyed","b":"33_startup-mainthreadcost","v":[224.13600000000002]},
{"f":"sinuous-v0.9.0-keyed","b":"34_startup-totalbytes","v":[149.126953125]},
{"f":"svelte-v3.5.1-keyed","b":"01_run1k","v":[164.851]},
{"f":"svelte-v3.5.1-keyed","b":"02_replace1k","v":[190.885]},
{"f":"svelte-v3.5.1-keyed","b":"03_update10th1k_x16","v":[185.752]},
{"f":"svelte-v3.5.1-keyed","b":"04_select1k","v":[48.492]},
{"f":"svelte-v3.5.1-keyed","b":"05_swap1k","v":[106.201]},
{"f":"svelte-v3.5.1-keyed","b":"06_remove-one-1k","v":[63.82]},
{"f":"svelte-v3.5.1-keyed","b":"07_create10k","v":[1968.578]},
{"f":"svelte-v3.5.1-keyed","b":"08_create1k-after1k_x2","v":[424.271]},
{"f":"svelte-v3.5.1-keyed","b":"09_clear1k_x8","v":[300.721]},
{"f":"svelte-v3.5.1-keyed","b":"21_ready-memory","v":[1.6542129516601562]},
{"f":"svelte-v3.5.1-keyed","b":"22_run-memory","v":[3.6514358520507812]},
{"f":"svelte-v3.5.1-keyed","b":"23_update5-memory","v":[3.9684906005859375]},
{"f":"svelte-v3.5.1-keyed","b":"24_run5-memory","v":[4.188545227050781]},
{"f":"svelte-v3.5.1-keyed","b":"25_run-clear-memory","v":[2.8651580810546875]},
{"f":"svelte-v3.5.1-keyed","b":"31_startup-ci","v":[1805.4845]},
{"f":"svelte-v3.5.1-keyed","b":"32_startup-bt","v":[16]},
{"f":"svelte-v3.5.1-keyed","b":"33_startup-mainthreadcost","v":[]},
{"f":"svelte-v3.5.1-keyed","b":"34_startup-totalbytes","v":[145.662109375]},
{"f":"vanillajs-keyed","b":"01_run1k","v":[122.689]},
{"f":"vanillajs-keyed","b":"02_replace1k","v":[140.298]},
{"f":"vanillajs-keyed","b":"03_update10th1k_x16","v":[295.456]},
{"f":"vanillajs-keyed","b":"04_select1k","v":[51.716]},
{"f":"vanillajs-keyed","b":"05_swap1k","v":[108.836]},
{"f":"vanillajs-keyed","b":"06_remove-one-1k","v":[73.352]},
{"f":"vanillajs-keyed","b":"07_create10k","v":[1336.149]},
{"f":"vanillajs-keyed","b":"08_create1k-after1k_x2","v":[339.775]},
{"f":"vanillajs-keyed","b":"09_clear1k_x8","v":[211.259]},
{"f":"vanillajs-keyed","b":"21_ready-memory","v":[1.6262435913085938]},
{"f":"vanillajs-keyed","b":"22_run-memory","v":[2.2509994506835938]},
{"f":"vanillajs-keyed","b":"23_update5-memory","v":[2.5876922607421875]},
{"f":"vanillajs-keyed","b":"24_run5-memory","v":[3.03875732421875]},
{"f":"vanillajs-keyed","b":"25_run-clear-memory","v":[3.0989532470703125]},
{"f":"vanillajs-keyed","b":"31_startup-ci","v":[1804.312]},
{"f":"vanillajs-keyed","b":"32_startup-bt","v":[16]},
{"f":"vanillajs-keyed","b":"33_startup-mainthreadcost","v":[282.50399999999996]},
{"f":"vanillajs-keyed","b":"34_startup-totalbytes","v":[147.1650390625]},
{"f":"vue-v2.6.2-keyed","b":"01_run1k","v":[243.547]},
{"f":"vue-v2.6.2-keyed","b":"02_replace1k","v":[169.436]},
{"f":"vue-v2.6.2-keyed","b":"03_update10th1k_x16","v":[549.891]},
{"f":"vue-v2.6.2-keyed","b":"04_select1k","v":[250.862]},
{"f":"vue-v2.6.2-keyed","b":"05_swap1k","v":[137.306]},
{"f":"vue-v2.6.2-keyed","b":"06_remove-one-1k","v":[81.92]},
{"f":"vue-v2.6.2-keyed","b":"07_create10k","v":[1837.639]},
{"f":"vue-v2.6.2-keyed","b":"08_create1k-after1k_x2","v":[497.605]},
{"f":"vue-v2.6.2-keyed","b":"09_clear1k_x8","v":[335.199]},
{"f":"vue-v2.6.2-keyed","b":"21_ready-memory","v":[1.9373245239257812]},
{"f":"vue-v2.6.2-keyed","b":"22_run-memory","v":[6.848686218261719]},
{"f":"vue-v2.6.2-keyed","b":"23_update5-memory","v":[7.176261901855469]},
{"f":"vue-v2.6.2-keyed","b":"24_run5-memory","v":[7.416938781738281]},
{"f":"vue-v2.6.2-keyed","b":"25_run-clear-memory","v":[3.5281906127929688]},
{"f":"vue-v2.6.2-keyed","b":"31_startup-ci","v":[2187.299]},
{"f":"vue-v2.6.2-keyed","b":"32_startup-bt","v":[16]},
{"f":"vue-v2.6.2-keyed","b":"33_startup-mainthreadcost","v":[]},
{"f":"vue-v2.6.2-keyed","b":"34_startup-totalbytes","v":[211.001953125]},];
export let frameworks = [{"name":"angular-v8.0.1-keyed","keyed":true},{"name":"angular-ivy-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-light-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-noopzone-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-optimized-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angularjs-vinvalid (no package-lock)-keyed","keyed":true},{"name":"apprun-vinvalid (no package-lock)-keyed","keyed":true},{"name":"attodom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"aurelia-vinvalid (no package-lock)-keyed","keyed":true},{"name":"binding.scala-v10.0.1-keyed","keyed":true},{"name":"bobril-vinvalid (no package-lock)-keyed","keyed":true},{"name":"choo-vinvalid (no package-lock)-keyed","keyed":true},{"name":"datum-vinvalid (no package-lock)-keyed","keyed":true},{"name":"dio-vinvalid (no package-lock)-keyed","keyed":true},{"name":"dojo2-vinvalid (no package-lock)-keyed","keyed":true},{"name":"domc-vinvalid (no package-lock)-keyed","keyed":true},{"name":"dominator-v0.5.0-keyed","keyed":true},{"name":"domvm-v3.4.5-keyed","keyed":true},{"name":"elm-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ember-v3.9.1-keyed","keyed":true},{"name":"ember-sparkles-v3.5.1-keyed","keyed":true},{"name":"endorphin-vinvalid (no package-lock)-keyed","keyed":true},{"name":"etch-vinvalid (no package-lock)-keyed","keyed":true},{"name":"faster-dom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"fidan-v0.0.23-keyed","keyed":true},{"name":"glasgow-vinvalid (no package-lock)-keyed","keyed":true},{"name":"glimmer-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hullo-v0.8.2-keyed","keyed":true},{"name":"hyperapp-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hyperhtml-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hyperoop-vinvalid (no package-lock)-keyed","keyed":true},{"name":"imba-vinvalid (no package-lock)-keyed","keyed":true},{"name":"inferno-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ivi-vinvalid (no package-lock)-keyed","keyed":true},{"name":"knockout-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ko-jsx-vinvalid (no package-lock)-keyed","keyed":true},{"name":"lighterhtml-vinvalid (no package-lock)-keyed","keyed":true},{"name":"lit-html-vinvalid (no package-lock)-keyed","keyed":true},{"name":"maik-h-vinvalid (no package-lock)-keyed","keyed":true},{"name":"maquette-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marionette-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marionette-jquery-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marko-vinvalid (no package-lock)-keyed","keyed":true},{"name":"miso-v0.18.0.0-keyed","keyed":true},{"name":"mithril-vinvalid (no package-lock)-keyed","keyed":true},{"name":"mobx-jsx-vinvalid (no package-lock)-keyed","keyed":true},{"name":"nervjs-vinvalid (no package-lock)-keyed","keyed":true},{"name":"nx-v1.0.0-beta.2.0.1-keyed","keyed":true},{"name":"petit-dom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"plastiq-vinvalid (no package-lock)-keyed","keyed":true},{"name":"preact-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ractive-vinvalid (no package-lock)-keyed","keyed":true},{"name":"rawact-vinvalid (no package-lock)-keyed","keyed":true},{"name":"rax-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-v16.8.6-keyed","keyed":true},{"name":"react-djinn-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-easy-state-v16.1.0 + 5.0.0-keyed","keyed":true},{"name":"react-hooks-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-lite-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-mobX-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-combiner-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-hooks-vinvalid (no package-lock)-keyed","keyed":true},{"name":"reagent-v0.8-keyed","keyed":true},{"name":"reason-react-vinvalid (no package-lock)-keyed","keyed":true},{"name":"redom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"reflex-dom-v0.4-keyed","keyed":true},{"name":"san-vinvalid (no package-lock)-keyed","keyed":true},{"name":"scarletsframe-keyed","keyed":true},{"name":"sifrr-vinvalid (no package-lock)-keyed","keyed":true},{"name":"sinuous-v0.9.0-keyed","keyed":true},{"name":"solid-vinvalid (no package-lock)-keyed","keyed":true},{"name":"stage0-vinvalid (no package-lock)-keyed","keyed":true},{"name":"stdweb-v0.4.17-keyed","keyed":true},{"name":"surplus-vinvalid (no package-lock)-keyed","keyed":true},{"name":"svelte-v3.5.1-keyed","keyed":true},{"name":"vanillajs-keyed","keyed":true},{"name":"vanillajs-1-keyed","keyed":true},{"name":"vanillajs-wc-keyed","keyed":true},{"name":"vidom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"vue-v2.6.2-keyed","keyed":true},{"name":"wasm-bindgen-v0.2.47-keyed","keyed":true},{"name":"angular-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"apprun-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"aurelia-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"cyclejs-dom-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"dio-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"dojo2-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"domc-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"domvm-v3.4.5-non-keyed","keyed":false},{"name":"elm-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"endorphin-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"etch-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"gruu-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"halogen-v4.0.0-non-keyed","keyed":false},{"name":"hullo-v0.8.2-non-keyed","keyed":false},{"name":"hyperapp-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"imba-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"inferno-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lighterhtml-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lit-html-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lite-html-v0.2.4-non-keyed","keyed":false},{"name":"literaljs-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"maik-h-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"moon-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"nx-v1.0.0-beta.2.0.1-non-keyed","keyed":false},{"name":"polymer-v2.0.0-non-keyed","keyed":false},{"name":"pux-v11.0.0-non-keyed","keyed":false},{"name":"ractive-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"rawact-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"react-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"redom-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"riot-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"rivets-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"san-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"scarletsframe-non-keyed","keyed":false},{"name":"sifrr-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"simi-v0.2.0-dev1-non-keyed","keyed":false},{"name":"simulacra-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"slim-js-v3.3.0-non-keyed","keyed":false},{"name":"stage0-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"stdweb-v0.4.8-non-keyed","keyed":false},{"name":"stem-v0.2.70-non-keyed","keyed":false},{"name":"surplus-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"svelte-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"thermite-v4.0.0-non-keyed","keyed":false},{"name":"tsers-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"vanilla-dom-framework-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"vanillajs-non-keyed","keyed":false},{"name":"vanillajs-1-non-keyed","keyed":false},{"name":"vue-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"vuera-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"yew-v0.7.0-non-keyed","keyed":false}];
export let benchmarks = [{"id":"01_run1k","label":"create rows","description":"creating 1,000 rows","type":0},{"id":"02_replace1k","label":"replace all rows","description":"updating all 1,000 rows (5 warmup runs).","type":0},{"id":"03_update10th1k_x16","label":"partial update","description":"updating every 10th row for 1,000 rows (3 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"04_select1k","label":"select row","description":"highlighting a selected row. (5 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"05_swap1k","label":"swap rows","description":"swap 2 rows for table with 1,000 rows. (5 warmup runs). 4x CPU slowdown.","type":0,"throttleCPU":4},{"id":"06_remove-one-1k","label":"remove row","description":"removing one row. (5 warmup runs).","type":0},{"id":"07_create10k","label":"create many rows","description":"creating 10,000 rows","type":0},{"id":"08_create1k-after1k_x2","label":"append rows to large table","description":"appending 1,000 to a table of 10,000 rows. 2x CPU slowdown","type":0,"throttleCPU":2},{"id":"09_clear1k_x8","label":"clear rows","description":"clearing a table with 1,000 rows. 8x CPU slowdown","type":0,"throttleCPU":8},{"id":"21_ready-memory","label":"ready memory","description":"Memory usage after page load.","type":1},{"id":"22_run-memory","label":"run memory","description":"Memory usage after adding 1000 rows.","type":1},{"id":"23_update5-memory","label":"update eatch 10th row for 1k rows (5 cycles)","description":"Memory usage after clicking update every 10th row 5 times","type":1},{"id":"24_run5-memory","label":"replace 1k rows (5 cycles)","description":"Memory usage after clicking create 1000 rows 5 times","type":1},{"id":"25_run-clear-memory","label":"creating/clearing 1k rows (5 cycles)","description":"Memory usage after creating and clearing 1000 rows 5 times","type":1},{"id":"31_startup-ci","label":"consistently interactive","description":"a pessimistic TTI - when the CPU and network are both definitely very idle. (no more CPU tasks over 50ms)","type":2,"property":"TimeToConsistentlyInteractive"},{"id":"32_startup-bt","label":"script bootup time","description":"the total ms required to parse/compile/evaluate all the page's scripts","type":2,"property":"ScriptBootUpTtime"},{"id":"33_startup-mainthreadcost","label":"main thread work cost","description":"total amount of time spent doing work on the main thread. includes style/layout/etc.","type":2,"property":"MainThreadWorkCost"},{"id":"34_startup-totalbytes","label":"total kilobyte weight","description":"network transfer cost (post-compression) of all the resources loaded into the page.","type":2,"property":"TotalKiloByteWeight"}];