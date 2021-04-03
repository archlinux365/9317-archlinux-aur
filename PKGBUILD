# Maintainer: Bruno Silva <brunofernandes at ua dot pt>
# Co-Maintainer: Carlos Silva <r3pek@r3pek.org>

pkgname=autenticacao-gov-pt
_pkgname=autenticacao.gov
pkgver=3.5.0
pkgrel=1
pkgdesc="Portuguese Citizen Card Application (Portugal eID)"
arch=('i686' 'x86_64')
url="http://www.cartaodecidadao.pt/"
license=('GPL2' 'LGPL3' 'custom:EUPL')
depends=('qt5-base'
         'qt5-tools'
         'qt5-quickcontrols'
				 'qt5-quickcontrols2'
         'qt5-graphicaleffects'
         'pcsclite>=1.5.0'
         'openssl-1.0'
         'ccid'
         'libzip'
         'poppler-qt5'
				 'libxerces-c-3.1'
				 'libcurl-compat'
         'xml-security-c'
				 'libcurl-gnutls'
				 'openjpeg2')
makedepends=('swig' 'qconf' 'git' 'xml-security-c' 'libcurl-gnutls' 'jdk11-openjdk' 'openjpeg2')
optdepends=('plugin-autenticacao-gov-pt: Necessário para autenticações online'
            'autenticacao-gov-pt-pki: PKI que confirma a validade dos certificados dos CC'
            'ecce-gov-pt-certificates: Certificados da ECCE quem assina dos certificados contidos em cartaodecidadao-pki')
conflicts=('classpath' 'cartaodecidadao' 'cartaodecidadao-bin')
replaces=('cartaodecidadao')

source=('git+https://github.com/amagovpt/autenticacao.gov/#branch=master'
		    'autenticacao-gov-pt.install')

sha512sums=('SKIP'
            '344a0722a4554150f17f25d49d85c8a42d5e75b2444d59b1648f7c3d0817eb93eb011680f3cccf092a5eceef7c13e8048f0d09de4f07199a33c7bd1033c3de9f')

install='autenticacao-gov-pt.install'

prepare(){
	# Temporary Fix in order to compile with archlinux java handling neededs sudo and conflicts with GNU classpath
	sudo archlinux-java set java-11-openjdk
	sudo ln -sf /usr/lib/jvm/default/include/jni.h /usr/include/jni.h
	sudo ln -sf /usr/lib/jvm/default/include/linux/jni_md.h /usr/include/jni_md.h
	sudo ln -sf /usr/include/openjpeg-2.4/openjpeg.h /usr/include/openjpeg.h
	sudo ln -sf /usr/include/openjpeg-2.4/opj_stdint.h /usr/include/opj_stdint.h
	sudo ln -sf /usr/include/openjpeg-2.4/opj_config.h /usr/include/opj_config.h
}

build() {
	cd ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw
		qmake pteid-mw.pro
		make
}

package() {
	cd ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw

	# Fix upstream bug not creating path
	mkdir -p ${pkgdir}/usr/local/lib/
	mkdir -p ${pkgdir}/usr/share/fonts/pteid/lato/

	# Install programs and libraries
	make INSTALL_ROOT="$pkgdir" DESTDIR=$pkgdir PREFIX=/usr install
	
	# Fix library path from debian to Arch Linux
	mv ${pkgdir}/usr/local/lib/ ${pkgdir}/usr/lib/

	# Install desktop files
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/debian/pteid-mw-gui.desktop ${pkgdir}/usr/share/applications/pteid-mw-gui.desktop
	
  # Install fonts
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/eidguiV2/fonts/lato/Lato-Black.ttf ${pkgdir}/usr/share/fonts/pteid/lato/
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/eidguiV2/fonts/lato/Lato-Bold.ttf ${pkgdir}/usr/share/fonts/pteid/lato/
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/eidguiV2/fonts/lato/Lato-Regular.ttf ${pkgdir}/usr/share/fonts/pteid/lato/

	# Install image files
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/debian/pteid-signature.png ${pkgdir}/usr/share/autenticacao-gov/pteid-signature.png
	install -Dm644 ${srcdir}/${_pkgname}/pteid-mw-pt/_src/eidmw/debian/pteid-scalable.svg ${pkgdir}/usr/share/icons/hicolor/scalable/apps/pteid-scalable.svg
}
