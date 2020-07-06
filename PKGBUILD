# Maintainer: eomanis at web dot de

pkgname='getgarfield'
_pkgverUpstream="0.2.2"
pkgver="${_pkgverUpstream//-/.}"
pkgrel=1
pkgdesc="Java application that downloads all Garfield comic strips"
arch=('any')
url='https://eomanis.duckdns.org/permshare/getgarfield/'
license=('GPL3')
depends=('java-runtime-headless>=8' 'bash')
makedepends=('java-environment>=8')
source=("https://eomanis.duckdns.org/permshare/getgarfield/getgarfield-${_pkgverUpstream}.tar.gz")
sha384sums=('9ddd57b2bef90198439c5c8f9b7dea668eed38ca3e4e6b8ca9f4a0662e140f2ef1acb37efbd970cb1156c4bd3e4b250c')

build() {
    local IFS=$'\n'
    local programEntryPoint="getgarfield.GetGarfield"
    local -a jarItemsArgs
    
    # Create a clean jar directory representing the contents of the .jar
    # file that is being built
    rm -rf jar
    mkdir -p jar
    
    # Populate the jar directory
    echo "Preparing temporary .jar directory" >&2
    # Copy everything from the src subdirectory into jar
    rsync -rWtl "${pkgname}-${_pkgverUpstream}/src/" jar
    # Copy all top-level items from the sources directory into jar
    # except the src subdirectory and any .hidden files
    find "${pkgname}-${_pkgverUpstream}" -mindepth 1 -maxdepth 1 -not -name 'src' -not -name '.*' -exec rsync -rWtl '{}' jar ';'
    
    # Compile the sources to .class files into jar
    echo "Compiling java sources" >&2
    javac -source 8 -classpath "" -d jar -encoding UTF-8 \
        $(find jar -type f -name '*.java' -print)
    
    # Create a versioned runnable .jar file containing the contents of
    # the jar directory and having the correct program entry point
    echo "Creating getgarfield-${pkgver}.jar" >&2
    while read -rsd $'\n' item; do
        jarItemsArgs+=( -C )
        jarItemsArgs+=( jar )
        jarItemsArgs+=( "$item" )
    done < <(find jar -mindepth 1 -maxdepth 1 -printf '%P\n')
    jar ce "$programEntryPoint" \
        "${jarItemsArgs[@]}" \
        > "getgarfield-${pkgver}.jar"
    
    # Create a bash launcher
    echo -n \
'#!/bin/bash
/usr/bin/java -jar "$(dirname "$0")"/getgarfield.jar "$@"
'       > getgarfield
}

package() {
    mkdir -p "${pkgdir}/usr/bin"
    cd "${pkgdir}/usr/bin"
    
    # Place the .jar file and create a non-versioned symlink to it
    cp --target-directory . "${srcdir}/getgarfield-${pkgver}.jar"
    chmod u=rwx,go=rx "getgarfield-${pkgver}.jar"
    ln -s "/usr/bin/getgarfield-${pkgver}.jar" "getgarfield.jar"
    
    # Place the bash launcher
    cp --target-directory . "${srcdir}/getgarfield"
    chmod u=rwx,go=rx "getgarfield"
}
