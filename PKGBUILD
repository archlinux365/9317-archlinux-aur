# Maintainer: Brian Smith
pkgname=foundationdb-clients-bin
pkgver=6.3.9
pkgrel=1
pkgdesc="FoundationDB clients and library. FoundationDB is a scalable, fault-tolerant, ordered key-value store with full ACID transactions. This package contains client utilities and libraries."
arch=('x86_64')
url="https://www.foundationdb.org"
license=('Apache 2.0')
groups=('foundationdb')
depends=('glibc>=2', 'coreutils>=8', 'tar>=1')
options=('!strip' '!emptydirs')
install=${pkgname}.install
# Remove DLAGENTS once apple can fix their stuff https://bbs.archlinux.org/viewtopic.php?id=262737
DLAGENTS=("https::/usr/bin/curl -k -o %o %u")
source_x86_64=("https://www.foundationdb.org/downloads/${pkgver}/ubuntu/installers/foundationdb-clients_${pkgver}-${pkgrel}_amd64.deb")
sha256sums_x86_64=('b4d4366afc64837e3749e3949fe312f4fe02429ce4eb44961618fb29eb48516f')

package(){

	# Extract package data
	tar xf data.tar.gz -C "${pkgdir}"

}
