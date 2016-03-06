# Maintainer: lily wilson <hotaru@thinkindifferent.net>

_pkgname=openssl
pkgname=lib32-$_pkgname-chacha20
_ver=1.0.2g
# use a pacman compatible version scheme
pkgver=${_ver/[a-z]/.${_ver//[0-9.]/}}
#pkgver=$_ver
pkgrel=3
pkgdesc='The Open Source toolkit for Secure Sockets Layer and Transport Layer Security with ChaCha20 support (32-bit)'
arch=('x86_64')
url='https://www.openssl.org'
license=('custom:BSD')
depends=('lib32-zlib' "${_pkgname}")
conflicts=('lib32-openssl')
provides=("lib32-openssl=${pkgver}")
optdepends=('ca-certificates')
makedepends=('gcc-multilib')
options=('!makeflags')
_chacha20_patch='openssl__chacha20_poly1305_draft_and_rfc_ossl102g.patch'
source=("https://www.openssl.org/source/${_pkgname}-${_ver}.tar.gz"
        "https://www.openssl.org/source/${_pkgname}-${_ver}.tar.gz.asc"
        'no-rpath.patch'
        'ca-dir.patch'
        "$_chacha20_patch")
validpgpkeys=(8657ABB260F056B1E5190839D9C4D26D0E604491)
md5sums=('f3c710c045cdee5fd114feb69feba7aa'
         'SKIP'
         'dc78d3d06baffc16217519242ce92478'
         '3bf51be3a1bbd262be46dc619f92aa90'
         '3446d4ed9935c8a260d09300ec9fe404')

prepare() {
	cd $srcdir/$_pkgname-$_ver

	# remove rpath: http://bugs.archlinux.org/task/14367
	patch -p0 -i $srcdir/no-rpath.patch
	# set ca dir to /etc/ssl by default
	patch -p0 -i $srcdir/ca-dir.patch
        # Cloudflare patch
        # https://github.com/cloudflare/sslconfig/tree/master/patches
        patch -p1 -i $srcdir/$_chacha20_patch
}

build() {
	cd $srcdir/$_pkgname-$_ver

	if [ "${CARCH}" == 'x86_64' ]; then
		openssltarget='linux-x86_64'
		optflags='enable-ec_nistp_64_gcc_128'
	elif [ "${CARCH}" == 'i686' ]; then
		openssltarget='linux-elf'
		optflags=''
	fi

	# mark stack as non-executable: http://bugs.archlinux.org/task/12434
	./Configure --prefix=/usr --openssldir=/etc/ssl --libdir=lib32 \
		shared zlib ${optflags} \
		"${openssltarget}" \
		"-Wa,--noexecstack ${CPPFLAGS} ${CFLAGS} ${LDFLAGS}"

	make depend
	make
}

check() {
	cd $srcdir/$_pkgname-$_ver
	# the test fails due to missing write permissions in /etc/ssl
	# revert this patch for make test
	patch -p0 -R -i $srcdir/ca-dir.patch
	make test
	patch -p0 -i $srcdir/ca-dir.patch
        cd $srcdir/$_pkgname-$_ver
}

package() {
	cd $srcdir/$_pkgname-$_ver
	make INSTALL_PREFIX=$pkgdir install_sw

	rm -rf ${pkgdir}/{usr/{include,bin},etc}
	mkdir -p $pkgdir/usr/share/licenses
	ln -s $_pkgname $pkgdir/usr/share/licenses/$pkgname
}
