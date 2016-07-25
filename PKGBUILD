pkgname=whatsie
pkgver=2.0.19
pkgrel=0
pkgdesc="A simple & beautiful desktop client for WhatsApp Web."
arch=('x86_64')
url="https://whatsie.chat/"
license=('MIT')
depends=('desktop-file-utils' 'gconf' 'gtk2' 'gvfs' 'hicolor-icon-theme' 'libgudev' 'libgcrypt' 'libnotify' 'libxtst' 'nss' 'python' 'xdg-utils' 'libcap' )
optdepends=('hunspell: spell check' )
options=('!docs' '!emptydirs')
install=$pkgname.install
source=("https://dl.bintray.com/aluxian/aur/dist/whatsie-2.0.19-linux-amd64.deb")
validpgpkeys=('6DDA23616E3FE905FFDA152AE61DA9241537994D')
md5sums=('6634521db3637e95180b7e17abf86c64')
package() {
  msg2 "Extracting the data.tar.gz..."
  bsdtar -xf data.tar.gz -C "$pkgdir/"

  # Link to the binary
  msg2 "Creating symlink..."
  mkdir -p "$pkgdir/usr/bin/"
  ln -s /opt/whatsie/whatsie "$pkgdir/usr/bin/whatsie"
}
