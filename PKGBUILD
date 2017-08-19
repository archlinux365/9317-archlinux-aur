# Maintainer: Charles Milette <charles.milette@gmail.com>

_gitname=Pokemon-Terminal
pkgname=pokemon-terminal-git
pkgver=r7.f91225e
pkgrel=1
pkgdesc="Pokemon terminal themes"
arch=('any')
url="https://github.com/LazoCoder/$_gitname"
license=('GPL3')
depends=('python>=3.5')
optdepends=('gnome-shell: support changing GNOME wallpaper'
            'terminology: support changing Terminology background'
            'tilix: support changing Tilix background')
makedepends=('git')
source=("https://github.com/LazoCoder/$_gitname/archive/master.zip")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$_gitname-master"

  rm .npmignore .gitignore LICENSE package.json README.md unittest.py .travis.yml test_* load_all_pokemon.py
  rm -r Samples/

  IFS=$'\n'
  for file in `find -type f`
  do
    install -Dm 644 "$file" "${pkgdir}/opt/pokemon-terminal/$file"
  done

  chmod 755 "${pkgdir}/opt/pokemon-terminal/main.py"

  mkdir -p "${pkgdir}/usr/bin"
  ln -s "/opt/pokemon-terminal/main.py" "${pkgdir}/usr/bin/pokemon"
  ln -s "/opt/pokemon-terminal/main.py" "${pkgdir}/usr/bin/ichooseyou"
}
