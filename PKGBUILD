# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

pkgname='omada-controller'
pkgver=3.2.6
_scriptsver=1.1.2
pkgrel=3
pkgdesc='Centralized EAP controller software'
arch=('x86_64')
url='https://www.tp-link.com/support/download/eap-controller/#Controller_Software'
license=('custom')
depends=('jre8-openjdk' 'java-jsvc' 'net-tools')
provides=('eap-controller')
source=(
    "https://static.tp-link.com/2020/202001/20200116/Omada_Controller_v${pkgver}_linux_x64.tar.gz"
    "${pkgname}-scripts-${_scriptsver}.tar.gz::https://github.com/conqp/omada-controller-scripts/archive/${_scriptsver}.tar.gz"
)
sha256sums=(
    'bf1fda3e1d882fa15bf8909cb4f2ede5561e5e47d7b02e422524136781aa8b12'
    '1444c2fa29cd68c0acd3464ad0d51dbdd1645da515e79a84ede706f04c82db6e'
)


package() {
    # Install required source files.
    cd "${srcdir}/Omada_Controller_v3.2.6_linux_x64"
    local BASEDIR="${pkgdir}/opt/omada-controller"
    install -dm 755 "${BASEDIR}"

    # Install custom mongodb binary.
    install -dm 755 "${BASEDIR}/bin"
    install -m 755 "bin/mongod" "${BASEDIR}/bin/"

    # Install JAR libraries.
    install -dm 755 "${BASEDIR}/lib"

    for file in lib/*; do
        install -m 644 "${file}" "${BASEDIR}/lib/"
    done

    # Install keystore.
    install -dm 755 "${BASEDIR}/keystore"

    for file in keystore/*; do
        install -m 644 "${file}" "${BASEDIR}/keystore/"
    done

    # Install *.properties config files.
    install -dm 755 "${BASEDIR}/properties"

    for file in properties/*; do
        install -m 644 "${file}" "${BASEDIR}/properties/"
    done

    # Install web applications.
    install -dm 755 "${BASEDIR}/webapps"

    for file in webapps/*; do
        install -m 644 "${file}" "${BASEDIR}/webapps/"
    done

    ### Install scripts ####

    # Install systemd units.
    cd "${srcdir}/omada-controller-scripts-${_scriptsver}"
    install -dm 755 "${pkgdir}/usr/lib/systemd/system"
    install -m 644 omada-controller.service "${pkgdir}/usr/lib/systemd/system/"

    # Install sysusers configuration.
    install -dm 755 "${pkgdir}/usr/lib/sysusers.d"
    install -m 644 "omada-controller.conf" "${pkgdir}/usr/lib/sysusers.d/"

    # Install ALPM hook and script.
    install -dm 755 "${pkgdir}/usr/share/libalpm/hooks"
    install -m 644 omada-init-user-dirs.hook "${pkgdir}/usr/share/libalpm/hooks/"
    install -dm 755 "${pkgdir}/usr/share/libalpm/scripts"
    install -m 755 omada-init-user-dirs.sh "${pkgdir}/usr/share/libalpm/scripts/omada-init-user-dirs"
}
