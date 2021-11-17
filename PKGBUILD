# Maintainer: Sanpi <sanpi+aur@homecomputing.fr>
pkgname=emsdk
pkgver=2.0.34
pkgrel=2
pkgdesc='The Emscripten SDK'
arch=('x86_64')
url='https://kripken.github.io/emscripten-site/'
license=('MIT')
depends=('python' 'cmake')
source=("https://github.com/emscripten-core/emsdk/archive/${pkgver}.tar.gz"
        'emsdk'
        'emsdk_env.sh')
sha256sums=('a96ddf34de8de779c78be2785df04ae63c9a557da9e83e85332cda3d01bca250'
            'd58940585324e582621a8ac5e28e913beee14a0b8e307f5413a6b0dcd6d2a139'
            'cd14a9107ca2cd92ec7ab2e44b8ca86ae71e81e744d700b49e75fbcb9717b5ce')

package()
{
    install --mode 755 --directory "$pkgdir/usr/bin"
    install --mode 755 emsdk emsdk_env.sh "$pkgdir/usr/bin/"

    cd "$srcdir/emsdk-${pkgver}"

    install --mode 755 --directory "$pkgdir/usr/lib/$pkgname"
    for file in emsdk emsdk.py *.json *.txt emsdk_env.*; do
        install --mode 755 "$file" "$pkgdir/usr/lib/$pkgname"
    done
}
