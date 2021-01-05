# Maintainer: EatMyVenom <eat.my.venomm@gmail.com>

_pkgname=phosphor-fabric
pkgname=mc-phosphor-dev-git
pkgver=1.16.3.0.7.0.r183.a38b1bd
pkgrel=1
pkgdesc="A client side minecraft optimization mod"
arch=('any')
url="https://github.com/jellysquid3/phosphor-fabric"
license=('LGPL')
makedepends=('gradle')
source=("git+https://github.com/jellysquid3/${_pkgname}.git")
md5sums=('SKIP') 

pkgver() {
  cd "$_pkgname"
  echo $(cat gradle.properties | grep 'minecraft_version' | cut -d'=' -f2 ).$(cat gradle.properties | grep 'mod_version' | cut -d'=' -f2).$(printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")
}

build() {
  cd "$_pkgname"

  gradle build
}

package() {
  cd "$_pkgname"

  mkdir -p "${pkgdir}/usr/share/minecraft/"
  
  # please for the love of anything do not read the next 2 lines
  cp "build/libs/${_pkgname}-mc$(cat gradle.properties | grep 'minecraft_version' | cut -d'=' -f2)-$(cat gradle.properties | grep 'mod_version' | cut -d'=' -f2)-SNAPSHOT.jar" \
     "${pkgdir}/usr/share/minecraft/${_pkgname}-dev-$(cat gradle.properties | grep 'minecraft_version' | cut -d'=' -f2)-$(cat gradle.properties | grep 'mod_version' | cut -d'=' -f2).jar"
}

