# Maintainer: Christian Rebischke <chris.rebischke@archlinux.org>

_pyname=oletools
pkgname=python2-oletools
pkgver=0.42
pkgrel=1
pkgdesc="Python tools to analyze security characteristics of MS Office and OLE files"
depends=('python2')
arch=('any')
url="https://bitbucket.org/decalage/oletools"
license=('BSD')
source=("https://bitbucket.org/decalage/oletools/downloads/$_pyname-$pkgver.tar.gz")
sha512sums=('d70d8c0dde63b8e69eafbbcda60928e6e45b306f87562a64b3b1fad94f729a04b210b2f6634e030ed69e1dd3cab61a365c875021f0e9e01f6a862f3533fadbae')

package() {
	cd "$srcdir/$_pyname-$pkgver"
	python2 setup.py install -O1 --root=$pkgdir
	install -Dm 644 ${_pyname}/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm 644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README"
	cp ${_pyname}/doc/* "${pkgdir}/usr/share/doc/${pkgname}"

	# fixing shebang line
	cd "${pkgdir}/usr/lib/python2.7/site-packages/oletools/"
	for file in *.py; do
		if [ "$file" != "__init__.py" ]; then
			sed -i '1s/python/python2/' "$file"
		fi
	done

}

# vim:set noet sts=4 sw=4 ts=4 tw=76:
