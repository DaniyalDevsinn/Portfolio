'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "40feb0060cc1be8bdba8bfd4c49249ad",
".git/config": "ad17871565edacaa217d4683fc3a986b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "def059416640008014749d1e041acff9",
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
".git/index": "e1da4ffc46107b39e58187d35b64da01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7b0121145c0de21d43388506a6936ec",
".git/logs/refs/heads/main": "a770d5826a1a5b5293511a274f81f512",
".git/logs/refs/remotes/origin/main": "d0ebce8e91bf99b375aeb2d1e0c70516",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/7e2c32f859f911d5d1dd000466ab1a45b49463": "7a99edbfe6e886c58cbe341351044096",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/0b/1702ba5bf9392562c8ffa332d2468538a983c2": "df63d131f42074830fec9d39cd63c7c5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/8fe372eded6ed4df78ee9c4f6ca1556bd2d24a": "c7961e704d9290fec2b044d1649c7eca",
".git/objects/2f/0bd043eca0c15063a2853c4bf56ec20c474985": "3a24fa5420d8a931f94105ca2bfc1196",
".git/objects/38/c862b9f70f43415ff988d04252291b48e4a1c8": "66acf5afe4e33cc7e4b5b97d84b87f6d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/8c09a027b9feed2e1a58225d415485f3ddc8fd": "d98ba9bb913b23c4c973db8e6ced8ad7",
".git/objects/4c/620359d644f401490ba1958e60b3da706fb30d": "9565f0c974c506c638d9b429db7fe123",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5b/4260b9cdf1e241e3690629949e7c845ed1787f": "820cad4f35831aa0cbd025b2d279d078",
".git/objects/69/9f343dd455ea20aaf58762559b4564f8a32f0b": "7c5aae0bdc8849aa1393539dd2ad6acd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/4867b422211f5c6e5557c12d2568883e02d244": "cb4aacc382af719e09e7ff2d9bb74af4",
".git/objects/72/4bfe8d58524d2e0bbe0b26bafa632c368b3ec0": "8df84e698e31c6d9bee98359d735968c",
".git/objects/75/18ab530022237d2c450c6ae1400811a09e99a6": "217033c63b3506dc89bc3c1861ea9dbe",
".git/objects/75/661f0312998a32228ef33cdb5fdd1237acccf9": "48c2e9a0028f6988e2bc174408163822",
".git/objects/75/e3d97e436cc8424abb0b55e4c5dc77bf8db01d": "3b3d4f48268cbc51b2feea4cdeef72ea",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/c006cb4ed44728d6e75c4683c7cabedf7d53dc": "2e1a6c6338425d098ab4e689e1f84fd5",
".git/objects/86/8f810c719fe5901e35b2133509b3848c02294a": "574269864cae854106313e8fa93da876",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/88c40e6ec8cf5330ea8ee03f48cbfb5839b73b": "f27d4e4ec8f986a3a8cebdf03927df84",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8e/f776a8e7cdf95f7aef0671cfe8a6c109988855": "6ca8b14f25730666b13095a1da813624",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9d/cd9ef97ab6e6e8675b8da01de9739b66af7925": "1125e3be3a3d910d1cde4c0fc6fd6094",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/eff6f76625b38ced34447c58cd700276760d5d": "d852c503c2394185c98f1966548e642f",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/a4/e2d7b307a43f9591293674f39a23c46d241cc7": "da43dfca805365a984deaf8bdd43b6df",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b2/b82a25b2a36aa5a36e370fa185da4b6643b94a": "cc44f1fa262599610ab36f51e9f9cfad",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b4/aebaf51cbebdb4f1b003ac64a4458473109fdf": "34515381d56e3e52667be399e7744573",
".git/objects/b5/47b962089e19c6f079db7cf52da790b0ba6708": "4b3585c1e968c710271eaa388ea0e6bf",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/a38ee3aa50bb5dc66c5f1c4fe8021a26e98d0c": "27d1cdccbe8c2d3dcb50ee0f6deafce9",
".git/objects/ca/e6070a61428227f70ff2d995f9dd18cddda81e": "73c37e80b0dff7bc683a3bcf36e5e2f6",
".git/objects/cc/f010566eb54fad2c4d71b27e9d93f248365f06": "b396292caf726754029e5da57ac47c88",
".git/objects/d0/c39cbdab85df8e5a891a7b78955744ac5d4494": "1ae820f28b42893c9a027c9c05da7ea6",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dd/75147e93cb47f2d803ea58296dbc46e3ada234": "a6dd0cfb3e36e536c81239eaf871babd",
".git/objects/e1/f1f6c23c749c1b30fc26254f92d8cd15d31dec": "e01a070b07216957c5dbe0aeaadbc00f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/fd6b016635b4ba51fb480b2f8256eba8abc2b2": "4a30f4384360108620b930f21933743a",
".git/objects/eb/77677ef155adf3cf019ed11e23705c8e186d41": "ed70ebf902e1019e125afe15f523c48e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/fd3cabff66e24a82fb041dd8e67595b33ed981": "14b6066b553a0a6cf9b8dd561874e21e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "197e93e2f5e194aa067b595c3ead3ca4",
".git/refs/heads/main": "197e93e2f5e194aa067b595c3ead3ca4",
".git/refs/remotes/origin/main": "197e93e2f5e194aa067b595c3ead3ca4",
"assets/AssetManifest.bin": "2afc4c8a71a705a3cd1118eb96d0a02f",
"assets/AssetManifest.bin.json": "48ac8569fd6cbb0980dc41bcbcacaa98",
"assets/AssetManifest.json": "d851aa194d01396db85360a987f7b21f",
"assets/assets/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/ecommerce.png": "ca1905f3374a4aef5de8c7adff6f35a0",
"assets/assets/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/MY.png": "eaa94a06a7b4d3ca7995831b5f58de57",
"assets/assets/portfolio.png": "963a732790ffd66467f4045b767d6901",
"assets/assets/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/resume.pdf": "7e5351c29a6f2ea5f018059a5d0b4486",
"assets/assets/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/weather.png": "0dc921c85e5c9d70f80734cb7802c462",
"assets/assets/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9b44a0b83c0c84e8b2c122cecdc133df",
"assets/NOTICES": "1e71bb8ff379c107a7f7826ea836d3cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "247ca0b2d764d1be7017cebc148cb63b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49118908f3f2c5ac44b6fc1b5664fb99",
"/": "49118908f3f2c5ac44b6fc1b5664fb99",
"main.dart.js": "ec8ff663a322b29f64d555b725e7a32f",
"manifest.json": "a25697d20e2fae72eb063bc4d26b1e9d",
"README.md": "3fe5aeacd64bbfa9dc53aca7d6343b2e",
"version.json": "b00d72a847632953c91e7e091270d0c6"};
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
