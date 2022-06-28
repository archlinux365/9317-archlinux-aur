# Maintainer: Michał Kopeć <michal@nozomi.space>
# Contributor: Michał Kopeć <michal@nozomi.space>

pkgname=xone-dongle-firmware
pkgver=0.1
pkgrel=6
pkgdesc='Xbox Wireless Controller Adapter firmware'
arch=('x86_64')
url='https://github.com/medusalix/xone'
license=('custom')
source=("http://download.windowsupdate.com/c/msdownload/update/driver/drvs/2017/07/1cd6a87c-623f-4407-a52d-c31be49e925c_e19f60808bdcbfbd3c3df6be3e71ffc52e43261e.cab")
sha256sums=('65736a84ff4036645b8f8ec602bed91ab6353019c9cb3233decab9feec0f6f04')

package() {
  echo "* Extracting dongle firmware..."
  echo "* The firmware for the wireless dongle is subject to Microsoft's Terms of Use:"
  echo "* https://www.microsoft.com/en-us/legal/terms-of-use"
  install -D -m 644 "${srcdir}/FW_ACC_00U.bin" "${pkgdir}/usr/lib/firmware/xow_dongle.bin"
}

