pkgname=rcsc-localsign
pkgver=20191015
pkgrel=1
pkgdesc="RCSC LocalSign smartcard signing server (for GoSign and Elektroninis.lt)"
arch=(x86_64)
depends=(java-runtime)
makedepends=(p7zip python)
source=("rc-localsign-$pkgver.exe::http://www.elektroninis.lt/bylos/dokumentai/rcsc/localsign/localsign-install.exe"
        issunpack.py
        rcsc-localsign.service
        RCSC_RootCA_4f001ba124bdcb8848bebd3f2b62c7c5.pem
        VI_Registru_Centras_RCSC_RootCA_03a3a457b5f0f3864a1163e898ff169c.pem)
sha256sums=('17915f63108bc3f5279581589ae2616d908c9a28a71125df4ccf3a5884ceddeb'
            'bc7ecb4696dfaf3ffb3322f36cf04fd1413012dc7da6089448ee66feb6982cc0'
            '35540b47c9687397eb5da6a344970693975ec3479f86e79955b4642a33a23a8d'
            'c1bd62c20a74c779e4b2d645736663f8d7451dccce9c886f6e7c1bedfeb43128'
            '92f7673db77de2b46b1bf91870dbe9a28defb3f9b939e819af97cb6d30763945')

prepare() {
  msg2 "Extracting InstallShield self-executable..."
  7z -so x "rc-localsign-$pkgver.exe" "[0]" > isstream.bin
  msg2 "Extracting InstallShield data stream..."
  mkdir -p setup_files
  python issunpack.py isstream.bin setup_files
  msg2 "Extracting Windows Installer package..."
  7z -y -omsi_files x "setup_files/RC LocalSign.msi" Data1.cab
  msg2 "Extracting Windows Installer cabinet..."
  7z -y -ocab_files x "msi_files/Data1.cab"
}

package() {
  install -Dm644 -t "$pkgdir"/opt/RCSC/LocalSign cab_files/local_webserver.jar
  install -Dm644 -t "$pkgdir"/usr/lib/systemd/system rcsc-localsign.service
  install -Dm644 -t "$pkgdir"/usr/share/ca-certificates/trust-source/anchors *.pem
}

# vim: ts=2:sw=2:et
