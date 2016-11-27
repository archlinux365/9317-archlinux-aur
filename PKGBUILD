# Maintainer: Petteri Tolonen <petteri dot tolonen at gmail dot com>
# Contributor: erm67
# Contributor: JD Steffen
pkgname=hexen2
pkgver=1.5.8
_gamecodever=1.29a
pkgrel=1
pkgdesc="Hammer of Thyrion: A cross-platform port of Raven Software's Hexen II source based on an older linux port, Anvil of Thyrion"
arch=('i686' 'x86_64')
url="http://uhexen2.sourceforge.net/"
license=('GPL2')
depends=('bash' 'libmad' 'libvorbis' 'sdl>=1.2.4')
makedepends=('libmad' 'libvorbis' 'nasm')
provides=('hexenworld')
install=hexen2.install
source=(http://downloads.sourceforge.net/uhexen2/hexen2source-${pkgver}.tgz \
        http://downloads.sourceforge.net/uhexen2/hexen2source-gamecode-${pkgver}.tgz \
	      http://downloads.sourceforge.net/uhexen2/hexenworld-pakfiles-0.15.tgz \
	      hexen2.desktop \
	      hexen2.sh)
sha256sums=('fbe6d05b4a10b82d1817faeccc18996a93b26d0814fe4e5f6e75d94862660463'
            '5ba7f996a282305a157de9d1735b416c7151f59d6e84a580e1e9ed8bb66c4044'
                        '49462cdf984deee7350d03c7d192d1c34d682647ffc9d06de4308e0a7c71c4d9'
                                    'f3130b7aa64ffb0c041429ea4f8c32de338fd892f16b9f89dd470d6cc7f757cf'
                                                'c592f675cc04fba0d6c3608d41dc1aed7923e66c49e9ee598ff7f77f7218c812')

build() {

  cd $srcdir/hexen2source-$pkgver
  # Build the main game binaries
  make -C engine/hexen2 h2
  # use localclean instead of clean to avoid building timidity every time
  make -s -C engine/hexen2 localclean
  make -C engine/hexen2 glh2
  make -s -C engine/hexen2 localclean
  # Build the dedicated server
  make -C engine/hexen2/server
  # HexenWorld binaries
  make -C engine/hexenworld/server
  make -s -C engine/hexenworld/client localclean
  make -C engine/hexenworld/client hw
  make -s -C engine/hexenworld/client localclean
  make -C engine/hexenworld/client glhw
  # HexenWorld master server
  make -C hw_utils/hwmaster

  # Build h2patch
  make -C h2patch

  # Build the hcode compiler
  make -C utils/hcc
  # Build the game-code
  utils/hcc/hcc -src ../gamecode-${_gamecodever}/hc/h2 -os
  utils/hcc/hcc -src ../gamecode-${_gamecodever}/hc/h2 -os -name progs2.src
  utils/hcc/hcc -src ../gamecode-${_gamecodever}/hc/portals -os -oi -on
  utils/hcc/hcc -src ../gamecode-${_gamecodever}/hc/hw -os -oi -on
  #utils/hcc/hcc -src ../gamecode-${_gamecodever}/hc/siege -os -oi -on

}

