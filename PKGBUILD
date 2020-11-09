#Maintainer: kevall474 <kevall474@tuta.io> <https://github.com/kevall474>
pkgname=mesa-llvm
pkgver=20.2.2
pkgrel=1
pkgdesc="mesa stable release with patch to enable llvm"
arch=(x86_64)
url="https://mesa3d.org/"
license=('MIT')
depends=("libdrm" "libelf" "libglvnd" "libomxil-bellagio" "libunwind" "libxdamage" "libxxf86vm" "llvm-libs"
            "lm_sensors" "wayland" "zstd" "libxv" "libxvmc" "libepoxy" "gtk3" "libconfig")
makedepends=("bison" "flex" "valgrind" "meson" "ninja" "git" "ninjas2" "cmake" "make" "extra-cmake-modules" "samurai"
            "python" "python-appdirs" "python-mako" "python-evdev" "spirv-tools" "spirv-llvm-translator" "clang"
            "elfutils" "glslang" "libclc" "libdrm" "libglvnd" "libomxil-bellagio" "libunwind" "libva"
            "libvdpau" "libx11" "libxdamage" "libxml2" "libxrandr" "libxshmfence" "libxxf86vm" "llvm"
            "lm_sensors" "wayland" "wayland-protocols" "xorgproto" "zstd" "patch" "libxv" "libxvmc" "spirv-tools" "libepoxy" "gtk3")
conflicts=("opencl-mesa" "libva-mesa-driver" "mesa-vdpau" "vulkan-mesa-layer" "mesa-git" "mesa-aco" "mesa-aco-rc" "mesa-llvm-rc")
replaces=("opencl-mesa" "libva-mesa-driver" "mesa-vdpau" "vulkan-mesa-layers" "mesa-git" "mesa-aco" "mesa-aco-rc" "mesa-llvm-rc")
source=("https://archive.mesa3d.org/mesa-${pkgver}.tar.xz"
        "radv_debug.h-${pkgver}.patch"
        "radv_device.c-${pkgver}.patch"
        "LICENSE")
md5sums=("SKIP"
        "SKIP"
        "SKIP"
        "SKIP")

build() {
  	# patching for llvm
	echo " patching radv_debug.h and radv_device.c to enable llvm"
	patch -u mesa-${pkgver}/src/amd/vulkan/radv_debug.h -i radv_debug.h-${pkgver}.patch
	patch -u mesa-${pkgver}/src/amd/vulkan/radv_device.c -i radv_device.c-${pkgver}.patch

	# begin the build process
	cd mesa-${pkgver}

	# remove build dir if there is one
	echo "remove build dir if there is one"
	if dir build; then
	rm -rf build
	fi

	# create build dir
	echo "create build dir"
	mkdir build

	# build
	echo "build with meson"
	meson build/ \
	-Dplatforms=x11,wayland,drm,surfaceless \
	-Ddri3=enabled \
	-Ddri-drivers=i915,i965,r100,r200,nouveau \
	-Dgallium-drivers=r300,r600,radeonsi,nouveau,virgl,svga,swrast,iris,zink,freedreno,v3d,vc4,etnaviv,tegra,kmsro \
	-Dgallium-extra-hud=true \
	-Dgallium-vdpau=enabled \
	-Dgallium-xvmc=enabled \
	-Dgallium-omx=auto \
	-Dgallium-va=enabled \
	-Dgallium-xa=enabled \
	-Dgallium-nine=true \
	-Dgallium-opencl=standalone \
	-Dopencl-spirv=true \
	-Dvulkan-drivers=amd,intel \
	-Dshader-cache=enabled \
	-Dvulkan-overlay-layer=true \
	-Dvulkan-device-select-layer=true \
	-Dshared-glapi=enabled \
	-Dgles1=enabled \
	-Dgles2=enabled \
	-Dopengl=true \
	-Dgbm=enabled \
	-Dglx=auto \
	-Degl=enabled \
	-Dglvnd=false \
	-Dllvm=enabled \
	-Dshared-llvm=disabled \
	-Dvalgrind=enabled \
	-Dlibunwind=enabled \
	-Dlmsensors=enabled \
	-Dbuild-tests=true \
	-Dbuild-aco-tests=true \
	-Dselinux=false \
	-Dosmesa=gallium \
	-Dswr-arches=avx,avx2,knl,skx \
	-Dshared-swr=true \
	-Dtools=all \
	-Dpower8=enabled \
	-Dxlib-lease=enabled \
	-Dglx-direct=true \
	-Dzstd=enabled
}

package() {
	# compiling mesa and installing to "$pkgdir"
	echo "compiling mesa and installing to "$pkgdir""
	DESTDIR="$pkgdir" ninja $NINJAFLAGS -C mesa-${pkgver}/build/ install

	# installing licencse
	echo "installing license"
	install -dm755 "${pkgdir}"/usr/local/share/licenses/${pkgname}-${pkgver}/
	cp "${srcdir}"/LICENSE "${pkgdir}"/usr/local/share/licenses/${pkgname}-${pkgver}/
}
