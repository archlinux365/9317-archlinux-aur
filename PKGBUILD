# $Id$
# Maintainer: Vi0L0 <vi0l093@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Andreas Radke <andyrtr@archlinux.org>

pkgbase=lib32-mesa-noglvnd
pkgname=('lib32-vulkan-intel-noglvnd' 'lib32-vulkan-radeon-noglvnd' 'lib32-mesa-vdpau-noglvnd' 'lib32-mesa-noglvnd' 'lib32-mesa-libgl-noglvnd')
pkgver=17.0.2
pkgrel=1
arch=('x86_64')
makedepends=('python2-mako' 'lib32-libxml2' 'lib32-expat' 'lib32-libx11' 'glproto' 'lib32-libdrm' 'dri2proto' 'dri3proto' 'presentproto'
             'lib32-libxshmfence' 'lib32-libxxf86vm' 'lib32-libxdamage' 'gcc-multilib' 'lib32-libelf' 'lib32-llvm' 'lib32-libvdpau'
             'lib32-wayland')
url="http://mesa3d.sourceforge.net"
license=('custom')
source=(https://mesa.freedesktop.org/archive/mesa-${pkgver}.tar.xz{,.sig}
	LICENSE
        remove-libpthread-stubs.patch)
sha256sums=('f8f191f909e01e65de38d5bdea5fb057f21649a3aed20948be02348e77a689d4'
            'SKIP'
            '7fdc119cf53c8ca65396ea73f6d10af641ba41ea1dd2bd44a824726e01c8b3f2'
            '75ab53ad44b95204c788a2988e97a5cb963bdbf6072a5466949a2afb79821c8f')
validpgpkeys=('8703B6700E7EE06D7A39B8D6EDAE37B02CEB490D') # Emil Velikov <emil.l.velikov@gmail.com>

prepare() {
  cd ${srcdir}/mesa-${pkgver}

  # Now mesa checks for libpthread-stubs - so remove the check
  patch -Np1 -i ../remove-libpthread-stubs.patch

  autoreconf -fiv
}

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  export LLVM_CONFIG="/usr/bin/llvm-config32"

  cd ${srcdir}/mesa-${pkgver}

  ./configure \
    --build=i686-pc-linux-gnu --host=i686-pc-linux-gnu \
    --libdir=/usr/lib32 \
    --prefix=/usr \
    --sysconfdir=/etc \
    --with-dri-driverdir=/usr/lib32/xorg/modules/dri \
    --with-gallium-drivers=r300,r600,radeonsi,nouveau,swrast,virgl,svga \
    --with-dri-drivers=i915,i965,r200,radeon,nouveau,swrast \
    --with-egl-platforms=x11,drm,wayland \
    --with-vulkan-drivers=intel,radeon \
    --disable-xvmc \
    --enable-gallium-llvm \
    --enable-llvm-shared-libs \
    --enable-shared-glapi \
    --enable-glx-tls \
    --enable-egl \
    --enable-glx \
    --enable-gles1 \
    --enable-gles2 \
    --enable-gbm \
    --enable-dri \
    --enable-osmesa \
    --enable-texture-float \
    --enable-nine \
    --enable-vdpau 
    #--with-sha1=libgcrypt \

  make

  mkdir $srcdir/fakeinstall
  make DESTDIR=${srcdir}/fakeinstall install
}

package_lib32-vulkan-intel-noglvnd() {
  pkgdesc="Intel's Vulkan mesa driver (32-bit) - non-libglvnd version"
  depends=('lib32-wayland' 'lib32-libx11' 'lib32-gcc-libs' 'lib32-libxshmfence')
  provides=('lib32-vulkan-driver' 'lib32-vulkan-intel')
  conflicts=('lib32-vulkan-intel' 'lib32-vulkan-intel-git')
  replaces=('lib32-vulkan-intel' 'lib32-vulkan-intel-git')

  install -m755 -d ${pkgdir}/usr/share/vulkan/icd.d
  mv -v ${srcdir}/fakeinstall/usr/share/vulkan/icd.d/intel_icd*.json ${pkgdir}/usr/share/vulkan/icd.d/

  install -m755 -d ${pkgdir}/usr/lib32
  mv -v ${srcdir}/fakeinstall/usr/lib32/libvulkan_intel.so ${pkgdir}/usr/lib32/

  install -m755 -d "${pkgdir}/usr/share/licenses/lib32-vulkan-intel"
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/lib32-vulkan-intel/"
}

package_lib32-vulkan-radeon-noglvnd() {
  pkgdesc="Radeon's Vulkan mesa driver (32-bit) - non-libglvnd version"
  depends=('lib32-wayland' 'lib32-libx11' 'lib32-llvm-libs' 'lib32-libdrm' 'lib32-libelf' 'lib32-libxshmfence')
  provides=('lib32-vulkan-driver' 'lib32-vulkan-radeon')
  conflicts=('lib32-vulkan-radeon' 'lib32-vulkan-radeon-git')
  replaces=('lib32-vulkan-radeon' 'lib32-vulkan-radeon-git')

  install -m755 -d ${pkgdir}/usr/share/vulkan/icd.d
  mv -v ${srcdir}/fakeinstall/usr/share/vulkan/icd.d/radeon_icd*.json ${pkgdir}/usr/share/vulkan/icd.d/
  
  install -m755 -d ${pkgdir}/usr/lib32
  mv -v ${srcdir}/fakeinstall/usr/lib32/libvulkan_radeon.so ${pkgdir}/usr/lib32/

  install -m755 -d "${pkgdir}/usr/share/licenses/lib32-vulkan-radeon"
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/lib32-vulkan-radeon/"
}

