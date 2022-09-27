# Maintainer: M4rQu1Nh0S

_pkgbase=r8168
pkgname=${_pkgbase}-8136
pkgver=8.050.03
pkgrel=1
pkgdesc="A kernel module for Realtek 8168 network cards (DKMS version) for Device ID 0x8136."
url="https://github.com/mtorromeo/r8168"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'dkms' 'linux-headers')
makedepends=('git')
conflicts=("${_pkgbase}")
provides=("${_pkgbase}")
source=("r8168-8136::git+https://github.com/mtorromeo/r8168.git"
        "dkms.conf"
        "linux-5.18.patch"
        'linux-5.19.patch'
        "8136.patch")
sha256sums=('SKIP'
            'd37b8acbd4fe06f81538581712a04751a96fc37bad3a4bd3ae8329f8744c49b3'
            'd8d542770e504775600f686d03412a37cc32489872be7aeb388b5b08d9806096'
            'f5e08919764bc56d4f11b23fcb7cece663cae3f591992a0ca2be760e6890a9f8'
            'f203ed455d17f03c964b8bb91d9d7da6c33d8494c0b47ecf3096bde16e95b310')
install=r8168-dkms.install

prepare() {
	cd "$pkgname"
	patch -Np1 -i '../linux-5.18.patch'
	patch -Np1 -i '../linux-5.19.patch'
	patch -Np1 -i '../8136.patch'
}

package() {
	install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	sed -e "s/@PKGNAME@/${_pkgbase}/g" \
	    -e "s/@PKGVER@/${pkgver}/g" \
	    -i "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	cd "${pkgname}"
	cp -dr --no-preserve='ownership' src "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/src"

	echo "blacklist r8169" | \
		install -Dm644 /dev/stdin "$pkgdir/usr/lib/modprobe.d/$pkgname.conf"
}
