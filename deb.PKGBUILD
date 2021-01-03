# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Rudi [KittyCash] <rudi@skycoinmail.com>
_projectname=skycoin
pkgname=skywire
_pkgname=${pkgname}
_githuborg=${_projectname}
pkgdesc="Skywire Mainnet Node implementation. Develop Banch. Debian package"
#set to native architecture with dpkg
_pkgarch=$(dpkg --print-architecture)
#Uncoment to select architecture - cross compile not working currently
#_pkgarch=amd64
#_pkgarch=arm64
#_pkgarch=armhf
#leave arch package as any
arch=('any')
#manually version for now
_pkgver='0.3.0'
#_tag_ver='v0.3.0'
pkgver=${_pkgver}
#pkgver='autogenerated'
#pkgrel keeps getting reset when build is run
_pkgrel=3
#pkgrel=3
pkgrel=${_pkgrel}
_pkggopath="github.com/${_githuborg}/${_pkgname}"
url="https://${_pkggopath}"
license=()
#make deps for every architecture are included here..
makedepends=('dpkg' 'git' 'go' 'musl' 'kernel-headers-musl') #'aarch64-linux-musl' 'arm-linux-gnueabihf-musl' 'skycoin-keyring')
depends=()
_debdeps="reprepro"
#_debdeps=""
_scripts="skywire-deb-scripts"
#source=("git+${url}.git#branch=${BRANCH:-develop}"
#build to needed commit because of develop branch instability
source=("git+${url}.git" ##branch=${BRANCH:-develop}"
"${_scripts}.tar.gz"  )
#'deb.PKGBUILD.sig'   #skip the pgp checks for now as makepkg and yay handle it differently
#'deb.PKGBUILD')
sha256sums=('SKIP'
            '418772371bcf4a7bcae764e29bfb9cd6e71dd63d05954c7dd381c078d50b1d4c')
#            'SKIP'
#            'SKIP')
#validpgpkeys=('DE08F924EEE93832DABC642CA8DC761B1C0C0CFC')  # Moses Narrow <moe_narrow@use.startmail.com>

#tar -czvf skywire-deb-scripts.tar.gz skywire-deb-scripts
#updpkgsums deb.PKGBUILD

#omit this and manually version for now
#pkgver() {
	#cd "${srcdir}/${_pkgname}"
  #local _version=$(git describe --abbrev=0 | tr --delete v)
	#local _version=${_version//-/_}
	#local _date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	#local _count=$(git rev-list --count HEAD)
	#local _commit=$(git rev-parse --short HEAD)
	#echo "${_pkgver}_${_date}.${_count}_${_commit}_${BRANCH:-develop}"
#  echo "${_pkgver}"
#}

prepare() {
#skip signature verification for now because yay handles it differently than makepkg
	#verify PKGBUILD signature
#	gpg --verify ${srcdir}/deb.PKGBUILD.sig ${srcdir}/deb.PKGBUILD

  # https://wiki.archlinux.org/index.php/Go_package_guidelines
	mkdir -p ${srcdir}/go/src/github.com/${_githuborg}/ ${srcdir}/go/bin.${_pkgarch} ${srcdir}/go/apps.${_pkgarch}
  ln -rTsf ${srcdir}/${_pkgname} ${srcdir}/go/src/${_pkggopath}
  cd ${srcdir}/go/src/${_pkggopath}/

  [[ $CARCH == "x86_64" ]] && git checkout develop || git checkout d156980280fdb2ddfc8765ff77cdd55c0b7e9d9c
}

