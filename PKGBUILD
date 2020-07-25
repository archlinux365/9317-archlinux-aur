# Maintainer: vinibali <vinibali1 at gmail dot com>

pkgname=lglaf
pkgver=20180317
pkgrel=3
pkgdesc="LGLAF.py is a utility for communication with LG devices in Download Mode. This allows you to execute arbitrary shell commands on a LG phone as root. Utility was created by Lekensteyn (Peter Wu)"
arch=(i686 x86_64)
url="https://gitlab.com/vinibali/lglaf"
license=('MIT')
depends=('python' 'python-pyusb')
source=(https://gitlab.com/vinibali/lglaf/-/archive/20180317/lglaf-20180317.zip)
md5sums=(c90866a08a16bf852a1e30b0ae936291)

build() {
	echo "No build needed"
}

package() {

	install -Dm755 "${srcdir}"/lglaf-master/dump-file.py "${pkgdir}"/opt/lglaf/dump-file.py
	install -Dm755 "${srcdir}"/lglaf-master/extract-partitions.py "${pkgdir}"/opt/lglaf/extract-partitions.py
	install -Dm755 "${srcdir}"/lglaf-master/gpt.py "${pkgdir}"/opt/lglaf/gpt.py
	install -Dm755 "${srcdir}"/lglaf-master/laf_crypto.py "${pkgdir}"/opt/lglaf/laf_crypto.py
	install -Dm755 "${srcdir}"/lglaf-master/lglaf.py "${pkgdir}"/opt/lglaf/lglaf.py
	install -Dm755 "${srcdir}"/lglaf-master/partitions.py "${pkgdir}"/opt/lglaf/partitions.py
	install -Dm755 "${srcdir}"/lglaf-master/README.md "${pkgdir}"/opt/lglaf/README.md
	mkdir -p "${pkgdir}"/etc/udev/rules.d/
	install -Dm644 "${srcdir}"/lglaf-master/rules.d/42-usb-lglaf.rules "${pkgdir}"/etc/udev/rules.d/
	mkdir -p "${pkgdir}"/usr/bin/
	echo -e '#!/bin/bash\ncd /opt/lglaf\npython2.7 /opt/lglaf/lglaf.py' > "${pkgdir}"/usr/bin/lglaf
	chmod +x "${pkgdir}"/usr/bin/lglaf
}
