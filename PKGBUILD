# Maintainer: Butui Hu <hot123tea123@gmail.com>
# Contributor: Chih-Hsuan Yen <yan12125@archlinux.org>
# Contributor: Jean Lucas <jean@4ray.co>
# Based on python-torchvision-git; original contributors:
# Contributor: Stephen Zhang <zsrkmyn at gmail dot com>
#
# NOTE:
# to build with GPU deocder, we use nvidia-sdk header files from https://github.com/NVIDIA/DALI for convenient
# you could also use https://aur.archlinux.org/packages/nvidia-sdk
# just update environment variable `TORCHVISION_INCLUDE` and `TORCHVISION_LIBRARY`
# see also https://github.com/pytorch/vision/blob/main/torchvision/csrc/io/decoder/gpu/README.rst
#

_CUDA_ARCH_LIST="5.2;5.3;6.0;6.1;6.2;7.0;7.2;7.5;8.0;8.6;8.6+PTX"
pkgname=('python-torchvision' 'python-torchvision-cuda')
_pkgname=vision
pkgver=0.12.0
pkgrel=6
pkgdesc='Datasets, transforms, and models specific to computer vision'
arch=('x86_64')
url='https://github.com/pytorch/vision'
license=('BSD')
depends=(
  python-numpy
  python-pillow
  python-requests
  python-scipy
  python-typing_extensions
)
optdepends=(
  'ffmpeg4.4: video reader backend (the recommended one with better performance)'
  'python-av: video reader backend (the default one)'
  'python-pycocotools: support for MS-COCO dataset'
)
makedepends=(
  cuda
  ffmpeg4.4
  python-av
  python-pytorch-cuda
  python-setuptools
  qt5-base
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/pytorch/vision/archive/v${pkgver}.tar.gz"
        "https://github.com/NVIDIA/DALI/raw/main/dali/operators/reader/loader/video/nvdecode/cuviddec.h"
        "https://github.com/NVIDIA/DALI/raw/main/dali/operators/reader/loader/video/nvdecode/nvcuvid.h"
)
sha512sums=('ebc48a9e9ef58cc93c1b095e565c67feb2bc1bf06551e8f891a0369c211c6732e10bf191298b0633a05664371fa6dc637aab851b01a57f6b3e0d5936e87ee8ae'
            '8f97deedab5b0de1154ce7f8486eadcc7556a9cbb01fb44a988729da80b982daafbfe8da32b7f3ced78c1544b3ac696a569c50a6b4cb244f502b07e615b4de10'
            '89f8d4410a238dc52b27200dfb8db9ff1a58777bdfebb346f3d157e16108930dc3b56f18b611f5de1cb081afa6be6768b52e2486cca57703b490194305dc1c67')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

prepare() {
  # fix building with ffmpeg4.4 by manually setup include and lib dir
  # and remove other codes to find ffmpeg exe, as ffmpeg4.4 are only headers and libs without ffmpeg cmd
  sed -i '351,358d' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i 's#ffmpeg_include_dir = os.path.join(ffmpeg_root, "include")#ffmpeg_include_dir = "/usr/include/ffmpeg4.4"#' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i 's#ffmpeg_library_dir = os.path.join(ffmpeg_root, "lib")#ffmpeg_library_dir = "/usr/lib/ffmpeg4.4"#' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i 's#has_ffmpeg = ffmpeg_exe is not None#has_ffmpeg = True#' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i '/ffmpeg_exe/d' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i '/ffmpeg_bin/d' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  sed -i '/ffmpeg_root/d' "${srcdir}/${_pkgname}-${pkgver}/setup.py"
  cp -a "${srcdir}/${_pkgname}-${pkgver}" "${srcdir}/${_pkgname}-cuda-${pkgver}"
}

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
  
  cd "${srcdir}/${_pkgname}-cuda-${pkgver}"
  TORCHVISION_INCLUDE=${srcdir} \
  TORCHVISION_LIBRARY=/usr/lib \
  FORCE_CUDA=1 \
  TORCH_CUDA_ARCH_LIST=${_CUDA_ARCH_LIST} \
  python setup.py build
}

package_python-torchvision() {
  depends+=(python-pytorch)

  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_python-torchvision-cuda() {
  pkgdesc='Datasets, transforms, and models specific to computer vision (with GPU support)'
  depends+=(python-pytorch-cuda)
  provides+=(python-torchvision=${pkgver})
  conflicts+=(python-torchvision=${pkgver})
  
  cd "${_pkgname}-cuda-${pkgver}"
  TORCHVISION_INCLUDE=${srcdir} \
  TORCHVISION_LIBRARY=/usr/lib \
  FORCE_CUDA=1 \
  TORCH_CUDA_ARCH_LIST=${_CUDA_ARCH_LIST} \
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
