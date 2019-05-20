# Maintainer: Lone_Wolf <lonewolf at xs4all dot nl>
# Contributor: Armin K. <krejzi at email dot com>
# Contributor: Kristian Klausen <klausenbusk@hotmail.com>
# Contributor: Egon Ashrafinia <e.ashrafinia@gmail.com>
# Contributor: Tavian Barnes <tavianator@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Andreas Radke <andyrtr@archlinux.org>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Antti "Tera" Oja <antti.bofh@gmail.com>
# Contributor: Diego Jose <diegoxter1006@gmail.com>

pkgname=mesa-git
pkgdesc="an open-source implementation of the OpenGL specification, git version"
pkgver=19.2.0_devel.111123.daa85a882e8
pkgrel=1
arch=('x86_64')
makedepends=('git' 'python-mako' 'xorgproto'
              'libxml2' 'libx11'  'libvdpau' 'libva' 'elfutils' 'libomxil-bellagio' 'libxrandr'
              'ocl-icd' 'vulkan-icd-loader' 'libgcrypt'  'wayland' 'wayland-protocols' 'meson' 'ninja')
depends=('libdrm' 'libxxf86vm' 'libxdamage' 'libxshmfence' 'libelf'
         'libomxil-bellagio' 'libunwind' 'libglvnd' 'wayland' 'lm_sensors' 'libclc' 'glslang')
optdepends=('opengl-man-pages: for the OpenGL API man pages')
provides=(mesa=$pkgver-$pkgrel vulkan-intel=$pkgver-$pkgrel vulkan-radeon=$pkgver-$pkgrel libva-mesa-driver=$pkgver-$pkgrel mesa-vdpau=$pkgver-$pkgrel vulkan-driver=$pkgver-$pkgrel opencl-mesa=$pkgver-$pkgrel opengl-driver opencl-driver)
conflicts=('mesa' 'opencl-mesa' 'vulkan-intel' 'vulkan-radeon' 'libva-mesa-driver' 'mesa-vdpau')
url="https://www.mesa3d.org"
license=('custom')
source=('mesa::git://anongit.freedesktop.org/mesa/mesa'
        'LICENSE'
        'radeonsi: update buffer descriptors in all contexts after buffer invalidation 78e35df52aa2f7d770f929a0866a0faa89c261a9.patch')
md5sums=('SKIP'
         '5c65a0fe315dd347e09b1f2826a1df5a'
         '0cf986d1e8a664c2aa231cbfbe3c4b13')
sha512sums=('SKIP'
            '25da77914dded10c1f432ebcbf29941124138824ceecaf1367b3deedafaecabc082d463abcfa3d15abff59f177491472b505bcb5ba0c4a51bb6b93b4721a23c2'
            'e29d60885bcca64333bc0be618d77db3ef02fc653f67ed00204623cb522bd05ea81aaaac0dc3fe0f4a22b3fd9d485c34f152b9f3228947dc0c4ea51179e1e5e6')

# MESA_WHICH_LLVM is an environment variable used to determine which llvm package tree is used to built mesa-git against.
# Adding a line to makepkg.conf that sets this value is the simplest way to ensure a specific choice.
#
# 1: llvm-minimal-git (aur) preferred value
# 2: llvm-git (aur)
# 3  llvm-svn (lordheavy unofficial repo)
# 4  llvm (stable from extra) Default value
# 
if [[ ! $MESA_WHICH_LLVM ]] ; then
    MESA_WHICH_LLVM=4
fi

case $MESA_WHICH_LLVM in
    1)
        # aur lone_wolf-llvm-git
        makedepends+=('llvm-minimal-git' 'clang-minimal-git')
        depends+=('llvm-libs-minimal-git')
        ;;
    2)
        # aur llvm-git
        makedepends+=('llvm-git' 'clang-git')
        depends+=('llvm-libs-git')
        ;;
    3)
        # mesa-git/llvm-svn (lordheavy unofficial repo)
        makedepends+=('llvm-svn' 'clang-svn')
        depends+=('llvm-libs-svn')
        ;;
    4)
        # extra/llvm
        makedepends+=(llvm=8.0.0 clang=8.0.0)
        depends+=(llvm-libs=8.0.0)
        ;;
    *)
esac
        
        
        
        
        
pkgver() {
    cd mesa
    read -r _ver <VERSION
    echo ${_ver/-/_}.$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare() {
    # although removing _build folder in build() function feels more natural,
    # that interferes with the spirit of makepkg --noextract
    if [  -d _build ]; then
        rm -rf _build
    fi
    cd mesa
    patch --reverse -Np1 -i $srcdir/'radeonsi: update buffer descriptors in all contexts after buffer invalidation 78e35df52aa2f7d770f929a0866a0faa89c261a9.patch'
}

build () {
    meson setup mesa _build \
       -D b_ndebug=true \
       -D buildtype=plain \
       --wrap-mode=nofallback \
       -D prefix=/usr \
       -D sysconfdir=/etc \
       -D platforms=x11,wayland,drm,surfaceless \
       -D dri-drivers=i915,i965,r200,r100,nouveau \
       -D gallium-drivers=r300,r600,radeonsi,nouveau,svga,swrast,virgl,iris \
       -D vulkan-drivers=amd,intel \
       -D dri3=true \
       -D egl=true \
       -D gallium-extra-hud=true \
       -D gallium-nine=true \
       -D gallium-omx=bellagio \
       -D gallium-va=true \
       -D gallium-vdpau=true \
       -D gallium-xa=true \
       -D gallium-xvmc=false \
       -D gbm=true \
       -D gles1=true \
       -D gles2=true \
       -D glvnd=true \
       -D glx=dri \
       -D libunwind=true \
       -D llvm=true \
       -D lmsensors=true \
       -D osmesa=gallium \
       -D shared-glapi=true \
       -D gallium-opencl=icd \
       -D valgrind=false \
       -D vulkan-overlay-layer=true \
       -D tools=[]
       
    meson configure _build
    if [[ ! $NINJAFLAGS ]]; then
        ninja  -C _build 
    else
        ninja  "$NINJAFLAGS" -C _build
    fi
}


package() {

  DESTDIR="$pkgdir" ninja -C _build install

  # indirect rendering
  ln -s /usr/lib/libGLX_mesa.so.0 ${pkgdir}/usr/lib/libGLX_indirect.so.0

  install -Dt "$pkgdir"/usr/share/licenses/$pkgname "$srcdir"/LICENSE
}
