# Maintainer: Lari Tikkanen <lartza@wippies.com>

pkgname=youtube-dl-git
_gitname="youtube-dl"
pkgver=2020.11.12.r0.28f9568a8
pkgrel=1
pkgdesc="A small command-line program to download videos from YouTube.com and a few more sites (git version)"
arch=('any')
url="http://ytdl-org.github.io/youtube-dl/"
license=('custom')
depends=('python' 'python-setuptools')
makedepends=('git' 'pandoc')
optdepends=('ffmpeg: for video post-processing'
            'rtmpdump: for rtmp streams support'
            'atomicparsley: for embedding thumbnails into m4a files'
            'phantomjs: for openload support')
provides=("youtube-dl")
conflicts=("youtube-dl")
source=('git+https://gitlab.com/dstftw/youtube-dl.git')
md5sums=('SKIP')

pkgver() {
  cd $_gitname
  printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
  cd $_gitname
  sed -i 's|etc/bash_completion.d|share/bash-completion/completions|' setup.py
  sed -i 's|etc/fish/completions|share/fish/completions|' setup.py
}

build() {
  cd $_gitname
  make pypi-files zsh-completion
}

package() {
  cd $_gitname
  python setup.py install --root="${pkgdir}/" --optimize=1
  mv "${pkgdir}/usr/share/bash-completion/completions/youtube-dl.bash-completion" \
     "${pkgdir}/usr/share/bash-completion/completions/youtube-dl"
  install -Dm644 youtube-dl.zsh "${pkgdir}/usr/share/zsh/site-functions/_youtube-dl"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
