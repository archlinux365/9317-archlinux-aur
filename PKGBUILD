# Maintainer: boringcode <thatguy at bradleyrosenfeld dot com>

_pkgname=gyroflow
pkgname=${_pkgname}-bin
pkgver=1.3.0
pkgrel=1
pkgdesc="Video stabilization using gyroscope data"
arch=("x86_64")
license=("GPL3")
url="https://gyroflow.xyz/"
depends=("libc++" "qt6-base" "qt6-quick3d" "qt6-declarative" "qt6-3d" "pulseaudio" "libxkbcommon" "opencv" "ocl-icd" "ffmpeg")
optdepends=("opencl-driver: OpenCL driver for GPU accelerated stabilization"
            "libva-mesa-driver: VAAPI video acceleration for NVIDIA and AMD GPU"
            "intel-media-driver: VAAPI video acceleration for Intel GPU")
provides=("${_pkgname}")
conflicts=("${_pkgname}" "${_pkgname}-appimage" "${_pkgname}-git")
source=("Gyroflow-linux64.tar.gz::https://github.com/gyroflow/gyroflow/releases/download/v${pkgver}/Gyroflow-linux64.tar.gz"
		"icon.svg::https://raw.githubusercontent.com/gyroflow/gyroflow/v${pkgver}/resources/icon.svg"
        "${_pkgname}.desktop")

sha256sums=("0ec91969514dcf36f9445a6e1a7e35d017d34b8ee701257970db8872ca607749"
			"93ca6486dc2c2ba3812c9a3ecd50c6787787f779922bf7e3c9b7f07b3145f7ba"
            "9e97420c0d48fa0959312d6566410f801d82423b4a3332fe9eddb33c04469779")
package() {
  # move the entire distribution to /usr/share
  mkdir -p "${pkgdir}"/usr/share/
  mv ${srcdir}/"Gyroflow" "${pkgdir}"/usr/share/${_pkgname}

  # desktop file
  install -Dm 644 ${srcdir}/"icon.svg" "${pkgdir}/usr/share/pixmaps/${_pkgname}.svg"
  install -Dm 644 "${srcdir}"/${_pkgname}.desktop \
    "${pkgdir}"/usr/share/applications/${_pkgname}.desktop

  # symlink binary
  mkdir -p "${pkgdir}"/usr/bin
  ln -sf /usr/share/${_pkgname}/gyroflow \
    "${pkgdir}"/usr/bin/gyroflow
}
