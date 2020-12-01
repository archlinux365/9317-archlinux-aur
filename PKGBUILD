# Maintainer: Ramadan Ali <rot13ezqa@ezqa.ny>
pkgname=abcccid
pkgver=2.0.2
pkgrel=1
pkgdesc="AB Circle CCID driver for ABC USB CCID smart card readers"
arch=('x86_64')
url="https://abcircle.com/en/product/2/CIR115B/sim-sized-contact-smart-card-reader/"
license=('LGPL2.1+')
depends=("pcsclite>=1.8.3" "libusb>=1.0.9")
makedepends=("pcsclite>=1.8.3" "libusb>=1.0.9" "perl")
provides=("pcsc-ifd-handler")
source=("Circle_Linux_Installer_v${pkgver}.zip::https://abcircle.com/action/action.download.php?id=10&token=994058073e6886bb48563ca4f6939187ed2f23fb17506927a2c99e3c0c6f6ae8")
md5sums=("SKIP")

prepare() {
	find $srcdir -type f -name $pkgname-$pkgver* -exec bsdtar -xf {} \;
	cat << EOF >  udev.rules
# udev rules for CCID devices

# If not adding the device, go away
ACTION!="add", GOTO="pcscd_abcccid_rules_end"
SUBSYSTEM!="usb", GOTO="pcscd_abcccid_rules_end"
ENV{DEVTYPE}!="usb_device", GOTO="pcscd_abcccid_rules_end"

# set USB power management to auto.
ENV{ID_USB_INTERFACES}==":0b0000:", TEST=="power/control", ATTR{power/control}="auto"

# All done
LABEL="pcscd_abcccid_rules_end"
EOF
}

build() {
	cd "$pkgname-$pkgver"
	./configure LEXLIB=""
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
	install -Dv ../udev.rules ${pkgdir}/usr/lib/udev/rules.d/92_pcscd_abcccid.rules
	install -Dv LICENSE ${pkgdir}/usr/share/licenses/$pkgname/LICENSE
	
}

