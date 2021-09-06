# Maintainer: Dct Mei <dctxmei@yandex.com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Thomas Baechler <thomas@archlinux.org>
# Contributor: Jaroslaw Swierczynski <swiergot@juvepoland.com>
# Contributor: Michal Hybner <dta081@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgbase=firefox-esr-i18n
pkgver=91.1.0
pkgrel=1
pkgdesc="Language pack for Firefox ESR"
arch=('any')
license=(MPL GPL LGPL)
url="https://www.mozilla.org/en-US/firefox/organizations/"

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
  'en-US  "English (US)"'
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
_url=https://ftp.mozilla.org/pub/firefox/releases/${pkgver}esr/linux-x86_64/xpi

for _lang in "${_languages[@]}"; do
  _locale=${_lang%% *}
  _pkgname=firefox-esr-i18n-${_locale,,}

  pkgname+=($_pkgname)
  source+=("firefox-esr-i18n-$pkgver-$_locale.xpi::$_url/$_locale.xpi")
  eval "package_$_pkgname() {
    _package $_lang
  }"
done

# Don't extract anything
noextract=(${source[@]%%::*})

_package() {
  pkgdesc="$2 language pack for Firefox ESR"
  depends=("firefox-esr>=$pkgver")
  install -Dm644 firefox-esr-i18n-$pkgver-$1.xpi \
    "$pkgdir/usr/lib/firefox/browser/extensions/langpack-$1@firefox.mozilla.org.xpi"
}

