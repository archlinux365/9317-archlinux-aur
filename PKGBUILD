# Maintainer: Sankalp Gambhir <sankalp.gambhir42@gmail.com>
pkgname=stainless-git
pkgver=v0.9.6.r10.3ef64d07
pkgrel=1
pkgdesc="Verification framework and tool for higher-order Scala programs"
arch=(x86_64)
url="https://github.com/epfl-lara/stainless"
license=('Apache-2.0')
groups=()
depends=()
makedepends=(git sbt) # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/epfl-lara/stainless')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-*}"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-*}"
	sbt assembly
	pwd
	cp "./frontends/dotty/target/scala-3.0.2/stainless-dotty-assembly-$(git describe --long --abbrev=7 | sed 's/v//g').jar" stainless.jar
	touch stainless
	chmod +x stainless
	echo "#!/bin/sh" > stainless
	echo "exec /usr/bin/java -jar './stainless.jar' \"\$@\"" >> stainless 
}

package() {
	cd "$srcdir/${pkgname%-*}"
	echo "#!/bin/sh" > stainless
	echo "exec /usr/bin/java -jar '/usr/share/java/stainless/stainless.jar' \"\$@\"" >> stainless 

	# copy package jar
	install -Dm644 "stainless.jar" "$pkgdir/usr/share/java/stainless/stainless.jar"

	# copy shell script
	install -Dm755 "stainless" "$pkgdir/usr/bin/stainless"

	# copy license
	install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
