# Maintainer: Niels Martignène <niels.martignene@gmail.com>
# Contributor: PyroPeter <googlemail.com@abi1789>
# Contributor: darkapex <me@jailuthra.in>
# Contributor: tty0 <vt.tty0[d0t]gmail.com>

pkgname=teensyduino
pkgver=1.25
_arduino=1.6.5-r5
pkgrel=1
pkgdesc="Arduino SDK with Teensyduino"
arch=('i686' 'x86_64')
url="http://www.pjrc.com/teensy/teensyduino.html"
options=(!strip staticlibs)
license=('GPL' 'LGPL' 'custom')
depends=('gtk2' 'libusb-compat' 'libusb' 'java-runtime' 'libpng12' 'libsm'
         'desktop-file-utils' 'giflib' 'avrdude')
makedepends=('xorg-server-xvfb' 'libxft' 'xdotool' 'icoutils')
provides=('arduino')
conflicts=('arduino' 'teensy-loader-cli')
install="teensyduino.install"
source=('arduino.desktop'
        'arduino.xml'
        'teensyduino.sh'
        'teensy-loader.desktop'
        "git+https://github.com/PaulStoffregen/teensy_loader_cli.git#commit=001da416bc362ff24485ff97e3a729bd921afe98"
        "http://www.pjrc.com/teensy/49-teensy.rules"
        'LICENSE')
source_i686+=("http://downloads.arduino.cc/arduino-${_arduino}-linux32.tar.xz"
              "http://www.pjrc.com/teensy/td_${pkgver//./}/teensyduino.32bit")
source_x86_64+=("http://downloads.arduino.cc/arduino-${_arduino}-linux64.tar.xz"
                "http://www.pjrc.com/teensy/td_${pkgver//./}/teensyduino.64bit")
sha256sums=('ee29f80cc63cf3a21e844372721686372c2ca4b36e35430350d72e0b788a0ae2'
            '473b82156505e9bd903e4d8484e8d183f2e3bf3c1f7e29940b815929ae597b68'
            'bdd3da81cad5429e1d59c7950f40e75a96d2dd6cab07c2ffb77153e6e860f4b3'
            '270b55353eb438d3790c7245e5ae16ff8bac9f98cfe927d6c9f2146a34499323'
            'SKIP'
            'fa7eff0e0f1e8230941c3b016c40617887f52f1991db655a498309824291ca54'
            '25980feb5927b8bea8b8e999f5002e110825b1bc3d546fa902c2db5c824d33f3')
sha256sums_i686=('deeb345c2e01d38f37f2860c764030c1aabfbda06ef7b348e798bfdc378e25ba'
                 '5d8f5eaf8639a9e04e05e514974192237bbcd87bb3a5527b285597fd33f4c9f0')
sha256sums_x86_64=('38eb40574d0335dee09f8a34c9870985aca65cb8e9b7625e71c47aea6e1957f4'
                   '313e4fa6a0aec01d096d1b0d5b5787c93ff3f1a7a23177aff043bf2538a8c3fa')

if [ "$CARCH" == 'x86_64' ]; then
  _bits=64
elif [ "$CARCH" == 'i686' ]; then
  _bits=32
fi

prepare() {
  cd "arduino-${_arduino}"

  icotool -x -o .. lib/arduino_icon.ico
}

build() {
  msg2 "Running Teensyduino installer (takes around 60 seconds)"

  chmod +x "teensyduino.${_bits}bit"
  xvfb-run ./teensyduino.sh "./teensyduino.${_bits}bit" "${srcdir}/arduino-${_arduino}"

  msg2 "Building Teensy Loader command line"

  cd teensy_loader_cli
  make
}

package() {
  cd "arduino-${_arduino}"

  mkdir -p "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/share/"{doc,applications,mime/packages,licenses/teensyduino}
  mkdir -p "${pkgdir}/usr/lib/udev/rules.d"

  # copy the whole SDK to /usr/share/arduino/
  cp -a . "${pkgdir}/usr/share/arduino"

  # use system's RXTX library
  ln -sf /usr/lib/librxtxSerial.so "${pkgdir}/usr/share/arduino/lib/librxtxSerial.so"
  ln -sf /usr/lib/librxtxSerial.so "${pkgdir}/usr/share/arduino/lib/librxtxSerial64.so"
  ln -sf /usr/share/java/rxtx/RXTXcomm.jar "${pkgdir}/usr/share/arduino/lib/RXTXcomm.jar"

  # we don't need these sources
  rm -rf "${pkgdir}/usr/share/arduino/src"

  # at least support the FHS a little bit
  ln -s /usr/share/arduino/arduino "${pkgdir}/usr/bin/arduino"
  ln -s /usr/share/arduino/reference "${pkgdir}/usr/share/doc/arduino"

  # fix avrdude
  rm -f "${pkgdir}/usr/share/arduino/hardware/tools/avr/bin/avrdude"{,_bin}
  ln -s /usr/bin/avrdude "${pkgdir}/usr/share/arduino/hardware/tools/avr/bin/avrdude"

  # desktop icon
  for size in 16 32 48 256; do
    install -Dm644 ../arduino_icon_*_${size}x${size}x32.png \
      "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/arduino.png"
  done

  # desktop and mimetype files
  install -m644 "${srcdir}/arduino.desktop" "${pkgdir}/usr/share/applications/"
  install -m644 "${srcdir}/arduino.xml" "${pkgdir}/usr/share/mime/packages/"

  # install custom PJRC license
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/teensyduino/"

  # install teensy loader files
  install -m644 "${srcdir}/49-teensy.rules" "${pkgdir}/usr/lib/udev/rules.d"
  ln -s /usr/share/arduino/hardware/tools/teensy "${pkgdir}/usr/bin/teensy-loader"
  install -m644 "${srcdir}/teensy-loader.desktop" "${pkgdir}/usr/share/applications/"

  # install command-line teensy loader
  install -m755 "${srcdir}/teensy_loader_cli/teensy_loader_cli" "${pkgdir}/usr/bin/teensy-loader-cli"
}
