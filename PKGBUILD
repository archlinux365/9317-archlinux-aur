# Maintainer: Sergei Marochkin <me@ziggi.org>
# Contributor: Morris Jobke <morris.jobke AT gmail DOT com>
# Contributor: Boris Shomodjvarac <shomodj AT gmail DOT com>
# Contributor: G. Richard Bellamy <rbellamy@pteradigm.com>
pkgname=dbschema
pkgver=7.4.0
pkgrel=1
pkgdesc='Relational Data Browse, Query Builder, SQL Editor, schema deployment and synchronization.'
arch=('i686' 'x86_64')
url='http://www.dbschema.com/'
license=('custom')
depends=('java-runtime')
install="dbschema.install"
source=("http://www.dbschema.com/download/DbSchema_unix_${pkgver//./_}.tar.gz"
        "dbschema"
        "dbschema.desktop"
        "dbschema.install")
sha512sums=('48be39ef44a9881cf0843081a242ad5dad372446105351ffcf3360af59f86bcccb3a88996b9ee5448cc6b9704b1957d1301d166e0a939f1a14e8b31a28b12a65'
            '14aa7735e4ab9e3305b7d6d10e4db56ecaddccd53dc545165260a6098c238e6afc072d9fc8d02f419f5f1e46bd117ff61be5ed42c45572de439d83d0644b790a'
            'b0f62b502a758fdfb550cc1dc91237b37b0e5b0ceadbad9c76dd67cba20756e786573f2c99fe185bea115f5d97f8beaac42b834e1b0be6f0bdaafff711987b09'
            'bd69df33d839cf87430da26e97b6bd2a8f9f1bbf7f29f474e8ba540c9ceb2bbea19e684a8d6c4e9b4db32ed1e0e5762a8b28419e3079aa4e4d55ae3d04c1ba14')

package(){
  install -dm755 ${pkgdir}/opt
  cp -r DbSchema ${pkgdir}/opt/${pkgname}

  chmod 755 ${pkgdir}/opt/${pkgname}/DbSchema

  install -Dm755 dbschema ${pkgdir}/usr/bin/dbschema
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}
