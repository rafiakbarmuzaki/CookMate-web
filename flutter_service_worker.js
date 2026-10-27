'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b9d7789a3a0aa7f2f6eb443932f564e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e4e3481a60584801fd7236742a80af52",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b253c444333532e52bcbde6c1f3892db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbb72044c8fb653af4e48fa8675d1b47",
".git/logs/refs/heads/main": "89170fc39acaced847a514f886fca4ac",
".git/logs/refs/remotes/origin/HEAD": "43c560b64904154913d9030c085f8aae",
".git/logs/refs/remotes/origin/main": "0d2ee0e111d502e4420d2bf9425db9a4",
".git/logs/refs/remotes/origin/master": "7a0fcddf67a391bb07088d29ae9ba713",
".git/objects/01/97d1eb704dd971efd8596641fd579745c2a852": "2d827369e8047581b7090d1659c73bed",
".git/objects/03/e51ace14a0c60ee821a2c3c20e81d46f8c3b44": "d1d90dc44d86aa572eeb77b2fe5793ef",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/448b7c0a53598b068427fbb509d30c913286b1": "489741e613de318c01998f44a99eb7aa",
".git/objects/10/233a6181c6f3b1097793e85aec20f174a6d441": "3f94bd8db63a9aede16a3f3f0962630f",
".git/objects/13/0951c9498487f864258c4bd8bc31bbcca27d04": "381b292fc882f16e8060ba3108818aff",
".git/objects/16/b3566b78fb88735c9d3e1a702bc12e95001b33": "4e850de57fbcf330abdb42d44b3a99a9",
".git/objects/1f/e14dfd7f18631bb25ccd7d64a23c47c7f3f5d4": "9d5a0aa9563c11f520fb6dda08199605",
".git/objects/2e/9774fb1a61b84210e31d3511a1f98f7d783fa5": "cf4ed8a4d51f5938caff41d4db80b8ca",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/3fc1b75e217f6a14079f4e138d7b6fb5268c3d": "17eb3a7be9df01f918d3ba39f6a50fe9",
".git/objects/3e/e82f7e310790505999a85652877cf4cd4448cc": "16202f90e421637d6a860f0a065efffa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e923d9f8af20ccfc3efdb7a1f7f3cb7f3df682": "b5f9886a37e8094e3a5cd2beb8837f90",
".git/objects/4c/f8f0cba3e71be319053f13ad3d7f0c44149a8a": "8b9777979669b8e9786f83e4e044fd60",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/c52a6f4d8be7c8aaacb1267ef69817193ead2a": "0b68710c47c8fc5a62b25ad06860791e",
".git/objects/56/89409d0d17e39b0d592a52587c973378287b2c": "ecfc6519242971004e38d35750a86bcf",
".git/objects/5b/3f872ff647d4a16525b21e5166061a21cb0478": "65130c833805a5c14712b1fe2fe135dc",
".git/objects/62/f49d0aea386087aa277b4a3905f32f5bb301c5": "441bfc836290ca24dd1f8781a472b40e",
".git/objects/66/fa7eb10ff8237e688f5afdf75f99b400bd953a": "d8bcc8ba858fb71f29be5725d44bfcec",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/a8a3b9fc1c40b0ccf07f38ad718abc70c61c72": "049bb0d2b77351c413dc780e056ed402",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/e59959db309edf5bbd99eb73ea9ae5258ba72b": "c1ead98a917bc709fda76b56f3307d51",
".git/objects/78/a54f6b1d8ccab6367b159b63c16a19849bb07c": "fa4754240c9c6dd46149fb4de2564da0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/84/49965a918cfe985535f3da2cb759ca48b638d7": "58f5bbf1dcf97d98be18d4711136c900",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/da5bf9768fd10c060b0751c2187c60b49ff7ee": "46bc00c51d47b3cf1e0f5fcf1df82968",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d24b2511f9889b6e9bc764cd86a1a34575917e": "0a435151c69390254cf3e8c6330dfa05",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b5/2bb6cf6fcfbcc496078eec7a88cb2688e5d40e": "8bd080ad75b8bdc370c3b2df4417afdf",
".git/objects/b6/4a71250b2a6447f75b26e4b78dcebac5d7c1c1": "f836c130da9ddfce7984652d56d8e82a",
".git/objects/b6/9033104cebd3c5fc3680818e4c6cec6b82fcbc": "601ffaaf88865dfef7ccd0d567dc423a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/f6b456a0565ec25eb6f2fd9a7abfd2ea2c8cdc": "f0ec6f6a5e45f4390d1c639c6ff209dd",
".git/objects/c4/5df6ca0f41e3e270632af5b2db89266f22547f": "a109ddde88f69c3486daf4e7e3d53e88",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/7d986983fe46041821a2db77f194f024dd58f8": "c3defb8334be002f83052a71f63af5f1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e5/ac32b66b08f6c963cdbd43b8152acaa2714190": "b8fde7fcf173edd40f1d673797f879ac",
".git/objects/e7/dfae89320a55de07499002d0bfd26306a2aea6": "848fd68db87e816217eaeded0c8969c1",
".git/objects/e8/6662b03193497ae49b2858886550227f783bd0": "c5bc9a8a4bf2d762e389481e869a72e7",
".git/objects/e9/56c97db9d83f8c20e33eb5378835e973872699": "8e52a4aef9d999df7f80521248cc345b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b97a9fb13d4cf206df5b9df9435d4ab343e64e": "fd3b3eb2c118f031223d0b79af55d874",
".git/objects/f0/33a59d1b502742612ee0efcc8134f8a78e94b8": "5bf1e6d64c382cee5641e9ce110b16be",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/bb1a5030d67c161bf6c1643a23bf5008a8d984": "e8170317748da617ed7367f972c07333",
".git/objects/fc/28bd9817264e69a2c0ca1855d3ab06ba1f23e2": "d3dbfb117f5e313b4639c1d17359ae8b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "cb69f9baa94921e255cd7cdc7e04cd5d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "cb69f9baa94921e255cd7cdc7e04cd5d",
".git/refs/remotes/origin/master": "03904665a88596a3007e5f66c162a20a",
"assets/AssetManifest.bin": "24b2fc982447d09f9b5737173bd1c70f",
"assets/AssetManifest.bin.json": "44539fbf28c6b6d5c479145ecbc7746a",
"assets/assets/logo.jpeg": "5f430d10ab395360daf63b063d77db9c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9bdd5d4151242aa3b391933d265aa6cb",
"assets/NOTICES": "a127f6abc9d2310d4fccdb974167bf9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "0f15ca676ee313e602d679467e5c4201",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "763418530eaa93ec219080bc22a33467",
"icons/Icon-192.png": "1595b85307210e7fa4c33ee04489cdde",
"icons/Icon-512.png": "2b08522260234f9a11c3e33404073366",
"icons/Icon-maskable-192.png": "1595b85307210e7fa4c33ee04489cdde",
"icons/Icon-maskable-512.png": "2b08522260234f9a11c3e33404073366",
"index.html": "3cfebb1ccaf5627bd74f077ef3fc85a6",
"/": "3cfebb1ccaf5627bd74f077ef3fc85a6",
"main.dart.js": "77ee80e8f4e4f38bbeb52a5c8105eb55",
"manifest.json": "48beb744652c616dcad1c4c860ab45a2",
"version.json": "0bcb8fd087f8df78bd4a9ff1fe515f7a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
