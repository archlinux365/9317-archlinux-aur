# Maintainer: Alex Tharp <toastercup@gmail.com>
# Original Maintainer: Muratcan Sisek <mail@muratcansimsek.com.tr>
pkgname=hiri
pkgver=1.3.6.1
pkgrel=4
pkgdesc="A cross-platform, Exchange-ready email client aiming to replace Outlook"
arch=('x86_64')
url="https://www.hiri.com/"
license=('custom')
provides=('hiri')
conflicts=('hiri')
makedepends=('xdg-utils')
install=$pkgname.install
source=('https://feedback.hiri.com/dist/downloads/Hiri-'$arch'-'$pkgver'.tar.gz'
        'https://feedback.hiri.com/dist/downloads/license.txt'
        'hiri.desktop'
        'hiri.sh')
sha512sums=('58b9a2e5977662f746a99665ecb007e72205d75e9060a252dac991d4ed1bc57c739f7fd547b9c5d12ff2a4e653a3802447395e3558bdc2cdb72900246d8f51da'
            'ae8274026cb1b68f9b3f4cb66348952e19e31d477602a3d6d529121010260727824d0a060303e10fa8c5661f0b336ceabb0b472ad1cb74835ff5d6f3d3d53636'
            '4bf85f50fe25aa4980f97f5fdc5111d4e77af7268f70407f897252fc9cc4901f2d7d148172e242f33856b2839378996ca72c0314a9f8b3673e2449067b19baad'
            'cafbf1f327618cb1d8914babf9cc9c2013b5db27df2a463329f9d366952c5ee592e946e727f991c8f7f558bdf7e625b91e0e029fa193650c197c6c9c6a57676d')

build () {
  cd hiri_"$pkgver"
}

package() {
  install -d "$pkgdir"/opt
  cp -rup "hiri_$pkgver" "$pkgdir"/opt/$pkgname

  install -d "$pkgdir"/usr/bin
  ln -s /opt/$pkgname/hiri.sh  "$pkgdir"/usr/bin/hiri

  install -Dm644 $pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop

  install -Dm755 $pkgname.sh "$pkgdir"/usr/bin/hiri

  install -d "$pkgdir"/usr/share/icons/hicolor/128x128/apps
  ln -s /opt/$pkgname/hiri.png "$pkgdir"/usr/share/icons/hicolor/128x128/apps/$pkgname.png

  install -Dm644 license.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
