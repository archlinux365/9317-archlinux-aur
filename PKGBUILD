# Maintainer: <   Ron  Varburg  AT  yahoo  com   >

pkgname=powerofforreboot.efi
pkgver=20190517
pkgrel=1
pkgdesc="Utilities to be used from within a UEFI boot manager or shell"
license=('GPL')
arch=('i686' 'x86_64')
makedepends=('gnu-efi-libs')
source=('Makefile' 'poweroff.c' 'reboot.c' 'readme')
sha512sums=('927cc21ebd903a2615743489ba727b797a4c2f8eb933b490a6d4c64d8311ca1db771cac98259cbe2ecd28d35f9a23e87eb4ffd2596d5434a8d9f46d0d23ef39c' # Makefile
            '101fbb26dfce18513463af53d43c357066e4bc1277866146a8b1893367196792a5a0ef428d59a692cd71c90baeeed8f90cfafaa44a2a2539f21b4f2243d12ea0' # poweroff.c
            '09876c713d9196e1e9bc365e27348756411d4cdce5c0ed721daea679ad6bfc05b4066cd2a6c051972b374f58b5a7dce864b8562bd313c4ed95abbe0ca61fdcf6' # reboot.c
            'd4651e2a1520781f9c942289c55b67fc64021279e6d656e9e266f232a8969065d13ae3159ee2db5ebe35a282c0544bb5e88dd5e1c0b869e71deecb6fb6e4ffea' # readme
           )

build() {
    make
}

package() {
    install --directory ${pkgdir}/usr/share/${pkgname}
    install --mode=-x,go=r --target-directory=${pkgdir}/usr/share/${pkgname} *.efi readme
}
