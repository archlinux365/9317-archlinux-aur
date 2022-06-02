# Maintainer: Ali Tajelsir <alitajelsir@gmail.com>
# Contributor:  Antonio Rojas <arojas@archlinux.org>

pkgname=noto-fonts-variable-lite
pkgver=20220322
_commit=fa04494301719f310f62c8236b7e6bdeea1f656b
pkgrel=1
pkgdesc="Google Noto TTF variable fonts (lite version)"
arch=(any)
url="https://www.google.com/get/noto/"
license=(custom:SIL)
optdepends=('noto-fonts-emoji: Emoji characters'
            'noto-fonts-variable-ar: Fonts for Arabic Script')
provides=(ttf-font noto-fonts noto-fonts-extra)
conflicts=(noto-fonts noto-fonts-extra)
_url="https://github.com/googlefonts/noto-fonts/raw/${_commit}"
source=("${_url}"/unhinted/variable-ttf/NotoSans-Italic-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSans-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSansMono-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSerif-Italic-VF.ttf
        "${_url}"/unhinted/variable-ttf/NotoSerif-VF.ttf
        "${_url}"/LICENSE
        {46,66}-noto-{mono,serif,sans}.conf)
sha256sums=('79fbb24b91750e3ada1a5a5a30a8c6fcd1a88574515d77fcb541d4289e0c2f86'
            '181ad053fcdde639798249f4da47a1320dafcc91c6e6ed791e8f95b5cc838771'
            '92243cb284614c1f2589f53d8ba516a9bbca654772c1b3a032e289814906873f'
            'a1a1d326d4ff86d89df0169e49b14056689791e784a4b43a95565533e1b61b7c'
            'b278fb545d310982fb9dc0165925c98e4ff5a6dc14dfd0e6dd085c0c8b89d000'
            '0dab92d0544f7b233403f14b84a663bdbfa746982eda629e7f4f9ffe1b036feb'
            'f5c09b37280d7569b6c99a78511639be4ae25b8c5406464422fe0421fe13a884'
            'c94368b24506770767d003e5bcba589a8e402e489c240ee52453bf3ac7e9b5fa'
            '83a8faf6a47954075f97a2d555048e2a6689c38603b2ca00150157bf645f4593'
            '4526289f59654e2a81dc734669a1ae4e416f9a56d0896ec3741c6bf065baf8a8'
            '4459944b63dc083107280f5d7375c69746bf80a09416a4a4909a100e58e5a33a'
            '52684bebf6447be22618d2a04ff37623ec92f9d8ccf6b6f972e5bcbcfee90d69')

package() {
  install -d "${pkgdir}/usr/share/fonts/TTF"
  install -Dm644 "$srcdir"/*.ttf "$pkgdir/usr/share/fonts/TTF"
  install -Dm644 "$srcdir"/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  # Install fontconfig files
  install -Dm644 "$srcdir"/*.conf -t "$pkgdir"/usr/share/fontconfig/conf.avail/
  install -d "$pkgdir"/usr/share/fontconfig/conf.default
  ln -rs "$pkgdir"/usr/share/fontconfig/conf.avail/* "$pkgdir"/usr/share/fontconfig/conf.default
}
