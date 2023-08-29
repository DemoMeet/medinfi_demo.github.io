'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a6d0ad13a2ab45ab66df5a48dc8ab2a2",
"assets/assets/fonts/inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/opensans/OpenSans-Bold.ttf": "2febb6f94bce387fc39728d1920bc61f",
"assets/assets/fonts/opensans/OpenSans-Regular.ttf": "dd7ca4f5cf9c67d1d028da5c01d67884",
"assets/assets/icons/down.png": "f4bceeca484548b39ed182daa5080358",
"assets/assets/icons/download_csv.png": "3aa864836449eaf7b5a6e465fa12e5c8",
"assets/assets/icons/download_pdf.png": "70b092de043d5b69ddf7e22498ab5c27",
"assets/assets/icons/down_selected.png": "e6f53fe3cf2926f0bb9901df5e53af30",
"assets/assets/icons/logo.png": "23859ded8ca13199bddde5cd8a707527",
"assets/assets/icons/logo_mini.png": "781871b013ec91647882a14ba47bf241",
"assets/assets/icons/menu.png": "a4c5507d5e2d6cbe067afb299491f059",
"assets/assets/icons/side_bar/account.png": "061fc35d25a6f127cdb69abc40e0186a",
"assets/assets/icons/side_bar/account_selected.png": "01ae2cc461753f1c24e1243baed7c74f",
"assets/assets/icons/side_bar/customer.png": "ff036c4bbdfecb8f00b1b85b4134f6e4",
"assets/assets/icons/side_bar/customer_selected.png": "01c6ce0ef8ad7261dd2a516a2cf5fad9",
"assets/assets/icons/side_bar/dashboard.png": "f3cd2bc292dcaa352bbbe5c171581952",
"assets/assets/icons/side_bar/dashboard_selected.png": "c780c081fad92589e0d478476f2798d8",
"assets/assets/icons/side_bar/human_resource.png": "83ee4a8f3678034f1764dd5e89e93873",
"assets/assets/icons/side_bar/human_resource_selected.png": "35ceacc0614a487241fad80aab20a6d3",
"assets/assets/icons/side_bar/invoice.png": "d8b63a81fb709be2b5067096a59ab378",
"assets/assets/icons/side_bar/invoice_selected.png": "137da74305541c054c886a0d177f1390",
"assets/assets/icons/side_bar/l1.png": "d8e2464951f2be83931658e721faa687",
"assets/assets/icons/side_bar/l2.png": "607310d591caf6d3369f5e8b3c9a50f3",
"assets/assets/icons/side_bar/l3.png": "78129bad2d939d5060e4a80bf9584503",
"assets/assets/icons/side_bar/l4.png": "08747073ebeb0ba91c7e25f385199897",
"assets/assets/icons/side_bar/manufacturer.png": "6b9607a5a93a3a0a7656e8df307b3672",
"assets/assets/icons/side_bar/manufacturer_selected.png": "4f1f3aacdd46b056dcb9d232e31be975",
"assets/assets/icons/side_bar/medicine.png": "18cf5c579d9a194d24eea336a5d284be",
"assets/assets/icons/side_bar/medicine_selected.png": "e7fdffef32d39b3e751fe49a1504e471",
"assets/assets/icons/side_bar/purchase.png": "957735f8e32ba9a951ec8d1cec72cd62",
"assets/assets/icons/side_bar/purchase_selected.png": "1dd2b6ad5265e786c33e4a233469c219",
"assets/assets/icons/side_bar/report.png": "c961112eccd50f557426a855a7d7781c",
"assets/assets/icons/side_bar/report_selected.png": "cd8b27657f346814c4bd9872d5005427",
"assets/assets/icons/side_bar/return.png": "1094d39f3b47d1ca5fd787ee5af1d97e",
"assets/assets/icons/side_bar/return_selected.png": "a6ef7b7d088507dcfdfb7cbb450957b2",
"assets/assets/icons/side_bar/search.png": "e9f4e82f63a5599f25b1d129b4bf83b5",
"assets/assets/icons/side_bar/search_selected.png": "982606a353c85dbc3b4ac3ae9d653e7c",
"assets/assets/icons/side_bar/stock.png": "8f2e78cf787b80bf7d51071edaeb7b42",
"assets/assets/icons/side_bar/stock_selected.png": "c72a0d02c06df1be08aa4256dc6da81d",
"assets/assets/images/def_employee.jpg": "680e48df3e9e1fa83951cb336fa6658c",
"assets/assets/images/def_medicine.png": "059cfb97853862ad04268a13f6f70ef6",
"assets/assets/images/invoice_bg.png": "591f6b83601eaaa66fff3410a0d2dc0c",
"assets/assets/images/placeholder_rectangle.png": "79fc9f15f386ea2e99367742bb003cfa",
"assets/assets/images/profile.jpeg": "4c98bbedb8b86f7fc205d6742f34d16d",
"assets/FontManifest.json": "328b65db811a9364c87ebca309720595",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c269b1a6a9bcfd921211bf7759040d44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "496e8cd70dde7307d5548eb4bd248932",
"/": "496e8cd70dde7307d5548eb4bd248932",
"logo_mini.png": "781871b013ec91647882a14ba47bf241",
"main.dart.js": "7361fd6db72b686529ed215c0bb55ca3",
"manifest.json": "f0d4dad3eda2b5c2afcf3a5f7530b7b8",
"version.json": "8b93ec86bec21871ef820ef0e67bdedd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
