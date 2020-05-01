'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff4625c090df70567e44ece8d95a40e3",
".git/config": "f732ec06578174ce27e2a54a4d5c7cde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "d705652ad662d83fb7d951d30fb4ddb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4f050dcc7d3c5ee38f119df170c880d",
".git/logs/refs/heads/master": "c4f050dcc7d3c5ee38f119df170c880d",
".git/logs/refs/remotes/origin/master": "e6bb82db1f9b3b80c93be37a309463a5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4c/6440d2a00bc22d116def2a207e99dd7b9f2ceb": "b30f72766d37ef1e37779602e3535b72",
".git/objects/51/6d9113a8576fd032d3edb8fa91d01b6d6f47ef": "19974c731c8bf83396d75c677475cbfb",
".git/objects/64/dab9b72cd507a90a0ad8281cf659f4ffe6d650": "cfbc7b1ef883d126ac9b88bc35119eb5",
".git/objects/68/715a6c472a8a8fd4826052e47f5356fa2e16a5": "c2a899c4ad9552c7f194afb73fa71d97",
".git/objects/6d/a635825a9684f625afe7f1aa721e74340e9edd": "1390f33a05ce742c028dd15ef15fd16e",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ac/e01e267ac1c998420d1b5210a09f6522c2b69d": "540500367659fafc9272b2e3a75f9339",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/bfc09557f7b9c7ea531abb7f96e2989160f1c0": "4ede839387dd8b0d58d0aaac47e0c92d",
".git/objects/d0/ad25ab87246fabab5047cea6349b4413e5d0dc": "a4996604d571c096ebe185c8f105caf7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/6852cf272dca8ec896955a1aecf135fd6fc369": "eebbc0c24053e10e5dfbd14e58f65004",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "0f7d14ea6001190444c8ea5b963eb5a4",
".git/refs/remotes/origin/master": "0f7d14ea6001190444c8ea5b963eb5a4",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7ab06f77427e1ec90250536284aae326",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8ece8a5e74155d9cb68b80b5ed8f6fd2",
"/": "8ece8a5e74155d9cb68b80b5ed8f6fd2",
"main.dart.js": "69e6b7dcd2649b47a38a38b68b9c4f4c",
"manifest.json": "506122755933520a6f9b6c031fd8b6aa"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
