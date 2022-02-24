# Originaly author: Danial Behzadi <dani.behzi@ubuntu.com>
# Maintainer: Mobin Aydinfar <mobin at mobintestserver dot ir>

major=3.12
minor=~202108170533
ubuntu_ver=~ubuntu21.10.1

pkgname=tractor
pkgver=${major}_${minor}
pkgrel=1
pkgdesc="Setup an onion routing proxy"
arch=(any)
url="https://framagit.org/tractor/carburetor/"
license=(GPLv3)
makedepends=('wget')
depends=('python' 'python-gobject' 'tor')

source=(https://launchpad.net/~tractor-team/+archive/ubuntu/tractor/+files/tractor_${major}${minor}${ubuntu_ver}_all.deb)
sha256sums=('a642a6f475d39cb81a212368b01a55dc1104a77feea2542ea6f7d7de441dcbef')

move_copyright() {
    find ${pkgdir}/usr/share/doc -name "changelog.Debian.gz" -delete
    mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}
    find ${pkgdir}/usr/share/doc -name "copyright" -exec mv {} ${pkgdir}/usr/share/licenses/${pkgname} \;
    find ${pkgdir}/usr/share/doc -type d -empty -delete
}

package() {
  tar -C "${pkgdir}" -xf "${srcdir}"/data.tar.zst
  move_copyright
}
