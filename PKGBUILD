# Maintainer: Trevor Bramble <inbox@trevorbramble.com>

pkgname=chef-workstation
pkgver=0.8.7
pkgrel=1
_ubunturel=18
_ubuntuver=04
pkgdesc="Chef Workstation gives you everything you need to get started with Chef. Start scanning and configuring your environments today with InSpec and chef-run."
arch=('x86_64')
url="https://downloads.chef.io/chef-workstation/"
license=('Apache')
depends=()
conflicts=(chef-dk chef chef-solo chef-client)
source=("https://packages.chef.io/files/stable/${pkgname}/${pkgver}/ubuntu/${_ubunturel}.${_ubuntuver}/${pkgname}_${pkgver}-1_amd64.deb")
sha256sums=('7086dbfcff02666d54af8dd4e9ad5a803027c1326a6fcc1442674ba4780edb5a')

package() {
  cd "$srcdir"
  bsdtar -xf data.tar.xz -C "$pkgdir"

  mkdir -p "$pkgdir/usr/bin"

  chefdk_binaries="berks chef chef-apply chef-client chef-shell chef-solo chef-vault cookstyle dco delivery foodcritic inspec kitchen knife ohai push-apply pushy-client pushy-service-manager"
  binaries="chef-run chefx $chefdk_binaries"

  for binary in $binaries; do
    ln -s "/opt/$pkgname/bin/$binary" "$pkgdir/usr/bin/" || error_exit "Cannot link $binary to /usr/bin"
  done

  chown -Rh 0:0 "$pkgdir"
  chmod -R 755 "$pkgdir/opt"
}
