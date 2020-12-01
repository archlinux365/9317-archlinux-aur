# Maintainer: Paul Taylor <bao7uo at gmail dot com>
# Contributer: GI_Jack <GI_Jack@hackermail.com>
# Contributer: ArchStrike <team@archstrike.org>

pkgname=crackmapexec
_pkgname=CrackMapExec
pkgver=5.1.1dev
_pkgver=5.1.1.dev0
pkgrel=1
pkgdesc='A swiss army knife for pentesting Windows/Active Directory environments'
arch=('any')
url='https://github.com/byt3bl33d3r/CrackMapExec'
license=('GPL3')
depends=('impacket' 'python' 'python-bcrypt' 'python-beautifulsoup4'
'python-certifi' 'python-cffi' 'python-chardet' 'python-click'
'python-cryptography' 'python-dnspython' 'python-flask' 'python-future'
'python-gevent' 'python-greenlet' 'python-idna' 'python-itsdangerous'
'python-jinja' 'python-ldap3' 'python-markupsafe' 'python-msgpack'
'python-ntlm-auth' 'python-paramiko' 'python-pyasn1' 'python-pycparser'
'python-pycryptodomex' 'python-pynacl' 'python-pyopenssl' 'python-requests-ntlm'
'python-requests' 'python-six' 'python-soupsieve' 'python-termcolor'
'python-terminaltables' 'python-urllib3' 'python-werkzeug' 'python-xmltodict'
'python-ldapdomaindump' 'python-lsassy' 'python-neo4j-driver' 'python-pylnk3'
'python-pypsrp' 'python-bs4' 'python-neotime' 'python-neobolt' 'python-pywerview-git' )

makedepends=('python-setuptools' 'python-poetry')
source=("${url}/archive/v${pkgver}.tar.gz")
sha512sums=('6db9630b3b01278089976186cff4a8303b72fbf034e2ac46a4e8cf91d7057348cdf44f093c525509971de94bf79c66d73f4d76b46537a96791b2edc63b940aa5')

prepare() {
  cd $_pkgname-$pkgver
  make clean
}

build() {
  cd $_pkgname-$pkgver
  poetry build
  cd dist
  tar zxvf "${pkgname}-${_pkgver}.tar.gz"
}

package() {
  cd $_pkgname-$pkgver
  cd "dist/${pkgname}-${_pkgver}"
  python setup.py install --root=${pkgdir} --optimize=1
 
  # Needed to operate:
  install -d "${pkgdir}/usr/lib/python3.8/site-packages/cme/thirdparty/pywerview/"
  touch "${pkgdir}/usr/lib/python3.8/site-packages/cme/thirdparty/pywerview/.default"
  # Install the license
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
 
}