build() {
local GOPATH=${srcdir}/go
local GOBIN=${GOPATH}/bin.${_pkgarch}
local _GOAPPS=${GOPATH}/apps.${_pkgarch}
local GOOS=linux
export CC=musl-gcc
  #static cross-compilation
  #[[ $_pkgarch == "amd64" ]] && local GOARCH=amd64 && local CC=musl-gcc
  #[[ $_pkgarch == "arm64" ]] && local GOARCH=arm64 && local CC=aarch64-linux-musl-gcc
  #[[ $_pkgarch == "armhf" ]] && local GOARCH=arm && local GOARM=6 && local CC=arm-linux-gnueabihf-musl-gcc

#_ldflags=('-linkmode external -extldflags "-static" -buildid=')

#${_defaults} ${_goarch}
#create read only cache binary
cd ${srcdir}/${_scripts}/skycache
go build -trimpath --ldflags '-s -w -linkmode external -extldflags "-static" -buildid=' -o $GOBIN/ skycache.go

#create the skywire binaries
cd ${srcdir}/go/src/${_pkggopath}
_cmddir=${srcdir}/go/src/${_pkggopath}/cmd

_buildbins skychat $_GOAPPS apps/
_buildbins skysocks $_GOAPPS apps/
_buildbins skysocks-client $_GOAPPS apps/
_buildbins vpn-client $_GOAPPS apps/
_buildbins vpn-server $_GOAPPS apps/
_buildbins skywire-visor $GOBIN
_buildbins skywire-cli $GOBIN
_buildbins setup-node $GOBIN
#_msg2 'building hypervisor binary'  #hypervisor has been combined with the visor
#cd ${_cmddir}/hypervisor
#go build -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOBIN/ .

#binary transparency
cd $GOBIN
_msg2 'binary sha256sums'
sha256sum $(ls)
cd $_GOAPPS
sha256sum $(ls)


#create control file for the debian package
echo "Package: skywire" > ${srcdir}/${_pkgarch}.control
echo "Version: ${_pkgver}-${_pkgrel}" >> ${srcdir}/${_pkgarch}.control
echo "Priority: optional" >> ${srcdir}/${_pkgarch}.control
echo "Section: web" >> ${srcdir}/${_pkgarch}.control
echo "Architecture: ${_pkgarch}" >> ${srcdir}/${_pkgarch}.control
echo "Depends: ${_debdeps}" >> ${srcdir}/${_pkgarch}.control
echo "Maintainer: github.com/the-skycoin-project" >> ${srcdir}/${_pkgarch}.control
echo "Description: ${pkgdesc}" >> ${srcdir}/${_pkgarch}.control

#create control file for the hypervisorkey debian package
echo "Package: hypervisorkey" > ${srcdir}/${_pkgarch}.hypervisorkey.control
#TO DO: revise versioning for satellite packages
echo "Version: 1" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Priority: optional" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Section: web" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Architecture: ${_pkgarch}" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Depends: ${_pkgname}" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Maintainer: github.com/the-skycoin-project" >> ${srcdir}/${_pkgarch}.hypervisorkey.control
echo "Description: package for the hypervisor key" >> ${srcdir}/${_pkgarch}.hypervisorkey.control

#create control file for the skywire-save debian package
echo "Package: skywire-save" > ${srcdir}/${_pkgarch}.skywire-save.control
#TO DO: revise versioning for satellite packages
echo "Version: 1" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Priority: optional" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Section: web" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Architecture: ${_pkgarch}" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Depends: ${_pkgname}" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Maintainer: github.com/the-skycoin-project" >> ${srcdir}/${_pkgarch}.skywire-save.control
echo "Description: easy backup and restore skywire configuration" >> ${srcdir}/${_pkgarch}.skywire-save.control
}

#I had to speed up the build for testing but there's a risk of using old binaries.
#will change this when the commit for the build tracks a branch
_buildbins() {
_GOHERE=$2  #target bin dir
_binpath=$3   #find the binary here- expecting 'apps/' or empty
_binname=$1 #which binary to build
_msg2 "building ${_binname} binary"
if [[ ! -f ${_GOHERE}/${_binname} ]] ; then #don't waste time rebuilding existing bins
	cd ${_cmddir}/${_binpath}${_binname}
  go build -trimpath --ldflags '-s -w -linkmode external -extldflags "-static" -buildid=' -o $_GOHERE/ .
fi
}


package() {
_msg2 'creating dirs'
#set up to create a .deb package
_debpkgdir="${_pkgname}-${pkgver}-${_pkgrel}-${_pkgarch}"
_pkgdir="${pkgdir}/${_debpkgdir}"
_skydir="opt/skywire"
_skyapps="${_skydir}/apps"
_skyscripts="${_skydir}/scripts"
_systemddir="etc/systemd/system"
_skybin="${_skydir}/bin"
mkdir -p ${_pkgdir}/usr/bin
#this was done at my discretion for tls autoconfig
mkdir -p ${_pkgdir}/${_skydir}/ssl
#the skeleton of the hyperviorkey package; created with a script run on target machines
mkdir -p ${_pkgdir}/${_skydir}/hypervisorkey/opt/${_pkgname}
#other dirs must be created or the visor will create them at runtime with weird permissions
mkdir -p ${_pkgdir}/${_skydir}/local
mkdir -p ${_pkgdir}/${_skydir}/dmsgpty
mkdir -p ${_pkgdir}/${_skydir}/${_pkgname}    #needed?
mkdir -p ${_pkgdir}/${_skydir}/skycache    #local package repository
mkdir -p ${_pkgdir}/${_skydir}/transport_logs
mkdir -p ${_pkgdir}/${_skydir}/scripts

cd $_pkgdir

_msg2 'installing binaries'
#loop to install the binaries
_skywirebins=$( ls ${srcdir}/go/bin.${_pkgarch} )
for i in ${_skywirebins}; do
  _msg2 "$i"
  _install2 ${srcdir}/go/bin.${_pkgarch}/${i} ${_skybin}
done

_msg2 'installing apps'
#loop to install the apps
_skywireapps=$( ls ${srcdir}/go/apps.${_pkgarch} )
for i in ${_skywireapps}; do
  _msg2 "$i"
  _install2 ${srcdir}/go/apps.${_pkgarch}/${i} ${_skyapps}
done


_msg2 'installing scripts'
_skywirescripts=$( ls ${srcdir}/${_scripts}/${_pkgname} )
for i in ${_skywirescripts}; do
  _install2 ${srcdir}/${_scripts}/${_pkgname}/${i} ${_skyscripts}
done

_msg2 'renaming skywire-visor to skywire'
mv ${_pkgdir}/usr/bin/${_pkgname}-visor ${_pkgdir}/usr/bin/${_pkgname}

_msg2 'installing skywire systemd services'
install -Dm644 ${srcdir}/${_scripts}/${_pkgname}.service ${_pkgdir}/${_systemddir}/${_pkgname}.service
install -Dm644 ${srcdir}/${_scripts}/${_pkgname}-visor.service ${_pkgdir}/${_systemddir}/${_pkgname}-visor.service

_msg2 'installing tls key and certificate generation scripts'
#install -Dm755 ${srcdir}/${_pkgname}/static/skywire-manager-src/ssl/generate-1.sh ${pkgdir}/${_skydir}/ssl/generate.sh
install -Dm755 ${srcdir}/${_scripts}/generate.sh ${_pkgdir}/${_skydir}/ssl/generate.sh
ln -rTsf ${_pkgdir}/${_skydir}/ssl/generate.sh ${_pkgdir}/usr/bin/skywire-tls-gen
#install -Dm644 ${srcdir}/${_pkgname}/static/skywire-manager-src/ssl/certificate.cnf ${pkgdir}/${_skydir}/ssl/certificate.cnf
install -Dm644 ${srcdir}/${_scripts}/certificate.cnf ${_pkgdir}/${_skydir}/ssl/certificate.cnf

_msg2 'installing `hypervisorkey` control file and postinst script'
install -Dm755  ${srcdir}/${_pkgarch}.hypervisorkey.control  ${_pkgdir}/${_skydir}/hypervisorkey/DEBIAN/control
install -Dm755  ${srcdir}/${_scripts}/hypervisorkey/hypervisorkey.postinst  ${_pkgdir}/${_skydir}/hypervisorkey/DEBIAN/postinst
install -Dm755  ${srcdir}/${_scripts}/hypervisorkey/hypervisorkey.postrm  ${_pkgdir}/${_skydir}/hypervisorkey/DEBIAN/postrm

_msg2 'installing `skywire-save` control file and postinst postrm and script'
install -Dm755  ${srcdir}/${_pkgarch}.skywire-save.control  ${_pkgdir}/${_skydir}/skywire-save/DEBIAN/control
install -Dm755  ${srcdir}/${_scripts}/skywire-save/skywire-save.postinst  ${_pkgdir}/${_skydir}/skywire-save/DEBIAN/postinst
install -Dm755  ${srcdir}/${_scripts}/skywire-save/skywire-save.postrm  ${_pkgdir}/${_skydir}/skywire-save/DEBIAN/postrm

_msg2 'installing skycache systemd services'
install -Dm644 ${srcdir}/${_scripts}/skycache/skycache.service ${_pkgdir}/${_systemddir}/skycache.service

_msg2 'installing skywire control file, postinst & postrm scripts'
install -Dm755 ${srcdir}/${_pkgarch}.control ${_pkgdir}/DEBIAN/control
install -Dm755 ${srcdir}/${_scripts}/postinst.sh ${_pkgdir}/DEBIAN/postinst
install -Dm755 ${srcdir}/${_scripts}/postrm.sh ${_pkgdir}/DEBIAN/postrm

_msg2 'creating the debian package'
#create the debian package
cd $pkgdir
dpkg-deb --build -z9 ${_debpkgdir}
mv *.deb ../../
#exit so the arch package doesn't get built
exit
}

_install2() {
_binname="${1##*/}"
_binname="${_binname%%.*}"
install -Dm755 ${1} ${_pkgdir}/${2}/${_binname}
ln -rTsf ${_pkgdir}/${2}/${_binname} ${_pkgdir}/usr/bin/${_binname}
chmod +x ${_pkgdir}/usr/bin/${_binname}
}

_msg2() {
	(( QUIET )) && return
	local mesg=$1; shift
	printf "${BLUE}  ->${ALL_OFF}${BOLD} ${mesg}${ALL_OFF}\n" "$@"
}
