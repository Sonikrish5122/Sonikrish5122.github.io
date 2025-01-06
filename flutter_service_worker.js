'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7ac81416552a388d6fa97a82d636019e",
"version.json": "71ee84572b02bfd91a655ac9c5148079",
"index.html": "935bc4be8fb9663b289d85297e180a81",
"/": "935bc4be8fb9663b289d85297e180a81",
"main.dart.js": "47fb7ab70ed3af8a496dd3d15e9548c7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "71afe1a2a1779c5f34621ee8338e48e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2df381717752cbea64b19a350680f4a3",
".git/config": "700ec84b1715b7649aef40e46cebd082",
".git/objects/0d/15d1dc8388a828db275bb444f5394e9e60dbc0": "5176f35042ed7335ab6bc15f6f281123",
".git/objects/95/b8e8f732145c0689d9ec813743b6b178b1daae": "7a33b95f70901bba2ea82e6fc2a2d2f6",
".git/objects/3e/05abb44d47b062ffec37277972d8bb2528de84": "2f1d7400e71a8ac27b2763616b3c64b4",
".git/objects/3e/8be582e0d4dfec46b77088b3f921e9cb6fdaeb": "61bdb14793104846905b56fc271897bd",
".git/objects/3e/0d038ebdcadac644b7b467a91961959401ab1e": "651abd3080be1c2e9b7c7312e3343617",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/a1344102897ebc893ef3c6374b2ed34b178297": "974510d531cf7e72d23fcdf8c2aa80ce",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/8a1d3ae7320de89b686c93f8817c5c6427baf9": "acceb444cd61add5b7049c7ad22a0cd4",
".git/objects/3c/93c73ca3585c999a7e9a12a03ac42939dcda5d": "6ff812d8ce8eca0551c5fdca6dd1d0d7",
".git/objects/67/526c99a719818ef2680602d1e0e03f13dc1e1c": "89f234665079b0073fa22eea43bf80ed",
".git/objects/67/5ac8282c3f963ecd88fdef4261edef2e3086e5": "79a1f9aaddb60d335a91b206e131220d",
".git/objects/5a/8bc5ad089fba158c865a73ccc805566b83b12a": "798a057b4bb6dbd78175a0a9a478034f",
".git/objects/5f/80a84893255a163e6363df127447920827d721": "245b39c2cdbed17888dc06f4d18e4368",
".git/objects/b5/bc94904488c8917df9f7f254cf870d1b6dcf99": "0d99ffbd553816ecbc38a21d7f221cc9",
".git/objects/ad/8218ce2b2eca804ad7aeeca20486c2a88e7bb9": "cc62c79698251f2bb5eaae30c1c76581",
".git/objects/bb/b5f8febf478d90f112a5c5c5a5a23454353e84": "68f457703646d79f876ac85514a6e399",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/21b219d577c31f705502636e576e9baba491ce": "83a8443e94b686ad1bf8835cedba17f7",
".git/objects/d1/f56cdc90eb1179ab0f9e6cb5abc7a6d3ca5423": "ac4821153c2c654f29dc1f0be8525b6d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c4b2d298a52567505766522ae83712ef76618e": "1a489a811e830e5b507f253040e31d04",
".git/objects/d6/ef3f4546ca6a8b190e0196ea5760cdce6141cf": "b1ba5594d0f2c46a07e542e9bdafad4a",
".git/objects/f3/591ce24937100d6e2c10b45d942eea66e48d6c": "d95d07043d3d9334ca4500c09f8a285e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/5b0c3ce3c9e446faca1517b1e2357d697b615f": "2e5a104e2cad29c1c0a5e217ca21302a",
".git/objects/c0/bef82c160d9b589835d0e816b81138417b6a6e": "11950f852b11e4e9531d342339a1216c",
".git/objects/c0/89aac825ee5f64e241174900fc1b7438530c6c": "30b158b482dc5b14c5ddf09e71eb608d",
".git/objects/ee/b11f3679b17ea323582f7cedd35f254e6c748c": "597ce99359adaabb7bc3221df7013f74",
".git/objects/c9/49afa52d37e6e97a608cb473c7440040dc170d": "41134b5a8ebf7a4772542a7e8773cca5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c05514c8b155b9253e43ee2acdbb9e1bd1950e": "966b5140bbdbaa8cca0f36349ca7ddc0",
".git/objects/e3/128e6d3521e7da3b86fc336a82cef67ed8dc7a": "9b838bf706460de005ed081f8ebec70f",
".git/objects/ca/002f49e6e922bd02cd99593916521da5bbb68b": "d3a45d4fc047ef52ccd54d522629e884",
".git/objects/fb/ffb72a2fcec9ec707fde7abe105d44dd502fa4": "554015af85b34fbc7c66e6664c4321dd",
".git/objects/c6/8f77e13098ebd038df5dfa74ffd9cc4a2ccad5": "7946bcb3e08b8c83005dbb44f35955a3",
".git/objects/c6/2fabbfe156384373311e78e9252d14418419db": "ecf61072cf7b31bd6d089cb71e46a787",
".git/objects/4e/bb7e44e7ad565bdee6c420b97bd59867b7e4eb": "13d51cd23d8ab20b4a3f8eb43fccb664",
".git/objects/18/e9450e01947806822b30e8ffbe6a8fe9b1a1cc": "2f8093ab3a448e481f5d0ad0870f3d4d",
".git/objects/18/0332d3914f7975147a2522f79e650e0ad32a29": "8c0afcd2b3022e518aa6149fbc6de0e8",
".git/objects/11/88289d2e32d48a3ded807a5d8f5bf0243aba0c": "25b1099d4cb6a41840eefc4e93238b2c",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/203d35ed64ec34a37095dabe3a5dedea68b284": "e1dc9a860958004a2c1a4380daea177b",
".git/objects/4c/956bbd0d3859a6fbf02dead66ee6bdcc286c34": "ccf6157c65b9b49ddc2d04779e13a922",
".git/objects/26/905421ecba0e0c3703b97119bc488eac1e69b6": "466b4602513cc5e72bfdfc4052b4926e",
".git/objects/4d/fe945a05c6b8228e31308b309762ea48317db2": "6e2fc1e80e023b32687f4dc7c1297b7e",
".git/objects/75/a5d9a7f970877907e60b745eb19bfa76a324dd": "dd2129005d4d2a45338028d23750077d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2b26bcc3de2d6a6626890c58ef7d4bf221b935": "0e32211f91df5f61962b84f92f57860e",
".git/objects/9f/6f089d67066163ebb82f756cd95cb8000c8553": "da50906140e725b3ee2dc52509fc255e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/75a311ccfe9b30950d2d53f299d12ba8d8e7cc": "f0d4e86c9df4d75ad7e1988085ae0e39",
".git/objects/5c/8e8e4566b7900f87b559c6adf787843902d605": "92e6963629d65338db231e8ff2858d2b",
".git/objects/09/4ea25423b0d4ff0094d8c0c398a683dc414ac1": "0a90e545dc1b008bd24f26a2f4a3196f",
".git/objects/09/328960e5b719c15b017f261d1d047500f16035": "4ac5dbe06ee29ff422f143a80900aab6",
".git/objects/62/3164cbd1c33aa044e7b02449e1a285ea2467ea": "ba08b1298b8b55c32a92f0cf5dd99e33",
".git/objects/62/872dbe45c3c460b3789c8fcae447427a70ee59": "4ed81c86008c53f38be814db43f640d7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/c00f6e654e525563124e43f4e969ffac54f01a": "92676a87dc4fc66a497c7a5ff2f58198",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/371d09bb97b92d6cf143eaa98f01db5597efbf": "015b4e0e79aab0932f609c627809868b",
".git/objects/30/015207d6760883704fdcb6c4a1bb52ff83f779": "2e41f180b1c3cad020988d9915278a8f",
".git/objects/5b/18348732b487ed30f8bf53d6a7809f8d2bc994": "6ad096f6c737dbb1e666ad5e3252cbfd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/eeab74bb5db2b7bd70bedb6a5da65d351f0f64": "8c1aa4d652defca81993572d768d0583",
".git/objects/39/8b2d6549eca6248078a5c4baa3236b5c1e4d6a": "dd51ef12c677d4977db1976a1040d752",
".git/objects/97/039f9116c4c38551cdfdd09e2c8e89431e542e": "a970703ba943ad1af1f0f9d00f8958e9",
".git/objects/0f/dc43b972e6713762e8f29a59b2cd2c683d40c0": "7afe12727ed56704246ab73d0af75401",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/a192fe24b45f05dfea0c43dadad897a82eeb88": "10f108af62faef9e034428c3484515ff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/75b163fe8c99fd1918f32af6619b57bb2c5061": "1373032eb35b6021eb2ae8f5c607f9f1",
".git/objects/b6/5f8527ee13186b3e0d216988c5ba75cbd2b88c": "9adf7c85e409e9c7948e56fc0856fb75",
".git/objects/d2/338c7182c51e53876028926ce4070482cb232a": "116914035ad87dde6ef327cdc3887639",
".git/objects/af/7f82809a919528b067dbc1150fcdfcf16847a2": "c7120c6ba1e1ef6a5f9fc899dcff1979",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d6f6b71ff9a35acef2cadb27ba6181ef781919": "c5fc8c6036f050186a8e5eb1dc81cd1e",
".git/objects/db/158b770a7ec2aa9aca7f529759b76cc2f52e4c": "83732c9cbc663a8f1d228343353e5d7f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/52c040420ce377c369bce584cd7309f9831e7d": "764e4e568c1ede324fd29079bda71f7f",
".git/objects/cd/939474915defa3a663635c67a69a3c05b2fe06": "61f231e39ae8765d2d2b0d155a3310b1",
".git/objects/cc/77f42f52121f4fcc59f4c20ea4b0d5991857ca": "7d3ae8c249de7a9c97cfd57a557e407c",
".git/objects/79/65e4c35cbde01d0a40c8b486b2e0fd601b8b9d": "7dcecf579b54d6bd5a3caa2aa6455911",
".git/objects/1b/a3b573424213302d79311f53ceb228a99dd74b": "9bfd887b3f65aa05b76b71f3d0948d8d",
".git/objects/48/90fd1df79216bac3905a6cd4657b087e2c1ed4": "007ddff5e17f2985699bc88cae649c89",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/4f69f96a4b6414b77ce4f6c24cf778ee0ed1ac": "d56213f313ba52182a3b1a62248a3923",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/63cdd62166384cfc9a039acd04f105d97975d3": "72b75967c31491391fec79132320b7b7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/709f5f0d18fdeeac51cda84464ddcec43f7ebb": "ea5a48c43b6b081afcad2a30b017119f",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/d8400e891ce1c3ad08e0b2e969231717cb9d3b": "c299aa2582feb0f3ec150446edd5e0d6",
".git/objects/78/5f908df8fc37ec4673a08c5d15dfe7b14480e5": "b8fb994f5397ed7cc450360f59724e29",
".git/objects/7f/228bd0ddc8a5cfb3659df8e385c6dc31348e46": "bb57af9493e6f848c2c159a8540f1557",
".git/objects/8e/f985b823c8a7ab323129648a9a3ab86c0097ba": "d91769b13814c410a0bafa956dfd4a73",
".git/objects/22/298871cc3bcae6fcb583197b9346560525c01e": "248b2d64535730d6723cc1d54e097bf3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "454227a92ba469aa4d235f5e101ac63a",
".git/logs/refs/heads/main": "fa3579cb87b69711041311a44dcf4572",
".git/logs/refs/remotes/origin/main": "f6a7f07db6de5822c60bb9fd61f4c5d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c448afd33fb856ac0a2ca4296fca4740",
".git/refs/remotes/origin/main": "c448afd33fb856ac0a2ca4296fca4740",
".git/index": "7e80a03c1834bb216fe8d6545b128359",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/profile_pic.JPG": "35d1a9578d08aa91b6d9683a0a92dc03",
"assets/AssetManifest.json": "fbd910c377853827c92f5b705a6aeb38",
"assets/NOTICES": "8c03cdc54c84406e63d427fac6754828",
"assets/BlogApp/image4.png": "4a09982e3b4c55ad54239e29e336f18b",
"assets/BlogApp/image5.png": "96aeb2a143086b18c99be2ebae1d0f89",
"assets/BlogApp/image1.png": "d17416f9e2ecc2652d7238c6e25561fa",
"assets/BlogApp/image2.png": "e83c30af04f59134dc81d192662d5dca",
"assets/BlogApp/image3.png": "6ee1da0ff7b7429aaa6474a5d8f77241",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "cbcf5d2f68081cafaf1b7a2fbabd37a7",
"assets/NewsApp/image4.png": "b4d977bb409a16086a90b7a3aff87446",
"assets/NewsApp/image5.png": "5ff0cb1bf7c7bedd987b9e8ed2e01f1c",
"assets/NewsApp/image1.png": "f28dfadc2c2d9c7fb70db01a6c42c87a",
"assets/NewsApp/image2.png": "d6fa6ef9dbe0a05580a1726651556a7a",
"assets/NewsApp/image3.png": "dbd48bed67e48328c443517591a77a50",
"assets/icons/bootstrap.svg": "6aae84abf0090324eb1daa7eef6bfdd8",
"assets/icons/figma.svg": "7b1ed9eb5e1ed2b381125cf9eb02d530",
"assets/icons/javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/icons/firebase.svg": "1a1dfb3fc45b0ecce09d117139133c02",
"assets/icons/github.svg": "ce89173e3842fb91835a9cc8605a5ecc",
"assets/icons/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/icons/edamam.svg": "b56df960a4dcbb6d3ae908162448e83b",
"assets/icons/kotlin.svg": "fab1e5c416300115bfb185e82e9f776f",
"assets/icons/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/icons/css.svg": "d3e520f8e69605c0063e1dded84afae5",
"assets/icons/newsapi.svg": "0c5680727e3fbe5a212e0ecd176308c6",
"assets/icons/php.svg": "a10d4c5729dc4c62acb88ba06d0911bb",
"assets/icons/html.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/icons/mysql.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d50181d49f18ca1eddec10d064a09628",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "302dbd9f3334ff132921b54ab4f2a69b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lottie/gmail.json": "e38499994cef79ea129dcdc56a790c5d",
"assets/lottie/whatsapp.json": "6d9dc47727f47a6a5f2d1cdcef82bdf6",
"assets/lottie/bg.json": "7dc87b189e206597efc806d253f1e6c2",
"assets/lottie/github.json": "24dec41d23206e051d06df24466854ea",
"assets/lottie/linkedin.json": "7a575334914d0788f007ece5b7148308",
"assets/Portfolio/image7.png": "0805faae191827a6846a545ebcabe819",
"assets/Portfolio/image6.png": "ca39efd6eac1cc074975009ac1a252a2",
"assets/Portfolio/image4.png": "3d09e2ca1c44c6e03c27a67ed575e56f",
"assets/Portfolio/image5.png": "310c93a2568198e95f849076f8f85442",
"assets/Portfolio/image1.png": "a8d61e7d58317d4bde792d688522f222",
"assets/Portfolio/image2.png": "e62ab50f6b07e7a5623c0e8e8cd99267",
"assets/Portfolio/image3.png": "1e155e5de1a94089f4242fca317315c8",
"assets/CRS/image6.png": "2efaa08b588a48dfc515a4bb7952184e",
"assets/CRS/image4.png": "47bbc755755ab92a024950a15248968b",
"assets/CRS/image5.png": "fbb84a1ff92de7d383b2b910a0eb3340",
"assets/CRS/image1.png": "c7d179c231606edc02f2b68d8231ff42",
"assets/CRS/image2.png": "4741773b9be58ededadc3028ad05128b",
"assets/CRS/image3.png": "5a8063f551258a350ee17f6754d4d669",
"assets/AssetManifest.bin": "1fa8000e1eeadc37729e25f08640dbf4",
"assets/FoodRecipeApp/image4.png": "cac8f6bb99dbc8c549f1f8ec86fa5e9f",
"assets/FoodRecipeApp/image1.png": "c7f450edeb25d0fc62e0a5e20e83f06a",
"assets/FoodRecipeApp/image2.png": "d5fcd99a080a8f6eaf13bd4fc63354ca",
"assets/FoodRecipeApp/image3.png": "91e6bb9148fb13051c66a2a9cb370ba7",
"assets/fonts/MaterialIcons-Regular.otf": "cabddf6544ae84a6413fd53c7b7de6c4",
"assets/assets/images/profile_pic.JPG": "35d1a9578d08aa91b6d9683a0a92dc03",
"assets/assets/icons/bootstrap.svg": "6aae84abf0090324eb1daa7eef6bfdd8",
"assets/assets/icons/figma.svg": "7b1ed9eb5e1ed2b381125cf9eb02d530",
"assets/assets/icons/javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/icons/firebase.svg": "1a1dfb3fc45b0ecce09d117139133c02",
"assets/assets/icons/github.svg": "ce89173e3842fb91835a9cc8605a5ecc",
"assets/assets/icons/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/icons/edamam.svg": "b56df960a4dcbb6d3ae908162448e83b",
"assets/assets/icons/kotlin.svg": "fab1e5c416300115bfb185e82e9f776f",
"assets/assets/icons/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/icons/css.svg": "d3e520f8e69605c0063e1dded84afae5",
"assets/assets/icons/newsapi.svg": "0c5680727e3fbe5a212e0ecd176308c6",
"assets/assets/icons/php.svg": "a10d4c5729dc4c62acb88ba06d0911bb",
"assets/assets/icons/html.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/icons/mysql.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/lottie/gmail.json": "e38499994cef79ea129dcdc56a790c5d",
"assets/assets/lottie/whatsapp.json": "6d9dc47727f47a6a5f2d1cdcef82bdf6",
"assets/assets/lottie/bg.json": "7dc87b189e206597efc806d253f1e6c2",
"assets/assets/lottie/github.json": "24dec41d23206e051d06df24466854ea",
"assets/assets/lottie/linkedin.json": "7a575334914d0788f007ece5b7148308",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
