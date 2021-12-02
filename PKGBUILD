# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Eric Liu <eric@hnws.me>
# Official repo maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Official repo maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=logstash-xpack
_pkgname=logstash
pkgver=7.15.2
_jrubyver=9.2.19.0
pkgrel=1
pkgdesc='Tool for managing events and logs'
url='https://www.elastic.co/products/logstash/'
arch=('x86_64')
license=('Apache')
depends=('java-runtime-headless>=8' 'ruby' 'ruby-bundler' 'coreutils' 'awk')
makedepends=('java-environment<=14' 'git')
provides=('logstash')
conflicts=('logstash')
backup=('etc/conf.d/logstash'
        'etc/logstash/jvm.options'
        'etc/logstash/log4j2.properties'
        'etc/logstash/logstash.yml'
        'etc/logstash/pipelines.yml')
_jrubydist=jruby-dist-${_jrubyver}-bin.tar.gz
source=($_pkgname-$pkgver.tar.gz::https://github.com/elastic/logstash/archive/refs/tags/v${pkgver}.tar.gz
        https://repo1.maven.org/maven2/org/jruby/jruby-dist/${_jrubyver}/${_jrubydist}
	build.patch
        logstash.service
        logstash@.service
        logstash-sysuser.conf
        logstash-tmpfile.conf
        bundle.config)
noextract=(${_jrubydist})
sha256sums=('a3f35a1e0f7f7982eac73059aadece589b7c17fa655aafd0c592a2fead192c30'
            '1f74885a2d3fa589fcbeb292a39facf7f86be3eac1ab015e32c65d32acf3f3bf'
            '9ae56b463b465f16363f60670c7da4e84a9bf03c17324c4364c089d7a480cb4b'
            '2b8b29297202334c784fdd7f2eb8d7e776c24c783b3c9f8387b500ab0039335c'
            'a01ea29d4f53d785f6eb926ebfe445e64ed5b3dab5d0418848589dd79502d876'
            '18a68a59ddb0ce19778e83b65e68dd568d65b7180bf45b4cf298fb332d69eb26'
            '346b630484f8a35b1a549e94e53e3e151527852a29c72cc6e529221215a7f533'
            'fe05315345e4489458c3eecac43726800109c1e390e74a14584096f6c041fee1')
sha512sums=('1a52ee40cc2f6c49b810464e221872abb4933bb63f97d41aaf28661a35797dd3f18ae211b2d17839d3658112eb8ef0d83438cfaa7ffadb608c9f943eadec5c8f'
            '3740674035e27cf7961b3570ad65536c30faab1c9a71a42a696b173379e79647411d57e0d1d06b5f9c9a970eb02a595a559191af08a083773dc4601dcfd07491'
            'f6ddf9cc70a2c0cabaacf39fa26953c15af0060711713b2de69caddd2b8f845edde535f002cd7a0d0f8fc01abf934d887278fb6617b2a3d640284bc16ea34927'
            '817097565519dc7c5eac7521339947c74c6148683ca594356dd2ceb3274a1e94f8e7318ce310e0fe5789d7ab0d4c23404f814bef31036a11ddfec08d16814c69'
            'ce2cef4a784845b00d7c867273555811450bc459669abb5be944bfbbb02708129983e45376a9b308d6db22b2c7b4a7a212827a4826f2a27bc7e143cebc9abfe0'
            'd811dc3b18d0032b79b4669c9f6aefca49963897c309d83cbf87616c7b8cb5944c17c8072980bcd115d0fb57ef1624d98259ff1082d402d308c33e766ee89699'
            '05ea8af97c4f6ac9ba5518b99dc3136859edd24d8376940b48b8c7a70586c8bc188deb1079a99e19d437c39e0eb17d68e7cc3f9af4aa3ad2bc6a87c08cae94a6'
            '5091aa34cc31acd50fd2865714080cf6e67c2d437424f27e001bb409c2885a0e82eabe4ce17461d60c181f460a16df0a03d53bac6015fb731b3e5225735fd4da')

prepare() {
  cd ${_pkgname}-${pkgver}
  rm bin/*.bat
  sed -e 's|LS_SETTINGS_DIR=.*|LS_SETTINGS_DIR="/etc/logstash"|' -i config/startup.options
  sed -e '1i [ -f /etc/profile.d/jre.sh ] && . /etc/profile.d/jre.sh' -i bin/logstash.lib.sh

  # remove deprecated JVM options
  sed 's|"-XX:+UseParNewGC", ||g' -i logstash-core/benchmarks/build.gradle
  sed 's|-XX:+UseParNewGC||g' -i config/jvm.options

  # patch -p1 -i "$srcdir"/build.patch

  # Use system gradle (currently not working)
  # sed 's;./gradlew;gradle;g' -i rakelib/*.rake

  # Skip downloadAndInstallJRuby task in the bootstrap process
  sed /downloadAndInstallJRuby/d -i rakelib/vendor.rake

  mkdir -p vendor/_/
  cd vendor/_/
  ln -s "$srcdir"/${_jrubydist}
}

build() {
  cd ${_pkgname}-${pkgver}
  export PATH="/usr/lib/jvm/java-10-openjdk/bin:$PWD/vendor/jruby/bin:$PATH"

  # gradle -x :logstash-core:javadoc bootstrap (system gradle currently not working)
  RELEASE=1 OSS=1 ./gradlew -x :logstash-core:javadoc installDefaultGems

  rm -r build ci logstash-core/{build,src,spec} qa pkg spec rakelib tools .gradle \
        vendor/_ vendor/bundle/jruby/*/cache vendor/jruby/lib/ruby/gems/shared/cache

  cd vendor/jruby/lib
  mv jni jni-temp
  mkdir jni
  mv jni-temp/x86_64-Linux jni/
  rm -rf jni-temp
}

package() {
  cd ${_pkgname}-${pkgver}

  install -dm 755 "${pkgdir}/usr/share/logstash" "${pkgdir}/etc/conf.d"
  mv config/startup.options "${pkgdir}/etc/conf.d/logstash"
  mv config "${pkgdir}/etc/logstash"
  chmod 750 "${pkgdir}/etc/logstash"

  cp -a bin data lib logstash* modules vendor Gemfile* x-pack "${pkgdir}/usr/share/logstash"
  rm -rf "${pkgdir}/usr/share/logstash/logstash-core/"{.lock,benchmarks,*gradle*}
  chmod -R go-w "${pkgdir}/usr/share/logstash/"

  install -Dm 644 "${srcdir}"/{logstash.service,logstash@.service} -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 "${srcdir}/logstash-sysuser.conf" "${pkgdir}/usr/lib/sysusers.d/logstash.conf"
  install -Dm 644 "${srcdir}/logstash-tmpfile.conf" "${pkgdir}/usr/lib/tmpfiles.d/logstash.conf"
  install -Dm 644 "${srcdir}/bundle.config" "${pkgdir}/usr/share/logstash/.bundle/config"

  install -dm 755 "${pkgdir}/var/lib/logstash"
  install -dm 755 "${pkgdir}/var/log/logstash"
  install -dm 755 "${pkgdir}/etc/logstash/conf.d"

  install -d "${pkgdir}/usr/bin"
  ln -s /usr/share/logstash/bin/logstash "${pkgdir}/usr/bin/logstash"
}

# vim: ts=2 sw=2 et:
