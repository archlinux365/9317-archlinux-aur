# Maintainer: Simon Weald <simon[at]simonweald[dot]com>

pkgname=sonobuoy-bin
_srcname=sonobuoy
pkgdesc="A diagnostic tool that makes it easier to understand the state of a Kubernetes cluster by running a set of Kubernetes conformance tests in an accessible and non-destructive manner."
pkgver=0.52.0
pkgrel=1
provides=('sonobuoy')
arch=('x86_64')
url="https://github.com/vmware-tanzu/sonobuoy"
license=('apache')
source=("${_srcname}-${pkgver}.tar.gz::${url}/releases/download/v${pkgver}/${_srcname}_${pkgver}_linux_amd64.tar.gz")
sha256sums=('46c514a9336f363b4a898149b4eed74b897ac92ee901e3f81d1c05487891cc9b')

package() {
    cd ${srcdir}
    tar -xzf $_srcname-$pkgver.tar.gz
    install -Dm755 "$srcdir/$_srcname" "$pkgdir/usr/bin/$_srcname"
}
