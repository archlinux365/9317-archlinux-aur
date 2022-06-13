# Maintainer: Gordian Edenhofer <gordian.edenhofer@gmail.com>

pkgname=papermc
# curl -X GET "https://papermc.io/api/v2/projects/paper" -H  "accept: application/json"
_pkgver=1.19
# curl -X GET "https://papermc.io/api/v2/projects/paper/versions/${_pkgver}" -H  "accept: application/json"
_build=8
_license_commit=31f0137
pkgver="${_pkgver}+b${_build}"
pkgrel=1
_mng_ver=1.0.2
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
	"LICENSE_${pkgver}.md"::"https://raw.githubusercontent.com/PaperMC/Paper/${_license_commit}/LICENSE.md"
	"minecraft-server-${_mng_ver}.tar.gz"::"https://github.com/Edenhofer/minecraft-server/archive/refs/tags/v${_mng_ver}.tar.gz")
noextract=("papermc.${pkgver}.jar")
sha512sums=('4eac0e336e3480567e84db0618bab16fecf97d352bef94aa69acf33ecc1edd300aa649989dd92c17a2be168c1092310524d0e05d57a93eccf9e70f181ae4786d'
            'e801ac8f8902483adf67f3b5029c8710bf378b27f5b5860d4fff169cedacc856b987333afed9e2640fdd8f6d5d98ca5eef076b82b720be7335ab46ecd5dfa184'
            '11d708d511b63e5541bcc1dbcaf29abbf7cb9583b1d313028770a39b26b41d48dcba023f7e1d6fe30f3c093d20e10a43363011edd432e5785a4580e5c5f852a6')

_game="papermc"
_server_root="/srv/papermc"

build() {
	make -C "${srcdir}/minecraft-server-${_mng_ver}" clean

	make -C "${srcdir}/minecraft-server-${_mng_ver}" \
		GAME=${_game} \
		INAME=${_game} \
		SERVER_ROOT=${_server_root} \
		BACKUP_PATHS="world" \
		GAME_USER=${_game} \
		MAIN_EXECUTABLE=papermc_server.jar \
		SERVER_START_CMD="java -Xms512M -Xmx1024M -jar ./papermc_server.jar nogui" \
		all
}

package() {
	make -C "${srcdir}/minecraft-server-${_mng_ver}" \
		DESTDIR="${pkgdir}" \
		GAME=${_game} \
		INAME=${_game} \
		install

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
