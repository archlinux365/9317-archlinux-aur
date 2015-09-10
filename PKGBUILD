# Maintainer: Carl George < arch at cgtx dot us >

_name="python-neutronclient"
_module="${_name#python-}"
_cmd="${_module%client}"

pkgname=("python-${_module}" "python2-${_module}")
pkgver="3.0.0"
pkgrel="1"
pkgdesc="CLI and Client Library for OpenStack Networking"
arch=("any")
url="https://github.com/openstack/${_name}"
license=("Apache")
makedepends=("python-pbr>=1.3" "python2-pbr>=1.3")
source=("https://pypi.python.org/packages/source/${_name:0:1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('f6dc2e514e99df4f7eaf9f983a19344a5f38adf323d71f2908c872f8eba88e2f')

prepare() {
    cd "${srcdir}/${_name}-${pkgver}"
    sed -ri '/argparse/d' requirements.txt
}

package_python-neutronclient() {
    depends=("python-babel>=1.3"
             "python-cliff>=1.14.0"
             "python-iso8601>=0.1.9"
             "python-keystoneclient>=1.6.0"
             "python-netaddr>=0.7.12"
             "python-oslo-i18n>=1.5.0"
             "python-oslo-serialization>=1.4.0"
             "python-oslo-utils>=2.0.0"
             "python-pbr>=1.6"
             "python-requests>=2.5.2"
             "python-simplejson>=2.2.0"
             "python-six>=1.9.0")
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1
    install -Dm644 "tools/${_cmd}.bash_completion" "${pkgdir}/usr/share/bash-completion/completions/${_cmd}"
}

package_python2-neutronclient() {
    depends=("python2-babel>=1.3"
             "python2-cliff>=1.14.0"
             "python2-iso8601>=0.1.9"
             "python2-keystoneclient>=1.6.0"
             "python2-netaddr>=0.7.12"
             "python2-oslo-i18n>=1.5.0"
             "python2-oslo-serialization>=1.4.0"
             "python2-oslo-utils>=2.0.0"
             "python2-pbr>=1.6"
             "python2-requests>=2.5.2"
             "python2-simplejson>=2.2.0"
             "python2-six>=1.9.0")
    cd "${srcdir}/${_name}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1
    mv "${pkgdir}/usr/bin/${_cmd}" "${pkgdir}/usr/bin/${_cmd}2"
    install -Dm644 "tools/${_cmd}.bash_completion" "${pkgdir}/usr/share/bash-completion/completions/${_cmd}2"
    sed -i '/complete -F/ s/$/2/' "${pkgdir}/usr/share/bash-completion/completions/${_cmd}2"
}
