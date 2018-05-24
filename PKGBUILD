# Maintainer: Edmund Wu <fangkazuto@gmail.com>

pkgname=kother-meta
pkgver=0.1.1
pkgrel=1
pkgdesc='Other packages'
arch=('x86_64')
url='https://gitlab.com/eadwu/pkgbuilds'
license=('unknown')
depends=('adapta-gtk-theme'
         'ark'
         'autopep8'
         'avahi'
         'blender'
         'broadcom-wl-dkms'
         'clang'
         'cmake'
         'cmatrix'
         'cmus'
         'conky'
         'cups'
         'cups-pdf'
         'deepin-gtk-theme'
         'devtools'
         'docker'
         'dotnet-host'
         'dotnet-runtime'
         'dotnet-sdk'
         'fcron'
         'feh'
         'gimp'
         'git'
         'gitlab-runner'
         'glslang'
         'gnome-themes-extra'
         'gtk-engine-murrine'
         'gulp'
         'hplip'
         'htop'
         'hunspell-en'
         'hyphen-en'
         'java-environment-common'
         'java-runtime-common'
         'jdk8-openjdk'
         'jdk9-openjdk'
         'lib32-libpulse'
         'lib32-mesa'
         'libmythes'
         'libreoffice-fresh'
         'lm_sensors'
         'lsb-release'
         'luarocks'
         'maven'
         'mono'
         'mpd'
         'mythes-en'
         'ncmpcpp'
         'nodejs'
         'noto-fonts-cjk'
         'npm'
         'openssh'
         'openvpn'
         'p7zip'
         'pacutils'
         'pepper-flash'
         'perl-eval-closure'
         'perl-log-log4perl'
         'perl-namespace-autoclean'
         'perl-params-validationcompiler'
         'perl-specio'
         'perl-unicode-linebreak'
         'perl-yaml-tiny'
         'php'
         'powertop'
         'pycharm-community-edition'
         'python2-autopep8'
         'python2-google-api-python-client'
         'python2-pip'
         'python2-pylint'
         'python-beautifulsoup4'
         'python-fonttools'
         'python-google-api-python-client'
         'python-matplotlib'
         'python-pip'
         'python-pylint'
         'qt5-tools'
         'ranger'
         'rclone'
         'redshift'
         'rofi'
         'ruby'
         'ruby-sass'
         'rustup'
         'scrot'
         'simplescreenrecorder'
         'steam'
         'texlive-bibtexextra'
         'texlive-core'
         'texlive-fontsextra'
         'texlive-formatsextra'
         'texlive-games'
         'texlive-humanities'
         'texlive-latexextra'
         'texlive-music'
         'texlive-pictures'
         'texlive-pstricks'
         'texlive-publishers'
         'texlive-science'
         'tidy'
         'tlp'
         'ttf-liberation'
         'ttf-ubuntu-font-family'
         'unrar'
         'unzip'
         'vim'
         'vivaldi-snapshot'
         'vivaldi-snapshot-ffmpeg-codecs'
         'vlc'
         'wget'
         'wine'
         'wine_gecko'
         'wine-mono'
         'winetricks'
         'woff2'
         'xclip'
         'yarn'
         'youtube-dl'
         'zip'
         'zsh'
)
source=('powertop.service')
sha256sums=('8ac93c58be13f91b5fba180b4dc528d3b36fc5e1c842b5b2e146bc135327db2d')

package () {
  install -Dm 0644 powertop.service "${pkgdir}/etc/systemd/system/powertop.service"
}