package_lib32-mesa-vdpau-noglvnd() {
  pkgdesc="Mesa VDPAU drivers (32-bit) - non-libglvnd version"
  depends=('lib32-libdrm' 'lib32-libx11' 'lib32-expat' 'lib32-llvm-libs' 'lib32-libelf' 'lib32-libxshmfence')
  provides=('lib32-mesa-vdpau')
  conflicts=('lib32-mesa-vdpau')
  replaces=('lib32-mesa-vdpau')

  install -m755 -d ${pkgdir}/usr/lib32
  mv -v ${srcdir}/fakeinstall/usr/lib32/vdpau ${pkgdir}/usr/lib32
   
  install -m755 -d "${pkgdir}/usr/share/licenses/lib32-mesa-vdpau"
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/lib32-mesa-vdpau/"
}

package_lib32-mesa-noglvnd() {
  pkgdesc="an open-source implementation of the OpenGL specification (32-bit) - non-libglvnd version"
  depends=('lib32-libdrm' 'lib32-libxxf86vm' 'lib32-libxdamage' 'lib32-libxshmfence'
           'lib32-libelf' 'lib32-llvm-libs' 'lib32-wayland' 'lib32-libtxc_dxtn' 'mesa')
  optdepends=('opengl-man-pages: for the OpenGL API man pages'
              'lib32-mesa-vdpau-noglvnd: for accelerated video playback')
  provides=('lib32-ati-dri' 'lib32-intel-dri' 'lib32-nouveau-dri' 'lib32-mesa-dri' 'lib32-opengl-driver' 'lib32-mesa')
  conflicts=('lib32-ati-dri' 'lib32-intel-dri' 'lib32-nouveau-dri' 'lib32-mesa-dri' 'lib32-mesa' 'lib32-mesa-git')
  replaces=('lib32-ati-dri' 'lib32-intel-dri' 'lib32-nouveau-dri' 'lib32-mesa-dri' 'lib32-mesa' 'lib32-mesa-git')
  install -m755 -d ${pkgdir}/usr/lib32/xorg/modules/dri
  # ati-dri, nouveay-dri, intel-dri, swrast
  mv -v ${srcdir}/fakeinstall/usr/lib32/xorg/modules/dri/* ${pkgdir}/usr/lib32/xorg/modules/dri

  install -m755 -d ${pkgdir}/usr/lib32
  mv -v ${srcdir}/fakeinstall/usr/lib32/d3d ${pkgdir}/usr/lib32
  mv -v ${srcdir}/fakeinstall/usr/lib32/*.so* ${pkgdir}/usr/lib32/

  mv -v ${srcdir}/fakeinstall/usr/lib32/pkgconfig ${pkgdir}/usr/lib32/

  install -m755 -d ${pkgdir}/usr/lib32/mesa
  # move libgl/EGL/glesv*.so to not conflict with blobs - may break .pc files ?
  mv -v ${pkgdir}/usr/lib32/libGL.so*    ${pkgdir}/usr/lib32/mesa/
  mv -v ${pkgdir}/usr/lib32/libEGL.so*   ${pkgdir}/usr/lib32/mesa/
  mv -v ${pkgdir}/usr/lib32/libGLES*.so* ${pkgdir}/usr/lib32/mesa/

  install -m755 -d "${pkgdir}/usr/share/licenses/lib32-mesa"
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/lib32-mesa/"
}

package_lib32-mesa-libgl-noglvnd() {
  pkgdesc="Mesa 3-D graphics library (32-bit) - non-libglvnd version"
  depends=('lib32-mesa')
  provides=('lib32-libgl' 'lib32-libegl' 'lib32-libgles' 'lib32-mesa-libgl')
  conflicts=('lib32-mesa-libgl' 'lib32-mesa-libgl-git')
  replaces=('lib32-mesa-libgl' 'lib32-mesa-libgl-git')

  install -m755 -d ${pkgdir}/usr/lib32

  ln -s /usr/lib32/mesa/libGL.so.1.2.0 ${pkgdir}/usr/lib32/libGL.so.1.2.0
  ln -s libGL.so.1.2.0	               ${pkgdir}/usr/lib32/libGL.so.1
  ln -s libGL.so.1.2.0                 ${pkgdir}/usr/lib32/libGL.so

  ln -s /usr/lib32/mesa/libEGL.so.1.0.0 ${pkgdir}/usr/lib32/libEGL.so.1.0.0
  ln -s libEGL.so.1.0.0	                ${pkgdir}/usr/lib32/libEGL.so.1
  ln -s libEGL.so.1.0.0                 ${pkgdir}/usr/lib32/libEGL.so

  ln -s /usr/lib32/mesa/libGLESv1_CM.so.1.1.0 ${pkgdir}/usr/lib32/libGLESv1_CM.so.1.1.0
  ln -s libGLESv1_CM.so.1.1.0	              ${pkgdir}/usr/lib32/libGLESv1_CM.so.1
  ln -s libGLESv1_CM.so.1.1.0                 ${pkgdir}/usr/lib32/libGLESv1_CM.so

  ln -s /usr/lib32/mesa/libGLESv2.so.2.0.0 ${pkgdir}/usr/lib32/libGLESv2.so.2.0.0
  ln -s libGLESv2.so.2.0.0                 ${pkgdir}/usr/lib32/libGLESv2.so.2
  ln -s libGLESv2.so.2.0.0                 ${pkgdir}/usr/lib32/libGLESv2.so


  install -m755 -d "${pkgdir}/usr/share/licenses/lib32-mesa-libgl"
  install -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/lib32-mesa-libgl/"
}
