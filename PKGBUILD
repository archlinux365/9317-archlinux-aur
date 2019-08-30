# Maintainer: petRUShka <petrushkin@yandex.ru>
_npmname=how-2
pkgname=how2
pkgver=1.7.3
pkgrel=1
pkgdesc="finds the simplest way to do something in a unix shell. It's like man, but you can query it in natural language (VladimirMikulic working fork)."
arch=(any)
url="https://github.com/santinic/how2"
license=(MIT)
depends=('nodejs' 'npm')
#source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz")
source=("https://github.com/VladimirMikulic/how2/releases/download/$pkgver/$_npmname-$pkgver.tgz")
noextract=($_npmname-$pkgver.tgz)
sha256sums=('6c759948d5ba50a6bab37aeaa2bd94724a11ae7daf9d2040f4b67e932ee2555a')
conflicts=('nodejs-how2')


package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install -g --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"
  install -Dm644 "${_npmname}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE" 

  # Fix NPM racecondition, also known as derp
  find "$pkgdir/usr" -type d -exec chmod 755 '{}' +
}
