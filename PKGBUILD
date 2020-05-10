# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
pkgname=readonly-cache
pkgname1=readonly-cache
pkgdesc="https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks#Read-only_cache + golang http server & more"
pkgver=0.0.4
pkgrel=1
arch=('any')
license=()
makedepends=(go)
source=(
"aur-local.sh"
"aur-remote.sh"
"readonly-cache.sh"
"readonly-cache.service"
"readonlycache.go"
"PKGBUILD.sig")
sha256sums=('5a6b53cc5b81fff816b4c1725d782ee5fe4a7a03ff113d88d0301c26674b0fa7'
            '4bb84c689166a3f2a6c547a5a7e6377eefaa89aac91908a1056a1caa072de644'
            '75d53916d30a336282690c12da28f131f03cceb2eb0ce88b3ab4d5f9a703d680'
            'ccfe41daa38a45b0498cc6dd9f6636db4a7e835ee5c48c3e952cac038006b5f4'
            '49d2b91d3eebc90ff5b9a7f5beec69e6c15791aec43dc318ac1855226fa7fa7a'
            'SKIP')
            validpgpkeys=('DE08F924EEE93832DABC642CA8DC761B1C0C0CFC')  # Moses Narrow <moe_narrow@use.startmail.com>

build() {
  gpg --verify ../PKGBUILD.sig ../PKGBUILD
  go build readonlycache.go
}

package() {
	#mkdir -p ${pkgdir}/etc/systemd/system
	mkdir -p ${pkgdir}/usr/lib/systemd/system
	mkdir -p ${pkgdir}/usr/bin
	rmextension=".sh"
	rcscripts=$(ls *.sh)
	rcservices=$(ls *.service)
for i in $rcscripts ; do
	install -Dm755 ${i} ${pkgdir}/usr/bin/${i//$rmextension}
done
for i in $rcservices ; do
	install -Dm644 ${i} ${pkgdir}/usr/lib/systemd/system/${i}
	done
	install -Dm755 readonlycache ${pkgdir}/usr/bin/
}
