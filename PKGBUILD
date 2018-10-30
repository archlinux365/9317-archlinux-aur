#Maintainer: Bhoppi Chaw <bhoppi#outlook,com>

pkgname=neroaac
pkgver=1.5.4.0
pkgrel=5
pkgdesc='Nero AAC audio codec (dec/enc/tag) all-in-one.'
arch=(x86_64)
url='https://wiki.hydrogenaud.io/index.php?title=Nero_AAC'
license=(custom)
depends_x86_64=(lib32-gcc-libs)
#depends_i686=(gcc-libs)
source=('https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Tumbleweed/Multimedia/x86_64/nero-aac-1.5.1-3.24.x86_64.rpm')
sha256sums=('d5ee4f588d1ebede8f385b0f03fc2a2b7e4c184b041c59b60463d7a523cbced5')
conflicts=(neroaacdec neroaacenc neroaactag)
provides=(neroaacdec neroaacenc neroaactag)

package() {
    install -D -m755 -t "$pkgdir/usr/bin" usr/bin/*
    install -D -m644 -t "$pkgdir/usr/share/doc/$pkgname" usr/share/doc/packages/nero-aac/*
}
