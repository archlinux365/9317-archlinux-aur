# Maintainer: Claudia Pellegrino <aur ät cpellegrino.de>
# Contributor: Christopher A. Williamson
# Contributor: Moritz Poldrack <moritz at poldrack dot dev>
# Contributor: Pascal Mathis <mail@pascalmathis.com>
# Contributor: Trustin Lee <t@motd.kr>
pkgname=rambox-pro-bin
_pkgname=rambox
pkgver=2.0.6
pkgrel=1
pkgdesc='Workspace browser to manage many web applications in one place'
arch=('x86_64')
url='https://rambox.app/'
license=('custom')
depends=('alsa-lib' 'gtk3' 'libxss' 'libxtst' 'nss' 'python')
provides=('rambox' 'ramboxpro')
options=('!emptydirs')
conflicts=('rambox' 'rambox-bin' 'rambox-pro-bin-beta')

# To extract the EULA as a file:
# 1. Go to https://rambox.app/eula in a Javascript-enabled browser.
# 2. Save the rendered result to an HTML file.
# 3. Run the shell command line:
#    html2text --body-width=80 file.html | awk '/^# .*EULA/,/footer_logo/ { print }' | head -n -1
source=("${_pkgname}-EULA"
        "${_pkgname}-${pkgver}.deb::https://github.com/ramboxapp/download/releases/download/v${pkgver}/Rambox-${pkgver}-linux-x64.deb")

sha256sums=('220a1fe2afa6485bfc15dde23dd081804a29f94a86ce74164082aa8b2266e662'
            'd220906d2e2cfafaed46fb8531884d21462a4e10cd0307a369b5aa2a8d6e714e')

build() {
    rm -rf "${srcdir}/root"
    mkdir -p "${srcdir}/root"
    bsdtar -xf 'data.tar.xz' -C "${srcdir}/root"
}

package() {
    install -d -m 0755 \
        "${pkgdir}/opt/${_pkgname}" \
        "${pkgdir}/usr/bin" \
        "${pkgdir}/usr/share/applications" \
        "${pkgdir}/usr/share/icons" \
        "${pkgdir}/usr/share/licenses/${pkgname}"

    cp -rp "${srcdir}/root/opt/Rambox/." "${pkgdir}/opt/${_pkgname}/."
    cp -rp "${srcdir}/root/usr/share/icons/." "${pkgdir}/usr/share/icons/."

    install -m 0644 "${srcdir}/${_pkgname}-EULA" "${pkgdir}/usr/share/licenses/${pkgname}/EULA"
    install -m 0644 "${srcdir}/root/usr/share/applications/${_pkgname}.desktop" \
        "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    ln -s "/opt/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
    sed -i "s~/opt/Rambox/~/opt/${_pkgname}/~g" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
