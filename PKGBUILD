# Maintainer: Tinu Weber <martin.weber@epfl.ch>

pkgname=epfl-scripts-git
pkgver=r64.6f19292
pkgrel=1
arch=(any)

pkgdesc="Collection of scripts for simplifying one's life at EPFL"
url='https://gitlab.gnugen.ch/gnugen/epfl-scripts'
license=(Apache)

provides=(epfl-scripts)
conflicts=(epfl-scripts)

depends=(coreutils)
optdepends=('iproute2: network-namespaces in epfl-vpn'
            'iptables: network-namespaces in epfl-vpn')

source=('git+https://gitlab.gnugen.ch/gnugen/epfl-scripts.git')
md5sums=(SKIP)

pkgver() {
  cd epfl-scripts
  printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  depends+=(curl bash file openconnect perl-html-tree perl-io-stringy
            perl-lwp-protocol-https perl-html-treebuilder-xpath
            perl-www-mechanize perl-xml-xpathengine sh)

  cd epfl-scripts
  install -Dm 755 bin/epfl-vpn "$pkgdir"/usr/bin/epfl-vpn
  install -Dm 755 bin/gnupaste "$pkgdir"/usr/bin/gnupaste
  install -Dm 755 bin/pastegnugen.pl "$pkgdir"/usr/bin/pastegnugen.pl
  install -Dm 755 bin/tl.pl "$pkgdir"/usr/bin/tl.pl
  install -Dm 755 bin/velo.pl "$pkgdir"/usr/bin/velo.pl
}
