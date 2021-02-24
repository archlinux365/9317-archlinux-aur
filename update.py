import sys
import subprocess
import json
import string
from pathlib import Path

# Script to update the PKGBUILD to the latest [core]/linux

def get_info(pkgname):
    url = f"https://archlinux.org/packages/core/x86_64/{pkgname}/json/"
    data = subprocess.check_output(['curl', '-s', url]).decode()
    return json.loads(data)

class Template(string.Template):
    delimiter="%"

def arr(name, values):
    delimiter = '\n' + ' ' * (len(name) + 4)
    values = [f"'{value}'" if ':' in value else value for value in values]
    return f"{name}=({delimiter.join(values)})"

kern_info = get_info('linux')
headers_info = get_info('linux-headers')
docs_info = get_info('linux-docs')

template = Template(Path('PKGBUILD.template').read_text())

pkgbuild = template.substitute(
    KERNVER=kern_info['pkgver'].rsplit('.', 1)[0],
    ARCHVER=kern_info['pkgver'].rsplit('.', 1)[1],
    PKGVER=kern_info['pkgver'],
    PKGREL=kern_info['pkgrel'],
    URL=kern_info['url'],
    KERN_PKGDESC=kern_info['pkgdesc'],
    KERN_DEPENDS=arr("depends", kern_info['depends']),
    KERN_CONFLICTS=arr("conflicts", kern_info['conflicts'] + ['"${_pkgname}"']),
    KERN_OPTDEPENDS=arr("optdepends", kern_info['optdepends']),
    KERN_PROVIDES=arr("provides", kern_info['provides']),
    KERN_REPLACES=arr("replaces", kern_info['replaces']),
    HEADERS_PKGDESC=headers_info['pkgdesc'],
    HEADERS_DEPENDS=arr("depends", headers_info['depends']),
    HEADERS_CONFLICTS=arr(
        "conflicts", headers_info['conflicts'] + ['"${_pkgname}-headers"']
    ),
    HEADERS_OPTDEPENDS=arr("optdepends", headers_info['optdepends']),
    HEADERS_PROVIDES=arr("provides", headers_info['provides']),
    HEADERS_REPLACES=arr("replaces", headers_info['replaces']),
    DOCS_PKGDESC=docs_info['pkgdesc'],
    DOCS_DEPENDS=arr("depends", docs_info['depends']),
    DOCS_CONFLICTS=arr("conflicts", docs_info['conflicts'] + ['"${_pkgname}-docs"']),
    DOCS_OPTDEPENDS=arr("optdepends", docs_info['optdepends']),
    DOCS_PROVIDES=arr("provides", docs_info['provides']),
    DOCS_REPLACES=arr("replaces", docs_info['replaces']),
)

# Delete empty arrays:
pkgbuild = '\n'.join(line for line in pkgbuild.splitlines() if not line.endswith('=()'))
Path('PKGBUILD').write_text(pkgbuild + '\n')

if subprocess.check_output(['git', 'diff', 'PKGBUILD']).strip():
    print("linux-versioned-bin is out of date!")
    subprocess.check_call(['updpkgsums'])

    with open('.SRCINFO', 'w') as f:
        f.write(subprocess.check_output(['makepkg', '--printsrcinfo']).decode())

    subprocess.check_call(['git', 'add', 'PKGBUILD', '.SRCINFO'])
    subprocess.check_call(
        ['git', 'commit', '-m', f"{kern_info['pkgver']}-{kern_info['pkgrel']}"]
    )

    def yn_choice(message, default='y'):
        try:
            choices = 'Y/n' if default.lower() in ('y', 'yes') else 'y/N'
            choice = input("%s\n(%s): " % (message, choices))
            values = ('y', 'yes', '') if default == 'y' else ('y', 'yes')
            return choice.strip().lower() in values
        except (KeyboardInterrupt, EOFError):
            sys.exit(1)

    if yn_choice('git push?'):
        subprocess.check_call(['git', 'push'])
else:
    print("linux-versioned-bin is up to date")