sha256sums=('291b67d6f83b9ef69c1e251d0376fe5b8f7bcc779e59d33b49f2762760ff6f3d'
            '20068c23e6a3270c7521a8e5547c71d579937fa355156208249180f9019e63b4'
            '7d691ccc1085ee1983a51a85c23fb3da46a94fffb52348a11b951b9b91d7d7cd'
            '7a0b1b48cd5470486923edd1488807faa72f286b9239c8fd6abe9876ef5895f3'
            '4494232aad3e2ed0b750e19211001949f8bcf743461142a915357b0d6754f397'
            '1e66ba9ac393af7e611debc1f2ba5177232a43fdd195b4507bc0ded40e3b659f'
            '0837b22718e8fc1c34899bfb42ed1af6ab029a2254328ac3cf0e5a0a2fe35110'
            '7e78412c76e18419fbada39153ca0a918d130feca46c58839b3644baf5d94468'
            'b40b38bbca60c2e418bd09c68d74c7e7d51a7f308f18030162d053742908d315'
            '3dfcb72bd21291eada86e63f062d2f05f477bc4ccac9a6688796b6551a32f3d0'
            '44e32bcd62708582737ac6129c263214f0c3cee72587d4f2541ae66035639e4a'
            '4a64b2d7378ce2386865c3d343f61e7a1b35485adfb449a94e95c32abef62175'
            'a0075ae3a19d06a97487c845bd424095fd558a17ab4dee74354734ac89f6fb18'
            'd5c0a615aadafd284c487692454f39dea457ff958193c6391466cd9920925b69'
            'fcfec2f44849b17a1c47a8491107e004baa050395b968e513120c103e4da58b1'
            '1fa67c7021b050fd6d10e531a22c2b129eb0381d0e3211fe6bd9cd7fd679fa9b'
            'd6f9b829951597b733860d0890cdbedf8cc831104dc7036c712454a2adaa8d63'
            '1365804942c1b0926793bbe18feee64abecdd21de091982cfb5502a0a2b54d45'
            '050566ac84067d5cde6ae96258c60273ae675ad59341a58ec189c8534b52044f'
            'e22126cb02d827089223380cdf0484bb97d8e9add228afac942573c80996e214'
            'bd7a20cbc2f52a111e5770201f60486857a2513e4124dc88722f68f1247db3cd'
            'f6bc255d7ead78155ddd74edd33b12bb270a1d44fd302a012cacd8a9dd132f41'
            'ecdf58d413a064d7f91adfbc7dfafdf242ac49dab3d50b21a08d314b9fd8e96a'
            'ab4fe3ce02f5569fd1f639f871c3ade020f88b801cfd3e6352428781da02de8c'
            'ce830c6cefd4bc7b3a7f37b06ec7ba41ddc3ba21dac83492d6d6acc6e096f11e'
            '3187a9da21e5fee8137016c284afa0b615cac94872c771855922afcfac9e484a'
            'de1ca6ab638a35002649efac168df5baeb300fd1cd9c82166caea69b580973a1'
            '43e8f373271acef60ca8e99c0e06e99263dd8aac0ffb63f31d333d0c33504e03'
            'e58619190070722d4ce900d26553c9d8c9dcbe90edcac5ee93cdbd9f9adc2d20'
            '38d53e4f6cabce6852e08f2fe1dd6f4da2886181bdb8349d5066a411bfd1e305'
            'b3bcd11deb930d57bfa1ed566885b7602b3164cdeceb88b23718f773e646f953'
            'f1a73fc96a031786a7e911042f4c251daac49a3ced728b3b3609fbe9d4a665fb'
            '9c1e34552108150653beacade16adc6a9128ad0b4c929bf293f84b489d0e0d0f'
            '8b8baa5955db249aff8d758b2bf2ae8f6d5e7b735bb9b329f364058ee1126680'
            'e4a535f6ee2cd3b3622cd78b266b9c55c9f90e6777d8a9dd27f9099671eb9538'
            '22547ce3a1b0439d5b515f3d179edd9c1e0e71970d40083249afc9c7655aa13a'
            'c7c63f9f49876648e51ffde8e105f7d226136105e1bdfff86b11cb208b2c354d'
            'd55d95a130a3f7b0c0f05d0a45ec8201547a8379fbebfc6d83cfcc68753befd7'
            'd6c93a0761c7d3d80ac1b92081045433d714d535a15c0dab6b6de20f7554199a'
            '0ca6ad7dbec2ad219616b4ee6ed8b5eec1dd94a4e48d3f0c7cefc44ead0c2af4'
            '20c71f7d506808f622dfa63f4af3dad81428018a8ebf2ed85708fd8ab5eb09cb'
            'df9317f31d4848de79ea0a7693071d5992c3fc5e2edfc56dba363e74e2b87d4f'
            'd639b8f5ecc59c325cc18f84164673d092b2f9113b22d3d5f058a7f383715827'
            '6eecd6185e742e9f50e37cb896c945c50bd513b002e94af165dd13e8fb431a91'
            'fa882d7b106f77ac4bed0732d713f86f13ed44a7f752d84be9d89736b25a3002'
            '54ae4da8cd7ffdbee7af98a5c969eb2df9037518956995082c20f84aafb72117'
            'cb2e97281e4e404220c38fc0355183b5ad4161399057c37bcb08e4b68f0afcba'
            'e3aafc722d646e15817b0a174d5c8b485428372748667ff6df24993e629ab872'
            'bf20833e162b94046912a1bd005285f0029f454ae42ffdaa6e6f1f38b1f5f1ad'
            'a8acd59bb98016571416016fda167802cf75a97547c078d58233fd5b005d27be'
            'ab9deb3eea2bf7744f87e069bc34577855c14ea21b1e3e53d345ec1be463ae9f'
            'ca1580118325a51a1a25f5de2169ac4b04eb3f1fe939b686bd2ab739c14f0308'
            'e42784eb50a62c31a74354ce2987f662f2e2e6d61063257a0511d2f96b2c814e'
            '6c7aa33327cb1ee49ce3eff32a1e79c7f6c89db0415cb8a3c8587d760a020bcf'
            '73e020fd42aa513f56ac48b0815f59565c4ee0c06dde3b7a704e60ea1b67d1d1'
            '9dc54743d35e0fb39e8673f81172742fd9cc7388af23186503c167a5002a1118'
            '0535398623decceb9e17d2ef268777254e78e69c74953eb4fcd64caa28ff7c18'
            '140e738162b9074d8c2f9ab0b3d294b2687cad85e30910425ae95e6aa72d517e'
            '8e9aa606bbf83309560681a3dce84495191ea79121e71e37aa3fbda1e462d57b'
            '3156509389794a7e43d968c42f8fa39a437b4612b0e05ad3611519fa5248a140'
            '3fdbde08cf6a65ad028b8f0e12d3fb25cd07606aa3d64c59c238ce2447d9fe5e'
            'b80bbb3f67df22e2cd40ac6a6cd80642b5dd9391faf66952233663081aff3cf2'
            'e5d72f0e46da2fec4079303bdd768741ec057f652efc46816ede01dfac9e6514'
            'b03c75ddd600f798d9585870bbbfb1acdaf4f54c50b3216ca8e6c5ced8a7d146'
            '95b5988c558779c71abf311c0a610d1128d48d4feb478f82aaa2948be034be24'
            'fd5f169e8ffd88935cb0b93081acddf15fde0cd2f7ef8ba688d194d4bafc92ca'
            '29ec8e0114707ada2df39a18c3c7125f71af32cb1d39f5a716e9405138d6e57f'
            '7d72ac3bc2c298067e9ca384aa5aab200cfc8f65beff1a99c8568133fb39e98b'
            '9c2743730807ac3e83fb10ceaaede5170c15e7ba080cd9d342d8fde53cda85b2'
            '695b5a5f29b96ebdd63733cb9f421e047828efe89467bb2aa47bb1e383bf5c3a'
            'd17e3001bf9562b399f4c9dd7772d1679f2239e8833545f784e4a68f12f77190'
            '296dfa374372e55687eced1a16f863c13a1069ed25c09dea57d5cd62b82cae99'
            '0d55f1f40eb921bbb259ee2eeeadfd4cecc0df772abd4a4ab9077756d582fa5b'
            'ccdacb7380ea1fbd512f9da145bf90fa69207c1b3cafbcba607729814c4ac910'
            'bfc6d53c9fbebcf05c2cc522dfca6afc3e9bdd1481a1a3395c45acb42085f5d6'
            '2c0536de3b99b1beefb4635ed3d535bf26cef54036637d13af30640052896452'
            '2e5055df8b431214b3f664b429e4d0b4c5c038828c8f81af075832fac7f96917'
            'bd67a55f06c0dd205da1cf8e770e595d7dbb4a25a5646c85c3fa1e88a9e26745'
            '65a6942c6acf0df5116ec29a0718225506b432af19015d58d184c4bab3b70c48'
            '1ec0e8b10b7a1a354bed742873df1d39a7ef8179a48583273f537a39abafa730'
            'b2428acb45701f7efeed01eae323b7a517b74cf66992491af22edcb266d137e0'
            '47885a56f78910f07e16641b0e3c3b03d6def4a8c04ebd405e28668004605e4d'
            '5ab2875ecd6cd483baa8ac6bd4e1cab0f303fd549f0cbe8cb052ef5c2327f4fa'
            '857b826b33a54cb92867b01762518bdabbb41f3402ad73e27c03ac2921e98391'
            'a1f18a76b92fd9066f2759cc76f29e0df267b074ac1b642d7f385d4d37aea2b5'
            '032a369026335607fa5c7140b661351fdb0b4e615d53d0bb0634b4d71922ff13'
            '12e5441387a441451f460cbb10f2b1f02845afdbd1335f2d2f0e9c450ad7bd22'
            '6ab78f935806393f4ec231ac5b0bf3ac4e1a293c0e0ac4d7f34e48dc35829dff'
            '1522902a8f00f7f26e773809c62ed0a32e5df1ef355a782ea8f01a0dae0a400a'
            '5cbdd7b3df903d8411d2046044885ea33f1133c1cfc342a1db91060f16a44904'
            '32c2bae1baf7374c920ebe4d9a2c949ef0f121e16ca808b7d1ba0440097d3239'
            '756fbbcc0ab1c16d69b0050bb05eebd3c1fdc2428b1ad8439b5f98e157c42b3a'
            '99c6df58c01d84ce6f1cd5b3538b365aab748ec6f7e3b97dac0457897504eb4b'
            '1ef0b9325e1c02da79036d1bd1b8ea12616a28c902d82268ead2df4902887688'
            'db95d6555ab5e6e3db5e71b9b9e9bd1a18e159a1a0f39b23d5367752a1d6a92d'
            '129cea2d845de3e327c204749620782dcffa48bac6d269ac9b2c907fc5cf6058')
