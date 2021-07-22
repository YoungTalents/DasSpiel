'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1fa1b57d8fa731cda27642c55e436fed",
"assets/assets/images/%25C3%2584.png": "1b02f794aae1bd0b1c9a785e5d7c9c82",
"assets/assets/images/%25C3%2596.png": "7c3465bcb0c81492e33174ed3e56ad27",
"assets/assets/images/%25C3%259C.png": "af750cc848ee9e0e2519263da4d7532d",
"assets/assets/images/%25C3%259F.png": "12d251f164dc4497006254b34753a47e",
"assets/assets/images/1.png": "7474e4f7c7332e85efc9d2c46ac28d08",
"assets/assets/images/10.png": "960e7c87dda839f781279dfc4de8f10d",
"assets/assets/images/100.png": "34391ae2b88df394a8e9fc94cb87fa59",
"assets/assets/images/1000.png": "4f5b87b9a19b176ada1cd5991dc19b97",
"assets/assets/images/11.png": "62a946c9337d0a5623180aca5949333a",
"assets/assets/images/13.png": "fcf9e214c1676ff289115c872777644f",
"assets/assets/images/14.png": "4a42b7dc5edad587a314af50d91ec6a8",
"assets/assets/images/15.png": "f54000e1521f744aff968336568f21d0",
"assets/assets/images/16.png": "a8dbc7733d3b35cad2d5b6c3419b3495",
"assets/assets/images/2.png": "69b1de8cfd0200e395aaf2338ade5570",
"assets/assets/images/20.png": "a3761eaec4b7c523ec5947dfe8077a6e",
"assets/assets/images/200.png": "761813d269841b45cfb6f27eed9676a3",
"assets/assets/images/2000.png": "91ecf30f2814c567edefebacec31c5a5",
"assets/assets/images/21.png": "6ba02fd2af03095d61d0ba11fe49941a",
"assets/assets/images/22.png": "55467a133b7dd013a92fc5cb7dd10a98",
"assets/assets/images/24.png": "28aaea73a6f46361588324d3dbc85041",
"assets/assets/images/24a.png": "c8c73f6268cc6445cbe7d709242d206e",
"assets/assets/images/3.png": "af3310b43eb282cae335c0b16fabfc7e",
"assets/assets/images/30.png": "ee9c8759f42411c5ac49a44c5707508a",
"assets/assets/images/33.png": "70152c8d773a4ca9a749c04298241414",
"assets/assets/images/4.png": "d6bcc098f0e0c8d0fe638627be396563",
"assets/assets/images/40.png": "cf38a406d973485698483b776beeb2ae",
"assets/assets/images/5.png": "c3e165602454ef82a5bb011368f4d4e6",
"assets/assets/images/50.png": "de0395a8b04b53bd8a806fc94d1cff98",
"assets/assets/images/6.png": "9f29e566445a290a590fcdfb66455458",
"assets/assets/images/60.png": "ee038b4fed1a109be3d15b879748a0a0",
"assets/assets/images/7.png": "e3e97f12329681b6d5e256cb49b78458",
"assets/assets/images/8.png": "372ed28d331286b4004d682ea059be1e",
"assets/assets/images/9.png": "c1fe5cc711738c45ef2dedb58cc37ad5",
"assets/assets/images/A.png": "0a5fcd581d0cb51e979256e8dbb758c6",
"assets/assets/images/abcd.jpg": "5a26f73310dac901b3baa083b189a65b",
"assets/assets/images/B.png": "fa8ae42761f5850a51a49a8b46628466",
"assets/assets/images/Baby.png": "f40878ca026dbc26f1c9ad191e311596",
"assets/assets/images/beruehren_schrift.jpg": "6470af538b9991ba1446bad1a4e82fc7",
"assets/assets/images/beruehren_symbol.jpg": "1c5c0afb28552f9dc2127a912a0bdf36",
"assets/assets/images/bervideobild.jpg": "1ea4db078195a84d44b6ae66f1136a8e",
"assets/assets/images/Bruder.png": "bebde8a93089b36fe12d8e4eabf6291f",
"assets/assets/images/C.png": "d68dd39e9f55cae289cd47b036444dcf",
"assets/assets/images/D.png": "be7947148b371c01833d3be62bc3aba7",
"assets/assets/images/dumm.png": "9032a4eca1b447e5368d5b58f5ca492c",
"assets/assets/images/E.png": "ae4576f692bc559ce775519e7e11135c",
"assets/assets/images/ehrlich.png": "4c338e239a5a336a7c5899c9975f8724",
"assets/assets/images/eifers%25C3%25BCchtig.png": "5a6cc804ab909dbd2730c825926da151",
"assets/assets/images/Einkaufswagen.png": "3c981487e21564ca59acca149498af81",
"assets/assets/images/empfindlich.png": "5aa98de949a8634c1e6eed2d40a4e4a0",
"assets/assets/images/Euro.png": "99644a4573d2029607c42d8dc692d3a9",
"assets/assets/images/F.png": "0db13a2f7bbcf484aa1a4683b5fc4492",
"assets/assets/images/f5h.jpg": "d744397c29b7b4e6db72f1c3336f2df4",
"assets/assets/images/faul.png": "03408b6f7308dc04e9647925d365df0b",
"assets/assets/images/flei%25C3%259Fig.png": "7a871389b8eb4a71306a8493cc96fa2c",
"assets/assets/images/fr%25C3%25B6hlich.png": "bf2ef36b342adc4d0ab50e15b9b63910",
"assets/assets/images/frech.png": "a667db384e13e12f3969aa9263f599de",
"assets/assets/images/freundlich.png": "bf2ef36b342adc4d0ab50e15b9b63910",
"assets/assets/images/fzh_bild.jpg": "74e842762bb6056d9fc876e4fce5f7cf",
"assets/assets/images/fzh_schrift.jpg": "a8a4c6857c44ffe7852d839323e1232f",
"assets/assets/images/fzh_symbol.jpg": "b0cb7c502624a3a9c619676d1237ba73",
"assets/assets/images/G.png": "e7c3d3010946afb17359838dbfd6b778",
"assets/assets/images/geduldig.png": "c410953ce00e1d577b6dd424ee1da600",
"assets/assets/images/Geld.png": "89eb48d3ea7a511dbb9b069055b94d83",
"assets/assets/images/Gesch%25C3%25A4ft.png": "60ca534b76c4a6d5bf3eefa5bf3f1641",
"assets/assets/images/gl%25C3%25BCcklich.png": "e62c4eeda7c193f97a8c5bb897d94c1f",
"assets/assets/images/greifenvideobild.jpg": "2289017df94635cbc61e569e7a289c11",
"assets/assets/images/greifen_schrift.jpg": "3102c2c2ee9a3e3f26e655b0ea71f26c",
"assets/assets/images/greifen_symbol.jpg": "a6d33d6760242371f5a2351bd2bec7e0",
"assets/assets/images/Gro%25C3%259Feltern.png": "c1139a1354b0e8c697c463b8e76ab406",
"assets/assets/images/gzh_bild.jpg": "68d697f1239f65df5b8006eaeac223e2",
"assets/assets/images/gzh_schrift.jpg": "f9f852a510b361a73b5313c3ec55b5b4",
"assets/assets/images/gzh_symbol.jpg": "7a79e9cc0d56aa273c634856371fc3a1",
"assets/assets/images/H.png": "1805456639f12f3a99c32453670ea025",
"assets/assets/images/Halbschwester.png": "80bf83b518bb0459d300bfb863cdee61",
"assets/assets/images/handflaeche_schrift.jpg": "4e65fee022dd796a92ea42045a65f72d",
"assets/assets/images/handkante_bild.jpg": "5c0ffe19d3a910bd3eb8bca395c255fc",
"assets/assets/images/handkante_schrift.jpg": "a8181a284d5fa953c12fc6469f52bdc0",
"assets/assets/images/handkante_symbol.jpg": "b679d7103de0a0933bebab4c9536c4ce",
"assets/assets/images/handruecken_bild.jpg": "68fc4c65700240c58d9570284671d905",
"assets/assets/images/handruecken_schrift.jpg": "53a1a90eea5619b854ecbd6a41c92718",
"assets/assets/images/handruecken_symbol.jpg": "01840d492126038ac81d8825095cfd6e",
"assets/assets/images/hk_image101.jpg": "418fc60e58f99028701d6dc0836bbfad",
"assets/assets/images/hk_image102.jpg": "16e6cfaeed69b394b38fdfea2f2f79f1",
"assets/assets/images/hk_image103.jpg": "ca703cc16917c950b226da2c0df2f50b",
"assets/assets/images/hk_image201.jpg": "64ff158e26acd73e1a3e824e9332cd3a",
"assets/assets/images/hk_image202.jpg": "112135d22526891f4fd7bc9b6c5221b7",
"assets/assets/images/hk_image203.jpg": "eb378538c30b660ef325fbe678a7b042",
"assets/assets/images/hk_image301.jpg": "fae958db4ffa905fb48da74b83cf601c",
"assets/assets/images/hk_image302.jpg": "bd2bfe5e208c4164bcec0a43808ae898",
"assets/assets/images/hk_image303.jpg": "22d4702f8be14972c9fe6360a1758e01",
"assets/assets/images/I.png": "48677c23c638f322c18333c043eade5c",
"assets/assets/images/ic_image101.jpg": "9a4b271b16d0880c2329d9b692e0121c",
"assets/assets/images/ic_image102.jpg": "38f215f38588c837c8c4010607479f0c",
"assets/assets/images/ic_image103.jpg": "1d72feffcfd502350494d48689a9d285",
"assets/assets/images/ic_image201.jpg": "86bf73b189983db292380c224b9949c9",
"assets/assets/images/ic_image202.jpg": "4d01d67da8cf8c761c16d6723c29bf5d",
"assets/assets/images/ic_image203.jpg": "1a1ebb75e97fe591019ef9d88aeb7f19",
"assets/assets/images/ic_image301.jpg": "ff388d901ce3ce42ae963b7cef7c8a32",
"assets/assets/images/ic_image302.jpg": "dfaae65eaf628e5e46b6ae93b24cafb4",
"assets/assets/images/ic_image303.jpg": "4cea0fcb0d96a30625cf8103b349015c",
"assets/assets/images/if_image101.jpg": "be06408474d8afe116addb0c04634786",
"assets/assets/images/if_image102.jpg": "7c6af23cdee474dd0ab205159cc76eb7",
"assets/assets/images/if_image103.jpg": "66e9bd09c8807849dcb318e398d7f4f3",
"assets/assets/images/if_image201.jpg": "87ec9dc601d27ae2c0baf2f3a998d154",
"assets/assets/images/if_image202.jpg": "884d044e904426195fc1eca47be596c3",
"assets/assets/images/if_image203.jpg": "bf503a98ac19241da3170fae00dc1e33",
"assets/assets/images/if_image301.jpg": "502624dc6641efe611cb36b831235f5d",
"assets/assets/images/if_image302.jpg": "8d8b82552420ad3f83f30dffc5efa1b9",
"assets/assets/images/if_image303.jpg": "400a220edf60b3ac9d6abcf0c9f6c7b1",
"assets/assets/images/ig1_image101.jpg": "07c030ebd782850cbbbc57e054779131",
"assets/assets/images/ig1_image102.jpg": "82753dade67778e0e58ada62f845238f",
"assets/assets/images/ig1_image103.jpg": "e3d64f7af1362442113af9581738cec0",
"assets/assets/images/ig1_image201.jpg": "998e4ab5f4bfe813992b374027613854",
"assets/assets/images/ig1_image202.jpg": "fcbba0cff2b17d7b22ec0ac5d1e3985f",
"assets/assets/images/ig1_image203.jpg": "462205acd985b0c54ee31097d5c32f77",
"assets/assets/images/ig1_image301.jpg": "93e899bcfc556b864c9688a1541b0f9f",
"assets/assets/images/ig1_image302.jpg": "0946af438f913b754be7c0135e3d9134",
"assets/assets/images/ig1_image303.jpg": "92d13b014bfbb2d9c807ce821eaa217d",
"assets/assets/images/ig2_image101.jpg": "201a943f95b325155906a743c24f1dc2",
"assets/assets/images/ig2_image102.jpg": "35da75646054655d20ea6e05addcc2af",
"assets/assets/images/ig2_image103.jpg": "e078c2b59fd0432b3c776c7f5d414e0c",
"assets/assets/images/ig2_image201.jpg": "5e56860bd282f25f28c4954b3aff3ae0",
"assets/assets/images/ig2_image202.jpg": "9059fbf7c29d6db8fc38a6f3ae64d6fc",
"assets/assets/images/ig2_image203.jpg": "96c21078c01a490c56e1e98ff8c74741",
"assets/assets/images/ig2_image301.jpg": "0b9e0ec4ae0c04d9fcb2befd93305056",
"assets/assets/images/ig2_image302.jpg": "0d5d70829c83ef4165a471429872a6af",
"assets/assets/images/ig2_image303.jpg": "958cd76ff56b8d69395f0560d236fceb",
"assets/assets/images/J.png": "c75d17e03d4016bad9932b9867084f38",
"assets/assets/images/K.png": "a23d7e2ed41ddce8d5e74091cffabae8",
"assets/assets/images/Kasse.png": "de8cbf0e61d5f27401dbea486c3b3c5e",
"assets/assets/images/Kind.png": "40018f31528c5fa6ec6909e9bfd077eb",
"assets/assets/images/Kinder.png": "faf4590ea1d777e12b3a00e6ff34fce5",
"assets/assets/images/klug.png": "37b880abc6a735265f407dfe8243ddf7",
"assets/assets/images/Kunde.png": "c411de22b622795a47447c9c34443393",
"assets/assets/images/L.png": "99903b57fd01eaa9f2cddf8c003025c4",
"assets/assets/images/Laden.png": "92bc0f1481760948198c51381e30f898",
"assets/assets/images/Lebensmittel.png": "bbb973ea45c25d1c3961758bb337e0ee",
"assets/assets/images/lieb.png": "b652c218aea036f746724734732fe074",
"assets/assets/images/M.png": "be9ca8289b1997b61b7244da00d4c85b",
"assets/assets/images/Mama.png": "fa5fe2a6bcabefcd9847b6b7d79a8950",
"assets/assets/images/Markt.png": "cfe14f5eb35849ef2d00fb3c30b46507",
"assets/assets/images/N.png": "85ec495707ae6d14d5b666ff09a73175",
"assets/assets/images/nerv%25C3%25B6s.png": "d7a3c194207958cc0348d3cc0d5c93db",
"assets/assets/images/neugierig.png": "926f842e24790dfece248c7fb131d6c1",
"assets/assets/images/niedlich.png": "39767b84ac8c1b5b145998b2deb25ed7",
"assets/assets/images/O.png": "b529108420423535469259c841722dd9",
"assets/assets/images/of1_image101.jpg": "a7156c4040956df5b2efc9739dd89e20",
"assets/assets/images/of1_image102.jpg": "35bb88ab91bb6f7dabd23c66e334d1f5",
"assets/assets/images/of1_image103.jpg": "beb2d04b7a1ac9a165c6c2a500475c80",
"assets/assets/images/of1_image201.jpg": "541391085182eeb9c78c7f57355f8db5",
"assets/assets/images/of1_image202.jpg": "76796bd9fafc4dda146b731617863939",
"assets/assets/images/of1_image203.jpg": "161c5d20bccb0b0418f52377443fe739",
"assets/assets/images/of1_image301.jpg": "d544caab71141671dd05af71ca940594",
"assets/assets/images/of1_image302.jpg": "917bd3cf23b51fa677ba008af14daf2e",
"assets/assets/images/of1_image303.jpg": "e8164083b955ac1911c9f27cc788288c",
"assets/assets/images/of2_image101.jpg": "4a3b3eccbb85c582bcff1668d05dcfaa",
"assets/assets/images/of2_image102.jpg": "029962f8571dcfd8dd03d7ff9e180b1d",
"assets/assets/images/of2_image103.jpg": "8dec3d36d4287c9771a0499e390cac52",
"assets/assets/images/of2_image201.jpg": "74376591ce969c0fbb792e1a5dc14398",
"assets/assets/images/of2_image202.jpg": "cd6d668badaabc8df84a9a979bcc676e",
"assets/assets/images/of2_image203.jpg": "e77cb50cc35729df238e208a512bc35e",
"assets/assets/images/of2_image301.jpg": "52076e296d8bc8070a3a4ae8b29204e6",
"assets/assets/images/of2_image302.jpg": "dce90b07d68f4a472c3924992bfbe182",
"assets/assets/images/of2_image303.jpg": "65eb0fcfaf0088a28c979096a9ef793b",
"assets/assets/images/Opa.png": "d86346afa954af70a88141b3f66be688",
"assets/assets/images/ozh_bild.jpg": "30552a67690766b3d6a97ffd08e5cc44",
"assets/assets/images/ozh_schrift.jpg": "9cde18f5c63eb5c0644f8575ca32e7ed",
"assets/assets/images/ozh_symbol.jpg": "cf1eea0ec78fab5ee42c7068c7fcd841",
"assets/assets/images/P.png": "bdc100de76931d3469a5dfda2e1805b0",
"assets/assets/images/Papa.png": "28d56c0a42f3a62ca85ab285501ecb72",
"assets/assets/images/peinlich.png": "c64d737c14ad1851faed7946764d3f0a",
"assets/assets/images/Preis.png": "f87cd2a2c52ec0daf93ab17464e86c5c",
"assets/assets/images/punkte.jpg": "4ca1ee97381e7695838aa57a8cfb72e3",
"assets/assets/images/Q.png": "adf0a04a79303cb02305c54cd6519957",
"assets/assets/images/R.png": "e9d86f07b7eb915bef9277d1cfe43502",
"assets/assets/images/Rechnung.png": "af05add973e4be043e100c7615599c32",
"assets/assets/images/reibenvideobild.jpg": "1c19aa7ec07474283ae3db551562ffd0",
"assets/assets/images/reiben_schrift.jpg": "56f219b61e076baa3784041d5c06be77",
"assets/assets/images/reiben_symbol.jpg": "5e8047caeecbc936a55f85b93aef0428",
"assets/assets/images/S.png": "91443148c00d3cbd5bf49cba846b9a68",
"assets/assets/images/sch%25C3%25BCchtern.png": "d3bb8c80fe93804158ffd496935408be",
"assets/assets/images/Sohn.png": "997a5e704e5f90ebff1ad0fda9910608",
"assets/assets/images/Stiefbruder.png": "3869584dee819b6d4cb910bb38b19ffd",
"assets/assets/images/stolz.png": "e6993e78a9b0e71f907f49fa985dc4e6",
"assets/assets/images/stur.png": "2cef9fc148c9990936fdb76ecc29ab38",
"assets/assets/images/T.png": "e8afc4a13809bb300add7caab5f1cf33",
"assets/assets/images/U.png": "afccaa44e131c25fab7bb73cf8ed8c30",
"assets/assets/images/V.png": "9cb2f94583b5c90bb20dbf2e8c06e64a",
"assets/assets/images/verliebt.png": "8ab2ea44d0769f4e83b3e7cf6883ec2b",
"assets/assets/images/W.png": "8c537faf1e6bfa0bb18f599d55e3861f",
"assets/assets/images/X.png": "e94590d957127ca724c2b29b1e08490f",
"assets/assets/images/Y.png": "0d127f51a50e7bb6fd378cb8f04c2411",
"assets/assets/images/Z.png": "20277eef47ebaec4425a58d8d5fe7730",
"assets/assets/images/zahlen.jpg": "8f92ec86d6a689cf72054bf170920f03",
"assets/assets/images/Zwilling.png": "7e36d035aeac59bc83fad742dd3d6a72",
"assets/assets/videos/%25C3%259F.mp4": "9705ea4f70017c9743796fe0106fb4a0",
"assets/assets/videos/%25C3%25A4.mp4": "b16c0b301d6c35e52f5fede5123e67ef",
"assets/assets/videos/%25C3%25B6.mp4": "371aacc5e9e53128d69e7dd90901e657",
"assets/assets/videos/%25C3%25BC.mp4": "d345270484d522a4986011484e6429c4",
"assets/assets/videos/1.452.345.mp4": "2e4cafec4dc495e6a840acdf38250e34",
"assets/assets/videos/1.mp4": "acfa9046e3712706b2079628262af2fc",
"assets/assets/videos/10.mp4": "7e22612b0e4d6447dfb24c2d0e1e4fe6",
"assets/assets/videos/100.mp4": "6e637b69cbbad28e39e0990b24df5b29",
"assets/assets/videos/1000.mp4": "5bc9ca08be60f8198ed9d708e34c85ee",
"assets/assets/videos/11.mp4": "1268fa6d506f78f0b674cab78d17ada1",
"assets/assets/videos/12.mp4": "c15401fbadb9c61309a81352800b0c3f",
"assets/assets/videos/13.mp4": "9c5eec521d9bbbb37a7db1f035cc957d",
"assets/assets/videos/14.mp4": "dee072c02e2245a66e637f68b2bd395e",
"assets/assets/videos/15.mp4": "2f07e0ac35c7cd529f2834b54b50242c",
"assets/assets/videos/16.mp4": "9edf93af96305173cdcae85035f250bd",
"assets/assets/videos/2.mp4": "2b77c702173499e83d490a584ced6028",
"assets/assets/videos/20.mp4": "31078c6ca481eb19c322ddf358d5f488",
"assets/assets/videos/200.mp4": "3065bd53e561811bf8abaac8ed05375d",
"assets/assets/videos/2000.mp4": "188fa8a3291e847dba0d9610206be548",
"assets/assets/videos/21.mp4": "6474b7e592077456dda157508f7006dd",
"assets/assets/videos/22.mp4": "da100d920b7ee1e4489e0ca96cbdff5d",
"assets/assets/videos/24.mp4": "ec7de5403ceadea75673ebe3fd447352",
"assets/assets/videos/3.mp4": "b8b29be22bf1ae3e407f0c6bec7def06",
"assets/assets/videos/30.mp4": "3f02192e88db04f87a3b6de0f84a8a50",
"assets/assets/videos/33.mp4": "daa1151ad9b215f8a7e45d20f91dfcf4",
"assets/assets/videos/4.mp4": "42e2f454f6a105b39780ba6022c1c277",
"assets/assets/videos/40.mp4": "736cddcc7c59849f652c9085c45fcfdb",
"assets/assets/videos/5.mp4": "f0a703a9b52159c8d4b3e387c5746c28",
"assets/assets/videos/50.mp4": "1ba7f90f43f2d6e24eb2d7d74fd8ad82",
"assets/assets/videos/6.mp4": "02487ad7ab96a965fac2f357d47c4864",
"assets/assets/videos/60.mp4": "415d45e4071f2d827daed0e02458c6d2",
"assets/assets/videos/7.mp4": "7af3d7956851c7133e41edab13f6cc2d",
"assets/assets/videos/8.mp4": "73169ad6c207704246834f6e300f437b",
"assets/assets/videos/9.mp4": "5371ef28bf8d54ac91a28499123b4bef",
"assets/assets/videos/A-37.m4v": "52f4b38164e6ab266ebde2991f60465e",
"assets/assets/videos/a.m4v": "52f4b38164e6ab266ebde2991f60465e",
"assets/assets/videos/a.mp4": "ce7e2a1bcfb73d2baebf17442d956025",
"assets/assets/videos/aldi.mp4": "85f18afe6d78d6f4945635af8488d9bd",
"assets/assets/videos/auto.mp4": "6858208b9f11d930892fcd0026700c8a",
"assets/assets/videos/autogif.mp4": "a6fcd743a71aafb7b2d36cabb884c8d0",
"assets/assets/videos/b.mp4": "e840a4f27e57493b90c370e7057003e5",
"assets/assets/videos/baby.mp4": "6b59b93b86ffb59c58dc09fe3759681f",
"assets/assets/videos/baum.mp4": "1199e15d94afbc6964fec277315343a8",
"assets/assets/videos/baumgif.mp4": "788d4dc766f9472f1e17d81d34eef41c",
"assets/assets/videos/Bruder.mp4": "9cadf8075a7c4642748b3858bfc457fa",
"assets/assets/videos/c.mp4": "5936660860bef5d53e5a04f5859a7e23",
"assets/assets/videos/cent.mp4": "9aa4ec2452c81f7c080306c0593bba4b",
"assets/assets/videos/d.mp4": "035c7966527538917176c46c75f7e522",
"assets/assets/videos/deprimiert.mp4": "705af91a3a8e7a3e80be19b9073cf793",
"assets/assets/videos/dumm.mp4": "df8c1ed982cea8f665c5cb11e666b808",
"assets/assets/videos/e.mp4": "3ae74baf3f8d6896cec2c3c4cc5a4122",
"assets/assets/videos/ehrlich.mp4": "fca6ac08e0a63beec6aa8cfd62e4f9cd",
"assets/assets/videos/eifers%25C3%25BCchtig.mp4": "ba26263e0cb8b9ce16fd291936b018cd",
"assets/assets/videos/einkaufswagen.mp4": "8ad53554c24216dbb1fcf897584295aa",
"assets/assets/videos/einzelkind.mp4": "932db4733f29f8feec53022a41403a0d",
"assets/assets/videos/eltern.mp4": "4f33b00ade7095bd3c003c4c3fa38f42",
"assets/assets/videos/empfindlich.mp4": "fe8b53daa92aca7ed59ca84784275ebd",
"assets/assets/videos/enkel.mp4": "55d451d70934a495de248bf736ba9b2b",
"assets/assets/videos/euro.mp4": "0c3c2fd953dde2e1a870089cb5e9b775",
"assets/assets/videos/f.mp4": "fc1164633229018f34ca5d2a97f2d6c6",
"assets/assets/videos/familie.mp4": "e0c3aaa7d7ede71602b1d931f2b6641c",
"assets/assets/videos/faul.mp4": "64d80a1dafa6125878cf1366e58e9e35",
"assets/assets/videos/flei%25C3%259Fig.mp4": "815031433807dbc2b6ecd8730aa2b7b1",
"assets/assets/videos/fr%25C3%25B6hlich.mp4": "3fd34cade7d0034453bfc85357ee19f5",
"assets/assets/videos/frech.mp4": "a0f3a0c987fda90da745df67f9e121e4",
"assets/assets/videos/freundlich.mp4": "b7535d35947619889bed7cd560e2d847",
"assets/assets/videos/g.mp4": "c18ad90ab237f650874bbfd9f7152c4a",
"assets/assets/videos/geduldig.mp4": "f91af999c38af12345193dced941ea0d",
"assets/assets/videos/geld.mp4": "81d136a28921279f5dd0130ca1cc993e",
"assets/assets/videos/gemein.mp4": "95c025acabc2a76a83d92588440a0237",
"assets/assets/videos/Gesch%25C3%25A4ft.mp4": "0a8dd24bfe3a2cd30f543ba2cee326b7",
"assets/assets/videos/geschwister.mp4": "db559e3918087a4646fb069661ae1fa2",
"assets/assets/videos/gl%25C3%25BCcklich.mp4": "79446df63f91d8415062718b7253fffd",
"assets/assets/videos/h.mp4": "b9ff72dae5575b1c519f6e6ba95c4af4",
"assets/assets/videos/halbschwester.mp4": "1b9e72bd70dbdf64f7049c8ea9e7bb37",
"assets/assets/videos/i.mp4": "8337a4c58b8775120102c6f91e04e8c1",
"assets/assets/videos/j.mp4": "9122df8fc37b798792e28afbfb0a1d70",
"assets/assets/videos/k.mp4": "ed9d980bddcfc58fad009f1dc6f05d37",
"assets/assets/videos/kaffee.mp4": "a9b0b41ccc6ac8575c50e5e67b680622",
"assets/assets/videos/kaffeegif.mp4": "91c6880c640f9e4b662367f1ccffe0d2",
"assets/assets/videos/kasse.mp4": "288fbf9f4b5432b06a70941aecd3ff5c",
"assets/assets/videos/kind.mp4": "a17649b11ad01f1ec5d94c042db4a126",
"assets/assets/videos/kinder.mp4": "133663647d649ca6d33f9a07db4e0597",
"assets/assets/videos/klug.mp4": "1fd7558437937046fd1383bbefc8353f",
"assets/assets/videos/kunde.mp4": "a2fca0200bae692dc3b5567eeca56799",
"assets/assets/videos/l.mp4": "eb8abc374a018f45380a0ed8192d4623",
"assets/assets/videos/Laden.mp4": "9b3c7dd57683cbb7fa794f29f339ee68",
"assets/assets/videos/lebensmittel.mp4": "4bad44c47e4ab2d888976593f32a9120",
"assets/assets/videos/lidl.mp4": "ed3bd70ad59886d1630fcb90f092e829",
"assets/assets/videos/lieb.mp4": "87640a4e94f3c106128c7766b55bee84",
"assets/assets/videos/m.mp4": "bcc5ec92777a402476b107dbabca6047",
"assets/assets/videos/mama.mp4": "e7c18f5fa5616e38c0e08a7f7cac5fc4",
"assets/assets/videos/Markt.mp4": "fd6df8b3790bb05f460b6be2c45049cb",
"assets/assets/videos/muenze.mp4": "9c106222245ef6d5ad19643ec8fea535",
"assets/assets/videos/n.mp4": "4e9f108837d60295226cb61da47dfae2",
"assets/assets/videos/naiv.mp4": "09b7f686b5636f3a101bad1c4993facd",
"assets/assets/videos/nervoes.mp4": "3dc348a9091fbc7ebb00f1430cd749b7",
"assets/assets/videos/neugierig.mp4": "424617b87871790e0728f286913dc6a4",
"assets/assets/videos/niedlich.mp4": "3f0cbf8ea4ef347c4ef9eeeb83516d74",
"assets/assets/videos/o.mp4": "05adc8c0c67e1bebf731cbc4e7eda0ff",
"assets/assets/videos/onkel.mp4": "ec0dacdb01751068ec22dfead625fcc1",
"assets/assets/videos/p.mp4": "038d10a806c1c3533203f295f1c4f7fb",
"assets/assets/videos/papa.mp4": "e04695a674412f2039cf3ed9aa20fb1b",
"assets/assets/videos/peinlich.mp4": "0e83d23f8fc8c33f79d242ee8b4485b2",
"assets/assets/videos/Preis.mp4": "55dd62eeb5cd08126b8de5af4996b6d8",
"assets/assets/videos/q.mp4": "d214722e1ff18bdc38bb0961b54c1785",
"assets/assets/videos/r.mp4": "98dfe782b100208741d5dc54048c9ae8",
"assets/assets/videos/Rechnung.mp4": "c21878031fddc3b80e9e01dff89a2d88",
"assets/assets/videos/rechnungsbeleg.mp4": "4550effa4a39cb9a61888ac1b0156e88",
"assets/assets/videos/s.mp4": "131246bc5cc26d2c8a5c415675f10120",
"assets/assets/videos/sch%25C3%25BCchtern.mp4": "993e6063f5538217fcc257da2ce9b7ef",
"assets/assets/videos/sohn.mp4": "de52ff8c2245d5fcd6b0123007e56833",
"assets/assets/videos/stiefbruder.mp4": "436cf11d7f9c906d1480f4607dbdac2b",
"assets/assets/videos/stolz.mp4": "bcf7ca514174aad370c988c8535a3c1b",
"assets/assets/videos/stur.mp4": "b87f45ffaede8b658da945f1c1a36674",
"assets/assets/videos/supermarkt.mp4": "108ef754e1ae96f580fa3bbcdd7ca77a",
"assets/assets/videos/t.mp4": "7fcd7ff7309a9e92370eb0e5942b1e35",
"assets/assets/videos/u.mp4": "e7998f526e9b73ae4bd26b9e415b4803",
"assets/assets/videos/v.mp4": "b0b97a5445957ae5752e67c99851ff60",
"assets/assets/videos/verliebt.mp4": "85279d987b11205abf64a4be80557132",
"assets/assets/videos/w.mp4": "6e4aa05ab5ed2aa03c6c404e25267614",
"assets/assets/videos/waren.mp4": "b2787a545a8301a5d62894ba920e7871",
"assets/assets/videos/x.mp4": "8d2ef9a96dc9732fd828948ffbb1a8f0",
"assets/assets/videos/y.mp4": "a0304f3d6bf904234bffa4e78c85d622",
"assets/assets/videos/z.mp4": "724fe82c7510cd11d032f843d8c580fd",
"assets/assets/videos/zufrieden.mp4": "3968c70aa2a09b3502b79e7f250497b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d333d430cb92a737e32842cfe90f6bbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.ico": "ecf2690ebf53fe8c0c84c37cec03f371",
"favicon.png": "222ef4f79ddbd08c77e78f0c64d8a3d4",
"icons/and192.png": "bca72efe77fdfae8d95d1ce8806337c1",
"icons/and512.png": "5c5087f58252d57a4cbad1cc83592100",
"icons/apple-touch-icon.png": "66d13564b3238353c472b575a16ae5c0",
"icons/favicon-16x16.png": "a1ca60fca5df32d723325e393e983a2d",
"icons/favicon-32x32.png": "9803fef3e8b122b41114e2d1c6e73c75",
"icons/favicon.ico": "ecf2690ebf53fe8c0c84c37cec03f371",
"icons/Icon-192.png": "43680928b18186d6a2dfd87ac35e766c",
"icons/Icon-512.png": "4bddb5191eeef160e0287fac19f17f21",
"index.html": "a0ec3cbf97c3664cf09129593ebb1150",
"/": "a0ec3cbf97c3664cf09129593ebb1150",
"main.dart.js": "8cf5dc0d57909eb8a7bbc291361e11c3",
"manifest.json": "442d40e79513a7fea1a0f010604cbb5c",
"site.webmanifest": "e7a5ed67c81cf88bb37cf2d944260318",
"version.json": "ebb9fc5160312a5eed5461193a7d699f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
