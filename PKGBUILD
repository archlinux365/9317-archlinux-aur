# Maintainer: Caesim404 <caesim404 at gmail dot com>
    
pkgname=python-cfscrape
_pypiname=${pkgname/python-/}
pkgver=1.8.0
pkgrel=1
pkgdesc="A simple Python module to bypass Cloudflare's anti-bot page, using Requests"
arch=(any)
url="https://github.com/Anorov/cloudflare-scrape"
license=(MIT)
depends=(python-requests python-pyexecjs nodejs)
makedepends=(python-setuptools)
source=("https://files.pythonhosted.org/packages/source/${_pypiname::1}/${_pypiname}/${_pypiname}-${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/Anorov/cloudflare-scrape/master/LICENSE")
sha256sums=('3cf5a253d10dff68fc7c18bcf548ef31c61024c0ed3e42031ea0a90db7a49006'
            '0dee0611b80471ef37e44bd2e7bcbc59e19251b2f24bf9753cefed002830787a')


package() {
	cd "${srcdir}"
	
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	
	cd "${_pypiname}-${pkgver}"
	
	python setup.py install --root="$pkgdir" --optimize=1	
}
