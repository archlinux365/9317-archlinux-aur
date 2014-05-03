# Maintainer: Ivan Puntiy <ivan.puntiy-at-gmail>
pkgname=unix-runescape-client
pkgver=4.2.8
pkgrel=2
pkgdesc="RuneScape client for Linux and Unix"
arch=(any)
url="http://hkprojects.weebly.com/runescape-client-for-linux-and-unix.html"
license=(GPL2)
depends=('java-runtime' 'perl' 'perl-wx' 'wget')
optdepends=(
  'wine: for "compatibility mode" fix'
  'alsa-oss: for "force alsa" fix'
  'pulseaudio: for "force pulseaudio" fix'
  'p7zip: to extract launcher from .msi'
  'perl-config-inifiles: instead of builtin'
  'perl-io-stringy: instead of builtin'
  'cairo-nogl: if game crashes during loading/auto-setup'
)
conflicts=('runescape-client-bin')
install=$pkgname.install
source=("$pkgname-$pkgver.tar.gz::https://github.com/HikariKnight/rsu-client/archive/v$pkgver.tar.gz")
md5sums=('1277f3c56260107cc1231ed7627bda6b')

package() {
  local _instdir="$pkgdir"/opt/runescape
  cd "$srcdir/rsu-client-$pkgver/runescape"

  mkdir -p "$_instdir" "$pkgdir"/usr/{bin,share/applications}

  # copy the stuff
  cp -t "$_instdir" *.txt runescape updater rsu-settings AUTHORS
  cp -Rt "$_instdir" share rsu
  cp -Rt "$pkgdir"/usr/bin templates/packaging/usr/games/*
  cp -Rt "$pkgdir"/usr templates/packaging/usr/share

  # these libraries are old, uptodate version is in AUR as 'cairo-nogl' package, if you need this
  rm -rf "$_instdir"/rsu/3rdParty/linux/cairo-nogl
}
