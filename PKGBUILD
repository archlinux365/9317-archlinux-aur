# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Swift Geek <swiftgeek ɐt gmail døt com>

pkgbase='firefox-nightly-i18n'
pkgname=("$pkgbase-all")
_pkgver=96.0a1
pkgver=96.0a1.20211102094141+hb11349b0406f
pkgrel=1
pkgdesc="Language pack for Firefox Nightly"
arch=('any')
license=(MPL GPL LGPL)
url="https://www.mozilla.org/firefox/"
provides=("$pkgbase=$pkgver-$pkgrel")
depends=("firefox-nightly>=$pkgver")

_languages=(
  'ach    "Acholi"'
  'af     "Afrikaans"'
  'an     "Aragonese"'
  'ar     "Arabic"'
  'ast    "Asturian"'
  'az     "Azerbaijani"'
  'be     "Belarusian"'
  'bg     "Bulgarian"'
  'bn     "Bengali"'
  'br     "Breton"'
  'bs     "Bosnian"'
  'ca-valencia "Catalan (Valencian)"'
  'ca     "Catalan"'
  'cak    "Maya Kaqchikel"'
  'cs     "Czech"'
  'cy     "Welsh"'
  'da     "Danish"'
  'de     "German"'
  'dsb    "Lower Sorbian"'
  'el     "Greek"'
  'en-CA  "English (Canadian)"'
  'en-GB  "English (British)"'
  'eo     "Esperanto"'
  'es-AR  "Spanish (Argentina)"'
  'es-CL  "Spanish (Chile)"'
  'es-ES  "Spanish (Spain)"'
  'es-MX  "Spanish (Mexico)"'
  'et     "Estonian"'
  'eu     "Basque"'
  'fa     "Persian"'
  'ff     "Fulah"'
  'fi     "Finnish"'
  'fr     "French"'
  'fy-NL  "Frisian"'
  'ga-IE  "Irish"'
  'gd     "Gaelic (Scotland)"'
  'gl     "Galician"'
  'gn     "Guarani"'
  'gu-IN  "Gujarati (India)"'
  'he     "Hebrew"'
  'hi-IN  "Hindi (India)"'
  'hr     "Croatian"'
  'hsb    "Upper Sorbian"'
  'hu     "Hungarian"'
  'hy-AM  "Armenian"'
  'ia     "Interlingua"'
  'id     "Indonesian"'
  'is     "Icelandic"'
  'it     "Italian"'
  'ja     "Japanese"'
  'ka     "Georgian"'
  'kab    "Kabyle"'
  'kk     "Kazakh"'
  'km     "Khmer"'
  'kn     "Kannada"'
  'ko     "Korean"'
  'lij    "Ligurian"'
  'lt     "Lithuanian"'
  'lv     "Latvian"'
  'mk     "Macedonian"'
  'mr     "Marathi"'
  'ms     "Malay"'
  'my     "Burmese"'
  'nb-NO  "Norwegian (Bokmål)"'
  'ne-NP  "Nepali"'
  'nl     "Dutch"'
  'nn-NO  "Norwegian (Nynorsk)"'
  'oc     "Occitan"'
  'pa-IN  "Punjabi (India)"'
  'pl     "Polish"'
  'pt-BR  "Portuguese (Brazilian)"'
  'pt-PT  "Portuguese (Portugal)"'
  'rm     "Romansh"'
  'ro     "Romanian"'
  'ru     "Russian"'
  'si     "Sinhala"'
  'sk     "Slovak"'
  'sl     "Slovenian"'
  'son    "Songhai"'
  'sq     "Albanian"'
  'sr     "Serbian"'
  'sv-SE  "Swedish"'
  'ta     "Tamil"'
  'te     "Telugu"'
  'th     "Thai"'
  'tl     "Tagalog"'
  'tr     "Turkish"'
  'trs    "Chicahuaxtla Triqui"'
  'uk     "Ukrainian"'
  'ur     "Urdu"'
  'uz     "Uzbek"'
  'vi     "Vietnamese"'
  'xh     "Xhosa"'
  'zh-CN  "Chinese (Simplified)"'
  'zh-TW  "Chinese (Traditional)"'
)

