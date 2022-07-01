# Maintainer: lsf

pkgname=opensnitch-ebpf-module-git
_pkgname=opensnitch
pkgver=1.6.0rc1.r13.96fbc85
pkgrel=1
_kver=5.18
pkgdesc="eBPF process monitor module for opensnitch"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/evilsocket/opensnitch"
license=('GPL3')
makedepends=('git' 'clang' 'llvm' 'libelf'
             'binutils' 'bc' 'rsync')
depends=('opensnitch')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/evilsocket/opensnitch.git'
        "https://github.com/torvalds/linux/archive/v${_kver}.tar.gz")
sha256sums=('SKIP'
            '4037b6912e2b6c5102ce89840e32a16839dadd846ee3afdfb6704f44273b0c95')
options=('!strip') # we're stripping with llvm-strip

pkgver() {
  cd "$srcdir/${_pkgname}"
  git describe --long | sed 's/^v//;s/-rc./rc/;s/\([^-]*-\)g/r\1/;s/-/./g'
}

prepare() {
  cd ${srcdir}/linux-${_kver}

  patch tools/lib/bpf/bpf_helpers.h < ${srcdir}/${_pkgname}/ebpf_prog/file.patch
  cp ${srcdir}/${_pkgname}/ebpf_prog/opensnitch.c \
    ${srcdir}/${_pkgname}/ebpf_prog/common.h \
    ${srcdir}/${_pkgname}/ebpf_prog/opensnitch-procs.c \
    ${srcdir}/${_pkgname}/ebpf_prog/opensnitch-dns.c \
    ${srcdir}/${_pkgname}/ebpf_prog/Makefile samples/bpf

  yes "" | make oldconfig
  make prepare
}

build() {
  cd ${srcdir}/linux-${_kver}

  make headers_install

  cd samples/bpf
  make
  llvm-strip -g opensnitch.o opensnitch-dns.o
}

package() {
  install -Dm644 "${srcdir}/linux-${_kver}/samples/bpf/opensnitch.o" \
    "${srcdir}/linux-${_kver}/samples/bpf/opensnitch-procs.o" \
    "${srcdir}/linux-${_kver}/samples/bpf/opensnitch-dns.o" -t \
    "$pkgdir/etc/opensnitchd"
}
