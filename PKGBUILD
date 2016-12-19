pkgname=powerline-i3-git
pkgver=1.1.5
pkgrel=2
pkgdesc="The ultimate statusline/prompt utility. A fork containing more features for the i3 window manager."
arch=('i686' 'x86_64')
url="https://github.com/ph111p/powerline"
license=('MIT')
depends=(
  'python'
  'powerline-fonts-git'
  'lemonbar-xft-git'
  'ttf-font-awesome'
)
optdepends=(
  'i3ipc-python-git: workspace segment'
  'wpa_actiond: wireless segment'
  'wireless_tools: wireless segment'
  'python-iwlib: wireless segment'
  'python-pyalsaaudio: volume segment'
  'python-psutil: cpu load segment'
)
makedepends=(
  'python-setuptools'
)
provides=('powerline-i3')
conflicts=('powerline', 'python-powerline')
install=$pkgname.install

source=("git://github.com/ph111p/powerline.git")
sha512sums=('SKIP')

package() {
    cd powerline

    python setup.py install --root="${pkgdir}" --optimize=1
}
