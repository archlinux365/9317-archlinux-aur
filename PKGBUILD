# Maintainer: Gordian Edenhofer <gordian.edenhofer@gmail.com>

pkgname=papermc
# curl -X GET "https://papermc.io/api/v2/projects/paper" -H  "accept: application/json"
_pkgver=1.17.1
# curl -X GET "https://papermc.io/api/v2/projects/paper/versions/${_pkgver}" -H  "accept: application/json"
_build=341
_license_commit=f25facb
pkgver="${_pkgver}+b${_build}"
pkgrel=1
pkgdesc="Next generation of Minecraft server, compatible with Spigot plugins and offering uncompromising performance"
arch=('any')
url="https://papermc.io/"
license=('custom')
depends=('java-runtime-headless>=16' 'tmux' 'sudo' 'bash' 'awk' 'sed')
optdepends=("tar: needed in order to create world backups"
	"netcat: required in order to suspend an idle server")
conflicts=('papermc-git')
backup=('etc/conf.d/papermc')
install="${pkgname}.install"
source=("papermc.${pkgver}.jar"::"https://papermc.io/api/v2/projects/paper/versions/${_pkgver}/builds/${_build}/downloads/paper-${_pkgver}-${_build}.jar"
	"papermc-backup.service"
	"papermc-backup.timer"
	"papermc.service"
	"papermc.conf"
	"papermc.sh"
	"papermc.tmpfiles"
	"papermc.sysusers"
	"LICENSE_${pkgver}.md"::"https://raw.githubusercontent.com/PaperMC/Paper/${_license_commit}/LICENSE.md")
noextract=("papermc.${pkgver}.jar")
sha512sums=('706369d0181e8ca17d689b782adb75f165f40fbc2aff07791fb10ab9cb2805f27a6cc759d8d09bd5987806611b38441174b90c2104b19dc71ea668abb12766ec'
            'a4fcc9f28436c0163e9414f2793fcbd4f6ea74772230cdff4a628246eae2a8008688b3dfb94d433f8f0887cd7eea3fe43ce25f9d5812d46e62179ff315b62895'
            '51c5345155e8640d4f1eaef0c8cfb890ae46063f2d4e7a0fe181ad4c8ff7b96fea88b0f9fc74031d589dfd61602f37b440f183ca1859835930fe69d37508cd42'
            'f29c4044d9e3cc5ab137c21f7e62399b36d7e1f777d5558a39f7b4a01de75bdf2de0b8678e424accc03934ca7db9ebb6a22c78c8c4497759287dd55e1c3eb456'
            'fe268d7380f881229100700b1d4f4897904a630aa65b0b06bba08be5d5918f208d497e01fc5306deecd5d93a78cfdb7e9c7f1c3b910b3a414ce9af186a05224d'
            '56c32b28ad6b3363e5de65860752457c780a1028314371319898b9896e3baec2bf662c64c59ea10a8efaf2273d014b5dfbd9c7bb66c6787de4b35e9341ca2582'
            'c40cba5dfbf5af5d206cd42fa2b43f2321b481f83ab79c9ce4eaa76f204abab48ff2d8b8526a1a3d82636be97f18596d4343b0efc72a7082642e4af8d1b561c5'
            '115fe7213d7edd0e3159607a31b28edb6e6b3bd1d454d516973e38c8cf0b803275c2c4e59b29e2260561270d931c71bad134046535e5add309e0a8d055cde0ff'
            '3caa140e6545b7d61a182874cf5578050ad3f74c7e95fc5643b8c7594672bbbd9161381aa9c93b51248e12e60c6411d47fbb426ce3c22389bc8161c17278382e')

_game="papermc"
_server_root="/srv/papermc"

package() {
	install -Dm644 ${_game}.conf              "${pkgdir}/etc/conf.d/${_game}"
	install -Dm755 ${_game}.sh                "${pkgdir}/usr/bin/${_game}"
	install -Dm644 ${_game}.service           "${pkgdir}/usr/lib/systemd/system/${_game}.service"
	install -Dm644 ${_game}-backup.service    "${pkgdir}/usr/lib/systemd/system/${_game}-backup.service"
	install -Dm644 ${_game}-backup.timer      "${pkgdir}/usr/lib/systemd/system/${_game}-backup.timer"
	install -Dm644 ${_game}.sysusers          "${pkgdir}/usr/lib/sysusers.d/${_game}.conf"
	install -Dm644 ${_game}.tmpfiles          "${pkgdir}/usr/lib/tmpfiles.d/${_game}.conf"
	install -Dm644 ${_game}.${pkgver}.jar     "${pkgdir}/${_server_root}/${_game}.${pkgver}.jar"
	ln -s "${_game}.${pkgver}.jar" "${pkgdir}${_server_root}/${_game}_server.jar"

	# Link the log files
	mkdir -p "${pkgdir}/var/log/"
	install -dm2755 "${pkgdir}/${_server_root}/logs"
	ln -s "${_server_root}/logs" "${pkgdir}/var/log/${_game}"

	# Give the group write permissions and set user or group ID on execution
	chmod g+ws "${pkgdir}${_server_root}"

	install -D ./LICENSE_${pkgver}.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