pkgname=()
source=()
_url=https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/linux-x86_64/xpi

for _lang in "${_languages[@]}"; do
  _locale=${_lang%% *}
  _pkgname=firefox-nightly-i18n-${_locale,,}

  pkgname+=($_pkgname)
  source+=("firefox-i18n-$_pkgver-$_locale.xpi::$_url/firefox-$_pkgver.$_locale.langpack.xpi")
  eval "package_$_pkgname() {
    _package $_lang
  }"
done

# Don't extract anything
noextract=("${source[@]%%::*}")

package_firefox-beta-i18n-all() {
  pkgdesc="All language packs for Firefox Beta (meta)"
  depends=("${_all_depends[@]}")
}

_package() {
  pkgdesc="${_languages["$1"]} language pack for Firefox Beta"
  provides+=("firefox-i18n-$_as_lower" "firefox-developer-edition-i18n-$_as_lower")
  conflicts=("firefox-i18n-$_as_lower" "firefox-developer-edition-i18n-$_as_lower")

  install -Dm644 "firefox-i18n-$_pkgver-$1.xpi" \
      "$pkgdir/opt/firefox-nightly/browser/extensions/langpack-$1@firefox.mozilla.org.xpi"
}

sha256sums=('138cc31d94ddd05b3a03472949c2ece9c3106045a970e988127c5d88218110bf'
            'ee13066dabf9015301124514432609b440da1ebb5a7d63a191877291a53a2e1c'
            'c58be41feeb3170a05838c032ec8030fd95b5466684ed2512d8f9dcb5c44c803'
            '6d97dd844b2a6c4880bad108671fdd7c241a18b59869ee0602075da797427cf9'
            'c6c65aed6b5c33a7e8b3f0f1485939bfbe99fc3501d6522d0b058f7fd4136973'
            '56568714e862f0d9a9d5a8a44d3b4b0d677960f9dfccebbe9872658c85e18e43'
            '7a63bcb8442eb69798b40fd4623a67536c1cbd1321ea73e1237cdd4313b1d615'
            '1d28be88ac71796290ab2126bb8e0d1dea27bd52fe313f043350a72bf71b55e9'
            'b54e30ae744a6fe68568ef03cd7280ab062a29211cc84175d93110ba8183c353'
            'e585b9bdb37091e0a7940fc77063f524f355bb1f414012d8e9d929d8cb903219'
            'cce01feb18533a62709de07f05adc9a16bc10ebc422bb690408360c821bb82de'
            'f44d05f97504f35b740b8d3648cd21897107d2472065ac13cec2d7911ad427c5'
            '2b510adfd8f011e8e0f61cd6e15df814900e229a9b328788e1d145b48fc033f0'
            'c734702851c71898d62cb35e89efc762d4d4bcf6d129af07cb677a56200bdb4e'
            '92d3e5514b1afb7da104f7dffe78143a5246a97d391383e1e9ef0b422093e2dd'
            'd700003bf2a78f523d0b8d2a24fe19ada96d53b0a1cba180241e35d580741f9e'
            '675779d41a5b071fd36657f612bb1063c460bbfe89f87fd4f26d4d59a3c3fe63'
            '066cc2ef800adda252a5839d0cde616a33f71394d00bb1ae1d03df3a4afcff7d'
            'c6bd3264f563cd07def097562e4f0c5840fd9c9e6175c88981b0683ac688f2fe'
            '7e8c18792da8117df3b024be4c491941b5d57c3b737bc7db7088b3503ed48888'
            '84cbab7cc54663e2688068ede580c5a933f6cd2d35d3c650514468ae971d2a86'
            '201f4c5803a2eee057e6b140957103a017c029a624131a4b8faf145e2289ab2b'
            '0e472e11651a3b70a6f460b7dc2a879f382d0b8c7249e32b11b807e5167801a5'
            '185295d990d96c4739c473cbfb45a52ba71e2d690ad1a7c039efadd1a8e1df63'
            '102174b69c6906226b06d36b1005b2d96d0b3c2be20c37ae9c687edab0ea3bcb'
            '38934562fea354370750c7a476f52918a917afa22fcd926581a025ce17eff841'
            'd6de0dc924f4ad1ff50561cd0c92675cd5f652a0c3584a150e827c1fc07707e6'
            '462008c13e9c2fd4838691dab974b3e30319952e839e3d4f1e4547edeed85652'
            'f4cffc3615a015a33ecc85ecd3bd4b09be3b58ca774bde2dee6459576d051dd1'
            '5b2f7f3f300d1ed28f839ae39ff9759edf3d28363c590d0742012d5c4fdcb78d'
            '4b280495fb0388cf365afe8915dfe0edb40f37dc3b7230a6819a4eed217125f3'
            'cbec485528ae4fcffb27339e306809720ba9b5aeb62c3f1b6bea1b88b7d6fabf'
            'a433fdaafadb18bcf3239968ac8f5965b02aa3614349ff04135013428cd41428'
            'eadce55174aaa0cb4e47a721dbfb50570fd3fa897e6034bc895addef79d0baed'
            'dd3758b91cb28c5d027d189354aabd49b32045c09773bd899f4a0f18fd5be1ca'
            '9f3df224bc700d570fed1fc27665053512b303f29f247e4a73c6b3d85685ae84'
            'b464ba8bb9485a276bcda4e9d7fbabf30f52cff22d7a10eefcec5afcc65d20d3'
            '4ccfc4b8640b71d7ab6feb79648685839992d688c62380362a0be8bf4f697006'
            'bfc959c41fcef4e27e66cc5212f78ff61832d65fd5fc7b7aa68102267003c7c5'
            '556980530293a45c73c38d27ba0f0cc849c28f615b45075f324c9d745bd1ced0'
            '9d0a7ce76586f8b38bdd1523d9049f081e054f528265c9c3bf277a029633e2a9'
            '664fe8a4dcfdff5a22d8317ca95812e8a9473a32e47eff9c4b07e0034cb54c35'
            'd88cb741eeaf267d00809531a473b82d49a1ee59dbd788ef0d719b0398dbd687'
            '8d6d003db47beccf1b5e327f8c08ab133896839cda47e7d83b47993c117ebffb'
            '29c69e98b010baf8e2e4c24e859c92e2aaf264b3a536b09d89b7d087ce101dc2'
            'f35d264d15af991252a857098e88636dac4b72f3a795d920ac6354256481fd46'
            'dc0190ea8e52747e0164d8bbcf8c4cfde2953892f79b280d18818549d64c4773'
            '34658362157aef613fceb8bfd0407504a86081835e4bc5d2451b4e893749db6a'
            '401099a340dd938f57bc0db85c79c4a744b21cfc8baaca566b3a7d33d0803f78'
            '937538950173edb8ebd3378dd98e9cfc75e7670e655c34874569847e17b3f301'
            'b3dc97f629e4ad29870a2051c794634fc80f878c02da6cc17abdd8e214c4894b'
            '6506ad3789988009d58ffc1b86d6c500cbdc4e20a2399617891ae36acf879cb1'
            '52c1d61163dc5b717da6bb84d7ca1e48ec29d4f18e6155800f5be0ef88324c63'
            'cf76dedb1c9161ab09fc16b9ca563e07f2e7e01fbaedab3ecf5cbe3f3aa30f40'
            'e53c57e3f4e229f4350b3084cff859f88c7b9d12d309e52fafcb748fd5dadb6f'
            '523b8700c55a4aa7b2fa88999b13a9af9821d94b3fb110d1a9d9419df214ec1b'
            '33d92d16a960e6ba9403398520eeccda03136028bb0b36056006b84bb9949bce'
            '6760abbb7ee2f5bbf8ff8894432295287a16f337e70f9d8ffddfedf4ab00d587'
            '7bb0b25daa592276359c9f181e67b5ec0cbbbfe9765e29385b0c38e9c037209e'
            '7d36a08920378e4e3ca245cf4c7934c13c1f055cf5322cf8c8222ca49341cda4'
            'd51f4913e71b3b25599e073e8806205dbb6e1e76c59027d6034b0bef2a13d541'
            '07b5c50d79a6b7e775a44159bbdc1bbc4ee041cedba43955862be8c32e7945d2'
            '6b6286819202f6d0b3c0db879e043bfe32e7e41928201ad0294de2c516366d57'
            '3ffe027040cd6c5d56aa6963b888ba47b8e1c25fcbf6c4581601cfd39028eff5'
            '85e1fc713275a0974bada65340069f77aabff70bd4afb38fd5679659378e22e5'
            'c2552a08bf1014c683382d3652c262dddb5330d8fd74dcc80df7515a7e0bc810'
            'ef282ada8fa92495d6cf87ff6c16698ebb1817265c984f10e7040ab2111d8083'
            'a2f3cf932404ebe3a1577a2ac0c18cb511d0fad4ca730c069dff367b291e6a29'
            '7952310e5e42512f855a262edc06d930fc42ddb2f4a2f4c28027841567e7d66f'
            '3aa3a8ec1832a17f063a61b0a55d4ac7986b581ad7bed65b78dde01eb260dd38'
            'e3a0be329423cd026dc4c897465321e2aa097f8c3cf071c589a6121d3abc3c9d'
            '2ff8609a623236286a64f53ab5cc9da5aa890af550bcce5acb98a5a734a9b0db'
            'bb300e470a217f689e83b5fd7a4161ce7285c4bea5b853792db74c27f8c8a806'
            'ed2f9b76631e210c760c17e95505a2a383e9f93cc22c16e4cc0fa649e44759bc'
            '84c33692d308df721c38f6300076f8abbf6f02a81fe78aca805aebdc8e529a4e'
            '56e92450c5fbdeb7dc0c19af9fb400322696e2f99906616a982a8545681e8dd3'
            '729d55f90bc3f58a1522e035f8af3d321ecd4be64ed886e5c77d1b8de4fc9331'
            'e729e3b6cd3cd8f0e94fbd33339ec8cd5225f7daf0b8e9703f5e0fefa0991dc3'
            '946cc03429277aa8a4ec17b85fb05da87ca705e21a0fbf6102a91685c21be6c0'
            'a6bbc09dd5d643fb33ed2fe5b45d7984edddefda0557151454c4a204cccc9c33'
            'f065ccba82ee5a55ee1773b3f19fc47b9239d978eb50733f20ace75059517292'
            'adb6959798c8c463ba27da2ca463707ac50c774513187959f6b74e74572de946'
            '6444e85c9901f1f6352a1b914f62cd52a8db5edb9ed89b6f1a1d67122dd60bf1'
            'f72a909bfed42edf3607679d4bac5e5afe9a7c2bed36a402db29c5f686a0bc06'
            'cfc5a19e7af6387417c77377abcf029780070dabbe5c5c5da07f392e4cfb6f3e'
            '5d08492f32422269d6c9967833d6bb2a7999012d57a23109a089c5c1b8566d62'
            'b7ea974c3503a9980e4656b56b5ae873d2f0063bf917ff35d89094101022dea9'
            '087b8e63cbc79fb01c20ba0bc20a0cb4ed35780766f52f92f4bacee686c4f1bd'
            '47bac9e3258400058cd0856fbbafa5c8534ad97a53d5065daabd1e613f2164b9'
            'fc0e3db4057bd06f9eb666ee8352d57c183d3c44e733fb907aaf91f047989dcc'
            '14b5cd71c870ebb67ca958ff64981f04e01955dc2d090f2983896aa851999e4c'
            '16a976bdec10b3ae8a67bab064526eafaa73da0c47a3de8cf0899547d616ea83'
            '280c9fd6e0bf18dd2148560e41b5bf2b6b3cf555ffe6697af48533017f0276f1'
            '5ac8e9f82adbf6119717b4a5938cfa8a591bab6d75e4bf92ad2829b15fe1f043'
            '6a2912d04b0ae45e51f471d60d48482ddcd4db546b86f2f58dd23b910ea69cf3')
