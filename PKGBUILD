# Copyright 2018 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Maintainer: Lorenzo Castelli <lcastelli@google.com>
# Maintainer: Samuel Littley <samuellittley@google.com>

pkgname='build-arch-gce'
pkgver=0.6
pkgrel=1
pkgdesc='Builds an Arch image for Google Compute Engine'
arch=('any')
url='https://github.com/GoogleCloudPlatform/compute-archlinux-image-builder'
license=('Apache')
depends=('arch-install-scripts' 'e2fsprogs')
source=("$pkgname-$pkgver.tar.gz::https://github.com/GoogleCloudPlatform/compute-archlinux-image-builder/archive/$pkgver.tar.gz")
sha256sums=('2e611d5c9ba793bfbdaf9ca4cbf72c901bf349bd93d24db25db30c3ea35f50e9')

package() {
	cd "compute-archlinux-image-builder-$pkgver"
	install -m755 -Dt "$pkgdir/usr/bin/" build-arch-gce
}
