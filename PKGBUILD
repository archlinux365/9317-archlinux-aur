# Maintainer: Michael Goehler <somebody dot here at gmx dot de>

pkgname=remarkable
pkgver=1.62
pkgrel=2
pkgdesc="A free fully featured markdown editor for Linux."
arch=('i686' 'x86_64')
url="http://remarkableapp.github.io"
license=('MIT')
depends=('python'
         'python-cairo'
         'python-gobject'
         'python-markdown'
         'python-beautifulsoup4'
         'python-gtkspellcheck'
         'webkitgtk'
         'wkhtmltopdf')
makedepends=('python')
options=('!emptydirs' '!strip')
install="${pkgname}.install"
source=("${pkgname}_${pkgver}_all.deb::http://remarkableapp.github.io/files/${pkgname}_${pkgver}_all.deb"
        "${pkgname}.install"
        "RemarkableWindow.patch")
md5sums=('4caa1f953cc05010bf255f34dcce8c1f'
         '4230de2876e8789bcd5a7cdc84b2a30b'
         '9de20a57ddfea4458c8190c101541751')

package() {
    _python_site=$(python -c 'import site; print(site.getsitepackages()[0]);')
    [ -z ${_python_site} ] && echo "error: could not identify python site_packages directory" && return 1

    msg2 "Extracting data.tar.gz..."
    tar -Jxf data.tar.xz -C "${pkgdir}/"

    msg2 "Fixing GtkBuilder error..."
    patch -d "${pkgdir}" -Np1 <"${srcdir}"/RemarkableWindow.patch

    msg2 "Moving parts in place..."

    # python
    install -d "${pkgdir}/${_python_site}"
    mv  "${pkgdir}/usr/lib/python3/dist-packages/"* "${pkgdir}/${_python_site}/"

    # license
    install -d "${pkgdir}/usr/share/licenses/${pkgname}/"
    curl -Ls "${url}/license.txt" \
         -o "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"

    msg2 "Fixing module include path..."
    sed -i "s/import undobuffer/from remarkable import undobuffer/" \
           "${pkgdir}/${_python_site}/remarkable/RemarkableWindow.py"

    msg2 "Removing unnecessities..."
    rm -r "${pkgdir}/usr/lib/mime"
}

# vim:set ts=4 sw=4 et:
