# Maintainer: Benjamin Denhartog <ben@sudoforge.com>
# Contributor: Nikoloz Shvelidze <captain@pirrate.me>
# Contributor: Tim Brown <stimut@gmail.com>

# For ISSUES, REQUESTS, and QUESTIONS:
# https://github.com/sudoforge/pkgbuilds

pkgname=google-cloud-sdk-app-engine-java
pkgver=364.0.0
pkgrel=1
pkgdesc="A google-cloud-sdk component that provides the Java runtime for AppEngine."
url="https://cloud.google.com/sdk/"
license=("Apache")
arch=('x86_64')
options=('!strip')
depends=(
  "google-cloud-sdk"
  "java-environment"
)
source=(
  "https://dl.google.com/dl/cloudsdk/release/downloads/for_packagers/linux/${pkgname}_${pkgver}.orig.tar.gz"
)
sha256sums=('309e80a9fcd578614c83027121b2c859e362fd82451ae58fe8bf73eaf290dd1d')

package() {
  # Install the component manifest file
  install -D -m 0644 \
    "${srcdir}/google-cloud-sdk/.install/app-engine-java.manifest" \
    "${pkgdir}/opt/google-cloud-sdk/.install/app-engine-java.manifest"

  # Install the component metadata snapshot file
  install -D -m 0644 \
    "${srcdir}/google-cloud-sdk/.install/app-engine-java.snapshot.json" \
    "${pkgdir}/opt/google-cloud-sdk/.install/app-engine-java.snapshot.json"

  # Install the component files
  mkdir -p "${pkgdir}/opt/google-cloud-sdk/platform"
  cp -R \
    "${srcdir}/google-cloud-sdk/platform/google_appengine" \
    "${pkgdir}/opt/google-cloud-sdk/platform/google_appengine"
}
