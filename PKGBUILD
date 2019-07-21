# Maintainer: David Birks <david@tellus.space>

pkgname=kube-forwarder
pkgver=1.2.0
pkgrel=1
pkgdesc='Easy to use Kubernetes port forwarding manager'
arch=('x86_64')
depends=('electron')
makedepends=('npm')
url='https://github.com/pixel-point/kube-forwarder'
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/pixel-point/kube-forwarder/archive/v${pkgver}.tar.gz"
        'kube-forwarder.desktop'
        'kube-forwarder.sh')
sha512sums=('cdd07350d20224234f12c19573d2f8adfe7679d8630e50b58e7120724c3e4b90697bae28ee6a1c0116017c1f178f80adf38125b5ff39ab694b9868c4c7583e11'
            '7e05c6d152488a9aa56e9c4aa01797f263ba09de1f6b91af487619ad424a833be6b2af722719aebd1906a74430b7ef8c93c5c4e7aef80c4a04776d8cce93ffd6'
            '808d36263a068ab068b7ee52a578cc194c4e37193009e3cc2393ef5dc03d2b4b11c9ab11da4d399c5a05e1dbeaa3916fe06886e61cd4f1226b488e135aa2d94d')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"
  npm install --cache "${srcdir}/npm-cache"

  cp .env.example .env.production
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  npm run build --linux --cache "${srcdir}/npm-cache"
}

package() {
  # Install app.asar and launcher script
  install -D "$srcdir/$pkgname-$pkgver/build/linux-unpacked/resources/app.asar" "$pkgdir/usr/share/kube-forwarder/app.asar"
  install -D "$srcdir/kube-forwarder.sh" "$pkgdir/usr/bin/$pkgname"

  # Install desktop file and icon
  install -D "$srcdir/kube-forwarder.desktop" "$pkgdir/usr/share/applications/kube-forwarder.desktop"
  install -D "$srcdir/$pkgname-$pkgver/build/icons/1024x1024.png" "$pkgdir/usr/share/pixmaps/kube-forwarder.png"
}
