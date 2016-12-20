# Maintainer: AsamK <asamk ät gmx de>

pkgname=signal-cli
pkgver=0.5.2
pkgrel=1
pkgdesc="Provides a commandline and dbus interface for secure Signal/TextSecure messaging."
arch=('any')
url="https://github.com/AsamK/signal-cli"
license=('GPL3')
depends=('java-runtime' 'libmatthew-unix-java' 'java-commons-logging' 'sh')
makedepends=('java-environment' 'gradle' 'asciidoc')
replaces=('textsecure-cli')
conflicts=('textsecure-cli')
source=("https://github.com/AsamK/${pkgname}/archive/v${pkgver}.tar.gz"
        "${pkgname}.sh"
        "${pkgname}.sysusers.conf"
        "${pkgname}.tmpfiles.conf")
install="${pkgname}.install"
sha512sums=('cfcd712c804efceb798787b1edc44b0e125c51c1394c98975a43b5525ae25b0452e8df74b93f6fcfb8545c9093c9a70351f6f8ffc4c2468786566882d3aa242e'
            'f8d75536e1db3de0ca89c3edd5fe6e04d40f6edcbd899e3f80b4d175502a4e98ba49bcef443653bb17ab50bb6396cc2bb9b6838890337b887d25671fe096ba21'
            'b4db42e18c957edb274637eee1ea5feb5d5f94e16ff0ced63788c8285e0c31c17e5414c6b93b1c2a6ffacca4888b177d33d1878727780e9a0e937b323e332021'
            '8db6fdee294a899596487ebaf154df413631f6935127be430eb47985f3d2a75849daaf1cbe6ae99590d9ae64025bd94c6b212ee9f72e80a3eb49784fad25b914')

build() {
	cd "${srcdir}"
	cd "${pkgname}-${pkgver}"

	GRADLE_USER_HOME="${srcdir}/.gradle" gradle --no-daemon installDist

	cd man
	make
	gzip -c ${pkgname}.1 > ${pkgname}.1.gz
}

package() {
	install -m755 -d "${pkgdir}/usr/share/java/${pkgname}" \
	                 "${pkgdir}/usr/bin" \
	                 "${pkgdir}/usr/lib/systemd/system/" \
	                 "${pkgdir}/usr/lib/sysusers.d/" \
	                 "${pkgdir}/usr/lib/tmpfiles.d/" \
	                 "${pkgdir}/usr/share/man/man1/" \
	                 "${pkgdir}/etc/dbus-1/system.d/"

	cd "${srcdir}"

	install -m644 "${pkgname}.sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
	install -m644 "${pkgname}.tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
	install -m755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

	cd "${pkgname}-${pkgver}"

	install -m644 "data/org.asamk.Signal.conf" "${pkgdir}/etc/dbus-1/system.d/"
	install -m644 "data/${pkgname}@.service" "${pkgdir}/usr/lib/systemd/system/"
	sed -i "s|%dir%|/usr|" "${pkgdir}/usr/lib/systemd/system/${pkgname}@.service"

	install -m644 "man/${pkgname}.1.gz" "${pkgdir}/usr/share/man/man1/"

	cd "build/install/${pkgname}"

	rm -f lib/unix-*.jar
	rm -f lib/commons-logging-*.jar
	install -m644 lib/*.jar "${pkgdir}/usr/share/java/${pkgname}/"
}
