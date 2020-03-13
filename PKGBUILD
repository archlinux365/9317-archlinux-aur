# Maintainer: Ilya Kurin <4uf04eG@gmail.com>

pkgname='music-overlay'
pkgver=1.3
pkgrel=1
arch=('any')
provides=('music-overlay')
pkgdesc='Small overlay for managing music players'
url='https://github.com/4uf04eG/music-overlay'
license=('GPL')
makedepends=('python-setuptools')
depends=('python' 'python-toml' 'pyside2' 'python-pynput')
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/4uf04eG/music-overlay/archive/v$pkgver.tar.gz")
md5sums=('de4c2fa8b37178cbc853b0f0b5f86c4a')

package() {
    cd "$srcdir/$pkgname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
    cp -n default_config.toml $HOME/.config/music-overlay-config
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
