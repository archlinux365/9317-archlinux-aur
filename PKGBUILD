# Maintainer: MGislv <nocentinigabriele91@gmail.com>
# Contributor: mesmer <mesmer@fisica.if.uff.br>
# Contributor: xiretza <xiretza+aur@gmail.com>
# Contributor: TJM <tommy.mairo@gmail.com>

# Directly based off of the official package

pkgname=vim-clipboard
pkgver=8.2.3441
pkgrel=2
pkgdesc='Vi Improved, a highly configurable, improved version of the vi text editor'
url='https://www.vim.org'
arch=('x86_64')
license=('custom:vim')
depends=('vim-runtime' 'gpm' 'acl' 'glibc' 'libxt' 'libgcrypt' 'zlib')
makedepends=('glibc' 'libgcrypt' 'gpm' 'python2' 'python' 'ruby' 'libxt' 'lua'
             'gawk' 'tcl' 'pcre' 'zlib')
optdepends=('python2: Python 2 language support'
            'python: Python 3 language support'
            'ruby: Ruby language support'
            'lua: Lua language support'
            'perl: Perl language support'
            'tcl: Tcl language support')
conflicts=('vim' 'gvim' 'vim-minimal' 'vim-python3')
provides=('xxd' 'vim' 'vim-minimal' 'vim-python3' 'vim-plugin-runtime')
replaces=('vim' 'vim-python3' 'vim-minimal' 'gvim')
source=(https://github.com/vim/vim/archive/v${pkgver}/vim-${pkgver}.tar.gz)
sha256sums=('3db6c3af32b741c2e618358bbf002cffe9db2ab8d21f9ea277110fce54fec4d2')
sha512sums=('1d85fdb2d6b50f0b786a8436d091a084b9ca0bb43c3cfbdeaa329b231b82ea790589b7bae6bdb6e60b2c12c97cc4178ab8e61677e0c1070c805021cfdbc34d5f')

_vimrun_ver=$(pacman -Q vim-runtime | awk '{print $2}')

prepare() {
  if [ "${_vimrun_ver%-*}" = "$pkgver" ]; then
    echo "OK, vim-runtime ver matches $pkgver"
  else
    echo "ERROR, please update vim-runtime"
    exit
  fi
  
  cd vim-${pkgver}/src
  # define the place for the global (g)vimrc file (set to /etc/vimrc)
  sed -E 's|^.*(#define SYS_.*VIMRC_FILE.*").*$|\1|g' -i feature.h
  sed -E 's|^.*(#define VIMRC_FILE.*").*$|\1|g' -i feature.h
  autoconf
}

build() {
  cd vim-${pkgver}
  ./configure \
    --prefix=/usr \
    --localstatedir=/var/lib/vim \
    --with-features=huge \
    --with-compiledby='Arch Linux' \
    --enable-gpm \
    --enable-acl \
    --with-x=yes \
    --disable-gui \
    --enable-multibyte \
    --enable-cscope \
    --enable-netbeans \
    --enable-perlinterp=dynamic \
    --enable-pythoninterp=dynamic \
    --enable-python3interp=dynamic \
    --enable-rubyinterp=dynamic \
    --enable-luainterp=dynamic \
    --enable-tclinterp=dynamic \
    --disable-canberra
  make
}

package() {
  cd vim-${pkgver}
  make -j1 VIMRCLOC=/etc DESTDIR="${pkgdir}" install

  # provided by (n)vi in core
  rm "${pkgdir}"/usr/bin/{ex,view}

  # delete some manpages
  find "${pkgdir}"/usr/share/man -type d -name 'man1' 2>/dev/null | \
    while read _mandir; do
    cd "${_mandir}"
    rm -f ex.1 view.1 # provided by (n)vi
    rm -f evim.1    # this does not make sense if we have no GUI
  done

  # Runtime provided by runtime package
  rm -r "${pkgdir}"/usr/share/vim

  # remove gvim.desktop as not included
  rm "${pkgdir}"/usr/share/applications/gvim.desktop

  # license
  install -Dm 644 runtime/doc/uganda.txt \
    "${pkgdir}"/usr/share/licenses/${pkgname}/license.txt
}

# vim: ts=2 sw=2 et:
