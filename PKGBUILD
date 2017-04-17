# Maintainer: Randy Ramos <rramos1295@gmail.com>
# Contributor: carstene1ns <arch carsten-teibes de>
# Contributor: DonOregano <lars@foldspace.nu>

pkgname=subgit
pkgver=3.2.4
pkgrel=1
pkgdesc="Provides smooth Subversion to Git migration and synchronisation"
arch=('any')
url="http://subgit.com"
license=('custom')
depends=('java-runtime>=7')
optdepends=('subversion' 'git')
source=("https://subgit.com/download/subgit-$pkgver.zip")
sha256sums=('5c2a880c277b2c3250c726302f76a49c7e3d0b62ceaa13e4d0cb90f94584268f')

package() {
  cd subgit-$pkgver

  # folders
  install -d "$pkgdir"/usr/{bin,share/{{licenses,doc}/subgit,subgit/lib}}
  # script
  install -Dm755 bin/subgit "$pkgdir"/usr/share/subgit/bin/subgit
  # libs
  install -Dm644 lib/*.jar "$pkgdir"/usr/share/subgit/lib
  # doc
  install -Dm644 {CHANGES,README}.txt "$pkgdir"/usr/share/doc/subgit
  # licenses
  install -Dm644 LICENSE.txt lib/licenses/*.txt "$pkgdir"/usr/share/licenses/subgit
  # symlink to make command available
  ln -s /usr/share/subgit/bin/subgit "$pkgdir"/usr/bin/subgit
}