package() {
  
  cd $srcdir/hexen2source-$pkgver
  mkdir -p ${pkgdir}/opt/$pkgname/docs
  install -D -m755 engine/hexen2/glhexen2 ${pkgdir}/opt/$pkgname/glhexen2
  install -D -m755 engine/hexen2/hexen2 ${pkgdir}/opt/$pkgname/hexen2
  install -D -m755 engine/hexen2/server/h2ded ${pkgdir}/opt/$pkgname/h2ded
  install -D -m755 engine/hexenworld/client/hwcl ${pkgdir}/opt/$pkgname/hwcl
  install -D -m755 engine/hexenworld/client/glhwcl ${pkgdir}/opt/$pkgname/glhwcl
  install -D -m755 engine/hexenworld/server/hwsv ${pkgdir}/opt/$pkgname/hwsv
  install -D -m755 hw_utils/hwmaster/hwmaster ${pkgdir}/opt/$pkgname/hwmaster
  install -D -m755 h2patch/h2patch ${pkgdir}/opt/$pkgname/h2patch
  
  # Install the run script and make symlinks to it
  mkdir -p ${pkgdir}/usr/bin
  sed -i 's|^hexen2dir=.*$|hexen2dir=/opt/hexen2|g' scripts/hexen2-run.sh
  install -D -m755 scripts/hexen2-run.sh ${pkgdir}/usr/bin/hexen2-run.sh
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/glhexen2
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/hexen2
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/h2ded
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/glhwcl
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/hwcl
  ln -s hexen2-run.sh ${pkgdir}/usr/bin/hwsv

  # Install the cd-rip scripts
  install -D -m755 scripts/cdrip_hexen2.sh ${pkgdir}/opt/$pkgname/cdrip_hexen2.sh
  install -D -m755 scripts/cdrip_hexen2_xplosiv.sh ${pkgdir}/opt/$pkgname/cdrip_hexen2_xplosiv.sh
  install -D -m755 scripts/cdrip_hexen2_matroxm3d.sh ${pkgdir}/opt/$pkgname/cdrip_hexen2_matroxm3d.sh
  install -D -m755 scripts/cdrip_missionpack.sh ${pkgdir}/opt/$pkgname/cdrip_missionpack.sh
  
  # Install the docs
  install -D -m644 docs/README ${pkgdir}/opt/$pkgname/docs/README
  install -D -m644 docs/COPYING ${pkgdir}/opt/$pkgname/docs/COPYING
  install -D -m644 docs/BUGS ${pkgdir}/opt/$pkgname/docs/BUGS
  install -D -m644 docs/TODO ${pkgdir}/opt/$pkgname/docs/TODO
  install -D -m644 docs/ABOUT ${pkgdir}/opt/$pkgname/docs/ABOUT
  install -D -m644 docs/AUTHORS ${pkgdir}/opt/$pkgname/docs/AUTHORS
  install -D -m644 docs/Features ${pkgdir}/opt/$pkgname/docs/Features
  install -D -m644 docs/CHANGES ${pkgdir}/opt/$pkgname/docs/CHANGES
  install -D -m644 docs/CHANGES.old ${pkgdir}/opt/$pkgname/docs/CHANGES.old
  install -D -m644 docs/README.music ${pkgdir}/opt/$pkgname/docs/README.music
  install -D -m644 docs/README.3dfx ${pkgdir}/opt/$pkgname/docs/README.3dfx
  install -D -m644 docs/README.hwcl ${pkgdir}/opt/$pkgname/docs/README.hwcl
  install -D -m644 docs/README.hwsv ${pkgdir}/opt/$pkgname/docs/README.hwsv
  install -D -m644 docs/README.hwmaster ${pkgdir}/opt/$pkgname/docs/README.hwmaster
  install -D -m644 docs/SrcNotes.txt ${pkgdir}/opt/$pkgname/docs/SrcNotes.txt
  install -D -m644 docs/ReleaseNotes ${pkgdir}/opt/$pkgname/docs/ReleaseNotes
  install -D -m644 docs/ReleaseNotes.old ${pkgdir}/opt/$pkgname/docs/ReleaseNotes.old

  cd ..

  # Install the gamedata
  mkdir -p ${pkgdir}/opt/$pkgname/data1/
  install -D -m644 gamecode-${_gamecodever}/hc/h2/progs.dat ${pkgdir}/opt/$pkgname/data1/progs.dat
  install -D -m644 gamecode-${_gamecodever}/hc/h2/progs2.dat ${pkgdir}/opt/$pkgname/data1/progs2.dat
  install -D -m644 gamecode-${_gamecodever}/res/h2/hexen.rc ${pkgdir}/opt/$pkgname/data1/hexen.rc
  install -D -m644 gamecode-${_gamecodever}/res/h2/strings.txt ${pkgdir}/opt/$pkgname/data1/strings.txt
  install -D -m644 gamecode-${_gamecodever}/res/h2/default.cfg ${pkgdir}/opt/$pkgname/data1/default.cfg
  mkdir -p ${pkgdir}/opt/$pkgname/portals/
  install -D -m644 gamecode-${_gamecodever}/hc/portals/progs.dat ${pkgdir}/opt/$pkgname/portals/progs.dat
  install -D -m644 gamecode-${_gamecodever}/res/portals/hexen.rc ${pkgdir}/opt/$pkgname/portals/hexen.rc
  install -D -m644 gamecode-${_gamecodever}/res/portals/strings.txt ${pkgdir}/opt/$pkgname/portals/strings.txt
  install -D -m644 gamecode-${_gamecodever}/res/portals/infolist.txt ${pkgdir}/opt/$pkgname/portals/infolist.txt
  install -D -m644 gamecode-${_gamecodever}/res/portals/maplist.txt ${pkgdir}/opt/$pkgname/portals/maplist.txt
  install -D -m644 gamecode-${_gamecodever}/res/portals/puzzles.txt ${pkgdir}/opt/$pkgname/portals/puzzles.txt
  install -D -m644 gamecode-${_gamecodever}/res/portals/default.cfg ${pkgdir}/opt/$pkgname/portals/default.cfg
  mkdir -p ${pkgdir}/opt/$pkgname/hw/
  install -D -m644 gamecode-${_gamecodever}/hc/hw/hwprogs.dat ${pkgdir}/opt/$pkgname/hw/hwprogs.dat
  install -D -m644 gamecode-${_gamecodever}/res/hw/mapcycle.cfg ${pkgdir}/opt/$pkgname/hw/mapcycle.cfg
  install -D -m644 gamecode-${_gamecodever}/res/hw/server.cfg ${pkgdir}/opt/$pkgname/hw/server.cfg
  install -D -m644 gamecode-${_gamecodever}/res/hw/strings.txt ${pkgdir}/opt/$pkgname/hw/strings.txt
  install -D -m644 gamecode-${_gamecodever}/res/hw/default.cfg ${pkgdir}/opt/$pkgname/hw/default.cfg
  install -D -m644 hw/pak4.pak ${pkgdir}/opt/$pkgname/hw/pak4.pak

  # Install ent fixes handling map quirks
  mkdir -p ${pkgdir}/opt/$pkgname/data1/maps/
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/README.txt ${pkgdir}/opt/$pkgname/data1/maps/README.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/cath.ent ${pkgdir}/opt/$pkgname/data1/maps/cath.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/cath.txt ${pkgdir}/opt/$pkgname/data1/maps/cath.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/demo2.ent ${pkgdir}/opt/$pkgname/data1/maps/demo2.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/demo2.txt ${pkgdir}/opt/$pkgname/data1/maps/demo2.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/egypt4.ent ${pkgdir}/opt/$pkgname/data1/maps/egypt4.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/egypt4.txt ${pkgdir}/opt/$pkgname/data1/maps/egypt4.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/egypt5.ent ${pkgdir}/opt/$pkgname/data1/maps/egypt5.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/egypt5.txt ${pkgdir}/opt/$pkgname/data1/maps/egypt5.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/romeric5.ent ${pkgdir}/opt/$pkgname/data1/maps/romeric5.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/romeric5.txt ${pkgdir}/opt/$pkgname/data1/maps/romeric5.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/tower.ent ${pkgdir}/opt/$pkgname/data1/maps/tower.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/data1/maps/tower.txt ${pkgdir}/opt/$pkgname/data1/maps/tower.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/portals/maps/README.txt ${pkgdir}/opt/$pkgname/portals/maps/README.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/portals/maps/tibet2.ent ${pkgdir}/opt/$pkgname/portals/maps/tibet2.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/portals/maps/tibet2.txt ${pkgdir}/opt/$pkgname/portals/maps/tibet2.txt
  install -D -m644 gamecode-${_gamecodever}/mapfixes/portals/maps/tibet9.ent ${pkgdir}/opt/$pkgname/portals/maps/tibet9.ent
  install -D -m644 gamecode-${_gamecodever}/mapfixes/portals/maps/tibet9.txt ${pkgdir}/opt/$pkgname/portals/maps/tibet9.txt

  # Install the xdelta updates
  mkdir -p ${pkgdir}/opt/$pkgname/patchdat/data1
  install -D -m644 gamecode-${_gamecodever}/patch111/patchdat/data1/data1pk0.xd3 ${pkgdir}/opt/$pkgname/patchdat/data1/data1pk0.xd3
  install -D -m644 gamecode-${_gamecodever}/patch111/patchdat/data1/data1pk1.xd3 ${pkgdir}/opt/$pkgname/patchdat/data1/data1pk1.xd3
  install -D -m644 gamecode-${_gamecodever}/patch111/patchdat.txt ${pkgdir}/opt/$pkgname/patchdat.txt

  # Install the menu icon and desktop item
  mkdir -p ${pkgdir}/usr/share/pixmaps
  mkdir -p ${pkgdir}/usr/share/applications
  install -m644 hexen2source-$pkgver/engine/resource/hexen2.png ${pkgdir}/usr/share/pixmaps/hexen2.png
  install -m644 ../$pkgname.desktop ${pkgdir}/usr/share/applications

}
# vim:set ts=2 sw=2 et:
