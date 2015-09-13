#!/bin/bash

# Maintainer: Sibren Vasse <arch at sibrenvasse dot nl>
# Contributor: Dominic Finke <arch at realbig dot de>

_lang='en-US'

# Source directories containing the RPMs to install
_source_dirs=( "${_lang}/RPMS" )

# Install path components as found in RPMs
_install_prefix='opt'
_install_name='openoffice4'
_install_path=${_install_prefix}/${_install_name}

pkgname=openoffice
replaces=('openoffice-base-bin')
pkgver=4.1.1
pkgrel=1
pkgdesc="Repackaged from upstream"
arch=('i686' 'x86_64')
url="http://www.openoffice.org/"
license=('Apache') # see below
# Some depends can be found in the README, some with namcap, some with _extract_depends() below
depends=(
	'freetype2'
	'glibc>=2.5'
	'gtk2>=2.10.4'
	'hicolor-icon-theme'
	'desktop-file-utils' 
	'shared-mime-info' # install script
)
makedepends=(
	'rpmextract'
)
optdepends=(
	'apr-util:           adds apr support'
	'java-environment:   adds java support'
	'gconf:              adds additional gnome support'
	'gstreamer0.10-base: + some gstr-plugins to support multimedia content, e.g. in impress'
	'mesa:               for the OGLTrans extension of impress'
	'mime-types:         provides /etc/mime.types'
	'nss:                adds support for signed files/macros'
	'openoffice-de-bin:  adds additional German language pack'
	'openoffice-nl-bin:  adds additional Dutch language pack'
	'python2:            adds python support'
	'raptor1:            adds rdf support'
	'sqlite:             adds sqlite support'
)
conflicts=( 'openoffice-base-bin-unstable' )
backup=( ${_install_path}/program/sofficerc )
options=(!strip docs)
install=${pkgname}.install
# AUR is tricky
source=( "http://downloads.sourceforge.net/project/openofficeorg.mirror/${pkgver}/binaries/${_lang}/" )
sha256sums=( '0000000000000000000000000000000000000000' )
case "$CARCH"
in i686 )
	source[0]+="Apache_OpenOffice_${pkgver}_Linux_x86_install-rpm_${_lang}.tar.gz"
	sha256sums[0]='a9e9b1b2b0091701b1fa55fef45a89eee2622e9905de1837df0f080258c15e7e'
;; x86_64 )
	source[0]+="Apache_OpenOffice_${pkgver}_Linux_x86-64_install-rpm_${_lang}.tar.gz"
	sha256sums[0]='9c96be69cabb4b4e9c9eea6d732d00eb64017dbf1610e65c7d60a7d0b84fcdcd'
esac

_find_rpms() {
	local dir file
	for dir in "${_source_dirs[@]}"; do
		dir=${srcdir:-src}/${dir}
		( cd "${dir}" ) # check existing
		for file in $( find "${dir}" -type f -name '*.rpm' ); do
			if ! [[ $file == */desktop-integration/* && $file != *-freedesktop-menus-* ]] &&
			   ! [[ $file == */jre-* ]]; then
				echo "${file}"
			elif type -p msg2 >/dev/null; then
				msg2 "Skipping ${file##*/}" >&2
			else
				echo "Skipping ${file##*/}" >&2
			fi
		done
	done
}

_ln_s_t() {
	local dir=$1 prefix=$2
	shift 2
	mkdir -p "$dir"
	local file
	for file in "${@}"; do
		readlink -v -e "${file}" >/dev/null # check existing
		ln -s -T /"${file}" "${dir}/${prefix}${file##*/}"
	done
}

package() {
	cd "${pkgdir}"
	# unpack RPMs
	local file
	for file in $( _find_rpms ); do
		msg2 "Extracting ${file##*/}"
		rpmextract.sh "${file}"
	done
	msg2 "Completing package"
	# remove symlink to avoid conflict with libreoffice-common 3.5.2-1
	# (not used in the desktop files)
	[[ -h usr/bin/soffice ]] && rm -f usr/bin/soffice
	# add licenses (found by find pkg -ipath '*license*')
	_ln_s_t usr/share/licenses/${_pkgname} '' \
		${_install_path}/program/LICENSE
	# Fix python shebang calls
	sed -i -re "1s;^#! *(/usr(/local)?)?/bin/(env +)?python(2[^ ]*)?( |$);#!/usr/bin/env python2 ;" $(
		find ${_install_path}/program/python-core-2.7.6/lib -type f -name '*.py'
	)
#	# link mozilla plugin
#	_ln_s_t usr/lib/mozilla/plugins ${_install_name}- ${_install_path}/program/libnpsoplugin.so
#	# link desktop files
#	_ln_s_t usr/share/applications ${_install_name}- ${_install_path}/share/xdg/*.desktop
#	# get desktop files to do something
#	mkdir -p usr/bin
#	install -m 755 -T <( cat <<EOF
##!/bin/bash
#exec /${_install_path}/program/soffice "$@"
#EOF
#		) usr/bin/${_install_name}

	msg  "Note: For checking the package, you may run: namcap -e elfpaths,emptydir ${pkgname}-${pkgver}-${pkgrel}-${CARCH}.pkg.tar.?z"
}

## Functions for manual usage

# makepkg -o && source PKGBUILD && _list_rpm_depends
# Helper for finding external dependencies
_list_rpm_depends() {
	local file
	for file in $( _find_rpms ); do
		r=$( rpmmeta -t requirename "${file}" | sed -re 's;(ooobasis|ooo-dev|ooodev|openoffice|rpmlib)[^ ]*;;g' )
		[[ $r ]] || continue
		echo ${file##*/} $r
	done
}

# makepkg -o && source PKGBUILD && _find_license_files
# Helper for finding license files
_find_license_files() {
	find pkg -ipath '*license*' -type f
}

# makepkg -o && source PKGBUILD && _make_install_script >${install}.new
# Helper for porting install scripts
_make_install_script() {
	cat <<EOF
#!/bin/bash

# Inappropriate parts should be removed:
# - mime.type stuff is already provided by mime-types package
# - /etc/mailcap does not exist on ArchLinux normaly
# - Don't use 'which' because tools are already in depends

EOF

	for args in 'prein pre_install' 'postin post_install' 'preun pre_remove' 'postun post_remove'; do
		set -- $args
		echo "$2() {"
		echo "  local RPM_INSTALL_PREFIX='${_install_prefix}'"
		echo
		local file code
		for file in $( _find_rpms ); do
			code=$( rpmmeta -t $1 "${file}" )
			[[ $code ]] || continue
			echo "  ( ### ${file##*/} $1"
			echo "$code"
			echo "  )"
			echo
		done
		echo "}"
		echo
	done

cat <<EOF
## arg 1:  the new package version
## arg 2:  the old package version
pre_upgrade() {
  pre_install "\$1"
}

## arg 1:  the new package version
## arg 2:  the old package version
post_upgrade() {
  post_install "\$1"
}

# vim:set ts=2 sw=2 et:
EOF
}
