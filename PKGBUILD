# Maintainer: Antoine Damhet <xdbob at lse.epita.fr>
# Original-Maintainer: Jonathan Steel <jsteel at archlinux.org>
# Contributor: Benjamin Klettbach <b.klettbach@gmail.com>

_pkgname=obs-studio
pkgname=$_pkgname-wayland
provides=("$_pkgname")
conflicts=("$_pkgname")
pkgver=25.0.8
pkgrel=2
pkgdesc="Free, open source software for live streaming and recording (with wayland patches)"
arch=('x86_64')
url="https://obsproject.com"
license=('GPL2')
depends=('ffmpeg' 'jansson' 'libxinerama' 'libxkbcommon-x11' 'mbedtls'
         'qt5-svg' 'qt5-x11extras' 'curl' 'jack' 'gtk-update-icon-cache')
makedepends=('cmake' 'libfdk-aac' 'libxcomposite' 'x264' 'vlc' 'swig' 'python' 'luajit')
optdepends=('libfdk-aac: FDK AAC codec support'
            'libxcomposite: XComposite capture support'
            'libva-intel-driver: hardware encoding'
            'libva-mesa-driver: hardware encoding'
            'luajit: scripting support'
            'python: scripting support'
            'vlc: VLC Media Source support'
            'wlrobs-hg: screen capture on wlroots compositors')
source=(
  $_pkgname-$pkgver.tar.gz::https://github.com/jp9000/obs-studio/archive/$pkgver.tar.gz
  https://github.com/obsproject/obs-studio/commit/8a1429e29ebd6bf31ad6ae63c6992e2c03893767.patch
  0001-deps-glad-Add-EGL.patch
  0002-libobs-opengl-Rename-gl-x11.c-to-gl-x11-glx.c.patch
  0003-libobs-opengl-Factor-out-GLX-winsys.patch
  0004-libobs-opengl-Introduce-the-X11-EGL-winsys.patch
  0005-deps-glad-Make-X11-required-as-well.patch
  0006-ci-Install-qtbase5-private-dev-on-Linux.patch
  0007-libobs-nix-Move-X11-specific-code-to-obs-nix-x11.c.patch
  0008-libobs-Introduce-the-concept-of-a-Unix-platform.patch
  0009-UI-Set-the-Unix-platform-on-startup.patch
  0010-linux-capture-Fail-to-load-when-running-on-EGL.patch
  0011-libobs-Add-a-Wayland-platform.patch
  0012-libobs-opengl-Try-to-use-the-platform-display-if-ava.patch
  0013-libobs-Add-a-Wayland-platform.patch
  0014-libobs-opengl-Introduce-an-EGL-Wayland-renderer.patch
  0015-UI-Retrieve-Wayland-surface-from-QWindow.patch
  0016-UI-Destroy-obs_display-when-becoming-invisible.patch
)
sha512sums=('a97c03dc218a4e03e48f6a7dc82b4a59ebeee2039f17be66bb847681ce9ff3d25e6e015be4af78fe44739f6fad5089b6e683d7657c2e4fde8e547df9a2594a08'
            '1ff0e088eed61554268009f3d8c5a23c0888bfbe860d6cb288ddf348108446c152fd87e2cb8f54613a88378d8474550632c90f924005d5e0343bf1a801339ccc'
            '6329e08da95e345509001ab6b9e8b73a227d0e63a8d39a3ef9b7d0197940ea9589d39b4aa92cdcc9f21cc4b9110a97f8e80891a12b4b24dff6d23395379abf5c'
            'b05346b83587d2fe3fbc676a14aca961f05fa58c6912f82fed9e15a4b9fcacce297921003b41980c57ba09c4623d50c905a7c50961c2269a9709fcb67a088002'
            '6f38fd7f6f5a29d05b6dd824af1de6072ebd692c96940ba74e5d1799e21754230010fd70cd2f1ce830a0701d25b07cfbae8cbe49f89ba085cd2dec6796a7790d'
            '14979eef47ab1d6e88ab77c35ab00a5e8297d1ed332bb397b8d3906e68c6ffa0b4e0761ef0dfff0221c7e22f5fb709e5bb11b87e046116bb3996df270e3b7b43'
            'db6a8d54e86f58f1adecb0f09ab5660ae0d06f4aa8bd0ea2e61da601ae82fd53a3b4c6db96d5827709e700843b70cc5a72851c0d429e3ec05bef250ed48445a0'
            'f0374c85bd93928a32d60a9516c90c1b2e3537b84f949066110897f05224a568dd57f2cd9d141b0cfa8e89672b081dac3c64304523fcf37f0c018ca78ad71625'
            'dcdca90cfd701aad02ba12dee9a6482ca9066ff817e6e24bb3d0d6dfbbc48e8e98eb02517983802c66cade34c0d347aec817fe98da8baa7f5fff9187201e9a00'
            '64e4adef34a1074410245120d828871c128ee8254d77378cd7b74fe0182abaffdbff6669990a75464335b33d83641893b73e618c7322e1fe3186a748eab07e79'
            '64ca66913ade6b28815aa06383089e1c9aaa7a2b50cd425be8876d0a95338615be844a362a55c02541681d51f1921cb0820554f49fe21786649076ca16f6f64b'
            'a917037dc63bfdd8d2d04b2d3f625eb9c8ec26868ca2eeef23d78f3442c8233252d86285b771e1c1428408508aedff4407aec5bdc9ef233fda995483fdab4202'
            '013adb73a718f5df05a055de0e5fa17701dc645d8e7025ff1192d99a405dd6a0923fcfdbbad37777ff993545aadf9d4d29bae7191c6505f9f929273d5b374ee2'
            '34710dbf905e6af2d7af3feab9f55c867dcbac6afa0ab6a12f7c458b974ba71e14ef797e9db613d3248c046dee1c1dce8559ceeaf1d95d1215368032e642731d'
            'e131c7a65ce0e848f0b91bfd4b3db750bc0bddce64a9ff49d97082ddafb9ddab92f43ea19a2c92b054e85df0f018f43ff5dc8cf81671520079e4e4681d5ac230'
            'cefa4f5032a06e9341ccdabef022d755c8869b391a33ed5c4bd927672f967d5287d4c017cb7b2d37c163c9f387ca94d5846327461a9ba3b44478ed67a60d6a9f'
            'e406d3f16f17b35ce463120eefd2bea3797fa83304ea27628b9a671704451c4a275d6844b0f007997e3a6edc39557442c6eb9eb8b6dc2a50e07341e3b0621e1f'
            '6c1cd77e63f760aabb9186edb906092bb9f6a7b2e7bd32deff4af33b5f35e95abe7ff874b6a17112d3da098f970f706c0a05f239fc75b65e60f4c68ae544eacf')
prepare() {
  cd $_pkgname-$pkgver

  for patch in ../*.patch; do
    patch -Np1 -i "$patch"
  done
}

build() {
  cd $_pkgname-$pkgver

  mkdir -p build; cd build

  cmake -DCMAKE_INSTALL_PREFIX="/usr" \
    -DOBS_VERSION_OVERRIDE="$pkgver-$pkgrel" ..

  make
}

package() {
  cd $_pkgname-$pkgver/build

  make install DESTDIR="$pkgdir"
}
