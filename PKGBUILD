# Contributor: Adam Griffiths <adam_griffithsAATTdart.net.au>
# Contributor: Todd Maynard <arch@toddmaynard.com>
# Many thanks to AlexExtreme <alex@alex-smith.me.uk> (Frugalware pkg maintainer) from which much of this was borrowed.
# Many thanks to Stefan for patch for x86_64 support and el.ini fix.
# Maintainer: Angelo Theodorou <encelo@users.sourceforge.net>

pkgname=eternallands
pkgver=1.9.5.8
pkgrel=1
pkgdesc="A free 3D MMORPG game with thousands of on-line players"
arch=('i686' 'x86_64')
license=('custom')
url="http://www.eternal-lands.com/"
depends=('sdl2_net' 'sdl2_image' 'openal' 'cal3d' 'libvorbis' 'glu')
makedepends=('gzip' 'git' 'unzip' 'pkgconf')
optdepends=('zenity: to use the launch script' 'kdialog: to use the launch script')
options=('!emptydirs')
changelog=eternallands.changelog
source=('https://github.com/raduprv/Eternal-Lands/releases/download/1.9.5.7/el_195_p7_data_files.zip')
md5sums=('c58b6f374d0f9ce3f0aa0fe4eab348d5')

build()
{
  # Local to the function to avoid version bumping
  _gitroot="git://github.com/raduprv/Eternal-Lands.git"
  _gitname="elc"

  cd "$srcdir"
  echo "Connecting to GIT server...."

  if [ -d $_gitname ] ; then
    cd $_gitname && git pull $_gitroot
    echo "The local files are updated."
  else
    git clone $_gitroot $_gitname
  fi

  echo "GIT checkout done or server timeout"
  echo "Starting make..."

  rm -rf "$srcdir/$_gitname-build"
  git clone "$srcdir/$_gitname" "$srcdir/$_gitname-build"
  cd "$srcdir/$_gitname-build"
  git checkout ${pkgver}

  sed -i "s|/usr/games/|/usr/bin/|" pkgfiles/eternallands
  sed -i "s|/usr/share/games/EternalLands/|/usr/share/eternallands/|" pkgfiles/eternallands
  sed -i "s|#data_dir = /usr/share/games/EternalLands|#data_dir = /usr/share/eternallands|" pkgfiles/eternallands
  sed -i "s|#data_dir = \\\/usr\\\/share\\\/games\\\/EternalLands|#data_dir = \\\/usr\\\/share\\\/eternallands|" pkgfiles/eternallands
  rm -f gen_git_version
  make -f Makefile.linux release
}

package() {
  cd "$srcdir"

  mkdir -p "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/share/man/man6"
  mkdir -p "${pkgdir}/usr/share/pixmaps"
  mkdir -p "${pkgdir}/usr/share/applications"
  mkdir -p "${pkgdir}/usr/share/licenses/eternallands/"
  mkdir -p "${pkgdir}/usr/share/eternallands"

  install -m755 elc-build/el.x86.linux.bin "${pkgdir}/usr/bin/"
  install -m755 elc-build/pkgfiles/eternallands "${pkgdir}/usr/bin/"
  install -m644 elc-build/pkgfiles/eternallands.6 "${pkgdir}/usr/share/man/man6"
  install -m644 elc-build/pkgfiles/el.x86.linux.bin.6 "${pkgdir}/usr/share/man/man6"
  install -m644 elc-build/pkgfiles/eternallands.png "${pkgdir}/usr/share/pixmaps/"
  install -m644 elc-build/pkgfiles/eternallands.xpm "${pkgdir}/usr/share/pixmaps/"
  install -m644 elc-build/pkgfiles/eternallands.desktop "${pkgdir}/usr/share/applications"
  install -m644 elc-build/eternal_lands_license.txt "${pkgdir}/usr/share/licenses/eternallands/"

  cd el_data

  # Compress textures and maps
  find \( -name *.bmp -or -name *.elm \) -exec gzip -f {} \;

  for dir in 2dobjects 3dobjects actor_defs animations languages maps meshes particles shaders skeletons skybox textures; do
    cp -R ${dir} "${pkgdir}/usr/share/eternallands/"
  done

  sed -i "s|^#data_dir = \"c:\\\Program Files\\\Eternal Lands\\\\\"|#data_dir = /usr/share/eternallands|" el.ini
  sed -i "s|^#use_new_selection.*$|#use_new_selection = 1|g" el.ini

  for file in *.ini *.txt *.lst *.xml; do
    install -m644 ${file} "${pkgdir}/usr/share/eternallands/"
  done

  install -m644 ${srcdir}/elc-build/el.ini "${pkgdir}/usr/share/eternallands/"
}
