pkgname=ntfs3-dkms
pkgver=8.0.0
pkgrel=1
pkgdesc="NTFS read-write driver GPL implementation by Paragon Software. Current version works with NTFS (including v3.1), normal/compressed/sparse files and supports journal replaying."
arch=('any')
url='https://www.paragon-software.com/'
license=('GPL2')
depends=('dkms')
options=('!strip')
source=(Makefile.patch
        dkms.conf
        "v$pkgver~1.patch::https://lore.kernel.org/patchwork/patch/1318985/raw"
        "v$pkgver~2.patch::https://lore.kernel.org/patchwork/patch/1318994/raw"
        "v$pkgver~3.patch::https://lore.kernel.org/patchwork/patch/1318989/raw"
        "v$pkgver~4.patch::https://lore.kernel.org/patchwork/patch/1318993/raw"
        "v$pkgver~5.patch::https://lore.kernel.org/patchwork/patch/1318992/raw"
        "v$pkgver~6.patch::https://lore.kernel.org/patchwork/patch/1318986/raw"
        "v$pkgver~7.patch::https://lore.kernel.org/patchwork/patch/1318991/raw"
        "v$pkgver~8.patch::https://lore.kernel.org/patchwork/patch/1318988/raw")
sha512sums=('ab49381b37714bc61b17c5a4d857aac776a674574e8dbd46738eab438eef984b7762430cac05860038d8a875d5538347a1e1176acfd2169d9b5a640a9ef04d7c'
            '5f4087b05eb831fe277f1894240a8d72824daa821317e873f77574fc25d97b273ac3ddd8075d58b96c5e4e441de630817d68a3fa33d6176e26743cdb17ec664f'
            'dff5d5c17d3e43b8bad49ad2b1dc19c03d5f41fed3cf98a0f3b578f6c290546ee6df2cd588885e91afe9919ad10eb1cf12dc2baca8c4bd3a96b37f70e3a3d62e'
            'd09966fd1a5654494be9c540fbf4f267b2c0a073ec5c0e6cfebebac4228503f2703b9c5f780be444821326b6ee96b48f3d01b71d2e1b5863b5341fde06b25ec2'
            '747a71c63dbbb3017216c4788008a5bab5709f4c73606e81daa68912d6663035acfffdde84930d8f49bffef357dabb3d71436f1efe1174e22c306638e04980f2'
            'b0e335352e394687248949cd5a99676ecde030c5a39022a238070197169d084559872c67af7058de376f7883f086ed98b3a4b58e4c3a748e7fd1353beac35849'
            '6010c951e491d25942c20f9613f8bbb337ffd4582c8598c663babd40de45ff411245cd2e26d309e0148b59ff5c3d977b8979a3ab09540e394792627fa15371a3'
            '9c7f11d4cd755c91f4581a3ac45c22295b790d9a642ccbc44579ea4d4b4de2d82dfb8932967c3c1a0ec8f0e8a497acc327a0cc49c5b6f2ce9da208e97809cd74'
            'e9efd5acdabfe723fa96933c81d033679db92af50ab3754481ad4453b2279051bbe4d152f2643296e4b044d6d9b33808a9b9da8a467130a707f51b286b7f36a7'
            '420547e7f200bbd32137b17ae567b18edf7be8cfa25ec483be2aaed252f42ba543a439042dd52882fd6ffce2c9abf8df73267b0720d26b27339d297832d8d9ee')


prepare() {
  mkdir -p ${pkgname}-${pkgver}
  cd ${pkgname}-${pkgver}
  for patch in "$srcdir/v$pkgver~"*
  do
    patch -p3 -N -i "$patch"
  done
  patch -p1 -N -i "$srcdir/Makefile.patch"
}

package() {
  mkdir -p "${pkgdir}/usr/src"
  cp -r "${pkgname}-${pkgver}" "${pkgdir}/usr/src/ntfs3-${pkgver}"
  install -Dm644 "${srcdir}/dkms.conf" "${pkgdir}/usr/src/ntfs3-${pkgver}/dkms.conf"
}
