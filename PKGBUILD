# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: Jonathan Steel <jsteel at aur.archlinux.org>

set -u
_pkgnick='Net_SMTP'
_pkgnickl="${_pkgnick,,}"
pkgname="pear-${_pkgnickl//_/-}"
pkgver='1.8.1'
pkgrel='1'
pkgdesc="an implementation of the SMTP protocol using PEAR's Net_Socket class"
arch=('any')
url="http://pear.php.net/package/${_pkgnick}"
license=('PHP')
depends=('php>=5.4.0')
depends+=('pear-net-socket>=1.0.7')
optdepends=('pear-auth-sasl2') # 'pear-auth-sasl>=1.0.5'
makedepends=('php-pear')
options=('!strip')
_verwatch=("http://pear.php.net/package/${_pkgnick}/download" "\([0-9]\+\.[0-9]\+\.[^\.]\+\).*" 't')
source=("http://download.pear.php.net/package/${_pkgnick}-${pkgver}.tgz")
noextract=("${_pkgnick}-${pkgver}.tgz")
sha256sums=('8dce06f8ca4cd3c14e68817e4802fea1518428ddc97bf8b404a40feaa3e8a577')

package() {
  set -u
  cd "${srcdir}"
  local _PEARDIR="${pkgdir}/usr/share/pear"
  local _PEAROPTS=(-D php_dir="${_PEARDIR}" -D doc_dir="${_PEARDIR}/doc")
  _PEAROPTS+=(-D test_dir="${_PEARDIR}/test")
  _PEAROPTS+=(-D data_dir="${_PEARDIR}/data")
  pear "${_PEAROPTS[@]}" install -O -n "${_pkgnick}-${pkgver}.tgz"
  rm -r "${_PEARDIR}"/{.channels,.depdb*,.filemap,.lock,.registry}
  set +u
}
set +u
