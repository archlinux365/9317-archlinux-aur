# Maintainer: Kieran Colford <kieran@kcolford.com>
pkgname=ddns-git
pkgver=r32.ed34656
pkgrel=1
pkgdesc="Automatic provisioning of dynamic DNS"
arch=('any')
url="https://github.com/kcolford/ddns"
license=('GPL')
groups=()
depends=('bash' 'bind-tools' 'coreutils' 'inetutils' 'sed' 'systemd')
makedepends=('git')
optdepends=('bind: for tsig-keygen'
	    'curl: for looking up your ip address'
	    'openssh: for updating SSHFP records')
provides=('ddns')
conflicts=('ddns')
replaces=()
backup=()
options=()
install=
source=('ddns::git+https://github.com/kcolford/ddns')
md5sums=('SKIP')
noextract=()

pkgver() {
	cd "$srcdir/ddns"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/ddns"

  install -Dm755 ddns.sh "$pkgdir/usr/bin/ddns.sh"
  install -Dm644 systemd/ddns.service "$pkgdir/usr/lib/systemd/system/ddns.service"
  install -Dm644 systemd/ddns.timer "$pkgdir/usr/lib/systemd/system/ddns.timer"
  mkdir -pm700 "$pkgdir/etc/ddns/"
}
