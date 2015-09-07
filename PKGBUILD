# Maintainer:  respiranto         <respiranto@icloud.com>
# Contributor: Jan Keith Darunday <jkcdarunday@gmail.com>
# Contributor: Enrico Morelli     <morelli@cerm.unifi.it>
pkgname=dict-foldoc
pkgver=20150906_190301
pkgrel=1
pkgdesc="The Free On-line Dictionary of Computing for dict"
arch=('any')
url="http://foldoc.org/"
license=('GPL')
optdepends=('dictd: dict client and server')
makedepends=('dictd')
provides=('dictd-foldoc')
conflicts=('dictd-foldoc')
install=$pkgname.install
source=("http://foldoc.org/Dictionary.txt")
md5sums=('SKIP')

pkgver()
{
	_datestr=$(curl -sI foldoc.org/Dictionary.txt | grep "Last-Modified" \
		| cut -c 21-)
	date --utc --date="$_datestr" +%Y%m%d_%H%M%S
}

prepare()
{
	# correct some misspellings; to be extended
	sed -i 's/ cheifly/ chiefly/;s/amd the need/and the need/' Dictionary.txt
}

build()
{
	cat Dictionary.txt | dictfmt -f \
		--allchars -u http://foldoc.org/Dictionary.txt \
		-s "The Free On-line Dictionary of Computing ($pkgver)" \
		--utf8 foldoc
	dictzip -v foldoc.dict
}

package()
{
	mkdir -p $pkgdir/usr/share/dictd
	cp foldoc.{dict.dz,index} $pkgdir/usr/share/dictd/
}
