pkgname=sokit
pkgver=1.3.20150507
pkgrel=1
pkgdesc="A TCP & UDP package send / receive / transfer tool"
arch=('x86_64')
url="https://github.com/sinpolib/sokit"
license=('GLP-3')
source=("https://github.com/sinpolib/sokit/releases/download/v1.3.20150507/sokit-1.3.1-linux64.tar.bz2")
md5sums=('98048046448df1e5bba4ddc477cdc5e0')

package() {
    cd sokit-1.3.1-linux64
    install -D -m755 sokit ${pkgdir}/usr/bin/sokit
}
