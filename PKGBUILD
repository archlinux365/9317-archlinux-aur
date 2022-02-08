# Maintainer: Arkadiusz Dzięgielewski <arek.dzski@gmail.com>

pkgname=teamspeak
pkgver=5.0.0beta68.1
pkgrel=1
pkgdesc="Software for quality voice communication via the Internet"
url="http://www.teamspeak.com"
license=('custom')
depends=('alsa-lib'
	'atk'
	'at-spi2-atk'
	'at-spi2-core'
	'avahi'
	'dbus'
	'e2fsprogs'
	'expat'
	'flac'
	'gcc-libs'
	'glib2'
	'glibc'
	'gmp'
	'gnutls'
	'keyutils'
	'krb5'
	'libasyncns'
	'libcap'
	'libcups'
	'libdrm'
	'libffi'
	'libgcrypt'
	'libgpg-error'
	'libidn2'
	'libogg'
	'libp11-kit'
	'libpulse'
	'libsndfile'
	'libtasn1'
	'libunistring'
	'libvorbis'
	'libx11'
	'libxau'
	'libxcb'
	'libxcomposite'
	'libxdamage'
	'libxdmcp'
	'libxext'
	'libxfixes'
	'libxi'
	'libxkbcommon'
	'libxrandr'
	'libxrender'
	'libxshmfence'
	'lz4'
	'mesa'
	'nettle'
	'nspr'
	'nss'
	'opus'
	'pcre'
	'systemd-libs'
	'util-linux-libs'
	'wayland'
	'xz'
	'zlib'
	'zstd')
optdepends=('libpulse')
arch=('x86_64')
source=("teamspeak-client-$pkgver.tar.xz::http://update.teamspeak.com/linux/x64/latest/0-1644243684.patch")
sha512sums=('591e97baecf031af31499c6503b9ab682abac80b3b2e80817f33281aabaefc13aa7d35ba77ac2e998e6b7f080e8e17d1aab48ef9c8d8cd3085901e8d502a961f')
# Following authorization token is hard-coded. It is not bound to any account, but without it you will get 403 Forbidden error from any request to update.teamspeak.com
# The archive starts at offset of 200 bytes
DLAGENTS=("http::/usr/bin/curl --basic -u teamspeak5:LFZ6Z^kvGrnX~an,\$L#4gxL3'a7/a[[&_7>at}A3ARRGY -A teamspeak.downloader/1.0 -C 200 -o %o %u")

prepare() {
  # Fix not functional desktop activator
  # This is done automatically by built-in downloader
  # and points to installation
  echo "Exec=teamspeak %u" >> "$srcdir/teamspeak-client.desktop"
}

package() {
  install -d "${pkgdir}/usr/bin/"
  install -d "${pkgdir}/usr/share/licenses/"
  install -d "${pkgdir}/usr/share/pixmaps/"
  install -d "${pkgdir}/usr/lib/${pkgname}"

  # Recursively installing all top-level regular files and directories from srcdir
  #   Files supplied to makepkg as sources are present in srcdir using symbolic links
  #   That way we can only copy files extracted from source archives
  find "${srcdir}" \
    -mindepth 1 \
    -maxdepth 1 \
    -type d,f \
    ! -name teamspeak-client.desktop \
    -exec cp -r {} "${pkgdir}/usr/lib/${pkgname}/" \;

  chmod 755 "${pkgdir}/usr/lib/${pkgname}/TeamSpeak"

  install -Dm644 "${srcdir}/teamspeak-client.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  ln -s /usr/lib/${pkgname}/logo-256.png "${pkgdir}/usr/share/pixmaps/teamspeak-client.png"

  ln -s /usr/lib/${pkgname}/licenses "${pkgdir}/usr/share/licenses/${pkgname}"

  ln -s /usr/lib/${pkgname}/TeamSpeak "${pkgdir}/usr/bin/teamspeak"
}
