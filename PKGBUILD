# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: Julio González <juliolokoo at gmail dot com>
# Contributor: Jose Valecillos <valecillosjg (at) gmail (dot) com>
# Contributor: Thiago Perrotta <echo dGhpYWdvcGVycm90dGE5NUBnbWFpbC5jb20K | base64 -d >
# Contributor: alegotta <algottardi at disroot dot org>
# Contributor: oguzkagan <me@oguzkaganeren.com.tr>

pkgname='xampp'
pkgver='7.3.11'
pkgrel=2
pkgdesc="A free and open source cross-platform web server package (LAMP Stack), consisting mainly of the Apache HTTP Server, MySQL database, and interpreters for scripts written in the PHP and Perl programming languages"
url="http://www.apachefriends.org/"
license=('GPL')
arch=('x86_64')
depends=('net-tools')
optdepends=('polkit: to run XAMPP Manager from menu')
makedepends=('fakeuser-git' 'sdx')
source=('lampp.service'
	'xampp-manager.desktop'
	'xampp-manager.png'
    'bitrock-unpacker.tcl')
source_x86_64=("https://www.apachefriends.org/xampp-files/${pkgver}/${pkgname}-linux-x64-${pkgver}-0-installer.run"
	'org.freedesktop.xampp-manager.policy'
	'xampp-manager-polkit')
options=(!strip)
install='xampp.install'
sha256sums=('9aa2e9b2ec768b7e0d5394cf27653a7c9d0291a890d058293109f1aeace79150'
            '595de672753af57c4abf1b4549530bba02b004bd45dfa82054d58ea3a174a4e6'
            '3df1d2fa8a8dbba21944045503b94315e5b7bc38b968ca5a816a57b83c6fd77a'
            '21d9b2742e067b72baa1485bef92a20b3d3af5741b61f56ebd7678e162012016')
sha256sums_x86_64=('53710f3d8c5a0b4d145382243093fde927c28a6dc3cf8e3af5bbe2b1c03465ad'
                   '4092631d86ec1c3a155bfec76ea2c8433426a13f12a7a5866f843a099f1ca418'
                   '210beb9372baf79f01b783db6d93a0f9a07289af64dd72d9e09baecd0799a76b')

# Make sure to synchronize the UUID declared here with the one declared in `xampp.install`
_mysql_uuid=992

_fakeadd_error() {

	echo
	echo 'A problem occurred while attempting to launch fakeuser. Due to limitations of'
	echo 'the .run file of this package, you must create a mysql user in your system'
	echo 'before building the package.'
	echo
	echo 'You can create a mysql user by launching:'
	echo
	echo "  groupadd mysql -g ${_mysql_uuid}"
	echo "  useradd -u ${_mysql_uuid} -r -g mysql -s /bin/false mysql"
	echo

	return 1

}

prepare() {

	cd "${srcdir}"

	# Against proot error `proot info: pid XXXX: terminated with signal 11`
	export PROOT_NO_SECCOMP=1

	# Enable fakeadd under fakeroot environment
	export LD_PRELOAD='/usr/lib/fakeuser/libfakeuser.so'

}
package() {

	cd "${srcdir}"

	install -dm755 "${pkgdir}/opt/lampp"
    
	msg 'Creating a temporary mysql user/group with fakeadd...'

	getent group mysql > /dev/null || fakeadd -G -n mysql -g "${_mysql_uuid}" || _fakeadd_error
	getent passwd mysql > /dev/null || fakeadd -U -n mysql -g "${_mysql_uuid}" -u "${_mysql_uuid}" -s /bin/false || _fakeadd_error

	msg 'Extracting package...'

	chmod +x "${srcdir}/${pkgname}-linux-x64-${pkgver}-0-installer.run"
    
        ./bitrock-unpacker.tcl ${srcdir}/xampp-linux-x64-7.3.11-0-installer.run ${pkgdir}
	msg 'Copying executables and launcher...'
	cp -a "${pkgdir}/xampp_core_files/xampp_core_folder"/. "${pkgdir}/opt/lampp"
	cp -a "${pkgdir}/xampp_developer_files/xampp_developer_folder"/. "${pkgdir}/opt/lampp"
	cp -a "${pkgdir}/native_apache_adapter/apache_xampp_linux"/. "${pkgdir}/opt/lampp"
	cp -a "${pkgdir}/native_proftpd_adapter/proftpd_xampp_linux/proftpd"/. "${pkgdir}/opt/lampp/proftpd"
	cp -a "${pkgdir}/native_mysql_adapter/mysql_xampp_linux/mysql"/. "${pkgdir}/opt/lampp/mysql"
	cp -a "${pkgdir}/manager/binary"/. "${pkgdir}/opt/lampp"
	cp -a "${pkgdir}/common_native_adapter/common"/. "${pkgdir}/opt/lampp"
	chmod g-s -R "${pkgdir}/opt/lampp"

	# Licenses
	install -dm755 "${pkgdir}/usr/share/licenses/xampp"
	cp "${pkgdir}/xampp_core_files/xampp_core_folder/licenses"/* "${pkgdir}/usr/share/licenses/xampp"

	# Executables
	install -dm755 "${pkgdir}/usr/bin"
	ln -sf '/opt/lampp/lampp' "${pkgdir}/usr/bin/xampp"
	ln -sf '/opt/lampp/lampp' "${pkgdir}/usr/bin/lampp"
	install -Dm755 "${srcdir}/xampp-manager-polkit" "${pkgdir}/usr/bin/xampp-manager_polkit"

	# Systemd service
	install -dm755 "${pkgdir}/etc/systemd/system"
	cp "${srcdir}/lampp.service" "${pkgdir}/etc/systemd/system"

	# Desktop launcher
	install -Dm755 "${srcdir}/xampp-manager.png" "${pkgdir}/usr/share/pixmaps/xampp-manager.png"
	install -Dm755 "${srcdir}/xampp-manager.desktop" "${pkgdir}/usr/share/applications/xampp-manager.desktop"

	# Install policy file for desktop launcher
	install -Dm644 "${srcdir}/org.freedesktop.xampp-manager.policy" "${pkgdir}/usr/share/polkit-1/actions/org.freedesktop.xampp-manager.policy"
    
	# Remove unused folder
	rm -rf "${pkgdir}/xampp_core_files/"
	rm -rf "${pkgdir}/xampp_developer_files/"
	rm -rf "${pkgdir}/native_mysql_adapter/"
	rm -rf "${pkgdir}/native_apache_adapter/"
	rm -rf "${pkgdir}/native_proftpd_adapter/"
	rm -rf "${pkgdir}/manager/"
	rm -rf "${pkgdir}/common_native_adapter/"
}

