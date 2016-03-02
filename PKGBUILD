# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>

# NOTICE: This needs Steinberg VST Audio Plug-Ins SDK in ~/SDKs to work.
# It can obtained like this:
# 1. curl -LO http://www.steinberg.net/sdk_downloads/vstsdk360_22_11_2013_build_100.zip
# 2. unzip vstsdk360_22_11_2013_build_100.zip
# 3. mkdir -p ~/SDKs/vstsdk2.4
# 4. cp -va "VST3 SDK/." ~/SDKs/vstsdk2.4

pkgname=radium
pkgver=3.6.5
pkgrel=1
pkgdesc="A graphical music editor. A next generation tracker."
arch=('i686' 'x86_64')
url="http://users.notam02.no/~kjetism/radium/"
license=('GPL')
depends=(
    'python2'
    'libxaw'
    'libsndfile'
    'libsamplerate'
    'liblrdf'
    'qt4'
    'libxkbfile'
    'glu'
    'speex'
    'fftw'
    'jack'
    'libxinerama'
    'libxcursor'
)
makedepends=(
    'cmake'
    'boost'
)
options=(!strip)
source=("https://github.com/kmatheussen/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('de8d632b2ab6975f9a1218f96caeaa48')

build() {
    cd "${pkgname}-${pkgver}"
    make packages
    # Backport patch from master, remove after release > 3.6.5
    sed -i '198i#define R_ASSERT_NON_RELEASE2(a, returnvalue)' common/nsmtracker.h
    BUILDTYPE=RELEASE ./build_linux.sh
}

package() {
    cd "${pkgname}-${pkgver}"

    # Remove objects created during packages compilation.
    rm -rf "bin/packages"

    mkdir -p "${pkgdir}/opt/radium"
    mkdir -p "${pkgdir}/usr/bin"
    cp -va "bin/." "${pkgdir}/opt/radium/"
    ln -s "/opt/radium/radium" "${pkgdir}/usr/bin/radium"
}

# vim:set ts=4 sw=4 et:
