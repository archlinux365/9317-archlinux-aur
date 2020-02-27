# Maintainer: Thibaut Sautereau (thithib) <thibaut.sautereau@clip-os.org>

pkgname=swtpm
pkgver=0.3.0
pkgrel=1
pkgdesc="Libtpms-based TPM emulator with socket, character device, and Linux CUSE interface"
arch=('x86_64')
url="https://github.com/stefanberger/swtpm"
license=('BSD')
depends=('glib2' 'fuse2' 'libtpms' 'gnutls' 'net-tools' 'tpm-tools' 'expect')
makedepends=('socat' 'python')
source=("https://codeload.github.com/stefanberger/swtpm/tar.gz/v${pkgver}"
        'tmpfiles.conf')
sha256sums=('d5c52fbc49ddcc0b75c0f672bd6d32d4fb88d7329167274419f17163141d18fe'
            'eb408adb3e40df1cbea7898426fd89c9a2774a970fd3e18a052a530f49c32336')

prepare() {
  cd "$pkgname-$pkgver"
  autoreconf --verbose --force --install
}

build() {
  cd "${pkgname}-${pkgver}"
  # The 'tss' user and group are already created by trousers, on which we
  # indirectly depend via tpm-tools
  ./configure \
    --prefix=/usr \
    --with-gnutls \
    --with-cuse \
    --with-openssl \
    --with-tss-user=tss \
    --with-tss-group=tss
  make
}

check() {
  cd "${pkgname}-${pkgver}"
  make check
}

package() {
  cd "${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 "$srcdir/tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/swtpm.conf"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
