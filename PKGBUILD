# Maintainer: SimPilotAdamT <adam_tazul@outlook.com>
# Contributor:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Alex Taber <aft dot pokemon at gmail dot com>
# Contributor: Louis Tim Larsen <louis(a)louis.dk>
# Contributor: Ignacio <nachohc89 at gmail dot com>
# Contributor: Gun Onen <brookline653 at yahoo dot com>
# Contributor: Christian Hesse <mai at eworm dot de>
# Contributor: Yakir Sitbon <kingyes1 at gmail dot com>
# Contributor: Alucryd <alucryd at gmail dot com>
# Contributor: Stas S <whats_up at tut dot by>
# Contributor: Hilinus <itahilinus at hotmail dot it>

# TODO: Complete tar install
# TODO: There are missing packages on a fresh Manjaro install'

_opt_Type='D' # D=Debian, R=RPM, T=tar

set -u
pkgname=teamviewer
pkgname+='-beta'
pkgver=15.33.7
pkgrel=1
pkgdesc='All-In-One Software for Remote Support and Online Meetings'
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url='https://www.teamviewer.com/en-us/download/linux/'
license=('custom')
options=('!strip')
provides=("teamviewer=${pkgver%%.*}")
conflicts=('teamviewer')
depends=(
	'qt5-base'
	'qt5-declarative'
	'hicolor-icon-theme'
	'qt5-webkit'
	'qt5-x11extras'
	'qt5-quickcontrols' # Doesn't appear in namcap, won't display UI without it.
)
optdepends=(
  'teamviewer-openrc: OpenRC scripts'
)
install=teamviewer.install
_dl='https://dl.tvcdn.de'
source_x86_64=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_amd64.deb")
source_i686=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_i386.deb")
source_armv7h=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer-host_${pkgver}_armhf.deb")
source_aarch64=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer-host_${pkgver}_arm64.deb")
sha512sums_x86_64=('e592e61dd29283857aee47a4427a093b176732c3e2a2c2cee941bbc82e74e035d3aee683fb52ff6127ca13185361da0ff320c253a2aeb06d9fa2626c4661e8d6')
sha512sums_i686=('ad5a1a872174d2cf1dcaa74524f7522026b7736ba48d9e79c2e520007b0a2c8cb5c5e70fe312dc9852db9aaf932470939e6e0dae10f79194496f1e1a925ee104')
sha512sums_armv7h=('d43a468968be6a8c4e0dd327e1b83f8df8aace7f36a83d1098a06cc2c043aeb8553003ee1096fafa51bef7207ec247088caea891eb65ded2f91a733fc65ca28f')
sha512sums_aarch64=('914c97c41b9d53507b0d3105b4788788a8bad2b9d662115481d2ff3082496bec59bc8229b5ab8e75fac11a5ee2fd45d7a71916b4c3505b59e91cd9fb8826cef1')

case "${_opt_Type}" in
'R')
  source_x86_64=("${source_x86_64[@]//_amd64.deb/.x86_64.rpm}")
  source_i686=("${source_i686[@]//_i386.deb/.i686.rpm}")
  source_armv7h=("${source_armv7h[@]//_armhf.deb/.armv7hl.rpm}")
  ;;
'T')
  source_x86_64=("${source_x86_64[@]//_amd64.deb/_amd64.tar.xz}")
  source_i686=("${source_i686[@]//_i386.deb/_i386.tar.xz}")
  source_armv7h=("${source_armv7h[@]//_armhf.deb/_armhf.tar.xz}")
  ;;
esac

prepare() {
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	local datatar
	shopt -s nullglob
	for datatar in data.tar.*; do
		msg2 "Unpacking $datatar"
		tar -xf $datatar
	done
	shopt -u nullglob
	sed -i '/function CheckQtQuickControls()/{N;a ls /usr/lib/qt/qml/QtQuick/Controls/qmldir &>/dev/null && return # ArchLinux
}' ./opt/teamviewer/tv_bin/script/teamviewer_setup || msg2 "Patching CheckQtQuickControls failed! Contact maintainer"
	sed -e 's:/var/run/:/run/:g' -i 'opt/teamviewer/tv_bin/script/teamviewerd.service'
}

check() {
	msg2 "Running teamviewer_setup checklibs"
	if ! ./opt/teamviewer/tv_bin/script/teamviewer_setup checklibs; then
		msg2 "teamviewer_setup checklibs failed, contact maintainer with /tmp/teamviewerTARLibCheck/DependencyCheck.log" # Currently it always exits 0
		false
	fi
}

package() {
	# Install
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	cp -dr --no-preserve=ownership {etc,opt,usr,var} "${pkgdir}"/

	# Additional files
	rm "${pkgdir}"/opt/teamviewer/tv_bin/xdg-utils/xdg-email
	rm -rf "${pkgdir}"/etc/apt
	rm -rf "${pkgdir}"/etc/yum.repos.d
	#touch "${pkgdir}/etc/teamviewer/global.conf" # enable later and remove from .install 8/15/2019
	install -d "${pkgdir}/var/log/teamviewer${pkgver%%.*}"
	install -D -m0644 "${pkgdir}"/opt/teamviewer/tv_bin/script/teamviewerd.service \
		"${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
	sed -e 's: NetworkManager-wait-online.service::g' -i "${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
	install -d -m0755 "${pkgdir}"/usr/{share/applications,share/licenses/teamviewer}
	ln -s /opt/teamviewer/doc/License.txt \
		"${pkgdir}"/usr/share/licenses/teamviewer/LICENSE
	if [ "$CARCH" = "x86_64" ] && [ -f "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend" ]; then
		msg2 "Removing libdepend to ditch lib32 dependencies"
		rm "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend"
	fi
}
set +u
