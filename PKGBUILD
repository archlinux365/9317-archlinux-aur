# Maintainer: TuxnVape Elrondo46 <elrond94athotmail.com>
pkgname=virtualbox-ext-oracle-manjaro
pkgver=5.1.26
pkgrel=2
pkgdesc='Oracle VM VirtualBox Extension Pack for Manjaro'
arch=('any')
url='http://www.virtualbox.org/'
license=('custom:PUEL')
options=('!strip')
install=virtualbox-ext-oracle.install
source=("http://download.virtualbox.org/virtualbox/$pkgver/Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack")
noextract=("Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack")
sha256sums=('14f152228495a715f526eb74134d43c960919cc534d2bc67cfe34a63e6cf7721')

prepare() {
  # shrink uneeded cpuarch
  [[ -d shrunk ]] || mkdir shrunk
  tar xfC "Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack" shrunk
  rm -r shrunk/{darwin*,solaris*,win*}
  tar -c --gzip --file shrunk.vbox-extpack -C shrunk .
}

package() {
  depends=('virtualbox')
  optdepends=('rdesktop: client to connect vm via RDP')
  install -Dm 644 shrunk.vbox-extpack \
    "$pkgdir/usr/share/virtualbox/extensions/Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack"
  install -Dm 644 shrunk/ExtPack-license.txt \
    "$pkgdir/usr/share/licenses/$pkgname/PUEL"
}

# vim:set ts=2 sw=2 et:
