# Maintainer: Oirio Joshi <joshirio@protonmail.com>
pkgname=megacmd-bin
pkgver=1.1.0
pkgrel=3
pkgdesc="MEGA Command Line Interactive and Scriptable Application"
arch=('x86_64')
url="http://mega.nz/cmd"
license=('custom')
depends=('glibc' 'gcc-libs' 'openssl' 'sqlite' 'zlib' 'libpsl' 'icu' 'bash-completion' 'pcre' 'bzip2' 'xz')
provides=('megacmd' 'ffmpeg-mega')
source=('LICENSE')
source_x86_64=('https://mega.nz/linux/MEGAsync/Arch_Extra/x86_64/megacmd-x86_64.pkg.tar.xz')
sha256sums=('772d38729ab816eb94dbe30de277ffcc5af4e5d2c451cf7c071031ebe78f44ea')
sha256sums_x86_64=('707bcaefbcc051fa1b2cd58f06bbed7a6a063b6d553f7b5410d719f1fad254c3')

package() {
  cd "$srcdir"
  
  # Files
  install -d "${pkgdir}/usr"
  install -d "${pkgdir}/etc"
  cp -R "$srcdir/usr" "${pkgdir}"
  cp -R "$srcdir/etc" "${pkgdir}"

  # Copy license
  install -Dm644 "$srcdir/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

