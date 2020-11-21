#Maintainer: kevall474 <kevall474@tuta.io> <https://github.com/kevall474>
#Credits: Lone_Wolf <lone_wolf@klaas-de-kat.nl> ---> For the base PKGBULD
#Credits: Laurent Carlier <lordheavym@gmail.com> ---> For the base PKGBUILD

pkgname=mesa-llvm-rc
pkgver=20.3.0_rc2
pkgrel=1
versiontag=20.3.0-rc2
pkgdesc="Mesa rc release. LLVM enable by default. More options are enable than the standard mesa package."
arch=(x86_64)
url="https://mesa3d.org/"
license=('MIT')
depends=("libdrm" "libelf" "libglvnd" "libomxil-bellagio" "libunwind" "libxdamage" "libxxf86vm" "llvm-libs" "lm_sensors" "wayland" "zstd" "libxshmfence"
         "libclc" "expat" "vulkan-icd-loader")
makedepends=("bison" "flex" "valgrind" "meson" "ninja" "git" "ninjas2" "clang" "libxvmc" "python" "python-appdirs" "python-mako" "python-evdev" "elfutils"
             "glslang" "libva" "libepoxy" "libxv" "libvdpau" "libx11" "libxml2" "libxrandr" "llvm" "libconfig" "gtk3" "wayland-protocols" "xorgproto")
conflicts=("mesa" "opencl-mesa" "vulkan-intel" "vulkan-radeon" "vulkan-mesa-layer" "libva-mesa-driver" "mesa-vdpau" "mesa-aco-rc" "mesa-aco" "mesa-llvm"
           "mesa-git")
replaces=("mesa" "opencl-mesa" "vulkan-intel" "vulkan-radeon" "vulkan-mesa-layer" "libva-mesa-driver" "mesa-vdpau" "mesa-aco-rc" "mesa-aco" "mesa-llvm"
          "mesa-git")
provides=("mesa" "opencl-mesa" "vulkan-intel" "vulkan-radeon" "vulkan-driver" "vulkan-mesa-layer" "libva-mesa-driver" "mesa-vdpau" "opengl-driver" "opencl-driver"
          "mesa-libgl")
source=("https://archive.mesa3d.org/mesa-${versiontag}.tar.xz"
        "radv_debug.h-${versiontag}.patch"
        "radv_device.c-${versiontag}.patch"
        "LICENSE")
md5sums=("SKIP"
         "SKIP"
         "SKIP"
         "SKIP")

build(){
  cd mesa-${versiontag}

  #Patching for llvm
  
  msg2 "Patching src/amd/vulkan/radv_debug.h with radv_debug.h-${versiontag}.patch"
  patch -u src/amd/vulkan/radv_debug.h -i ../radv_debug.h-${versiontag}.patch

  msg2 "Patching src/amd/vulkan/radv_device.c with radv_device.c-${versiontag}.patch"
  patch -u src/amd/vulkan/radv_device.c -i ../radv_device.c-${versiontag}.patch

  # remove build dir if there is one
  msg2 "remove build dir if there is one"
  if dir build; then
  rm -rf build
  fi

  # create build dir
  msg2 "Create build dir"
  mkdir -p -v build

  # build with meson
  msg2 "Build with meson"
  meson build \
  -D b_ndebug=true \
  -D b_lto=true \
  -D buildtype=plain \
  --wrap-mode=nofallback \
  -D sysconfdir=/etc \
  -Dprefix=/usr \
  -Dplatforms=x11,wayland \
  -Ddri3=enabled \
  -Ddri-drviers=i915,i965,r100,r200,nouveau \
  -Dgallium-drivers=r300,r600,radeonsi,nouveau,virgl,svga,swrast,iris,zink,freedreno,v3d,vc4,etnaviv,tegra,kmsro \
  -Dgallium-extra-hud=true \
  -Dgallium-vdpau=enabled \
  -Dgallium-xvmc=enabled \
  -Dgallium-omx=auto \
  -Dgallium-va=enabled \
  -Dgallium-xa=enabled \
  -Dgallium-nine=true \
  -Dgallium-opencl=icd \
  -Dopencl-spirv=false \
  -Dvulkan-drivers=amd,intel \
  -Dshader-cache=enabled \
  -Dvulkan-overlay-layer=true \
  -Dvulkan-device-select-layer=true \
  -Dshared-glapi=enabled \
  -Dgles1=enabled \
  -Dgles2=enabled \
  -Dopengl=true \
  -Dgbm=enabled \
  -Dglx=dri \
  -Degl=enabled \
  -Dglvnd=true \
  -Dllvm=enabled \
  -Dshared-llvm=disabled \
  -Dvalgrind=enabled \
  -Dlibunwind=enabled \
  -Dlmsensors=enabled \
  -Dselinux=false \
  -Dosmesa=gallium \
  -Dswr-arches=avx,avx2,knl,skx \
  -Dshared-swr=true \
  -Dpower8=enabled \
  -Dxlib-lease=enabled \
  -Dglx-direct=true \
  -Dzstd=enabled
}

package(){
  # compiling mesa and installing to "$pkgdir"
  msg2 "Compiling mesa and installing to ${pkgdir}"
  DESTDIR="${pkgdir}" ninja $NINJAFLAGS -C mesa-${versiontag}/build/ install

  # remove script file from /usr/bin
  msg2 "Remove ${pkgdir}/usr/bin/mesa-overlay-control.py"
  rm "${pkgdir}/usr/bin/mesa-overlay-control.py"
  msg2 "Remove ${pkgdir}/usr/bin"
  rm -rf "${pkgdir}/usr/bin"

  # indirect rendering
  ln -s /usr/lib/libGLX_mesa.so.0 "${pkgdir}/usr/lib/libGLX_indirect.so.0"

  # installing license
  install -dm755 "${pkgdir}"/usr/share/licenses/${pkgname}-${versiontag}/
  cp -v -r "${srcdir}"/LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}-${versiontag}/
}
