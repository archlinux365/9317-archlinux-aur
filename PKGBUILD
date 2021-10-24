# Maintainer: li <lcj211@aihlp.com>

pkgname=systemd-kexec
pkgver=1.0.1
pkgrel=9
pkgdesc="systemd for kexec"
#url="https://gitlab.com/corectrl/corectrl"
license=('GPL3')
arch=('any')
depends=('kexec-tools')
#makedepends=('cmake>=3.3' 'qt5-tools' 'karchive' 'gcc>=8' 'extra-cmake-modules')
#optdepends=(
#	'vulkan-tools: For vulkaninfo'
#	'mesa-demos: For glxinfo',
#	'util-linux: For lscpu'
#)
#source=("https://gitlab.com/corectrl/corectrl/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.bz2")
source=("kexec@.service"
systemctl-restart-mainline
systemctl-restart-lts
systemctl-restart-zen
systemctl-restart
)
sha512sums=('cde894488d4587b7b0272956dedfdd7684c4fe423726e008f6217eb59a5d5dfbb5289dabde5a354ab7b612c4b5b25ce2c397e632a6c4acc7f77c6d2b8fe7bdf4'
66198c6e591d0f9cfd63c273eac793d47c42bce8b055f891fb63f94e6e709f752046529b2c7bb0c4c3fe23c83218c8321cda210832b149c86acfd20a8557437b
b878582a5858aedca4c3c53d84dda3a5b31be9f819238c5dcdf8bd49d8ca49750880177341430e3023c0d106303a9f47e2f50c31c32854716b90385e23a61d4d
37672c12e01442560b27318ae330e7d580b26295730f956c90f8b607d757a8305be4fa2a7d177eaf20f1b359d7de245928052608b966f546f21ad4ee2d9d2889
fe6f620d45145436bc46d7a497fe3aef3a4efea42f8f32444e2dc66acc5583e0e71b756d8a9ecaa8319858414165f3e03149f90682f77fb54523acbf85ecb3af

)

#Package files should follow these general directory guidelines:
#/etc	System-essential configuration files
#/usr/bin	Binaries
#/usr/lib	Libraries
#/usr/include	Header files
#/usr/lib/{pkg}	Modules, plugins, etc.
#/usr/share/doc/{pkg}	Application documentation
#/usr/share/info	GNU Info system files
#/usr/share/man	Manpages
#/usr/share/{pkg}	Application data
#/var/lib/{pkg}	Persistent application storage
#/etc/{pkg}	Configuration files for {pkg}
#/opt/{pkg}	Large self-contained packages


#build() {
 # rm -rf build
 # cmake -B build -S "$pkgname-v$pkgver" \
 # -DCMAKE_INSTALL_PREFIX=/usr \
 # -DBUILD_TESTING=OFF \
 # -Wno-dev
 # make -C build

#}

package() {
# make -C build DESTDIR="$pkgdir" install
install  -Dm644 kexec@.service  "$pkgdir/usr/lib/systemd/system/kexec@.service"
install  -Dm755 systemctl-restart-mainline  "$pkgdir/usr/bin/systemctl-restart-mainline"
install  -Dm755 systemctl-restart-lts  "$pkgdir/usr/bin/systemctl-restart-lts"
install  -Dm755 systemctl-restart-zen  "$pkgdir/usr/bin/systemctl-restart-zen"
install  -Dm755 systemctl-restart  "$pkgdir/usr/bin/systemctl-restart"
}

groups=('lcj')

