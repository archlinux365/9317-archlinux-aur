# Maintainer: Martins Mozeikox <martins.mozeiko@gmail.com>

pkgname=standardfile-bin
pkgver=0.5.0
pkgrel=1
pkgdesc='Standard File Server, Go Implementation'
url='https://github.com/tectiv3/standardfile'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
license=('MIT')
depends=('glibc')
backup=('etc/standardfile.yaml')
source_i686=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_32-bit.tar.gz")
source_x86_64=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_64-bit.tar.gz")
source_arm=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_arm6.tar.gz")
source_armv6h=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_arm6.tar.gz")
source_armv7h=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_arm7.tar.gz")
source_aarch64=("https://github.com/tectiv3/standardfile/releases/download/v${pkgver}/standardfile_${pkgver}_linux_arm8.tar.gz")
sha256sums_i686=('a87fe60aa2a172526c5aae46a6a099b7bde40f67f3b43f408fdd2410669a2aa0')
sha256sums_x86_64=('c8120132c7d148e28f8e4a4670d30fb715e256611bf97903991cbc20f7742fd7')
sha256sums_arm=('24b91436a6dd4d53186edfaaed8d33c6ac4d19a83555044ba4fcebd44a8ada25')
sha256sums_armv6h=('24b91436a6dd4d53186edfaaed8d33c6ac4d19a83555044ba4fcebd44a8ada25')
sha256sums_armv7h=('458bbf2fe58af523e9d816cf8727b324ad66f246ad51fedabf18e31558cec751')
sha256sums_aarch64=('2ca2e7f883387c127fc1fc4de3372639a199ae502f37d7340546455a81af65c9')
source=(standardfile.service
        standardfile.sysusers
        standardfile.tmpfiles
        standardfile.yaml)
sha256sums=('0162b6f97c6fda82a2b86e1b544ae10cb0d17e7561a3b3930d782dfef5a89d74'
            'a5e8669b915dc6553f0af9137840adfabb020f391846d9f3ab3dbe3175d320fa'
            '2014138283a50581136b85a4d4964ee70821cb0ed965fa5acc1c3d7611855288'
            '46c37eca9600032a36c510fed63838e003f46b967b19538ff7cbc26a74849a54')

package() {
  install -Dm 755 "${srcdir}/standardfile"          "${pkgdir}/usr/bin/standardfile"
  install -Dm 644 "${srcdir}/standardfile.service"  "${pkgdir}/usr/lib/systemd/system/standardfile.service"
  install -Dm 644 "${srcdir}/standardfile.sysusers" "${pkgdir}/usr/lib/sysusers.d/standardfile.conf"
  install -Dm 644 "${srcdir}/standardfile.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/standarfile.conf"
  install -Dm 644 "${srcdir}/standardfile.yaml"      "${pkgdir}/etc/standardfile.yaml"
}
