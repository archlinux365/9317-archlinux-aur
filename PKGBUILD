# Maintainer: Yurii Kolesnykov <root@yurikoles.com>
# Contributor: Lone_Wolf <lonewolf at xs4all dot nl>
# Contributor: Armin K. <krejzi at email dot com>
# Contributor: Kristian Klausen <klausenbusk@hotmail.com>
# Contributor: Egon Ashrafinia <e.ashrafinia@gmail.com>
# Contributor: Tavian Barnes <tavianator@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Andreas Radke <andyrtr@archlinux.org>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Antti "Tera" Oja <antti.bofh@gmail.com>
# Contributor: Diego Jose <diegoxter1006@gmail.com>

pkgbase=mesa-intel-iris-git
pkgname="${pkgbase}"
_branch=iris
pkgdesc="an open-source implementation of the OpenGL specification, git version"
pkgver=18.3.0_devel.105759.ad4fed1192
pkgrel=1
arch=('x86_64')
makedepends=('git' 'python-mako' 'llvm-svn' 'clang-svn' 'xorgproto'
              'libxml2' 'libx11' 'elfutils'
              'ocl-icd' 'vulkan-icd-loader' 'libgcrypt'  'wayland' 'wayland-protocols' 'meson')
depends=('libdrm' 'libxxf86vm' 'libxdamage' 'libxshmfence' 'libelf'
         'llvm-libs-svn' 'libunwind' 'libglvnd' 'wayland' 'lm_sensors' 'libclc')
optdepends=('opengl-man-pages: for the OpenGL API man pages')
provides=('mesa' 'vulkan-intel' 'vulkan-driver' 'opencl-mesa' 'opengl-driver' 'opencl-driver')
conflicts=('mesa' 'opencl-mesa' 'vulkan-intel')
url="https://www.mesa3d.org"
license=('custom')
source=("mesa::git+https://gitlab.freedesktop.org/kwg/mesa.git#branch=${_branch}"
        'LICENSE'
)
sha512sums=('SKIP'
            '25da77914dded10c1f432ebcbf29941124138824ceecaf1367b3deedafaecabc082d463abcfa3d15abff59f177491472b505bcb5ba0c4a51bb6b93b4721a23c2'
)

pkgver() {
    cd mesa
    read -r _ver <VERSION
    echo ${_ver/-/_}.$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build () {
#    if [ -d _build ]; then
#        rm -rf _build
#    fi
    meson setup mesa _build \
       -D b_ndebug=true \
       -D buildtype=plain \
       --wrap-mode=nofallback \
       -D prefix=/usr \
       -D sysconfdir=/etc \
       -D platforms=x11,wayland,drm,surfaceless \
       -D dri-drivers= \
       -D gallium-drivers=iris \
       -D vulkan-drivers=intel \
       -D dri3=true \
       -D egl=true \
       -D gallium-extra-hud=true \
       -D gallium-xvmc=false \
       -D gbm=true \
       -D gles1=true \
       -D gles2=true \
       -D glvnd=true \
       -D glx=dri \
       -D libunwind=true \
       -D llvm=true \
       -D lmsensors=true \
       -D shared-glapi=true \
       -D gallium-opencl=icd \
       -D valgrind=false \
       -D tools=[]
    meson configure _build
    ninja -C _build
}


package_mesa-intel-iris-git() {

  DESTDIR="$pkgdir" ninja -C _build install

  # remove files provided by libglvnd
  rm "$pkgdir"/usr/lib/libGLESv{1_CM,2}.so*
   
  # indirect rendering
  ln -s /usr/lib/libGLX_mesa.so.0 ${pkgdir}/usr/lib/libGLX_indirect.so.0

  install -Dt "$pkgdir"/usr/share/licenses/$pkgbase "$srcdir"/LICENSE
}
