# Maintainer: Leonidas Spyropoulos <artafinde at gmail dot com>
# Contributor: CyrIng <labs[at]cyring[dot]fr>

### BUILD OPTIONS
# Set the next variables to ANYTHING that is not null to enable them

# Enable transparency mode in terminal
_transparency=

### Do no edit below this line unless you know what you're doing

pkgbase=corefreq
pkgname=(corefreq-client corefreq-server corefreq-dkms)
_gitname=CoreFreq
pkgver=1.89.3
pkgrel=2
pkgdesc="A CPU monitoring software with BIOS like functionalities"
arch=('x86_64')
url='https://github.com/cyring/CoreFreq'
license=('GPL2')
depends=('dkms')
source=(${pkgbase}-${pkgver}.tar.gz::"${url}/archive/${pkgver}.tar.gz"
        'dkms.conf'
        'honor-archlinux-compiler-flags.patch'
        '0001-Solving-compilation-with-CONFIG_SCHED_ALT-issue-322.patch')
b2sums=('b4a04a0c7b62502f9ce683f0aba1ca9a997bc2fdc4ea7c3619e552286a8ce5e48ab3b4fbecd113aae1cfd97405df5fe09ee969d89f1f1bfc53bd34597311c685'
        'c6d8849944f99195038ac252d010d3e3001cd1dcaee57218c4a7f58fa313aa38842e4ea991d4d9ff7d04063ebaa9900c06ff1eacfa6270341cf37fb752adc00c'
        '3f5f9a27863412d620864e8c19e2683e3ef2103c4b95c126438330a9b532e2434664ce4860b6191552298131e434c09f5531428696dde7d70a1cb171b4f13edf'
        '7955b3c7d03c786dd9b243e38a3daf47962dd0eea0a13289875b445c4b18d4c0e58a4046d3197eda9bed854ae2298ed4fa755dae55f1ddeb673cbaaef40863b6')

prepare(){
  cd "${_gitname}-${pkgver}"
  patch -Np1 < "$srcdir/honor-archlinux-compiler-flags.patch"
  patch -Np1 < "$srcdir/0001-Solving-compilation-with-CONFIG_SCHED_ALT-issue-322.patch"
}

build() {
  cd "${_gitname}-${pkgver}"
  if [ -n "${_transparency}" ]; then
    make corefreqd corefreq-cli UI_TRANSPARENCY=1
  else
    make corefreqd corefreq-cli
  fi
}

package_corefreq-dkms() {
  pkgdesc="CoreFreq - kernel module sources"
  depends=('dkms')
  _kernelmodule=corefreqk

  # Copy simple dkms.conf
  install -Dm644 dkms.conf "${pkgdir}/usr/src/${pkgbase}-${pkgver}/dkms.conf"
  # Set name and version
  sed -e "s/@_PKGBASE@/${pkgbase}/" \
      -e "s/@PKGVER@/${pkgver}/" \
      -e "s/@_KERNELMODULE@/${_kernelmodule}/" \
      -i "${pkgdir}/usr/src/${pkgbase}-${pkgver}/dkms.conf"

  # Copy sources (including Makefile)
  cp -r "${_gitname}-${pkgver}"/{*.c,*.h,Makefile} "${pkgdir}/usr/src/${pkgbase}-${pkgver}/"
}

package_corefreq-server() {
  pkgdesc="CoreFreq server"
  depends=("corefreq-dkms=$pkgver")

  cd "${_gitname}-${pkgver}"
  install -Dm755 corefreqd "${pkgdir}/usr/bin/corefreqd"
  install -Dm 0644 corefreqd.service "${pkgdir}/usr/lib/systemd/system/corefreqd.service"
}

package_corefreq-client() {
  pkgdesc="CoreFreq client"
  depends=("corefreq-server=$pkgver")

  cd "${_gitname}-${pkgver}"
  install -Dm755 corefreq-cli "${pkgdir}/usr/bin/corefreq-cli"
}
