# Maintainer: Archimede Pitagorico <archimede.pitagorico@mail.com>

pkgname=megasync-headless
pkgver=v3.3.1.1.gf4ba4aec
pkgrel=1
pkgdesc="Sync with MEGA. Daemon, fuse and cli client. Original sdk (git)."
arch=('x86_64')
url='https://mega.co.nz/#sync'
license=('custom:MEGA')
source=('git+https://github.com/meganz/sdk.git#tag=v3.3.1'
        'megasyncd@.service'
        'megasync.conf'
        )
install=$pkgname.install
backup=('usr/lib/systemd/system/megasyncd@.service'
        'etc/conf.d/megasync.conf'
       )
conflicts=('megasync'
	   'megasync-git'
           'megatools'
           )
depends=('c-ares'
         'curl'
         'crypto++'
	 'zlib'
	 'openssl'
         )
makedepends=('git'
             )
sha1sums=('SKIP'
          'SKIP'
          'SKIP'
          )
options=('!buildflags'
        )

pkgver() {
  cd sdk
  echo "$(git describe --long --tags | tr - . | tr _ .)"
}

prepare() {
  cd sdk
  git cherry-pick 222594ea17e6fe4fca9b42b28e3cce335c2ca60e
  ./autogen.sh 

  ./configure \
    --without-freeimage \
    --without-sodium \
    --without-sqlite
}

build() {
    cd sdk
    make examples/megacli CPPFLAGS=-Wno-deprecated-declarations
    make examples/megasimplesync CPPFLAGS=-Wno-deprecated-declarations
}

package() {
   install -Dm644 megasyncd@.service "${pkgdir}/usr/lib/systemd/system/megasyncd@.service"
   install -Dm600 megasync.conf "${pkgdir}/etc/conf.d/megasync.conf"

   cd sdk
   make CPPFLAGS=-Wno-deprecated-declarations DESTDIR=${pkgdir} install
   # we do not need the include files
   rm -rf "${pkgdir}/usr/local/include"
   install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
   mkdir -p "${pkgdir}/srv/mega"
   mkdir -p "${pkgdir}/var/mega"
   chmod 0700 "${pkgdir}/var/mega"
   # pacman does not like /lib and /bin, because they are symlink, so move them to /usr/lib and /usr/bin
   cp -R ${pkgdir}/lib/* ${pkgdir}/usr/lib
   rm -rf ${pkgdir}/lib
   mv ${pkgdir}/bin ${pkgdir}/usr
}
